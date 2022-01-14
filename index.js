// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

const generateMarkdown = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input

const questions = () => {

    return inquirer.prompt([
        {
            type: 'input',
            name: 'username',
            message: 'What is your GitHub username?',
        },
        {
            type: "input",
            name: "email",
            message: "What is your email address?"
        },
        {
            type: "input",
            name: "project",
            message: "What is your project name?",
        },
        {
            type: "input",
            name: "description",
            message: "Please write a short description of your project"
        },
        {
            type: "list",
            name: "license",
            message: "Chose the appropriate license for this project: ",
            choices: [
                "Apache",
                "GPL",
                "BSD",
                "MIT",
                "none",
            ]
        },
        {
            type: "input",
            name: "install",
            message: "What command should be run to install dependencies?"
        },
        {
            type: "input",
            name: "tests",
            message: "What command should be run to run tests?"
        },
        {
            type: "input",
            name: "usage",
            message: "What does the user need to know about using the repo?"
        },
        {
            type: "input",
            name: "contributing",
            message: "What does the user need to know about contributing to the repo?"
        },
       
    ]);
} 

// TODO: Create a function to write README file
const writeFile = data => {
    fs.writeFile('README.md', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("Your README has been successfully created!")
        }
    })
};



// TODO: Create a function to initialize app
 questions()

 .then(answers => {
     return generateMarkdown(answers);
 })

 .then(data => {
     return writeFile(data);
 })

 .catch(err => {
     console.log(err)
 })