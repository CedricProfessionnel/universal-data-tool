import goToImportPage from "./go-to-import-page.spec"
const importFromAssets = (
  nomProject,
  typeProject,
  numberSamples,
  numberRowToSelect
) => {
  goToImportPage(typeProject)
  cy.log("Import project")
  cy.contains("Import from S3 (Cognito)").click()
  cy.contains(nomProject, { timeout: 10000 }).click()
  cy.get("input[name='select-row-" + numberRowToSelect + "']").click()
  cy.contains("Take samples from project").click()
  cy.contains("Grid", { timeout: 10000 }).click()
  cy.contains(numberSamples + " Samples")
  cy.contains("Import").click()
}
export default importFromAssets
