import React, { useEffect } from "react";
import { Link, useRouteMatch, useHistory } from "react-router-dom";
import logo from "../../img/logo.png";

export const Navbar = () => {
	const match = useRouteMatch();
	const history = useHistory();
	const handleClick1 = () => history.push("/FormPerson");
	const handleClick2 = () => history.push("/LogIn");
	useEffect(() => {
		console.log(match);
		console.log(history.location.pathname);
	}, [match]);
	return (
		<nav className="navbar expand-lg navbar-dark bg-dark m-4">
			<Link to="/">
				<img width="50" height="50" src={logo} />
			</Link>
			<div className="ml-auto">
				{history.location.pathname == "/" && (
					<Link to="/">
						<button className="btn btn-light m-1 p-1" type="button" onClick={handleClick1}>
							¡Regístrate!
						</button>
						<button className="btn btn-light m-1 p-1" type="button" onClick={handleClick2}>
							¡Inicia Sesión!
						</button>
					</Link>
				)}
			</div>
		</nav>
	);
};
