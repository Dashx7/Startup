const { WebSocketServer } = require('ws');

const wss = new WebSocketServer({ port: 9900 });

wss.on('connection', (ws) => {
  ws.on('message', (data) => {
    const msg = String.fromCharCode(...data);
    console.log('received: %s', msg);

    ws.send(`I heard you say "${msg}"`);
  });

  ws.send('Hello webSocket');
});

var myObj = {name: "John", age: 30};
ws.send(JSON.stringify(myObj));

ws.on('message', (data) => {
  var receivedObj = JSON.parse(data);
  console.log(receivedObj.name); // Outputs: John
});