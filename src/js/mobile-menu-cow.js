(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open-cow]'),
    closeModalBtn: document.querySelector('[data-modal-close-cow]'),
    modal: document.querySelector('[data-modal-cow]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden-cow');
  }
})();
