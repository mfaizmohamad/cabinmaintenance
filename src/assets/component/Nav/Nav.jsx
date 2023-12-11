import React from 'react'
import "./Nav.css"

import { BiBook } from "react-icons/bi";
import { IoHomeOutline } from "react-icons/io5";
import { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a href="#" 
      onClick={() => setActiveNav("#")}
      className={activeNav === "#" ? "active" : ""}>
        <IoHomeOutline />
      </a>
      <a
        href="#mel"
        onClick={() => setActiveNav("#mel")}
        className={activeNav === "#mel" ? "active" : ""}
      >
        <h5>MEL</h5>
      </a>
    </nav>
  );
};

export default Nav;