// Connect to the WebSocket server
console.log("Attempting to connect to WebSocket server");
var ws = new WebSocket('ws://localhost:9900');

// Send a message when the connection is opened
// ws.onopen = function() {
//   var msg = { sender: 'YourUsername', recipient: 'RecipientUsername', text: 'Hello!' };
//   ws.send(JSON.stringify(msg));
// };

// Log any received messages
ws.onmessage = function (event) {
    var msg = JSON.parse(event.data);
    console.log('Received:', msg);
    messages.innerHTML += '<p> From: ' + msg.sender + ' To: ' + msg.recipient + '; ' + msg.text + '</p>';
};

// Send a message to the WebSocket server, display the message yourself
document.getElementById('send').addEventListener('click', function () {
    var recepient = document.getElementById('username').value;
    var message = document.getElementById('message').value;

    // var messages = document.getElementById('messages');
    if (recepient == '' || message == '') {
        alert('Please enter a username and a message.');
        return;
    }

    //Grab your own userName with the fetch request
    var userName = 'Unspecified';
    
    logCookie(document.cookie);

    fetch('/user/me', {
        method: 'GET',
        credentials: 'include', // to include the cookies in the request IDK
      })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        if (!response.headers.get('content-type').includes('application/json')) {
            console.log(response);
            throw new Error('Response was not JSON');
        }
        return response.json();
    })
      .then(data => {
        if (data.userName) {
          userName = data.userName;
        } else {
          console.error('Unauthorized');
        }
      })
      .catch(error => console.error('Error:', error));
      
    //send message to server after turning it into a json object
    message = JSON.stringify({ sender: userName, recipient: recepient, text: message });

    ws.send(message);
    // ws.send(JSON.stringify({ sender: username, recipient: username, text: message }));
});

// async function getUser(email) {
//     // See if we have a user with the given email.
//     const response = await fetch(`/api/user/${email}`);
//     if (response.status === 200) {
//       return response.json();
//     }
  
//     return null;
//   }

function logCookie(cookie) {
    console.log("Logging cookie");
    if (cookie) {
      console.log(cookie.value);
    }
    else {
      console.log("No cookie found");
    }
  }