let movieData = {
  "The Darjeeling Limited": {
    plot: "A year after their father's funeral, three brothers travel across India by train in an attempt to bond with each other.",
    cast: ["Jason Schwartzman", "Owen Wilson", "Adrien Brody"],
    runtime: 151,
    rating: 7.2,
    year: 2007,
  },
  "The Royal Tenenbaums": {
    plot: "The eccentric members of a dysfunctional family reluctantly gather under the same roof for various reasons",
    rating: 7.6,
    year: 2001,
    cast: ["Gene Hackman", "Gwnyeth Paltrow", "Anjelica Huston"],
    runtime: 170,
  },
  "Fantastic Mr. Fox": {
    year: 2009,
    plot: "An urbane fox cannot resist returning to his farm raiding ways and then must help his community survive the farmers' retaliation.",
    cast: [
      "George Clooney",
      "Meryl Streep",
      "Bill Murray",
      "Jason Schwartzman",
    ],
    runtime: 147,
    rating: 7.9,
  },
  "The Grand Budapest Hotel": {
    rating: 8.1,
    runtime: 159,
    year: 2014,
    plot: "A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotel's glorious years under an exceptional concierge.",
    cast: ["Ralph Fiennes", "F. Murray Abraham", "Mathieu Amalric"],
  },
};

const movieList = document.getElementById("movie-list");
const addMovieModal = document.getElementById("addMovieModal");
const addMovieForm = document.getElementById("addMovieForm");
const submitButton = document.getElementById("submit-edit");
const titleInput = document.getElementById("title");
const yearInput = document.getElementById("year");
const runtimeInput = document.getElementById("runtime");
const ratingInput = document.getElementById("rating");
const plotInput = document.getElementById("plot");
const castInput = document.getElementById("cast");

// Create movie list on load
function createMovieList() {
  for (const movieTitle in movieData) {
    const movie = movieData[movieTitle];
    const movieElement = createMovieElement(movieTitle, movie);
    movieList.appendChild(movieElement);
  }

  console.log('movieList', movieList);
}

function createMovieElement(title, movie) {
  const movieElement = document.createElement("div");
  movieElement.classList.add("movie");
  movieElement.innerHTML = `
    <div class="new-container">
      <h2 class="movie-title">${title}</h2>
      <p class="movie-plot">${movie.plot}</p>
      <p class="movie-cast"><b>Cast:</b> ${movie.cast.join(", ")}</p>
      <p class="movie-runtime"><b>Runtime:</b> ${movie.runtime} mins</p>
      <div class="movie-rating"><b>Rating:</b> ${movie.rating}/10</div>
    </div>
    <div class="movie-actions">
      <button class="edit-button">Edit</button>
      <button class="delete-button">Delete</button>
    </div>
  `;
  
  const editButton = movieElement.querySelector(".edit-button");
  const deleteButton = movieElement.querySelector(".delete-button");
  
  // Edit button click handler
  editButton.addEventListener("click", () => {
    openModal();
    fillForm(movie);
    modalTitle.textContent = "Edit Movie";
  });

  // Delete button click handler
  deleteButton.addEventListener("click", () => {
    movieList.removeChild(movieElement);
  });

  return movieElement;
}

submitButton.addEventListener("click", (event) => {
  event.preventDefault(); // prevent default form submission behavior

  // get form data
  const title = titleInput.value;
  const year = yearInput.value;
  const runtime = runtimeInput.value;
  const rating = ratingInput.value;
  const plot = plotInput.value;
  const cast = castInput.value.split(",");

  // create new movie object
  const newMovie = {
    title,
    year,
    runtime,
    rating,
    plot,
    cast,
  };

  // create new movie element
  const newMovieElement = createMovieElement(title, newMovie);

  // add new movie element to movie list
  movieList.appendChild(newMovieElement);

  // reset form
  addMovieForm.reset();
});

// Open the modal
function openModal() {
  // Get the modal element
  var modal = document.getElementById("addMovieModal");

  // Show the modal
  modal.style.display = "block";
}

// Fill the form with movie data
function fillForm(movie) {
  // Get the form elements
  var titleInput = document.getElementById("title");
  var yearInput = document.getElementById("year");
  var runtimeInput = document.getElementById("runtime");
  var ratingInput = document.getElementById("rating");
  var plotInput = document.getElementById("plot");
  var castInput = document.getElementById("cast");

  // Fill the form with movie data
  titleInput.value = movie.title;
  yearInput.value = movie.year;
  runtimeInput.value = movie.runtime;
  ratingInput.value = movie.rating;
  plotInput.value = movie.plot;
  castInput.value = movie.cast;

  // Set the modal title
  modalTitle.innerHTML = "Edit Movie";
}

// Get the modal title element
var modalTitle = document.getElementById("modalTitle");

// Select movie element
movieList.addEventListener("click", (event) => {
  const movieElement = event.target.closest(".movie");

  if (!movieElement) return; // if clicked outside of a movie element, do nothing

  // remove selected class from previously selected movie element
  const selectedMovieElement = document.querySelector(".selected");
  if (selectedMovieElement) {
    selectedMovieElement.classList.remove("selected");
  }

  // add selected class to selected movie element
  movieElement.classList.add("selected");
});

// Call createMovieList on load
// createMovieList();
