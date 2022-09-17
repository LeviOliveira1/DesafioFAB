import React from "react";
import { Link, Outlet,image } from "react-router-dom";

function Main(){
	return(
    <div>
      <nav className="navbar" >
        <ul>
          <li>
            <Link to="/" className="primeira">Página Inicial</Link>
          </li>
          <li>
            <Link to="/Sobre-Zoo">Sobre Zoo</Link>
          </li>
		  <li>
            <Link to="/Galeria">Galeria</Link>
          </li>
        </ul>
      </nav>
      <Outlet/>
	<h1>Zoológico SomeWhere</h1>
		<h1 className="nome">Zoológico SomeWhere🐒</h1>
	<div className="descricao">
		<h2>Sobre Nós:👇 </h2>

		<p>O Zoológico SomeWhere é um parque de vida selvagem de Queensland com um espírito de observação, apreciação e conservação.

Faz parte do Grupo CaPTA, que significa Cairns and Port Trips and Attractions e emprega mais de 200 funcionários em todo o grupo.

O grupo consiste em Zoológico SomeWhere, Cairns ZOOM & Wildlife Dome, Jungle Tours & Trekking, Tropic Wings Cairns Tours & Charters, Rainforestation Nature Park, Australian Butterfly Sanctuary, Wooroonooran Safaris, Careers Training Center e ABC Sales & Maintenance.

Embora o foco de negócios do CaPTA esteja centrado em produtos turísticos, o grupo se expandiu para turismo e treinamento indígena por meio do Centro de Treinamento de Carreiras e, mais recentemente, para vendas, manutenção, serviços e peças de ônibus Yutong por meio do ABC Sales & Maintenance.

O Zoológico SomeWhere foi aberto ao público como um santuário de pássaros e borboletas em junho de 1989 e foi originalmente chamado de Rainforest Habitat. O Rainforest Habitat foi comprado por Charles e Pip Woodward em 1 de outubro de 2005 e renomeado como Wildlife Habitat e continua seu compromisso com a conservação animal, proporcionando alegria aos moradores e visitantes da nossa região e provando ser um dos principais parques de vida selvagem de Queensland.</p>

	</div>
	</div>
	);
};

export default Main;