const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type:'input',
        name:'github',
        message:'What is your GitHub username?🍄'
    },
    {
        type:'input',
        name:'email',
        message:'What is your Email address?📨'
    },

    {
        type:'input',
        name:'title',
        message:"What is your project's name?"

    },

    {
        type:'input',
        name:'description',
        message:'Please write a short description of your project?'
    },

    {
        type:'list',
        name:'license',
        message:'What kind of license ?',
        choices: ["MIT", "APACHE 2.0", "GPL", "None"]

    },
    {
        type:'input',
        name:'installation',
        message:'What command should be run to install dependencies?',
        default: 'npm i'
    },

    {
        type:'input',
        name:'test',
        message:'What command should be run to testing?',
        default: 'npm test'
    },

    {
        type:'input',
        name:'usage',
        message:'What does the user need to know how about using the repo ?'
        
    },

    {
        type:'input',
        name:'contributing',
        message:'What does the user need to know about contributing to the repo?'
        
    },

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
