const { coinFlip, getScrollPosition } = require('./helpers.js');
const contactCards = [];

const contactCardBuffer = 50; 

const addContactCards = function(parentEl, data) {
  const pos = getScrollPosition();

  for (let i = 0 ; i < data.contacts.length; i++) {
    const contactCard = document.createElement('article');
    contactCard.classList.add('contact');
    coinFlip() === 0 ? contactCard.classList.add('contact--left') : contactCard.classList.add('contact--right');

    toggleCardVisibility(contactCard, pos);
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

    parentEl.appendChild(contactCard);
  }
}

const toggleCardVisibility = function(card, pos) {
  if (card.classList.contains('contact--hidden')) {
    if (card.offsetTop + contactCardBuffer < pos.bottom ||
      card.offsetTop + card.offsetHeight - contactCardBuffer > pos.top) {

      card.classList.remove('contact--hidden');

      if (card.classList.contains('contact--left')) {
        card.classList.add('contact--left-appear');
      } else if (card.classList.contains('contact--right')) {
        card.classList.add('contact--right-appear');
      }
    }
  }

  else {
    if (card.offsetTop >= pos.bottom ||
      card.offsetTop + card.offsetHeight <= pos.top) {

      card.classList.add('contact--hidden');

      if (card.classList.contains('contact--left')) {
        card.classList.remove('contact--left-appear');
      } else if (card.classList.contains('contact--right')) {
        card.classList.remove('contact--right-appear');
      }
    }
  }
}

const handleScroll = function() {
  const pos = getScrollPosition();

  for (let i = 0; i < contactCards.length; i++) {
    toggleCardVisibility(contactCards[i], pos);
  }
};

module.exports = {
  addContactCards,
  handleScroll
}