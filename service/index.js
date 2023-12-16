console.log("service/index.js loaded");
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const express = require('express');
const app = express();
const DB = require('./database.js'); // And test that you can connect to the database
const {WSS} = require('./websocket.js'); //Curly braces because it's a named export


const authCookieName = 'token';

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
        console.log("Existing user");
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
            console.log("Login successful");
            setAuthCookie(res, user.token);
            res.send({ id: user._id });
            return;
        }
    }
    console.log("Login failed");
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
}

// Return the application's default page if the path is unknown
app.use((_req, res) => {
    res.sendFile('index.html', { root: 'public' });
});
const httpService = app.listen(port, () => { 
      console.log(`Listening on port ${port}`);
 }); WSS(httpService);

