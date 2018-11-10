const { getScrollPosition } = require('./helpers');

const headings = document.querySelectorAll('.heading');
const scrollBuffer = 50;

const initialize = () => {
  handleUpdate();
}

const toggleVisibility = (heading, pos) => {
  const elTop = heading.offsetTop;
  const elBottom = heading.offsetTop + heading.offsetHeight;

  if (heading.classList.contains('heading--hidden')) {
    if ((elTop - scrollBuffer > pos.top && 
        elTop - scrollBuffer < pos.bottom) ||
        (elBottom < pos.bottom &&
        elBottom + scrollBuffer > pos.top)) {

        heading.classList.remove('heading--hidden');

      if (heading.classList.contains('heading__left')) {
        heading.classList.add('heading__left--appear');
      } else if (heading.classList.contains('heading__right')) {
        heading.classList.add('heading__right--appear');
      }
    }
  }

  else {
    if (elTop - scrollBuffer >= pos.bottom ||
        elBottom + scrollBuffer <= pos.top) {

        heading.classList.add('heading--hidden');

      if (heading.classList.contains('heading__left')) {
        heading.classList.remove('heading__left--appear');
      } else if (heading.classList.contains('heading__right')) {
        heading.classList.remove('heading__right--appear');
      }
    }
  }
}

const handleUpdate = () => {
  const pos = getScrollPosition();

  for (let i = 0; i < headings.length; i++) {
    toggleVisibility(headings[i], pos);
  }
};

module.exports = {
  initialize,
  handleUpdate
}