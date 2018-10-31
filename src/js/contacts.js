const addContactCards = function(parentEl, data) {
  for (let i = 0 ; i < data.contacts.length; i++) {
    const contactCard = document.createElement('article');
    contactCard.classList.add('contact-list__entry');
    //coinFlip() === 0 ? contactCard.classList.add('project--left') : contactCard.classList.add('project--right');

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

module.exports = {
  addContactCards
}