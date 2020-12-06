// function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.projectName}
## Repository Name
${data.repoName}

* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributors)
* [Tests](#tests)
* [License](#badges)

## Usage
- ${data.appUse}

## Installation
- To install the project follow the following instructions:
* ${data.installation}

## GitHub Repository Link

- ${data.repoLink}

## Contributors
- Please find the contributors of this project below
${data.members}

## Tests
- Here is a description of tests that were completed on this project before release.
- ${data.tests}

## License Used in this project
- ${data.licenses}


## Badges
![GitHub license](https://img.shields.io/badge/license-${data.licenses}-blue.svg)

## Questions
* Please direct Questions to the following
- https://github.com/${data.userName}

`;
}
module.exports = generateMarkdown;