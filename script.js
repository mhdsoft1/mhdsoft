document.getElementById('year').textContent = new Date().getFullYear();

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
