export const updateCopyrightYear = () => {
  const yearElem = document.querySelector('#copyright-year');
  yearElem.innerHTML = new Date().getFullYear();
};