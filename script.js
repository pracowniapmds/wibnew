const cards = document.querySelectorAll('.service-card');
const summaryService = document.getElementById('summaryService');
const form = document.getElementById('bookingForm');
const status = document.getElementById('formStatus');

cards.forEach((card) => {
  card.addEventListener('click', () => {
    cards.forEach((c) => c.classList.remove('service-card--active'));
    card.classList.add('service-card--active');
    summaryService.textContent = card.dataset.service;
  });
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  status.textContent = 'Dziękujemy! Rezerwacja została zapisana. Potwierdzenie wysłaliśmy e-mailem.';
  form.reset();
});
