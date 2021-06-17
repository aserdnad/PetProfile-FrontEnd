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
	const [Password, setPassword] = useState("");

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

	function passwordHandler(event) {
		setPassword(event.target.value);
	}

	const handlerSubmit = async event => {
		try {
			event.preventDefault();
			event.stopPropagation();

			let resp = await fetch("https://3000-sapphire-crow-ozz6zm0k.ws-us08.gitpod.io/sign-up", {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					/* Homologacion de los nombres de los estados en frontend con los nombres de las variables en backend */
					user_name: UserName,
					name: Name,
					last_name: Apellido,
					phone: Contacto,
					birthday: FechaNacimiento,
					country: Pais,
					city: Ciudad,
					email: Email,
					password: Password
				})
			});
			let data = await resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
			if (resp.ok) {
				console.log(resp.ok); // will be true if the response is successfull
				console.log(resp.status); // the status code = 200 or code = 400 etc.
				/*console.log(resp.text()); // will try return the exact result as string			//here is were your code should start after the fetch finishes */
				console.log(data); //this will print on the console the exact object received from the server
			} else {
				console.log(resp.status); // the status code = 200 or code = 400 etc.
				console.log(data); //this will print on the console the exact object received from the server
			}
		} catch (error) {
			//error handling
			console.log(error);
		}
	};

	return (
		<form className="form-format">
			<h1>Datos personales</h1>
			<hr className="style2" />
			<div className="form-group">
				<label htmlFor="formGroupExampleInput">Usuario</label>
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
				<label htmlFor="formGroupExampleInput">Teléfono de Contacto</label>
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
				<label htmlFor="exampleInputEmail1">Correo Electrónico</label>
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
				<label htmlFor="exampleInputPassword1">Contraseña</label>

				<input
					type="password"
					className="form-control"
					id="exampleInputPassword1"
					placeholder="Contraseña"
					onChange={passwordHandler}
				/>
			</div>
			<div className="form-group">
				<label htmlFor="exampleInputPassword1">Repetir Contraseña</label>

				<input type="password" className="form-control" id="exampleInputPassword1" placeholder="Contraseña" />
			</div>
			<button type="submit" className="btn btn-success" onClick={handlerSubmit}>
				Registrarse
			</button>
		</form>
	);
}
