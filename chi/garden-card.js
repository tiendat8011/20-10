(() => {
  'use strict';

  const card = document.getElementById('wishCard');
  const reading = document.getElementById('cardReading');
  const status = document.getElementById('cardStatus');

  card.addEventListener('close', () => {
    reading.hidden = false;
    card.setAttribute('aria-labelledby', 'cardTitle');
    card.scrollTop = 0;
    status.textContent = '';
  });
})();
