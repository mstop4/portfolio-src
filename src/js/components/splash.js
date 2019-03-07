import { getScrollPosition, getScrollBuffer, toggleVisibilityFactory } from '../helpers';
const splashWrapper = document.querySelector('.splash__wrapper');

const initialize = () => {
  if (getScrollPosition().top <= getScrollBuffer()) {
    showText(splashWrapper);
  }
};

const showText = (list) => {
  if (list.classList.contains('splash--hidden')) {
    list.classList.remove('splash--hidden');

    [...document.querySelectorAll('.splash__wrapper > *')].forEach((elem, i) => {
      setTimeout(() => {
        elem.classList.remove('splash--hidden');
        elem.classList.add('splash--show');
      }, i * 650 + 500);
    });
  }
};

const toggleVisibility = toggleVisibilityFactory('splash--hidden', showText);

const handleUpdate = () => {
  const pos = getScrollPosition();
  toggleVisibility(splashWrapper, pos);
};

export {
  initialize,
  handleUpdate
};