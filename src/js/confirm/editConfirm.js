import categories from '../categories';
import closeModal from '../closeModal';
import renderPage from '../renderPage';
import getDate from '../getDate';
import initData from '../initData';

const confirmEdit = (inputData, localData) => {
  const data = JSON.parse(localStorage.getItem('list')) || initData;
  const category = categories.filter(cat => cat.catId === inputData.categoryID);
  editedElem = data.map(el => {
    if (el.recordId == inputData.id) {
      el.content = inputData.contentInput;
      el.nameInput = inputData.nameInput;
      el.modificationDate.push(getDate());
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
