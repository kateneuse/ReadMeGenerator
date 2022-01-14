
// TODO: Create a function to generate markdown for README
function generateMarkdown (data) {
  return `#README



  ## Project name
  ${data.project}

  ## Description
  ${data.description}

  ## Table of Contents

  *[Installation]
  *[Usage]
  *[License]
  *[Contributing]
  *[Tests]
  *[Questions]

  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}

  ## License
  ${data.license}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  

  Find me on Github: [${data.username}] (https://github.com/${data.username}) 
  Email me with any questions [${data.email}]
`;
}





module.exports = generateMarkdown;
