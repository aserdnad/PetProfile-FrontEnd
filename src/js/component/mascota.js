import React, { useContext } from "react";
import "../../styles/home.scss";
import { Button, Card, Row, Col } from "react-bootstrap";
import pets1 from "../../img/pets1.jpg";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

//Vicky
import { useHistory } from "react-router-dom";
import QRCode from "qrcode.react";

export const Mascota = ({ petID, age, birthday, gender, height, name, race, species, weight, index }) => {
	//Vicky
	const history = useHistory();

	const { store, actions } = useContext(Context);
	// URL publica Front-End gitpod mascota
	const handleClick = () => history.push(`/getpetqr/${petID}`);

	const eliminar = () => {
		actions.eliminarPet(petID);
	};

	const editarMascota = index => {
		history.push(`/editarmascota/${index}`);
	};

	return (
		<Row className="mt-3">
			<Col className="d-flex justify-content-center text-center">
				<Card style={{ width: "40rem" }}>
					<Card.Img variant="top" width="auto" height="450" src={pets1} />
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
							<QRCode value={`/getpetqr/${petID}`} onClick={handleClick} />
						</Card.Text>

						<div>
							<Button variant="primary" onClick={() => editarMascota(index)}>
								Edita la informacion!
							</Button>
						</div>
						<div className="mt-2">
							<Button variant="danger" className="mt-5" onClick={eliminar}>
								Eliminar
							</Button>
						</div>
					</Card.Body>
				</Card>
			</Col>
		</Row>
	);
};

Mascota.propTypes = {
	petID: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
	age: PropTypes.string,
	birthday: PropTypes.string,
	gender: PropTypes.string,
	height: PropTypes.string,
	name: PropTypes.string,
	race: PropTypes.string,
	species: PropTypes.string,
	weight: PropTypes.string,
	index: PropTypes.oneOf([PropTypes.string, PropTypes.number])
};
