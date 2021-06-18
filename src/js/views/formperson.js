import React from "react";
import { useState } from "react";

export function FormPerson() {
	const [userName, setUserName] = useState("");
	const [name, setName] = useState("");
	const [apellido, setApellido] = useState("");
	const [contacto, setContacto] = useState("");
	const [fechaNacimiento, setFechaNacimiento] = useState("");
	const [pais, setPais] = useState("");
	const [ciudad, setCiudad] = useState("");
	const [direccion, setDireccion] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	function userNameHandler(event) {
		setUserName(event.target.value);
	}

	function nameHandler(event) {
		setName(event.target.value);
	}

	function apellidoHandler(event) {
		setApellido(event.target.value);
	}

	function contactoHandler(event) {
		setContacto(event.target.value);
	}

	function fechaNacimientoHandler(event) {
		setFechaNacimiento(event.target.value);
	}

	function paisHandler(event) {
		setPais(event.target.value);
	}

	function ciudadHandler(event) {
		setCiudad(event.target.value);
	}

	function direccionHandler(event) {
		setDireccion(event.target.value);
	}

	function emailHandler(event) {
		setEmail(event.target.value);
	}

	function passwordHandler(event) {
		setPassword(event.target.value);
	}

	const handlerSubmit = async event => {
		try {
			event.preventDefault();
			event.stopPropagation();

			let resp = await fetch("https://3000-amaranth-narwhal-ssj0vb1f.ws-us09.gitpod.io/sign-up", {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					/* Homologacion de los nombres de los estados en frontend con los nombres de las variables en backend */
					user_name: userName,
					name: name,
					last_name: apellido,
					phone: contacto,
					birthday: fechaNacimiento,
					country: pais,
					city: ciudad,
					email: email,
					password: password
				})
			});
			let data = await resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results

			if (resp.ok) {
				alert("Usted se ha registrado exitosamente");
				console.log(resp.ok); // will be true if the response is successfull
				console.log(resp.status); // the status code = 200 or code = 400 etc.
				/*console.log(resp.text()); // will try return the exact result as string			//here is were your code should start after the fetch finishes */

				console.log(data); //this will print on the console the exact object received from the server
			} else {
				alert("uy! Parece que hubo un error. Mejor le preguntamos a Ernesto ");
				console.log(resp.status); // the status code = 200 or code = 400 etc.
				console.log(data); //this will print on the console the exact object received from the server
			}
		} catch (error) {
			//error handling
			alert("uy! Parece que hubo un error. Mejor le preguntamos a Ernesto ");
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
					onChange={userNameHandler}
				/>
			</div>
			<div className="form-group">
				<label htmlFor="formGroupExampleInput">Nombre</label>
				<input
					type="text"
					className="form-control"
					id="formGroupExampleInput"
					placeholder=""
					onChange={nameHandler}
				/>
			</div>
			<div className="form-group">
				<label htmlFor="formGroupExampleInput">Apellido</label>
				<input
					type="text"
					className="form-control"
					id="formGroupExampleInput"
					placeholder=""
					onChange={apellidoHandler}
				/>
			</div>
			<div className="form-group">
				<label htmlFor="formGroupExampleInput">Teléfono de Contacto</label>
				<input
					type="text"
					className="form-control"
					id="formGroupExampleInput"
					placeholder=""
					onChange={contactoHandler}
				/>
			</div>
			<div className="form-group">
				<label htmlFor="formGroupExampleInput">Cumpleaños</label>
				<input
					type="date"
					className="form-control"
					id="formGroupExampleInput"
					placeholder=""
					onChange={fechaNacimientoHandler}
				/>
			</div>
			<div className="form-group">
				<label htmlFor="formGroupExampleInput">País</label>
				<input
					type="text"
					className="form-control"
					id="formGroupExampleInput"
					placeholder=""
					onChange={paisHandler}
				/>
			</div>
			<div className="form-group">
				<label htmlFor="formGroupExampleInput">Ciudad</label>
				<input
					type="text"
					className="form-control"
					id="formGroupExampleInput"
					placeholder=""
					onChange={ciudadHandler}
				/>
			</div>
			<div className="form-group">
				<label htmlFor="formGroupExampleInput">Dirección</label>
				<input
					type="text"
					className="form-control"
					id="formGroupExampleInput"
					placeholder=""
					onChange={direccionHandler}
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
					onChange={emailHandler}
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
