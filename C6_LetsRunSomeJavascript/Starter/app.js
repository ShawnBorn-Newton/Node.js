var person = {
  fistName: 'John',
  lastName: 'Doe',
  greet: function(){
  console.log('Hello, ' + this.fistName + ' ' + this.lastName);
  }
};

person.greet();

console.log(person['fistName']);