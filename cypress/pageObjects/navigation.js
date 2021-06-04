class Navigation {
    get addProfessorPage() {
        return cy.get("a[href='/professors/create']");
    }
    goToAddProfessorPage() {
        this.addProfessorPage.click({force:true});
    }

}

export const navigation = new Navigation();
