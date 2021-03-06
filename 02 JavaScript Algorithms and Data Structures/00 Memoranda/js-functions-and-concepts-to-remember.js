// Exporting and Importing Functions

// Ternary Operators

	// Nested Ternary Operators

	// Multi-Line Ternary Operators:
	function dropElements(arr, func, i = 0) {
	  return i < arr.length && !func(arr[i])
	    ? (dropElements(arr.slice(i + 1), func, i))
	    : arr;
	}

// Template Literals

// Destructuring Assignment
	
	// variable "returnFirstItem" will give us the first item from the array.
	const [returnFirstItem] = [firstItem, secondItem, thirdItem];
	
	// variable "returnFirstItem" will give us the first item from the array.
	const [, returnSecondItem] = [firstItem, secondItem, thirdItem];
	
	// works with objects too. Variable "returnThirdItem" will give us the third item from the array.
	const { returnThirdItem } = {
		returnFirstItem: firstItem, 
		returnSecondItem: secondItem, 
		returnThirdItem: thirdItem}
	
	// destructuring is common when importing. The following allows access to "Component" as a variable
	// instead of requiring you to type "React.Component"
	import React, { Component } from 'react';

// Arrow Functions

// Concise Declarative Functions

// Callback Functions

	// Example to better understand:
	function findLongestWordLength(s) {
	  return s.split(' ')
	    .reduce(function(longest, word) {
	      return Math.max(longest, word.length)
	    }, 0);
	}

// Getter and Setter Functions

// Class Syntax and Constructor Functions

// Immediately Invoked Function Expressions

// Curried Functions

// Function Methods: call(), apply(), bind()

// Partial Applications

// reduce()

	// Free Code Camp Lesson: Use the Reduce Method to Analyze Data

// Concise Object Literal Declaration

// Closures

	// Example from "Make A Person"
	// Local variables are still accessible
	// via getter and setter functions even
	// after function has finished running.
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

// Function Factories

// Rest Parameter and Spread Operator

// Promises, "then" Fulfillment, "catch" Rejection

// "indexOf === -1" rather than "Array.prototype.includes()" to check
// if the array includes a given value.

// Object.keys()

// Set() constructor

// .flat() method

// Array(length).fill(filler) method.

// Human-readable multi-line ternary operator:

//      i < arr.length && !func(arr[i])
//      ? (dropElements(arr.slice(i + 1), func, i))
//      : arr;
// }

// Human-readable method chaining

// Truthy and Falsey Values

// Currying, Partial Application, Arity

// Constructor variables as a means of creating
// private variables. Local variables also make use of functions closure.
// Worth researchiing further. 

// The "in" operator

	// if (prop in contacts[i])