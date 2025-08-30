// Navigation toggle
const navToggle = document.getElementById('navToggle');
const navList = document.getElementById('navList');

navToggle?.addEventListener('click', () => {
  navList.classList.toggle('show');
});
