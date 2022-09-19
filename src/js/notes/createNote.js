const createNote = data => {
  const editSVG = require('../../images/edit-svgrepo-com.svg');
  const deleteSVG = require('../../images/delete-svgrepo-com.svg');
  const archiveSVG = require('../../images/archive-svgrepo-com.svg');
  const test = `<li
    class="dataList rawCommon"
    data-rawId="${data.recordId}"
  >
    <div>
      <img src=${data.catImg} width="32" height="32" alt="test" />
    </div>
    <p class=" noteName ">${data.nameInput}</p>
    <p class=" noteCreateDate">${data.createDate}</p>
    <p class="noteCatName">${data.catName}</p>
    <p class="noteContent">${data.content}</p>
    <p class="noteModificationDate ">${data.modificationDate.join(', ')}</p>
    <div class="buttonEdit" data-mode="edit" data-id="${data.recordId}">
      <img src=${editSVG} width="32" height="32" alt="test" />
    </div>
    <div
      class="buttonArchive"
      data-mode="archive"
      data-id="${data.recordId}"
    >
      <img src=${archiveSVG} width="32" height="32" alt="test" />
    </div>
    <div class="buttonDelete" data-mode="delete" data-id="${data.recordId}">
      <img src=${deleteSVG} width="32" height="32" alt="test" />
    </div>
  </li>`;
  return test;
};
export default createNote;
