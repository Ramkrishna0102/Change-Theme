// const toggle = document.getElementById('menu-toggle');
//   const menu = document.getElementById('mobile-menu');
//   const close = document.getElementById('menu-close');

//   toggle.addEventListener('click', () => {
//     menu.classList.add('show');
//   });

//   close.addEventListener('click', () => {
//     menu.classList.remove('show');
//   });

//   const links = document.querySelectorAll('.menu-link');
//   links.forEach(link => {
//     link.addEventListener('click', () => {
//       const targetId = link.getAttribute('data-target');
//       const submenu = document.getElementById(targetId);

//       // Close other open submenus
//       document.querySelectorAll('.submenu').forEach(sm => {
//         if (sm !== submenu) sm.classList.remove('show');
//       });
//       document.querySelectorAll('.menu-link').forEach(btn => {
//         if (btn !== link) btn.classList.remove('active');
//       });

//       // Toggle this one
//       submenu.classList.toggle('show');
//       link.classList.toggle('active');
//     });
//   });


// ✅ Mobile Menu Toggle




document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const overlay = document.createElement('div');
  overlay.classList.add('overlay');

  // Append overlay to body
  document.body.appendChild(overlay);

  menuToggle.addEventListener('click', function () {
    mobileMenu.classList.toggle('open');
    overlay.classList.toggle('open');
  });

  overlay.addEventListener('click', function () {
    mobileMenu.classList.remove('open');
    overlay.classList.remove('open');
  });

  // Toggle submenu
  document.querySelectorAll('.menu-link').forEach(button => {
    button.addEventListener('click', function () {
      const target = this.getAttribute('data-target');
      const submenu = document.getElementById(target);
      submenu.classList.toggle('show');
      this.classList.toggle('active');
    });
  });
});



// animation 1 





const rings = [
  {
    src: 'images/img54.webp',
    name: 'Pave',
    price: 2500,
    discount: 5,
    code: 'LOVE05'
  },
  {
    src: 'images/img53.webp',
    name: ' Hidden Halo',
    price: 4500,
    discount: 20,
    code: 'LOVE20'
  },
  {
    src: 'images/img55.webp',
    name: 'Vintage & Antique',
    price: 3500,
    discount: 10,
    code: 'LOVE10'
  }
];

const getRingData = (imgSrc) => {
  const filename = imgSrc.split('/').pop();
  return rings.find(r => r.src.split('/').pop() === filename);
};

const bgText = document.querySelector('.hero-bg-text');
const title = document.querySelector('.hero h1');
const price = document.querySelector('.hero-price');
const offer = document.querySelector('.hero-offer');
const hero = document.querySelector('.hero');
const frame = document.querySelector('.rings-frame');

frame.addEventListener('click', (e) => {
  if (hero.classList.contains('transitioning')) return;
  const ring = e.target.closest('.ring');
  if (!ring) return;

  const isLeft = ring.classList.contains('left');
  const isRight = ring.classList.contains('right');
  const isCenter = ring.classList.contains('center');
  let newCenterData;

  if (isLeft) {
    const oldLeft = document.querySelector('.ring.left');
    newCenterData = getRingData(oldLeft.querySelector('img').src);
    const oldCenter = document.querySelector('.ring.center');
    const oldRight = document.querySelector('.ring.right');
    oldLeft.classList.remove('left');
    oldLeft.classList.add('center');
    oldCenter.classList.remove('center');
    oldCenter.classList.add('right');
    oldRight.classList.remove('right');
    oldRight.classList.add('left');
  } else if (isRight) {
    const oldRight = document.querySelector('.ring.right');
    newCenterData = getRingData(oldRight.querySelector('img').src);
    const oldCenter = document.querySelector('.ring.center');
    const oldLeft = document.querySelector('.ring.left');
    oldRight.classList.remove('right');
    oldRight.classList.add('center');
    oldCenter.classList.remove('center');
    oldCenter.classList.add('left');
    oldLeft.classList.remove('left');
    oldLeft.classList.add('right');
  } else if (isCenter) {
    const oldCenter = document.querySelector('.ring.center');
    newCenterData = getRingData(oldCenter.querySelector('img').src);
    const oldRight = document.querySelector('.ring.right');
    const oldLeft = document.querySelector('.ring.left');
    oldCenter.classList.remove('center');
    oldCenter.classList.add('right');
    oldRight.classList.remove('right');
    oldRight.classList.add('left');
    oldLeft.classList.remove('left');
    oldLeft.classList.add('center');
  }

  hero.classList.add('transitioning');
  setTimeout(() => {
    bgText.style.transition = 'none';
    title.style.transition = 'none';
    price.style.transition = 'none';
    offer.style.transition = 'none';
    bgText.textContent = newCenterData.name;
    title.textContent = newCenterData.name;
    price.textContent = `$${newCenterData.price}`;
    offer.innerHTML = `Take ${newCenterData.discount}% off for a limited time.<br>Use Code: <b>${newCenterData.code}</b>`;

    requestAnimationFrame(() => {
      bgText.style.transition = '';
      title.style.transition = '';
      price.style.transition = '';
      offer.style.transition = '';
      hero.classList.remove('transitioning');
    });
  }, 550);
});















//end















































document.addEventListener('DOMContentLoaded', function() {
  const diamondSwiper = new Swiper('.diamondSwiper', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 7, // always 7 visible on desktop
    loop: true,
    coverflowEffect: {
      rotate: 25,    // more pronounced fan
      stretch: 0,
      depth: 230,    // deeper 3D
      modifier: 1.1,
      slideShadows: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: false, // disables auto sliding
    breakpoints: {
      0: { slidesPerView: 1 },
      480: { slidesPerView: 3 },
      900: { slidesPerView: 5 },
      1400: { slidesPerView: 7 }
    }
  });

  // Center slide on click
  document.querySelectorAll('.diamondSwiper .swiper-slide').forEach((slide, idx) => {
    slide.addEventListener('click', function() {
      const realIndex = diamondSwiper.slides[idx].getAttribute('data-swiper-slide-index')
        ? parseInt(diamondSwiper.slides[idx].getAttribute('data-swiper-slide-index'))
        : idx;
      diamondSwiper.slideToLoop(realIndex);
    });
  });

  // Stop autoplay on pagination (not needed since autoplay is false)
});