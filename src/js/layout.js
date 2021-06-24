import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { FormPerson } from "./views/formperson";
import { FormPet } from "./views/formpet";
import { Error } from "./views/error";
import { Persona } from "./views/persona";
import { Calendario } from "./views/calendario";
import { EditarPerfil } from "./views/editarperfil";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/formperson">
							<FormPerson />
						</Route>
						<Route exact path="/formpet">
							<Navbar />
							<FormPet />
						</Route>
						<Route exact path="/calendario">
							<Navbar />
							<Calendario />
						</Route>
						<Route exact path="/usuario">
							<Navbar />
							<Persona />
						</Route>
						<Route exact path="/editar">
							<Navbar />
							<EditarPerfil />
						</Route>
						<Route>
							<Navbar />
							<Error />
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
