import categories from '../categories';
import closeModal from '../closeModal';
import renderPage from '../renderPage';
import getDate from '../getDate';

const confirmEdit = (inputData, localData) => {
  const category = categories.filter(cat => cat.catId === inputData.categoryID);
  editedElem = localData.map(el => {
    if (el.recordId == inputData.id) {
      el.content = inputData.contentInput;
      el.nameInput = inputData.nameInput;
      el.modificationDate = getDate();
      el.catId = category[0].catId;
      el.catName = category[0].catName;
      el.catImg = category[0].catImg;
    }
    return el;
  });
  localStorage.setItem('list', JSON.stringify(editedElem));
  closeModal();
  renderPage();
};

export default confirmEdit;
