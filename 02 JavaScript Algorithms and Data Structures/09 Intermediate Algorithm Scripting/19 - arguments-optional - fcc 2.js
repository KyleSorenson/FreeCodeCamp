// FCC's solution doesn't make use of the bind
// function, and instead achieves partial application
// by another method. This solution also tests the type 
// of each number individually. Not sure if I did something
// incorrectly in my solution?

function addTogether() {
  const [first, second] = arguments;
  if (typeof(first) !== "number")
    return undefined;
  if (second === undefined)
    return (second) => addTogether(first, second);
  if (typeof(second) !== "number")
    return undefined;
  return first + second;
}