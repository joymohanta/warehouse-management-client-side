import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import "./SignInWithSocial.css";

const SignInWithSocial = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  let errorButton;
  if (error) {
    errorButton = (
      <div>
        <p className="text-danger">Error: {error.message}</p>
      </div>
    );
  }

  if (user) {
    navigate("/home");
  }

  return (
    <div>
      <div className="dash-bar">
        <div className="first-dash"></div>
        <p>or</p>
        <div className="second-dash"></div>
      </div>
      {errorButton}
      <button onClick={() => signInWithGoogle()} className="social-btn">
        <img
          src="https://i.ibb.co/yQtcZyY/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
          alt=""
        />
        <span>Google SignIn</span>
      </button>
    </div>
  );
};

export default SignInWithSocial;
