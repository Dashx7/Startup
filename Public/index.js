
// Get references to the form elements, allows me to manipulate buttons
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const loginButton = document.getElementById("loginButton");
const registerButton = document.getElementById("registerButton");

// Enable login and register buttons when both fields are filled
emailInput.addEventListener("input", toggleButtons);
passwordInput.addEventListener("input", toggleButtons);

function toggleButtons() {
    const emailValue = emailInput.value.trim();
    const passwordValue = passwordInput.value.trim();

    loginButton.disabled = !(emailValue && passwordValue);
    registerButton.disabled = !(emailValue && passwordValue);
}

// Add event listeners for login and register actions
loginButton.addEventListener("click", function (e) {
    localStorage.setItem("email", emailInput.value);
    localStorage.setItem("password", passwordInput.value);
    e.preventDefault();
    const userName = localStorage.getItem("email");
    alert("Login for: " + userName + " sucessful!");
    window.location.href = "https://startup.joshwiseman.click/track-stats.html";
});

registerButton.addEventListener("click", function (e) {
    e.preventDefault();
    localStorage.setItem("email", emailInput.value);
    localStorage.setItem("password", passwordInput.value);
    // Add your register logic here
    const userName = localStorage.getItem("email");
    alert("Thanks for Registering, " + userName + "!");
    window.location.href = "https://startup.joshwiseman.click/track-stats.html";
});
