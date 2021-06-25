import React, { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../../styles/home.scss";
import { Row, Col, Jumbotron, Button, Card, Form } from "react-bootstrap";
import { MascotaQR } from "../component/mascotaqr";
import { Context } from "../store/appContext";

export const GetPetQR = () => {
	const [prueba, setPrueba] = useState(true);
	const { store, actions } = useContext(Context);

	const params = useParams();
	useEffect(() => {
		actions.getPublicPet(params.petID);
	}, [params]);
	return (
		<div className="container">
			<h1 className="text-center mt-5">Mascotas</h1>
			{store.publicPet != null && <MascotaQR />}
			<div className="text-center">
				<Button variant="primary">Adopta!</Button>
			</div>
		</div>
	);
};
