import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import currencyEx from './js/exscript.js';


$(document).ready(function() {
  $('#question').submit(function () {
    event.preventDefault();
    let countryCode = $("#country").val();
    let dollarAmount = parseInt($('#usd').val());
    console.log(countryCode);
    console.log(dollarAmount);
    
    
    
    let promise = currencyEx.getExRate();
    promise.then(function(response) {
      const body = JSON.parse(response);
      console.log(countryCode);
      console.log(body);
      let exRate = body.conversion_rates[countryCode];
      
      console.log(exRate);
      
      let exNum = exRate;

      console.log(exNum);
      
      console.log(body);
      let exchangeRound = Math.round((dollarAmount*exRate*100)) / 100;
      $("#response2").text(`The value of $${dollarAmount} in ${countryCode} is:`);
      $('#response').text(exchangeRound); 
      
    }, function(error) {
      $('#error-response').text('Dang it :/ There was an error </3');
      console.log(error);
    });
  }); 
});
  
