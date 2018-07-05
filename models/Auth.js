class User {
	constructor(data) {
		this.username = data.username;
		this.password = data.password;
	}

	sendLoginData (data) {
		return $.ajax("https://ancient-caverns-16784.herokuapp.com/auth/login", {
			method:"POST",
			data: data,
			success:(response) => {
				//console.log(response);
			},
			error:(xhr) => {
				alert("Login failed!");
				console.log("Error", xhr);
			},
		});
	};
};

