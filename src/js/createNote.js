import getDate from './getDate';
const record = {};

const createNote = data => {
  console.log(data);
  const listOfTask = document.querySelector('.tableHeader');
  console.log(`${data.catImg}`);
  // const shoppingCartSVG = require(`../images/${data.catImg.trim()}.svg`);
  // const shoppingCartSVG = require(`../images/shopping-cart-svgrepo-com.svg`);
  const editSVG = require('../images/edit-svgrepo-com.svg');
  const deleteSVG = require('../images/delete-svgrepo-com.svg');
  const archiveSVG = require('../images/archive-svgrepo-com.svg');
  const test = `<li class="dataList rawCommon" data-rawId="${Math.random()}">
    <div class="dataElement">
      <img src=${data.catImg} width="32" height="32" alt="test" />
    </div>
    <p class="dataElement dataElementCenter">${data.nameInput}</p>
    <p class="dataElement">${data.createDate}</p>
    <p class="dataElement">${data.catName}</p>
    <p class="dataElement dataElementRight dataElementGreen">${data.content}</p>
    <p class="dataElement dataElementBalance">Date</p>
    <button type="button" class="buttonEdit" data-mode="edit">
      <img src=${editSVG} width="32" height="32" alt="test" />
    </button>
    <button type="button" class="buttonArchive" data-mode="archive">
      <img src=${archiveSVG} width="32" height="32" alt="test" />
    </button>
    <button type="button" class="buttonDelete" data-mode="delete">
      <img src=${deleteSVG} width="32" height="32" alt="test" />
    </button>
  </li>`;
  return test;
  listOfTask.insertAdjacentHTML('beforeend', test);
};
export default createNote;
