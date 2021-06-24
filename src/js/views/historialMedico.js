import React, { useState, useRef, useContext } from "react";

import "../../styles/HistorialMedico.scss";
import { MyDropzone } from "../component/dropzone";
import { Context } from "../store/appContext";

export function HistorialMedico() {
	const [file, setFile] = useState("");
	const [fileToUpload, setFileToUpload] = useState("");
	const [cargando, setCargando] = useState(false);
	const { actions } = useContext(Context);

	const handleUpload = async e => {
		console.log(actions.petConseguir);
	};

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

				<div className="dropdown">
					<button
						className="btn btn-secondary dropdown-toggle"
						type="button"
						id="dropdownMenu2"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false">
						Dropdown
					</button>
					<div className="dropdown-menu" aria-labelledby="dropdownMenu2">
						<button className="dropdown-item" type="button">
							Action
						</button>
						<button className="dropdown-item" type="button">
							Another action
						</button>
						<button className="dropdown-item" type="button">
							Something else here
						</button>
					</div>
				</div>
			</div>
			<button onClick={handleUpload}> press me </button>;
			<MyDropzone />
		</div>
	);
}
