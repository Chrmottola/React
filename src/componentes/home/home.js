//Importamos React al archivo actual
// y tambien importamos hoja de stilos css

import React from "react";
import Intro from "../intro/intro";
import "./home.css";

// Generamos la funcion. en este caso
// funcion flecha Se nombra en Mayuscula

const Home = () => {
  return (
    <headers>
      <Intro titulo="Mundo Café" subtitulo="Un Lugar Único"  /> 
    </headers>
  );
}
export default Home;
