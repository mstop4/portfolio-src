const { getScrollPosition } = require('../helpers');

const headings = document.querySelectorAll('.heading');
const scrollBuffer = 50;

const initialize = () => {
  handleUpdate();
}

const toggleVisibility = (heading, pos) => {
  const bodyTop = -parseInt(document.querySelector('body').style.top) || 0;
  const elTop = heading.offsetTop;
  const elBottom = heading.offsetTop + heading.offsetHeight;

  if (heading.classList.contains('heading--hidden')) {
    if ((elTop > pos.top + bodyTop && 
        elTop + scrollBuffer < pos.bottom + bodyTop) ||
        (elBottom < pos.bottom + bodyTop &&
        elBottom - scrollBuffer > pos.top + bodyTop)) {

        heading.classList.remove('heading--hidden');

      if (heading.classList.contains('heading__left')) {
        heading.classList.add('heading__left--appear');
      } else if (heading.classList.contains('heading__right')) {
        heading.classList.add('heading__right--appear');
      }
    }
  }

  else {
    if (elTop - scrollBuffer >= pos.bottom + bodyTop ||
        elBottom + scrollBuffer <= pos.top + bodyTop) {

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

  headings.forEach(heading => {
    toggleVisibility(heading, pos);
  });
};

module.exports = {
  initialize,
  handleUpdate
}