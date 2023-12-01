document.getElementById('send').addEventListener('click', function() {
    var username = document.getElementById('username').value;
    var message = document.getElementById('message').value;
    var messages = document.getElementById('messages');
    if (username == '' || message == '') {
        alert('Please enter a username and a message.');
        return;
    }
    messages.innerHTML += '<p>' + 'To ' + username + ': ' + message + '</p>';
});