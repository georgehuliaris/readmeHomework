// TODO: Include packages needed for this application/ done!
const inquirer = require('inquirer');
const fs = require("./generateMarkdown.js");

// TODO: Create an array of questions for user input / still need to put content
// const questions = [];
inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the title of your project?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'What does your project do?',
      name: 'description',
    },
    {
    type: 'input',
    message: 'How do you install this project?',
    name: 'installation',
    },
    {
    type: 'input',
    message: 'How do you use this project?',
    name: 'usage',
    },
    {
    type: 'input',
    message: 'What does this project contribute?',
    name: 'contribution guidelines',
    },
    {
    type: 'input',
    message: 'How do you test this project?',
    name: 'test instructions',
    },
    
  ])
  .then((data) => {
    const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;

    fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();



