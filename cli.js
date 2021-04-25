console.log("hello");

// used readlines node.js api
const readlines = require("readline");
// used axios npm package
const axios = require("axios");

const rl = readlines.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What is GitHub Handle?", async function (answer) {
  console.log(answer);
  //   rl.close();

  //   https://api.github.com/users/eebk99
  const res = await axios
    .get(`https://api.github.com/users/${answer}`)
    .then((res) => {
      // console.log(res.data);
      const {
        data: { name, company, location, bio },
      } = res;

      console.log("Name: ", name);
      console.log("Company: ", company);
      console.log("Location: ", location);
      console.log("Bio: ", bio);

      rl.close();
    });
});
