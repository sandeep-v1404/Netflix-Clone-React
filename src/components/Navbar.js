import React, { useState, useEffect } from "react";
import "./Navbar.css";
function Navbar() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div className={`Navbar ${show && "Navbar__black"}`}>
      <img
        className="Navbar__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
        alt="Netflix Logo"
      />
      <img
        className="Navbar__avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Face-smile.svg/800px-Face-smile.svg.png"
        alt="Avatar Logo"
      />
    </div>
  );
}

export default Navbar;
