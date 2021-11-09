function telephoneCheck(str) {
  
  // Regexs for each valid format provided in prompt
  let acceptedRegexs = [
    /^\s*\d{3}-\d{3}-\d{4}\s*$/,
    /^\s*\(\d{3}\)\d{3}-\d{4}\s*$/,
    /^\s*\(\d{3}\)\s+\d{3}-\d{4}\s*$/,
    /^\s*\d{3}\s+\d{3}\s+\d{4}\s*$/,
    /^\s*\d{10}\s*$/
  ];

  // Handles country code "1" by checking if 1 is the first digit,
  // then the slices the remainder of the string after the code,
  // so that it can be processed in the same way as all the other numbers.
  if(/^\s*1/.test(str)) {
    str = str.slice(str.match(/1/).index + 1);
  };

  // tests str against each valid regex listed above
  for (let i = 0; i < acceptedRegexs.length; i++) {
    if (acceptedRegexs[i].test(str)) {
      return true;
    }
  };
   
  return false;
}

