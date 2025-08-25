// Portfolio.js

// Set current year in footer
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('year').textContent = new Date().getFullYear();

  // Toggle contact links
  const btn = document.getElementById('toggle-button');
  const links = document.getElementById('links-block');
  btn.addEventListener('click', () => {
    links.classList.toggle('hidden');
    btn.textContent = links.classList.contains('hidden') ? 'Click Me!' : 'Hide Links';
  });
});
