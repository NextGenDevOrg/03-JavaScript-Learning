const addMovieBtnid = document.getElementById('addmoviebtn');
const searchBtnid = document.getElementById('searchbtn');

const movies = [];

const renderMovies = (filter = '') => {
  const movieList = document.getElementById('movielist');

  if (movies.length === 0) {
    movieList.classList.remove('visible');
    return;
  } else {
    movieList.classList.add('visible');
  }
  movieList.innerHTML = '';

  const filteredMovies = !filter
    ? movies
    : movies.filter(movie => movie.info.title.includes(filter));

  filteredMovies.forEach(movie => {
    const movieEl = document.createElement('li');
    const { info, ...otherProps } = movie;
    console.log(otherProps);
    let text = movie.getFormattedTitle() + ' - ';
    for (const key in info) {
      if (key !== 'title') {
        text = text + `${key}: ${info[key]}`;
      }
    }
    movieEl.textContent = text;
    movieList.append(movieEl);
  });
};

const addMovieHandler = () => {
  const title = document.getElementById('title-id').value;
  const extraNameid = document.getElementById('extra-name-id').value;
  const extraValueid = document.getElementById('extra-value-id').value;

  if (
    title.trim() === '' ||
    extraNameid.trim() === '' ||
    extraValueid.trim() === ''
  ) {
    return;
  }

  const newMovie = {
    info: {
      title,
      [extraNameid]: extraValueid
    },
    id: Math.random().toString(),
    getFormattedTitle: function() {
      return this.info.title.toUpperCase();
    }
  };

  movies.push(newMovie);
  renderMovies();
};

const searchMovieHandler = () => {
  const filterTerm = document.getElementById('filtertitle').value;
  renderMovies(filterTerm);
};

addMovieBtnid.addEventListener('click', addMovieHandler);
searchBtnid.addEventListener('click', searchMovieHandler);
