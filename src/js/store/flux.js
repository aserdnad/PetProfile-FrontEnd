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
			prueba: []
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
			mamalo: () => {
				console.log("mamalo");
			},
			login: async (usuario, contrasena) => {
				try {
					const response = await fetch("https://3000-harlequin-barracuda-u46rzrk9.ws-eu09.gitpod.io/log-in", {
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
					console.log(data);
				} catch (error) {
					console.log(error);
				}
			},
			signIn: async (userName, name, apellido, contacto, fechaNacimiento, pais, ciudad, email, password) => {
				try {
					let resp = await fetch("https://3000-harlequin-barracuda-u46rzrk9.ws-eu09.gitpod.io/sign-up", {
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
					}
				} catch (error) {
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
