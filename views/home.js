window.onload=Onloaded;



function Onloaded(){
	const logoutUser=new User();
	logoutUser.SendLogoutData()
	.then(logoutUsers)
	.catch(logoutError);


	function logoutUsers(){
		const logoutButton=document.getElementById('logout-button');
	}

	const viewData=new Movies();
	viewData.getMovies()
	.then(createMovieList)
	.catch(CreateMovieListError);



function createMovieList(){
	console.log(viewData.itemList);
	const containElements=document.getElementById("container");
	
		for(let i=0;i<viewData.itemList.length;i++){
			const divElements=document.createElement('div');
			divElements.classList.add('item');
			containElements.appendChild(divElements);
			containElements.firstChild.classList.add('active');

			const item=viewData.itemList[i];


			const title=document.createElement("a");
			title.setAttribute('href','file:///C:/final-project/fiiireloaded/pages/movieDetails.html?movieId='+item._id);
			title.setAttribute('target','blank');
			title.innerHTML=item.Title+'<br>';

			const picture=document.createElement('img');
			picture.setAttribute('src',item.Poster);
			picture.setAttribute('alt','404');
			picture.setAttribute('width','200px');
			picture.classList.add('img-size');

			const genre=document.createElement('p');
			genre.innerHTML=item.Genre;

			const runtime=document.createElement('p');
			runtime.innerHTML=item.Runtime;

			const type=document.createElement('p');
			type.innerHTML=item.Type;

			const year=document.createElement('p');
			year.innerHTML=item.Year;

			const country=document.createElement('p');
			country.innerHTML=item.Country;

			const button=document.createElement('button');
			button.setAttribute('data-id',item._id);
			button.innerText="Delete";

			divElements.appendChild(picture);
			divElements.appendChild(title);
			divElements.appendChild(country);
			divElements.appendChild(genre);
			divElements.appendChild(type);
			divElements.appendChild(year);
			divElements.appendChild(runtime);
			divElements.appendChild(button);


		}

	}
	
	const loginButton = document.querySelector("[name='login']");
	loginButton.addEventListener("click", (event) => {
		event.preventDefault();
		console.log(event.target);
		const userName = document.querySelector("[name='uname']").value;
		const password = document.querySelector("[name='psw']").value;
		const dataUser = {
			username:userName,
			password:password,
		};
		const currentUserLogin = new User(dataUser); 
		console.log(currentUserLogin);
		currentUserLogin.sendLoginData(dataUser).then((response) => {
			console.log(response);
			let accessToken = response.accessToken;
			console.log(accessToken);
			document.cookie = 'loginToken=${accessToken}';
			console.log(document.cookie);
		})
	})

function CreateMovieListError(xhr){
	console.log("error",xhr);
}

function logoutError(xhr){
	console.log("error",xhr);
}	

}



