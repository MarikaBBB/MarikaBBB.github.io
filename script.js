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

const avatarContainer = document.getElementById('avatar-container');
avatarContainer.addEventListener('click', animateAvatar);
avatarContainer.addEventListener('mouseleave', resetAvatar);

