import '../scss/components/_modal-form.scss';
import categories from './categories';

import renderPage from './renderPage';
import addRecordModal from './addRecordModal';
import openModal from './openModal';
import initData from './initData';

document.addEventListener('DOMContentLoaded', () => {
  const modalFormElement = document.getElementById('modal_form');
  const createNoteBtn = document.querySelector('.create-note');
  const data = JSON.parse(localStorage.getItem('list')) || initData;
  const clearStorage = document.querySelector('.clear');

  try {
    clearStorage.addEventListener('click', () => {
      localStorage.removeItem('list');
      renderPage();
    });
    createNoteBtn.addEventListener('click', e => {
      modalForm(e);
    });
  } catch (error) {
    console.log(error);
  }

  renderPage();

  const closeModal = (e = false) => {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    document
      .getElementById('modal_form')
      .closest('.modal_overlay')
      .classList.remove('active');
    try {
      modalFormElement.innerHTML = '';
    } catch (error) {
      console.log(error);
    }
  };
  const optionList = (selected = '1') =>
    categories
      .map(category =>
        selected == category.catId
          ? `<option value="${category.catId}" selected>${category.catName}</option>`
          : `<option value="${category.catId}" >${category.catName}</option>`
      )
      .join('');

  const modalForm = (e, mode) => {
    let form_html = '';
    if (mode == 'add') {
      addRecordModal(optionList(), data);
    } else if (
      e.target.closest('[data-mode]') &&
      e.target.closest('[data-mode]').dataset.mode == 'edit'
    ) {
      const catId = data.filter(
        el => el.recordId == e.target.closest('[data-mode]').dataset.id
      )[0].catId;
      const closeSVG = require('../images/close-svgrepo-com.svg');
      const title = mode === 'add' ? 'Add note' : 'Edit note';
      const noteName =
        e.target.parentElement.parentElement.children[1].innerHTML;
      const contentInputValue =
        e.target.parentElement.parentElement.children[4].innerHTML;
      form_html = `
        <form class="form">
          <div>
            <h3 class="modal-title">${title}</h3>
            <button type="button" class="btn-close" id="btn-close">
              <img src="${closeSVG}" width="32" height="32" alt="close" />
            </button>
          </div>
          <div class="input-container">
            <label>
              Note Name
              <input
                type="text"
                name="notes-name"
                id="nameInput"
                value="${noteName}"
                placeholder="Input note name"
                required
              />
            </label>

            <label>
              Content
              <textarea
                type="text"
                name="notes-name"
                id="contentInput"
                placeholder="Input note name"
                required
              >
${contentInputValue}</textarea
              >
            </label>

            <select id="category" name="category">
              ${optionList(catId)}
            </select>
          </div>
          <div class="form__btn-list">
            <button id="btn-cancel" class="form-button form-btn" type="button">
              Cancel
            </button>
            <button
              id="btn-confirm-edit"
              class="form-button form-btn"
              type="submit"
            >
              Confirm
            </button>
          </div>
        </form>
      `;
      try {
        modalFormElement.innerHTML = form_html;
      } catch (error) {
        console.log(error);
      }
      const prop = {
        mode: 'edit',
        id: e.target.closest('[data-id]').dataset.id,
        data,
      };
      openModal(prop);
    } else if (
      e.target.closest('[data-mode]') &&
      (e.target.closest('[data-mode]').dataset.mode == 'delete' ||
        e.target.closest('[data-mode]').dataset.mode == 'archive')
    ) {
      const closeSVG = require('../images/close-svgrepo-com.svg');
      const title =
        e.target.closest('[data-mode]').dataset.mode === 'delete'
          ? 'Delete note'
          : 'Archive note';
      const operationName =
        e.target.closest('[data-mode]').dataset.mode === 'delete'
          ? 'deleted'
          : 'archived';
      const noteName =
        e.target.parentElement.parentElement.children[1].innerHTML;
      form_html = `
        <form class="delete-archive-form">
          <div>
            <h3 class="modal-title">${title}</h3>
            <button type="button" class="btn-close" id="btn-close">
              <img src="${closeSVG}" width="32" height="32" alt="close" />
            </button>
          </div>
          <div class="delete-archive">
            <p>
              Note <strong>${noteName}</strong> will be ${operationName}. Press
              <strong>OK</strong> for confirmation
            </p>
          </div>
          <div class="form__btn-list">
            <button id="btn-cancel" class="form-button form-btn" type="button">
              Cancel
            </button>
            <button id="btn-confirm-${operationName}" class="form-button form-btn" type="submit">
              Confirm
            </button>
          </div>
        </form>
      `;
      try {
        modalFormElement.innerHTML = form_html;
      } catch (error) {
        console.log(error);
      }
      const prop = {
        mode: operationName,
        id: e.target.closest('[data-id]').dataset.id,
        data,
      };
      openModal(prop);
    }
  };
  document
    .querySelector('.tableHeader')
    .addEventListener('click', e => modalForm(e, 'edit'));
  document
    .querySelector('.archivedList')
    .addEventListener('click', e => modalForm(e, 'edit'));
  var btn = document.querySelector('.create-note');
  btn.addEventListener('click', e => {
    modalForm(e, 'add');
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
