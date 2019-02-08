const { coinFlip, getScrollPosition } = require('../helpers');
const { contacts } = require('../data/info');

const contactList = document.querySelector('.contact-list');
const contactCards = [];
const scrollBuffer = 50; 

const addContactCards = () => {
  const pos = getScrollPosition();

  contacts.forEach(contact => {
    const contactCard = document.createElement('article');
    contactCard.classList.add('contact', 'contact--hidden');
    coinFlip() === 0 ? contactCard.classList.add('contact--left') : contactCard.classList.add('contact--right');

    toggleVisibility(contactCard, pos);
    contactCards.push(contactCard);

    const contactFAIcon = document.createElement('i');
    contactFAIcon.classList.add('fa-4x');

    contact.faIconClasses.forEach(iconClass => {
      contactFAIcon.classList.add(iconClass);
    });

    const contactText = document.createElement('a');
    contactText.href = contact.url;
    contactText.textContent = contact.displayText;

    contactCard.appendChild(contactFAIcon);
    contactCard.appendChild(contactText);

    contactList.appendChild(contactCard);
  });
}

const toggleVisibility = (card, pos) => {
  const elTop = card.offsetTop;
  const elBottom = card.offsetTop + card.offsetHeight;

  if (card.classList.contains('contact--hidden')) {
    if ((elTop - scrollBuffer > pos.top && 
        elTop - scrollBuffer < pos.bottom) ||
        (elBottom < pos.bottom &&
        elBottom + scrollBuffer > pos.top)) {

      card.classList.remove('contact--hidden');

      if (card.classList.contains('contact--left')) {
        card.classList.add('contact--left-appear');
      } else if (card.classList.contains('contact--right')) {
        card.classList.add('contact--right-appear');
      }
    }
  }

  else {
    if (elTop - scrollBuffer >= pos.bottom ||
        elBottom + scrollBuffer <= pos.top) {

      card.classList.add('contact--hidden');

      if (card.classList.contains('contact--left')) {
        card.classList.remove('contact--left-appear');
      } else if (card.classList.contains('contact--right')) {
        card.classList.remove('contact--right-appear');
      }
    }
  }
}

const handleUpdate = () => {
  const pos = getScrollPosition();

  contactCards.forEach(card => {
    toggleVisibility(card, pos);
  });
};

module.exports = {
  addContactCards,
  handleUpdate
}