import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar expand-lg navbar-dark bg-dark m-4">
			<Link to="/">
				<p className="navbar-brand m-4 h1">Pet Profile</p>
			</Link>
		</nav>
	);
};
