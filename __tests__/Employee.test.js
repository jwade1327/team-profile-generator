const Employee = require('../lib/Employee.js');

test('creates an employee object', () => {
    const employee = new Employee('John');
    expect(employee.getName).toBe(name);
});

test("creates employee's id as an object", () => {
    const employee = new Employee();
    expect(employee.getId()).toBe(expect.any(Number));
});

test('creates employee email as an object', () => {
    const employee = new Employee();
    expect(employee.getEmail()).toBe(email);
});

test('creates employee role as an object', () => {
    const employee = new Employee();
    expect(employee.getRole()).toBe(role);
});
