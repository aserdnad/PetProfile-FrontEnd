import React, { useState, useContext } from "react";
import "../../styles/home.scss";
import { Row, Col, Jumbotron, Button, Card, Form } from "react-bootstrap";
import { Mascota } from "../component/mascota";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";

export const Persona = () => {
	const [prueba, setPrueba] = useState(true);
	const { store, actions } = useContext(Context);
	const irse = () => {
		history.push("/editar");
	};

	return (
		<div className="container">
			<h1 className="text-center">Perfil del Usuario</h1>
			<Row className="mt-3">
				<Col className="d-flex justify-content-center text-center">
					<Card style={{ width: "40rem" }}>
						<Card.Body>
							<Card.Title>Informacion del Dueño</Card.Title>
							<Card.Text>Usuario: {store.usuario.user_name}</Card.Text>
							<Card.Text>Nombre: {store.usuario.name}</Card.Text>
							<Card.Text>Apellido: {store.usuario.apellido}</Card.Text>
							<Card.Text>Correo Electrónico: {store.usuario.email}</Card.Text>
							<Card.Text>Teléfono de Contacto: {store.usuario.phone}</Card.Text>
							<Card.Text>Cumpleaños: {store.usuario.birthday}</Card.Text>
							<Card.Text>Ciudad: {store.usuario.city}</Card.Text>
							<Card.Text>País: {store.usuario.country}</Card.Text>
							<Button variant="primary" onClick={irse}>
								¡Editar informacion!
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
