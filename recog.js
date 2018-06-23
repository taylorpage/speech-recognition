var recognition = new (
  window.SpeechRecognition ||
  window.webkitSpeechRecognition ||
  window.mozSpeechRecognition ||
  window.msSpeechRecognition
)();

recognition.onresult = function(event) {
  console.log('You said: ', event.results[0][0].transcript);
};

recognition.onspeechstart = function(even) {
  console.log('start talking');
}

recognition.onspeechend = function(event) {
  console.log('alright.. youre done..');
}

recognition.onerror = function(event) {
  console.log(event.error);
}

recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.maxAlternatives = 5;

function start() {
  console.log('start');
  recognition.start();
}