const summaryNotes = data => {
  const archiveSVG = require('../../images/archive-svgrepo-com.svg');
  const test = `<li
    class="dataList rawCommonSummary"

  >
    <div >
      <img src=${data.catImg} width="32" height="32" alt="test" />
    </div>
    <p class=" noteName ">${data.nameInput}</p>
    <p class=" totalActive">${data.totalActive}</p>
    <p class=" totalArchived">${data.totalArchived}</p>
  </li>`;
  return test;
};
export default summaryNotes;
