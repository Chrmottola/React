import React from "react";
import "./navbar.css"

const Navbar = ({ tituloNavegador }) =>{
  return (
    <nav className="nav_Navbar">
      <h2>{tituloNavegador}</h2>
      <ul>
        <li><a href="https://www.google.com/">Home</a></li>
        <li><a href="https://www.google.com/">Servicios</a></li>
        <li><a href="https://www.google.com/">Contacto</a></li>
      </ul>
    </nav>
  )
};
export default Navbar;
