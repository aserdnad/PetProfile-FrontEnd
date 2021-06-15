import React from "react";
// import pets1 from "../../img/pets1.jpg";
import logo from "../../img/logo.png";
import "../../styles/home.scss";
import { Row, Col, Jumbotron, Button, Card, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

// export const Home = () => (
// 	<div className="text-center m-5 p-5">
// 		<p>
// 			<img src={pets1} />
// 		</p>
// 		<h1>Con Pet Profile,</h1>
// 		<h1>no te pierdas ni un solo momento de tu mastoca,</h1>
// 		<h1>¡Al alcance de un solo clic!</h1>
// 	</div>
// );

export const Home = () => {
	return (
		<Jumbotron>
			<Row>
				<Col className="text-center">
					<img className="w-25" src={logo} />
					<h1 className="mt-4">Pet Profile</h1>
					<p className="mt-2">Bienvenido a Pet Profile, el lugar donde podras</p>
					<p className="mt-2">organizar todos los datos de tu mascota!</p>
				</Col>
				<Col className="d-flex justify-content-center">
					<Card style={{ width: "18rem" }}>
						<Card.Body>
							<Form className="mt-3">
								<Form.Group className="mb-3" controlId="formBasicText">
									<Form.Label>Nombre de usuario</Form.Label>
									<Form.Control type="text" placeholder="Enter usuario" />
								</Form.Group>

								<Form.Group className="mb-3" controlId="formBasicPassword">
									<Form.Label>Contraseña</Form.Label>
									<Form.Control type="password" placeholder="Contraseña" />
								</Form.Group>
								<Row>
									<Button className="mx-auto" variant="primary" type="submit">
										{"¡Inicia Sesión!"}
									</Button>
								</Row>
								<Form.Text className="text-muted text-center mt-3">
									{"Que esperas para registrarte?"}
								</Form.Text>
								<Row>
									<Link to="/formperson" className="mx-auto">
										<Button className="mx-auto mt-4" variant="danger">
											{"¡Regístrate!"}
										</Button>
									</Link>
								</Row>
							</Form>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Jumbotron>
	);
};
