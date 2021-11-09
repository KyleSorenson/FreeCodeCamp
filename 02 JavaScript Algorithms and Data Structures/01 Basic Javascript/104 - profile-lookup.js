// My unassisted, original solution to this problem.

// An example of how it can sometimes be difficult to
// translate a set of instructions to a set of logical
// rules. The problem was very simple, but I failed to
// see that all I needed to do was to create two nested
// if statements to solve the problem. The result is a
// bloated function that makes far more checks than
// needed. 

function lookUpProfile(name, prop) {
  // Only change code below this line
  
    var nameInContacts = false;
    var propInContact = false;

    for (var i = 0; i < contacts.length; i++) {

        if (name === contacts[i]["firstName"] && contacts[i].hasOwnProperty(prop)) {
            return contacts[i][prop];
        }
        
        if (name === contacts[i]["firstName"]) {
            nameInContacts = true;
        }
        
        if (contacts[i].hasOwnProperty(prop)) {
            propInContact = true;
        }
    }

    if (!nameInContacts) {
        return "No such contact"
    }
    
    if (!propInContact) {
        return "No such property"
    }

  // Only change code above this line
}

// FCC's much more elegant solution:

// NOTABLE CONCEPTS: the "in" operator

// function lookUpProfile(name, prop) {
//   for (let i = 0; i < contacts.length; i++) {
//     if (contacts[i].firstName === name) {
//       if (prop in contacts[i]) {
//         return contacts[i][prop];
//       } else {
//         return "No such property";
//       }
//     }
//   }
//   return "No such contact";
// }