import React, { useState, useRef, useContext } from "react";

import "../../styles/HistorialMedico.scss";
import { MyDropzone } from "../component/dropzone";
import { Context } from "../store/appContext";
import { Dropdown } from "react-bootstrap";

export function HistorialMedico() {
	const { store } = useContext(Context);

	const [petSelected, setPetSelected] = useState({});

	function getPets(e) {
		userName = store.usuario;

		setPetSelected(e.target.value);

		try {
			if (petSelected == {}) {
				return null;
			} else {
				data = fetch(`https://api.cloudinary.com/v1_1/${userName}/${petSelected}>`);
			}
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<div className="container">
			<h1>Historial medico de tus mascotas</h1>
			<h2>Por favor elegir a tu mascota</h2>

			<Dropdown>
				<Dropdown.Toggle variant="success" id="dropdown-basic">
					Selecciona una mascota
				</Dropdown.Toggle>

				<Dropdown.Menu>
					{store.mascotas.length > 0 &&
						store.mascotas.map((mascota, index) => {
							return (
								<Dropdown.Item onClick={getPets} key={index}>
									{mascota}
								</Dropdown.Item>
							);
						})}
				</Dropdown.Menu>
			</Dropdown>

			<MyDropzone />
		</div>
	);
}
