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