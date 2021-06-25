import React, { useContext } from "react";
import { Link, useRouteMatch, useHistory } from "react-router-dom";
import logo from "../../img/logo.png";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { actions } = useContext(Context);

	return (
		<nav className="navbar expand-lg navbar-dark bg-dark m-4">
			<Link to="/usuario">
				<img width="50" height="50" src={logo} />
			</Link>
			<div className="ml-auto">
				<Link to="/historial" className="m-2 text-white">
					Historia
				</Link>
				<Link to="/calendario" className="m-2 text-white">
					Calendario
				</Link>
				<Link to="/formpet" className="m-2 text-white">
					Agregar mascota
				</Link>
				<Link to="/" className="m-2 text-white" onClick={actions.logout}>
					Log out
				</Link>
			</div>
		</nav>
	);
};
