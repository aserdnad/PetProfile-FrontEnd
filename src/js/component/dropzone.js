import React, { useCallback, useContext } from "react";
import { Form } from "react-bootstrap";
import context from "react-bootstrap/esm/AccordionContext";
import { useDropzone } from "react-dropzone";
import { Context } from "../store/appContext";

export function MyDropzone(prop) {
	const { store, actions } = useContext(Context);

	const userName = "";

	const onDrop = useCallback(async () => {
		for (let file of acceptedFiles) {
			try {
				fetch(`${store.url}/history/${store.usuario.user_name}/${petName}`, {
					method: "POST",
					headers: {
						"Content-Type": "multipart/form-data"
					},
					body: {
						files: acceptedFiles
					}
				});
			} catch (error) {
				console.log(error);
			}
		}

		// Do something with the files
	}, []);
	const { acceptedFiles, getRootProps, getInputProps, isDragActive } = useDropzone();

	return (
		<>
			<div id="uploadbox" {...getRootProps()}>
				<input {...getInputProps()} />
				{isDragActive ? (
					<h1 id="uploadtext">Asi mismo!!!! :) </h1>
				) : (
					<h1 id="uploadtext">Arrastra tus archivos aqui, o dale click a seleccionar archivos</h1>
				)}
			</div>
			<buttom onClick={onDrop}>Enviar!</buttom>
		</>
	);
}
