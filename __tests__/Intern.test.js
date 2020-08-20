const Intern = require('../lib/Intern');
const { TestScheduler } = require('jest');

test('employee intern', () => {
    const intern = new Intern('Raven');
    expect(intern.name).toBe('Raven');
    expect(intern.id).toEqual(Number);
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
})

test('manager', () => {
    const intern = new Intern('Raven');
    expect(intern.getName()).toEqual(intern.name);
    expect(intern.getEmail()).toEqual(expect.stringContaining(inter.email.toString()));
    expect(intern.getId()).toEqual(expect.stringContaining(intern.id.toString()));
    expect(intern.getRole()).toEqual('Intern');
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
})


// test('role Intern', () => {
//     const intern = new Intern('Raven');
//     expect(intern.getName).toBe('Raven');
// });

// test('intern id', () => {
//     const intern = new Intern('', '456');
//     expect(intern.getId).toBe('456');
// });

// test('intern email', () => {
//     const intern = new Intern('', '', 'intern@email.com');
//     expect(intern.getEmail).toBe('intern@email.com');
// });

// test('intern school', () => {
//     const intern = new Intern('', '', 'UofIntern');
//     expect(intern.getSchool).toBe('UofIntern');
// });