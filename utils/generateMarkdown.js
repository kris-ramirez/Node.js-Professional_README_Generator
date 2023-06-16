// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license === 'MIT') {
        return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    } else if (license === 'Mozilla Public') {
        return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
    } else if (license === 'Apache') {
        return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    } else if (license === 'Boost Software') {
        return '[![License: Boost](https://img.shields.io/badge/License-Boost%201.0-blue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
    } else if (license === 'Unilicense') {
        return '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';
    }
    return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license === 'MIT'){
        return 'https://www.mit.edu/~amini/LICENSE.md';
    } else if (license === 'Mozilla Public') {
        return 'https://opensource.org/licenses/MPL-2.0';
    } else if (license === 'Apache') {
        return 'https://www.apache.org/licenses/LICENSE-2.0.txt';
    } else if (license === 'Boost Software') {
        return 'https://www.boost.org/LICENSE_1_0.txt';
    } else if (license === 'Unilicense') {
        return 'http://unlicense.org/';
    } else {
        return '';
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if(license) {
        return `## License 
This project is licensed under the ${license} license. [Learn more](${renderLicenseLink(license)})
`;
    } else {
        return '';
    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data, tableOfContents) {
  return `# ${data.name}
${renderLicenseBadge(data.License)}
## Description
${data.description}
  
## Table of Contents
${tableOfContents}
  
## Installation
${data.installation}
  
## Usage
${data.usage}
  
## Credits
${data.Credits}
      
${renderLicenseSection(data.License)}

  
## Contributing
${data.Contributing}
  
## Tests
${data.Tests}
  
## Questions
GitHub: [${data['GitHub username']}](https://github.com/${data['GitHub username']})
Email: ${data.email}
`;
} 

module.exports = generateMarkdown;
