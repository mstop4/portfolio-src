const { projects } = require('../data/info');

const modal = {
  root: document.querySelector('.modal'),
  back: document.querySelector('.modal__back'),
  front: document.querySelector('.modal__front')
};

const initialize = () => {

  modal.back.addEventListener('click', () => {
    modal.front.classList.add('modal__front--hidden');
    modal.front.classList.remove('modal__front--show');
    modal.back.classList.add('modal__back--hidden');
    modal.back.classList.remove('modal__back--show');

    const bodyEl = document.querySelector('body');
    const scrollPos = -parseInt(bodyEl.style.top);
    bodyEl.style = null;
    bodyEl.classList.remove('no-scroll');
    window.scrollTo(0, scrollPos);
  });

  modal.back.addEventListener('transitionend', () => {
    if (modal.back.classList.contains('modal__back--hidden')) {
      modal.root.classList.add('modal--hidden');
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
  const infoStack = modal.front.querySelector('.stack-list');

  const linksContainer = modal.front.querySelector('.links__container');
  const sourceIcon = linksContainer.querySelector('#source-icon');
  const sourceLinks = linksContainer.querySelector('#source-links');
  const demoIcon = linksContainer.querySelector('#demo-icon');
  const demoLinks = linksContainer.querySelector('#demo-links');

  // clear out old info
  while (infoStack.firstChild) {
    infoStack.removeChild(infoStack.firstChild);
  }

  while (sourceLinks.firstChild) {
    sourceLinks.removeChild(sourceLinks.firstChild);
  }

  while (demoLinks.firstChild) {
    demoLinks.removeChild(demoLinks.firstChild);
  }

  // add new info

  infoPreviewSrc.src = projects[index].fullAnim;
  infoPreview.load();
  infoPreview.play();

  infoTitle.innerText = projects[index].title;
  infoText.innerHTML = projects[index].description;

  projects[index].stack.forEach(elem => {
    const chip = document.createElement('li');
    chip.textContent = elem;
    infoStack.appendChild(chip);
  });

  if (projects[index].sourceUrls.length > 0) {
    sourceIcon.classList.remove('links--hidden');
    sourceLinks.classList.remove('links--hidden');
  
    projects[index].sourceUrls.forEach(link => {
      const listEl = document.createElement('li');
      const linkEl = document.createElement('a');
      linkEl.textContent = link.text;
      linkEl.href = link.url;
      linkEl.target = '_blank';
      listEl.appendChild(linkEl);
      sourceLinks.appendChild(listEl);
    });
  }

  else {
    sourceIcon.classList.add('links--hidden');
    sourceLinks.classList.add('links--hidden');
  }

  if (projects[index].demoUrls.length > 0) {
    demoIcon.classList.remove('links--hidden');
    demoLinks.classList.remove('links--hidden');

    projects[index].demoUrls.forEach(link => {
      const listEl = document.createElement('li');
      const linkEl = document.createElement('a');
      linkEl.innerText = link.text;
      linkEl.href = link.url;
      linkEl.target = '_blank';
      listEl.appendChild(linkEl);
      demoLinks.appendChild(listEl);
    });
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