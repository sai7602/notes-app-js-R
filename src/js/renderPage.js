import archivedNote from './notes/archivedNote';
import createNote from './notes/createNote';
import categories from './categories';
import summaryNotes from './notes/summaryNotes';
import initData from './initData';
const renderPage = () => {
  const data = JSON.parse(localStorage.getItem('list')) || initData;

  const allSummary = [];
  const renderNotes = data
    .filter(rec => !rec.archived)
    .map(rec => ` ${createNote(rec)} `)
    .join('');
  const renderArchived = data
    .filter(rec => rec.archived)
    .map(rec => ` ${archivedNote(rec)} `)
    .join('');
  categories.forEach(el => {
    const filteredEl = data.filter(rec => rec.catId == el.catId);
    const summaryData = {
      catImg: el.catImg,
      nameInput: el.catName,
      totalActive: filteredEl.filter(rec => !rec.archived).length,
      totalArchived: filteredEl.filter(rec => rec.archived).length,
    };
    allSummary.push(summaryData);
  });
  const renderSummary = allSummary
    .filter(rec => rec.totalActive > 0 || rec.totalArchived > 0)
    .map(rec => ` ${summaryNotes(rec)} `)
    .join('');
  const listOfTask = document.querySelector('.tableHeader');
  listOfTask.innerHTML = '';
  listOfTask.insertAdjacentHTML('beforeend', renderNotes);
  const listOfArchived = document.querySelector('.archivedList');
  listOfArchived.innerHTML = '';
  listOfArchived.insertAdjacentHTML('beforeend', renderArchived);
  const summary = document.querySelector('.summaryList');
  summary.innerHTML = '';
  summary.insertAdjacentHTML('beforeend', renderSummary);
};
export default renderPage;
