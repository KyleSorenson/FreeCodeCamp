function telephoneCheck(str) {
  let acceptedRegexs = [
    /^\s*\d{3}-\d{3}-\d{4}\s*$/,
    /^\s*\(\d{3}\)\d{3}-\d{4}\s*$/,
    /^\s*\(\d{3}\)\s+\d{3}-\d{4}\s*$/,
    /^\s*\d{3}\s+\d{3}\s+\d{4}\s*$/,
    /^\s*\d{10}\s*$/
  ];

  if(/^\s*1/.test(str)) {
    str = str.slice(str.match(/1/).index + 1);
  };

  for (let i = 0; i < acceptedRegexs.length; i++) {
    if (acceptedRegexs[i].test(str)) {
      return true;
    }
  };
   
  return false;
}

