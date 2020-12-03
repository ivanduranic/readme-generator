# README.md Generator

## Description

In order to present your project well, you are bound to have a quality README file with the information about your app: what the app is for, how to use it, how to install it, how to report issues and how to make contributions so that other developers are more likely to use and contribute to your project.

This is a command-line application that dynamically generates a professional README.md file from a user's input using the Inquirer Package.

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Questions](#questions)

## Installation

To generate your own README, first create a `.gitignore` file and include `node_modules/` so that your `node_modules` directory isn't tracked or uploaded to GitHub. Be sure to create your `.gitignore` file before installing any npm dependencies.

Secondly, make sure that your repo includes a `package.json` with the required dependencies. You can create one by running `npm init` when you first set up the project, before installing any dependencies.

Finally, run `npm install inquirer` in order to install the following npm package dependency as specified in the `package.json`:
`inquirer` that will prompt you for your inputs from the command line.

The application itself can be invoked by running the command `node index.js`.

## Usage

https://drive.google.com/file/d/1aFQad665uQ6is-vXTNcbNtCR_JrE_aPz/view

When you run `node index.js` the application will prompt you, using the `inquirer` package, in the command line with a series of questions about your GitHub project.

Application will then generate markdown for the README based on your responses to the inquirer prompts. 

Lastly, `fs.writeFile` is used to generate your project's README.md file. 

## License

MIT License

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## Questions

Find me on GitHub: github.com/ivanduranic

You can reach me with additional questions on: ivan.duranic@gmail.com

<br><br>

Respectfully,

Ivan Duranic