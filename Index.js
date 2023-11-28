const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const express = require('express');
const app = express();
const DB = require('./public/database.js'); // And test that you can connect to the database


const authCookieName = 'token';

// The service port may be set on the command line
const port = process.argv.length > 2 ? process.argv[2] : 3000;

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
// GetScores
apiRouter.get('/workouts', async (req, res) => {
    try {
        const workouts = await DB.getLastTenWorkouts();
        res.send(workouts);
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'An error occurred while getting the workouts' });
    }
});

// SubmitScore

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

// Return the application's default page if the path is unknown
app.use((_req, res) => {
    res.sendFile('index.html', { root: 'public' });
});
// Start the service
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
}); app.listen(8080);



//AUTHENTICATION section

// createAuthorization from the given credentials
//API ROUTER OR APP?
// apiRouter.post('/auth/create', async (req, res) => {
//     if (await getUser(req.body.userName)) {
//         res.status(409).send({ msg: 'Existing user' }); //409 is a conflict error
//     }
//     else {
//         const user = await createUser(req.body.userName, req.body.password); //Creates a new user
//         setAuthCookie(res, user.token); //And set their cookie to the users token
//         res.send({
//             userName: user.userName,
//             token: user.token,
//         });
//     }
// });
// CreateAuth token for a new user
apiRouter.post('/auth/register', async (req, res) => {
    if (await usersCollection.findOne(req.body.email)) {
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
    const user = await getUser(req.body.userName);
    if (user) {
        if (await bcrypt.compare(req.body.password, user.password)) {
            setAuthCookie(res, user.token);
            res.send({ id: user._id });
            return;
        }
    }
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

function getUser(userName) { //Checks if the user exists
    return usersCollection.findOne({ userName: userName });
}

async function createUser(userName, password) { //Creates a new user, what did you expect?
    const passwordHash = await bcrypt.hash(password, 10); //Hashes the password with bcrypt and 10 salt rounds
    const user = {
        userName: userName,
        password: passwordHash,
        token: uuid.v4(), //Generates a random token
    };
    await usersCollection.insertOne(user); //Inserts the user into the database
    return user;
}

function setAuthCookie(res, authToken) { //Idk what this does
    res.cookie('token', authToken, {
        secure: true,
        httpOnly: true,
        sameSite: 'strict',
    });
}
