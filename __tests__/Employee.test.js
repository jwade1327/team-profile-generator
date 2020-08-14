const Employee = require('../lib/Employee.js');

test('creates an employee object', () => {
    const employee = new Employee('Bill');
    expect(employee.getName).toBe('Bill');
});

test("creates employee's id as an object", () => {
    const employee = new Employee('', '785');
    expect(employee.getId).toBe('785');
});

test('creates employee email as an object', () => {
    const employee = new Employee('', '', 'example@email.com');
    expect(employee.getEmail).toBe('example@email.com');
});

// test('creates employee role as an object', () => {
//     const employee = new Employee();
//     expect(employee.getRole()).toBe(role);
// });
