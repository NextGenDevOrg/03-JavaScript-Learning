//css style

// text color style 
const h2 = document.getElementById('main-title');

h2.style.color = 'black';
h2.style.fontSize = "30px";
h2.style.fontWeight = "900";
// text background style 
const div = document.getElementById('king');
div.style.backgroundColor="magenta";
div.style.height="100px";
div.style.boxShadow=" darkgray 2px 3px 5px 3px "
//body
const body = document.body;
body.style.marginTop ="-1%";
body.style.fontFamily="'Rubik', sans-serif"
body.style.borderBottom
//button style 
const button = document.getElementById("main-btn")
button.style.backgroundColor="darkorange";
button.style.float="right";
button.style.marginTop="-3.5%";
button.style.padding="6px";
button.style.borderRadius='13px';
button.style.position="relative";

//Element Id

const addMovieModal = document.getElementById('add-modal');

const startAddMovieButton = document.getElementById("main-btn");

const backdrop = document.getElementById('backdrop');

const cancelAddMovieButton = addMovieModal.querySelector('.btn--passive');
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;
const userInputs = addMovieModal.querySelectorAll('input');

const entryTextSection = document.getElementById('entry-text');

const movies = [];

//display style 

const updateUI = () => {
  if (movies.length === 0) {
    entryTextSection.style.display = 'block';
  } else {
    entryTextSection.style.display = 'none';
  }
};

// text value  remuver
const deleteMovieHandler = (movieId) => {
  let movieIndex = 0;
  for (const movie of movies) {
    if (movie.id === movieId) {
      break;
    }
    movieIndex++;
  }
  movies.splice(movieIndex, 1);
  const listRoot = document.getElementById('movie-list');
  listRoot.children[movieIndex].remove();
};

const renderNewMovieElement = (id, title, imageUrl, rating) => {
  const newMovieElement = document.createElement('li');
  newMovieElement.className = 'movie-element';
  newMovieElement.innerHTML = `
    <div class="movie-element__image">
      <img src="${imageUrl}" alt="${title}">
    </div>
    <div class="movie-element__info">
      <h2>${title}</h2>
      <p>${rating}/5 stars</p>
    </div>
  `;
  newMovieElement.addEventListener('click', deleteMovieHandler.bind(null, id));
  const listRoot = document.getElementById('movie-list');
  listRoot.append(newMovieElement);
};

const toggleBackdrop = () => {
  backdrop.classList.toggle('visible');
};

const toggleMovieModal = () => {
  addMovieModal.classList.toggle('visible');
  toggleBackdrop();
};
// function clear
const clearMovieInput = () => {
  for (const usrInput of userInputs) {
    usrInput.value = '';
  }
};
// add function clear
const cancelAddMovieHandler = () => {
  toggleMovieModal();
  clearMovieInput();
};

//input value 
const addMovieHandler = () => {
  const titleValue = userInputs[0].value;
  const imageUrlValue = userInputs[1].value;
  const ratingValue = userInputs[2].value;

  //alert message 
  if (
    titleValue.trim() === '' ||
    imageUrlValue.trim() === '' ||
    ratingValue.trim() === '' ||
    +ratingValue < 1 ||
    +ratingValue > 5
  ) {
    alert('Please enter valid values (rating between 1 and 5 ).');
    return;
  }

  // value of inner html
  const newMovie = {
    id: Math.random().toString(),
    title: titleValue,
    image: imageUrlValue,
    rating: ratingValue
  };

  movies.push(newMovie);
  console.log(movies);
  toggleMovieModal();
  clearMovieInput();
  renderNewMovieElement(
    newMovie.id,
    newMovie.title,
    newMovie.image,
    newMovie.rating
  );
  updateUI();
};

const backdropClickHandler = () => {
  toggleMovieModal();
};

// function log

startAddMovieButton.addEventListener('click', toggleMovieModal);
backdrop.addEventListener('click', backdropClickHandler);
cancelAddMovieButton.addEventListener('click', cancelAddMovieHandler);
confirmAddMovieButton.addEventListener('click', addMovieHandler);
