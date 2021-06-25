import React from "react";
import "../../styles/home.scss";
import { Button, Card, Row, Col } from "react-bootstrap";
import pets1 from "../../img/pets1.jpg";
import PropTypes from "prop-types";

export const Mascota = ({ age, birthday, gender, height, name, race, species, weight }) => {
	return (
		<Row className="mt-3">
			<Col className="d-flex justify-content-center text-center">
				<Card style={{ width: "40rem" }}>
					<Card.Img variant="top" width="100" height="200" src={pets1} />
					<Card.Body>
						<Card.Title>{`Nombre: ${name}`}</Card.Title>
						<Card.Text>{`raza: ${race}`}</Card.Text>
						<Card.Text>{`especie: ${species}`}</Card.Text>
						<Card.Text>{`sexo: ${gender}`}</Card.Text>
						<Card.Text>{`edad: ${age}`}</Card.Text>
						<Card.Text>{`peso: ${weight}`}</Card.Text>
						<Card.Text>{`altura: ${height}`}</Card.Text>
						<Card.Text>{`cumpleanos: ${birthday}`}</Card.Text>
						<Button variant="primary">Edita la informacion!</Button>
					</Card.Body>
				</Card>
			</Col>
		</Row>
	);
};

Mascota.propTypes = {
	age: PropTypes.string,
	birthday: PropTypes.string,
	gender: PropTypes.string,
	height: PropTypes.string,
	name: PropTypes.string,
	race: PropTypes.string,
	species: PropTypes.string,
	weight: PropTypes.string
};
