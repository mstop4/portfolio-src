const { coinFlip, getScrollPosition } = require('./helpers.js');
const { updateModal } = require('./modal');
const { projects } = require('./data/info');

const projectList = document.querySelector('.project__list');
const projectCards = [];
const scrollBuffer = 50;

const addProjectCards = () => {
  const pos = getScrollPosition();

  for (let i = 0; i < projects.length; i++) {

    // Project Card

    let projectCard = document.createElement('article');
    projectCard.classList.add('project', 'project--hidden');
    projectCard.setAttribute('data-index', i);
    coinFlip() === 0 ? projectCard.classList.add('project--left') : projectCard.classList.add('project--right');

    toggleVisibility(projectCard, pos);
    projectCards.push(projectCard);

    // - Project Preview

    let projectPreviewContainer = document.createElement('div');
    projectPreviewContainer.classList.add('project__preview--container');

    let projectPreviewStatic = document.createElement('img');
    projectPreviewStatic.classList.add('project__preview--media', 'project__preview--static');
    projectPreviewStatic.src = projects[i].previewStatic;

    let projectPreviewAnim = document.createElement('video');
    projectPreviewAnim.classList.add('project__preview--media');
    projectPreviewAnim.setAttribute('loop', '');
    projectPreviewAnim.setAttribute('preload', 'auto');

    let projectPreviewAnimSrc = document.createElement('source');
    projectPreviewAnimSrc.src = projects[i].previewAnim;
    projectPreviewAnimSrc.type = 'video/mp4';

    // -- Event listeners

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
      if (projectPreviewStatic.classList.contains('project__preview--hidden')) {
        projectPreviewStatic.classList.remove('project__preview--hidden');
        projectPreviewAnim.pause();
      }

      const bodyEl = document.querySelector('body');
      bodyEl.classList.add('no-scroll');

      updateModal(i);
    });
      
    // - Project Short Info

    let projectShortInfo = document.createElement('div');
    projectShortInfo.classList.add('project__short-info');

    let projectTitle = document.createElement('h3');
    projectTitle.classList.add('project__title');
    projectTitle.innerText = projects[i].title;

    let projectTypes = document.createElement('span');
    projectTypes.classList.add('project__types');

    for (let j = 0; j < projects[i].types.length; j++) {
      let projectTypeIcon = document.createElement('i');
      projectTypeIcon.classList.add('fa-fw', 'fa-2x');

      switch (projects[i].types[j]) {
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

    // Append all the things

    projectShortInfo.appendChild(projectTitle);
    projectShortInfo.appendChild(projectTypes);

    projectPreviewContainer.appendChild(projectPreviewStatic);
    projectPreviewAnim.appendChild(projectPreviewAnimSrc);
    projectPreviewContainer.appendChild(projectPreviewAnim);
    projectCard.appendChild(projectPreviewContainer);
    projectCard.appendChild(projectShortInfo);

    projectList.appendChild(projectCard);
  }
};

const toggleVisibility = (card, pos) => {
  const elTop = card.offsetTop;
  const elBottom = card.offsetTop + card.offsetHeight;

  if (card.classList.contains('project--hidden')) {
    if ((elTop - scrollBuffer > pos.top && 
      elTop - scrollBuffer < pos.bottom) ||
      (elBottom < pos.bottom &&
      elBottom + scrollBuffer > pos.top)) {

      card.classList.remove('project--hidden');

      if (card.classList.contains('project--left')) {
        card.classList.add('project--left-appear');
      } else if (card.classList.contains('project--right')) {
        card.classList.add('project--right-appear');
      }
    }
  }

  else {
    if (elTop - scrollBuffer >= pos.bottom ||
        elBottom + scrollBuffer <= pos.top) {

      card.classList.add('project--hidden');

      if (card.classList.contains('project--left')) {
        card.classList.remove('project--left-appear');
      } else if (card.classList.contains('project--right')) {
        card.classList.remove('project--right-appear');
      }
    }
  }
}

const handleUpdate = () => {
  const pos = getScrollPosition();

  for (let i = 0; i < projectCards.length; i++) {
    toggleVisibility(projectCards[i], pos);
  }
};

module.exports = {
  addProjectCards,
  handleUpdate
}