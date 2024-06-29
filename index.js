const inquirer = require('inquirer');
const fs = require('fs');
const colors = require("colors");

inquirer
  .prompt([
    {
      message: colors.brightMagenta('\nHello there! Welcome to the world of Read Me!\nMy name is Dr. ReadMe and I help people create unique and professional Read Me files.\nPlease press ENTER to continue...'),
      name: 'enterKey'
    },
    {
      type: 'input',
      message: colors.brightMagenta('\nFirst, what is the name of your project?\n'),
      name: 'name'
    },
    {
      type: 'input',
      message: colors.brightMagenta('\nNow lets write a short description explaining your project. Consider these questions:\n-What was your motivation?\n-Why did you build this?\n-What problems are you solving?\n-What did you learn along the way?\n'),
      name: 'description'
    },
    {
      type: 'input',
      message: colors.brightMagenta('\nWhat steps should be followed to install your project?\n'),
      name: 'installation'
    },
    {
      type: 'input',
      message: colors.brightMagenta('\nProvide detailed instructions and examples for use of your project\n'),
      name: 'usage'
    },
    {
      type: 'input',
      message: colors.brightMagenta('\nList your collaborators! Add links to their Github profiles.\nIf you used any third-party assets or followed tutorials\nbe sure to add those attributions here as well.\n'),
      name: 'contributors'
    },
    {
      type: 'list',
      message: colors.brightMagenta('\nWhich license did you choose for your project?'),
      name: 'license',
      choices: ['MIT', 'Apache License 2.0', 'GNU GPLv3', 'Attribution License']
    },
    {
      type: 'input',
      message: colors.brightMagenta('\nProvide examples of the tests you created for your application and how to run them.\n'),
      name: 'tests'
    },
    {
      type: 'input',
      message: colors.brightMagenta('\nEnter your GitHub username\n'),
      name: 'contact'
    },
    {
      type: 'input',
      message: colors.brightMagenta('\nEnter your email address\n'),
      name: 'email'
    }
  ])
  .then((responses) => {

    const badges = () => {
      let newBadge = `${responses.license}`;
      if(newBadge === 'MIT') {
        return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
      } else if (newBadge === 'Apache License 2.0') {
        return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
      } else if (newBadge === 'GNU GPLv3') {
        return '[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
      } else if (newBadge === 'Attribution License') {
        return '[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)'
      } else {
        return 'No License Found'
      };
    }

    const content = `

# ${responses.name} \t ${badges()} 

## Table Of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Tests](#tests)
- [Questions](#questions)



# Description
${responses.description}

# Installation
${responses.installation}

# Usage
${responses.usage}

# Contributing
${responses.contributors}

# License
${responses.license}

# Tests
${responses.tests}

# Questions
[GitHub Profile](https://github.com/${responses.contact})
For questions or comments please reach out to me at: ${responses.email}`;

    fs.writeFile(`${responses.name}.md`, content, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log('Read Me Created!');
      }
    });
  });






  