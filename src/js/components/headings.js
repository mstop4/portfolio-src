const { getScrollPosition, toggleVisibilityFactory } = require('../helpers');

const headings = document.querySelectorAll('.heading');

const initialize = () => {
  handleUpdate();
}

const showHeading = (heading) => {
  heading.classList.remove('heading--hidden');

  if (heading.classList.contains('heading__left')) {
    heading.classList.add('heading__left--appear');
  }
  else if (heading.classList.contains('heading__right')) {
    heading.classList.add('heading__right--appear');
  }
}

const hideHeading = (heading) => {
  heading.classList.add('heading--hidden');

  if (heading.classList.contains('heading__left')) {
    heading.classList.remove('heading__left--appear');
  }
  else if (heading.classList.contains('heading__right')) {
    heading.classList.remove('heading__right--appear');
  }
}

const toggleVisibility = toggleVisibilityFactory('heading--hidden', showHeading, hideHeading);

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