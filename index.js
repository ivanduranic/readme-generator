const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project README?"
    },
    {
        type: "input",
        name: "description",
        message: "Write a short description explaining the what, why, and how. What was your motivation? Why did you build this project? What problem does it solve? What did you learn? What makes your project stand out?"
    },
    {
        type: "input",
        name: "installation",
        message: "What are the steps required to install your project?"
    },
    {
        type: "input",
        name: "usage",
        message: "Provide instructions and examples for use."
    },
    {
        type: "list",
        name: "license",
        message: "What license do you choose for your project?",
        choices: [
            "Apache",
            "Academic",
            "GNU",
            "ISC",
            "MIT",
            "Mozilla",
            "Open"
        ]
    },
    {
        type: "input",
        name: "contributing",
        message: "Add guidelines so that other developers can contribute to your project."
    },
    {
        type: "input",
        name: "tests",
        message: "If applicable, provide any tests written for your application and provide examples on how to run them."
    },
    {
        type: "input",
        name: "questions",
        message: "What can I do if I have an issue?"
    },
    {
        type: "input",
        name: "username",
        message: "Please enter your GitHub username: "
    },
    {
        type: "input",
        name: "email",
        message: "Please enter you e-mail address."
    }
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err) throw err;
        console.log('File created!');
    });
}


// function to initialize program
function init() {
    inquirer.prompt(questions).then(function (data) {
        writeToFile("README2.md", generateMarkdown(data))
// `
// # ${data.title}

// ##  Description
//     ${data.description}

// ##  Table of contents
//     Installation
//     Usage
//     License
//     Contributing
//     Tests
//     Questions

// ##  Installation
//     ${data.installation}

// ##  Usage
//     ${data.usage}

// ##  License
//     ${data.license}

// ##  Contributing
//     ${data.contributing}

// ##  Tests
//     ${data.tests}

// ##  Questions
//     github.com/${data.questions}
//     If you have any additional questions you can reach me at:
//     ${data.email}
// `)
    })

}

// function call to initialize program
init();
