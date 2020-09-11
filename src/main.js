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
    
    
    
    
    let promise = currencyEx.getExRate();
    promise.then(function(response) {
      
      const body = JSON.parse(response);
      
      let exRate = body.conversion_rates[countryCode];
      
      let exchangeRound = Math.round((dollarAmount*exRate*100)) / 100;
      if (isNaN(exchangeRound)) {
        $("#response").text("please choose a valid currency!!!");
        $("#response2").text(" ");
      } 
      else {
        $("#response").text(`The value of $${dollarAmount} in ${countryCode} is:`);
        $('#response2').text(exchangeRound); 
      }
      
    }, function(error) {
      $('#response').text(`There was an error processing the request: ${error}`);
      
    });
  }); 
});
  
