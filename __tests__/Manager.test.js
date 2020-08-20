const Manager = require('../lib/Manager');

test('check to see Employee super() importing correctly', () => {
    const manager = new Manager('Dave')

    expect(manager.name).toBe('Dave');
    expect(manager.id).toEqual(Number);
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(Number);
})

test('check manager functions', () => {
    const manager = new Manager('Dave');

    expect(manager.getName()).toEqual(manager.name);
    expect(manager.getEmail()).toEqual(expect.stringContaining(manager.email.toString()));
    expect(manager.getId()).toEqual(expect.stringContaining(manager.id.toString()));
    expect(manager.getRole()).toEqual('Manager');
})




// test('manager role', () => {
//     const manager = new Manager('Rob');
//     expect(manager.getName).toBe('Rob');
// });

// test('manager id', () => {
//     const manager = new Manager('', '321');
//     expect(manager.getId).toBe('321');
// });

// test('manager email', () => {
//     const manager = new Manager('', '', 'manager@email.com');
//     expect(manager.getEmail).toBe('manager@email.com');
// });

// test('manager office number', () => {
//     const manager = new Manager('', '', '', '4442311');
//     expect(manager.getOfficeNumber).toBe('4442311');
// });
