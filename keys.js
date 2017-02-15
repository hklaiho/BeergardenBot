(function(){
  "use strict";

  // Using twitter api
  var twitter = {
    consumer_key: 'API_KEY_HERE',
    consumer_secret: 'API_KEY_HERE',
    access_token: 'API_KEY_HERE',
    access_token_secret: 'API_KEY_HERE'
  };

  // Using openweathermap.org api
  var weather = {
    api_key: 'API_KEY_HERE'
  };

  module.exports.twitter = twitter;
  module.exports.weather = weather;
  
})();
