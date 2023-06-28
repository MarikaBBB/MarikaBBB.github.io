# PUZZLE GAME
This is a web-based puzzle game built using HTML, CSS, and JavaScript. The game is inspired by japanese anime characters, and it features an image from Studio Ghibli as the puzzle background. The goal of the game is to arrange the tiles in the correct order within a specified number of moves or within a time limit.


## Game Preview
To see a live demo of the puzzle game, you can visit this link: https://marikabbb.github.io/game/index.html 

### How the Puzzle Works
To play the Puzzle Game, follow these steps:
- Access the game by opening the 'index.html' file in a web browser.
- The game will start when you press the button "New Game". You will see a grid of shuffled tiles.
- Click and drag a tile to move it to the correct spot.
- Continue rearranging the tiles until they are in the correct order.
- If you reach the maximum number of moves or the time limit, a game over alert will be displayed.
- Once the tiles are in the correct order, a congratulatory alert will be displayed, and the timer will stop.
- Click the "New Game" button to start a new game and reshuffle the tiles.
- Click the "Instructions" button to view the game instructions in a modal window.


### Features:
- Each tile represents a part of an image from a Ghibli movie. 
- Interactive tile dragging and dropping mechanism for rearranging tiles.
- Randomized tile shuffling at the start of each game.
- Moves counter to keep track of the number of moves made by the player.
- Timer to track the time taken to solve the puzzle.
- Maximum moves limit and time limit options for added challenge.
- Congratulatory alert message and timer stop when the puzzle is solved.
- Game over alert message when the maximum moves or time limit is reached.
- Modal with game instructions accessible from the main menu.


### Future implementations:
- Be mobile responsive.(work in progress)
- Add event touch to play on mobile phone and iPad.
- Make the game more engaging by adding additional levels with different images and increasing difficulty.
- Add sound effects.
- Implement a scoring system based on the number of moves or time taken to solve the puzzle, allowing players to compete for high scores.

### Challenges and Debugging
During the development of this game, I encountered several challenges and performed debugging to ensure smooth functionality. Here are the challenges I faced and how I addressed them:

1- Shuffling the image into tiles: Initially, I attempted to shuffle the image into tiles programmatically using JavaScript. However, I encountered difficulties in properly randomizing the tiles. After exploring different approaches, I decided to handle the shuffling in CSS. By assigning different order values to the tiles in the CSS styles, I achieved a visually shuffled puzzle. This simplified the logic and futher step in JavaScript. 

2- Checking if tiles are in the correct order: Initially, I struggled with implementing the logic to check if the tiles were in the correct order. The ```checkTilesOrder();``` function didn't work as expected. To resolve this, I carefully reviewed the code and realized that I needed to compare the tile order with the expected order. By making this adjustment, I was able to correctly determine if the puzzle was solved.

3- Timer and game over alert: When the time limit or maximum moves were reached, I noticed that although the game over alert appeared, the timer continued running. To fix this, I modified the ```stopTimer();``` function to clear the timer interval, ensuring that the timer stopped when the game was over. This ensured that the alert message and timer behavior were synchronized.

4- New Game button and timer speed: Another challenge I encountered was that when clicking the "New Game" button, the timer appeared to run faster than normal. To address this issue, I realized that I needed to reset the timer and start it fresh for each new game. I achieved this by calling the ```resetTimer();``` function at the beginning of the ```shuffle();``` function. This ensured that the timer started correctly and ran at a consistent speed throughout the game.

5- Closing the game over alert: After clicking "OK" on the game over alert, I noticed that the message did not close as expected. To resolve this, I modified the event listener for the "OK" button to hide the alert after it was clicked. This provided a smoother user experience by dismissing the alert properly.

6- Timer speed on page load: I observed that the timer appeared to run at a normal speed when the page initially loaded, but it became faster after clicking the "New Game" button. Upon investigation, I realized that the timer interval duration needed adjustment. By fine-tuning the interval duration in the ```startTimer()'``` function, I ensured that the timer maintained a consistent speed throughout the game, regardless of when it was started.

7- The challenge was to make it mobile-responsive. It was tricky But, I partially achieved it.
The challenge arose from the decision to shuffle a single background image instead of uploading and positioning 16 individual images onto the tiles. Breaking down a single image into 16 tiles posed difficulties when resizing the puzzle for smaller screens. The issue arises because the computer interprets the 16 tiles as empty, resulting in their height being set to 0 when using media queries. Therefore, it was difficult to resize the grid and tiles.

### Debugging Process
I carefully reviewed the code logic, inspected variables, and setted breakpoints in the IDE. Additionally, I used the google inpector and closely monitored the browser console for any error messages or unexpected behavior.

### Credits
This slide puzzle was built with the help of two tutorials: https://www.youtube.com/watch?v=sD3Os4H_EOU and https://www.youtube.com/watch?v=S6GNtMGNcUE. However, instead of creating the individual tiles dynamically using JavaScript, the image was divided into tiles using CSS. The background image used in the puzzle is sourced from Studio Ghibli, obtained through their website's free download option.

### Enjoy :D
Enjoy playing the slide puzzle game and have fun arranging the tiles! Feel free to provide any feedback or suggestions for improvement.
