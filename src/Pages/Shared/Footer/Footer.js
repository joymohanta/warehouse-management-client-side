import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="bg-dark pb-2">
      <div className="footer-container bg-secondary">
        <div className="per-section">
          <h4 className="title">NEWS LETTERS</h4>
          <p>
            <small>
              Today's greatest news is to make a fullstack website without
              seeing any past projects. It is sort of challangeing but not
              imposible to us. Let's try it with heart and soul.
            </small>
            <br />
            <input className="mt-2" type="text" placeholder="Enter your name" />
            <button>Submit</button>
          </p>
        </div>
        <div className="per-section">
          <h4 className="title">LETEST TWEETS</h4>
          <p>
            <small>
              Here you can see the latest news of tweets about the world several
              countries information. But all the news is related to our product
              related and the whole world product price in dolor. Just the thing
              you have to do is to login in our site.
            </small>
          </p>
        </div>
        <div className="per-section">
          <h4 className="title">CONTACTS</h4>
          <p>Mobile: 0144444444</p>
          <p>Email: joyroy1062@gmail.com</p>
          <p>Address: Dhaka, azimpur</p>
          <p>permanent-Add: Dhaka, gulshan</p>
        </div>
      </div>
      <p className="text-center pt-4 text-white">
        {" "}
        Copyright &copy; All rights reserved 2022{" "}
      </p>
    </footer>
  );
};

export default Footer;
