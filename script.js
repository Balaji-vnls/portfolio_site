// ----- Year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// ----- Theme handling (dark / light + remember)
const html = document.documentElement;
const toggle = document.getElementById('themeToggle');
const saved = localStorage.getItem('theme');
if (saved) html.setAttribute('data-theme', saved);
toggle.textContent = html.getAttribute('data-theme') === 'dark' ? '☀️' : '🌙';

toggle.addEventListener('click', () => {
  const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  toggle.textContent = next === 'dark' ? '☀️' : '🌙';
});

// ----- Reveal on scroll
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('show'); });
},{ threshold: 0.15 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
