const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// an array of questions for user input
const questions =
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'Enter your project title.',
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
                choices: ['installation', 'usage', 'credits', 'license'],
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
                choices: ['MIT', 'Mozilla Public', 'Apache', 'Boost Software', 'Unlicense'],
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
                message: 'What is your GitHub username?',
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is your email?',
            },
        ])
    .then((data) => {
        const fileName = 'README1.md';
        writeToFile(fileName, data);
    })
    .catch((error) => {
        console.error(error);
    });


// function to write README file
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
//generate table of contents
function generateTableOfContents(data) {
    const tableOfContents = data['table of contents'].map((item) => {
        const section = item.toLowerCase();
        const link = `[${section}](#${section})`;
        return `* ${link}`;

    });
    return tableOfContents.join('\n');
}

// generate README content
function generateReadme(data) {
    const tableOfContents = generateTableOfContents(data);
    const readMeContent = generateMarkdown(data, tableOfContents);
    return readMeContent;
}


