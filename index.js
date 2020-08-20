const fs = require('fs');
const inquirer = require('inquirer');

const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const { writeFile, copyFile } = require('./page-template');

const card = {
    manager: {},
    engineer: [],
    intern: []
};

function Questions() {
    inquirer
        .prompt([{
                type: 'confirm',
                name: 'confirmManager',
                message: 'Do you want to create a Manager profile?',
                default: true
            },
            {
                type: 'input',
                name: 'manager',
                message: 'Manager name',
                when: ({
                    confirmManager
                }) => confirmManager,
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Enter name of Manager');
                        return false;
                    }
                }
            },
            {
                type: 'number',
                name: 'id',
                message: 'Manager ID',
                when: ({
                    confirmManager
                }) => confirmManager,
                validate: idNumber => {
                    if (idNumber) {
                        return true;
                    } else {
                        console.log('Enter id of Manager');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: 'Manager email',
                when: ({
                    confirmManager
                }) => confirmManager,
                validate: emailInput => {
                    if (emailInput) {
                        return true;
                    } else {
                        console.log('Enter email of Manager');
                        return false;
                    }
                }
            },
            {
                type: 'number',
                name: 'officeNumber',
                message: 'Manager office number',
                when: ({
                    confirmManager
                }) => confirmManager,
                validate: officeNumber => {
                    if (officeNumber) {
                        return true;
                    } else {
                        console.log('Enter office number of Manager');
                        return false;
                    }
                }
            }
        ]).then(managerInfo => {
            if (managerInfo.confirmManager === true) {
                card.manager = new Manager(managerInfo.manager, managerInfo.id, managerInfo.email, managerInfo.officeNumber)
                console.log(card.manager.getRole());
            }
        }).then(confirmNewEmployee)
};

function createNewEmployee() {
    inquirer
        .prompt([{
            type: 'list',
            name: 'employeeRole',
            message: 'What is the employee role?',
            choices: ['Engineer', 'Intern']
        }]).then(employeeInfo => {
            if (employeeInfo.employeeRole === 'Engineer') {
                inquirer
                    .prompt([{
                            type: 'input',
                            name: 'name',
                            message: 'Engineer name',
                            validate: nameInput => {
                                if (nameInput) {
                                    return true;
                                } else {
                                    console.log('Enter name of Engineer');
                                    return false;
                                }
                            }
                        },
                        {
                            type: 'number',
                            name: 'id',
                            message: 'Engineer ID',
                            validate: idNumber => {
                                if (idNumber) {
                                    return true;
                                } else {
                                    console.log('Enter Engineer ID');
                                    return false;
                                }
                            }
                        },
                        {
                            type: 'input',
                            name: 'email',
                            message: 'Engineer email',
                            validate: emailInput => {
                                if (emailInput) {
                                    return true;
                                } else {
                                    console.log('Enter Engineer email');
                                    return false;
                                }
                            }
                        },
                        {
                            type: 'input',
                            name: 'github',
                            message: 'Engineer github',
                            validate: githubInput => {
                                if (githubInput) {
                                    return true;
                                } else {
                                    console.log('Enter Engineer github');
                                    return false;
                                }
                            }
                        }
                    ]).then(engineerInfo => {
                        card.engineer.push(new Engineer(engineerInfo.name, engineerInfo.id, engineerInfo.email, engineerInfo.github))
                    }).then(confirmNewEmployee)
            } else if (employeeInfo.employeeRole === 'Intern') {
                inquirer
                    .prompt([{
                            type: 'input',
                            name: 'name',
                            message: 'Intern name',
                            validate: nameInput => {
                                if (nameInput) {
                                    return true;
                                } else {
                                    console.log('Enter name of Intern');
                                    return false;
                                }
                            }
                        },
                        {
                            type: 'input',
                            name: 'id',
                            message: 'Intern ID',
                            validate: idNumber => {
                                if (idNumber) {
                                    return true;
                                } else {
                                    console.log('Enter Intern ID');
                                    return false;
                                }
                            }
                        },
                        {
                            type: 'input',
                            name: 'email',
                            message: 'Intern email',
                            validate: emailInput => {
                                if (emailInput) {
                                    return true;
                                } else {
                                    console.log('Enter Intern email');
                                    return false;
                                }
                            }
                        },
                        {
                            type: 'input',
                            name: 'school',
                            message: 'Intern school',
                            validate: schoolInput => {
                                if (schoolInput) {
                                    return true;
                                } else {
                                    console.log('Enter Intern school');
                                    return false;
                                }
                            }
                        }
                    ]).then(internInfo => {
                        card.intern.push(new Intern(internInfo.name, internInfo.id, internInfo.email, internInfo.school))
                    }).then(confirmNewEmployee)
            }
        })
};

function confirmNewEmployee() {
    inquirer
        .prompt([{
            type: 'confirm',
            name: 'newEmployee',
            message: 'Do you want to create a new Employee?',
            default: true
        }]).then(answer => {
            if (answer.newEmployee === true) {
                createNewEmployee();
            } else if (answer.newEmployee === false) {
                createHTML();
            }
        })
};

function createHTML() {
    var data = pageTemplate(card);
    writeFile(info)
        .then(writeFileResponse => {
            console.log(writeFileResponse);
            return fs.copyFile();
        })
        .catch(err => {
            console.log(err);
        })
}

Questions();








// const inquirer = require('inquirer');
// const fs = require('fs');
// const path = require('path');

// const Manager = require('./lib/Manager');
// const Intern = require('./lib/Intern');
// const Engineer = require('./lib/Engineer');

