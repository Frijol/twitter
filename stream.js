// npm install rem read clarinet
var rem = require('rem');
var read = require('read');
var clarinet = require('clarinet');

var keywords = ['obama', 'usa'];

// Create Twitter API, prompting for key/secret.
rem.connect('twitter.com', '*').prompt(function (err, user) {
  user.stream('statuses/filter').post({
    track: keywords
  }, printStream);

  function printStream (err, stream) {
    stream.pipe(clarinet.createStream()).on('key', function (key) {
      if (key == 'text') {
        this.once('value', function (tweet) {
          console.log(String(tweet));
        })
      }
    });
  }
});