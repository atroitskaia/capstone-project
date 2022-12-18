import {useNavigate} from "react-router-dom";
import {Cookies} from "react-cookie";
import {useState} from "react";
import "./dashboard.css";

const cookies = new Cookies();

export default function Dashboard({isAuthenticated, setAuthenticated}) {
    const [username, setUsername] = useState(null);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    if (!isAuthenticated) {
        navigate("/");
        return;
    }

    const handleError = () => {
        if (error == null) return;
        return <div className="dashboard-error">{error}</div>;
    };

    const handleChange = (e) => {
        setUsername(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch("/account/follow", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-CSRFToken": cookies.get("csrftoken"),
            },
            credentials: "same-origin",
            body: JSON.stringify({"username": username}),
        })
            .then(response => {
                response.text().then(text => {
                    if (!response.ok) {
                        setError(text);
                        return;
                    }

                    setError(null);
                })
            });
    };

    const createFeed = () => {
        // fetch("/account/feed", {
        //     method: "GET",
        //     headers: {
        //         "X-CSRFToken": cookies.get("csrftoken"),
        //     },
        //     credentials: "same-origin",
        // });

        return <div></div>;
    };

    return <div className="dashboard">
        <div className="dashboard-add">
            <form className="dashboard-form" onChange={handleChange} onSubmit={handleSubmit}>
                <input className="dashboard-form-input" type="text"
                       placeholder="Enter the username of a social media account" required/>
                <input className="dashboard-form-submit" type="submit" value="Analyze"/>
            </form>
        </div>
        {handleError()}
        <div className="dashboard-content">
            <div>
                <h2 className="dashboard-text">Feed</h2>
            </div>
            <br/>
            {createFeed()}
        </div>
    </div>;
}
