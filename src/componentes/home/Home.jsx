//Importamos React al archivo actual
// y tambien importamos hoja de stilos css

// Importamos el componente Intro

import React from "react";
import Intro from "../Intro/Intro";
import "./home.css";

// Generamos el componente funcion. en este caso Home
// funcion flecha Se nombra en Mayuscula

// Le damos parametros al componente intro desde el componoente padre home

const Home = () => {
  return (
    <headers>
      <Intro titulo="Mundo Café" subtitulo="Un Lugar Único"/> 
    </headers>
  );
}

// Exportamos el Componente

export default Home;
