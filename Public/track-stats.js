async function loadWorkouts() {
    let workouts = [];
    try {
        // Get the latest high scores from the service
        const response = await fetch('/api/workouts');
        //THIS IS WHERE THEY FETCH THINGS
        workouts = await response.json();

        // Save the scores in case we go offline in the future
        localStorage.setItem('scores', JSON.stringify(workouts));
    } catch {
        // If there was an error then just use the last saved scores
        const scoresText = localStorage.getItem('scores');
        if (scoresText) {
            workouts = JSON.parse(scoresText);
        }
    }

    displayScores(workouts);
}

// Get references to elements
const addModal = document.getElementById("addModal");
const closeModal = document.getElementById("closeModal");
const viewButton = document.getElementById("viewButton");
const shareButton = document.getElementById("shareButton");
const liftData = document.getElementById("liftData");
const friendsButton = document.getElementById("friendsButton");
const friendsLiftModal = document.getElementById("friendsLiftModal");
const closeFriendsModal = document.getElementById("closeFriendsModal");
const liftModal = document.getElementById("liftModal");

// Show the add modal when the "Add" button is clicked
addButton.addEventListener("click", () => {
    addModal.style.display = "block";
});

// Close the add modal when the "Close" button is clicked`
closeModal.addEventListener("click", () => {
    addModal.style.display = "none";
});

// Add a lift to local storage when the "save" button is clicked
//Use express to save to database?
saveLiftActivity.addEventListener("click", async () => {
    const activity = document.getElementById("activity").value;
    const weight = document.getElementById("weight").value;
    const sets = document.getElementById("sets").value;
    const reps = document.getElementById("reps").value;
    const date = new Date().toISOString(); //Adding the date to the lift as well, TODO MAKE SURE THIS WORKS
    const lift = {
        activity: activity,
        weight: weight,
        sets: sets,
        reps: reps,
        date: date
    };

    try {
        console.log("Atempting to add lift", lift);
        // Perform asynchronous operations here, such as making a fetch request
        const response = await fetch('/api/workout', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(lift)
        });

        // Handle the response as needed
    } catch (error) {
        // Handle any errors that occur during the request
    }

    localStorage.setItem("lastAddedLift", JSON.stringify(lift));
    addModal.style.display = "none"; //Hides modal when save is clicked

});

// Show the last added lift when the "View Lift" button is clicked
viewButton.addEventListener("click", async () => {
    const response = await fetch('/api/workouts');
    //THIS IS WHERE THEY FETCH THINGS
    workouts = await response.json();
    // Save the scores in case we go offline in the future
    localStorage.setItem('workouts', JSON.stringify(workouts));

    //Add the last 10 lifts to the view
    liftData.innerHTML = "Last 10 lifts:<br>";
    for (let i = 0; i < 10; i++) {
        liftData.innerHTML += `Lift ${i + 1}: ${workouts[i].activity}, ${workouts[i].weight} lbs, ${workouts[i].sets} sets, ${workouts[i].reps} reps<br>`;
    }
});


// Show an alert when the "Share" button is clicked
shareButton.addEventListener("click", () => {
    alert("Share to friends");
    //TODO Add something here
});

// Show a modal with friends lifts when the "Friends" button is clicked
friendsButton.addEventListener("click", () => {
    friendsLiftModal.style.display = "block";
});

closeFriendsModal.addEventListener("click", () => {
    friendsLiftModal.style.display = "none";
    console.log("close clicked for friends");
});