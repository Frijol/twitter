// npm install rem read clarinet
var rem = require('rem')
  , carrier = require('carrier');

var keywords = ['obama', 'usa'];

// Create Twitter API, prompting for key/secret.
rem.connect('twitter.com', '*').prompt(function (err, user) {
  user.stream('statuses/filter').post({
    track: keywords
  }, function (err, stream) {
    carrier.carry(stream, function (line) {
      var line = JSON.parse(line);
      console.log(line.text);
    });
  });
});