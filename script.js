const today = new Date();

// Create a string with the current date in a readable format
const tStr = today.toLocaleDateString();

// Find the HTML element to display the date and set its text content
const dateElem = document.getElementById("current-date");
dateElem.textContent = tStr;



