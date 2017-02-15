(function(){
  "use strict";

  var config = require('./config.js').score_configuration;

  var withData = function(weatherData){

    var day = calculateWeekDay();
    var temperature = calculateTemperature(weatherData.main.temp);
    var conditions = calculateConditions(weatherData.weather[0].icon);
    var wind = calculateWind(weatherData.wind.speed);

    return calculateScoreWithWeights(day, temperature, conditions, wind);
  };

  var calculateScoreWithWeights = function(day, temperature, conditions, wind){

    day *= config.weights.day;
    temperature *= config.weights.temperature;
    conditions *= config.weights.conditions;
    wind *= config.weights.wind;

    var score = day + temperature + conditions + wind;
    var weights = config.totalWeight;

    return score/weights;
  }

  var calculateWeekDay = function(){
    var date = new Date();
    var day = date.getDay();

    var value = getValueFromTwoArrays(day, config.day);

    return value;
  };

  var calculateTemperature = function(temperature){
    var celcius = temperature - 273.15;
    celcius = Math.floor(celcius);

    var value = getValueFromTwoArrays(celcius, config.temperature);
    return value;
  }

  var calculateWind = function(wind){

    var value = getValueFromTwoArrays(wind, config.wind);

    return value;
  }

  var calculateConditions = function(id){

    var value = getValueFromTwoArraysWithString(id, config.conditions);

    return value;
  }

  var getValueFromTwoArraysWithString = function(value, key_value_object){
      var key_array = key_value_object.keys;
      var value_array = key_value_object.values;

      value = value.slice(0, -1);
      var index = key_array.indexOf(value);
      var result = value_array[index];

      return result;
  }
  var getValueFromTwoArrays = function(value, key_value_object){

        var key_array = key_value_object.keys;
        var value_array = key_value_object.values;

        var foundHighLow = false;
        var i = 0;
        var length = key_array.length;
        var index = -1;

        for(i; i < length; i++){
          if((!foundHighLow) && (value >= key_array[i] && value <= key_array[i+1])){
            foundHighLow = true;
            index = i;
          }
        }

        if(foundHighLow){

          var low_key = key_array[index];
          var high_key = key_array[index+1];
          var low_value = value_array[index]
          var high_value = value_array[index+1];

          var amount_over_low = Math.abs(low_key - value);
          var upped = (low_value - high_value);
          var lowed = (low_key - high_key);
          var result = low_value + (amount_over_low * (upped/lowed));

        } else {
          var result = 0;
        }

        return result;
  }


  module.exports.withData = withData;

})();
