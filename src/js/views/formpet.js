import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { Form } from "react-bootstrap";
import { Context } from "../store/appContext";

export function FormPet() {
	const history = useHistory();

	const [name, setName] = useState("");
	const [species, setSpecies] = useState("");
	const [race, setRace] = useState("");
	const [gender, setGender] = useState("");
	const [birthday, setBirthday] = useState("");
	const [age, setAge] = useState("");
	const [weight, setWeight] = useState("");
	const [height, setHeight] = useState("");
	const { actions } = useContext(Context);

	function nameHandler(event) {
		setName(event.target.value);
	}
	function speciesHandler(event) {
		setSpecies(event.target.value);
	}
	function raceHandler(event) {
		setRace(event.target.value);
	}
	function genderHandler(event) {
		setGender(event.target.value);
	}
	function birthdayHandler(event) {
		setBirthday(event.target.value);
	}
	function ageHandler(event) {
		setAge(event.target.value);
	}
	function weightHandler(event) {
		setWeight(event.target.value);
	}
	function heightHandler(event) {
		setHeight(event.target.value);
	}
	const petAgregar = async (name, species, race, gender, birthday, age, weight, height) => {
		const resultado = await actions.petAgregar(name, species, race, gender, birthday, age, weight, height);
		setName("");
		setSpecies("");
		setRace("");
		setGender("");
		setBirthday("");
		setAge("");
		setWeight("");
		setHeight("");
	};

	return (
		<div className="container">
			<form className="form-format">
				<h1>Datos de la Mascota</h1>
				<hr className="style2" />
				<div className="form-group">
					<label htmlFor="formGroupInput">Nombre</label>
					<input type="text" className="form-control" value={name} onChange={nameHandler} />
				</div>
				<div className="form-group">
					<label htmlFor="formGroupInput">Especie</label>
					<input type="text" className="form-control" value={species} onChange={speciesHandler} />
				</div>
				<div className="form-group">
					<label htmlFor="formGroupInput">Raza</label>
					<input type="text" className="form-control" value={race} onChange={raceHandler} />
				</div>
				<div className="form-group">
					<label htmlFor="formGroupInput">Sexo</label>
					<input type="text" className="form-control" value={gender} onChange={genderHandler} />
				</div>
				<div className="form-group">
					<label htmlFor="formGroupInput">Fecha de Nacimiento</label>
					<input type="date" className="form-control" value={birthday} onChange={birthdayHandler} />
				</div>
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
				onClick={e => petAgregar(name, species, race, gender, birthday, age, weight, height)}>
				Agregar Mascota
			</button>
		</div>
	);
}
