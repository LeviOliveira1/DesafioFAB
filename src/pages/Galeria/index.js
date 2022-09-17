import React from "react";
import { Link, Outlet } from "react-router-dom";

function Galeria(){
	return(
<div>
      <nav className="navbar" >
        <ul>
          <li>
            <Link to="/">Página Inicial</Link>
          </li>
          <li>
            <Link to="/Sobre-Zoo">Sobre Zoo</Link>
          </li>
		  <li>
            <Link to="/Galeria" className="galeria">Galeria</Link>
          </li>
        </ul>
      </nav>
      <Outlet/>
	<h1>Zoológico SomeWhere</h1>
	<div className="descricao">
		<h2>Galeria:</h2>
	</div>
	</div>

	);
}

export default Galeria;
