import React from "react";
import "./customButton.css";

// Creamos componente button con dos parametros y
// con stilo en linea para el backgroundColor y una
// clase para los demas stilos.

const CustomButton=({texto,color})=>{
  return(
    <button style={{backgroundColor:color}} className="customButton">{texto}</button>
  )
}
export default CustomButton;
