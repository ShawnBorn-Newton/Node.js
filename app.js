var Emitter = require('./emitter');

var emtr = new Emitter();

emtr.on('greet', function(){
  console.log('Heard it!');
});

emtr.on('greet', function(){
  console.log('A greeting occurred!');
});

console.log('Hello!');
emtr.emit('greet');