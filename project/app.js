// This needs to be added in order to use file system
const inquirer = require('inquirer');

const promptUser = () =>{
return inquirer.prompt([
  {

    type:'input',
    name :'name',
    message:'What is your name?'

  },
  { 
    type:'input',
    name:'github',
    message:'Enter your Github Username'
  },
  {
    type:'input',
    name:'about',
    message:'provide some information about yourself:'

  }


]);
};

// Add function promptProject() for the project question
const promptProject = portfolioData =>{
   portfolioData.projects = [];
  //  if there is no 'project' array property, create on
if (!portfolioData.projects){
  portfolioData.projects=[];
}
  console.log(`
  ================
  Add a New project
  `);
  return inquirer.prompt([
    {
      type:'input',
      name:'name',
      message:'What is the name of your project?'
    },
    {
      type:'input',
      name:'description',
      message:'Provide a description of the project(Require)'
    },
    {
      type:'checkbox',
      name:'languages',
      message:'What did you build this project with?(Check all that apply )',
      choices:['javaScript','HTML','CSS','ES6','jQuery','Bootstrap','Node']
    },
    {
      type:'input',
      name:'link',
      message:'Enter the Github link to your project.(Required)'
    },
    {
      type:'confirm',
      name:'feature',
      message:'Would you like to feature this project?',
      default:false
    },
    {
      type:'confirm',
      name:'confirmAddProject',
      message:'would you like to enter another project?',
      default:false
    }
  ]).then(projectData =>{
    portfolioData.projects.push(projectData);
    if (projectData.confirmAddProject){
      // if the user like to add another project promptProject ()function will be call
      return promptProject(portfolioData);
    }else{
      return portfolioData;
    }

  });
   
};



promptUser()

.then(promptProject)
.then(portfolioData =>{
  console.log(portfolioData);
});




// console log inquirer to check if inquirer has been imported properly
// console.log(inquirer);

// const fileSystem = require("fs");
// const generatePage = require("./src/page-template");


// const pageHTML = generatePage(name, github);

// fileSystem.writeFile("./index.html", pageHTML, (err) => {
  // if (err) throw err;

  // console.log("portfolio complete ! Check out index.html to see the output!");
// });
