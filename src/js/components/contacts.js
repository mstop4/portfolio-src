const { coinFlip, getScrollPosition, toggleVisibilityFactory } = require('../helpers');
const { contacts } = require('../data/info');

const contactList = document.querySelector('.contact-list');
const contactCards = [];

const addContactCards = () => {
  const pos = getScrollPosition();

  contacts.forEach(contact => {
    const contactCard = document.createElement('article');
    contactCard.classList.add('contact', 'contact--hidden');
    coinFlip() === 0 ? contactCard.classList.add('contact-left') : contactCard.classList.add('contact-right');

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

const showCard = (card) => {
  card.classList.remove('contact--hidden');

  if (card.classList.contains('contact-left')) {
    card.classList.add('contact-left--appear');
  }
  else if (card.classList.contains('contact-right')) {
    card.classList.add('contact-right--appear');
  }
}

const hideCard = (card) => {
  card.classList.add('contact--hidden');

  if (card.classList.contains('contact-left')) {
    card.classList.remove('contact-left--appear');
  }
  else if (card.classList.contains('contact-right')) {
    card.classList.remove('contact-right--appear');
  }
}

const toggleVisibility = toggleVisibilityFactory('contact--hidden', showCard, hideCard);

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