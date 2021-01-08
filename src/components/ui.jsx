import React from "react";
import { AuthenticatedTemplate, useMsal } from "@azure/msal-react";
import Button from '@material-ui/core/Button';

const SignOutButton = () => {
    const { instance } = useMsal();
    return (
        <>
            <AuthenticatedTemplate>
                <Button onClick={() => instance.logout()} >Sign Out</Button>
            </AuthenticatedTemplate>
        </>
    );
};

export const PageLayout = (props) => {
    return (
        <>
            <h1>
                <a href="/">MS Identity Platform</a>
                <SignOutButton/>
            </h1>
            <br />
            <br />
            <h5><center>Welcome to the Microsoft Authentication Library For Javascript - React Quickstart</center></h5>
            <br/>
            <br/>
            {props.children}
        </>
    );
};