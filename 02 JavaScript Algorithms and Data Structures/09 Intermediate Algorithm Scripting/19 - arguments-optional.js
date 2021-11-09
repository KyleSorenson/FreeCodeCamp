// My unassisted, original solution to this problem.

// This is an excercize in currying / parital application.
// The function can accept either one or two arguments.
// If only one argument is given, the function will return
// another function with an "arity" of 1.

// NOTABLE CONCEPTS: Currying, Partial Application, Arity

function addTogether(...args) {
  
  // Checks to see if all arguments are numbers
  // If not, automatically returns undefined
  if(args.every(i => typeof i === "number")) {
    
    switch (args.length) {
      
      // If two arguments are given,
      // their sum is returned.
      case 2:
        return args[0] + args[1];
      
      // If one arguement is given, that
      // argument is passed back into the function
      // and set as the first value of the two arguments
      // for when the function is called again.
      case 1:
        return addTogether.bind(this, args[0]);
    };
  };
};


// Alternative method of binding first argument to function:

// function addTogether(...args) {
//   if(args.every(i => typeof i === "number")) {
//     switch (args.length) {
//       case 2:
//         return args[0] + args[1];
//       case 1:
//         return (arg) => addTogether(args[0], arg);
//     };
//   };
// };