// Portfolio.js

// Set the current year in the footer
document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  console.log('Portfolio loaded successfully');
});
