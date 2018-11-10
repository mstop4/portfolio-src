const { coinFlip, getScrollPosition } = require('./helpers.js');
const data = require('./data');

const contactList = document.querySelector('.contact-list');
const contactCards = [];
const scrollBuffer = 50; 

const addContactCards = () => {
  const pos = getScrollPosition();

  for (let i = 0 ; i < data.contacts.length; i++) {
    const contactCard = document.createElement('article');
    contactCard.classList.add('contact', 'contact--hidden');
    coinFlip() === 0 ? contactCard.classList.add('contact--left') : contactCard.classList.add('contact--right');

    toggleVisibility(contactCard, pos);
    contactCards.push(contactCard);

    const contactFAIcon = document.createElement('i');
    contactFAIcon.classList.add('fa-4x');

    for (let j = 0; j < data.contacts[i].faIconClasses.length; j++) {
      contactFAIcon.classList.add(data.contacts[i].faIconClasses[j]);
    }

    const contactText = document.createElement('a');
    contactText.href = data.contacts[i].url;
    contactText.innerText = data.contacts[i].displayText;

    contactCard.appendChild(contactFAIcon);
    contactCard.appendChild(contactText);

    contactList.appendChild(contactCard);
  }
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

  for (let i = 0; i < contactCards.length; i++) {
    toggleVisibility(contactCards[i], pos);
  }
};

module.exports = {
  addContactCards,
  handleUpdate
}