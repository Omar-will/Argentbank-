import React from "react";
import UserWelcome from "../../components/UserProfilePage/UserProfilePage";
import UserAccounts from "../../components/UserAccounts/UserAccounts";
import "./ProfilePage.scss";

function UserAccount() {

    return (
        <main className="main bg-dark">
            <UserWelcome />
            <UserAccounts />
        </main>
    );
}

export default UserAccount;
