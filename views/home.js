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
	


}



