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
const headingList = document.getElementById("heading");
headingList.innerHTML="<h2>Select a film before clicking search</h2>";
function toggleSearchSectionVisibility() {
    if (searchSectionVisible) {
        // Hide the search section
        document.getElementById("search-section").style.display = "none";
        searchSectionVisible = false;
    } else {
        // Show the search section
        document.getElementById("search-section").style.display = "block";
        searchSectionVisible = true;
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
document.getElementById("recommendation-list").style.display = "flex";
    headingList.innerHTML="<h2>Result</h2>";
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
        window.open(imdbLink, '_blank'); // Navigate to IMDb link in the current window
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
            window.open(imdbLink, '_blank'); // Navigate to IMDb link in the current window
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
let menuOpen = false;
const menuButton = document.getElementById("menu-button");
    const menuOptions = document.getElementById("menu-container");
    menuButton.addEventListener("click", function () {
        if (!menuOpen) {
            menuOptions.style.left = "0";
            menuOpen = true;
        } else {
            menuOptions.style.left = "-250px";
            menuOpen = false;
        }
    });
    const topShow = document.getElementById("topshow");
    const topAction = document.getElementById("topaction");
    const topAdventure = document.getElementById("topadventure");
    const topAnimation = document.getElementById("topanimation");
    const topBiography = document.getElementById("topbiography");
    const topCrime= document.getElementById("topcrime");
    const topComedy= document.getElementById("topcomedy");
    const topDrama = document.getElementById("topdrama");
    const topFamily = document.getElementById("topfamily");
    const topFantasy = document.getElementById("topfantasy");
    const topHistory = document.getElementById("tophistory");
    const topHorror = document.getElementById("tophorror");
    const topMusical = document.getElementById("topmusical");
    const topMystery = document.getElementById("topmystery");
    const topRomance = document.getElementById("topromance");
    const topThriller = document.getElementById("topthriller");
    const topWar = document.getElementById("topwar");
    const topWestern = document.getElementById("topwestern");
    const Home = document.getElementById("home");  
// Call the fetchMovieData function to retrieve movie data and populate movie datalist

topShow.addEventListener("click", function (e) {
    const recommendationList = document.getElementById("recommendation-list");
    document.getElementById("search-section").style.display = "none";
    document.getElementById("recommendation-list").style.display = "flex";
    recommendationList.innerHTML = "";
    document.getElementById("search-section").style.display = "none";
    e.preventDefault();
    headingList.innerHTML="<h2>Top 10 Popular Films</h2>";
    movies.sort((a, b) => (b.averageRating*b.numVotes) - (a.averageRating*a.numVotes));
    movies.slice(0,10).forEach(movie => {
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
            window.location.href = imdbLink; // Navigate to IMDb link in the current window
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
    
})
topAction.addEventListener("click", function (e) {
    const recommendationList = document.getElementById("recommendation-list");
    document.getElementById("search-section").style.display = "none";
    document.getElementById("recommendation-list").style.display = "flex";
    recommendationList.innerHTML = "";
    document.getElementById("search-section").style.display = "none";
    e.preventDefault();
    headingList.innerHTML="<h2>Top 10 Popular Action Films</h2>";
    const actionmovies = movies.filter(movie => {
        // Check if every genre of the selected movie is present in the current movie
        return movie.genres.includes('Action') ;
    });
    actionmovies.sort((a, b) => (b.averageRating*b.numVotes) - (a.averageRating*a.numVotes));
    actionmovies.slice(0,10).forEach(movie => {
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
            window.location.href = imdbLink; // Navigate to IMDb link in the current window
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
    
})
topAdventure.addEventListener("click", function (e) {
    const recommendationList = document.getElementById("recommendation-list");
    document.getElementById("search-section").style.display = "none";
    document.getElementById("recommendation-list").style.display = "flex";
    recommendationList.innerHTML = "";
    document.getElementById("search-section").style.display = "none";
    e.preventDefault();
    headingList.innerHTML="<h2>Top 10 Popular Adventure Films</h2>";
    const adventuremovies = movies.filter(movie => {
        // Check if every genre of the selected movie is present in the current movie
        return movie.genres.includes('Adventure') ;
    });
    adventuremovies.sort((a, b) => (b.averageRating*b.numVotes) - (a.averageRating*a.numVotes));
    adventuremovies.slice(0,10).forEach(movie => {
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
            window.location.href = imdbLink; // Navigate to IMDb link in the current window
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
    
})
topAnimation.addEventListener("click", function (e) {
    const recommendationList = document.getElementById("recommendation-list");
    document.getElementById("search-section").style.display = "none";
    document.getElementById("recommendation-list").style.display = "flex";
    recommendationList.innerHTML = "";
    document.getElementById("search-section").style.display = "none";
    e.preventDefault();
    headingList.innerHTML="<h2>Top 10 Popular Animation Films</h2>";
    const animemovies = movies.filter(movie => {
        // Check if every genre of the selected movie is present in the current movie
        return movie.genres.includes('Animation') ;
    });
    animemovies.sort((a, b) => (b.averageRating*b.numVotes) - (a.averageRating*a.numVotes));
    animemovies.slice(0,10).forEach(movie => {
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
            window.location.href = imdbLink; // Navigate to IMDb link in the current window
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
    
})
topBiography.addEventListener("click", function (e) {
    const recommendationList = document.getElementById("recommendation-list");
    document.getElementById("search-section").style.display = "none";
    document.getElementById("recommendation-list").style.display = "flex";
    recommendationList.innerHTML = "";
    document.getElementById("search-section").style.display = "none";
    e.preventDefault();
    headingList.innerHTML="<h2>Top 10 Popular Biography Films</h2>";
    const biomovies = movies.filter(movie => {
        // Check if every genre of the selected movie is present in the current movie
        return movie.genres.includes('Biography') ;
    });
    biomovies.sort((a, b) => (b.averageRating*b.numVotes) - (a.averageRating*a.numVotes));
    biomovies.slice(0,10).forEach(movie => {
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
            window.location.href = imdbLink; // Navigate to IMDb link in the current window
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
    
})
topCrime.addEventListener("click", function (e) {
    const recommendationList = document.getElementById("recommendation-list");
    document.getElementById("search-section").style.display = "none";
    document.getElementById("recommendation-list").style.display = "flex";
    recommendationList.innerHTML = "";
    document.getElementById("search-section").style.display = "none";
    e.preventDefault();
    headingList.innerHTML="<h2>Top 10 Popular Crime Films</h2>";
    const crimemovies = movies.filter(movie => {
        // Check if every genre of the selected movie is present in the current movie
        return movie.genres.includes('Crime') ;
    });
    crimemovies.sort((a, b) => (b.averageRating*b.numVotes) - (a.averageRating*a.numVotes));
    crimemovies.slice(0,10).forEach(movie => {
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
            window.location.href = imdbLink; // Navigate to IMDb link in the current window
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
    
})
topComedy.addEventListener("click", function (e) {
    const recommendationList = document.getElementById("recommendation-list");
    document.getElementById("search-section").style.display = "none";
    document.getElementById("recommendation-list").style.display = "flex";
    recommendationList.innerHTML = "";
    document.getElementById("search-section").style.display = "none";
    e.preventDefault();
    headingList.innerHTML="<h2>Top 10 Popular Comedy Films</h2>";
    const comedymovies = movies.filter(movie => {
        // Check if every genre of the selected movie is present in the current movie
        return movie.genres.includes('Comedy') ;
    });
    comedymovies.sort((a, b) => (b.averageRating*b.numVotes) - (a.averageRating*a.numVotes));
    comedymovies.slice(0,10).forEach(movie => {
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
            window.location.href = imdbLink; // Navigate to IMDb link in the current window
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
    
})
topDrama.addEventListener("click", function (e) {
    const recommendationList = document.getElementById("recommendation-list");
    document.getElementById("search-section").style.display = "none";
    document.getElementById("recommendation-list").style.display = "flex";
    recommendationList.innerHTML = "";
    document.getElementById("search-section").style.display = "none";
    e.preventDefault();
    headingList.innerHTML="<h2>Top 10 Popular Drama Films</h2>";
    const dramamovies = movies.filter(movie => {
        // Check if every genre of the selected movie is present in the current movie
        return movie.genres.includes('Drama') ;
    });
    dramamovies.sort((a, b) => (b.averageRating*b.numVotes) - (a.averageRating*a.numVotes));
    dramamovies.slice(0,10).forEach(movie => {
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
            window.location.href = imdbLink; // Navigate to IMDb link in the current window
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
    
})
topFamily.addEventListener("click", function (e) {
    const recommendationList = document.getElementById("recommendation-list");
    document.getElementById("search-section").style.display = "none";
    document.getElementById("recommendation-list").style.display = "flex";
    recommendationList.innerHTML = "";
    document.getElementById("search-section").style.display = "none";
    e.preventDefault();
    headingList.innerHTML="<h2>Top 10 Popular Family Films</h2>";
    const familymovies = movies.filter(movie => {
        // Check if every genre of the selected movie is present in the current movie
        return movie.genres.includes('Family') ;
    });
    familymovies.sort((a, b) => (b.averageRating*b.numVotes) - (a.averageRating*a.numVotes));
    familymovies.slice(0,10).forEach(movie => {
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
            window.location.href = imdbLink; // Navigate to IMDb link in the current window
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
    
})
topFantasy.addEventListener("click", function (e) {
    const recommendationList = document.getElementById("recommendation-list");
    document.getElementById("search-section").style.display = "none";
    document.getElementById("recommendation-list").style.display = "flex";
    recommendationList.innerHTML = "";
    document.getElementById("search-section").style.display = "none";
    e.preventDefault();
    headingList.innerHTML="<h2>Top 10 Popular Fantasy Films</h2>";
    const fantasymovies = movies.filter(movie => {
        // Check if every genre of the selected movie is present in the current movie
        return movie.genres.includes('Fantasy') ;
    });
    fantasymovies.sort((a, b) => (b.averageRating*b.numVotes) - (a.averageRating*a.numVotes));
    fantasymovies.slice(0,10).forEach(movie => {
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
            window.location.href = imdbLink; // Navigate to IMDb link in the current window
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
    
})
topHistory.addEventListener("click", function (e) {
    const recommendationList = document.getElementById("recommendation-list");
    document.getElementById("search-section").style.display = "none";
    document.getElementById("recommendation-list").style.display = "flex";
    recommendationList.innerHTML = "";
    document.getElementById("search-section").style.display = "none";
    e.preventDefault();
    headingList.innerHTML="<h2>Top 10 Popular History Films</h2>";
    const historymovies = movies.filter(movie => {
        // Check if every genre of the selected movie is present in the current movie
        return movie.genres.includes('History') ;
    });
    historymovies.sort((a, b) => (b.averageRating*b.numVotes) - (a.averageRating*a.numVotes));
    historymovies.slice(0,10).forEach(movie => {
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
            window.location.href = imdbLink; // Navigate to IMDb link in the current window
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
    
})
topHorror.addEventListener("click", function (e) {
    const recommendationList = document.getElementById("recommendation-list");
    document.getElementById("search-section").style.display = "none";
    document.getElementById("recommendation-list").style.display = "flex";
    recommendationList.innerHTML = "";
    document.getElementById("search-section").style.display = "none";
    e.preventDefault();
    headingList.innerHTML="<h2>Top 10 Popular Horror Films</h2>";
    const horrormovies = movies.filter(movie => {
        // Check if every genre of the selected movie is present in the current movie
        return movie.genres.includes('Horror') ;
    });
    horrormovies.sort((a, b) => (b.averageRating*b.numVotes) - (a.averageRating*a.numVotes));
    horrormovies.slice(0,10).forEach(movie => {
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
            window.location.href = imdbLink; // Navigate to IMDb link in the current window
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
    
})
topMusical.addEventListener("click", function (e) {
    const recommendationList = document.getElementById("recommendation-list");
    document.getElementById("search-section").style.display = "none";
    document.getElementById("recommendation-list").style.display = "flex";
    recommendationList.innerHTML = "";
    document.getElementById("search-section").style.display = "none";
    e.preventDefault();
    headingList.innerHTML="<h2>Top 10 Popular Musical Films</h2>";
    const musicalmovies = movies.filter(movie => {
        // Check if every genre of the selected movie is present in the current movie
        return movie.genres.includes('Musical') ;
    });
    musicalmovies.sort((a, b) => (b.averageRating*b.numVotes) - (a.averageRating*a.numVotes));
    musicalmovies.slice(0,10).forEach(movie => {
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
            window.location.href = imdbLink; // Navigate to IMDb link in the current window
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
    
})
topMystery.addEventListener("click", function (e) {
    const recommendationList = document.getElementById("recommendation-list");
    document.getElementById("search-section").style.display = "none";
    document.getElementById("recommendation-list").style.display = "flex";
    recommendationList.innerHTML = "";
    document.getElementById("search-section").style.display = "none";
    e.preventDefault();
    headingList.innerHTML="<h2>Top 10 Popular Mystery Films</h2>";
    const mysterymovies = movies.filter(movie => {
        // Check if every genre of the selected movie is present in the current movie
        return movie.genres.includes('Mystery') ;
    });
    mysterymovies.sort((a, b) => (b.averageRating*b.numVotes) - (a.averageRating*a.numVotes));
    mysterymovies.slice(0,10).forEach(movie => {
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
            window.location.href = imdbLink; // Navigate to IMDb link in the current window
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
    
})
topRomance.addEventListener("click", function (e) {
    const recommendationList = document.getElementById("recommendation-list");
    document.getElementById("search-section").style.display = "none";
    document.getElementById("recommendation-list").style.display = "flex";
    recommendationList.innerHTML = "";
    document.getElementById("search-section").style.display = "none";
    e.preventDefault();
    headingList.innerHTML="<h2>Top 10 Popular Romance Films</h2>";
    const romancemovies = movies.filter(movie => {
        // Check if every genre of the selected movie is present in the current movie
        return movie.genres.includes('Romance') ;
    });
    romancemovies.sort((a, b) => (b.averageRating*b.numVotes) - (a.averageRating*a.numVotes));
    romancemovies.slice(0,10).forEach(movie => {
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
            window.location.href = imdbLink; // Navigate to IMDb link in the current window
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
    
})
topThriller.addEventListener("click", function (e) {
    const recommendationList = document.getElementById("recommendation-list");
    document.getElementById("search-section").style.display = "none";
    document.getElementById("recommendation-list").style.display = "flex";
    recommendationList.innerHTML = "";
    document.getElementById("search-section").style.display = "none";
    e.preventDefault();
    headingList.innerHTML="<h2>Top 10 Popular Thriller Films</h2>";
    const thrillermovies = movies.filter(movie => {
        // Check if every genre of the selected movie is present in the current movie
        return movie.genres.includes('Thriller') ;
    });
    thrillermovies.sort((a, b) => (b.averageRating*b.numVotes) - (a.averageRating*a.numVotes));
    thrillermovies.slice(0,10).forEach(movie => {
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
            window.location.href = imdbLink; // Navigate to IMDb link in the current window
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
    
})
topWar.addEventListener("click", function (e) {
    const recommendationList = document.getElementById("recommendation-list");
    document.getElementById("search-section").style.display = "none";
    document.getElementById("recommendation-list").style.display = "flex";
    recommendationList.innerHTML = "";
    document.getElementById("search-section").style.display = "none";
    e.preventDefault();
    headingList.innerHTML="<h2>Top 10 Popular War Films</h2>";
    const warmovies = movies.filter(movie => {
        // Check if every genre of the selected movie is present in the current movie
        return movie.genres.includes('War') ;
    });
    warmovies.sort((a, b) => (b.averageRating*b.numVotes) - (a.averageRating*a.numVotes));
    warmovies.slice(0,10).forEach(movie => {
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
            window.location.href = imdbLink; // Navigate to IMDb link in the current window
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
    
})
topWestern.addEventListener("click", function (e) {
    const recommendationList = document.getElementById("recommendation-list");
    document.getElementById("search-section").style.display = "none";
    document.getElementById("recommendation-list").style.display = "flex";
    recommendationList.innerHTML = "";
    e.preventDefault();
    headingList.innerHTML="<h2>Top 10 Popular Western Films</h2>";
    const westmovies = movies.filter(movie => {
        // Check if every genre of the selected movie is present in the current movie
        return movie.genres.includes('Western') ;
    });
    westmovies.sort((a, b) => (b.averageRating*b.numVotes) - (a.averageRating*a.numVotes));
    westmovies.slice(0,10).forEach(movie => {
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
            window.location.href = imdbLink; // Navigate to IMDb link in the current window
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
    
})
Home.addEventListener("click", function (e) {
    document.getElementById("search-section").style.display = "flex";
    headingList.innerHTML="<h2>Select a film before clicking search</h2>";
    document.getElementById("recommendation-list").style.display = "none";
    const recommendButton2 = document.getElementById("recommend-button");
    recommendButton2.addEventListener("click", recommendMovies);
})
fetchMovieData().then(data => {
    populateMovieDatalist(data);
    movies = data; // Store the fetched data in the movies variable for later use
    
});

// Call the fetchMovieData function to retrieve movie data and populate movie datalist
fetchMovieData().then(data => {
    populateMovieDatalist(data);
    movies = data; // Store the fetched data in the movies variable for later use
});
