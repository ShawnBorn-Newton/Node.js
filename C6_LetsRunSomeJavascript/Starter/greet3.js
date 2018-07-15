function Greeter() {
  this.greeting = 'Hello greet3';
  this.greet = function() {
    console.log(this.greeting);
  }
}
module.exports = new Greeter();