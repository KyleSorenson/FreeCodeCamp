let htmlEntities = {
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