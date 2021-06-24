import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Alert } from "react-bootstrap";
import { useHistory } from "react-router-dom";

export function EditarPerfil() {
	const { store, actions } = useContext(Context);
	const [contacto, setContacto] = useState(store.usuario.phone);
	const [pais, setPais] = useState(store.usuario.country);
	const [ciudad, setCiudad] = useState(store.usuario.city);
	const [email, setEmail] = useState(store.usuario.email);
	const [error, setError] = useState(false);
	const history = useHistory();
	const id = store.usuario.id;

	function contactoHandler(event) {
		setContacto(event.target.value);
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

	const cambiarInfo = async (contacto, pais, ciudad, email, id) => {
		const resultado = await actions.cambiarInfo(contacto, pais, ciudad, email, id, store.token);
		setContacto("");
		setPais("");
		setCiudad("");
		setEmail("");
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
					<label htmlFor="formGroupExampleInput">Teléfono de Contacto</label>
					<input type="text" className="form-control" value={contacto} onChange={contactoHandler} />
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
			</form>
			<button className="btn btn-success ml-5" onClick={e => cambiarInfo(contacto, pais, ciudad, email, id)}>
				Cambiar informacion
			</button>
		</div>
	);
}
