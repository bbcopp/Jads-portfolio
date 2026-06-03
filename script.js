const yearEl = document.getElementById("year");
yearEl.textContent = new Date().getFullYear();

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

// Basic fake submit (so it doesn’t refresh the page)
// Later you can connect this to Formspree / Netlify Forms / backend email.
const form = document.getElementById("contactForm");
const statusEl = document.getElementById("formStatus");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  statusEl.textContent = "✅ Message prepared! (Connect this form to send for real.)";
  form.reset();
});