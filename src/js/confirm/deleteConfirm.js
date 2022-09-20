import closeModal from '../closeModal';
import renderPage from '../renderPage';
import initData from '../initData';

const confirmDelete = (inputData, localData) => {
  const data = JSON.parse(localStorage.getItem('list')) || initData;
  const editedElem = data.filter(el => el.recordId != inputData.id);
  localStorage.setItem('list', JSON.stringify(editedElem));
  closeModal();
  renderPage();
};

export default confirmDelete;
