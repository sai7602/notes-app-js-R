const archivedNote = data => {
  const archiveSVG = require('../../images/archive-remove.svg');
  const archiveTemplate = `<li
    class="dataList rawCommonArchived"
    data-rawId="${data.recordId}"
  >
    <div >
      <img src=${data.catImg} width="32" height="32" alt="Category Image" />
    </div>
    <p class=" noteName ">${data.nameInput}</p>
    <p class=" noteCreateDate">${data.createDate}</p>
    <p class="noteCatName">${data.catName}</p>
    <p class="noteContent">${data.content}</p>
    <p class="noteModificationDate ">${data.modificationDate.join(', ')}</p>

    <div
      class="buttonArchive"
      data-mode="archive"
      data-id="${data.recordId}"
    >
      <img src=${archiveSVG} width="32" height="32" alt="Archive" />
    </div>

  </li>`;
  return archiveTemplate;
};
export default archivedNote;
