var fs = require('fs');

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

}

// function call to initialize program
// init();
