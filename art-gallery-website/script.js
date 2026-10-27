// Gallery search and demo authentication form interactions.
document.addEventListener('DOMContentLoaded', () => {
  const search = document.querySelector('#art-search');
  if (search) {
    const cards = [...document.querySelectorAll('.searchable')];
    const noResults = document.querySelector('#no-results');
    search.addEventListener('input', () => {
      const query = search.value.trim().toLowerCase();
      let visible = 0;
      cards.forEach(card => {
        const match = card.textContent.toLowerCase().includes(query);
        card.hidden = !match;
        if (match) visible++;
      });
      if (noResults) noResults.hidden = visible !== 0;
    });
  }
  document.querySelectorAll('[data-auth-form]').forEach(form => {
    form.addEventListener('submit', event => {
      event.preventDefault();
      const message = form.querySelector('.form-message');
      if (message) message.textContent = 'This is a front-end demo. Connect a backend to create and verify accounts.';
    });
  });
});
