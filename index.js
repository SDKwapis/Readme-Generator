const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
      message: '\nHello there! Welcome to the world of Read Me!\nMy name is Dr. ReadMe and I help people create unique and professional Read Me files.\nPlease press ENTER to continue...',
      name: 'enterKey'
    },
    {
      type: 'input',
      message: '\nFirst, lets write a short description explaining your project. Consider these questions:\n-What was your motivation?\n-Why did you build this?\n-What problems are you solving?\n-What did you learn along the way?\n',
      name: 'description'
    },
    {
      type: 'input',
      message: '\nWhat steps should be followed to install your project?\n',
      name: 'instalation'
    },
    {
      type: 'input',
      message: '\nProvide detailed instructions and examples for use of your project\n',
      name: 'usage'
    },
    {
      type: 'input',
      message: '\nList your collaborators! Add links to their Github profiles.\nIf you used any third-party assets or followed tutorials\nbe sure to add those attributions here as well.\n',
      name: 'contributors'
    },
    {
      type: 'list',
      message: '\nWhich license did you choose for your project?',
      name: 'license',
      choices: ['MIT', 'Apache License 2.0', 'GNU GPLv3', 'ISC']
    },
    {
      type: 'input',
      message: '\nProvide examples of the tests you created for your application and how to run them.\n',
      name: 'tests'
    },
    {
      type: 'input',
      message: '\nEnter your GitHub username\n',
      name: 'contact'
    },
    {
      type: 'input',
      message: '\nEnter your email address\n',
      name: 'email'
    }
  ])
  .then((response) =>
    fs.writeFile('README.md', 
    `# Description
    ${response.description}
    # Instalation
    ${response.instalation}
    # Usage
    ${response.useage}
    # Contributors
    ${response.contributors}
    # License
    ${response.license}
    # Tests
    ${response.tests}
    # Contact
    [GitHub Profile](https://github.com/${response.contact})
    ${response.email}`,
    (err) => {
      err ? console.error(err) : console.log('Log Created!')
    }
  ));


  