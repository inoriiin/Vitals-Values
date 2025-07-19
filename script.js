// script.js
// Reveal cards as you scroll

document.addEventListener('DOMContentLoaded', function () {
  const cards = document.querySelectorAll('.vital-card');

  function revealCards() {
    const triggerBottom = window.innerHeight * 0.85;
    cards.forEach(card => {
      const cardTop = card.getBoundingClientRect().top;
      if (cardTop < triggerBottom) {
        card.classList.add('show');
      }
    });
  }

  window.addEventListener('scroll', revealCards);
  revealCards(); // Initial check
});
