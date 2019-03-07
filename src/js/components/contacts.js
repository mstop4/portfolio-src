import { coinFlip, getScrollPosition, toggleVisibilityFactory } from '../helpers';
import { contacts } from '../data/info';

const contactList = document.querySelector('#contact-list');
const resumeRedux = document.querySelector('#resume-redux');
const contactCards = [];

const initialize = () => addContactCards();

const addContactCards = () => {
  const pos = getScrollPosition();

  contacts.forEach(contact => {
    const contactCard = document.createElement('article');
    contactCard.classList.add('external', 'external--hidden');
    coinFlip() === 0 ? contactCard.classList.add('external-left') : contactCard.classList.add('external-right');

    toggleVisibility(contactCard, pos);
    contactCards.push(contactCard);

    const contactIconContainer = document.createElement('div');
    contactIconContainer.classList.add('external-icon');
    const contactIcon = document.createElement('span');
    contactIcon.classList.add(contact.iconClass);

    const contactText = document.createElement('a');
    contactText.href = contact.url;
    contactText.textContent = contact.displayText;
    contactText.target = '_blank';

    contactIconContainer.appendChild(contactIcon);
    contactCard.appendChild(contactIconContainer);
    contactCard.appendChild(contactText);

    contactList.appendChild(contactCard);
  });

  const resumeCard = document.createElement('article');
  resumeCard.classList.add('external', 'external--hidden');
  coinFlip() === 0 ? resumeCard.classList.add('external-left') : resumeCard.classList.add('external-right');

  toggleVisibility(resumeCard, pos);
  contactCards.push(resumeCard);

  const resumeIconContainer = document.createElement('div');
  resumeIconContainer.classList.add('external-icon');
  const resumeIcon = document.createElement('span');
  resumeIcon.classList.add('icon-file-text');

  const resumeText = document.createElement('a');
  resumeText.href = 'downloads/Jonathan-Lam-resume.pdf';
  resumeText.textContent = 'Resumé';
  resumeText.target = '_blank';

  resumeIconContainer.appendChild(resumeIcon);
  resumeCard.appendChild(resumeIconContainer);
  resumeCard.appendChild(resumeText);

  resumeRedux.appendChild(resumeCard);
};

const showCard = (card) => {
  card.classList.remove('external--hidden');

  if (card.classList.contains('external-left')) {
    card.classList.add('external-left--appear');
  }
  else if (card.classList.contains('external-right')) {
    card.classList.add('external-right--appear');
  }
};

const toggleVisibility = toggleVisibilityFactory('external--hidden', showCard);

const handleUpdate = () => {
  const pos = getScrollPosition();

  contactCards.forEach(card => {
    toggleVisibility(card, pos);
  });
};

export {
  initialize,
  handleUpdate
};