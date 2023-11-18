document.getElementById('make-plans-button').addEventListener('click', () => {
    const selectedMuscleGroup = document.getElementById('muscle-group').value;
    makePlans(selectedMuscleGroup);
});

const axios = require('axios');

async function makePlans(muscleGroup) {
    const options = {
        method: 'GET',
        url: 'https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises',
        params: {muscle: muscleGroup},
        headers: {
            'X-RapidAPI-Key': 'afbd31353emsh35060dbf6421b51p1a0126jsna8fad13c3a3c',
            'X-RapidAPI-Host': 'exercises-by-api-ninjas.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

module.exports = makePlans;