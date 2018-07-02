 window.onload = (() => {
 	const currentMovie = new MovieDetails();

	currentMovie.fetchData().then((response) => {
		console.log(response);

		const movieDetailsContainer = document.getElementById("movieDetailsContainer");

		//append Title
		const movieTitle = document.createElement("h1");
		movieTitle.innerHTML = response.Title;
		movieDetailsContainer.appendChild(movieTitle);

		//append Year
	    const movieYear = document.createElement("p");
		movieYear.innerHTML = "Year: " + response.Year;
		movieDetailsContainer.appendChild(movieYear);

		//append Rate
		const movieRate = document.createElement("p");
		movieRate.innerHTML = "Rate: " + response.Rated;
		movieDetailsContainer.appendChild(movieRate);

		//append Release date
		const movieRelased = document.createElement("p");
		movieRelased.innerHTML = "Release Date: " + response.Released;
		movieDetailsContainer.appendChild(movieRelased);

		//append Runtime
		const movieRuntime = document.createElement("p");
		movieRuntime.innerHTML = "Runtime: " + response.Runtime;
		movieDetailsContainer.appendChild(movieRuntime);

		//append Genre
		const movieGenre = document.createElement("p");
		movieGenre.innerHTML = "Genre: " + response.Genre;
		movieDetailsContainer.appendChild(movieGenre);

		// append Writer
		const movieWriter = document.createElement("p");
		movieWriter.innerHTML = "Writer: " + response.Writer;
		movieDetailsContainer.appendChild(movieWriter);

		//append Actors
		const movieActors = document.createElement("p");
		movieActors.innerHTML = "Actors: " + response.Actors;
		movieDetailsContainer.appendChild(movieActors);

		//append Plot
		const moviePlot = document.createElement("p");
		moviePlot.innerHTML = "Plot: " + response.Plot;
		movieDetailsContainer.appendChild(moviePlot);

		//append Language
		const movieLanguage = document.createElement("p");
		movieLanguage.innerHTML = "Language: " + response.Language;
		movieDetailsContainer.appendChild(movieLanguage); 

		//append Country
		const movieCountry = document.createElement("p");
		movieCountry.innerHTML = "Country: " + response.Country;
		movieDetailsContainer.appendChild(movieCountry);

		//append Awards
		const movieAwards = document.createElement("p");
		movieAwards.innerHTML = "Awards: " + response.Awards;
		movieDetailsContainer.appendChild(movieAwards);

		//append Poster(img)
		const moviePoster = document.createElement("img");
		moviePoster.setAttribute("src",response.Poster);
		movieDetailsContainer.appendChild(moviePoster);

		//append Metascore
		const movieMetascore = document.createElement("p");
		movieMetascore.innerHTML = "Metascore: " + response.Metascore;
		movieDetailsContainer.appendChild(movieMetascore); 

		//append Imdb Rating
		const movieImdbRating = document.createElement("p");
		movieImdbRating.innerHTML = "Imdb Rating: " + response.imdbRating;
		movieDetailsContainer.appendChild(movieImdbRating); 

		//append Imdb Votes
		const movieImdbVotes = document.createElement("p");
		movieImdbVotes.innerHTML = "Imdb Votes: " + response.imdbVotes;
		movieDetailsContainer.appendChild(movieImdbVotes);

		//append Imdb Id
		const movieImdbId = document.createElement("p");
		movieImdbId.innerHTML = "Imdb ID: " + response.imdbId;
		movieDetailsContainer.appendChild(movieImdbId);

		//append Type
		const movieType = document.createElement("p");
		movieType.innerHTML = "Type: " + response.Type;
		movieDetailsContainer.appendChild(movieType);

		//append Dvd
		const movieDvd = document.createElement("p");
		movieDvd.innerHTML = "Dvd: " + response.DVD;
		movieDetailsContainer.appendChild(movieDvd);

		//append BoxOffice
		const movieBoxOffice = document.createElement("p");
		movieBoxOffice.innerHTML = "BoxOffice: " + response.BoxOffice;
		movieDetailsContainer.appendChild(movieBoxOffice); 

		//append Production
		const movieProduction = document.createElement("p");
		movieProduction.innerHTML = "Production: " + response.Production;
		movieDetailsContainer.appendChild(movieProduction); 

		//append Website
		const movieWebsite = document.createElement("p");
		movieWebsite.innerHTML = "Website: " + response.Website;
		movieDetailsContainer.appendChild(movieWebsite);

	})
 })
