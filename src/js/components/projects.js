const { coinFlip, getScrollPosition, toggleVisibilityFactory } = require('../helpers');
const { updateModal } = require('../components/modal');
const { projects } = require('../data/info');

const projectList = document.querySelector('.project__list');
const projectCards = [];

const addProjectCards = () => {
  const pos = getScrollPosition();

  projects.forEach((project, i) => {
    // Project Card

    let projectCard = document.createElement('article');
    projectCard.classList.add('project', 'project--hidden');
    projectCard.setAttribute('data-index', i);
    coinFlip() === 0 ? projectCard.classList.add('project-left') : projectCard.classList.add('project-right');

    toggleVisibility(projectCard, pos);
    projectCards.push(projectCard);

    // - Project Preview

    let projectPreviewContainer = document.createElement('div');
    projectPreviewContainer.classList.add('project__preview--container');

    let projectPreviewStatic = document.createElement('img');
    projectPreviewStatic.classList.add('project__preview--media', 'project__preview--static');
    projectPreviewStatic.src = project.previewStatic;

    let projectPreviewAnim = document.createElement('video');
    projectPreviewAnim.classList.add('project__preview--media');
    projectPreviewAnim.setAttribute('loop', '');
    projectPreviewAnim.setAttribute('preload', 'auto');

    let projectPreviewAnimSrc = document.createElement('source');
    projectPreviewAnimSrc.src = project.previewAnim;
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
      const scrollPos = getScrollPosition();
      bodyEl.style.top = (-scrollPos.top).toString() + 'px';
      bodyEl.classList.add('no-scroll');

      updateModal(i);
    });
      
    // - Project Short Info

    let projectShortInfo = document.createElement('div');
    projectShortInfo.classList.add('project__short-info');

    let projectTitle = document.createElement('h3');
    projectTitle.classList.add('project__title');
    projectTitle.textContent = project.title;

    // Append all the things
    projectShortInfo.appendChild(projectTitle);
    projectPreviewContainer.appendChild(projectPreviewStatic);
    projectPreviewAnim.appendChild(projectPreviewAnimSrc);
    projectPreviewContainer.appendChild(projectPreviewAnim);
    projectCard.appendChild(projectPreviewContainer);
    projectCard.appendChild(projectShortInfo);

    projectList.appendChild(projectCard);
  });
};

const showProject = (project) => {
  project.classList.remove('project--hidden');

  if (project.classList.contains('project-left')) {
    project.classList.add('project-left--appear');
  }
  else if (project.classList.contains('project-right')) {
    project.classList.add('project-right--appear');
  }
}

const hideProject = (project) => {
  project.classList.add('project--hidden');

  if (project.classList.contains('project-left')) {
    project.classList.remove('project-left--appear');
  }
  else if (project.classList.contains('project-right')) {
    project.classList.remove('project-right--appear');
  }
}

const toggleVisibility = toggleVisibilityFactory('project--hidden', showProject, hideProject);

const handleUpdate = () => {
  const pos = getScrollPosition();

  projectCards.forEach(card => {
    toggleVisibility(card, pos);
  });
};

module.exports = {
  addProjectCards,
  handleUpdate
}