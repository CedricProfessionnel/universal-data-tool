import setLanguage from "../../utils/set-language.spec"

import warningHeader from "../../utils/aws-test/warning-header-import.spec"
import importAWS from "../../utils/aws-test/import-aws.spec"
import configImport from "../../utils/aws-test/config-import.spec"

import commandLocalStorage from "../../utils/cypress-command/local-storage.spec"
import commandCredentialsAws from "../../utils/cypress-command/credentials-aws.spec"
import commandCleanAws from "../../utils/cypress-command/clean-aws.spec"
import commandSetUpAws from "../../utils/cypress-command/set-up-aws.spec"

import "regenerator-runtime/runtime"

commandLocalStorage()
commandCredentialsAws()
commandSetUpAws()
commandCleanAws()

Cypress.config("defaultCommandTimeout", 3000)
describe("Import aws test", () => {
  before("Prepare tests", () => {
    cy.log("should be able to join the web site")
    cy.visit(`http://localhost:6001`)
    setLanguage()
    //the following are very long processus try to keep them here so they execute only once
    cy.createCredentialsAws()
    cy.saveLocalStorage()
    cy.cleanAws()
    cy.setUpAws()
  })

  beforeEach("Go to import page", () => {
    cy.restoreLocalStorage()
  })

  warningHeader()
  importAWS()
  configImport()

  //Comment below when debugging 1 test
  afterEach("Return to home page", () => {
    cy.get("button[title='Exit to Welcome Page']").click({ force: true })
  })

  //Comment below when debugging aws
  after("Clean AWS", () => {
    cy.cleanAws()
  })
})
