const bcrypt = require('bcrypt');
const uuid = require('uuid');
const config = require('./dbConfig.json');

//MONGO DB Section
const { MongoClient } = require('mongodb');
const { default: test } = require('node:test');
const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('rental');

//The different collections
const workoutCollection = db.collection('workouts'); // Collection is the same as a table in SQL, this one is a collection of workouts
const usersCollection = db.collection('users'); // Collection is the same as a table in SQL, this one is a collection of users


// This will asynchronously test the connection and exit the process if it fails
(async function testConnection() {
  await client.connect();
  await db.command({ ping: 1 });
  console.log("Connected successfully to server");
})().catch((ex) => {
  console.log(`Unable to connect to database with ${url} because ${ex.message}`);
  process.exit(1);
});

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

// Function to post a workout
async function postWorkout(workout) {
    const result = await workoutCollection.insertOne(workout);
    console.log(`Workout inserted with the following id: ${result.insertedId}`);
}

// Function to get the last 10 workouts
async function getLastTenWorkouts() {
    console.log("Getting last 10 workouts");
    const workouts = await workoutCollection.find().sort({ date: -1 }).limit(10).toArray();
    console.log(workouts);
    return workouts;
}

//Cool function time

function getUser(email) {
  return usersCollection.findOne({ email: email });
}

function getUserByToken(token) {
  return userCollection.findOne({ token: token });
}

async function createUser(email, password) {
  // Hash the password before we insert it into the database
  const passwordHash = await bcrypt.hash(password, 10);

  const user = {
    email: email,
    password: passwordHash,
    token: uuid.v4(),
  };
  await userCollection.insertOne(user);

  return user;
}

function addScore(score) {
  scoreCollection.insertOne(score);
}

function getHighScores() {
  const query = { score: { $gt: 0, $lt: 900 } };
  const options = {
    sort: { score: -1 },
    limit: 10,
  };
  const cursor = scoreCollection.find(query, options);
  return cursor.toArray();
}

//This allows the functions to be called from other files
module.exports = {
  getUser,
  getUserByToken,
  createUser,
  addScore,
  getHighScores,
  getLastTenWorkouts,
  updateWorkouts,
  postWorkout,
};
