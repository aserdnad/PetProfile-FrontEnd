import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { Alert } from "react-bootstrap";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

export function EditarMascota() {
	const history = useHistory();
	const { id } = useParams();
	const numero = parseInt(id);

	const [age, setAge] = useState("");
	const [weight, setWeight] = useState("");
	const [height, setHeight] = useState("");
	const [error, setError] = useState(false);
	const { store, actions } = useContext(Context);

	function ageHandler(event) {
		setAge(event.target.value);
	}
	function weightHandler(event) {
		setWeight(event.target.value);
	}
	function heightHandler(event) {
		setHeight(event.target.value);
	}
	const cambiarPet = async (age, weight, height, petID) => {
		console.log(id, typeof id);
		console.log(numero, typeof numero);
		const resultado = await actions.cambiarPet(age, weight, height, petID);
		setAge("");
		setWeight("");
		setHeight("");
		if (resultado) {
			history.push("/usuario");
		} else {
			setError(true);
		}
	};

	return (
		<div className="container">
			{error && <Alert variant="danger">Hubo un error</Alert>}
			<form className="form-format">
				<h1>Datos de la Mascota</h1>
				<hr className="style2" />

				<div className="form-group">
					<label htmlFor="formGroupInput">Edad (años)</label>
					<input type="text" className="form-control" value={age} onChange={ageHandler} />
				</div>
				<div className="form-group">
					<label htmlFor="formGroupInput">Peso (kg)</label>
					<input type="text" className="form-control" value={weight} onChange={weightHandler} />
				</div>
				<div className="form-group">
					<label htmlFor="formGroupInput">Altura (cm)</label>
					<input type="text" className="form-control" value={height} onChange={heightHandler} />
				</div>
			</form>
			<button
				className="btn btn-success ml-5"
				onClick={e => cambiarPet(age, weight, height, store.mascotas[numero].id)}>
				Editar Mascota
			</button>
		</div>
	);
}
