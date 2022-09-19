import categories from '../categories';
import closeModal from '../closeModal';
import renderPage from '../renderPage';
import getDate from '../getDate';
import initData from '../initData';

const confirm = (inputData, localData) => {
  const data = JSON.parse(localStorage.getItem('list')) || initData;
  if (inputData.contentInput.length > 0 && inputData.contentInput.length > 0) {
    const category = categories.filter(
      cat => cat.catId === inputData.categoryID
    );
    const record = {
      catId: category[0].catId,
      catName: category[0].catName,
      catImg: category[0].catImg,
      createDate: getDate(),
      content: inputData.contentInput,
      nameInput: inputData.nameInput,
      mode: inputData.mode,
      recordId: Date.now() + Math.round(Math.random() * 1000),
      modificationDate: '',
      archived: false,
    };
    data.push(record);
    localStorage.setItem('list', JSON.stringify(data));
    closeModal();
    renderPage();
  } else {
    alert('All fields must be filled');
  }
};
export default confirm;
