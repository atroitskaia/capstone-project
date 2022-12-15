import {useNavigate} from "react-router-dom";

const Logout = ({isAuthenticated, setAuthenticated}) => {
    const navigate = useNavigate();

    fetch("/account/logout")
        .then(response => {
            setAuthenticated(false);
            navigate("/");
        })
}

export default Logout;
