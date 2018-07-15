function Greeter() {
  this.greeting = 'Hello greet4';
  this.greet = function() {
    console.log(this.greeting);
  }
}

module.exports = Greeter;