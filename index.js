const inquirer = require('inquirer');
const fs = require('fs');

const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const { default: generateEmptyCoverage } = require('@jest/reporters/build/generateEmptyCoverage');

const team = [];

function generator() {
    startHtml();
    addMember();
}

function addMember() {
    inquirer.prompt([{
                message: 'Enter team member name',
                name: 'name'
            },
            {
                type: 'list',
                message: "Select team member's role",
                choices: ['Engineer', 'Intern', 'Manager'],
                name: 'role'
            },
            {
                message: 'Enter team member id',
                name: 'id'
            },
            {
                message: 'Enter team member email',
                name: 'email'
            }
        ])
        .then(function ({
            name,
            role,
            id,
            email
        }) {
            let roleInfo = "";
            if (role === "Engineer") {
                roleInfo = "GitHub username";
            } else if (role === "Intern") {
                roleInfo = "school name";
            } else {
                roleInfo = "office number";
            }
            inquirer.prompt([{
                        message: "Enter team member's ${roleInfo}",
                        name: "roleInfo"
                    },
                    {
                        type: "list",
                        message: "Would you like to add more team members?",
                        choices: ["yes", "no"],
                        name: "moreMembers"
                    }
                ])
                .then(function ({
                    roleInfo,
                    moreMembers
                }) {
                    let newMember;
                    if (role === "Engineer") {
                        newMember = new Engineer(name, id, email, roleInfo);
                    } else if (role === "Intern") {
                        newMember = new Intern(name, id, email, roleInfo);
                    } else {
                        newMember = new Manager(name, id, email, roleInfo);
                    }
                    employee.push(newMember);
                    addHtml(newMember)
                        .then(function () {
                            if (moreMembers === "yes") {
                                addMember();
                            } else {
                                finishHtml();
                            }
                        });
                });
        });
}

generator();