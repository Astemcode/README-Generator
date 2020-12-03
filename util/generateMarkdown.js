// function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}
    ## Description
    ${data.Description}
    ## Table of Contents
    * [Installation](#installation)
    * [Usage](#usage)
    * [Contributing](#contributing)
    * [Tests](#tests)
    * [License](#license)
    * 
    ## Usage
    -To unstall the project follow the following instructions
    ${data.Uses}
    ## Installation
    -To unstall the project follow the following instructions
    ${data.installationSteps}
    ## GitHub Repository Link
    - ${data.repoLink}
    ## Contributors
    - Please find the contributors of this project below
    ${data.contributors}
    ## Tests
    - Here is a description of tests that were completed on this project before release.
    - ${data.tests}
    ## License Used in this project
    - ${data.licenses}
    ## Questions
    *Please direct Questions to the following
       - https://github.com/${data.userName}
       - Email : ${data.Email}
  `;
  }
  module.exports = generateMarkdown;