// Select all carousel containers
const carouselContainers = document.querySelectorAll('.carousel-container');

// Loop through each carousel container
carouselContainers.forEach(container => {
  // Get carousel and project elements within the container
  const carousel = container.querySelector('.carousel');
  const projects = container.querySelectorAll('.project-container');

  // Calculate project and carousel width and count
  const projectWidth = projects[0].offsetWidth;
  const carouselWidth = carousel.offsetWidth;
  const projectsCount = projects.length;

  let currentPosition = 0;

  // Function to animate the carousel
  const animateCarousel = () => {
    carousel.style.transform = `translateX(-${currentPosition}px)`;
  };

  // Function to slide the carousel to the right
  const slideRight = () => {
    currentPosition += projectWidth;
    if (currentPosition > (projectsCount - 1) * projectWidth) {
      currentPosition = 0;
    }
    animateCarousel();
  };

  // Function to slide the carousel to the left
  const slideLeft = () => {
    currentPosition -= projectWidth;
    if (currentPosition < 0) {
      currentPosition = (projectsCount - 1) * projectWidth;
    }
    animateCarousel();
  };

  // Set interval to automatically slide the carousel to the right every 5 seconds
  setInterval(slideRight, 5000);

  // Set the animation duration of the carousel
  document.querySelector('.carousel').style.animationDuration = '40s';

  // Pause the carousel animation on mouseenter
  container.addEventListener('mouseenter', () => {
    carousel.style.animationPlayState = 'paused';
  });

  // Resume the carousel animation on mouseleave
  container.addEventListener('mouseleave', () => {
    carousel.style.animationPlayState = 'running';
  });
});



