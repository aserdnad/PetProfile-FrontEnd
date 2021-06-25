import React, { useCallback, useContext, useState } from "react";
import { Form } from "react-bootstrap";
import context from "react-bootstrap/esm/AccordionContext";
import { useDropzone } from "react-dropzone";
import { Context } from "../store/appContext";

export function MyDropzone() {
	const [fileExist, setfileExist] = useState(false);
	const onDrop = useCallback(acceptedFiles => {
		setfileExist(true);

		// Do something with the files
	}, []);
	const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

	function showConditions() {
		if (fileExist == true) {
			return (
				<>
					<img
						id="fotos"
						src={require("../../img/historialmedico1.png")} // Se debe poenr ruta relativa
					/>
					<img
						id="fotos"
						src={require("../../img/historialmedico2.png")} // Se debe poenr ruta relativa
					/>
				</>
			);
		} else
			return (
				<>
					<div id="uploadbox" {...getRootProps()}>
						<input {...getInputProps()} />
						{isDragActive ? (
							<h1 id="uploadtext">Asi mismo!!!! </h1>
						) : (
							<h1 id="uploadtext">Arrastra tus archivos aqui, o dale click a seleccionar archivos</h1>
						)}
					</div>
				</>
			);
	}

	return showConditions();
}
