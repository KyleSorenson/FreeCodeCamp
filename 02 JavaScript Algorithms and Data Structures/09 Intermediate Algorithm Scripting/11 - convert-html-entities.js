// My unassisted, original solution to this problem.

// Creates an object that groups each special character
// with it's corresponding regex and html entity
// representation, then loops through str, finds
// each special char using its regex, and replaces it 
// with it html entity string.

const htmlEntities = {
  '&' : {regex: /&/g, entity: '&amp;'},
  '<' : {regex: /</g, entity: '&lt;'},
  '>' : {regex: />/g, entity: '&gt;'},
  '"' : {regex: /"/g, entity: '&quot;'},
  "'" : {regex: /'/g, entity: '&apos;'}
};

function convertHTML(str) {
  for (let character in htmlEntities) {
    str = str.replace(htmlEntities[character].regex, htmlEntities[character].entity);
  }
  return str;
}

// most similar to FCC's solution 2:

// function convertHTML(str) {
//   // Use Object Lookup to declare as many HTML entities as needed.
//   const htmlEntities = {
//     "&": "&amp;",
//     "<": "&lt;",
//     ">": "&gt;",
//     '"': "&quot;",
//     "'": "&apos;"
//   };
//   // Using a regex, replace characters with it's corresponding html entity
//   return str.replace(/([&<>\"'])/g, match => htmlEntities[match]);
// }