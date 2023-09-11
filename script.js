async function fetchMovieData() {
    try {
        const response = await fetch('output.json'); // Replace with your API endpoint
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

// Function to populate the movie datalist dynamically
function populateMovieDatalist(data) {
    const movieDatalist = document.getElementById("movie-options");

    data.forEach(movie => {
        const option = document.createElement("option");
        option.value = movie.primaryTitle; // Replace with the appropriate property in your API data
        movieDatalist.appendChild(option);
    });
}

// Function to recommend movies with the same average rating
function recommendMovies() {
    const selectedMovieTitle = document.getElementById("movie-search").value;

    // Find the selected movie by title
    const selectedMovie = movies.find(movie => movie.primaryTitle === selectedMovieTitle);

    if (!selectedMovie) {
        displayRecommendations([]);
        return;
    }
    // Filter movies with the same average rating as the selected movie
    const similarMovies = movies.filter(movie => movie.averageRating === selectedMovie.averageRating &&
        selectedMovie.genres.every(genre => movie.genres.includes(genre)));

        similarMovies.sort((a, b) => Math.abs(a.numVotes - selectedMovie.numVotes) - Math.abs(b.numVotes - selectedMovie.numVotes));
    // Display the list of similar movies
    displayRecommendations(similarMovies);
}

// Function to display recommended movies
function displayRecommendations(recommendedMovies) {
    const recommendationList = document.getElementById("recommendation-list");
    recommendationList.innerHTML = "";

    if (recommendedMovies.length === 0) {
        recommendationList.innerHTML = "No movies with the same average rating found.";
        return;
    }

    recommendedMovies.forEach(movie => {
        const movieItem = document.createElement("div");
        movieItem.classList.add("movie-item");
        movieItem.innerHTML = `
            <h3>${movie.primaryTitle}</h3>
            <p>Genres: ${movie.genres.join(", ")}</p>
            <p>Rating: ${movie.averageRating}</p>
            <p>Number of Votes: ${movie.numVotes}</p>
        `;
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
