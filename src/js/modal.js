const data = require('./data');
let modal = null;

const initialize = (modalEls) => {
  modal = modalEls;

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
  const sourceLinks = linksContainer.querySelector('#source-links');
  const demoLinks = linksContainer.querySelector('#demo-links');

  infoPreviewSrc.src = data.projects[index].previewAnim;
  infoPreview.load();
  infoPreview.play();

  infoTitle.innerText = data.projects[index].title;
  infoText.innerText = data.projects[index].description;

  while (sourceLinks.firstChild) {
    sourceLinks.removeChild(sourceLinks.firstChild);
  }

  for (let i = 0; i < data.projects[index].sourceUrls.length; i++) {
    const link = document.createElement('li');
    link.innerText = data.projects[index].sourceUrls[i].text;
    sourceLinks.appendChild(link);
  }

  while (demoLinks.firstChild) {
    demoLinks.removeChild(demoLinks.firstChild);
  }

  for (let i = 0; i < data.projects[index].demoUrls.length; i++) {
    const link = document.createElement('li');
    link.innerText = data.projects[index].demoUrls[i].text;
    demoLinks.appendChild(link);
  }
};

module.exports = {
  initialize,
  updateModal
}