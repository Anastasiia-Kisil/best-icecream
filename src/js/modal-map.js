(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open-map]'),
    closeModalBtn: document.querySelector('[data-modal-close-map]'),
    modal: document.querySelector('[data-modal-map]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden-map');
  }
})();