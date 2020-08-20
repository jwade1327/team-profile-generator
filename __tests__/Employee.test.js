const Employee = require('../lib/Employee.js');

test('getting parent employee info', () => {
    const employee = new Employee('Rob');

    expect(employee.name).toBe('Rob');
    expect(employee.id).toEqual(Number);
    expect(employee.email).toEqual(expect.any(String));
})

test('calling employee.function', () => {
    const employee = new Employee('Rob');

    expect(employee.getName()).toEqual(employee.name);
    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
    expect(employee.getId()).toEqual(expect.stringContaining(employee.id.toString()));
    expect(employee.getRole()).toEqual('Employee');

});








// test('creates an employee object', () => {
//     const employee = new Employee('Bill');
//     expect(employee.getName).toBe('Bill');
// });

// test("creates employee's id as an object", () => {
//     const employee = new Employee('', '785');
//     expect(employee.getId).toBe('785');
// });

// test('creates employee email as an object', () => {
//     const employee = new Employee('', '', 'example@email.com');
//     expect(employee.getEmail).toBe('example@email.com');
// });

// test('creates employee role as an object', () => {
//     const employee = new Employee();
//     expect(employee.getRole()).toBe(role);
// });
