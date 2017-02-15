(function() {
  "use strict";

  var config = require('./config.js');
  // Twit for easier twitter interaction
  var Twit = require('twit');
  var T = new Twit(config.twitter_api);

  var tweetScore = function(score, callback){

    var statusText = getStatusTextWithScore(score);
    // Post data as tweet
    T.post('statuses/update', { status: statusText }, function(err, data, response) {
      if(err){
        callback(err);
      } else {
        console.log(data);
        callback(data);
      }
    });
  };

  var getStatusTextWithScore = function(score){

    var text = "";
    var predefineds = config.tweet_configuration;

    switch(true){
      case (score <= 100 && score >= 85):
        text = getRandomFromArray(predefineds.perfect);
        break;
      case (score < 85 && score >= 70):
        text = getRandomFromArray(predefineds.excellent);
        break;
      default:
        text = getRandomFromArray(predefineds.good);
        break;
    }

    var start = getRandomFromArray(predefineds.start);
    var end = getRandomFromArray(predefineds.end);

    return start + text + end;
  }

  var getRandomFromArray = function(array){
    return array[Math.floor(Math.random() * array.length)];
  }

  module.exports.tweetScore = tweetScore;

})();
