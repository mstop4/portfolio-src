import { coinFlip, getScrollPosition, toggleVisibilityFactory } from '../helpers';
import { updateModal, getCanClick } from '../components/modal';
import { projects, portfolios } from '../data/info';

const projectList = document.querySelector('.project__list');
const projectCards = [];

const portfolioList = document.querySelector('#portfolio-list');
const portfolioCards = [];

const initialize = () => {
  addProjectCards();
  addPortfolioLinks();
};

const addProjectCards = () => {
  const pos = getScrollPosition();
  const orderedProjects = projects.sort((a, b) => a.id - b.id);

  orderedProjects.forEach((project, i) => {
    // Project Card

    let projectCard = document.createElement('article');
    projectCard.classList.add('project', 'project--hidden');
    projectCard.setAttribute('data-index', i);
    projectCard.setAttribute('tabindex', '0');
    coinFlip() === 0 ? projectCard.classList.add('project-left') : projectCard.classList.add('project-right');

    toggleProjectVisibility(projectCard, pos);
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
    projectPreviewAnim.setAttribute('preload', 'none');
    projectPreviewAnim.setAttribute('playsinline', 'true');
    projectPreviewAnim.setAttribute('poster', project.previewStatic);

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
      if (getCanClick()) {
        if (projectPreviewStatic.classList.contains('project__preview--hidden')) {
          projectPreviewStatic.classList.remove('project__preview--hidden');
          projectPreviewAnim.pause();
        }

        const bodyEl = document.querySelector('body');
        const scrollPos = getScrollPosition();
        bodyEl.style.top = (-scrollPos.top).toString() + 'px';
        bodyEl.classList.add('no-scroll');

        updateModal(i);
      }
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

const addPortfolioLinks = () => {
  const pos = getScrollPosition();

  portfolios.forEach(portfolio => {
    const portfolioCard = document.createElement('article');
    portfolioCard.classList.add('external', 'external--hidden');
    coinFlip() === 0 ? portfolioCard.classList.add('external-left') : portfolioCard.classList.add('external-right');

    togglePortfolioVisibility(portfolioCard, pos);
    portfolioCards.push(portfolioCard);

    const portfolioIconContainer = document.createElement('div');
    portfolioIconContainer.classList.add('external-icon');
    const portfolioIcon = document.createElement('span');
    portfolioIcon.classList.add(portfolio.iconClass);

    const portfolioText = document.createElement('a');
    portfolioText.href = portfolio.url;
    portfolioText.textContent = portfolio.displayText;
    portfolioText.target = '_blank';

    portfolioIconContainer.appendChild(portfolioIcon);
    portfolioCard.appendChild(portfolioIconContainer);
    portfolioCard.appendChild(portfolioText);

    portfolioList.appendChild(portfolioCard);
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
};

const showPortfolio = (portfolio) => {
  portfolio.classList.remove('external--hidden');

  if (portfolio.classList.contains('external-left')) {
    portfolio.classList.add('external-left--appear');
  }
  else if (portfolio.classList.contains('external-right')) {
    portfolio.classList.add('external-right--appear');
  }
};

const togglePortfolioVisibility = toggleVisibilityFactory('external--hidden', showPortfolio);
const toggleProjectVisibility = toggleVisibilityFactory('project--hidden', showProject);

const handleUpdate = () => {
  const pos = getScrollPosition();

  projectCards.forEach(card => {
    toggleProjectVisibility(card, pos);
  });

  portfolioCards.forEach(card => {
    togglePortfolioVisibility(card, pos);
  });
};

export {
  initialize,
  handleUpdate
};