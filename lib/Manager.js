const Employee = require ('./Employee');

class Manager extends Employee {
    constructor (name, id, email, officeNumber = Number) {
        super (name, id, email);
        this.officeNumber = officeNumber;
    }
    getRole() {
        return `Manager`;
    }
}

module.exports = Manager;