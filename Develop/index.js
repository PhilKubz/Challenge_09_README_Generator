// TODO: Include packages needed for this application
// Import necessary modules
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'title',
      message: "What is your project's title?",
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please provide a brief description of your project:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Please provide installation instructions for your project:',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Please provide usage instructions for your project:',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Please choose a license for your project:',
      choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3-Clause', 'None'],
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Please provide contribution guidelines for your project:',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Please provide test instructions for your project:',
    },
    {
      type: 'input',
      name: 'username',
      message: "What is your GitHub username?",
    },
    {
      type: 'input',
      name: 'email',
      message: "What is your email address?",
    },
  ];

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
      err ? console.error(err) : console.log('Success! Your README.md file has been generated.')
    );
  }

// Function to initialize app
function init() {
    inquirer
      .prompt(questions)
      .then((data) => {
        const markdown = generateMarkdown(data);
        writeToFile('README.md', markdown);
      })
      .catch((error) => {
        console.log(error);
      });
  }


// Function call to initialize app
init();