import React from "react";
import "./intro.css";
import granos from "./granos.jpg"
import CustomButton from "../Botton/CustomButton";

// Parametrizamos la funcion intro (titulo) 
// podemos usar titulo combiando su valor en 
// diferentes partes del documento
// podemos poner varios parametro en este caso
// subtitulo

const Intro=({titulo,subtitulo})=>{
  return(
  <div className="contenedor_img">
    <h1>{titulo}</h1>
    <img src={granos} className="img_granos" alt="Foto Perfil"/>
    <h2>{subtitulo}</h2>
    <CustomButton color="Red" texto="Boton Intro"/>
    <CustomButton color="blue" texto="Boton Salir"/>
  
  </div>
)
};

export default Intro;

