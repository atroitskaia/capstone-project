import {useNavigate} from "react-router-dom";
import React, {useState} from 'react';
import {Cookies} from "react-cookie";
import './login.css';

const cookies = new Cookies();

const Login = ({isAuthenticated, setAuthenticated}) => {
    const navigate = useNavigate();
    const [error, setError] = useState(null);
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);

    const handleInputChange = (e) => {
        const {id, value} = e.target;

        if (id === "username") setUsername(value);
        if (id === "password") setPassword(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (isAuthenticated) {
            setError("You're already logged in. Log out to log in to another account.")
            return;
        }

        fetch("/account/login", {
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
                    if (response.status === 400) {
                        setError(text);
                        return;
                    }

                    setAuthenticated(true);
                    setError(null);
                    navigate("/");
                })
            })
    };

    const handleError = () => {
        if (error == null) return;
        return <div className="login-error">{error}</div>;
    };

    return <div className="register-form">
        <form onChange={handleInputChange} onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <input className="login-input" id="username" name="username" type="text" required/>
            <label htmlFor="password">Password</label>
            <input className="login-input" id="password" name="password" type="password" required/>
            {handleError()}
            <input className="login-submit" type="submit"/>
        </form>
    </div>;
}

export default Login;