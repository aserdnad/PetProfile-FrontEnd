import React, { useEffect } from "react";
import { Link, useRouteMatch, useHistory } from "react-router-dom";

export const Navbar = () => {
	const match = useRouteMatch();
	const history = useHistory();
	useEffect(
		() => {
			console.log(match);
			console.log(history.location.pathname);
		},
		[match]
	);
	return (
		<nav className="navbar expand-lg navbar-dark bg-dark m-4">
			<Link to="/">
				<p className="navbar-brand m-4 h1">Pet Profile</p>
			</Link>
			<div className="ml-auto">
				{history.location.pathname == "/" && (
					<Link to="/FormPerson">
						<button className="btn btn-light p-4">¡Continuemos!</button>
					</Link>
				)}
			</div>
		</nav>
	);
};
