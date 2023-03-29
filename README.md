# 09 Node.js Challenge: Professional README Generator

## Overview

When using GitHub, it is important to create high quality README files for other users to understand installation and implementation of the work that has been created. With this README generator, creating a README is much more efficient and allows for more time to be spent on the actual project!


## User Story

```md
AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
```

## Video Demonstration
[Video Demonstration.webm](https://user-images.githubusercontent.com/122698773/228424001-39e9bcc9-9496-4827-92e3-34b86ba6e697.webm)

The video outline how to get to the temrinal in vscode, use a `npm install` command, and invoke the program using `node index`.
All prompts are answered during this demonstration, and by clicking on one of the elements in the table of contents it shows that the links to sections are properly functioning.


## Installation
1. Clone the repository on your local machine.
2. Navigate to the root directory of the application in your terminal.
3. In order to install inquirer, please use `npm i inquirer@8.2.4`.
4. Run `npm install` to install the required dependencies.

## Usage
1. Navigate to the root directory of the application in your terminal.
2. The application will be invoked by using the following command:

```bash
node index
```

3. Answer the prompts to generate a professional README file.



## Things to Note

These are some additional criteria that are necessary for proper execution of this program:

* A `.gitignore` file must be created that includes `node_modules/` and `.DS_Store/` so that your `node_modules` directory isn't tracked or uploaded to GitHub. Create the `.gitignore` file before doing an `npm install`.

* The repo must include a `package.json` with the required dependencies. By using the `npm init` command you will establish this for usage.

* Of the information used in this process, the Usaer Story and Acceptance Criteria were used as given from the prompt to display clarity of the program

* The sample README.md created form this program is located inside the 'Develop' folder. This is the exact README.md file created in this video demonstration.





