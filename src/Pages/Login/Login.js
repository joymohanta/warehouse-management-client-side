import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-form">
      <h2>Login</h2>
      <form className="form-control">
        <label>Username</label>
        <br />
        <input className="input-field" type="email" name="email" required />
        <br /> <br />
        <label>Password</label>
        <br />
        <input
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