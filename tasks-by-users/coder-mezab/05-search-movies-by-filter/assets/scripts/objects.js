const addMovieBtn = document.getElementById("add-movie-btn");
const searchBtn = document.getElementById("search-btn");

const movies = [];

const renderMovies = (filter = "") => {
  const movieList = document.getElementById("movie-list");

  if (movies.length === 0) {
    movieList.classList.remove("visible");
    return;
  } else {
    movieList.classList.add("visible");
  }

  movieList.innerHTML = "";

  const filteredMovies = !filter
    ? movies
    : movies.filter((movie) => movie.info.title.includes(filter));

  filteredMovies.forEach((movie) => {
    const movieEl = document.createElement("li");
    const { info } = movie;
    const { title: movieTitle } = info;
    let text = movieTitle + " - ";
    for (let key in info) {
      if (key !== "title") {
        text = text + `${key}: ${info[key]} `;
      }
    }
    movieEl.textContent = text;
    movieList.append(movieEl);
  });
};
const clearUserInput = (titleDom, extraInfoDom, valueDom) => {
  titleDom.value = "";
  extraInfoDom.value = "";
  valueDom.value = "";
};
const addMovieHandler = () => {
  const title = document.getElementById("title");
  const extraInfo = document.getElementById("extra-name");
  const extraValue = document.getElementById("extra-value");
  if (
    title.value.trim() === "" ||
    extraInfo.value.trim() === "" ||
    extraValue.value.trim() === ""
  ) {
    alert("Please Enter valid info");
    return;
  }

  const newMovie = {
    info: {
      title: title.value,
      [extraInfo.value]: extraValue.value,
    },
    id: Math.random(),
  };
  movies.push(newMovie);
  renderMovies();
  clearUserInput(title, extraInfo, extraValue);
};

const searchMovieHandler = () => {
  const filteredTerm = document.getElementById("filter-title").value;
  renderMovies(filteredTerm);
};

addMovieBtn.addEventListener("click", addMovieHandler);
searchBtn.addEventListener("click", searchMovieHandler);
