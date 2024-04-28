
import React from 'react';

import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
 
  BrowserRouter as Router,
} from "react-router-dom";

import { Link } from 'react-router-dom';


import RouletteGame from './components/RouletteGame';
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {RouletteFunctionsProvider} from './components/providers/RouletteFunctionsProvider';
import Menu from './components/Menu/Menu';

function ReloadButton() {
    
  window.location.reload(); // Recargar la página
};


const App = () => {

  return (
    <Router>
    <>
   
    <RouletteFunctionsProvider>

      <section className='section-titulo-ruleta'>
      <h1>R.U.L.E.T.A ~ <img className='img-ruleta-titulo' src="/img/cargando.webp" alt="" /> ~ S.T.A.L.K.E.R</h1>

      </section>

      <Routes> 
      <Route path="/" element={  
      <div className='content-buton-playgame-menu'>
            <button className='pushable' onClick={ReloadButton}>
            <span className="shadow"></span>
            <span className="edge"></span>
            <span className="front-initial">
              
            <Link to="/select">iniciar Juego</Link>
            </span>
            </button>
       </div>}></Route>
      <Route path="/select" element={ <Menu></Menu>}></Route>
     
      <Route path="/game" element={ <RouletteGame />}></Route>
      
      </Routes>
   

      </RouletteFunctionsProvider>

      <ToastContainer/>
    </>
    </Router>
  );
};

export default App;
