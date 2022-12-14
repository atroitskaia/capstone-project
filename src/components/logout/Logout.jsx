import React, { useState } from "react";

const Logout = () => {
    const [isAuthenticated, setAuthenticated] = useState(false);

    fetch("/account/logout")
        .then(response => {
            setAuthenticated(false);
        })
}

export default Logout;
