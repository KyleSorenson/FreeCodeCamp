// My unassisted, original solution to this problem.

// Seems to just be an excercize in writing a constructor
// function. Also forces you to distinguish local variables
// from externally accessible keys.

// NOTABLE CONCEPTS: constructor variables as a means of creating
// private variables. Local variables also make use of functions closure.
// Worth researchiing further. 

const Person = function(firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly

  let firstName = firstAndLast.split(' ')[0];
  let lastName = firstAndLast.split(' ')[1];
  this.setFirstName = function(first) {
    firstName = first;
  }
  this.setLastName = function(last) {
    lastName = last;
  }
  this.setFullName = function(firstAndLast) {
    firstName = firstAndLast.split(' ')[0];
    lastName = firstAndLast.split(' ')[1];
  }
  this.getFirstName = function() {
    return firstName;
  }
  this.getLastName = function() {
    return lastName;
  }
  this.getFullName = function() {
    return firstName + ' ' + lastName;
  };
};

const bob = new Person('Bob Ross');
