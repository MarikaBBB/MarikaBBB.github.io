// Get the canvas element
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Set the puzzle dimensions
const puzzleWidth = canvas.width;
const puzzleHeight = canvas.height;

// Define the number of rows and columns in the puzzle
const numRows = 3;
const numCols = 3;

// Load the image
const image = new Image();
image.src = 'the-wind-rises.png';
image.addEventListener('load', start);

// Initialize the puzzle pieces
let puzzlePieces = [];

