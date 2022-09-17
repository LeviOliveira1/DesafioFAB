import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import React, { Component } from "react";
import "./styles.css";
import "./global.css";
import Main from './pages/Main';
import SobreZoo from './pages/SobreZoo';
import Galeria from './pages/Galeria';
import api from './api';


function App(){
   return(
    <div>
     <Router>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/Sobre-Zoo' element={<SobreZoo/>}/>
        <Route path='/Galeria' element={<Galeria/>}/>
      </Routes>
     </Router>
    </div>
   );
};

export default App