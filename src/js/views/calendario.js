import React from "react";
import "../../styles/home.scss";
// import { Row, Col, Jumbotron, Button, Card, Form } from "react-bootstrap";
import Modal from "react-modal";
import { Calendar } from "../component/calendar";
import "react-datetime/css/react-datetime.css";

Modal.setAppElement("#app");

export const Calendario = () => {
	return <Calendar />;
};
