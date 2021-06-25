const getState = ({ getStore, getActions, setStore }) => {
	// CAMBIEN ESTA VARIABLE PARA EL BACK SOLO ESTA!!!!!!
	// const urlAPI = "https://3000-brown-sailfish-2on2xns7.ws-eu09.gitpod.io";
	// URL Vicky
	const urlAPI = "https://3000-brown-sailfish-2on2xns7.ws-eu09.gitpod.io";
	return {
		store: {
			token: [],
			usuario: [],
			mascotas: [],
			vacunas: [
				{ title: "vacuna rabia", date: "2021-06-10" },
				{ title: "vacuna hepatitis", date: "2021-06-30" },
				{ title: "veterinario", date: "2021-07-10" },
				{ title: "hotel viaje", date: "2021-07-24" }
			],
			URL: urlAPI,
			publicPet: null
		},
		actions: {
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			cambiarVacunas: (title, start) => {
				const store = getStore();
				setStore({ vacunas: [...store.vacunas, { title: title, date: start }] });
			},
			logout: () => {
				const nada = [];
				setStore({ token: nada });
				setStore({ usuario: nada });
				setStore({ mascotas: nada });
			},
			login: async (usuario, contrasena) => {
				try {
					console.log(usuario, contrasena);
					const response = await fetch(`${urlAPI}/log-in`, {
						method: "POST",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify({
							email: usuario,
							password: contrasena
						})
					});
					const data = await response.json();
					if (response.ok) {
						setStore({ token: data.token });
						setStore({ usuario: data.user });
						console.log(data);
						const tienda = getActions();
						const store = getStore();
						tienda.petConseguir(store.usuario.user_name);
						return true;
					} else {
						console.log(data);
						return false;
					}
				} catch (error) {
					console.log(error);
				}
			},
			signIn: async (userName, name, apellido, contacto, fechaNacimiento, pais, ciudad, email, password) => {
				try {
					let resp = await fetch(`${urlAPI}/sign-up`, {
						method: "POST",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify({
							user_name: userName,
							name: name,
							last_name: apellido,
							phone: contacto,
							birthday: fechaNacimiento,
							country: pais,
							city: ciudad,
							email: email,
							password: password
						})
					});
					let data = await resp.json();
					if (resp.ok) {
						const tienda = getActions();
						console.log(data);
						tienda.login(email, password);
						return tienda;
					}
				} catch (error) {
					console.log(error);
				}
			},
			cambiarInfo: async (contacto, pais, ciudad, email, id, token) => {
				try {
					let resp = await fetch(`${urlAPI}/user/${id}`, {
						method: "PUT",
						headers: {
							"Content-Type": "application/json",
							Authorization: `Bearer ${token}`
						},
						body: JSON.stringify({
							phone: contacto,
							country: pais,
							city: ciudad,
							email: email
						})
					});
					let data = await resp.json();
					if (resp.ok) {
						const tienda = getActions();
						console.log(data);
						const store = getStore();
						setStore({ usuario: data });
						return true;
					}
				} catch (error) {
					console.log(error);
				}
			},
			petAgregar: async (name, species, race, gender, birthday, age, weight, height) => {
				const store = getStore();
				try {
					let resp = await fetch(`${urlAPI}/pet`, {
						method: "POST",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify({
							email: store.usuario.email,
							name: name,
							race: race,
							gender: gender,
							age: age,
							species: species,
							weight: weight,
							height: height,
							birthday: birthday
						})
					});
					let data = await resp.json();
					if (resp.ok) {
						console.log(data);
						setStore({ mascotas: [...store.mascotas, data] });
						return true;
					} else {
						console.log(resp.status);
						console.log(data);
						return false;
					}
				} catch (error) {
					console.log(error);
					return false;
				}
			},
			petConseguir: async usuario => {
				const store = getStore();
				try {
					let resp = await fetch(`${urlAPI}/pet/${usuario}`);
					let data = await resp.json();
					if (resp.ok) {
						setStore({ mascotas: [...store.mascotas, ...data] });
					} else {
						console.log(data);
					}
				} catch (error) {
					console.log(error);
				}
			},
			agregarEvento: async data => {
				console.log(data, "soy yo manito");
				const store = getStore();
				let titulo = data.event.title;
				let comenzar = data.event.startStr;
				let terminar = data.event.endStr;
				try {
					const response = await fetch(`${urlAPI}/calendar`, {
						method: "POST",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify({
							email: store.usuario.email,
							name: store.mascotas[0].name,
							start: comenzar,
							end: terminar,
							title: titulo,
							user_id: store.usuario.id,
							pet_id: store.mascotas[0].id
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
			},
			conseguirEliminado: async usuario => {
				const store = getStore();
				try {
					let resp = await fetch(`${urlAPI}/pet/${usuario}`);
					let data = await resp.json();
					if (resp.ok) {
						setStore({ mascotas: [...data] });
					} else {
						console.log(data);
					}
				} catch (error) {
					console.log(error);
				}
			},
			eliminarPet: async petID => {
				try {
					let resp = await fetch(`${urlAPI}/pet/${petID}`, {
						method: "DELETE"
					});
					let data = await resp.json();
					if (resp.ok) {
						const tienda = getActions();
						const store = getStore();
						tienda.conseguirEliminado(store.usuario.user_name);
					} else {
						console.log(data);
					}
				} catch (error) {
					console.log(error);
				}
			},
			cambiarPet: async (age, weight, height, petID) => {
				try {
					let resp = await fetch(`${urlAPI}/pet/${petID}`, {
						method: "PUT",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify({
							age: age,
							weight: weight,
							height: height
						})
					});
					const data = await resp.json();
					if (resp.ok) {
						const tienda = getActions();
						const store = getStore();
						tienda.conseguirEliminado(store.usuario.user_name);
						return true;
					} else {
						console.log(data);
					}
				} catch (error) {
					console.log(error);
				}
			},
			getPublicPet: async petID => {
				try {
					const response = await fetch(`${urlAPI}/pet/${petID}`);
					const pet = await response.json();
					if (response.ok) {
						setStore({
							publicPet: pet
						});
					} else {
						throw new Error(pet);
					}
				} catch (error) {
					console.log(error);
				}
			}
		}
	};
};

export default getState;
