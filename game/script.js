// Function to toggle the movie image visibility
function toggleImage() {
  var movieImg = document.getElementById("movie-img");
  movieImg.classList.toggle("hidden"); // Show or hide the movie image
}

// Function to shuffle the tiles randomly
function shuffle() {
  startTimer(); // Start the timer automatically
  
  var grid = document.getElementById("grid");
  var tiles = grid.getElementsByClassName("tile");
  var emptyTile = grid.getElementsByClassName("tileEmpty")[0];

  // Create an array of tile values
  var tileValues = [];
  for (var i = 0; i < tiles.length; i++) {
    tileValues.push(parseInt(tiles[i].getAttribute("data-value")));
  }

  // Shuffle the tile values
  for (var j = tileValues.length - 1; j > 0; j--) {
    var randomIndex = Math.floor(Math.random() * (j + 1));
    var temp = tileValues[j];
    tileValues[j] = tileValues[randomIndex];
    tileValues[randomIndex] = temp;
  }

  // Update the tile positions
  for (var k = 0; k < tiles.length; k++) {
    tiles[k].setAttribute("data-value", tileValues[k]);
    tiles[k].style.order = tileValues[k];
    if (tileValues[k] === 15) {
      emptyTile = tiles[k];
    }
  }

  // Reset moves count and timer
  document.getElementById("turns").textContent = "0";
  resetTimer();
}

// Set the maximum number of moves
var maxMoves = 50;

// Function to move a tile
function moveTile(tile) {
  var grid = document.getElementById("grid");
  var emptyTile = grid.getElementsByClassName("tileEmpty")[0];

  var tileValue = parseInt(tile.getAttribute("data-value"));
  var emptyTileValue = parseInt(emptyTile.getAttribute("data-value"));

  var tileRow = Math.floor(tileValue / 4);
  var emptyTileRow = Math.floor(emptyTileValue / 4);

  var tileCol = tileValue % 4;
  var emptyTileCol = emptyTileValue % 4;

  // Check if the tiles can be swapped
  if (
    (tileRow === emptyTileRow && Math.abs(tileCol - emptyTileCol) === 1) ||
    (tileCol === emptyTileCol && Math.abs(tileRow - emptyTileRow) === 1)
  ) {

    // Swap the tiles
    var tempOrder = tile.style.order;
    tile.style.order = emptyTile.style.order;
    emptyTile.style.order = tempOrder;

    tile.setAttribute("data-value", emptyTileValue);
    emptyTile.setAttribute("data-value", tileValue);

    // Increment the moves count
    var moves = parseInt(document.getElementById("turns").textContent);
    document.getElementById("turns").textContent = (moves + 1).toString();

    // Check if the maximum number of moves has been reached
    if (moves + 1 >= maxMoves) {
      stopTimer();
      alert("Game over! You have reached the maximum number of moves.");
    }

    // Check if the puzzle is solved
    if (isPuzzleSolved()) {
      stopTimer();
      alert("Congratulations! You solved the puzzle!");
    }
  }
}

// Function to check if the puzzle is solved
function isPuzzleSolved() {
  var grid = document.getElementById("grid");
  var tiles = grid.getElementsByClassName("tile");

  for (var i = 0; i < tiles.length; i++) {
    var tileValue = parseInt(tiles[i].getAttribute("data-value"));
    if (tileValue !== i) {
      return false;
    }
  }

  return true;
}

// Timer functionality
var timerInterval;
var timerSeconds = 0;

// Function to start the timer
function startTimer() {
  timerInterval = setInterval(function () {
    timerSeconds++;
    updateTimer();
  }, 1000);
}

// Function to stop the timer
function stopTimer() {
  clearInterval(timerInterval);
}

// Function to reset the timer
function resetTimer() {
  timerSeconds = 0;
  updateTimer();
}

// Function to update the timer display
function updateTimer() {
  var hours = Math.floor(timerSeconds / 3600);
  var minutes = Math.floor((timerSeconds % 3600) / 60);
  var seconds = timerSeconds % 60;

  var timerDisplay = document.getElementById("timer");
  timerDisplay.textContent = padTime(hours) + ":" + padTime(minutes) + ":" + padTime(seconds);
}

// Function to pad the time values with leading zeros
function padTime(time) {
  return (time < 10 ? "0" : "") + time;
}

// Function to toggle the movie image visibility
function toggleImage() {
  var movieImage = document.getElementById("movie-img");
  movieImage.classList.toggle("hidden"); // Show or hide the movie image
}

// Initialize the game
shuffle();

// Event handler for the form submission
document.getElementById("guess-form").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the default form submission behavior

  var guessInput = document.getElementById("guess-input");
  var guess = guessInput.value.trim(); // Trim leading and trailing whitespace from the guess

  if (guess === "Spirited away") {
    document.getElementById("guess-result").textContent = "Well done! Your guess is correct.";
  } else {
    document.getElementById("guess-result").textContent = "Try again. Your guess is incorrect.";
  }

  guessInput.value = ""; // Clear the input field
});