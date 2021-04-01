// TODO: Include packages needed for this application/ done!
const inquirer = require("inquirer");
const fs = require("fs")
const util = require ('util');
const generateMarkdown = require("./generateMarkdown.js");

// TODO: Create an array of questions for user input / still need to put content
// const questions = [];



// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// // function init() {}
function init () {
  try {
    inquirer
  .prompt([
    {
      type: "input",
      name: "title",
      message: "What is the title of your project?",
    },
    {
      type: "input",
      name: "description",
      message: "What does your project do?",
    },
    {
    type: "input",
    name: "installation",
    message: "How do you install this project?",
    },
    {
    type: "input",
    name: "usage",
    message: "How do you use this project?",
    },
    {
    type: "input",
    name: "contribution",
    message: "Who contributed to this project?",
    },
    {
    type: "input",
    name: "test",
    message: "How do you test this project?",
    },
    {
      type: "checkbox",
      name: "license",
      message: "Which license would you like to use?",
      choices: [
          "MIT",
          "Microsoft Public License",
          "Boost",
          "BSD",
      ],
      },
    
  ])
  .then((data) => {
    const generatedMarkdown = generateMarkdown(data)
    console.log(generatedMarkdown)
    fs.writeFile("README.md", generatedMarkdown, (err) =>
      err ? console.log(err) : console.log("Success!")
    );
  });
  } catch (err) {
    console.log(err);
  }

}

// // Function call to initialize app
init();
