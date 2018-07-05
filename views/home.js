window.onload=Onloaded;

function Onloaded(){
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

function CreateMovieListError(xhr){
	console.log("error",xhr);
}	

}

