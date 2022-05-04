import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import "./SignUp.css";
import auth from "../../firebase.init";
import SignInWithSocial from "../Login/SignInWithSocial/SignInWithSocial";
import Loading from "../Shared/Loading/Loading";

const SignUp = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [createUserWithEmailAndPassword, user, loading, signupError] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  if (user) {
    navigate("/home");
  }

  if (loading) {
    return <Loading></Loading>;
  }

  const handleSignUp = (event) => {
    event.preventDefault();
    const userName = event.target.email.value;
    const userPassword = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;

    if (userPassword !== confirmPassword) {
      setError("Password did not match");
      return;
    }
    if (userPassword.length < 8) {
      setError("Password too short");
      return;
    }

    createUserWithEmailAndPassword(userName, userPassword);
  };

  return (
    <div className="signup-form">
      <h2>Sign Up</h2>
      <form onSubmit={handleSignUp} className="form-control">
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
          name="confirmPassword"
          required
        />
        <br />
        <p className="text-danger">{error}</p>
        <p className="login-link">
          Have an account? <Link to="/login">LogIn</Link>
        </p>
        <input className="login-btn" type="submit" value="SignUp" />
      </form>
      <div className="social_signup">
        <SignInWithSocial></SignInWithSocial>
      </div>
    </div>
  );
};

export default SignUp;
