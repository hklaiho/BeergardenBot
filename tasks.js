(function(){
  "use strict";

  var weather = require('./weather.js');
  var tweet = require('./tweet.js');
  var calculate = require('./calculate.js');

  var fetchAndTweet = function(){
    console.log("Running fetchAndTweet");

    // Get weather data
    weather.getWeatherData(function(err, data){
      if(err){
        console.log(err);
      } else {
        var score = calculate.withData(data);
        console.log(score);
        // Tweet score
        if(score >= 60){
          tweet.tweetScore(score, function(err, data){
            if(err){
              console.log(err);
            } else {
              console.log(data);
            }
          });
        } else {
          console.log("Score was too low to tweet: " + score);
        }
      }
    });

    console.log("Ending fetchAndTweet");
  };

  module.exports.fetchAndTweet = fetchAndTweet;

})();
