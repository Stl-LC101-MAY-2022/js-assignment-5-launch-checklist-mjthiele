// Write your JavaScript code here!

window.addEventListener("load", function() {

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        let planetValues = pickPlanet(listedPlanets);
        console.log(planetValues);
        addDestinationInfo(document, planetValues.name, planetValues.diameter, planetValues.star, planetValues.distance, planetValues.moons, planetValues.image);
    });

   
    let form = document.querySelector("form");
    form.addEventListener("submit", function(event){
        event.preventDefault();
        pilotValue = document.querySelector("input[name=pilotName]").value;
        copilotValue = document.querySelector("input[name=copilotName]").value;
        fuelLevelValue = document.querySelector("input[name=fuelLevel]").value;
        cargoLevelValue = document.querySelector("input[name=cargoMass]").value;

        let list = document.getElementById("faultyItems");
        formSubmission(document,list,pilotValue,copilotValue,fuelLevelValue,cargoLevelValue);

    })

});