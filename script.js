// Add click event listeners to topnav buttons to handle smooth scrolling
document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('.topnav .nav-link');
  
  // Function to handle click event on topnav buttons
  function handleClick(event) {
    event.preventDefault();

    // Remove active class from all nav links
    navLinks.forEach(link => {
      link.classList.remove('active');
    });

    // Add active class to the clicked button
    this.classList.add('active');

    // Scroll to the linked section
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' }); 
  }

  // Attach click event listeners to topnav buttons
  navLinks.forEach(link => {
    link.addEventListener('click', handleClick);
  });
});

// Get the necessary elements
const carouselWrapper = document.querySelector('.carousel-wrapper');
const projectContainers = document.querySelectorAll('.project-container');

// Duplicate project containers and append them to the carousel wrapper
const duplicatedContainers = Array.from(projectContainers).map(container => container.cloneNode(true));
duplicatedContainers.forEach(container => carouselWrapper.appendChild(container));

// Set the initial slide index
let slideIndex = 0;
const slideWidth = projectContainers[0].offsetWidth + parseInt(getComputedStyle(projectContainers[0]).marginRight);
const totalSlides = projectContainers.length;

// Initialize the carousel position
carouselWrapper.style.transform = `translate3d(-${slideIndex * slideWidth}px, 0, 0)`;

// Function to move the carousel to the next slide
function nextSlide() {
  slideIndex++;
  carouselWrapper.style.transition = 'transform 0.5s ease-in-out';
  carouselWrapper.style.transform = `translate3d(-${slideIndex * slideWidth}px, 0, 0)`;

  // Move to the first slide instantly when reaching the cloned last slide
  if (slideIndex === totalSlides) {
    setTimeout(() => {
      carouselWrapper.style.transition = 'none';
      carouselWrapper.style.transform = `translate3d(0, 0, 0)`;
      slideIndex = 0;
    }, 500);
  }
}

// Function to move the carousel to the previous slide
function prevSlide() {
  if (slideIndex === 0) {
    slideIndex = totalSlides;
    carouselWrapper.style.transition = 'none';
    carouselWrapper.style.transform = `translate3d(-${slideIndex * slideWidth}px, 0, 0)`;
  }

  slideIndex--;
  carouselWrapper.style.transition = 'transform 0.5s ease-in-out';
  carouselWrapper.style.transform = `translate3d(-${slideIndex * slideWidth}px, 0, 0)`;
}

// Get the arrow navigation elements
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

// Add click event listeners to the arrow navigation buttons
prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);

// Function to check if the element is in the viewport
let isAnimating = false;

function animateAvatar() {
  if (isAnimating) {
    return; // Prevent animation if it's already in progress
  }
  
  isAnimating = true;

  const avatar1 = document.getElementById('avatar1');
  const avatar2 = document.getElementById('avatar2');
  const avatar3 = document.getElementById('avatar3');

  avatar1.classList.add('hidden');
  avatar2.classList.remove('hidden');

  setTimeout(() => {
    avatar2.classList.add('hidden');
    avatar3.classList.remove('hidden');
  }, 800); 

  setTimeout(() => {
    resetAvatar();
    isAnimating = false;
  }, 2000); 
}

function resetAvatar() {
  const avatar1 = document.getElementById('avatar1');
  const avatar2 = document.getElementById('avatar2');
  const avatar3 = document.getElementById('avatar3');

  avatar1.classList.remove('hidden');
  avatar2.classList.add('hidden');
  avatar3.classList.add('hidden');
}

const avatar = document.getElementById('avatar1');
const avatarContainer = document.getElementById('avatar-container');

avatar.addEventListener('click', () => {
  avatar.classList.toggle('animate');
  animateAvatar(); // Call the animateAvatar function
});

document.addEventListener("DOMContentLoaded", function() {
  // Get the position of the About Me section
  const aboutSection = document.getElementById("about-section");
  const aboutSectionTop = aboutSection.offsetTop;
  const aboutSectionBottom = aboutSectionTop + aboutSection.offsetHeight;

  // Get the speech bubble element
  const speechBubble2 = document.getElementById("speech-bubble2");

  // Function to check if the user is in the About Me section
  function checkIfInAboutSection() {
    const currentScroll = window.scrollY;

    if (currentScroll >= aboutSectionTop && currentScroll <= aboutSectionBottom) {
      speechBubble2.classList.remove("hidden");
    } else {
      speechBubble2.classList.add("hidden");
    }
  }

  // Event listener for scroll event
  window.addEventListener("scroll", checkIfInAboutSection);
});


// Event listener to the "Start My Story" button
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('start-story-btn').addEventListener('click', function() {
    document.getElementById('image-map-section').scrollIntoView({ behavior: 'smooth' });
  });
});

// Initialize flag icons and close buttons
const flagIcons = document.querySelectorAll('.flag-icon');
const closeButtons = document.querySelectorAll('.popup .close');

