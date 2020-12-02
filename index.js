var fs = require('fs');
var inquirer = require('inquirer');

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
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense']
    },
    {
        type: "input",
        name: "contributing",
        message: "Add guidelines so that other developers can contribute to your project."
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
        writeToFile("README2.md",
`
# ${data.title}

##  Description
    ${data.description}

##  Installation
    ${data.installation}

##  Usage
    ${data.usage}

##  License
    ${data.license}

##  Contributing
${data.contributing}`)
    })

}

// function call to initialize program
init();
