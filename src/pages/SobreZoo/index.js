import React from "react";
import { Link, Outlet } from "react-router-dom";
import{useEffect,useState} from "react";




function SobreZoo(){
	return(
		
<div>
      <nav className="navbar" >
        <ul>
          <li>
            <Link to="/">Página Inicial</Link>
          </li>
          <li>
            <Link to="/Sobre-Zoo" className="Zoo">Sobre Zoo</Link>
			
          </li>
		  <li>
            <Link to="/Galeria">Galeria</Link>
          </li>
        </ul>
      </nav>
      <Outlet/>
	<h1>Zoológico SomeWhere</h1>
	<div className="descricao">
		<h2>Nossos Animais:</h2>
	</div>
	</div>
	

	);
};

export default SobreZoo;