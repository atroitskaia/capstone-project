import {useNavigate} from "react-router-dom";
import {Cookies} from "react-cookie";

const cookies = new Cookies();

const Logout = ({isAuthenticated, setAuthenticated}) => {
    const navigate = useNavigate();

    fetch("/account/logout", {
        method: "POST",
        headers: {
            "X-CSRFToken": cookies.get("csrftoken"),
        },
        credentials: "same-origin"
    })
        .then(response => {
            setAuthenticated(false);
            navigate("/");
        })
}

export default Logout;
