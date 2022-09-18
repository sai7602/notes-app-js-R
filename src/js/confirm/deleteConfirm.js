import closeModal from '../closeModal';
import renderPage from '../renderPage';

const confirmDelete = (inputData, localData) => {
  const data = JSON.parse(localStorage.getItem('list')) || [];
  editedElem = data.filter(el => el.recordId != inputData.id);
  localStorage.setItem('list', JSON.stringify(editedElem));
  closeModal();
  renderPage();
};

export default confirmDelete;
