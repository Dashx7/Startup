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

// Router for service endpoints
var apiRouter = express.Router();
app.use(`/api`, apiRouter);

//API endpoints section
// GetScores
apiRouter.get('/workouts', (_req, res) => {
    res.send(workouts);
});

// SubmitScore
apiRouter.post('/workout', (req, res) => {
    workouts = updateWorkouts(req.body, workouts);
    res.send(workouts);
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
    console.log("From the API call",newWorkout);
    workouts.push(newWorkout);
    // let found = false;
    // for (const [i, prevWorkout] of workouts.entries()) {
    //     if (newWorkout.weight > prevWorkout.weight) {
    //         workouts.splice(i, 0, newWorkout);
    //         found = true;
    //         break;
    //     }
    // }

    // if (!found) {
    //     workouts.push(newWorkout);
    // }

    if (workouts.length > 10) {
        workouts.length = 10;
    }

    console.log("From the API call",workouts);
    return workouts;
}

//MAKE plans section
const makePlans = require('./make-plans');
// Now you can call the function exported from make-plans.js
makePlans();
