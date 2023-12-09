import React from 'react'
import "./Nav.css"

import { FaRegUser } from "react-icons/fa";
import { BiBook } from "react-icons/bi";
import { IoHomeOutline } from "react-icons/io5";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageDetail } from "react-icons/bi";
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
        className={activeNav === "#about" ? "active" : ""}
      >
        <BiBook />
      </a>
      <a href="#experience"
         onClick={() => setActiveNav("#experience")}
         className={activeNav === "#experience" ? "active" : ""}
      >
        <FaRegUser/>
      </a>
      <a href="#services"
         onClick={() => setActiveNav("#services")}
         className={activeNav === "#services" ? "active" : ""}
      >
        <RiServiceLine />
      </a>
      <a href="#contact"
         onClick={() => setActiveNav("#contact")}
         className={activeNav === "#contact" ? "active" : ""}
      >
        <BiMessageDetail />
      </a>
    </nav>
  );
};

export default Nav;