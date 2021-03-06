import { projects } from '../data/info';

const modal = {
  root: document.querySelector('.modal'),
  back: document.querySelector('.modal__back'),
  front: document.querySelector('.modal__front')
};

let canClick = true;
const getCanClick = () => canClick;
const setCanClick = (state) => canClick = state;

const initialize = () => {
  modal.back.addEventListener('click', () => {
    if (getCanClick()) {
      setCanClick(false);
      setTimeout(() => setCanClick(true), 550);

      modal.front.classList.remove('modal__front--show');
      modal.back.classList.remove('modal__back--show');

      const bodyEl = document.querySelector('body');
      const scrollPos = -parseInt(bodyEl.style.top);
      bodyEl.removeAttribute('style');
      bodyEl.classList.remove('no-scroll');
      window.scrollTo(0, scrollPos);
    }
  });

  modal.back.addEventListener('transitionend', () => {
    if (!modal.back.classList.contains('modal__back--show')) {
      modal.root.classList.add('modal--hidden');
    }
  });
};

const updateModal = (index) => {
  setCanClick(false);
  setTimeout(() => setCanClick(true), 550);

  // Animate modals
  modal.root.classList.remove('modal--hidden');
  setTimeout(() => {
    modal.front.classList.add('modal__front--show');
    modal.back.classList.add('modal__back--show');
  }, 10);

  // Set modal info
  const infoPreviewVideo = modal.front.querySelector('.info__preview-video');
  const infoPreviewSrc = infoPreviewVideo.querySelector('source');
  const infoTitle = modal.front.querySelector('.info__title');
  const infoText = modal.front.querySelector('.info__text');
  const infoStack = modal.front.querySelector('.stack-list');

  const linksContainer = modal.front.querySelector('.links__container');
  const sourceColumn = linksContainer.querySelector('#source-column');
  const sourceLinks = linksContainer.querySelector('#source-links');
  const demoColumn = linksContainer.querySelector('#demo-column');
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

  infoPreviewVideo.poster = projects[index].previewStatic;
  infoPreviewSrc.src = projects[index].fullAnim;
  infoPreviewVideo.load();
  infoPreviewVideo.play();

  infoTitle.textContent = projects[index].title;
  infoText.innerHTML = projects[index].description;

  projects[index].stack.forEach(elem => {
    const chip = document.createElement('li');
    chip.textContent = elem;
    infoStack.appendChild(chip);
  });

  if (projects[index].sourceUrls.length > 0) {
    sourceColumn.classList.remove('links--hidden');

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
    sourceColumn.classList.add('links--hidden');
  }

  if (projects[index].demoUrls.length > 0) {
    demoColumn.classList.remove('links--hidden');

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
    demoColumn.classList.add('links--hidden');
  }
};

export {
  initialize,
  updateModal,
  getCanClick,
  setCanClick
};