import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function ErrorAuth() {
    const navigate = useNavigate();
    const [countdown, setCountdown] = useState(4);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            navigate("/login");
        }, countdown * 1000);

        const intervalId = setInterval(() => {
            setCountdown((prevCountdown) => prevCountdown - 1);
        }, 1000);

        return () => {
            clearTimeout(timeoutId);
            clearInterval(intervalId);
        };
    }, [navigate, countdown]);

    return (
        <main className="error-404">
            <div className="borderError">
                <h1 className="error-404_h1">404</h1>
                <p className="error-404_p">
                    Access to this page is restricted and requires proper authorization.
                    <br />
                    <br />
                    <span>Authenticate yourself in {countdown} seconds.</span>
                </p>

                <Link to="/login" className="error-404_a">
                    Back to the login page
                </Link>
            </div>
        </main>
    );
}

export default ErrorAuth;
