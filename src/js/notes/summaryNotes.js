const summaryNotes = data => {
  const summaryTemplate = `<li
    class="dataList rawCommonSummary"

  >
    <div >
      <img src=${data.catImg} width="32" height="32" alt="Category Image" />
    </div>
    <p class=" noteName ">${data.nameInput}</p>
    <p class=" totalActive">${data.totalActive}</p>
    <p class=" totalArchived">${data.totalArchived}</p>
  </li>`;
  return summaryTemplate;
};
export default summaryNotes;
