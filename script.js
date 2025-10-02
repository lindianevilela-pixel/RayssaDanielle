// Espera o DOM carregar
document.addEventListener("DOMContentLoaded", function() {

  // ====== MENU MOBILE ======
  const menuToggle = document.getElementById("menuToggle");
  const mobileMenu = document.getElementById("mobileMenu");
  const closeMenu = document.getElementById("closeMenu");
  const links = mobileMenu.querySelectorAll("a");

  // Abrir menu
  menuToggle.addEventListener("click", () => {
    mobileMenu.classList.add("active");
  });

  // Fechar menu
  closeMenu.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
  });

  // Fechar ao clicar em link
  links.forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("active");
    });
  });


  // ====== CAROUSEL HORIZONTAL ======
  const carousel = document.querySelector('.carousel');
  const fotos = document.querySelectorAll('.carousel img');
  const btnEsquerda = document.querySelector('.seta-esquerda');
  const btnDireita = document.querySelector('.seta-direita');

  let index = 0;

  function mostrarImagem() {
    const largura = fotos[0].offsetWidth + 20; // largura da imagem + margem
    carousel.style.transform = `translateX(${-index * largura}px)`;
  }

  btnDireita.addEventListener('click', () => {
    index = (index + 1) % fotos.length;
    mostrarImagem();
  });

  btnEsquerda.addEventListener('click', () => {
    index = (index - 1 + fotos.length) % fotos.length;
    mostrarImagem();
  });

  window.addEventListener('resize', mostrarImagem);

  // Swipe mobile
  let startX = 0;

  carousel.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
  });

  carousel.addEventListener('touchend', (e) => {
    let endX = e.changedTouches[0].clientX;
    if (startX - endX > 50) {
      index = (index + 1) % fotos.length;
      mostrarImagem();
    } else if (endX - startX > 50) {
      index = (index - 1 + fotos.length) % fotos.length;
      mostrarImagem();
    }
  });


  // ====== LIGHTBOX ======
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.querySelector('.lightbox-img');
  const fechar = document.querySelector('.fechar');

  fotos.forEach(img => {
    img.addEventListener('click', () => {
      lightbox.style.display = 'flex';
      lightboxImg.src = img.src;
    });
  });

  fechar.addEventListener('click', () => {
    lightbox.style.display = 'none';
  });

  lightbox.addEventListener('click', (e) => {
    if (e.target !== lightboxImg) {
      lightbox.style.display = 'none';
    }
  });

});
