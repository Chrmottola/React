// Pagina Principal del Proyecto

import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from './componentes/Footer/Footer';
import Home from './componentes/Home/Home';
import Navegador from './componentes/Navbar/Navbar';
import Menu from './componentes/NavBarBoostrap/NavBarBoostrap';
import {Route, Routes } from 'react-router-dom';
import Contacto from './componentes/Contacto/Contacto';

function App() {
  return (
    <>
    <Menu/>
    <Navegador tituloNavegador="Store Coffe"/>
    <Home/>
    <Routes>
        <Route path="/Contacto" element={<Contacto/>}/>
      </Routes> 
    <Footer/>
    </>
  );
}



export default App;
