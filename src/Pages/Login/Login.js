import React, { useRef } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import "./Login.css";
import SignInWithSocial from "./SignInWithSocial/SignInWithSocial";

const Login = () => {
  const userNameRef = useRef("");
  const userPasswordRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  if (user) {
    navigate(from, { replace: true });
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
      </form>
      <div className="social_login">
        <SignInWithSocial></SignInWithSocial>
      </div>
    </div>
  );
};

export default Login;
