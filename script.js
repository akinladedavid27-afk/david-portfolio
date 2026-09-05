const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');
const form = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

menuBtn.addEventListener('click', () => navLinks.classList.toggle('show'));
document.querySelectorAll('#navLinks a').forEach(link => link.addEventListener('click', () => navLinks.classList.remove('show')));

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.getElementById('name').value.trim();
  formMessage.textContent = `Thanks, ${name}! Your message has been received.`;
  form.reset();
});
