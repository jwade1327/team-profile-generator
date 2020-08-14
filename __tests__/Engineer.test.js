const Engineer = require("../lib/Engineer");


test('role Engineer', () => {
    const engineer = new Engineer('Dave');
    expect(engineer.getName).toBe('Dave');
});

test('engineer id', () => {
    const engineer = new Engineer('', '987');
    expect(engineer.getId).toBe('987');

});

test('engineer email', () => {
    const engineer = new Engineer ('', '', 'engineer@email.com');
    expect(engineer.getEmail).toBe('engineer@email.com');
});

test('GitHub account', () => {
    const engineer = new Engineer('', '', 'dwade');
    expect(engineer.getGithub).toBe('dwade');
});
