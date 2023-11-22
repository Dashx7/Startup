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
    console.log("From the API call", newWorkout);
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

    console.log("From the API call", workouts);
    return workouts;
}

//MONGODB section
// const { MongoClient } = require('mongodb');

// //TODO change this to the actual database
// const userName = 'holowaychuk';
// const password = 'express';
// const hostname = 'mongodb.com';

// const url = `mongodb+srv://${userName}:${password}@${hostname}`;

// const client = new MongoClient(url);

// // await client.connect(); // Connect to the MongoDB cluster

// const collection = client.db('rental').collection('house');

// const house = {
//   name: 'Beachfront views',
//   summary: 'From your bedroom to the beach, no shoes required',
//   property_type: 'Condo',
//   beds: 1,
// };
// await collection.insertOne(house);


// const query = { property_type: 'Condo', beds: { $lt: 2 } };

// const options = {
//   sort: { price: -1 },
//   limit: 10,
// };

// const cursor = collection.find(query, options);
// const rentals = await cursor.toArray();
// rentals.forEach((i) => console.log(i));


//MongoDB Test
const { MongoClient } = require('mongodb');
const config = require('./public/dbconfig.json') //Updated to the public folder

async function main() {
    // Connect to the database cluster
    //   const url = "mongodb+srv://JoshWiseman:Mj20032003@joshwisemancluster.yfd6qrz.mongodb.net/?retryWrites=true&w=majority";
    const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;

    const client = new MongoClient(url);
    const db = client.db('rental');
    const collection = db.collection('house');

    // Test that you can connect to the database
    (async function testConnection() {
        await client.connect();
        await db.command({ ping: 1 });
    })().catch((ex) => {
        console.log(`Unable to connect to database with ${url} because ${ex.message}`);
        process.exit(1);
    });

    // Insert a document
    const house = {
        name: 'Beachfront views',
        summary: 'From your bedroom to the beach, no shoes required',
        property_type: 'Condo',
        beds: 1,
    };
    await collection.insertOne(house);

    // Query the documents
    const query = { property_type: 'Condo', beds: { $lt: 2 } };
    const options = {
        sort: { score: -1 },
        limit: 10,
    };

    const cursor = collection.find(query, options);
    const rentals = await cursor.toArray();
    rentals.forEach((i) => console.log(i));
}

main().catch(console.error);

//MongoDB Test 2, from their website
// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb://atlas-sql-654932bced4bab67ba4c9f27-wck9s.a.query.mongodb.net/Gym_Bro_Buddy?ssl=true&authSource=admin"
// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });
// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);