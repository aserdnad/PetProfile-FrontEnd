import React, { useState, useRef, useContext } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { Button } from "react-bootstrap";
import { AgregarEvento } from "./agregarEvento";
import moment from "moment";
import { Context } from "../store/appContext";

export const Calendar = () => {
	const [modalOpen, setModalOpen] = useState(false);
	const calendarRef = useRef(null);
	const { store, actions } = useContext(Context);

	const onEventAdded = event => {
		let calendarApi = calendarRef.current.getApi();
		calendarApi.addEvent(event);
	};

	const handleEventAdd = data => {
		actions.agregarEvento(data);
	};

	// async function handleDatesSet(data) {
	// 	// const response = await axios.get("path/"+moment(data))
	// 	console.log("hola");
	// }

	return (
		<section className="container">
			<Button variant="primary" onClick={() => setModalOpen(true)}>
				Agregar evento
			</Button>
			<div style={{ position: "relative", zIndex: 0 }}>
				<FullCalendar
					ref={calendarRef}
					plugins={[dayGridPlugin]}
					initialView="dayGridMonth"
					events={store.vacunas}
				/>
			</div>

			<AgregarEvento
				isOpen={modalOpen}
				onClose={() => setModalOpen(false)}
				onEventAdded={event => onEventAdded(event)}
			/>
		</section>
	);
};
