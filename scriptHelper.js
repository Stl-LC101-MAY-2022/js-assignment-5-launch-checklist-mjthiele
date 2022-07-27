// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
    
    let missionHTML = `<h2>Mission Destination</h2>
    <ol>
    <li>Name: ${name}</li>
    <li>Diameter: ${diameter}</li>
    <li>Star: ${star}</li>
    <li>Distance from Earth: ${distance}</li>
    <li>Number of Moons ${moons}</li>
    </ol>
    <img src="${imageUrl}">`
    let changedHtml = document.getElementById('missionTarget')
    changedHtml.innerHTML = missionHTML
}

function validateInput(testInput) {
    if (testInput === ""){
        return "Empty";
    } else if(isNaN(testInput)){
        return "Not a number";
    } else if (!isNaN(testInput)){
        return "Is a number";
    }
       
   
}




function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    
    if (validateInput(pilot) === 'Empty' || validateInput(copilot) === 'Empty' || validateInput(fuelLevel) === 'Empty' || validateInput(cargoLevel) === 'Empty'){
        alert("All fields are required!");
    } else if (validateInput(cargoLevel) === 'Not a number' || validateInput(fuelLevel) === 'Not a number'){
        alert("you must enter a valid numerical input for these fields.");
    } else if (validateInput(pilot) === 'Is a number' || validateInput(copilot) === 'Is a number'){
        alert("You must enter a valid name that is not a number.");
    } else {
        list.style.visibility = "visible";
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch.`;
        copilotStatus.innerHTML = `Copilot ${copilot} is ready for launch.`;
    }

    if (fuelLevel <= 9999){
        launchStatus.innerHTML = 'Shuttle not ready for launch.';
        launchStatus.style.color = 'red';
        fuelStatus.innerHTML = 'Fuel status not high enough to launch';
    } else if (cargoLevel >= 9999){
        launchStatus.innerHTML = 'Shuttle not ready for launch.';
        launchStatus.style.color = 'red';
        cargoStatus.innerHTML = 'Cargo weight too much to launch.';
    } else {
        launchStatus.innerHTML = "Good to go!";
        launchStatus.style.color = 'green';
    }

}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json();
        });

    return planetsReturned;
}


function pickPlanet(planets) {

    let randomPlanet = (Math.floor(Math.random()*planets.length));
    return planets[randomPlanet];

}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
