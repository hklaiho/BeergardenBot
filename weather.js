(function(){
    "use strict";
    
    var http = require('http');
    var config = require('./config');

    var getWeatherData = function(callback){

      var apiPath = '/data/2.5/weather?q=Tampere,FI&APPID=';
      var path =  apiPath + config.weather_api.api_key;
      var parsed;

      http.get({
        hostname: 'api.openweathermap.org',
        path: path
      }, function(response){

        var body = "";
        response.on("data", function(d){
          body += d;
        });

        response.on("end", function(){
          parsed = JSON.parse(body);
          // console.log(parsed);
          callback(null, parsed);
        });

      });

    };

    module.exports.getWeatherData = getWeatherData;

}());