// const OUTPUT_DIR = path.resolve(__dirname, 'output');
// const outputPath = path.join(OUTPUT_DIR, 'team.html');

// const render = require('./src/page-template');


// const team = [];

// function generator() {
//     //startHtml();
//     // addMember();


//     function addMember() {
//         inquirer.prompt([{
//                     type: 'input',
//                     message: 'Enter team member name',
//                     name: 'name'
//                 },
//                 {
//                     type: 'input',
//                     message: 'Enter team member id',
//                     name: 'id'
//                 },
//                 {
//                     type: 'input',
//                     message: 'Enter team member email',
//                     name: 'email'
//                 },
//                 {
//                     type: 'list',
//                     message: "Select team member's role",
//                     choices: ['Engineer', 'Intern', 'Manager'],
//                     name: 'role'
//                 },
//             ])
//             .then((answers) => {
//                 // let answers = answers;
//                 let roleInfo = "";
//                 if (answers.role === "Engineer") {
//                     roleInfo = "GitHub username";
//                 } else if (answers.role === "Intern") {
//                     roleInfo = "school name";
//                 } else {
//                     roleInfo = "office number";
//                 }
//                 inquirer.prompt([{
//                         type: 'input',
//                         message: `Enter team member's ${roleInfo}`,
//                         name: "roleInfo"
//                     }])
//                     .then(function (
//                         roleInfo,
//                         answers
//                     ) {
//                         let newMember;
//                         if (answers.role === "Engineer") {
//                             newMember = new Engineer(name, id, email, roleInfo);
//                         } else if (answers.role === "Intern") {
//                             newMember = new Intern(name, id, email, roleInfo);
//                         } else {
//                             newMember = new Manager(name, id, email, roleInfo);
//                         }
//                         team.push(newMember);
//                         // addHtml(newMember)
//                         //     .then(function () {
//                         //         if (moreMembers === "yes") {
//                         //             addMember();
//                         //         } else {
//                         //             finishHtml();
//                         //         }
//                         //     });
//                     }).then(function () {
//                         inquirer.prompt({
//                             type: "list",
//                             message: "Would you like to add more team members?",
//                             choices: ["yes", "no"],
//                             name: "moreMembers"
//                         }).then(answer => {
//                             if (answer === 'yes') {
//                                 addMember();
//                             } else {
//                                 buildTeam();
//                             }
//                         })
//                     });
//             });
//     }


//     function buildTeam() {
//         if (!fs.existsSync(OUTPUT_DIR)) {
//             fs.mkdirSync(OUTPUT_DIR)
//         }
//         fs.writeFileSync(outputPath, render(team), 'utf-8')
//     }

//     addMember();
// }

// // function startHtml() {
// //     const html = `<!DOCTYPE html>
// //     <html lang=en>
// //     <head>
// //         <meta Charset="UTF-8">
// //         <meta name="viewport" content="width=device-width, initial-scale=1.0">
// //         <meta http-equiv="X-UA-Compatible" content="ie-edge">
// //         <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
// //         <link rel="stylesheet" href="./dist/style.css">
// //         <title>Team Profile</title>
// //     </head>
// //     <body>
// //         <nav class="navbar navbar-dark bg-dark mb-5">
// //             <span class="navbar-brand mb-0 h1 w-100 text-center">Team Profile</span>
// //         </nav>
// //         <div class="container">
// //             <div class="row">`;
// //     fs.writeFile("./dist/team.html");
// // }

// // function addHtml(member) {
// //     return new Promise(function (resolve, reject) {
// //         const name = member.getName();
// //         const role = member.getRole();
// //         const id = member.getId();
// //         const email = member.getEmail();
// //         let data = "";
// //         if (role === "Engineer") {
// //             const gitHub = member.getGithub();
// //             data = `<div class="col-6">
// //             <div class="card mx-auto mb-3" style="width: 18rem">
// //             <h5 class="card-header">${name}<br /><br />Engineer</h5>
// //             <ul class="list-group list-group-flush">
// //                 <li class="list-group-item">ID: ${id}</li>
// //                 <li class="list-group-item">Email Address: ${email}</li>
// //                 <li class="list-group-item">GitHub: ${gitHub}</li>
// //             </ul>
// //             </div>
// //         </div>`;
// //         } else if (role === "Intern") {
// //             const school = member.getSchool();
// //             data = `<div class="col-6">
// //             <div class="card mx-auto mb-3" style="width: 18rem">
// //             <h5 class="card-header">${name}<br /><br />Intern</h5>
// //             <ul class="list-group list-group-flush">
// //                 <li class="list-group-item">ID: ${id}</li>
// //                 <li class="list-group-item">Email Address: ${email}</li>
// //                 <li class="list-group-item">School: ${school}</li>
// //             </ul>
// //             </div>
// //         </div>`;
// //         } else {
// //             const officeNumber = member.getOfficeNumber();
// //             data = `<div class="col-6">
// //             <div class="card mx-auto mb-3" style="width: 18rem">
// //             <h5 class="card-header">${name}<br /><br />Manager</h5>
// //             <ul class="list-group list-group-flush">
// //                 <li class="list-group-item">ID: ${id}</li>
// //                 <li class="list-group-item">Email Address: ${email}</li>
// //                 <li class="list-group-item">Office Phone: ${officeNumber}</li>
// //             </ul>
// //             </div>
// //         </div>`
// //         }
// //         fs.appendFile("./dist/team.html", data, function (err) {
// //             if (err) {
// //                 return reject(err);
// //             };
// //             return resolve();
// //         });
// //     });
// // }


// generator();