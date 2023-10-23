import React from "react";
import AccountTransactions from "../../components/AccountTransactions/AccountTransactions";
import Account from "../../components/FinancialAccount/FinancialAccount";
import "./TransactionPage.scss";

function UserAccount() {
    return (
        <main className="main bg-dark">
            <Account />
            <AccountTransactions />
        </main>
    );
}

export default UserAccount;
