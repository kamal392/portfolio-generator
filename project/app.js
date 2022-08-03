// This needs to be added in order to use file system
const fileSystem = require("fs");
const generatePage = require("./src/page-template");

// this array holds the user command line arguments:
const profileDataArgs = process.argv.slice(2);
console.log(profileDataArgs);

const [name, github] = profileDataArgs;
console.log(name, github);

const pageHTML = generatePage(name, github);

fileSystem.writeFile("index.html", pageHTML, (err) => {
  if (err) throw err;

  console.log("portfolio complete ! Check out index.html to see the output!");
});
