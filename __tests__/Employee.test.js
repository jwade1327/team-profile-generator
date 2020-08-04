const Employee = require('../lib/Employee.js');
const { TestScheduler } = require('jest');
const { exportAllDeclaration } = require('@babel/types');
const { JestEnvironment } = require('@jest/environment');
test('creates an employee object', () => {
    const employee = new Employee('');
    expect(employee.name).toBe('');
});

test("creates employee's id as an object", () => {
    const employee = new Employee('');
    expect(employee.getId()).toBe(expect.any(Number));
});

test('email')
