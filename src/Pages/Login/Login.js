import React, { useRef } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import "./Login.css";

const Login = () => {
  const userNameRef = useRef("");
  const userPasswordRef = useRef("");
  const navigate = useNavigate();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  if (user) {
    navigate("/home");
  }

  const handleLogin = (event) => {
    event.preventDefault();
    const userName = userNameRef.current.value;
    const userPassword = userPasswordRef.current.value;
    signInWithEmailAndPassword(userName, userPassword);
  };
  return (
    <div className="login-form">
      <h2>Login</h2>
      <form onSubmit={handleLogin} className="form-control">
        <label>Username</label>
        <br />
        <input
          ref={userNameRef}
          className="input-field"
          type="email"
          name="email"
          required
        />
        <br /> <br />
        <label>Password</label>
        <br />
        <input
          ref={userPasswordRef}
          className="input-field"
          type="password"
          name="password"
          required
        />
        <br />
        <a className="reset" href="#">
          Reset Password
        </a>
        <p className="signup-link">
          Didn't join yet? <Link to="/signup">SignUp</Link>
        </p>
        <input className="login-btn" type="submit" value="Login" />
        <div className="dash-bar">
          <div className="first-dash"></div>
          <p>or</p>
          <div className="second-dash"></div>
        </div>
        <button className="social-btn">
          <img
            src="https://i.ibb.co/yQtcZyY/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
            alt=""
          />
          <span>Google SignIn</span>
        </button>
      </form>
    </div>
  );
};

export default Login;
