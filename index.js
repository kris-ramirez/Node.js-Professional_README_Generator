const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [
    inquirer
  .prompt([
    {
        type: 'input',
        name: 'Title',
        message: 'Enter your project title',
      },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a short description explaining the what, why, and how of your project.',
    },
    {
      type: 'checkbox',
      name: 'table of contents',
      message: "What do you want included in your table of contents?",
      choices: ['Installation, Usage, Credits, License'],
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What are the steps required to install your project?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Provide instructions and examples for use.',
    },
    {
      type: 'input',
      name: 'Credits',
      message: 'List your collaborators',
    },
    {
      type: 'list',
      name: 'License',
      message: 'Enter your license.',
      choices: ['MIT', 'GNU GPLv3', 'GNU AGPLv3', 'GNU LGPLv3', 'Mozilla Public', 'Apache', 'Boost Software', 'Unlicense'],
    },
    {
        type: 'input',
        name: 'Contributing',
        message: 'If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so here.',
      },
      {
        type: 'input',
        name: 'Tests',
        message: 'Write tests for your application. Then provide examples on how to run them here.',
      },
      {
        type: 'input',
        name: 'GitHub username',
        //turn this into a link to their profile - goes in questions
        message: 'What is your GitHub username?',
      },
      {
        //goes in questions
        type: 'input',
        name: 'email',
        message: 'What is your email?',
      },
  ])
];

// TODO: Create a function to write README file


function writeToFile(fileName, data) {
const readMe = generateReadme(data);

fs.writeFile(fileName, readMe, (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(`README file "${fileName}" has been created successfully.`);
});
}

const fileName = 'README.md';
writeToFile(fileName, data);
// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app

init();