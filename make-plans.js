document.getElementById('make-plans-button').addEventListener('click', () => {
    const selectedMuscleGroup = document.getElementById('muscle-group').value;
    makePlans(selectedMuscleGroup);
});

async function makePlans(muscleGroup) {
    console.log("Muscle group", muscleGroup);
    const url = 'https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?muscle=biceps';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'afbd31353emsh35060dbf6421b51p1a0126jsna8fad13c3a3c',
            'X-RapidAPI-Host': 'exercises-by-api-ninjas.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);

        // Get a reference to the results div
        const resultsDiv = document.getElementById('results');

        for (let item of result) {
            const p = document.createElement('p');
            p.textContent = JSON.stringify(item); // Convert each item back into a JSON string
            resultsDiv.appendChild(p);
        }

        // Set the content of the results div to the results
        // resultsDiv.innerHTML = result;
    } catch (error) {
        console.error(error);
    }
}

