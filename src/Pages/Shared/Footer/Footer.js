import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="per-section">
        <h4 className="title">NEWS LETTERS</h4>
        <p>
          <small>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />{" "}
            Labore dolorum nemo itaque minima illum doloremque <br /> error et
            exercitationem nisi neque?
          </small>
          <br />
          <input type="text" placeholder="Enter your name" />
        </p>
      </div>
      <div className="per-section">
        <h4 className="title">LETEST TWEETS</h4>
        <p>
          <small>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />{" "}
            Illum amet nulla quisquam excepturi inventore, libero unde veritatis
            aut neque, <br /> laborum odio veniam! Blanditiis aperiam sint
            aspernatur fuga dolores. Dolorum, aliquam!
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
    </footer>
  );
};

export default Footer;
