import React, {useState} from 'react';
import './register.css';

const Register = () => {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [confirmPassword, setConfirmPassword] = useState(null);
    
    const handleInputChange = (e) => {
        const{id, value} = e.target;
        if(id === "email") {
            setEmail(value)
        }
        if(id === "password") {
            setPassword(value);
        }
        if(id === "confirmPassword"){
            setConfirmPassword(value)
        }
    }

    const handleSubmit = () => {
        console.log(email, password, confirmPassword);
    }

    return (
        <div className="form">
            <div className="form-body">
                <div className="email">
                    <label className="form__label" for="email">Email</label>
                    <input type="email" id="email" className="form__input" value={email} onChange={(e) => handleInputChange(e)} placeholder="Email"/>
                </div>
                <div className="password">
                    <label className="form__label" for="password">Password</label>
                    <input className="form__input" type="password" id="password" value={password} onChange={(e) => handleInputChange(e)} placeholder="Password"/>
                </div>
                <div className="confirm-password">
                    <label className="form__label" for="confirmPassword">Confirm Password</label>
                    <input className="form__input" type="password" id="confirmPassword" value={confirmPassword} onChange={(e) => handleInputChange(e)} placeholder="Confirm Password"/>
                </div>
            </div>
            <div class="footer">
                <button onClick={()=>handleSubmit()} type="submit" class="btn">Submit</button>
            </div>
        </div>
    )

}
export default Register