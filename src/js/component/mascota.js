import React from "react";
import "../../styles/home.scss";
import { Button, Card, Row, Col } from "react-bootstrap";
import pets1 from "../../img/pets1.jpg";

export const Mascota = () => {
	return (
		<Row className="mt-3">
			<Col className="d-flex justify-content-center text-center">
				<Card style={{ width: "40rem" }}>
					<Card.Img variant="top" width="100" height="200" src={pets1} />
					<Card.Body>
						<Card.Title>Nombre mascota</Card.Title>
						<Card.Text>raza mascota</Card.Text>
						<Card.Text>sexo mascota</Card.Text>
						<Card.Text>edad mascota</Card.Text>
						<Card.Text>especie mascota</Card.Text>
						<Card.Text>peso mascota</Card.Text>
						<Card.Text>altura mascota</Card.Text>
						<Button variant="primary">Edita la informacion!</Button>
					</Card.Body>
				</Card>
			</Col>
		</Row>
	);
};
