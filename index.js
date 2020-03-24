const gTTS = require('gtts');

var messageATransformer = 'je suis SOULEYMANE'
var date = new Date()
var langagueMessage = 'fr'
var gtts = new gTTS( messageATransformer , langagueMessage);
gtts.save('./' + date + 'hello.mp3', function (err, result) {
  if(err) { throw new Error(err) }
  console.log('Success! Open file /tmp/hello.mp3 to hear result.');
});