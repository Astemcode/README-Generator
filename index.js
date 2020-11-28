// array of questions for user
const questions = require('inquirer') 
  questions
  .prompt([
    {
      type: 'input',
      message: 'What is the name of your repository?',
      name: 'repoName',
    },
    {
        type: 'input',
        message: 'What is the link to your repository?',
        name: 'repoLink',
      },
    {
        type: 'input',
        message: 'What is the name of your project?',
        name: 'projectName',
      },
      {
        type: 'input',
        message: 'What is the Description for your project? (Please include purpose.)',
        name: 'description',
      },
      {
        type: 'input',
        message: 'What would you like to include into your table of contents?',
        name: 'contents',
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

    .then((response) =>
    console.log(response)
    )

    

// function to write README file
function writeToFile("README.md", markDown) {
  
}

// function to initialize program
function init() {
  // console.log(questions)

}

// function call to initialize program
init();
