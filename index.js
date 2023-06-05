// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const licenses = require("./licenses.js")

// TODO: Create an array of questions for user input
const questions = [
    {
        // WHEN I am prompted for information about my application repository
        name: "gitUrl",
        type: "input",
        message: "Please enter the url of the github repository for this README file",
    },
    {
        // WHEN I enter my project title
        name: "gitProjectName",
        type: "input",
        message: "Please enter the name of your project",
    },
    {
        // WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
        name: "gitDesc",
        type: "input",
        message: "Please enter the description of the project",
    },
    {
        name: "gitInst",
        type: "input",
        message: "Please enter the installation instructions",
    },
    {
        name: "gitTest",
        type: "input",
        message: "Please enter the test instructions",
    },
    {
        name: "gitUse",
        type: "input",
        message: "Please enter the usage instructions",
    },
    {
        name: "gitContribute",
        type: "input",
        message: "Please enter the contribution instructions",
    },
    {
        name: "gitTech",
        type: "input",
        message: "Please enter any technology used",
    },
    

    // WHEN I choose a license for my application from a list of options
    {
        name: "licenses",
        type: "checkbox",
        message: "Which licenses did you use?",
        choices: [
            // "None",
            ...licenses.map((license) => license.license)
            // "MIT License",
            // "Apache License",
            // "GNU General Public License (GPL)",
            // "BSD Licenses",
            // "Creative Commons Licenses",
            // "Unlicense",
            // "Other"
        ]
    },
    // {
    //     name: "otherLicense",
    //     type: "checkbox",
    //     message: "Please specify the other licenses used:",
    //     when: (answers) => answers.licenses.includes("Other"),
    //     choices: [
    //         "Boost Software License 1.0",
    //         "Eclipse Public License 1.0",
    //         "The Organization for Ethical Source - The Hippocratic License 2.1",
    //         "The Organization for Ethical Source - The Hippocratic License 3.0",
    //         "IBM Public License Version 1.0",
    //         "ISC License (ISC)",
    //         "Mozilla Public License 2.0",
    //         "Open Data Commons",
    //         "Perl",
    //         "SIL Open Font License 1.1",
    //         "The Unlicense",
    //         "The Do What the Fuck You Want to Public License",
    //         "The zlib / libpng License"
    //     ]
    // },
    // {
    //     name: "gnu",
    //     type: "checkbox",
    //     message: "Please specify the GNU licenses used:",
    //     when: (answers) => answers.licenses.includes("GNU General Public License (GPL)"),
    //     choices: [
    //         "GNU GPL v3",
    //         "GNU GPL v2",
    //         "GNU AGPL v3",
    //         "GNU LGPL v3",
    //         "GNU FDL v1.3"
    //     ]
    // },
    // {
    //     name: "openDataCommons",
    //     type: "checkbox",
    //     message: "Please specify the Open Data Commons licenses used:",
    //     when: (answers) => answers.othersLicense.includes("Open Data Commons"),
    //     choices: [
    //         "Attribution License (BY)",
    //         "Open Database License (ODbL)",
    //         "Public Domain Dedication and License (PDDL)",
    //     ]
    // },
    // {
    //     name: "perl",
    //     type: "checkbox",
    //     message: "Please specify the Perl licenses used:",
    //     when: (answers) => answers.othersLicense.includes("Perl"),
    //     choices: [
    //         "The Perl License",
    //         "The Artistic License 2.0"
    //     ]
    // },
    // {
    //     name: "bsd",
    //     type: "checkbox",
    //     message: "Please specify the BSD licenses used:",
    //     when: (answers) => answers.licenses.includes("BSD Licenses"),
    //     choices: [
    //         "BSD 3-Clause License",
    //         "BSD 2-Clause License",
    //     ]
    // },
    // {
    //     name: "creativeCommons",
    //     type: "checkbox",
    //     message: "Please specify the Creative Commons licenses used:",
    //     when: (answers) => answers.licenses.includes("Creative Commons Licenses"),
    //     choices: [
    //         "CC0",
    //         "Attribution 4.0 International",
    //         "Attribution - ShareAlike 4.0 International",
    //         "Attribution - NonCommercial 4.0 International",
    //         "Attribution - NoNoDerivatives 4.0 International",
    //         "Attribution - NonCommercial - ShareAlike 4.0 International",
    //         "Attribution - NonCommercial - NoDerivatives 4.0 International",
    //     ]
    // },
    // this will be checkbox input in inquirer
    // WHEN I enter my GitHub username
    {
        name: "gitName",
        type: "input",
        message: "Please enter your GitHub username",
    },
    // WHEN I enter my email address
    {
        name: "email",
        type: "input",
        message: "Please enter your Email address",
    },
    {
        name: "gitPage",
        type: "input",
        message: "Please enter your GitHub Deployed Page URL",
    },
    {
        name: "media",
        type: "confirm",
        message: "Would you like to attach an image?"
    },
    {
        name: "images",
        type: "input",
        message: 'Please enter the description and location of the image (Example: description,url)',
        when: (answers) => answers.media === true
    },
    // {
    //     name: "otherMedia",
    //     type: "confirm",
    //     message: "Would you like to attach another image?",
    //     when: (answers) => answers.media === true
    // },
];

