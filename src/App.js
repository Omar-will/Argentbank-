import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Header from "./components/Header/header";
import Home from "./pages/HomePage/HomePage";
import Login from "./pages/LoginPage/LoginPage";
import UserAccount from "./pages/ProfilePage/ProfilePage";
import UserTransactions from "./pages/TransactionPage/TransactionPage";
import Error404 from "./pages/ErrorPAge/ErrorPage";
import ErrorAuth from "./components/AccessDenied/AccessDenied";
import Footer from "./components/Footer/Footer";
import { getUserProfile, getMyToken } from "./redux/reducers/authSlice";
import { combineStoredToken } from "./redux/reducers/token";
import { selectToken, selectUserData, selectAuth, } from "./redux/selector/selector";

function App() {
    const dispatch = useDispatch();
    const token = useSelector(selectToken);
    const data = useSelector(selectUserData);
    const authenticated = useSelector(selectAuth);

    useEffect(() => {
        const memToken = combineStoredToken();

        if (memToken && !token) {
            dispatch(getMyToken(memToken));
        }
    }, [dispatch, token]);

    useEffect(() => {
        if (token && !data) {
            dispatch(getUserProfile());
        }
    }, [dispatch, token, data]);

    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                </>

                {authenticated ? (
                    <>
                        <Route path="/user" element={<UserAccount />} />
                        <Route path="/user/profile" element={<UserAccount />} />
                        <Route
                            path="/user/account/:id"
                            element={<UserTransactions />}
                        />
                    </>
                ) : (
                    <Route path="*" element={<ErrorAuth />} />
                )}

                <Route path="*" element={<Error404 />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
