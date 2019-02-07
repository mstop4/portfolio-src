const { projects } = require('../data/info');

const modal = {
  root: document.querySelector('.modal'),
  back: document.querySelector('.modal__back'),
  front: document.querySelector('.modal__front')
};

const initialize = () => {

  modal.back.addEventListener('click', () => {
    console.log('click modal');
    modal.front.classList.add('modal__front--hidden');
    modal.front.classList.remove('modal__front--show');
    modal.back.classList.add('modal__back--hidden');
    modal.back.classList.remove('modal__back--show');

    const bodyEl = document.querySelector('body');
    bodyEl.classList.remove('no-scroll');
  });

  modal.back.addEventListener('transitionend', () => {
    if (modal.back.classList.contains('modal__back--hidden')) {
      console.log('hide modal');
      modal.root.classList.add('modal--hidden');
    } else {
      console.log('show modal');
    }
  });
}

const updateModal = (index) => {
  // Animate modals
  modal.root.classList.remove('modal--hidden');
  setTimeout(() => {
    modal.front.classList.add('modal__front--show');
    modal.front.classList.remove('modal__front--hidden');
    modal.back.classList.add('modal__back--show');
    modal.back.classList.remove('modal__back--hidden');
  }, 10);

  // Set modal info
  const infoPreview = modal.front.querySelector('.info__preview');
  const infoPreviewSrc = infoPreview.querySelector('source');
  const infoTitle = modal.front.querySelector('.info__title');
  const infoText = modal.front.querySelector('.info__text');

  const linksContainer = modal.front.querySelector('.links__container');
  const sourceIcon = linksContainer.querySelector('#source-icon');
  const sourceLinks = linksContainer.querySelector('#source-links');
  const demoIcon = linksContainer.querySelector('#demo-icon');
  const demoLinks = linksContainer.querySelector('#demo-links');

  infoPreviewSrc.src = projects[index].fullAnim;
  infoPreview.load();
  infoPreview.play();

  infoTitle.innerText = projects[index].title;
  infoText.innerHTML = projects[index].description;

  while (sourceLinks.firstChild) {
    sourceLinks.removeChild(sourceLinks.firstChild);
  }

  if (projects[index].sourceUrls.length > 0) {
    sourceIcon.classList.remove('links--hidden');
    sourceLinks.classList.remove('links--hidden');

    for (let i = 0; i < projects[index].sourceUrls.length; i++) {
      const listEl = document.createElement('li');
      const linkEl = document.createElement('a');
      linkEl.innerText = projects[index].sourceUrls[i].text;
      linkEl.href = projects[index].sourceUrls[i].url;
      linkEl.target = '_blank';
      listEl.appendChild(linkEl);
      sourceLinks.appendChild(listEl);
    }
  }

  else {
    sourceIcon.classList.add('links--hidden');
    sourceLinks.classList.add('links--hidden');
  }

  while (demoLinks.firstChild) {
    demoLinks.removeChild(demoLinks.firstChild);
  }

  if (projects[index].demoUrls.length > 0) {
    demoIcon.classList.remove('links--hidden');
    demoLinks.classList.remove('links--hidden');

    for (let i = 0; i < projects[index].demoUrls.length; i++) {
      const listEl = document.createElement('li');
      const linkEl = document.createElement('a');
      linkEl.innerText = projects[index].demoUrls[i].text;
      linkEl.href = projects[index].demoUrls[i].url;
      linkEl.target = '_blank';
      listEl.appendChild(linkEl);
      demoLinks.appendChild(listEl);
    }
  }

  else {
    demoIcon.classList.add('links--hidden');
    demoLinks.classList.add('links--hidden');
  }
};

module.exports = {
  initialize,
  updateModal
}