const { getScrollPosition, getWindowSize } = require('../helpers');

const header = document.querySelector('header');
const triggerPoint = getWindowSize().height / 2;

const handleUpdate = () => {
  const pos = getScrollPosition();

  if (pos.top >= triggerPoint) {
    header.classList.remove('header--hidden');
    window.removeEventListener('scroll', handleUpdate);
  }
};

module.exports = {
  handleUpdate
}