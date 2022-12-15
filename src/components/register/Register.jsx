import {useNavigate} from "react-router-dom";
import React, {useState} from 'react';
import {Cookies} from "react-cookie";
import './register.css';

const cookies = new Cookies();

const Register = ({isAuthenticated, setAuthenticated}) => {
    const navigate = useNavigate();
    const [error, setError] = useState(null);
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [confirmPassword, setConfirmPassword] = useState(null);

    const handleInputChange = (e) => {
        const {id, value} = e.target;

        if (id === "username") setUsername(value);
        if (id === "password") setPassword(value);
        if (id === "confirm-password") setConfirmPassword(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (isAuthenticated) {
            setError("You're are currently logged in. Log out to create a new account.")
            return;
        }

        if (password !== confirmPassword) {
            console.log("Password does not match");
            return;
        }

        fetch("/account/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-CSRFToken": cookies.get("csrftoken"),
            },
            credentials: "same-origin",
            body: JSON.stringify({"username": username, "password": password}),
        })
            .then(response => {
                response.text().then(text => {
                    if (!response.ok) {
                        setError(text);
                        return;
                    }

                    setAuthenticated(true);
                    setError(null);
                    navigate("/");
                })
            });
    };

    const handleError = () => {
        if (error == null) return;
        console.log("test 3");
        return <div className="register-error">{error}</div>;
    };

    return <div className="register-form">
        <form onChange={handleInputChange} onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <input className="register-input" id="username" name="username" type="text" required/>
            <label htmlFor="password">Password</label>
            <input className="register-input" id="password" name="password" type="password" required/>
            <label htmlFor="confirm-password">Confirm Password</label>
            <input className="register-input" id="confirm-password" name="confirm-password" type="password" required/>
            {handleError()}
            <input className="register-submit" type="submit"/>
        </form>
    </div>;
}

export default Register;
