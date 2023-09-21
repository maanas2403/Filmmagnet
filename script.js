async function fetchMovieData() {
    try {
        const response = await fetch('output6.json'); // Replace with your API endpoint
        if (!response.ok) {
            throw new Error('Failed to fetch movie data');
        }
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error(error);
        return [];
    }
}
function handleHover(movieItem, movie) {
    // Add a class to the hovered movie item to bring it to the front
    movieItem.classList.add("front");
    
    // Show the details
    const hoverInfo = movieItem.querySelector(".hover-info");
    hoverInfo.style.display = "block";
}

// Function to remove hover effect and hide details
function handleHoverOut(movieItem) {
    // Remove the class to bring the movie item to its original position
    movieItem.classList.remove("front");
    
    // Hide the details
    const hoverInfo = movieItem.querySelector(".hover-info");
    hoverInfo.style.display = "none";
}

// Function to populate the movie datalist dynamically
function populateMovieDatalist(data) {
    const movieDatalist = document.getElementById("movie-options");

    data.forEach(movie => {
        const option = document.createElement("option");
        option.value = movie.primaryTitle; // Replace with the appropriate property in your API data
        movieDatalist.appendChild(option);
    });
}


function recommendMovies() {
    const selectedMovieTitle = document.getElementById("movie-search").value;

    // Find the selected movie by title
    const selectedMovie = movies.find(movie => movie.primaryTitle === selectedMovieTitle);

    if (!selectedMovie) {
        displayRecommendations([]);
        return;
    }

    const searchInput = document.getElementById("movie-search");
    searchInput.value = ""; // Clear the input field
    searchInput.focus(); // Set focus back to the input field


    // Filter movies with all the genres of the selected movie
    const similarMovies = movies.filter(movie => {
        // Check if every genre of the selected movie is present in the current movie
        return selectedMovie.nconst.some(name =>
            movie.nconst.includes(name)
        ) && selectedMovie.genres.some(genre => movie.genres.includes(genre)) && selectedMovie.primaryTitle !== movie.primaryTitle;
    });

    // Sort similar movies by average rating from highest to lowest
    similarMovies.sort((a, b) => b.averageRating - a.averageRating);

    // Display the list of similar movies
    displayRecommendations(selectedMovie, similarMovies);
}


function displayRecommendations(selectedMovie, recommendedMovies) {
    const recommendationList = document.getElementById("recommendation-list");
    recommendationList.innerHTML = "";

    if (!selectedMovie) {
        recommendationList.innerHTML = "Selected movie not found.";
        return;
    }

    const selectedMovieItem = document.createElement("div");
    selectedMovieItem.classList.add("movie-item");
    selectedMovieItem.innerHTML = `
        <img src="${selectedMovie.posterurl}" alt="Movie Poster">
        <h3>${selectedMovie.primaryTitle}</h3>
        <div class="hover-info">
        <h3>${selectedMovie.primaryTitle}</h3>
        <p>Genres: ${selectedMovie.genres.join(", ")}</p>
        <p>Cast: ${selectedMovie.primaryName.join(", ")}</p>
        <p>Rating: ${selectedMovie.averageRating}</p>
        <p>Number of Votes: ${selectedMovie.numVotes}</p>
        </div>
    `;

    selectedMovieItem.addEventListener("click", () => {
        const imdbLink = `https://www.imdb.com/title/${selectedMovie.tconst}`;
        window.open(imdbLink, '_blank'); 
    });

    recommendationList.appendChild(selectedMovieItem);

    selectedMovieItem.addEventListener("mouseenter", () => {
        handleHover(movieItem, movie);
    });

    // Event listener for hover out
    selectedMovieItem.addEventListener("mouseleave", () => {
        handleHoverOut(movieItem);
    });
    if (recommendedMovies.length === 0) {
        recommendationList.innerHTML += "No recommended movies found.";
        return;
    }

    recommendedMovies.forEach(movie => {
        const movieItem = document.createElement("div");
        movieItem.classList.add("movie-item");
        movieItem.innerHTML = `
        <img src="${movie.posterurl}" alt="Movie Poster">
        <h3>${movie.primaryTitle}</h3>
        <div class="hover-info">
            <h3>${movie.primaryTitle}</h3>
            
            <p>Genres: ${movie.genres.join(", ")}</p>
            <p>Cast: ${movie.primaryName.join(", ")}</p>
            <p>Rating: ${movie.averageRating}</p>
            <p>Number of Votes: ${movie.numVotes}</p>
            </div>
        `;

        movieItem.addEventListener("click", () => {
            const imdbLink = `https://www.imdb.com/title/${movie.tconst}`;
            window.open(imdbLink, '_blank'); 
        });
        movieItem.addEventListener("mouseenter", () => {
            handleHover(movieItem, movie);
        });
    
        // Event listener for hover out
        movieItem.addEventListener("mouseleave", () => {
            handleHoverOut(movieItem);
        });
        recommendationList.appendChild(movieItem);
        
    });
}







// Event listener for the Recommend button
const recommendButton = document.getElementById("recommend-button");
recommendButton.addEventListener("click", recommendMovies);

// Call the fetchMovieData function to retrieve movie data and populate movie datalist
fetchMovieData().then(data => {
    populateMovieDatalist(data);
    movies = data; // Store the fetched data in the movies variable for later use
});

