// Etiquetas para linkear
// NavLink esta optimizado para Navegadores
// Link para linkear dentro de la pagina

import React from "react";
import "./navbar.css"
import { NavLink } from "react-router-dom";

const Navegador=({tituloNavegador})=>{
  return(
    <nav className="nav_Navbar">
      <h2>{tituloNavegador}</h2>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/Contacto">Contacto</NavLink></li>  
      </ul>
    </nav>
  )
};

export default Navegador;
