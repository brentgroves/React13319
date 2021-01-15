import { LogLevel } from "@azure/msal-browser";

// Config object to be passed to Msal on creation
export const msalConfig = {
    auth: {
        clientId: "d1fbb8f3-444f-467e-93ff-7272a56df4c7",
        authority: 'https://login.microsoftonline.com/b4b87e8f-df64-41ff-9ba4-a4930ebc804b', // This is your tenant info
        redirectUri: 'https://moto',
    },
    system: {
        loggerOptions: {
            loggerCallback: (level, message, containsPii) => {
                if (containsPii) {	
                    return;	
                }
                switch (level) {	
                    case LogLevel.Error:	
                        console.error(message);	
                        return;	
                    case LogLevel.Info:	
                        console.info(message);	
                        return;	
                    case LogLevel.Verbose:
                        console.debug(message);	
                        return;	
                    case LogLevel.Warning:	
                        console.warn(message);	
                        return;	
                }
            },
            logLevel: LogLevel.Verbose
        }
    }
};
// https://stackoverflow.com/questions/56266148/aad-how-do-you-send-an-interactive-authorization-request-to-resolve-aadsts650
// https://developer.microsoft.com/en-us/graph restful api test app
// Add here scopes for id token to be used at MS Identity Platform endpoints.
export const loginRequest = {
    scopes: [
        'User.Read',
        'Mail.Send',
      ]
};
/*
const options = {
	authProvider,
};

const client = Client.init(options);

let res = await client.api('/users/{id}/transitiveMemberOf')
	.get();
*/
// Add here the endpoints for MS Graph API services you would like to use.
// https://docs.microsoft.com/en-us/graph/api/user-list-transitivememberof?view=graph-rest-1.0&tabs=javascript
export const graphConfig = {
    graphMeEndpoint: "https://graph.microsoft.com/v1.0/me",
    memberOfEndpoint: "https://graph.microsoft.com/v1.0/me/transitiveMemberOf",
    sendMailEndPoint: "https://graph.microsoft.com/v1.0/me/sendMail",
    profileEndPoint: "https://graph.microsoft.com/beta/me/profile",
};

/*
https://login.microsoftonline.com/b4b87e8f-df64-41ff-9ba4-a4930ebc804b/oauth2/v2.0/authorize
https://login.microsoftonline.com/{{TenantID}}/oauth2/v2.0/token
https://login.microsoftonline.com/b4b87e8f-df64-41ff-9ba4-a4930ebc804b/oauth2/v2.0/token
*/

