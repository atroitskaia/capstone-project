
import './login.css';


import React, { useState } from 'react';

// function Login(props) {
//   const [loading, setLoading] = useState(false);
//   const username = useFormInput('');
//   const password = useFormInput('');
//   const [error, setError] = useState(null);

//   // handle button click of login form
//   const handleLogin = () => {
//     setError(null);
//     setLoading(true);
//     // API something like http://example.com/user/login
//     fetch(API, { name: username.value, pass: password.value }).then(response => {
//       setLoading(false);
//       // set the token and user from the session storage
//       sessionStorage.setItem('token', response.data.token);
//       sessionStorage.setItem('user', JSON.stringify(response.data.user));
//       props.history.push('/dashboard');
//     }).catch(error => {
//       setLoading(false);
//       if (error.response.status === 401) setError(error.response.data.message);
//       else setError("Something went wrong. Please try again later.");
//     });
//   }

//   return (
//     <div>
//       Login<br /><br />
//       <div>
//         Username<br />
//         <input type="text" {...username} autoComplete="new-password" />
//       </div>
//       <div style={{ marginTop: 10 }}>
//         Password<br />
//         <input type="password" {...password} autoComplete="new-password" />
//       </div>
//       {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
//       <input type="button" value={loading ? 'Loading...' : 'Login'} onClick={handleLogin} disabled={loading} /><br />
//     </div>
//   );
// }

// const useFormInput = initialValue => {
//   const [value, setValue] = useState(initialValue);

//   const handleChange = e => {
//     setValue(e.target.value);
//   }
//   return {
//     value,
//     onChange: handleChange
//   }
// }

// export default Login;




const Login = () => {

  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="form">
      <div className="login-form">
        <div className="title"></div>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
    </div>
  );
}

export default Login;