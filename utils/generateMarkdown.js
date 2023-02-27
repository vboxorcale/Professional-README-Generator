
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

  ## License

  ## Contributing

  ${data.contributing}

  ## Tests

  To run tests, run the following command:

  \`\`\`
  ${data.test}
  \`\`\`

  ### Questions
  If you have any questions about the project open an issue or contact me at
  ${data.email}

  You can also find more at my work at [${data.github}](https://github.com/${data.github})


`;
}

module.exports = generateMarkdown;
