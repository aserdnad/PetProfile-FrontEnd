import React from "react";
import "../../styles/home.scss";
import { Button, Card, Row, Col } from "react-bootstrap";
import pets1 from "../../img/pets1.jpg";
import PropTypes from "prop-types";

//Vicky
import { useHistory } from "react-router-dom";
import QRCode from "qrcode.react";

export const Mascota = ({ age, birthday, gender, height, name, race, species, weight }) => {
	//Vicky
	const history = useHistory();
	// URL publica Front-End gitpod mascota
	const handleClick = () => history.push("/");

	return (
		<Row className="mt-3">
			<Col className="d-flex justify-content-center text-center">
				<Card style={{ width: "40rem" }}>
					<Card.Img variant="top" width="100" height="200" src={pets1} />
					<Card.Body>
						<Card.Title>{`Nombre: ${name}`}</Card.Title>
						<Card.Text>{`Raza: ${race}`}</Card.Text>
						<Card.Text>{`Especie: ${species}`}</Card.Text>
						<Card.Text>{`Sexo: ${gender}`}</Card.Text>
						<Card.Text>{`Edad: ${age}`}</Card.Text>
						<Card.Text>{`Peso: ${weight}`}</Card.Text>
						<Card.Text>{`Altura: ${height}`}</Card.Text>
						<Card.Text>{`Cumpleaños: ${birthday}`}</Card.Text>

						{/* Vicky */}
						<Card.Text>
							<QRCode value="/getpetQR/${mascota}" onClick={handleClick} />
						</Card.Text>

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
