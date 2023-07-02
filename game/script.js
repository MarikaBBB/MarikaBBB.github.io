// Function to toggle the movie image visibility
function toggleImage() {
  var movieImage = document.getElementById("movie-img");
  movieImage.classList.toggle("hidden"); // Show or hide the movie image
}

// Function to start the timer
function startTimer() {
  timerInterval = setInterval(function () {
    timerSeconds++;
    updateTimer();

    // Check if the time limit has been reached
    if (timerSeconds >= 180) { // 3 minutes * 60 seconds = 180 seconds
      stopTimer();
      clearInterval(timerInterval);
      setTimeout(function () {
        alert("Game over! You have reached the time limit.");
      }, 0);
    }
  }, 1000);
}

// Function to shuffle the tiles randomly
function shuffle() {
  var grid = document.getElementById("grid");
  var tiles = grid.getElementsByClassName("tile");

  // Create an array of tile values
  var tileValues = [];
  for (var i = 0; i < tiles.length; i++) {
    tileValues.push(parseInt(tiles[i].getAttribute("data-value")));
    tiles[i].addEventListener("dragstart", drag);
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
    tiles[k].addEventListener("drop", drop);
    tiles[k].addEventListener("dragover", allowDrop);
  }

  // Reset moves count and timer
  document.getElementById("turns").textContent = "0";
  resetTimer(); 
}

// Add an event listener to button "New game"
document.getElementById("shuffle-button").addEventListener("click", function() {
  // Call startTimer only when the "New Game" button is clicked
  startTimer();
  shuffle();
});


document.querySelector(".timer-button").addEventListener("click", stopTimer);

// Set the maximum number of moves
var maxMoves = 20;

// Function to handle the drag start event
function drag(event) {
  event.target.classList.add("dragging");
}

// Function to swap two tiles
function swapTiles(tile1, tile2) {
  var tempValue = tile1.getAttribute("data-value");
  var tempHTML = tile1.innerHTML;

  tile1.setAttribute("data-value", tile2.getAttribute("data-value"));
  tile1.innerHTML = tile2.innerHTML;

  tile2.setAttribute("data-value", tempValue);
  tile2.innerHTML = tempHTML;
}

// Function to allow dropping on a target
function allowDrop(event) {
  event.preventDefault();
}

// Function to handle the drop event
function drop(event) {
  event.preventDefault();
  var sourceTile = document.querySelector(".dragging");
  var targetTile = event.target;

  if (sourceTile && sourceTile !== targetTile && targetTile.classList.contains("tile")) {
    var sourceOrder = parseInt(sourceTile.style.order);
    var targetOrder = parseInt(targetTile.style.order);

    sourceTile.style.order = targetOrder;
    targetTile.style.order = sourceOrder;

    sourceTile.classList.remove("dragging");
    targetTile.classList.remove("highlighted");

    // Increment the moves count
    var moves = parseInt(document.getElementById("turns").textContent);
    document.getElementById("turns").textContent = (moves + 1).toString();

    // Check if the maximum number of moves has been reached
    if (moves + 1 >= maxMoves) {
      stopTimer();
      alert("Game over! You have reached the maximum number of moves.");
    }

    // Check if the puzzle is solved
    checkTilesOrder();
  }
}

// Function to check if the tiles are in the correct order
function checkTilesOrder() {
  var grid = document.getElementById("grid");
  var tiles = grid.getElementsByClassName("tile");
  var isCorrectOrder = true;

  for (var i = 0; i < tiles.length; i++) {
    var tileOrder = parseInt(tiles[i].style.order);

    if (tileOrder !== i) {
      isCorrectOrder = false;
      break;
    }
  }

  if (isCorrectOrder && tiles.length > 0) {
    // Puzzle is solved
    stopTimer();
    alert("Congratulations! You solved the puzzle!");
    solved = true;
  }
}

// Function to get the value of the empty tile
function getEmptyTileValue() {
  var grid = document.getElementById("grid");
  var tiles = grid.getElementsByClassName("tile");

  for (var i = 0; i < tiles.length; i++) {
    var tileValue = parseInt(tiles[i].getAttribute("data-value"));
    if (tileValue === 15) {
      return tileValue;
    }
  }

  return -1; // Return -1 if empty tile is not found (error case)
}

// Timer functionality
var timerInterval;
var timerSeconds = 0;

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

// Open the instructions modal when the instructions button is clicked
document.getElementById("instructions-button").addEventListener("click", function () {
  var modal = document.getElementById("instructions-modal");
  modal.style.display = "block";
});

// Close the instructions modal when the close button is clicked
document.getElementsByClassName("close-button")[0].addEventListener("click", function () {
  var modal = document.getElementById("instructions-modal");
  modal.style.display = "none";
});

// Close the instructions modal when the user clicks outside the modal
window.addEventListener("click", function (event) {
  var modal = document.getElementById("instructions-modal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
});






