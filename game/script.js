// Function to toggle the movie image visibility
function toggleImage() {
  var movieImg = document.getElementById("movie-img");
  movieImg.classList.toggle("hidden"); // Show or hide the movie image
}

// Function to shuffle the tiles
function shuffle() {
  var grid = document.getElementById("grid");
  var tiles = Array.from(grid.children);
  var fragment = document.createDocumentFragment();

  while (tiles.length) {
    var randomPos = Math.floor(Math.random() * tiles.length);
    fragment.appendChild(tiles[randomPos]);
    tiles.splice(randomPos, 1);
  }

  grid.appendChild(fragment);
}

// Event listener for the "New Game" button
var newGameButton = document.querySelector(".randomMove button");
newGameButton.addEventListener("click", shuffle);