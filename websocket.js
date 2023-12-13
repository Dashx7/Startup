//Websocket server
const { WebSocketServer } = require('ws');
const uuid = require('uuid');

function WSS(httpServer) {
    const wss = new WebSocketServer({ noServer: true });
    console.log("WebSocket server listening serverless");

    // Handle the protocol upgrade from HTTP to WebSocket
    httpServer.on('upgrade', (request, socket, head) => {
        wss.handleUpgrade(request, socket, head, function done(ws) {
            wss.emit('connection', ws, request);
        });
    });

    let connections = [];
    wss.on('connection', (ws) => { // The wss.on('connection') event handler is called whenever a client connects to the server.
        const connection = { id: uuid.v4(), alive: true, ws: ws };
        connections.push(connection);

        console.log('Client connected');
        ws.on('message', (data) => {
            // Parse the received message
            let msg;
            try { //Make sure the message is valid JSON
                msg = JSON.parse(data);
            } catch (e) {
                console.error('Invalid JSON:', data);
                return;
            }

            // Broadcast the message to all connected clients
            //TODO Maybe change this to send to specific clients
            wss.clients.forEach((client) => {
                // console.log('Client state: %s', client.readyState);
                if (client.readyState === ws.OPEN) {
                    client.send(JSON.stringify(msg));
                }
            });
        });
        // Remove the closed connection so we don't try to forward anymore
        ws.on('close', () => {
            connections.findIndex((o, i) => {
                if (o.id === connection.id) {
                    connections.splice(i, 1);
                    return true;
                }
            });
        });
        // Respond to pong messages by marking the connection alive
        ws.on('pong', () => {
            connection.alive = true;
        });
        // Keep active connections alive
        setInterval(() => {
            connections.forEach((c) => {
                // Kill any connection that didn't respond to the ping last time
                if (!c.alive) {
                    c.ws.terminate();
                } else {
                    c.alive = false;
                    c.ws.ping();
                }
            });
        }, 10000);
    });
}
module.exports = { WSS };