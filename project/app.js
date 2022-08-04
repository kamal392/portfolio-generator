// This needs to be added in order to use file system
const inquirer = require('inquirer');
inquirer.prompt([
  {

    type:'input',
    name :'name',
    message:'What is your name?'

  }

])
.then(answer => console.log(answer));




// console log inquirer to check if inquirer has been imported properly
// console.log(inquirer);

// const fileSystem = require("fs");
// const generatePage = require("./src/page-template");


// const pageHTML = generatePage(name, github);

// fileSystem.writeFile("./index.html", pageHTML, (err) => {
  // if (err) throw err;

  // console.log("portfolio complete ! Check out index.html to see the output!");
// });
