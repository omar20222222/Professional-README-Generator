// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  # Professional-README-Generator

  ## Description

  This project will generate a markdown file for future project READMEs,
  It will ask a series of questions like project title, description, how to install it, how to use it, collaborators, 
  what license to use, your github username, your email, and tests.
  
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#Usage)
  - [Contributing](#Contributing)
  - [Installation](#installation)
  - [Tests](#Tests)
  - [Questions](#Questions)
  
  
  ## Installation

  Download it through Github
  Ensure inquirer is installed
  
  ## Usage
  
  Open terminal
  in Terminal do a  'node index.js'
  Answer the prompts as follows
  On success a README.md will be generated.

  ## Tests

  To apply a test on this app, pen up the file in VS Code. Open the terminal, 
  change directory into the root folder "challenge-9-professional-README-generator", and run "node index.js"


  
  ## Questions
  What is the title of your project ?
  What is your GitHub Username ?
  What is your email address ?
  What is your project ? and what problem will it solve?
  Why did you create this project?
  How will someone use this ?
  Please enter your installation instructions
  Please provide instructions and examples for use
  Which license will you use for your project ?
  Would you like to allow other developers to contribute?
  Please provide guidelines for contributing ?
  Please provide instructions on how to test the app ?

  


`;
}

module.exports = generateMarkdown;
