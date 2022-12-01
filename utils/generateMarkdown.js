// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  # Professional-README-Generator

  ## Description
  
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#Usage)
  - [Contributing](#Contributing)
  - [Installation](#installation)
  - [Tests](#Tests)
  - [Questions](#Questions)
  
  
  ## Installation
  
  ## Usage
  
  
  
  ## Contributing
  
  ## Tests
  
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
