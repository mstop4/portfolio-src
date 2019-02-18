const { getScrollPosition, toggleVisibilityFactory } = require('../helpers');

const initialize = () => {
}

const setupTechs = () => {
  const techImgs = document.querySelectorAll('.bio__techs img');

  techs.forEach((tech, i) => {
    techImgs[i].src = tech.image;
    techImgs[i].alt = tech.name;
    techImgs[i].title = tech.name;
  });
}

const showCard = (card) => {
  card.classList.remove('bio__base--hidden');

  if (card.classList.contains('bio__text-left')) {
    card.classList.add('bio__text-left--appear');
  }
  else if (card.classList.contains('bio__text-right')) {
    card.classList.add('bio__text-right--appear');
  }

  else if (card.classList.contains('bio__card-left')) {
    card.classList.add('bio__card-left--appear');
  }
  else if (card.classList.contains('bio__card-right')) {
    card.classList.add('bio__card-right--appear');
  }
}

const toggleVisibility = toggleVisibilityFactory('bio__base--hidden', showCard);

const handleUpdate = () => {
  const pos = getScrollPosition();

  bioCards.forEach(card => {
    toggleVisibility(card, pos);
  });
};

module.exports = {
  initialize,
  handleUpdate
}