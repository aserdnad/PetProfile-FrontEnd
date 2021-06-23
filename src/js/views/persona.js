import React, { useState } from "react";
import "../../styles/home.scss";
import { Row, Col, Jumbotron, Button, Card, Form } from "react-bootstrap";
import { Mascota } from "../component/mascota";

export const Persona = () => {
	const [prueba, setPrueba] = useState(true);

	return (
		<div className="container">
			<h1 className="text-center">Nombre ususario</h1>
			<Row className="mt-3">
				<Col className="d-flex justify-content-center text-center">
					<Card style={{ width: "40rem" }}>
						<Card.Body>
							<Card.Title>Informacion</Card.Title>
							<Card.Text>email usuario</Card.Text>
							<Card.Text>telefono usuario</Card.Text>
							<Card.Text>cumpleanos usuario</Card.Text>
							<Card.Text>direccion</Card.Text>
							<Card.Text>Pais, ciudad</Card.Text>
							<Button variant="primary">Editar informacion!</Button>
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
			<button>Ver historial medico de tus mascotas </button>
		</div>
	);
};
