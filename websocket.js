//Websocket server
const { WebSocketServer } = require('ws');
function startServer() {
    const wss = new WebSocketServer({ port: 9900 }); // port 9900 is the port number that the server will listen to for incoming WebSocket connections.
    console.log("WebSocket server listening on port 9900");
    wss.on('connection', (ws) => { // The wss.on('connection') event handler is called whenever a client connects to the server.
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
                if (client.readyState === ws.OPEN)    {
                    client.send(JSON.stringify(msg));
                }
            });
        });
        // ws.send('Hello webSocket'); // The ws.send() method is used to send a message to the client.
        // let text = "Hello webSocket!";
        // msg = JSON.parse(text);
        // console.log('Inbound connection and sending: %s', msg);
        // ws.send(msg); // The ws.send() method is used to send a message to the client.
    });
}
startServer();
module.exports = startServer;