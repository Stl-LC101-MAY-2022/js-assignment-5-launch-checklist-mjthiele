// Write your JavaScript code here!

const { myFetch, pickPlanet, addDestinationInfo } = require("./scriptHelper");

window.addEventListener("load", function() {

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        let planetValues = pickPlanet(listedPlanets);
        addDestinationInfo(document, planetValues.name, planetValues.diameter, planetValues.star, planetValues.distance, planetValues.moons, planetValues.image);
    })
   
    let form = document.querySelector("form");
    form.addEventListener("submit", function(event){
        event.preventDefault();
        
    })

});