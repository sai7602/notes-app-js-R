import '../scss/components/_modal-form.scss';
import categories from './categories';
import createNote from './createNote';
import getDate from './getDate';

document.addEventListener('DOMContentLoaded', () => {
  const modalFormElement = document.getElementById('modal_form');
  const createNoteBtn = document.querySelector('.create-note');
  const data = JSON.parse(localStorage.getItem('list')) || [];
  // console.log(data);

  createNoteBtn.addEventListener('click', e => {
    modalForm(e);
  });

  const confirm = inputData => {
    console.log(inputData);
    const category = categories.filter(
      cat => cat.catId === inputData.categoryID
    );
    console.log(category);
    const record = {
      catId: category[0].catId,
      catName: category[0].catName,
      catImg: category[0].catImg,
      createDate: getDate(),
      content: inputData.contentInput,
      nameInput: inputData.nameInput,
      mode: inputData.mode,
    };
    data.push(record);
    localStorage.setItem('list', JSON.stringify(data));
    closeModal();
    renderPage();
  };

  const renderPage = () => {
    console.log(data);
    const renderData = data
      .map(
        rec => `
    ${createNote(rec)}

    `
      )
      .join('');
    const listOfTask = document.querySelector('.tableHeader');
    // listOfTask.innerHTML = '';
    listOfTask.insertAdjacentHTML('beforeend', renderData);
  };
  renderPage();
  const openModal = () => {
    document.querySelector('#btn-close').addEventListener('click', () => {
      closeModal();
    });
    document.querySelector('#btn-cancel').addEventListener('click', () => {
      closeModal();
    });

    document.querySelector('#btn-confirm').addEventListener('click', e => {
      e.preventDefault();
      const data = {
        categoryID: document.querySelector('#category').value,
        contentInput: document.querySelector('#contentInput').value,
        nameInput: document.querySelector('#nameInput').value,
        mode: 'add',
      };
      confirm(data);
    });
    document
      .getElementById('modal_form')
      .closest('.modal_overlay')
      .classList.add('active');
  };

  const closeModal = (e = false) => {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    document
      .getElementById('modal_form')
      .closest('.modal_overlay')
      .classList.remove('active');
    modalFormElement.innerHTML = '';
  };
  const optionList = categories
    .map(
      category =>
        `<option value="${category.catId}">${category.catName}</option>`
    )
    .join('');

  const modalForm = (e, mode) => {
    // if (!e.target.closest('.rawCommon')) {
    //   return false;
    // }
    const currentCardId = e.target.closest('.rawCommon');
    const closeSVG = require('../images/close-svgrepo-com.svg');
    console.log(currentCardId);
    console.log(e);
    const title = mode === 'add' ? 'Add note' : 'Edit note';

    const form_html = `
    <form class="form">
    <h3>${title}</h3>
        <button type="button" class="btn-close" id="btn-close">
          <img src="${closeSVG}" width="32" height="32" alt="close" />
        </button>
        <div class="input-container">
            <label>
              Note Name
              <input
                type="text"
                name="notes-name"
                id="nameInput"
                placeholder="Input note name" required
              />
            </label>

            <label>
              Content
              <textarea
                type="text"
                name="notes-name"
                id="contentInput"
                placeholder="Input note name" required
              ></textarea>
            </label>

          <select id="category" name="category">
            ${optionList}
          </select>
        </div>
        <div class="form__btn-list">
          <button

            id="btn-cancel"
            class="form-button form-btn"
            type="button"
          >
            Cancel
          </button>
          <button

            id="btn-confirm"
            class="form-button form-btn"
            type="submit"
          >
            Confirm
          </button>
        </div>
      </form>
    `;
    // console.log(form_html);

    modalFormElement.innerHTML = form_html;
    // console.log(modalFormElement);
    // console.dir(document.querySelector('#category'));
    // console.log(e);
    // document.querySelector('#category').value;

    openModal(data);
  };
  // console.log(modalForm());
  // document.addEventListener('click', modalForm);
  document
    .querySelector('.tableHeader')
    .addEventListener('click', e => modalForm(e, 'edit'));
  var btn = document.querySelector('.create-note');
  btn.addEventListener('click', e => {
    console.log('first');
    modalForm(e, 'add');
    // console.log(modalForm());
    // modal.style.display = 'block';
  });

  document.addEventListener('click', e => {
    if (e.target.classList.contains('modal_overlay')) {
      closeModal();
    }
  });

  document.addEventListener('click', e => {
    if (e.target.classList.contains('modal_overlay')) {
      closeModal();
    }
  });

  document.addEventListener('keydown', e => {
    if (e.code === 'Escape') {
      closeModal();
    }
  });
});
