import { async } from "@firebase/util";
import React, { useRef } from "react";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading/Loading";
import "./Login.css";
import SignInWithSocial from "./SignInWithSocial/SignInWithSocial";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const userNameRef = useRef("");
  const userPasswordRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  if (user) {
    // navigate(from, { replace: true });
  }

  const passwordReset = async () => {
    const userName = userNameRef.current.value;
    if (userName) {
      await sendPasswordResetEmail(userName);
      toast("Ok, go to your email");
    } else {
      toast("Please set your email");
    }
  };

  if (loading || sending) {
    return <Loading></Loading>;
  }

  let errorNotification;
  if (error) {
    errorNotification = (
      <div>
        <p className="text-danger">Error: {error.message}</p>
      </div>
    );
  }

  const handleLogin = async (event) => {
    event.preventDefault();
    const userName = userNameRef.current.value;
    const userPassword = userPasswordRef.current.value;
    await signInWithEmailAndPassword(userName, userPassword);
    const url = "http://localhost:5000/login";
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ userName }),
    })
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem("jwt_Token", data.getToken);
        navigate("/myitems");
      });
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
        <button onClick={passwordReset} className="reset btn btn-link">
          Reset Password
        </button>
        {errorNotification}
        <p className="signup-link">
          Didn't join yet? <Link to="/signup">SignUp</Link>
        </p>
        <input className="login-btn" type="submit" value="Login" />
      </form>
      <div className="social_login">
        <SignInWithSocial></SignInWithSocial>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
