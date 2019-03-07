import { getScrollPosition, toggleVisibilityFactory } from '../helpers';
import data from '../data/aboutme';
const bioText = document.querySelector('.bio__text');

const initialize = () => {
  addText();
  handleUpdate();
};

const addText = () => {
  data.forEach(text => {
    const bulletPoint = document.createElement('li');
    bulletPoint.setAttribute('data-bullet', text.bullet);
    bulletPoint.classList.add('bio__text--hidden');
    bulletPoint.textContent = text.text;

    bioText.appendChild(bulletPoint);
  });
};

const showList = (list) => {
  if (list.classList.contains('bio__text--hidden')) {
    list.classList.remove('bio__text--hidden');

    [...document.querySelectorAll('.bio__text li')].forEach((text, i) => {
      setTimeout(() => {
        text.classList.remove('bio__text--hidden');
        text.classList.add('bio__text-right--appear');
      }, i * 250);
    });
  }
};

const toggleVisibility = toggleVisibilityFactory('bio__text--hidden', showList);

const handleUpdate = () => {
  const pos = getScrollPosition();
  toggleVisibility(bioText, pos);
};

export {
  initialize,
  handleUpdate
};