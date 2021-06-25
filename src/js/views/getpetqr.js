import React, { useState, useContext } from "react";
import "../../styles/home.scss";
import { Row, Col, Jumbotron, Button, Card, Form } from "react-bootstrap";
import { MascotaQR } from "../component/mascotaqr";
import { Context } from "../store/appContext";

export const GetPetQR = () => {
	const [prueba, setPrueba] = useState(true);
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<h1 className="text-center mt-5">Mascotas</h1>
			<MascotaQR />
		</div>
	);
};
