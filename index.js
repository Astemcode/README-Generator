const generateMarkdown = require('./util/generateMarkdown.js');
const fs = require('fs');
const questions = require('inquirer'); 

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, err => {
    if (err) {
      return console.log(err);
    }
    console.log("Success! Your README.md file has been generated");
  });
}

// function to initialize program
function init() {

// array of questions for user
  questions
  .prompt([
    {
      type: 'input',
      message: 'What is the gitHub username?',
      name: 'userName',
      validate: function (answer) {
        if (answer.length < 3) {
          return console.log("That username is not valid!");
        }
        return true;
      }
    },
    {
      type: 'input',
      message: 'What is the name of your repository?',
      name: 'repoName',
      validate: function (answer) {
        if (answer.length < 3) {
          return console.log("An authentic Repository name is required!");
        }
        return true;
      }
    },
    {
        type: 'input',
        message: 'What is the link to your repository?',
        name: 'repoLink',
        validate: function (answer) {
          if (answer.length < 3) {
            return console.log("A valid link is requied!");
          }
          return true;
        }
      },
    {
        type: 'input',
        message: 'What is the name of your project?',
        name: 'projectName',
        validate: function (answer) {
          if (answer.length < 2) {
            return console.log('The Username selected is not valid!');
          }
          return true;
        }
      },
      {
        type: 'input',
        message: 'What is the Description for your project? (Please include purpose.)',
        name: 'description',
        validate: function (answer) {
          if (answer.length < 8) {
            return console.log('A Valid description is needed for this Project!');
          }
          return true;
        }
      },
      {
        type: 'input',
        message: 'What are the steps for installation?',
        name: 'installation',
      },
      {
        type: 'input',
        message: 'What are the best uses for this application?',
        name: 'appUse',
        validate: function (answer) {
          if (answer.length < 5) {
            return console.log('A best practice is needed for this app!');
          }
        }
      },
      {
        type: 'input',
        message: 'Who are the contributing members to this project?',
        name: 'members',
      },
      {
        type: 'input',
        message: 'Do you have any licenses for this test?',
        name: 'license',
      },
      {
        type: 'input',
        message: 'What tests have been run on this project?',
        name: 'tests',
      }
    ])

    .then((response) =>{
    const markDown = generateMarkdown(response);
    writeToFile('README.md',markDown);
    
  })
  }

init();