// TODO: Create a function to write README file
function writeToFile(fileName, readmeContent) {
    fs.writeFile(fileName, readmeContent, (err) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log("README File Generated Successfully!");
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log("Answers:", answers);

        const gitUrl = answers.gitUrl;
        const gitProjectName = answers.gitProjectName;
        const gitDesc = answers.gitDesc;
        const gitInst = answers.gitInst;
        const gitTest = answers.gitTest;
        const gitUse = answers.gitUse;
        const gitContribute = answers.gitContribute;
        const gitTech = answers.gitTech;
        const chosenLicenses = answers.licenses;
        const licenseBadges = chosenLicenses.map((license) => {
            const selectedLicense = licenses.find((licenseItem) => licenseItem.license === license);
            if (selectedLicense) {
                return {
                    badge: selectedLicense.badge,
                    permission: selectedLicense.permission
                };
            } else {
                return {
                    license: "None",
                    badge: "None",
                    permission: "None"
                }
            }
        });
        // const otherLicense = answers.otherLicense;
        // const gnu = answers.gnu;
        // const openDataCommons = answers.openDataCommons;
        // const perl = answers.perl;
        // const bsd = answers.bsd;
        // const creativeCommons = answers.creativeCommons;
        const gitName = answers.gitName;
        const email = answers.email;
        const gitPage = answers.gitPage;

        const images = [];

    if (answers.images) {
      const imagesInput = answers.images.split(";");

      imagesInput.forEach((imageInput) => {
        const [description, url] = imageInput.split(",");
        images.push({ description, url });
      });

      const moreImagesPrompt = {
        name: "addMore",
        type: "confirm",
        message: "Would you like to attach another image?",
      };

      const descriptionUrlPrompt = {
        name: "additionalImages",
        type: "input",
        message:
          "Please enter the description and location of the additional image (Example: description,url)",
      };

      const moreImages = () => {
        inquirer.prompt(moreImagesPrompt).then((answer) => {
          if (answer.addMore) {
            inquirer.prompt(descriptionUrlPrompt).then((answers) => {
              const additionalImagesInput = answers.additionalImages;
              const [description, url] = additionalImagesInput.split(",");
              images.push({ description, url });
              moreImages();
            });
          } else {
            console.log("All Images:", images);
            generateReadme(answers, images);
          }
        });
      };

      moreImages();
    } else {
      generateReadme(answers, images);
    }
    function generateReadme(answers, images) {
const readmeContent = `# ${answers.gitProjectName}
    
    
## Description
${answers.gitDesc}
        


## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
${answers.images ? "- [Images](#images)\n" : ""}
${answers.gitContribute ? "- [Contributing](#contributing)\n" : ""}
${answers.gitTech ? "- [Technology](#technology)\n" : ""}
${answers.gitTest ? "- [Tests](#tests)\n" : ""}
${!answers.licenses.includes("None") ? "- [License](#license)\n" : ""}
- [Questions](#questions)
${answers.gitPage ? '- [Deployed Page](#deployed-page)\n' : ''}


    
## Installation
${answers.gitInst}
        


## Usage
${answers.gitUse}


    
${images.length > 0 ? '## Images\n' + images.map((images) => `- ${images.description}: ![${images.description}](${images.url})`).join('\n') + '\n' : ''}


    
${answers.gitContribute ? `## Contributing\n${answers.gitContribute}\n` : ""}



${answers.gitTech ? `## Technology\n${answers.gitTech}\n` : ""}


    
${answers.gitTest ? `## Tests\n${answers.gitTest}\n` : ""}


    
${answers.licenses.length > 0 && !answers.licenses.includes("None") ? '## License(s)\n' + answers.licenses.map((license) => {
    const selectedLicense = licenses.find((licenseItem) => licenseItem.license === license);
    if (selectedLicense && selectedLicense.license !== "None") {
      return `${selectedLicense.license}\n(${selectedLicense.badge})\n${selectedLicense.permission}\n\n`;
    }
  }).filter(Boolean).join('') : ''}

  
    
## Questions
Email: ${answers.email}
        
    
GitHub: [GitHub](https://github.com/${answers.gitName})
        
    
GitHub Repo: [GitHub repository](${answers.gitUrl})
        
  

${answers.gitPage ? '## Deployed Page\n![Deployed GitHub Page](' + answers.gitPage + ')' : ''}
`;
    writeToFile("README.md", readmeContent);
    
    return readmeContent;
    }
  });
}


// Function call to initialize app
init();
