// Importamos las imagenes y los componente que vamos a utilizar

import React from "react";
import "./intro.css";
import granos from "./granos.jpg"
import CustomButton from "../Botton/CustomButton";

// Parametrizamos El Componente funcion intro (titulo) 
// podemos usar titulo combiando su valor en 
// diferentes partes del documento
// podemos poner varios parametro en este caso tambien agregamos Subtitulo


const Intro=({titulo,subtitulo})=>{
  return(
  <div className="contenedor_img">
    <h1>{titulo}</h1>
    <img src={granos} className="img_granos" alt="Foto Perfil"/>
    <h2>{subtitulo}</h2>
    <CustomButton color="Red" texto="Boton Intro"/>
    <CustomButton color="blue" texto="Boton Salir"/>
    <CustomButton color="green" texto="Boton Control"/>
  
  </div>
)
};

// Exportamos el documento

export default Intro;

