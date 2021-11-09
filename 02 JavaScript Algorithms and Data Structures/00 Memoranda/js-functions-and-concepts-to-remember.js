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

// Function Factories

// Rest Parameter and Spread Operator

// Promises, "then" Fulfillment, "catch" Rejection