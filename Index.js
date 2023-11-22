//Tasklist:
//Make the view display the data from the API, last lift and top 10 lifts
//Make a clear button that clears the data from the API in settings, perhaps with a warning confirmation

// EXPRESS server section
const express = require('express');
const app = express();

// The service port. In production the front-end code is statically hosted by the service on the same port.
const port = process.argv.length > 2 ? process.argv[2] : 3000;

// JSON body parsing using built-in middleware
app.use(express.json());

// Serve up the front-end static content hosting
app.use(express.static('public'));
//Is this broken?

// Router for service endpoints
var apiRouter = express.Router();
app.use(`/api`, apiRouter);

//API endpoints section
// GetScores
apiRouter.get('/workouts', async (req, res) => {
    try {
        const workouts = await getLastTenWorkouts();
        res.send(workouts);
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'An error occurred while getting the workouts' });
    }
});

// SubmitScore
apiRouter.post('/workout', async (req, res) => {
    try {
        await postWorkout(req.body);
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
});
app.listen(8080);

//API functions section
// updateScores considers a new score for inclusion in the high scores. The high scores are saved in memory and disappear whenever the service is restarted.
let workouts = [];
function updateWorkouts(newWorkout, workouts) {
    console.log("From the API call", newWorkout);
    workouts.push(newWorkout);
    if (workouts.length > 10) {
        workouts.length = 10;
    }

    console.log("From the API call", workouts);
    return workouts;
}

//MONGO DB Section
const { MongoClient } = require('mongodb');
const config = require('./public/dbconfig.json') //Updated to the public folder

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;

const client = new MongoClient(url);
const db = client.db('rental');
const workoutCollection = db.collection('workouts'); // Collection is the same as a table in SQL, this one is a collection of workouts
const usersCollection = db.collection('users'); // Collection is the same as a table in SQL, this one is a collection of users

// Test that you can connect to the database
(async function testConnection() {
    await client.connect();
    await db.command({ ping: 1 });
    console.log('Connected successfully to database server');
})().catch((ex) => {
    console.log(`Unable to connect to database with ${url} because ${ex.message}`);
    process.exit(1);
});

// Function to post a workout
async function postWorkout(workout) {
    const result = await workoutCollection.insertOne(workout);
    console.log(`Workout inserted with the following id: ${result.insertedId}`);
}

// Function to get the last 10 workouts
async function getLastTenWorkouts() {
    const workouts = await workoutCollection.find().sort({ date: -1 }).limit(10).toArray();
    console.log(workouts);
    return workouts;
}
