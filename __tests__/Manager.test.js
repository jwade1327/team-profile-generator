const Manager = require('../lib/Manager');

test('manager role', () => {
    const manager = new Manager('Rob');
    expect(manager.getName).toBe('Rob');
});

test('manager id', () => {
    const manager = new Manager('', '321');
    expect(manager.getId).toBe('321');
});

test('manager email', () => {
    const manager = new Manager('', '', 'manager@email.com');
    expect(manager.getEmail).toBe('manager@email.com');
});

test('manager office number', () => {
    const manager = new Manager('', '', '', '4442311');
    expect(manager.getOfficeNumber).toBe('4442311');
});
