
function renderLicense(license) {
  if (license !=="None"){
    return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return ``
}





// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicense(data.license)}

`;
}

module.exports = generateMarkdown;
