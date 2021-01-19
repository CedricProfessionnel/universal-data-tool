import clickOn100SamplesInACollaborativeSession from "../utils/test/click-on-100-samples-in-a-collaborative-session.spec"
import createAndVisitCollaborativeSession from "../utils/test/create-and-visit-collaborative-session.spec"
import commandSetLanguage from "../utils/cypress-command/set-language.spec"

commandSetLanguage()

Cypress.config("defaultCommandTimeout", 3000)
describe("Create and Visit Collaborative Session", () => {
  beforeEach("Prepare test", () => {
    cy.visit(`http://localhost:6001`)
    cy.setLanguage("en")
    cy.contains("New File").click()
  })
  createAndVisitCollaborativeSession()
  clickOn100SamplesInACollaborativeSession()
})
