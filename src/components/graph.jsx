import React from "react";
import { graphConfig } from "../config/authConfig";

export async function callMsGraph(accessToken) {
    const headers = new Headers();
    const bearer = `Bearer ${accessToken}`;

    headers.append("Authorization", bearer);

    const options = {
        method: "GET",
        headers: headers
    };

    return fetch(graphConfig.graphMeEndpoint, options)
        .then(response => response.json())
        .catch(error => console.log(error));
}

export async function GetGroups(accessToken) {
    const headers = new Headers();
    const bearer = `Bearer ${accessToken}`;

    headers.append("Authorization", bearer);

    const options = {
        method: "GET",
        headers: headers
    };
   // 
    return fetch(graphConfig.memberOfEndpoint, options)
        .then(response => response.json())
        .catch(error => {
            console.log(error)
            console.log(`Fetch getGroups catch`);
        }
        );
}

export async function GetProfile(accessToken) {
    const headers = new Headers();
    const bearer = `Bearer ${accessToken}`;

    headers.append("Authorization", bearer);

    const options = {
        method: "GET",
        headers: headers
    };
   // 
    return fetch(graphConfig.profileEndPoint, options)
        .then(response => response.json())
        .catch(error => {
            console.log(error)
            console.log(`Fetch getProfile catch`);
        }
        );
}


export async function SendMail(accessToken) {
    const headers = new Headers();
    const bearer = `Bearer ${accessToken}`;

    headers.append("Authorization", bearer);
    headers.append('Content-Type','application/json');
    const myBody =  {
        message: {
          subject: "Test2",
          body: {
            contentType: "Text",
            content: "The new cafeteria is open."
          },
          toRecipients: [
            {
              emailAddress: {
                address: "bgroves@mobexglobal.com"
              }
            }
          ],
          ccRecipients: [
            {
              emailAddress: {
                address: "dkreps@mobexglobal.com"
              }
            }
          ]
        },
        saveToSentItems: "false"
      };      
   
    const options = {
        method: "POST",
        headers: headers,
        body: JSON.stringify(myBody) // body data type must match "Content-Type" header
    };
   // 
   console.log(`SendMail,headers:${headers},myBody:${JSON.stringify(myBody)}`);
    return fetch(graphConfig.sendMailEndPoint, options)
        .then(response => response.json())
        .catch(error => console.log(error));
    console.log(`SendMail after fetch`);
    /*
       return fetch(graphConfig.sendMailEndpoint, 
        {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
              'Content-Type': 'application/json'
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(myBody) // body data type must match "Content-Type" header
          }        
       .then(response => response.json())
       .catch(error => console.log(error)));
*/
/*       
       fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data) // body data type must match "Content-Type" header
      });
  
      */
    
}

export const ProfileData = (props) => {
    return (
        <div id="profile-div">
            <p><strong>Title: </strong> {props.graphData.jobTitle}</p>
            <p><strong>Mail: </strong> {props.graphData.mail}</p>
            <p><strong>Phone: </strong> {props.graphData.businessPhones[0]}</p>
            <p><strong>Location: </strong> {props.graphData.officeLocation}</p>
        </div>
    );
};