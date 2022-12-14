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
  
 ${data.installation}

  Download it through Github
  Ensure inquirer is installed
  
  ## Usage  
  
  ${data.usage}
  
  Open terminal
  in Terminal do a  'node index.js'
  Answer the prompts as follows
  On success a README.md will be generated.

  ## Tests  
  
   ${data.test}


  To apply a test on this app, pen up the file in VS Code. Open the terminal, 
  change directory into the root folder "challenge-9-professional-README-generator", and run "node index.js"


  
  ## Questions 
  
  What is the title of your project ?
  ${data.title}

  What is your GitHub Username ?
  ${data.githubUsername}

  What is your email address ?
  ${data.email}

  What is your project ? and what problem will it solve?
  ${data.what}
  ${data.why}

  Why did you create this project?
  ${data.how}

  How will someone use this ?
  Please enter your installation instructions
  ${data.installation}

  Please provide instructions and examples for use
  Which license will you use for your project ?
  ${data.license}

  Would you like to allow other developers to contribute?
  ${data.confirmContributers}

  Please provide guidelines for contributing ?
  Please provide instructions on how to test the app ?
  ${data.test}

  
`;
}

module.exports = generateMarkdown;
