const { coinFlip, getScrollPosition } = require('./helpers.js');
const projectCards = [];

const projectCardBuffer = 50;

const addProjectCards = (parentEl, modalGroup, data) => {
  const pos = getScrollPosition();

  for (let i = 0; i < data.projects.length; i++) {

    // Project Card

    let projectCard = document.createElement('article');
    projectCard.classList.add('project');
    coinFlip() === 0 ? projectCard.classList.add('project--left') : projectCard.classList.add('project--right');

    toggleCardVisibility(projectCard, pos);
    projectCards.push(projectCard);

    // - Project Preview

    let projectPreviewContainer = document.createElement('div');
    projectPreviewContainer.classList.add('project__preview--container');

    let projectPreviewStatic = document.createElement('img');
    projectPreviewStatic.classList.add('project__preview--media', 'project__preview--static');
    projectPreviewStatic.src = data.projects[i].previewStatic;

    let projectPreviewAnim = document.createElement('video');
    projectPreviewAnim.classList.add('project__preview--media');
    projectPreviewAnim.setAttribute('loop', '');

    let projectPreviewAnimSrc = document.createElement('source');
    projectPreviewAnimSrc.src = data.projects[i].previewAnim;
    projectPreviewAnimSrc.type = 'video/mp4';

    projectCard.addEventListener('mouseenter', () => {
      projectPreviewStatic.classList.add('project__preview--hidden');
      projectPreviewAnim.muted = true;
      projectPreviewAnim.play();
    });

    projectCard.addEventListener('mouseleave', () => {
      projectPreviewStatic.classList.remove('project__preview--hidden');
      projectPreviewAnim.pause();
    });

    projectCard.addEventListener('click', () => {
      projectPreviewStatic.classList.remove('project__preview--hidden');
      projectPreviewAnim.pause();

      modalGroup.root.classList.remove('modal--hidden');
      setTimeout(() => {
        modalGroup.front.classList.add('modal__front--show');
        modalGroup.front.classList.remove('modal__front--hidden');
        modalGroup.back.classList.add('modal__back--show');
        modalGroup.back.classList.remove('modal__back--hidden');
      }, 1);
    });
      
    // - Project Short Info

    let projectShortInfo = document.createElement('div');
    projectShortInfo.classList.add('project__short-info');

    let projectTitle = document.createElement('h3');
    projectTitle.classList.add('project__title');
    projectTitle.innerText = data.projects[i].title;

    let projectTypes = document.createElement('span');
    projectTypes.classList.add('project__types');

    for (let j = 0; j < data.projects[i].types.length; j++) {

      let projectTypeIcon = document.createElement('i');
      projectTypeIcon.classList.add('fa-fw', 'fa-2x');

      switch (data.projects[i].types[j]) {
        case "game":
          projectTypeIcon.classList.add('fas', 'fa-gamepad');
          break;
        case "webapp":
          projectTypeIcon.classList.add('fas', 'fa-globe');
          break;
        case "utility":
          projectTypeIcon.classList.add('fas', 'fa-wrench');
          break;
        default:
          projectTypeIcon.classList.add('fas', 'fa-question');          
      }

      projectTypes.appendChild(projectTypeIcon);
    }

    projectShortInfo.appendChild(projectTitle);
    projectShortInfo.appendChild(projectTypes);

    projectPreviewContainer.appendChild(projectPreviewStatic);
    projectPreviewAnim.appendChild(projectPreviewAnimSrc);
    projectPreviewContainer.appendChild(projectPreviewAnim);
    projectCard.appendChild(projectPreviewContainer);
    projectCard.appendChild(projectShortInfo);

    parentEl.appendChild(projectCard);
  }
};

const toggleCardVisibility = (card, pos) => {
  if (card.classList.contains('project--hidden')) {
    if (card.offsetTop + projectCardBuffer < pos.bottom ||
      card.offsetTop + card.offsetHeight - projectCardBuffer > pos.top) {

      card.classList.remove('project--hidden');

      if (card.classList.contains('project--left')) {
        card.classList.add('project--left-appear');
      } else if (card.classList.contains('project--right')) {
        card.classList.add('project--right-appear');
      }
    }
  }

  else {
    if (card.offsetTop >= pos.bottom ||
      card.offsetTop + card.offsetHeight <= pos.top) {

      card.classList.add('project--hidden');

      if (card.classList.contains('project--left')) {
        card.classList.remove('project--left-appear');
      } else if (card.classList.contains('project--right')) {
        card.classList.remove('project--right-appear');
      }
    }
  }
}

const handleScroll = () => {
  const pos = getScrollPosition();

  for (let i = 0; i < projectCards.length; i++) {
    toggleCardVisibility(projectCards[i], pos);
  }
};

module.exports = {
  addProjectCards,
  handleScroll
}