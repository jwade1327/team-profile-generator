const Manager = require('../lib/Manager');
const { TestResult } = require('@jest/types');
const { exportAllDeclaration } = require('@babel/types');

test('getOfficeNumber() return number', () => {
    const employee = new Manager;
    expect(employee.getOfficeNumber).toBe(number);
});

test('getRole() return Manager', () => {
    const employee = new Manager;
    expect(employee.getRole()).toBe(manager);
});
