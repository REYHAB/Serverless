// TODO: Once your application is deployed, copy an API id here so that the frontend could interact with it
// const apiId = 'g5pm0hu237'
const apiId = 'xmcknux144'
export const apiEndpoint = `https://${apiId}.execute-api.us-east-1.amazonaws.com/dev`

export const authConfig = {
  domain: 'muriga.auth0.com',            // Auth0 domain
  clientId: 'BQQ7uvoshjtpCs10trpsfibiiXuZtnn7',          // Auth0 client id
  callbackUrl: 'http://localhost:3000/callback'
}
