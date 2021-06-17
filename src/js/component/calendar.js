import React, { useState, useRef } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { Button } from "react-bootstrap";
import { AgregarEvento } from "./agregarEvento";

export const Calendar = () => {
	const [modalOpen, setModalOpen] = useState(false);
	const calendarRef = useRef(null);

	const onEventAdded = event => {
		let calendarApi = calendarRef.current.getApi();
		calendarApi.addEvent(event);
	};

	return (
		<section className="container">
			<Button variant="primary" onClick={() => setModalOpen(true)}>
				Agregar evento
			</Button>
			<div style={{ position: "relative", zIndex: 0 }}>
				<FullCalendar ref={calendarRef} plugins={[dayGridPlugin]} initialView="dayGridMonth" />
			</div>

			<AgregarEvento
				isOpen={modalOpen}
				onClose={() => setModalOpen(false)}
				onEventAdded={event => onEventAdded(event)}
			/>
		</section>
	);
};
