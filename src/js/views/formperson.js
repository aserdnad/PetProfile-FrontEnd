import React from "react";

export function FormPerson() {
	return (
		<form className="form-format">
			<h1>Datos personales</h1>
			<hr className="style2" />
			<div className="form-group">
				<label HtmlFor="formGroupExampleInput">Username</label>
				<input type="text" className="form-control" id="formGroupExampleInput" placeholder="" />
			</div>
			<div className="form-group">
				<label HtmlFor="formGroupExampleInput">Nombre</label>
				<input type="text" className="form-control" id="formGroupExampleInput" placeholder="" />
			</div>
			<div className="form-group">
				<label HtmlFor="formGroupExampleInput">Apellido</label>
				<input type="text" className="form-control" id="formGroupExampleInput" placeholder="" />
			</div>
			<div className="form-group">
				<label HtmlFor="formGroupExampleInput">Número de contacto</label>
				<input type="text" className="form-control" id="formGroupExampleInput" placeholder="" />
			</div>
			<div className="form-group">
				<label HtmlFor="formGroupExampleInput">Cumpleaños</label>
				<input type="text" className="form-control" id="formGroupExampleInput" placeholder="" />
			</div>
			<div className="form-group">
				<label HtmlFor="formGroupExampleInput">País</label>
				<input type="text" className="form-control" id="formGroupExampleInput" placeholder="" />
			</div>
			<div className="form-group">
				<label HtmlFor="formGroupExampleInput">Ciudad</label>
				<input type="text" className="form-control" id="formGroupExampleInput" placeholder="" />
			</div>
			<div className="form-group">
				<label HtmlFor="formGroupExampleInput">Dirección</label>
				<input type="text" className="form-control" id="formGroupExampleInput" placeholder="" />
			</div>
			<h1>Datos de la cuenta</h1>
			<hr className="style2" />
			<div className="form-group">
				<label htmlFor="exampleInputEmail1">Correo electronico</label>
				<input
					type="email"
					className="form-control"
					id="exampleInputEmail1"
					aria-describedby="emailHelp"
					placeholder="Introduce correo electronico"
				/>
			</div>
			<div className="form-group">
				<label htmlFor="exampleInputPassword1">Password</label>

				<input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
			</div>
			<div className="form-group">
				<label htmlFor="exampleInputPassword1">Repetir contraseña</label>

				<input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
			</div>
			<button type="submit" className="btn btn-success">
				Registrarse
			</button>
		</form>
	);
}
