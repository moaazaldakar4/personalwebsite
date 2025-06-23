document.addEventListener('DOMContentLoaded', () => {
    const sr = ScrollReveal({
      reset: false,
      distance: '30px',
      duration: 800,
      delay: 10,
    });
  
    sr.reveal('.home-content, .heading', { origin: 'top' });
    sr.reveal('.home-image, .services-container, .portfolio-box, .contact', { origin: 'bottom' });
    sr.reveal('.home-content h1, .about-image', { origin: 'left' });
    sr.reveal('.about-content p, .about-content, .about-content h3', { origin: 'right' });
  
    // Rest of your JavaScript code
  });
  const typed = new Typed('.text', {
    strings: [
      
      'I am an AI enthusiast and front-end developer with a strong foundation in machine learning, deep learning, and data analysis. My work spans practical applications like audio classification, generative models for drug discovery, and intelligent puzzle solvers using constraint satisfaction. I’m also experienced in web technologies like HTML, CSS, JavaScript, React, and Streamlit, and I enjoy building clean, responsive interfaces that integrate smoothly with AI-powered backends,Beyond the technical side, I’m a disciplined and motivated learner who’s always pushing to improve. My passion for fitness mirrors my approach to work—consistent, focused, and goal-driven. Whether I’m solving complex neural network problems, cleaning multilingual datasets, or designing efficient database systems, I bring a growth mindset, strong communication skills, and a deep curiosity to everything I do.'
    ],
    typeSpeed: 6
  });
  const arabic = new Typed('.arabic', {
    strings: [
      '.مرحبا! , اسمي معاذ هاني الدكر ,و انا استطيع ان اتحدث العربية بطلاقة '
    ],
    typeSpeed: 80,
    backSpeed: 10,
    backDelay: 10000,
    loop: true,
  });
  const english = new Typed('.english', {
    strings: [
      'HI! , My Name Is Moaaz Hani AlDakar and I can speak English fluently.'
    ],
    typeSpeed: 70,
    backSpeed: 10,
    backDelay: 10000,
    loop: true,
  });
  const french = new Typed('.french', {
    strings: [
      'SALUT! , Je m &#180; appelle Moaaz Hani AlDakar et je parle un peu français.'
    ],
    typeSpeed: 70,
    backSpeed: 10,
    backDelay: 10000,
    loop: true,
  });
  const german = new Typed('.german', {
    strings: [
      'Hallo ! , Mein Name ist Moaaz Hani AlDakar und ich kann Deutsch sprechen.'
    ],
    typeSpeed: 70,
    backSpeed: 10,
    backDelay: 10000,
    loop: true,
  });
  const japanese = new Typed('.japan', {
    strings: [
      'こんにちは! 、私の名前はモアズ・ハニ・アルダカールです。日本語を話せます。'
    ],
    typeSpeed: 150,
    backSpeed: 10,
    backDelay: 10000,
    loop: true,
  });
  