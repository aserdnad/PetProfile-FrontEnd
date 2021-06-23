import React from "react";
import { useState } from "react";
import "../../styles/HistorialMedico.scss";
import Dropzone from "react-dropzone";
import { MyDropzone } from "../component/dropzone";

export function HistorialMedico() {
	const [file, setFile] = useState("");
	const [fileToUpload, setFileToUpload] = useState("");
	const [cargando, setCargando] = useState(false);

	const handleUpload = async e => {};

	return (
		<div className="container">
			<h1>Historial medico de tus mascotas</h1>
			<h2>Por favor elegir el animal</h2>
			<div className="dropdown">
				<button
					className="btn btn-secondary dropdown-toggle"
					type="button"
					id="dropdownMenuButton"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false">
					Por favor seleccionar mascota
				</button>

				<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
					<a className="dropdown-item" href="#">
						Action
					</a>
					<a className="dropdown-item" href="#">
						Another action
					</a>
					<a className="dropdown-item" href="#">
						Something else here
					</a>
				</div>
			</div>

			<MyDropzone />
		</div>
	);
}
