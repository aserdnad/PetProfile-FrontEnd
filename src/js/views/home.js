import React, { useContext, useState } from "react";
import logo from "../../img/logo.png";
import "../../styles/home.scss";
import { Row, Col, Jumbotron, Card, Alert } from "react-bootstrap";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";
export const Home = () => {
	const [usuario, setUsuario] = useState("");
	const [contrasena, setContrasena] = useState("");
	const [error, setError] = useState(false);
	const { actions } = useContext(Context);
	const history = useHistory();

	const login = async (usuario, contrasena) => {
		const resultado = await actions.login(usuario, contrasena);
		setUsuario("");
		setContrasena("");
		if (resultado) {
			history.push("/usuario");
		} else {
			setError(true);
		}
	};

	const registro = () => {
		history.push("/formperson");
	};

	return (
		<Jumbotron>
			{error && <Alert variant="danger">Hubo un error en el usuario o la contraseña</Alert>}
			<Row>
				<Col className="text-center">
					<img className="w-25" src={logo} />
					<h1 className="mt-4">Pet Profile</h1>
					<p className="mt-2">Bienvenido a Pet Profile, el lugar donde podras</p>
					<p className="mt-2">organizar todos los datos de tu mascota!</p>
				</Col>
				<Col className="d-flex justify-content-center">
					<Card style={{ width: "18rem" }}>
						<Card.Body>
							<form>
								<div className="mb-3">
									<label>Nombre de usuario</label>
									<input
										type="text"
										placeholder="Email"
										value={usuario}
										onChange={e => setUsuario(e.target.value)}
									/>
								</div>
								<div className="mb-3">
									<label>Contraseña</label>
									<input
										type="password"
										placeholder="Contraseña"
										value={contrasena}
										onChange={e => setContrasena(e.target.value)}
									/>
								</div>
							</form>
							<div className="row d-flex justify-content-center">
								<button className="btn btn-primary mt-3" onClick={e => login(usuario, contrasena)}>
									¡Inicia Sesión!
								</button>
							</div>
							<div className="row d-flex justify-content-center">
								<button className="btn btn-danger mt-3" onClick={registro}>
									¡Regístrate!
								</button>
							</div>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Jumbotron>
	);
};
