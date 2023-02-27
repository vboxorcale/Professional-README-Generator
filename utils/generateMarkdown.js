
const renderLicenseBadge = (license) =>{
  if (license !=="None"){
    return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return ``
}

const renderLicenseLink = (license) => {
  if (license !=="None") {
    return `* [License](#license)\n`
  }
  
  return '';

}

// function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ### Description

  ${data.description}

  ### Table of Contents

  * [Installation](#installation)

  * [Usage](#usage)

  ${renderLicenseLink(data.license)}
  * [Contributing](#contributing)

  * [Test](#test)

  * [Questions](#questions)

  ## Installation

  Run the following command to install all the dependencies:

  \`\`\`
  ${data.installation}
  \`\`\`

  ## Usage

  ${data.usage}


`;
}

module.exports = generateMarkdown;
