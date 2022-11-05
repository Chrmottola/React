import React from "react";
import "./intro.css";
import granos from "./granos.jpg"

// Parametrizamos la funcion intro (titulo) 
// podemos usar titulo combiando su valor en 
// diferentes partes del documento
// podemos poner varios parametro en este caso
// subtitulo

const Intro=({titulo,subtitulo})=>{
  return(
  <div className="contenedor_img">
    <h1>{titulo}</h1>
    <h2>{subtitulo}</h2>
    <img src={granos} className="img_granos" alt="Foto Perfil"/>
  </div>
)
};

export default Intro;

