"use client";
import React from "react";
import Link from "next/link";
import "./Navbar.css";
import { FaCode } from "react-icons/fa";
import { CgMenuRightAlt } from "react-icons/cg";
import { IoIosCloseCircle } from "react-icons/io";
import { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const setMenu = () => {
    setToggle(!toggle);
  };

  return (
    <div className="nav_container">
      <nav>
        <h1 className="brand">
          <FaCode />
          Puskar Roy
        </h1>
        <ul className={toggle ? `toggle_list` : `menu_list`}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/">About</Link>
          </li>
          <li>
            <Link href="/">Qualification</Link>
          </li>
          <li>
            <Link href="/">Services</Link>
          </li>
          <li>
            <Link href="/">Projects</Link>
          </li>
          <li>
            <Link href="/">Contact</Link>
          </li>
        </ul>
        <p onClick={setMenu} className="menu_button">
          {toggle ? <IoIosCloseCircle /> :  <CgMenuRightAlt />} 
        </p>
      </nav>
    </div>
  );
};

export default Navbar;
