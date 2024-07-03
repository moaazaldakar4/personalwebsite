document.addEventListener('DOMContentLoaded', () => {
    const sr = ScrollReveal({
      reset: true,
      distance: '80px',
      duration: 1500,
      delay: 20,
    });
  
    sr.reveal('.home-content, .heading', { origin: 'top' });
    sr.reveal('.home-image, .services-container, .portfolio-box, .contact', { origin: 'bottom' });
    sr.reveal('.home-content h1, .about-image', { origin: 'left' });
    sr.reveal('.about-content p, .about-content, .about-content h3', { origin: 'right' });
  
    // Rest of your JavaScript code
  });
  const typed = new Typed('.text', {
    strings: [
      
      'Moaaz Hani El Dakar is a creative graphic designer and web developer known for crafting unique logos, engaging PowerPoint presentations, eye-catching advertising posters, professional banners, and distinctive business cards. With skills in creating captivating promotional videos, he helps businesses effectively promote their products and services. Moaaz is dedicated to delivering high-quality designs that align with clients` visions and resonate with their target audiences.'
    ],
    typeSpeed: 5
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
  