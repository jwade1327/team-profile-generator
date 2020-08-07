const Engineer = require("../lib/Engineer");
const { link } = require("fs");

test('link GitHub account', () => {
    const account = "GitHubUser";
    expect(engineer.gitHub()).toBe(link);
});