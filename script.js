const toggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('mobile-menu');
  const close = document.getElementById('menu-close');

  toggle.addEventListener('click', () => {
    menu.classList.add('show');
  });

  close.addEventListener('click', () => {
    menu.classList.remove('show');
  });

  const links = document.querySelectorAll('.menu-link');
  links.forEach(link => {
    link.addEventListener('click', () => {
      const targetId = link.getAttribute('data-target');
      const submenu = document.getElementById(targetId);

      // Close other open submenus
      document.querySelectorAll('.submenu').forEach(sm => {
        if (sm !== submenu) sm.classList.remove('show');
      });
      document.querySelectorAll('.menu-link').forEach(btn => {
        if (btn !== link) btn.classList.remove('active');
      });

      // Toggle this one
      submenu.classList.toggle('show');
      link.classList.toggle('active');
    });
  });

