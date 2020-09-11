import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import currencyEx from './js/exscript.js';


$(document).ready(function() {
  $('#question').submit(function () {
    event.preventDefault();
    let countryCode = $("#country").val();

    console.log(countryCode);
    
    //let searchTerm = $('#search-input').val();
    //$('#search-input').val('');
    //console.log(searchTerm);
    let promise = currencyEx.getExRate();
    promise.then(function(response) {
      const body = JSON.parse(response);
      //let exchangeRate = `body.conversion_rates.${countryCode}`;
      console.log(body);
      console.log(body);
      //$('#result-image').attr('src',body.collection.items[0].links[0].href); 
      //writeImages(body);
    }, function(error) {
      //write errors
      console.log(error);
    });
  });
});
    
//     if (planet === "earth" ) { 
//       let yourAge = age;
//       let timeLeft = userData.timeOnEarth();
//       if ( yourAge > raceExpect[userData.race]) {
//         $('#response').text(`You are ${yourAge} on Earth. You have exceeded the average lifespan by ${timeLeft} years!`);
//       }
//       else {
//         $('#response').text(`You are ${yourAge} on Earth. You have ${timeLeft} years left to live on Earth!`);
//       }
      
//     }
//     else if (planet === "mercury") {
//       let yourAge = userData.mercuryYear();
//       let timeLeft = userData.timeOnMercury();
//       if ( yourAge > mercuryExpect[userData.race]) {
//         $('#response').text(`You are ${yourAge} on Mercury. You have exceeded the average lifespan by ${timeLeft} years!`);
//       }
//       else {
//         $('#response').text(`You are ${yourAge} on Mercury. You have ${timeLeft} years left to live on Mercury!`);
//       }

//     }

//     else if (planet === "venus") {
//       let yourAge = userData.venusYear();
//       let timeLeft = userData.timeOnVenus();
//       if ( yourAge > venusExpect[userData.race]) {
//         $('#response').text(`You are ${yourAge} on Venus. You have exceeded the average lifespan by ${timeLeft} years!`);
//       }
//       else {
//         $('#response').text(`You are ${yourAge} on Venus. You have ${timeLeft} years left to live on Venus!`);
//       }

//     }

//     else if (planet === "mars") {
//       let yourAge = userData.marsYear();
//       let timeLeft = userData.timeOnMars();
//       if ( yourAge > marsExpect[userData.race]) {
//         $('#response').text(`You are ${yourAge} on Mars. You have exceeded the average lifespan by ${timeLeft} years!`);
//       }
//       else {
//         $('#response').text(`You are ${yourAge} on Mars. You have ${timeLeft} years left to live on Mars!`);
//       }

//     }

//     else if (planet === "jupiter") {
//       let yourAge = userData.jupiterYear();
//       let timeLeft = userData.timeOnJupiter();
//       if ( yourAge > jupiterExpect[userData.race]) {
//         $('#response').text(`You are ${yourAge} on Jupiter. You have exceeded the average lifespan by ${timeLeft} years!`);
//       }
//       else {
//         $('#response').text(`You are ${yourAge} on Jupiter. You have ${timeLeft} years left to live on Jupiter!`);
//       }

//     }
    
//   });
