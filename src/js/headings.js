const headings = document.querySelectorAll('.heading');
const scrollBuffer = 50;

const toggleVisibility = (heading, pos) => {

  if (heading.classList.contains('heading--hidden')) {
    if (heading.offsetTop + scrollBuffer < pos.bottom ||
      heading.offsetTop + heading.offsetHeight - scrollBuffer > pos.top) {

        heading.classList.remove('heading--hidden');

      if (heading.classList.contains('heading__left')) {
        heading.classList.add('heading__left--appear');
      } else if (heading.classList.contains('heading__right')) {
        heading.classList.add('heading__right--appear');
      }
    }
  }

  else {
    if (heading.offsetTop >= pos.bottom ||
      heading.offsetTop + heading.offsetHeight <= pos.top) {

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