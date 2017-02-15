(function() {
  "use strict";

  console.log("Bot is now running.");

  // Cron for posting tweets periodically
  var Cron = require('node-cron');
  var tasks = require('./tasks.js');

  // Schedules every day at 1PM
  Cron.schedule('0 0 13 1/1 * ? *', function(err){
    tasks.fetchAndTweet();
  });

})();
