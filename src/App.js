import './App.css';
import Footer from './componentes/footer/Footer';
import Home from './componentes/home/Home';
import Navbar from './componentes/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar tituloNavegador="Store Coffe"/>
      <Home/>
      <Footer/>
    </div>
    );
}

export default App;
