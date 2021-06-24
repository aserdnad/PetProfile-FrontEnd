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
<<<<<<< HEAD
							<Card.Text>nombre de usuario: {store.usuario.user_name}</Card.Text>
							<Card.Text>email: {store.usuario.email}</Card.Text>
							<Card.Text>telefono: {store.usuario.phone}</Card.Text>
							<Card.Text>cumpleanos: {store.usuario.birthday}</Card.Text>
							<Card.Text>Pais: {store.usuario.country}</Card.Text>
							<Card.Text>ciudad: {store.usuario.city}</Card.Text>
							<Button variant="primary" onClick={irse}>
								Editar informacion!
							</Button>
=======
							<Card.Text>email usuario</Card.Text>
							<Card.Text>telefono usuario</Card.Text>
							<Card.Text>cumpleanos usuario</Card.Text>
							<Card.Text>direccion</Card.Text>
							<Card.Text>Pais, ciudad</Card.Text>
							<Card.Text>
								<QRCode value="http://localhost:3001" />
							</Card.Text>
							<Button variant="primary">Editar informacion!</Button>
>>>>>>> 7605149dc0fe829013abc85e8df09f51a31f5940
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
