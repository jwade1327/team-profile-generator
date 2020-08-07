const Intern = require('../lib/Intern');
const { TestResult } = require('@jest/types');
const { exportAllDeclaration } = require('@babel/types');

test('create school as object', () => {
    const employee = new Intern;
    expect(intern.school).toBe(school);
});

test('getRole() return Intern', () => {
    const employee = new Intern;
    expect(employee.getRole()).toBe(intern);
});

test('getSchool() return school', () => {
    const employee = new Intern;
    expect(employee.getSchool()).toBe(school);
});