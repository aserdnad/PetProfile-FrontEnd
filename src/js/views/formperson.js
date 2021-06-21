import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Alert } from "react-bootstrap";
import { useHistory } from "react-router-dom";
export function FormPerson() {
	const [userName, setUserName] = useState("");
	const [name, setName] = useState("");
	const [apellido, setApellido] = useState("");
	const [contacto, setContacto] = useState("");
	const [fechaNacimiento, setFechaNacimiento] = useState("");
	const [pais, setPais] = useState("");
	const [ciudad, setCiudad] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { actions } = useContext(Context);
	const [error, setError] = useState(false);
	const history = useHistory();

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

	function emailHandler(event) {
		setEmail(event.target.value);
	}

	function passwordHandler(event) {
		setPassword(event.target.value);
	}

	const signIn = async (e, userName, name, apellido, contacto, fechaNacimiento, pais, ciudad, email, password) => {
		const resultado = await actions.signIn(
			userName,
			name,
			apellido,
			contacto,
			fechaNacimiento,
			pais,
			ciudad,
			email,
			password
		);
		setUserName("");
		setName("");
		setApellido("");
		setContacto("");
		setFechaNacimiento("");
		setPais("");
		setCiudad("");
		setEmail("");
		setPassword("");
		console.log(resultado, "soy resultadoooooo");
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
				<h1>Datos personales</h1>
				<hr className="style2" />
				<div className="form-group">
					<label htmlFor="formGroupExampleInput">Usuario</label>
					<input type="text" className="form-control" value={userName} onChange={userNameHandler} />
				</div>
				<div className="form-group">
					<label htmlFor="formGroupExampleInput">Nombre</label>
					<input type="text" className="form-control" value={name} onChange={nameHandler} />
				</div>
				<div className="form-group">
					<label htmlFor="formGroupExampleInput">Apellido</label>
					<input type="text" className="form-control" value={apellido} onChange={apellidoHandler} />
				</div>
				<div className="form-group">
					<label htmlFor="formGroupExampleInput">Teléfono de Contacto</label>
					<input type="text" className="form-control" value={contacto} onChange={contactoHandler} />
				</div>
				<div className="form-group">
					<label htmlFor="formGroupExampleInput">Cumpleaños</label>
					<input
						type="date"
						className="form-control"
						value={fechaNacimiento}
						onChange={fechaNacimientoHandler}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="formGroupExampleInput">País</label>
					<input type="text" className="form-control" value={pais} onChange={paisHandler} />
				</div>
				<div className="form-group">
					<label htmlFor="formGroupExampleInput">Ciudad</label>
					<input type="text" className="form-control" value={ciudad} onChange={ciudadHandler} />
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
						value={email}
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
						value={password}
						placeholder="Contraseña"
						onChange={passwordHandler}
					/>
				</div>
			</form>
			<button
				className="btn btn-success ml-5"
				onClick={e =>
					signIn(e, userName, name, apellido, contacto, fechaNacimiento, pais, ciudad, email, password)
				}>
				Registrarse
			</button>
		</div>
	);
}
