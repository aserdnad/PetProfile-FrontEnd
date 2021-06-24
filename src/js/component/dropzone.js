import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { store } from "../store/appContext";

export function MyDropzone(prop) {
	let userName = "store.usuario";

	const onDrop = useCallback(async acceptedFiles => {
		try {
			fetch(`https://3000-magenta-penguin-zgcydz94.ws-us08.gitpod.io/history/${userName}/${petName}`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: {
					files: acceptedFiles
				}
			});
		} catch (error) {
			console.log(error);
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
