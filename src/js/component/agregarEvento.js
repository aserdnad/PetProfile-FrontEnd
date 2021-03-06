import React, { useState, useContext } from "react";
import Modal from "react-modal";
import Datetime from "react-datetime";
import { Button } from "react-bootstrap";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export const AgregarEvento = ({ isOpen, onClose, onEventAdded }) => {
	const [title, setTitle] = useState("");
	const [start, setStart] = useState(new Date());
	const [end, setEnd] = useState(new Date());
	const { store, actions } = useContext(Context);

	const onSubmit = event => {
		event.preventDefault();
		actions.cambiarVacunas(title, start);
		onEventAdded({
			title,
			start,
			end
		});
		onClose();
	};

	return (
		<Modal isOpen={isOpen} onRequestClose={onClose}>
			<form onSubmit={onSubmit}>
				<input placeholder="Nombre" value={title} onChange={e => setTitle(e.target.value)} />
				<div>
					<label>Fecha de inicio</label>
					<Datetime value={start} onChange={date => setStart(date)} />
				</div>
				<div>
					<label>Fecha final</label>
					<Datetime value={end} onChange={date => setEnd(date)} />
				</div>

				<Button variant="primary" type="submit" className="ml-4 mt-5">
					Agregar evento
				</Button>
			</form>
		</Modal>
	);
};

AgregarEvento.propTypes = {
	isOpen: PropTypes.any,
	onClose: PropTypes.any,
	onEventAdded: PropTypes.any
};
