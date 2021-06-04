import { authLogin } from "../../pageObjects/loginPage"
import { professors } from "../../pageObjects/professors"
import { navigation } from "../../pageObjects/navigation"


describe("User Login", () => {
    beforeEach(() => {
        cy.restoreLocalStorage();
      });
      


   it("login", () => {
     cy.visit("")
     cy.intercept('POST', 'https://gradebook-api.vivifyideas.com/api/login', (res) => {}).as('validLogin')
     authLogin.login()
     cy.wait('@validLogin').then((intercept) => {
       cy.log(JSON.stringify(intercept.response.statusCode))
       expect(intercept.response.statusCode).to.eql(200)
     })
   
  })

  it("create proffesor", () => {
    navigation.goToAddProfessorPage();
    professors.create()

  })

  afterEach(() => {
    cy.saveLocalStorage();
  });
})