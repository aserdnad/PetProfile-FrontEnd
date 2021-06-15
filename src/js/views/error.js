import React from "react";
import pets1 from "../../img/pets1.jpg";
import "../../styles/home.scss";

export const Error = () => {
	return (
		<div className="text-center">
			<p>
				<img src={pets1} />
			</p>
			<h1>Uppss! Pagina no disponible</h1>
		</div>
	);
};
