const data = require("../fixtures/data.json");
class Professors {
    get name() {
        return cy.get("#input-default");
    }
    get lastName() {
        return cy.get("#input-default1");
    }
    get select() {
        return cy.get("#__BVID__61");
    }
    get submitBtn() {
        return cy.get(".btn-secondary");
    }

    create() {
        this.name.type(data.professor.name);
        this.lastName.type(data.professor.lastName);
        this.select.select('31232132');

    }
}

export const professors = new Professors();