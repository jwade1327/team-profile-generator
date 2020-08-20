const Engineer = require("../lib/Engineer");

test('check to make sure info is pulled from employee', () => {
    const engineer = new Engineer('Jess')

    expect(engineer.name).toBe('Jess');
    expect(engineer.id).toEqual(Number);
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
})

test('check engineer functions', () => {
    const engineer = new Engineer('Jess');

    expect(engineer.getName()).toEqual(engineer.name);
    expect(engineer.getEmail()).toEqual(expect.stringContaining(engineer.email.toString()));
    expect(engineer.getId()).toEqual(expect.stringContaining(engineer.id.toString()));
    expect(engineer.getRole()).toEqual('Engineer');
    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
})



// test('role Engineer', () => {
//     const engineer = new Engineer('Dave');
//     expect(engineer.getName).toBe('Dave');
// });

// test('engineer id', () => {
//     const engineer = new Engineer('', '987');
//     expect(engineer.getId).toBe('987');

// });

// test('engineer email', () => {
//     const engineer = new Engineer ('', '', 'engineer@email.com');
//     expect(engineer.getEmail).toBe('engineer@email.com');
// });

// test('GitHub account', () => {
//     const engineer = new Engineer('', '', 'dwade');
//     expect(engineer.getGithub).toBe('dwade');
// });
