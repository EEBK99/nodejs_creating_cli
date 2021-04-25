console.log("hello");

// used readlines node.js api
const readlines = require("readline");
// used axios npm package
const axios = require("axios");

const rl = readlines.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What is GitHub Handle?", (answer) => {
  console.log(answer);

  //   rl.close();

  //   https://api.github.com/users/eebk99
});
