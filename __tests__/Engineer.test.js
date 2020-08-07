const Engineer = require("../lib/Engineer");
const { link } = require("fs");

test('set GitHub account', () => {
    const account = "GitHubUser";
    const employee = new Engineer;
    expect(employee.gitHub()).toBe(account);
});

test('getRole() return Engineer', () => {
    const employee = new Engineer;
    expect(employee.getRole()).toBe(engineer);
});

test('link GitHub account', () => {
    const employee = new Engineer;
    expect(employee.gitGithub()).toBe(user);
});