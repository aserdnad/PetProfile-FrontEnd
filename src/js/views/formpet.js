import React from "react";
import { useState } from "react";
import { Form } from "react-bootstrap";

export function FormPet() {
	const [Name, setName] = useState("");
	const [Species, setSpecies] = useState("");
	const [Race, setRace] = useState("");
	const [Gender, setGender] = useState("");
	const [Birthday, setBirthday] = useState("");
	const [Age, setAge] = useState("");
	const [Weight, setWeight] = useState("");
	const [Height, setHeight] = useState("");

	function NameHandler(event) {
		setName(event.target.value);
	}
	function SpeciesHandler(event) {
		setSpecies(event.target.value);
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
	function WeightHandler(event) {
		setWeight(event.target.value);
	}
	function HeightHandler(event) {
		setHeight(event.target.value);
	}
	function handlerSubmit(event) {}
	// function handlerSubmit(event) = async () => {
	//     try {
	//         let resp = await fetch(
	//             `https://gitpod.io/#https://github.com/aserdnad/PetProfile-BackEnd`,
	//             {
	//                 method: "POST",
	//                 headers: {
	//                     "Content-Type": "application/json"
	//                 },
	//                 body: JSON.stringify([
	//                     Name,
	//                     Species,
	//                     Race,
	//                     Gender,
	//                     Birthday,
	//                     Age,
	//                     Weight,
	//                     Height
	//                 ])
	//             }
	//         );
	//             let data = await resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
	//             if (resp.ok) {
	//                 console.log(resp.ok); // will be true if the response is successfull
	//                 console.log(resp.status); // the status code = 200 or code = 400 etc.
	//                 console.log(resp.text()); // will try return the exact result as string			//here is were your code should start after the fetch finishes
	//                 console.log(data); //this will print on the console the exact object received from the server
	//             } else {
	//                 console.log(resp.status); // the status code = 200 or code = 400 etc.
	//                 console.log(data); //this will print on the console the exact object received from the server
	//             }
	//         } catch (error) {
	//             //error handling
	//             console.log(error);
	//         }
	//     };
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
