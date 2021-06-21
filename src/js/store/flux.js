const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			token: [],
			usuario: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			login: async (usuario, contrasena) => {
				try {
					const response = await fetch("https://3000-silver-boar-w4f6bwgo.ws-us08.gitpod.io/log-in", {
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
					let resp = await fetch("https://3000-silver-boar-w4f6bwgo.ws-us08.gitpod.io/sign-up", {
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
			petAgregar: async (name, species, race, gender, birthday, age, weight, height) => {
				const store = getStore();
				try {
					let resp = await fetch(`https://3000-silver-boar-w4f6bwgo.ws-us08.gitpod.io/pet`, {
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
						alert("Usted ha registrado a su mascota exitosamente");
						console.log(resp.ok);
						console.log(resp.status);
					} else {
						alert("ELSEEEE");
						console.log(resp.status);
						console.log(data);
					}
				} catch (error) {
					alert("CATHCHCHHC");
					console.log(error);
				}
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
