import commandRemoveAwsProject from "../../utils/cypress-command/remove-aws-project.spec"
const command = () => {
  commandRemoveAwsProject()
  Cypress.Commands.add("cleanAws", () => {
    cy.removeAwsProject("Not Supported")
    cy.removeAwsProject("Image Classification")
    cy.removeAwsProject("Time Series")
    cy.removeAwsProject("Time Series 2")
    cy.removeAwsProject("Data Entry")
    cy.removeAwsProject("Text Classification")
    cy.removeAwsProject("Video Segmentation")
    cy.removeAwsProject("Audio Transcription")
    cy.removeAwsProject("Empty")
    cy.removeAwsProject("CypressTestExportAnnotationOnlyTime")
    cy.removeAwsProject("CypressTestExportAnnotationOnlyImage")
    cy.removeAwsProject("CypressTestExportAnnotationOnlyVideo")
    cy.removeAwsProject("CypressTestExportAnnotationOnlyPDF")
    cy.removeAwsProject("CypressTestExportAnnotationOnlyAudio")
    cy.removeAwsProject("CypressTestExportAnnotationOnlyText")
    cy.removeAwsProject("CypressTestExportAssetsTime")
    cy.removeAwsProject("CypressTestExportAssetsTime2")
    cy.removeAwsProject("CypressTestExportAssetsImage")
    cy.removeAwsProject("CypressTestExportAssetsVideo")
    cy.removeAwsProject("CypressTestExportAssetsPDF")
    cy.removeAwsProject("CypressTestExportAssetsAudio")
    cy.removeAwsProject("CypressTestExportAssetsText")
  })
}
export default command
