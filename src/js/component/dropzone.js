import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

export function MyDropzone() {
	const onDrop = useCallback(async acceptedFiles => {
		try {
			fetch(
				"https://3000-harlequin-barracuda-u46rzrk9.ws-eu08.gitpod.io/XXXXXXXXXX" /* Falta agregar el endpoint */,
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						token: store.usuario.token
					},
					body: {
						files: acceptedFiles
					}
				}
			);
		} catch (error) {
			print(error);
		}

		// Do something with the files
	}, []);
	const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

	return (
		<div id="uploadbox" {...getRootProps()}>
			<input {...getInputProps()} />
			{isDragActive ? (
				<h1>Asi mismo!!!! :) </h1>
			) : (
				<p>Arrastra tus archivos aqui, o dale click a seleccionar archivos</p>
			)}
		</div>
	);
}
