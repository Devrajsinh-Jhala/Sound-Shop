import React from "react";
import {
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer-container">
      <p>
        Made with 🧡 by <b>Devraj Jhala</b>
      </p>
      <p className="icons">
        <a
          rel="noopener"
          target={"_blank"}
          href={"https://www.linkedin.com/in/devrajsinh-jhala-673988200/"}
        >
          <AiFillLinkedin />
        </a>

        <a
          rel="noopener"
          target={"_blank"}
          href={"https://www.instagram.com/devrajsinh.jhala/"}
        >
          <AiFillInstagram />
        </a>

        <a
          rel="noopener"
          target={"_blank"}
          href={"https://twitter.com/JHALA_D_S"}
        >
          <AiOutlineTwitter />
        </a>
      </p>
    </div>
  );
};

export default Footer;
