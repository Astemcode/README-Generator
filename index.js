// array of questions for user
const questions = [
    {
        type: 'input',
        message: 'What is the link to your repository?',
        name: 'repoLink',
      },
    {
        type: 'input',
        message: 'What is the name of your repository?',
        name: 'repoName',
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
      },
    
    ]
    .then((response) =>
      response.confirm === response.password
        ? console.log('Success!')
        : console.log('You forgot your password already?!')
    );
  
;

// function to write README file
function writeToFile(fileName, data) {

}

// function to initialize program
function init() {

}

// function call to initialize program
init();
