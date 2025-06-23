


/* ==========================scroll section active link======================= */
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navlinks.forEach((links) => {
        links.classList.remove('active');
        document
          .querySelector('header nav a[href*=' + id + ']')
          .classList.add('active');
      });
    }
  });

  /* ==========================sticky navbar========================== */
  let header = document.querySelector('header');

  header.classList.toggle('sticky', window.scrollY > 100);
};

/* ==========================remove toggle icon and navbar when click navbar link (scroll)========================== */
const closeNavbar = () => {
  menuicon.classList.remove('bx-x');
  navbar.classList.remove('active');
};

// Add event listener to each navigation link
navlinks.forEach((link) => {
  link.addEventListener('click', closeNavbar);
});

/* ==========================scroll reveal========================== */
ScrollReveal({
  reset: false,
  distance: '30px',
  duration:800,
  delay: 10,
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-image, .services-container, .portfolio-box, .contact', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-image', { origin: 'left' });
ScrollReveal().reveal('.about-content p, .about-content, .about-content h3', { origin: 'right' });

/* ==========================typed js========================== */
const typed = new Typed('.multi-text', {
  strings: ['AI Engineer', 'Web Developer'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});
