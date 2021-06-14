import axios from "axios";
import React from "react";
import { useState } from "react";

export function FormPerson() {
	const [UserName, setUserName] = useState("");
	const [Name, setName] = useState("");
	const [Apellido, setApellido] = useState("");
	const [Contacto, setContacto] = useState("");
	const [FechaNacimiento, setFechaNacimiento] = useState("");
	const [Pais, setPais] = useState("");
	const [Ciudad, setCiudad] = useState("");
	const [Direccion, setDireccion] = useState("");
	const [Email, setEmail] = useState("");

	function UserNameHandler(event) {
		setUserName(event.target.value);
	}

	function NameHandler(event) {
		setName(event.target.value);
	}

	function ApellidoHandler(event) {
		setApellido(event.target.value);
	}

	function ApellidoHandler(event) {
		setApellido(event.target.value);
	}

	function ContactoHandler(event) {
		setContacto(event.target.value);
	}

	function FechaNacimientoHandler(event) {
		setFechaNacimiento(event.target.value);
	}

	function PaisHandler(event) {
		setPais(event.target.value);
	}

	function CiudadHandler(event) {
		setCiudad(event.target.value);
	}

	function DireccionHandler(event) {
		setDireccion(event.target.value);
	}

	function EmailHandler(event) {
		setEmail(event.target.value);
	}

	function handlerSubmit(event) {
		const axios = require("axios");

		axios
			.post("http://localhost:3000/users", {
				id: 6,
				first_name: "Fred",
				last_name: "Blair",
				email: "freddyb34@gmail.com"
			})
			.then(resp => {
				console.log(resp.data);
			})
			.catch(error => {
				console.log(error);
			});
		/*
		axios.post("http://localhost:3000/users"),
			{
				UserName,
				Name,
				Apellido,
				Contacto,
				FechaNacimiento,
				Pais,
				Ciudad,
				Direccion,
				Email
			}.then(response => {
				if (response.ok) {
					console.log(response.data);
					console.log("Informacion enviada!");
				} else {
					console.log("Informacion NO enviada :(");
				}
		*	});*/
	}

	return (
		<form className="form-format">
			<h1>Datos personales</h1>
			<hr className="style2" />
			<div className="form-group">
				<label htmlFor="formGroupExampleInput">Username</label>
				<input
					type="text"
					className="form-control"
					id="formGroupExampleInput"
					placeholder=""
					onChange={UserNameHandler}
				/>
			</div>
			<div className="form-group">
				<label htmlFor="formGroupExampleInput">Nombre</label>
				<input
					type="text"
					className="form-control"
					id="formGroupExampleInput"
					placeholder=""
					onChange={NameHandler}
				/>
			</div>
			<div className="form-group">
				<label htmlFor="formGroupExampleInput">Apellido</label>
				<input
					type="text"
					className="form-control"
					id="formGroupExampleInput"
					placeholder=""
					onChange={ApellidoHandler}
				/>
			</div>
			<div className="form-group">
				<label htmlFor="formGroupExampleInput">Contacto</label>
				<input
					type="text"
					className="form-control"
					id="formGroupExampleInput"
					placeholder=""
					onChange={ContactoHandler}
				/>
			</div>
			<div className="form-group">
				<label htmlFor="formGroupExampleInput">Cumpleaños</label>
				<input
					type="date"
					className="form-control"
					id="formGroupExampleInput"
					placeholder=""
					onChange={FechaNacimientoHandler}
				/>
			</div>
			<div className="form-group">
				<label htmlFor="formGroupExampleInput">País</label>
				<input
					type="text"
					className="form-control"
					id="formGroupExampleInput"
					placeholder=""
					onChange={PaisHandler}
				/>
			</div>
			<div className="form-group">
				<label htmlFor="formGroupExampleInput">Ciudad</label>
				<input
					type="text"
					className="form-control"
					id="formGroupExampleInput"
					placeholder=""
					onChange={CiudadHandler}
				/>
			</div>
			<div className="form-group">
				<label htmlFor="formGroupExampleInput">Dirección</label>
				<input
					type="text"
					className="form-control"
					id="formGroupExampleInput"
					placeholder=""
					onChange={DireccionHandler}
				/>
			</div>
			<h1>Datos de la cuenta</h1>
			<hr className="style2" />
			<div className="form-group">
				<label htmlFor="exampleInputEmail1">Correo electronico</label>
				<input
					type="email"
					className="form-control"
					id="exampleInputEmail1"
					aria-describedby="emailHelp"
					placeholder="Introduce correo electronico"
					onChange={EmailHandler}
				/>
			</div>
			<div className="form-group">
				<label htmlFor="exampleInputPassword1">Password</label>

				<input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
			</div>
			<div className="form-group">
				<label htmlFor="exampleInputPassword1">Repetir contraseña</label>

				<input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
			</div>
			<button type="submit" className="btn btn-success" onClick={handlerSubmit}>
				Registrarse
			</button>
		</form>
	);
}
