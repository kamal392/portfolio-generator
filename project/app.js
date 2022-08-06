// This needs to be added in order to use file system
 const generatePage = require("./src/page-template");
const fileSystem = require("fs");
const inquirer = require('inquirer');

const promptUser = () =>{
return inquirer.prompt([
  {

    type:'input',
    name :'name',
    message:'What is your name?',
    validate: nameInput =>{
      if(nameInput) {
        return true;

      }else{
        console.log('Please enter your name!');
        return false;
      }
    }

  },
  { 
    type:'input',
    name:'github',
    message:'Enter your Github Username',
    validate: githubInput =>{
      if (githubInput){
        return true;

      }else{
        console.log('Please enter your Github Username');
        return false;
      }
    }
  },
  { 
    type:'confirm',
    name:'confirmAbout',
    message:'Would you like to talk about yourself:',
    default:true

  },

  {
    type:'input',
    name:'about',
    message:'provide some information about yourself:',
    when:({confirmAbout}) =>{
      if (confirmAbout){
        return true;
      }else{
        return false;
      }
    }
  }


]);
};

// Add function promptProject() for the project question
const promptProject = portfolioData =>{
   


  console.log(`
  ================
  Add a New project
  `);
  // if there is no 'projects' array property,create one
  if (!portfolioData.projects){
    portfolioData.projects = [];
  }
  return inquirer.prompt([
    {
      type:'input',
      name:'name',
      message:'What is the name of your project?'
    },
    {
      type:'input',
      name:'description',
      message:'Provide a description of the project(Require)',
      validate: descriptionInput =>{
      if(descriptionInput){
        return true;
      }else{
        console.log('Please provide a description of your project');
        return false;
      }
      }
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
      message:'Enter the Github link to your project.(Required)',
      validate: linkInput =>{
        if(linkInput){
          return true;
        }else{
          console.log('Please enter Github link');
          return false;
        }
      }
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
