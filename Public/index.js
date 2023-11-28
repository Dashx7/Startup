
// Get references to the form elements, allows me to manipulate buttons
const userNameInput = document.getElementById("userNameText");
const passwordInput = document.getElementById("password");
const loginButton = document.getElementById("loginButton");
const registerButton = document.getElementById("registerButton");

// Enable login and register buttons when both fields are filled
userNameInput.addEventListener("input", toggleButtons);
passwordInput.addEventListener("input", toggleButtons);

function toggleButtons() {
    const userNameValue = userNameInput.value.trim();
    const passwordValue = passwordInput.value.trim();

    // console.log("Username and password vlaue",userNameValue, passwordValue);

    loginButton.disabled = !(userNameValue && passwordValue);
    registerButton.disabled = !(userNameValue && passwordValue);
}

// Add event listeners for login and register actions
loginButton.addEventListener("click", function (e) {
    e.preventDefault();

    const userName = userNameInput.value;
    const password = passwordInput.value;
    localStorage.setItem("email", userName);
    localStorage.setItem("password", password);
    alert("Login for: " + userName + " sucessful!");
    window.location.href = "https://startup.joshwiseman.click/track-stats.html";
});

registerButton.addEventListener("click", async function (e) {
    e.preventDefault();

    // const userName = userNameInput.value;
    // const password = passwordInput.value;
    // localStorage.setItem("email", userName);
    // localStorage.setItem("password", password);

    // Call /auth/create endpoint
    console.log("Registering user with database, username:", userName);
    loginOrRegister('/api/auth/register');

    //This doesn't work, need to figure out how to get it to work

    // const response = await fetch('/auth/create', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json', },
    //     body: JSON.stringify({ userName, password }),
    // });

    // if (!response.ok) {
    //     console.error('Error:', response.statusText);
    //     return;
    // }

    // const data = await response.json();
    // console.log('User created:', data);

    // alert("Thanks for Registering, " + userName + "!");
    // window.location.href = "https://startup.joshwiseman.click/track-stats.html";
    // console.log("Registering user with database", userName);
});

//New gen login and register
async function loginOrRegister(endpoint) {
    // const userName = document.querySelector('#userName')?.value;
    // const password = document.querySelector('#userPassword')?.value;

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
    //   const body = await response.json();
    //   const modalEl = document.querySelector('#msgModal');
    //   modalEl.querySelector('.modal-body').textContent = `⚠ Error: ${body.msg}`;
    //   const msgModal = new bootstrap.Modal(modalEl, {});
    //   msgModal.show();
    alert("Login/Register failed, please try again");
    }
  }