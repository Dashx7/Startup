
// Get references to the form elements, allows me to manipulate buttons
const userNameInput = document.getElementById("userNameText");
const passwordInput = document.getElementById("password");
const loginButton = document.getElementById("loginButton");
const registerButton = document.getElementById("registerButton");

// Enable login and register buttons when both fields are filled
userNameInput.addEventListener("input", toggleButtons);
passwordInput.addEventListener("input", toggleButtons);

function toggleButtons() { //This is a function that allows the buttons to be enabled when the fields are filled
    const userNameValue = userNameInput.value.trim();
    const passwordValue = passwordInput.value.trim();

    loginButton.disabled = !(userNameValue && passwordValue);
    registerButton.disabled = !(userNameValue && passwordValue);
}

// Add event listeners for login and register actions
loginButton.addEventListener("click", function (e) {
    e.preventDefault();
    const userName = userNameInput.value;
    const password = passwordInput.value;
    console.log("Logging user with database, username:", userName);
    loginOrRegister(`/api/auth/login`);
});

registerButton.addEventListener("click", async function (e) {
    e.preventDefault();
    const userName = userNameInput.value;
    const password = passwordInput.value;
    console.log("Registering user with database, username:", userName);
    loginOrRegister('/api/auth/register');
});

//New gen login and register
async function loginOrRegister(endpoint) {
    const userName = userNameInput.value;
    const password = passwordInput.value;
    const response = await fetch(endpoint, {
        method: 'post',
        body: JSON.stringify({ email: userName, password: password }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    });

    if (response.ok) {
        localStorage.setItem('userName', userName);
        window.location.href = "https://startup.joshwiseman.click/track-stats.html";
    }
    else {
        const body = await response.json();
        alert(`Login failed: ${body.msg}`);
    }
}