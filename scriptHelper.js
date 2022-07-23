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
   let entry = Number(testInput);
   let returnValue = '';
   if (isNaN(entry) === false) {
        let returnValue = 'Is a Number';
   } else if(isNaN(entry) === true) {
        if (entry === ''){
            let returnValue = 'Empty' ;
        } else {
            let returnValue = 'Not a Number' ;
        }
   }
   return returnValue;
}




function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    
    


}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json();
        });

    return planetsReturned;
}

console.log(myFetch())

function pickPlanet(planets) {

    let randomPlanet = (Math.floor(Math.random()*planets.length));
    return planets[randomPlanet];

}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
