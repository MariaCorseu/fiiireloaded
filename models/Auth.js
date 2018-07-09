class User {
	constructor() {
		this.username = "";
		this.password = "";
	}
//login
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
			success:(response)=>{
				console.log("Logout message is : ",response);
			},
			error:(xhr)=>{
				console.log("Error message : ",xhr);
			}
		});

	}

//register
	registerData (data) {
		return $.ajax ("https://ancient-caverns-16784.herokuapp.com/auth/register", {
			method:"POST",
			data:data,
			success:(response) => {
				console.log(response);
				alert("Registration completed successfully");
			},
			error:(xhr) => {
				console.log("Error", xhr);
				alert("Username already existing");
			}
		})
	}


};

