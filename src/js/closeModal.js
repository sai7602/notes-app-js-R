const closeModal = (e = false) => {
  if (e) {
    e.stopPropagation();
    e.preventDefault();
  }
  const modalFormElement = document.getElementById('modal_form');
  document
    .getElementById('modal_form')
    .closest('.modal_overlay')
    .classList.remove('active');
  modalFormElement.innerHTML = '';
};
export default closeModal;
