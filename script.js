// === THEME TOGGLE ===
const themeBtn = document.getElementById('themeButton');
const icon = document.getElementById('icon');
const savedTheme = localStorage.getItem('theme') || 'light';

document.body.classList.add(`${savedTheme}-mode`);
icon.classList.add(savedTheme === 'light' ? 'fa-moon' : 'fa-sun');

themeBtn.addEventListener('click', () => {
  const isDark = document.body.classList.contains('dark-mode');
  document.body.classList.toggle('dark-mode', !isDark);
  document.body.classList.toggle('light-mode', isDark);
  icon.classList.toggle('fa-sun', !isDark);
  icon.classList.toggle('fa-moon', isDark);
  localStorage.setItem('theme', !isDark ? 'dark' : 'light');
});

// === SCROLL REVEAL ===
const revealElements = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      obs.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1,
});
revealElements.forEach(el => observer.observe(el));

// === FORM HANDLER ===
 function sendMail() {
    let parms = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      subject: document.getElementById("subject").value,
      message: document.getElementById("message").value
    };

    emailjs.send("service_ddphvhk", "template_juubyxt", parms).then(alert("Email sent..!!!"))
 }

  const themeToggleBtn = document.getElementById('theme-toggle');
  themeToggleBtn.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('dark-mode');
    const icon = themeToggleBtn.querySelector('i');
    icon.setAttribute('data-lucide', isDark ? 'sun' : 'moon');
    lucide.createIcons();
  });

  lucide.createIcons();
  
// Back to top
