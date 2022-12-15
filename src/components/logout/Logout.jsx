import {useNavigate} from "react-router-dom";
import React, {useState} from "react";

const Logout = ({isAuthenticated, setAuthenticated}) => {
    const navigate = useNavigate();

    fetch("/account/logout")
        .then(response => {
            setAuthenticated(false);
            navigate("/");
        })
}

export default Logout;