// Function to open the hover box
function openHoverBox(country) {
  const hoverBox = document.querySelector('.hover-box');
  const title = document.getElementById('location-title');
  const description = document.getElementById('location-description');

  // Set the title and description based on the selected country
  switch (country) {
    case 'Italy':
      title.textContent = 'Italy';
      description.textContent = 'Information about Italy.';
      break;
    case 'England':
      title.textContent = 'England';
      description.textContent = 'Information about England.';
      break;
    case 'Spain':
      title.textContent = 'Spain';
      description.textContent = 'Information about Spain.';
      break;
    case 'Japan':
      title.textContent = 'Japan';
      description.textContent = 'Information about Japan.';
      break;
    case 'England2':
      title.textContent = 'England2';
      description.textContent = 'Information about England2.';
      break;
    default:
      title.textContent = '';
      description.textContent = '';
  }

  // Show the hover box with animation
  hoverBox.style.opacity = '1';
  hoverBox.style.visibility = 'visible';
  hoverBox.style.top = '0';

  // Add event listener to close the hover box
  hoverBox.addEventListener('click', function (event) {
    if (event.target === hoverBox) {
      closeHoverBox();
    }
  });
}

// Function to close the hover box
function closeHoverBox() {
  const hoverBox = document.querySelector('.hover-box');

  // Hide the hover box with animation
  hoverBox.style.opacity = '0';
  hoverBox.style.visibility = 'hidden';
  hoverBox.style.top = '-100px';
}

// Close the hover box when clicking outside it
document.addEventListener('click', function (event) {
  const hoverBox = document.querySelector('.hover-box');
  const targetElement = event.target;

  if (!hoverBox.contains(targetElement) && !Array.from(flagIcons).includes(targetElement)) {
    closeHoverBox();
  }
});

// Function to open the pop-up window
function openPopup(country) {
  const popup = document.querySelector(`.popup[data-country="${country}"]`);
  popup.classList.add('show');

  // Remove selected class and pink class from all flag icons and number circles
  flagIcons.forEach(function (flagIcon) {
    flagIcon.classList.remove('selected');
    flagIcon.querySelector('.number-circle').classList.remove('pink');
  });

  // Highlight the selected flag and change the number circle color
  const selectedFlag = document.querySelector(`.flag-icon[data-country="${country}"]`);
  const numberCircle = selectedFlag.querySelector('.number-circle');

  selectedFlag.classList.add('selected');
  numberCircle.classList.add('pink');
}

// Function to close the pop-up window
function closePopup() {
  const openPopup = document.querySelector('.popup.show');
  if (openPopup) {
    openPopup.classList.remove('show');

    // Remove the selected flag and number circle color
    const selectedFlag = document.querySelector('.flag-icon.selected');
    const numberCircle = selectedFlag.querySelector('.number-circle');

    selectedFlag.classList.remove('selected');
    numberCircle.classList.remove('pink');
  }
}

// Get all the popup windows
const popups = document.querySelectorAll('.popup');

// Initialize the current popup index
let currentPopupIndex = 0;

// Function to show a popup window
function showPopup(index) {
  popups[index].classList.add('show');

  // Highlight the flag and change the number circle color
  const selectedFlag = document.querySelector(`.flag-icon[data-country="${popups[index].dataset.country}"]`);
  const numberCircle = selectedFlag.querySelector('.number-circle');

  selectedFlag.classList.add('selected');
  numberCircle.classList.add('pink');
}

// Function to hide a popup window
function hidePopup(index) {
  popups[index].classList.remove('show');

  // Remove the selected flag and number circle color
  const selectedFlag = document.querySelector('.flag-icon.selected');
  const numberCircle = selectedFlag.querySelector('.number-circle');

  selectedFlag.classList.remove('selected');
  numberCircle.classList.remove('pink');
}

// Add event listeners to the flag icons
flagIcons.forEach(function (flagIcon) {
  flagIcon.addEventListener('click', function () {
    const country = this.getAttribute('data-country');
    closePopup(); // Close any open pop-up windows
    openPopup(country); // Open the selected pop-up window
  });
});

// Add event listeners to close buttons in pop-up windows
closeButtons.forEach(function (closeButton) {
  closeButton.addEventListener('click', function () {
    const popup = this.parentNode;
    hidePopup(Array.from(popups).indexOf(popup)); // Close the current pop-up window
  });
});

// Get all the next buttons for pop-ups
const nextButtonsPopup = document.querySelectorAll('.nextButtonsPopup');

// Function to show the next popup
function showNextPopup() {
  hidePopup(currentPopupIndex); // Hide the current popup

  // Move to the next popup
  currentPopupIndex++;
  if (currentPopupIndex >= popups.length) {
    currentPopupIndex = 0;
  }

  showPopup(currentPopupIndex); // Show the next popup
}

// Add event listeners to the pop-up next buttons
nextButtonsPopup.forEach((button, index) => {
  button.addEventListener('click', showNextPopup);
});
