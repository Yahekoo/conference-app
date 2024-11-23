window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const section2 = document.querySelector('.home-section2');
    const section2Top = section2.offsetTop;
  
    // Applique l'effet de flou si on a défilé jusqu'à la section 2
    if (window.scrollY >= section2Top) {
      navbar.classList.add('navbar-blur');
    } else {
      navbar.classList.remove('navbar-blur');
    }
  });