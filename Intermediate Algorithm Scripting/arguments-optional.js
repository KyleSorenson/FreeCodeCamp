function addTogether(...args) {
  if(args.every(i => typeof i === "number")) {
    if(args.length === 2) {
      return args.reduce((a, b) => a + b);
    } else {
      return addTogether.bind(this, args[0]);
    };
  };
};