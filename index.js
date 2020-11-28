var fs = require('fs');
var inquirer = require('inquirer');

// array of questions for user
const questions = [
    {
        type: "input",
        name: "userName",
        message: "What is your name?"
    },
    {
        type: "input",
        name: "age",
        message: "How young are you?"
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
    inquirer.prompt(questions).then(function(data){
        writeToFile("file.md", `<ul> <li>My name is ${data.userName}</li><li>I am ${data.age} years young</li</ul>`)
    })

}

// function call to initialize program
init();
