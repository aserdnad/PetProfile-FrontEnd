import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Form } from "react-bootstrap";

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
	const handlerSubmit = async e => {
		try {
			e.preventDefault();
			e.stopPropagation();
			let resp = await fetch(`https://3000-magenta-penguin-zgcydz94.ws-us08.gitpod.io/pet`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				// email y fecha de nacimiento - prueba aislada
				body: JSON.stringify({
					email: "videzere@gmail.com",
					name,
					species,
					race,
					gender,
					birthday: "28072010",
					age,
					weight,
					height
				})
			});
			let data = await resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
			if (resp.ok) {
				alert("Usted ha registrado a su mascota exitosamente");
				console.log(resp.ok); // will be true if the response is successfull
				console.log(resp.status); // the status code = 200 or code = 400 etc.
				// console.log(resp.text()); // will try return the exact result as string			//here is were your code should start after the fetch finishes
				console.log(data); //this will print on the console the exact object received from the server
				history.push("/persona");
			} else {
				alert("Parece que hubo un error. Intente de nuevo");
				console.log(resp.status); // the status code = 200 or code = 400 etc.
				console.log(data); //this will print on the console the exact object received from the server
			}
		} catch (error) {
			alert("Parece que hubo un error. Intente de nuevo");
			//error handling
			console.log(error);
		}
	};
	return (
		<form className="form-format">
			<h1>Datos de la Mascota</h1>
			<hr className="style2" />
			<div className="form-group">
				<label htmlFor="formGroupInput">Nombre</label>
				<input type="text" className="form-control" id="formGroupInput" placeholder="" onChange={nameHandler} />
			</div>
			<div className="form-group">
				<label htmlFor="formGroupInput">Especie</label>
				<input
					type="text"
					className="form-control"
					id="formGroupInput"
					placeholder=""
					onChange={speciesHandler}
				/>
			</div>
			<div className="form-group">
				<label htmlFor="formGroupInput">Raza</label>
				<input type="text" className="form-control" id="formGroupInput" placeholder="" onChange={raceHandler} />
			</div>
			<div className="form-group">
				<label htmlFor="formGroupInput">Sexo</label>
				<input
					type="text"
					className="form-control"
					id="formGroupInput"
					placeholder=""
					onChange={genderHandler}
				/>
			</div>
			<div className="form-group">
				<label htmlFor="formGroupInput">Fecha de Nacimiento</label>
				<input
					type="date"
					className="form-control"
					id="formGroupInput"
					placeholder=""
					onChange={birthdayHandler}
				/>
			</div>
			<div className="form-group">
				<label htmlFor="formGroupInput">Edad (años)</label>
				<input type="text" className="form-control" id="formGroupInput" placeholder="" onChange={ageHandler} />
			</div>
			<div className="form-group">
				<label htmlFor="formGroupInput">Peso (cm)</label>
				<input
					type="text"
					className="form-control"
					id="formGroupInput"
					placeholder=""
					onChange={weightHandler}
				/>
			</div>
			<div className="form-group">
				<label htmlFor="formGroupInput">Altura (cm)</label>
				<input
					type="text"
					className="form-control"
					id="formGroupInput"
					placeholder=""
					onChange={heightHandler}
				/>
			</div>
			<button type="submit" className="btn btn-success" onClick={handlerSubmit}>
				Agregar Mascota
			</button>
		</form>
	);
}
