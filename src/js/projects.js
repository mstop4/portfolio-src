const { coinFlip } = require('./helpers.js');

const addProjectCards = function(parentEl, data) {

  for (let i = 0; i < data.projects.length; i++) {

    // Project Card

    let projectCard = document.createElement('article');
    projectCard.classList.add('project');
    coinFlip() === 0 ? projectCard.classList.add('project--left') : projectCard.classList.add('project--right');

    // - Project Preview

    let projectPreviewStatic = document.createElement('div');
    projectPreviewStatic.classList.add('project__preview');
    projectPreviewStatic.style.backgroundImage = 'url(' + data.projects[i].preview + ')';

    projectCard.addEventListener('mouseenter', function() {
      projectPreviewStatic.classList.add('project-preview--hidden');
    });

    projectCard.addEventListener('mouseleave', function() {
      projectPreviewStatic.classList.remove('project-preview--hidden');
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

    projectCard.appendChild(projectPreviewStatic);
    projectCard.appendChild(projectShortInfo);

    parentEl.appendChild(projectCard);
  }
}

module.exports = {
  addProjectCards
}