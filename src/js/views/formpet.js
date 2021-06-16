import React from "react";
import { useState } from "react";
import { Form } from "react-bootstrap";

export function FormPet() {
	const [Name, setName] = useState("");
	const [Race, setRace] = useState("");
	const [Gender, setGender] = useState("");
	const [Birthday, setBirthday] = useState("");
	const [Age, setAge] = useState("");
	const [Species, setSpecies] = useState("");
	const [Weight, setWeight] = useState("");
	const [Height, setHeight] = useState("");

	function NameHandler(event) {
		setName(event.target.value);
	}
	function RaceHandler(event) {
		setRace(event.target.value);
	}
	function GenderHandler(event) {
		setGender(event.target.value);
	}
	function BirthdayHandler(event) {
		setBirthday(event.target.value);
	}
	function AgeHandler(event) {
		setAge(event.target.value);
	}
	function SpeciesHandler(event) {
		setSpecies(event.target.value);
	}
	function WeightHandler(event) {
		setWeight(event.target.value);
	}
	function HeightHandler(event) {
		setHeight(event.target.value);
	}
	function handlerSubmit(event) {}

	return (
		<Form className="form-format">
			<h1>Datos de la Mascota</h1>
			<hr className="style2" />
			<div className="form-group">
				<label htmlFor="formGroupInput">Nombre</label>
				<input type="text" className="form-control" id="formGroupInput" placeholder="" onChange={NameHandler} />
			</div>
			<div className="form-group">
				<label htmlFor="formGroupInput">Especie</label>
				<input
					type="text"
					className="form-control"
					id="formGroupInput"
					placeholder=""
					onChange={SpeciesHandler}
				/>
			</div>
			<div className="form-group">
				<label htmlFor="formGroupInput">Raza</label>
				<input type="text" className="form-control" id="formGroupInput" placeholder="" onChange={RaceHandler} />
			</div>
			<div className="form-group">
				<label htmlFor="formGroupInput">Sexo</label>
				<input
					type="text"
					className="form-control"
					id="formGroupInput"
					placeholder=""
					onChange={GenderHandler}
				/>
			</div>
			<div className="form-group">
				<label htmlFor="formGroupInput">Fecha de Nacimiento</label>
				<input
					type="date"
					className="form-control"
					id="formGroupInput"
					placeholder=""
					onChange={BirthdayHandler}
				/>
			</div>
			<div className="form-group">
				<label htmlFor="formGroupInput">Edad (años)</label>
				<input type="text" className="form-control" id="formGroupInput" placeholder="" onChange={AgeHandler} />
			</div>
			<div className="form-group">
				<label htmlFor="formGroupInput">Peso (cm)</label>
				<input
					type="text"
					className="form-control"
					id="formGroupInput"
					placeholder=""
					onChange={WeightHandler}
				/>
			</div>
			<div className="form-group">
				<label htmlFor="formGroupInput">Altura (cm)</label>
				<input
					type="text"
					className="form-control"
					id="formGroupInput"
					placeholder=""
					onChange={HeightHandler}
				/>
			</div>
			<button type="submit" className="btn btn-success" onClick={handlerSubmit}>
				Agregar Mascota
			</button>
		</Form>
	);
}
