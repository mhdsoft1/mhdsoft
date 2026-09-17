const CONTACT_EMAIL = 'mhdglobalventures@gmail.com';

document.getElementById('year').textContent = new Date().getFullYear();

const TECH_STACK = [
  { name: 'Odoo', bg: '#714B67', icon: '<circle cx="12" cy="12" r="7" fill="none" stroke="#fff" stroke-width="2"/>' },
  { name: 'Python', bg: '#3776AB', icon: '<path d="M8 4h5a3 3 0 0 1 3 3v2H9a3 3 0 0 0-3 3v2H4a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h4z" fill="#FFD43B" transform="translate(1 0) scale(0.72)"/><path d="M16 20h-5a3 3 0 0 1-3-3v-2h7a3 3 0 0 0 3-3V10h2a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3h-4z" fill="#fff" transform="translate(1 0) scale(0.72)"/>' },
  { name: 'Django', bg: '#0C4B33', icon: '<path d="M6 4h4v13a4 4 0 0 1-4 4 5 5 0 0 1-3-1l1-2a3 3 0 0 0 2 1c1 0 1-1 1-2V4Z" fill="#fff"/><path d="M13 8h4v8a4 4 0 0 1-4 4h-1v-3h1a1 1 0 0 0 1-1V11h-1V8Z" fill="#44B78B"/>' },
  { name: 'React', bg: '#0B1330', icon: '<circle cx="12" cy="12" r="2" fill="#61DAFB"/><ellipse cx="12" cy="12" rx="9" ry="3.6" fill="none" stroke="#61DAFB" stroke-width="1.4"/><ellipse cx="12" cy="12" rx="9" ry="3.6" fill="none" stroke="#61DAFB" stroke-width="1.4" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="9" ry="3.6" fill="none" stroke="#61DAFB" stroke-width="1.4" transform="rotate(120 12 12)"/>' },
  { name: 'Node.js', bg: '#333333', icon: '<path d="M12 2 21 7v10l-9 5-9-5V7Z" fill="none" stroke="#83CD29" stroke-width="1.6"/><text x="12" y="15" text-anchor="middle" font-size="7" fill="#83CD29" font-family="sans-serif">JS</text>' },
  { name: 'Flutter', bg: '#02569B', icon: '<polygon points="6,13 13,6 18,6 9,15" fill="#fff"/><polygon points="9,15 18,15 13,20 9,20" fill="#42A5F5"/>' },
  { name: 'PostgreSQL', bg: '#336791', icon: '<ellipse cx="12" cy="7" rx="6" ry="3" fill="none" stroke="#fff" stroke-width="1.5"/><path d="M6 7v9a6 3 0 0 0 12 0V7" fill="none" stroke="#fff" stroke-width="1.5"/>' },
  { name: 'TensorFlow', bg: '#FF6F00', icon: '<circle cx="6" cy="6" r="2" fill="#fff"/><circle cx="18" cy="6" r="2" fill="#fff"/><circle cx="12" cy="12" r="2" fill="#fff"/><circle cx="6" cy="18" r="2" fill="#fff"/><circle cx="18" cy="18" r="2" fill="#fff"/><path d="M6 6 12 12 6 18M18 6 12 12 18 18" stroke="#fff" stroke-width="1.4" fill="none"/>' },
  { name: 'Arduino', bg: '#00878F', icon: '<circle cx="8" cy="12" r="4" fill="none" stroke="#fff" stroke-width="1.6"/><circle cx="16" cy="12" r="4" fill="none" stroke="#fff" stroke-width="1.6"/>' },
  { name: 'Raspberry Pi', bg: '#A22846', icon: '<circle cx="9" cy="9" r="3" fill="#fff"/><circle cx="15" cy="9" r="3" fill="#fff"/><circle cx="7" cy="15" r="3" fill="#fff"/><circle cx="12" cy="17" r="3" fill="#fff"/><circle cx="17" cy="15" r="3" fill="#fff"/>' }
];

const marqueeTrack = document.getElementById('marqueeTrack');
if (marqueeTrack) {
  const badgeHTML = TECH_STACK.map(t =>
    `<span class="tech-badge"><span class="tech-icon" style="background:${t.bg}"><svg viewBox="0 0 24 24">${t.icon}</svg></span><span>${t.name}</span></span>`
  ).join('');
  marqueeTrack.innerHTML = badgeHTML + badgeHTML;
}

const header = document.getElementById('siteHeader');
const progressBar = document.getElementById('progressBar');
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 20);

  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  progressBar.style.width = pct + '%';

  backToTop.classList.toggle('show', scrollTop > 500);
});

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

const typedWord = document.getElementById('typedWord');
if (typedWord) {
  const words = ['Software', 'ERP', 'AI', 'Robotics', 'IoT'];
  let wi = 0;
  setInterval(() => {
    wi = (wi + 1) % words.length;
    typedWord.style.opacity = 0;
    setTimeout(() => {
      typedWord.textContent = words[wi];
      typedWord.style.opacity = 1;
    }, 250);
  }, 2200);
  typedWord.style.transition = 'opacity .25s ease';
}

const burger = document.getElementById('burgerBtn');
const navLinks = document.getElementById('navLinks');
burger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => navLinks.classList.remove('open'));
});

const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
revealEls.forEach(el => observer.observe(el));

const processFill = document.getElementById('processFill');
const firstStep = document.querySelector('.process-step');
if (processFill && firstStep) {
  const stepObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        processFill.style.width = '100%';
        stepObserver.disconnect();
      }
    });
  }, { threshold: 0.3 });
  stepObserver.observe(firstStep);
}

const contactForm = document.getElementById('contactForm');
if (contactForm) {
  const nameField = document.getElementById('cf-name');
  const emailField = document.getElementById('cf-email');
  const messageField = document.getElementById('cf-message');
  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function setInvalid(field, invalid) {
    field.closest('.form-field').classList.toggle('invalid', invalid);
  }

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const nameOk = nameField.value.trim().length > 0;
    const emailOk = emailRe.test(emailField.value.trim());
    const messageOk = messageField.value.trim().length > 0;

    setInvalid(nameField, !nameOk);
    setInvalid(emailField, !emailOk);
    setInvalid(messageField, !messageOk);

    if (!nameOk || !emailOk || !messageOk) return;

    const type = document.getElementById('cf-type').value;
    const subject = encodeURIComponent(`New project inquiry: ${type} - ${nameField.value.trim()}`);
    const body = encodeURIComponent(
      `Name: ${nameField.value.trim()}\nEmail: ${emailField.value.trim()}\nProject type: ${type}\n\nMessage:\n${messageField.value.trim()}`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  });

  [nameField, emailField, messageField].forEach(f => {
    f.addEventListener('input', () => setInvalid(f, false));
  });
}
