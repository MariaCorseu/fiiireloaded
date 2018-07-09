class User {
	constructor() {
		this.username = "";
		this.password = "";
	}

	sendLoginData (data) {
		return $.ajax("https://ancient-caverns-16784.herokuapp.com/auth/login", {
			method:"POST",
			data: data,
			success:(response) => {
				//console.log(response);
			},
			error:(xhr) => {
				alert("Invalid username or password.");
				console.log("Error", xhr);
			},
		});
	};

//logout method

	SendLogoutData(){
		return $.ajax("https://ancient-caverns-16784.herokuapp.com/auth/logout",{
			method:"GET",
			headers:{'X-Auth-Token':localStorage.getItem('loginToken')},
			success:(response)=>{
				console.log("Logout message is : ",response);
			},
			error:(xhr)=>{
				console.log("Error message : ",xhr);
			}
		});

	}

};

