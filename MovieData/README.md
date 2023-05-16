Movie Database User Interface

Overview

For this project, my goal is to build a user interface using HTML and populate it with data from a JavaScript object. I have been provided with a data object containing information about movies. I have the freedom to choose how to display the data and build the interface. Additionally, I need to incorporate interactivity, allowing users to interact with the data. Users can view movie details, add new movies, and update existing movie information.

Requirements

To successfully complete this project, I need to meet the following requirements:

- Store the movie data object in a JavaScript file within my project's codebase.
- Use DOM manipulation techniques to render the movie data onto the webpage.
- Implement user interaction features, allowing users to affect the display of the data by interacting with the webpage.
- Provide functionality for users to update the movie data stored in the object by interacting with the webpage.

Planning
To begin the project, I will plan out the necessary steps and structure of the code.

- Set up the project directory and create the HTML and JavaScript files.
- Establish the HTML structure by creating container and section elements.
- Decide how to display the movie data within the section element.

Building

- Define the movie data object in the JavaScript file.
- Use DOM manipulation techniques to access the necessary HTML elements.
- Dynamically create HTML elements to display the movie details within the section element.
- Add event listeners to the sorting elements and handle the sorting logic in JavaScript.
- Update the DOM to reflect the sorted order of the movies.
- Create a form in the HTML file to allow users to update the movie data.
- Attach an event listener to the form's submit button to handle the data update logic in JavaScript.
- Update the movie data object based on the user's input and reflect the changes in the DOM.

Debugging
While working on this project, I encountered a few challenges that I faced and the solutions I implemented:

1- Fitting the movie list details in the container: The content was extending beyond the container's boundaries, making it difficult to display the information properly. To overcome this, I experimented with adjusting the layout and applied CSS styling to ensure that the movie details are displayed within the designated container without any overflow issues.

2- Preventing overlapping with the footer when adding new movies: Whenever I added additional movies, the content would overlap and create a messy layout. To address this, I applied the CSS property overflow: auto to the section, which allowed the content to be scrollable when it exceeded the container's dimensions. This ensured that the footer remained visible and prevented any overlapping issues.


Throughout the development process, I tested the code multiple times:

- Use console.log() statements to track the flow of data and identify unexpected behaviors.
- Inspect the browser's developer console for error messages or warnings.
- Break down complex tasks into smaller parts and test each part individually.
- Validate the HTML markup and ensure proper syntax.
- Verify that all necessary files are correctly linked (e.g., JavaScript file in the HTML).
- Double-check variable names and function calls for typos or incorrect references.
- Test user interactions thoroughly and ensure the data is updated and displayed correctly.


