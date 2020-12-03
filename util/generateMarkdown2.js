// function to generate markdown for README
function generateMarkdown(responses, userInfo) {

  // ##Description
  // ${data.description}

  // ##Table of Contents
  // let tableContent = `## Table of Contents`;

  // if (userResponses.installation !== '') { tableContent += `
  // * [Installation](#installation)` };

  // if (userResponses.usage !== '') { tableContent += `
  // * [Usage](#usage)` };

  // if (userResponses.contributing !== '') { tableContent += `
  // * [Contributing](#contributing)` };

  // if (userResponses.tests !== '') { tableContent += `
  // * [Tests](#tests)` };

  return `# ${data.title}

  

`;
}

module.exports = generateMarkdown;
