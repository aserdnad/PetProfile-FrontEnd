import React, { useContext } from "react";
import "../../styles/home.scss";
import { Button, Card, Row, Col } from "react-bootstrap";
import pets1 from "../../img/pets1.jpg";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
//Vicky
import { useHistory } from "react-router-dom";
import QRCode from "qrcode.react";

export const MascotaQR = props => {
	//Vicky
	const { store, actions } = useContext(Context);
	const history = useHistory();
	// URL publica Front-End gitpod mascota
	const handleClick = () => history.push("/");

	return (
		<Row className="mt-3">
			<Col className="d-flex justify-content-center text-center">
				<Card style={{ width: "40rem" }}>
					<Card.Img variant="top" width="100" height="200" src={pets1} />
					<Card.Body>
						<Card.Title>{`Nombre: ${store.publicPet.name}`}</Card.Title>
						<Card.Text>{`Raza: ${store.publicPet.race}`}</Card.Text>
						<Card.Text>{`Especie: ${store.publicPet.species}`}</Card.Text>
						<Card.Text>{`Sexo: ${store.publicPet.gender}`}</Card.Text>
						<Card.Text>{`Edad (años): ${store.publicPet.age}`}</Card.Text>
						<Card.Text>{`Peso (Kg): ${store.publicPet.weight}`}</Card.Text>
						<Card.Text>{`Altura (cm): ${store.publicPet.height}`}</Card.Text>
						<Card.Text>{`Fecha de Nacimiento: ${store.publicPet.birthday}`}</Card.Text>
					</Card.Body>
				</Card>
			</Col>
		</Row>
	);
};

MascotaQR.propTypes = {};
