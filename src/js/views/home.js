import React, { useContext, useState } from "react";
import logo from "../../img/logo.png";
import "../../styles/home.scss";
import { Row, Col, Jumbotron, Card, Alert } from "react-bootstrap";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";
import QRCode from "qrcode.react";

export const Home = () => {
	const [usuario, setUsuario] = useState("");
	const [contrasena, setContrasena] = useState("");
	const [error, setError] = useState(false);
	const { store, actions } = useContext(Context);
	const history = useHistory();

	//Vicky
	// URL publica Front-End gitpod
	const handleClick = () => history.push("/");

	const login = async () => {
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
		<Jumbotron className="mt-5">
			{error && <Alert variant="danger">Hubo un error en el usuario o la contraseña</Alert>}
			<Row>
				<Col className="text-center">
					<img className="w-25" src={logo} />
					<h1 className="mt-4">Pet Profile</h1>
					<p className="mt-2">Bienvenido a Pet Profile, no te pierdas</p>
					<p className="mt-2">ni un solo momento de tu mastoca,</p>
					<p className="mt-2">y organiza todos sus datos.</p>
					<p>¡Al alcance de un solo clic!</p>
				</Col>
				<Col className="d-flex justify-content-center">
					<Card style={{ width: "18rem" }}>
						<Card.Body>
							<form>
								<div className="mb-3">
									<label>
										<strong>Correo Electrónico</strong>
									</label>
									<input
										type="text"
										placeholder="Email"
										value={usuario}
										onChange={e => setUsuario(e.target.value)}
									/>
								</div>
								<div className="mb-3">
									<label>
										<strong>Contraseña</strong>
									</label>
									<input
										type="password"
										placeholder="Contraseña"
										value={contrasena}
										onChange={e => setContrasena(e.target.value)}
									/>
								</div>
							</form>
							<div className="row d-flex justify-content-center">
								<button className="btn btn-primary mt-3" onClick={login}>
									¡Inicia Sesión!
								</button>
							</div>
							<div className="row d-flex justify-content-center">
								<button className="btn btn-danger mt-3" onClick={registro}>
									¡Regístrate!
								</button>
							</div>

							{/* Vicky */}
							<div className="row d-flex justify-content-center">
								<p>
									<br />
									<QRCode value="http://www.petprofile.com" onClick={handleClick} />
								</p>
							</div>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Jumbotron>
	);
};
