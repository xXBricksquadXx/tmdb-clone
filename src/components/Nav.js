import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
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
    <div className={`nav ${show && "nav_black"}`}>
      <img
        className="nav_logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd_3yL9TsaOpy5ByhJPLyAxJBo6Rb6ybVV5cpNqqZ_okrr5P7ICvLPOFt9ypjNTUGZedU&usqp=CAU"
        alt="Bricksquads Logo"
      />
      <img
        className="nav_avatar"
        src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
        alt="Avatar Image"
      />
    </div>
  );
}

export default Nav;