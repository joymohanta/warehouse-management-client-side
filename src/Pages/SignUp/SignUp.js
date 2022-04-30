import React from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";

const SignUp = () => {
  return (
    <div className="signup-form">
      <h2>Sign Up</h2>
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
        <br /> <br />
        <label id="confirm-pass">Confirm Password</label>
        <input
          className="input-field"
          type="password"
          name="password"
          required
        />
        <br />
        <p className="login-link">
          Have an account? <Link to="/login">LogIn</Link>
        </p>
        <input className="login-btn" type="submit" value="SignUp" />
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

export default SignUp;
