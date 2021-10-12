const addMovieBtn = document.getElementById("add-movie-btn");
const searchBtn = document.querySelector("#search-btn");

const movies = [];

function addMovieHandler() {
  const titleValue = document.querySelector("#title").value;
  const extraNameValue = document.querySelector("#extra-name").value;
  const extraValueValue = document.querySelector("#extra-value").value;

  if (!titleValue.trim() || !extraNameValue.trim() || !extraValueValue.trim()) {
    return;
  }

  const movie = {
    id: Math.random(),
    title: titleValue,
    [extraNameValue]: extraValueValue,
  };

  movies.push(movie);
  renderMovies();
}

function renderMovies(filter = "") {
  const movieList = document.getElementById("movie-list");

  if (!movies.length) {
    movieList.classList.remove("visible");
    return;
  } else {
    movieList.classList.add("visible");
  }

  movieList.innerHTML = "";

  const filteredMovies = !filter
    ? movies
    : movies.filter((movie) => movie.title.includes(filter));

  filteredMovies.forEach((movie) => {
    const newMovieItem = document.createElement("li");
    let text = `${movie.title} - `;
    for (const key in movie) {
      if (key !== "title" && key !== "id") {
        text = `${text} ${key}: ${movie[key]}`;
      }
    }
    newMovieItem.textContent = text;
    movieList.append(newMovieItem);
  });
}

function searchMovieHandler() {
  const filterTerm = document.getElementById("filter-title").value;
  renderMovies(filterTerm.trim());
}

addMovieBtn.addEventListener("click", addMovieHandler);
searchBtn.addEventListener("click", searchMovieHandler);
