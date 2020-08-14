const Intern = require('../lib/Intern');

test('role Intern', () => {
    const intern = new Intern('Raven');
    expect(intern.getName).toBe('Raven');
});

test('intern id', () => {
    const intern = new Intern('', '456');
    expect(intern.getId).toBe('456');
});

test('intern email', () => {
    const intern = new Intern('', '', 'intern@email.com');
    expect(intern.getEmail).toBe('intern@email.com');
});

test('intern school', () => {
    const intern = new Intern('', '', 'UofIntern');
    expect(intern.getSchool).toBe('UofIntern');
});