import React, { useState, useRef } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { Button } from "react-bootstrap";
import { AgregarEvento } from "./agregarEvento";
import moment from "moment";

export const Calendar = () => {
	const [modalOpen, setModalOpen] = useState(false);
	const [event, setEvent] = useState([]);
	const calendarRef = useRef(null);

	const onEventAdded = event => {
		let calendarApi = calendarRef.current.getApi();
		calendarApi.addEvent(event);
	};

	async function handleEventAdd(data) {
		let titulo = data.event.title;
		let comenzar = data.event.startStr;
		let terminar = data.event.endStr;
		try {
			const response = await fetch("https://3000-brown-sailfish-2on2xns7.ws-eu08.gitpod.io/calendar", {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					email: "prueba2@gmail.com",
					name: "djlkasljdsa",
					start: comenzar,
					end: terminar,
					title: titulo,
					user_id: 2,
					pet_id: 1
				})
			});
			const data = await response.json();
			console.log(data);
			if (response.ok) {
				console.log(response.ok);
				console.log(response.status);
				console.log(data);
			} else {
				console.log(data);
				console.log(response.ok);
				console.log(response.status);
			}
		} catch (error) {
			console.log(error);
		}
		// await axios.post("ruta",data.event);
	}

	async function handleDatesSet(data) {
		// const response = await axios.get("path/"+moment(data))
		console.log("hola");
	}

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
					eventAdd={event => handleEventAdd(event)}
					dateSet={date => handleDateSet(date)}
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
