import closeModal from '../closeModal';
import renderPage from '../renderPage';
import getDate from '../getDate';

const confirmArchive = (inputData, localData) => {
  const data = JSON.parse(localStorage.getItem('list')) || [];
  editedElem = data.map(el => {
    if (el.recordId == inputData.id) {
      el.archived = !el.archived;
      el.modificationDate = getDate();
    }
    return el;
  });
  localStorage.setItem('list', JSON.stringify(editedElem));
  closeModal();
  renderPage();
};

export default confirmArchive;
