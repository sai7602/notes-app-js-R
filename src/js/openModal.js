import closeModal from './closeModal';
import confirm from './confirm/addConfirm';
import confirmEdit from './confirm/editConfirm';
import confirmDelete from './confirm/deleteConfirm';
import confirmArchive from './confirm/confirmArchive';
const openModal = ({ mode, id = 0, data }) => {
  document.querySelector('#btn-close').addEventListener('click', () => {
    closeModal();
  });
  document.querySelector('#btn-cancel').addEventListener('click', () => {
    closeModal();
  });
  if (mode === 'edit') {
    document.querySelector('#btn-confirm-edit').addEventListener('click', e => {
      e.preventDefault();
      const editedData = {
        categoryID: document.querySelector('#category').value,
        contentInput: document.querySelector('#contentInput').value,
        nameInput: document.querySelector('#nameInput').value,
        mode: 'edit',
        id,
      };
      confirmEdit(editedData, data);
    });
  } else if (mode === 'deleted') {
    document
      .querySelector('#btn-confirm-deleted')
      .addEventListener('click', e => {
        e.preventDefault();
        const editedData = {
          id,
        };
        confirmDelete(editedData, data);
      });
  } else if (mode === 'archived') {
    document
      .querySelector('#btn-confirm-archived')
      .addEventListener('click', e => {
        e.preventDefault();
        const editedData = {
          archived: true,
          mode: 'archived',
          id,
        };
        confirmArchive(editedData, data);
      });
  } else {
    document.querySelector('#btn-confirm').addEventListener('click', e => {
      e.preventDefault();
      const editData = {
        categoryID: document.querySelector('#category').value,
        contentInput: document.querySelector('#contentInput').value,
        nameInput: document.querySelector('#nameInput').value,
        mode: 'add',
      };
      confirm(editData, data);
    });
  }

  document
    .getElementById('modal_form')
    .closest('.modal_overlay')
    .classList.add('active');
};

export default openModal;
