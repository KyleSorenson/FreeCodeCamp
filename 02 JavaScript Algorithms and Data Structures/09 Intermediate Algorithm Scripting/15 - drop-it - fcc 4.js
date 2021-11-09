// FCC's solution uses a multiple line ternary 
// operator in a way that is very human-readable.
// I should steal this format.

// NOTABLE CONCEPTS: Human-readable multi-line ternary operator

function dropElements(arr, func, i = 0) {
  return i < arr.length && !func(arr[i])
    ? (dropElements(arr.slice(i + 1), func, i))
    : arr;
}