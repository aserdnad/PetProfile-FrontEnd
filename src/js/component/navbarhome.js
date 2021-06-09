import React from "react";
import { Link } from "react-router-dom";
// import { FormPerson } from "./formperson.js";

export const NavbarHome = () => {
	return (
		<nav className="navbar expand-lg navbar-dark bg-dark m-4">
			<Link to="/">
				<p className="navbar-brand m-4 h1">Pet Profile</p>
			</Link>
			<div className="ml-auto">
				<Link to="/FormPerson">
					<button className="btn btn-light p-4">¡Continuemos!</button>
				</Link>
			</div>
		</nav>
	);
};
