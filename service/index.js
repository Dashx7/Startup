<<<<<<< HEAD
<<<<<<<< HEAD:service/index.js
=======
>>>>>>> a4330c92abd799b6367591b02a3005be685f97f3
console.log("service/index.js loaded");
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const express = require('express');
const app = express();
const DB = require('./database.js'); // And test that you can connect to the database
const {WSS} = require('./websocket.js'); //Curly braces because it's a named export

<<<<<<< HEAD
========

// Get references to the form elements, allows me to manipulate buttons
const userNameInput = document.getElementById("userNameText");
const passwordInput = document.getElementById("password");
const loginButton = document.getElementById("loginButton");
const registerButton = document.getElementById("registerButton");

// Enable login and register buttons when both fields are filled
userNameInput.addEventListener("input", toggleButtons);
passwordInput.addEventListener("input", toggleButtons);
>>>>>>>> a4330c92abd799b6367591b02a3005be685f97f3:Index.js

function toggleButtons() { //This is a function that allows the buttons to be enabled when the fields are filled
    const userNameValue = userNameInput.value.trim();
    const passwordValue = passwordInput.value.trim();

<<<<<<<< HEAD:service/index.js
=======

const authCookieName = 'token';

>>>>>>> a4330c92abd799b6367591b02a3005be685f97f3
// The service port may be set on the command line
const port = process.argv.length > 2 ? process.argv[2] : 4000;

// JSON body parsing using built-in middleware
app.use(express.json());

// Use the cookie parser middleware for tracking authentication tokens
app.use(cookieParser());

// Serve up the applications static content
app.use(express.static('public'));

// Trust headers that are forwarded from the proxy so we can determine IP addresses
app.set('trust proxy', true);

// Router for service endpoints
var apiRouter = express.Router();
app.use(`/api`, apiRouter);



//API ENDPOINTS section
//Get workouts
apiRouter.get('/workouts', async (req, res) => {
    try {
        const workouts = await DB.getLastTenWorkouts();
        res.send(workouts);
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'An error occurred while getting the workouts' });
    }
});

//Submit Workout
apiRouter.post('/workout', async (req, res) => {
    try {
        await DB.postWorkout(req.body);
        res.send({ message: 'Workout posted successfully' });
        console.log("Workout posted successfully", req.body);
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'An error occurred while posting the workout' });
        console.log("Workout posted failed", req.body);
    }
});
//AUTHENTICATION section for apiRouter
apiRouter.post('/auth/register', async (req, res) => {
    console.log("Register attempt", req.body);
    if (await DB.getUser(req.body.email)) {
<<<<<<< HEAD
        console.log("Existing user");
=======
>>>>>>> a4330c92abd799b6367591b02a3005be685f97f3
      res.status(409).send({ msg: 'Existing user' });
    } else {
      const user = await DB.createUser(req.body.email, req.body.password);
  
      // Set the cookie
      setAuthCookie(res, user.token);
  
      res.send({
        id: user._id,
      });
    }
  });

// loginAuthorization from the given credentials
apiRouter.post('/auth/login', async (req, res) => {
    console.log("Login attempt", req.body);
    const user = await DB.getUser(req.body.email);
    console.log("User", user);
    if (user) {
        if (await bcrypt.compare(req.body.password, user.password)) {
<<<<<<< HEAD
            console.log("Login successful");
=======
>>>>>>> a4330c92abd799b6367591b02a3005be685f97f3
            setAuthCookie(res, user.token);
            res.send({ id: user._id });
            return;
        }
    }
<<<<<<< HEAD
    console.log("Login failed");
=======
>>>>>>> a4330c92abd799b6367591b02a3005be685f97f3
    res.status(401).send({ msg: 'Unauthorized' });
});

// getMe for the currently authenticated user
apiRouter.get('/user/me', async (req, res) => {
    authToken = req.cookies['token'];
    const user = await collection.findOne({ token: authToken });
    if (user) {
        res.send({ userName: user.userName });
        return;
    }
    res.status(401).send({ msg: 'Unauthorized' });
});

function setAuthCookie(res, authToken) { //Idk what this does
    res.cookie('token', authToken, {
        secure: true,
        httpOnly: true,
        sameSite: 'strict',
    });
    // document.cookie = "token = authToken";
<<<<<<< HEAD
========
    loginButton.disabled = !(userNameValue && passwordValue);
    registerButton.disabled = !(userNameValue && passwordValue);
>>>>>>>> a4330c92abd799b6367591b02a3005be685f97f3:Index.js
}

// Add event listeners for login and register actions
loginButton.addEventListener("click", function (e) {
    e.preventDefault();
    const userName = userNameInput.value;
    const password = passwordInput.value;
    console.log("Logging user with database, username:", userName);
    loginOrRegister(`/api/auth/login`);
});
<<<<<<<< HEAD:service/index.js
=======
}

// Return the application's default page if the path is unknown
app.use((_req, res) => {
    res.sendFile('index.html', { root: 'public' });
});
>>>>>>> a4330c92abd799b6367591b02a3005be685f97f3
const httpService = app.listen(port, () => { 
      console.log(`Listening on port ${port}`);
 }); WSS(httpService);

<<<<<<< HEAD
========

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
>>>>>>>> a4330c92abd799b6367591b02a3005be685f97f3:Index.js
=======


>>>>>>> a4330c92abd799b6367591b02a3005be685f97f3
