import React, { useState, useContext } from "react";
import "../../styles/home.scss";
import { Row, Col, Button, Card } from "react-bootstrap";
import { Mascota } from "../component/mascota";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";

export const Persona = () => {
	const { store, actions } = useContext(Context);
	const history = useHistory();

	const formMascota = () => {
		history.push("/formpet");
	};

	return (
		<div>
			<h1 className="text-center">
				{store.usuario.name} {store.usuario.last_name}
			</h1>
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
							<Button variant="primary">Editar informacion!</Button>
						</Card.Body>
					</Card>
				</Col>
			</Row>

			<h1 className="text-center mt-5">Mascotas</h1>
			{store.mascotas.length > 0 ? (
				<div>
					{store.mascotas.map((animal, index) => {
						return (
							<div key={index}>
								<Mascota
									age={animal.age}
									birthday={animal.birthday}
									gender={animal.gender}
									height={animal.height}
									name={animal.name}
									race={animal.race}
									species={animal.species}
									weight={animal.weight}
								/>
							</div>
						);
					})}
				</div>
			) : (
				<div className="text-center">
					<Button variant="primary" className="mt-2" onClick={formMascota}>
						Registra tu primera mascota!
					</Button>
				</div>
			)}
		</div>
	);
};
