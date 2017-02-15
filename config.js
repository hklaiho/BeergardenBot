(function() {
  "use strict";

  var keys = require('./keys.js');

  var twitter_configuration = keys.twitter;
  var weather_configuration = keys.weather;

  var score_configuration = {
    weights: {
      temperature: 40,
      conditions: 40,
      wind: 10,
      day: 10,
    },
    totalWeight: 100,
    temperature: {
      keys: [0,5,10,15,20,25,30,35,40],
      values: [0,20,40,60,80,100,80,60,0]
    },
    wind: {
      keys: [0,5,10],
      values: [100,50,0]
    },
    day: {
      keys: [0,1,2,3,4,5,6],
      values: [80,0,20,70,50,100,70]
    },
    conditions: {
      keys: ["01", "02", "03", "04", "09", "10", "11", "13", "50"],
      values: [100,80,60,40,20,10,0,0,10,20]
    }
  };

  var tweet_configuration = {
    perfect: [
      "perfect",
      "excellent",
      "exemplary",
      "the best",
      "optimal"
    ],
    excellent: [
      "excellent",
      "superb",
      "outstanding",
      "superior"
    ],
    good: [
      "good",
      "pleasant",
      "enjoyable",
      "fine"
    ],
    start : [
      "Today is a ",
      "Oh yeah, ",
      "Cheers, what a ",
      "Sip sip, "
    ],
    end: [
      " day to sip some beer!",
      " weather for some chilling.",
      " opportunity to slip out from work early"
    ]
  };

  module.exports.tweet_configuration = tweet_configuration;
  module.exports.twitter_api = twitter_configuration;
  module.exports.weather_api = weather_configuration;
  module.exports.score_configuration = score_configuration;

}());
