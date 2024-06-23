import React, { useContext } from 'react'
import { Context } from "../../main";
import { Link } from "react-router-dom";
import { FaFacebookF, FaYoutube, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  const { isAuthorized } = useContext(Context);
  return (
    <footer className={isAuthorized ? "footerShow" : "footerHide"}>
      <div>&copy; All Rights Reserved By Saptaneel.</div>
      <div>
        <Link to={"https://www.facebook.com/rohan.chakraborty.31542"} target="_blank">
          <FaFacebookF />
        </Link>
        <Link to={"https://www.youtube.com/watch?v=tVzUXW6siu0&list=PLu0W_9lII9agq5TrH9XLIKQvv0iaF2X3w"} target="_blank">
          <FaYoutube />
        </Link>
        <Link to={"https://www.linkedin.com/in/saptaneel-chakraborty-24b546212/"} target="_blank">
          <FaLinkedin />
        </Link>
        <Link to={"https://www.instagram.com/saptaneel23chakraborty"} target="_blank">
          <RiInstagramFill />
        </Link>
      </div>
    </footer>
  );
};
  

export default Footer
