const buttons = document.querySelectorAll('.toggle-description');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const description = button.parentNode.querySelector('.text');
    description.classList.toggle('hidden');
  });
});

