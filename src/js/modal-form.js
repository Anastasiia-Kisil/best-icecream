(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-form-open]'),
    openModalMenuBtn: document.querySelector('[menu-data-modal-form-open]'),
    closeModalBtn: document.querySelector('[data-modal-form-close]'),
    modal: document.querySelector('[data-modal-form]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.openModalMenuBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);


  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
