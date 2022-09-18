import openModal from './openModal';
const addRecordModal = (optionList, data) => {
  const closeSVG = require('../images/close-svgrepo-com.svg');
  const title = 'Add note';
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
          ></textarea>
        </label>

        <select id="category" name="category">
          ${optionList}
        </select>
      </div>
      <div class="form__btn-list">
        <button id="btn-cancel" class="form-button form-btn" type="button">
          Cancel
        </button>
        <button id="btn-confirm" class="form-button form-btn" type="submit">
          Confirm
        </button>
      </div>
    </form>
  `;
  const modalFormElement = document.getElementById('modal_form');
  modalFormElement.innerHTML = form_html;
  const prop = {
    data,
  };
  openModal(prop);
};

export default addRecordModal;
