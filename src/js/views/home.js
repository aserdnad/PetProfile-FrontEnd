import React from "react";
import pets1 from "../../img/pets1.jpg";
import "../../styles/home.scss";

export const Home = () => (
	<div className="text-center m-5 p-5">
		<p>
			<img src={pets1} />
		</p>
		<h1>Con Pet Profile, no te pierdas ni un solo momento de tu mastoca, ¡al alcance de un solo clic!</h1>
	</div>
);
