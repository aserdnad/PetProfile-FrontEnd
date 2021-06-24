import React, { useState } from "react";
import "../../styles/home.scss";
import { Row, Col, Jumbotron, Button, Card, Form } from "react-bootstrap";
import { Mascota } from "../component/mascota";

import QRCode from "qrcode.react";

export const Persona = () => {
	const [prueba, setPrueba] = useState(true);

	const irse = () => {
		history.push("/editar");
	};

	return (
		<div className="container">
			<h1 className="text-center">Nombre ususario</h1>
			<Row className="mt-3">
				<Col className="d-flex justify-content-center text-center">
					<Card style={{ width: "40rem" }}>
						<Card.Body>
							<Card.Title>Informacion</Card.Title>
							<Card.Text>nombre de usuario: {store.usuario.user_name}</Card.Text>
							<Card.Text>email: {store.usuario.email}</Card.Text>
							<Card.Text>telefono: {store.usuario.phone}</Card.Text>
							<Card.Text>cumpleanos: {store.usuario.birthday}</Card.Text>
							<Card.Text>Pais: {store.usuario.country}</Card.Text>
							<Card.Text>ciudad: {store.usuario.city}</Card.Text>
							<Button variant="primary" onClick={irse}>
								Editar informacion!
							</Button>
						</Card.Body>
					</Card>
				</Col>
			</Row>

			<h1 className="text-center mt-5">Mascotas</h1>
			{prueba ? (
				<Mascota />
			) : (
				<div className="text-center">
					<Button variant="primary" className="mt-2">
						Registra tu primera mascota!
					</Button>
				</div>
			)}

			<button type="button" className="btn btn-primary">
				Ver historial medico de tus mascotas
			</button>
		</div>
	);
};
