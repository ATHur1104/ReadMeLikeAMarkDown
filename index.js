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
        message: "Please enter the url of the github repository for this README file.",
    },
    {
        // WHEN I enter my project title
        name: "gitProjectName",
        type: "input",
        message: "Please enter the name of your project.",
    },
    {
        // WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
        name: "gitDesc",
        type: "input",
        message: "Please enter the description of the project.",
    },
    {
        name: "gitInst",
        type: "input",
        message: "Please enter the installation instructions.",
    },
    {
        name: "gitTest",
        type: "input",
        message: "Please enter the test instructions. Pressing ENTER on blank will not populate corresponding information.",
    },
    {
        name: "gitUse",
        type: "input",
        message: "Please enter the usage instructions.",
    },
    {
        name: "gitContribute",
        type: "input",
        message: "Please enter the contribution instructions. Pressing ENTER on blank will not populate corresponding information.",
    },
    {
        name: "gitTech",
        type: "input",
        message: "Please enter any technology used. Pressing ENTER on blank will not populate corresponding information.",
    },
    

    // WHEN I choose a license for my application from a list of options
    {
        name: "licenses",
        type: "checkbox",
        message: "Which licenses did you use?",
        choices: [
            ...licenses.map((license) => license.license)
        ]
    },
    {
        name: "gitName",
        type: "input",
        message: "Please enter your GitHub username.",
    },
    // WHEN I enter my email address
    {
        name: "email",
        type: "input",
        message: "Please enter your Email address.",
    },
    {
        name: "gitPage",
        type: "input",
        message: "Please enter your GitHub Deployed Page URL. Pressing ENTER on blank will not populate corresponding information.",
    },
    {
        name: "media",
        type: "confirm",
        message: "Would you like to attach an image?"
    },
    {
        name: "images",
        type: "input",
        message: 'Please enter the description and location of the image (Example: description,image01.jpeg *Note that there is no space between the comma and the image filename*) Place the images you would like to use in the READMEAssets folder located in the Generated Folder.',

        when: (answers) => answers.media === true
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, readmeContent) {
    const folderPath = './Generated';
    if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath, { recursive: true });
      }
    
      fs.writeFile(`${folderPath}/${fileName}`, readmeContent, (err) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("README File Generated Successfully! Please go into the README File and clean up any unwanted spaces. If you have used an Image remember to paste the READMEAssets folder along with the README.md file.");
      });
    }

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {

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
          "Please enter the description and location of the additional image (Example: description,image01.jpeg)",
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


    
${images.length > 0 ? '## Images\n' + images.map((image) => `${image.description}:\n![${image.description}](./READMEAssets/${image.url})`).join('\n\n') + '\n' : ''}



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
