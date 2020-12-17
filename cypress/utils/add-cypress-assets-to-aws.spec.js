import datasetManagerCognito from "udt-dataset-managers/dist/CognitoDatasetManager"

const addAWSAssets = (nameProject, nameAsset) => {
  var credentials = Cypress.env()
  cy.log("Add test files")
  cy.then({ timeout: 10000000 }, () => {
    cy.fixture("assets-dummies/" + nameAsset).then(
      { timeout: 10000000 },
      (asset) => {
        Cypress.Blob.base64StringToBlob(asset, "image/jpg")
          .then({ timeout: 10000000 }, async (blob) => {
            console.log("The blob :" + blob)
            const authConfig = {
              Auth: {
                identityPoolId: credentials.AWS_IDENTITY_POOL_ID,
                region: credentials.AWS_AUTH_REGION,
                userPoolId: credentials.AWS_USER_POOL_ID,
                userPoolWebClientId: credentials.AWS_USER_POOL_WEB_CLIENT_ID,
                mandatorySignIn: credentials.AWS_MANDATORY_SIGN_IN,
                authenticationFlowType:
                  credentials.AWS_AUTHENTICATION_FLOW_TYPE,
              },
              Storage: {
                AWSS3: {
                  bucket: credentials.AWS_STORAGE_BUCKET,
                  region: credentials.AWS_STORAGE_REGION,
                },
              },
            }
            const ds = await new datasetManagerCognito({ authConfig })
            ds.setProject(nameProject)
            await ds.addAsset(nameAsset, blob.blob())
          })
          .catch((err) => console.log(err))
      }
    )
  })
}
export default addAWSAssets
