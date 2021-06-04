const data = require("../fixtures/data.json");

class AuthLogin {
    get email() {
        return cy.get("#email");
    }
    get userPassword() {
        return cy.get("#userPassword");
    }
    get submitBtn() {
        return cy.get(".btn");
    }

    login() {
        this.email.type(data.user.email);
        this.userPassword.type(data.user.password);
        this.submitBtn.click();
    }
}

export const authLogin = new AuthLogin();