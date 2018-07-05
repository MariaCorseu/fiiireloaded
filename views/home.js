window.onload=Onloaded;



function Onloaded(){
	const viewData=new Movies();
	viewData.getMovies()
	.then(createMovieList)
	.catch();



function createMovieList(){
	console.log(viewData.itemList);
	const containElements=document.getElementById("container");
		for(let i=0;i<viewData.itemList.length;i++){
			const item=viewData.itemList[i];
			const title=document.createElement("h1");
			title.innerHTML=item.Title;

			var picture=document.createElement('img');
			picture.setAttribute('src',item.Poster);
			picture.setAttribute('alt','404');
			picture.setAttribute('width','200px');
			picture.classList.add('img-size');

			containElements.appendChild(picture);
			containElements.appendChild(title);
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

}



