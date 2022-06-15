import React, { useEffect, useState } from "react";
import logo from "../images/logo.png";
import avatar from "../images/avatar.png"
import '../styles/Nav.css'

export default function Nav() {
   const [show, handleShow] = useState(false);


   useEffect(()=> {
     window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
         handleShow(true)
       } else handleShow(false)
     });
    
   return () => {
     window.removeEventListener("scroll", null)
   };
 }, []);
  
  return (
    <div className={`nav ${show && 'nav_black'}`}>
      <div className="nav">
      <img className="nav_logo" src={logo} alt="gioflix logo" />
      <img className="nav_avatar" src={avatar} alt="about" />
    </div>
    </div>
  );
}
