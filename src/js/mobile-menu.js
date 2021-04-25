(() => {
  const refs = {
    burgerBtn: document.querySelector('[mobile-menu-burger]'),
    closeBtn: document.querySelector('[mobile-menu-close]'),
    menu: document.querySelector('[mobile-menu-visibility]'),
    bodyOverflow: document.querySelector('[overflow-body]'),
  };

  refs.burgerBtn.addEventListener('click', toggleMenu);
  refs.closeBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('menu--hidden');
    refs.bodyOverflow.classList.toggle('overflow--blocked');
  }
})();