(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _require = require('./helpers.js'),
    coinFlip = _require.coinFlip,
    getScrollPosition = _require.getScrollPosition;

var contactCards = [];
var contactCardBuffer = 50;

var addContactCards = function addContactCards(parentEl, data) {
  var pos = getScrollPosition();

  for (var i = 0; i < data.contacts.length; i++) {
    var contactCard = document.createElement('article');
    contactCard.classList.add('contact');
    coinFlip() === 0 ? contactCard.classList.add('contact--left') : contactCard.classList.add('contact--right');
    toggleCardVisibility(contactCard, pos);
    contactCards.push(contactCard);
    var contactFAIcon = document.createElement('i');
    contactFAIcon.classList.add('fa-4x');

    for (var j = 0; j < data.contacts[i].faIconClasses.length; j++) {
      contactFAIcon.classList.add(data.contacts[i].faIconClasses[j]);
    }

    var contactText = document.createElement('a');
    contactText.href = data.contacts[i].url;
    contactText.innerText = data.contacts[i].displayText;
    contactCard.appendChild(contactFAIcon);
    contactCard.appendChild(contactText);
    parentEl.appendChild(contactCard);
  }
};

var toggleCardVisibility = function toggleCardVisibility(card, pos) {
  if (card.classList.contains('contact--hidden')) {
    if (card.offsetTop + contactCardBuffer < pos.bottom || card.offsetTop + card.offsetHeight - contactCardBuffer > pos.top) {
      card.classList.remove('contact--hidden');

      if (card.classList.contains('contact--left')) {
        card.classList.add('contact--left-appear');
      } else if (card.classList.contains('contact--right')) {
        card.classList.add('contact--right-appear');
      }
    }
  } else {
    if (card.offsetTop >= pos.bottom || card.offsetTop + card.offsetHeight <= pos.top) {
      card.classList.add('contact--hidden');

      if (card.classList.contains('contact--left')) {
        card.classList.remove('contact--left-appear');
      } else if (card.classList.contains('contact--right')) {
        card.classList.remove('contact--right-appear');
      }
    }
  }
};

var handleScroll = function handleScroll() {
  var pos = getScrollPosition();

  for (var i = 0; i < contactCards.length; i++) {
    toggleCardVisibility(contactCards[i], pos);
  }
};

module.exports = {
  addContactCards: addContactCards,
  handleScroll: handleScroll
};

},{"./helpers.js":3}],2:[function(require,module,exports){
"use strict";

module.exports = {
  "projects": [{
    "title": "GML Script Wizard",
    "previewStatic": "img/gml-script-wizard.png",
    "previewAnim": "vid/gml-script-wizard.mp4",
    "types": ["webapp"]
  }, {
    "title": "GIFcentration",
    "previewStatic": "img/gifcentration.png",
    "previewAnim": "vid/gifcentration.mp4",
    "types": ["webapp", "game"]
  }, {
    "title": "Fractured Flicks",
    "previewStatic": "img/fractured-flicks.png",
    "previewAnim": "vid/fractured-flicks.mp4",
    "types": ["webapp", "game"]
  }, {
    "title": "Sync Timer",
    "previewStatic": "img/sync-timer.png",
    "previewAnim": "vid/sync-timer.mp4",
    "types": ["webapp"]
  }, {
    "title": "FMODGMS",
    "previewStatic": "img/fmodgms.png",
    "previewAnim": "vid/fmodgms.mp4",
    "types": ["utility"]
  }, {
    "title": "Aborescence",
    "previewStatic": "img/aborescence.png",
    "previewAnim": "vid/gifcentration.mp4",
    "types": ["game"]
  }, {
    "title": "I am Rubba, You Are Gloo",
    "previewStatic": "img/iamrubba.png",
    "previewAnim": "vid/gifcentration.mp4",
    "types": ["game"]
  }, {
    "title": "dot.Market 2",
    "previewStatic": "img/dot.market2.png",
    "previewAnim": "vid/gifcentration.mp4",
    "types": ["game"]
  }, {
    "title": "Moeblob Adventure",
    "previewStatic": "img/moeblobadventure.png",
    "previewAnim": "vid/gifcentration.mp4",
    "types": ["game"]
  }],
  "contacts": [{
    "displayText": "jonathan.hs.lam@gmail.com",
    "url": "mailto:jonathan.hs.lam@gmail.com",
    "faIconClasses": ["far", "fa-envelope"]
  }, {
    "displayText": "jonathanlam4",
    "url": "https://www.linkedin.com/in/jonathanlam4/",
    "faIconClasses": ["fab", "fa-linkedin-in"]
  }, {
    "displayText": "mstop4",
    "url": "https://github.com/mstop4",
    "faIconClasses": ["fab", "fa-github"]
  }, {
    "displayText": "@QuadolorGames",
    "url": "https://twitter.com/QuadolorGames",
    "faIconClasses": ["fab", "fa-twitter"]
  }]
};

},{}],3:[function(require,module,exports){
"use strict";

var coinFlip = function coinFlip() {
  return Math.floor(Math.random() * 2);
};

var getScrollPosition = function getScrollPosition() {
  var scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
  var windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
  return {
    top: scrollPos,
    bottom: scrollPos + windowHeight
  };
};

module.exports = {
  coinFlip: coinFlip,
  getScrollPosition: getScrollPosition
};

},{}],4:[function(require,module,exports){
"use strict";

var projects = require('./projects.js');

var contacts = require('./contacts.js');

var data = require('./data');

var projectList;
var contactList;
document.addEventListener("DOMContentLoaded", function () {
  // Prepare cards
  projectList = document.querySelector('.project-list');
  contactList = document.querySelector('.contact-list');
  projects.addProjectCards(projectList, data);
  contacts.addContactCards(contactList, data);
  document.addEventListener('scroll', function () {
    projects.handleScroll();
    contacts.handleScroll();
  });
});

},{"./contacts.js":1,"./data":2,"./projects.js":5}],5:[function(require,module,exports){
"use strict";

var _require = require('./helpers.js'),
    coinFlip = _require.coinFlip,
    getScrollPosition = _require.getScrollPosition;

var projectCards = [];
var projectCardBuffer = 50;

var addProjectCards = function addProjectCards(parentEl, data) {
  var pos = getScrollPosition();

  var _loop = function _loop(i) {
    // Project Card
    var projectCard = document.createElement('article');
    projectCard.classList.add('project');
    coinFlip() === 0 ? projectCard.classList.add('project--left') : projectCard.classList.add('project--right');
    toggleCardVisibility(projectCard, pos);
    projectCards.push(projectCard); // - Project Preview

    var projectPreviewContainer = document.createElement('div');
    projectPreviewContainer.classList.add('project__preview--container');
    var projectPreviewStatic = document.createElement('img');
    projectPreviewStatic.classList.add('project__preview--media', 'project__preview--static');
    projectPreviewStatic.src = data.projects[i].previewStatic;
    var projectPreviewAnim = document.createElement('video');
    projectPreviewAnim.classList.add('project__preview--media');
    projectPreviewAnim.setAttribute('loop', '');
    var projectPreviewAnimSrc = document.createElement('source');
    projectPreviewAnimSrc.src = data.projects[i].previewAnim;
    projectPreviewAnimSrc.type = 'video/mp4';
    projectCard.addEventListener('mouseenter', function () {
      projectPreviewStatic.classList.add('project__preview--hidden');
      projectPreviewAnim.muted = true;
      projectPreviewAnim.play();
    });
    projectCard.addEventListener('mouseleave', function () {
      projectPreviewStatic.classList.remove('project__preview--hidden');
      projectPreviewAnim.pause();
    });
    projectCard.addEventListener('click', function () {
      projectPreviewStatic.classList.remove('project__preview--hidden');
      projectPreviewAnim.pause();
      console.log(this.offsetTop);
    }); // - Project Short Info

    var projectShortInfo = document.createElement('div');
    projectShortInfo.classList.add('project__short-info');
    var projectTitle = document.createElement('h3');
    projectTitle.classList.add('project__title');
    projectTitle.innerText = data.projects[i].title;
    var projectTypes = document.createElement('span');
    projectTypes.classList.add('project__types');

    for (var j = 0; j < data.projects[i].types.length; j++) {
      var projectTypeIcon = document.createElement('i');
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
  };

  for (var i = 0; i < data.projects.length; i++) {
    _loop(i);
  }
};

var toggleCardVisibility = function toggleCardVisibility(card, pos) {
  if (card.classList.contains('project--hidden')) {
    if (card.offsetTop + projectCardBuffer < pos.bottom || card.offsetTop + card.offsetHeight - projectCardBuffer > pos.top) {
      card.classList.remove('project--hidden');

      if (card.classList.contains('project--left')) {
        card.classList.add('project--left-appear');
      } else if (card.classList.contains('project--right')) {
        card.classList.add('project--right-appear');
      }
    }
  } else {
    if (card.offsetTop >= pos.bottom || card.offsetTop + card.offsetHeight <= pos.top) {
      card.classList.add('project--hidden');

      if (card.classList.contains('project--left')) {
        card.classList.remove('project--left-appear');
      } else if (card.classList.contains('project--right')) {
        card.classList.remove('project--right-appear');
      }
    }
  }
};

var handleScroll = function handleScroll() {
  var pos = getScrollPosition();

  for (var i = 0; i < projectCards.length; i++) {
    toggleCardVisibility(projectCards[i], pos);
  }
};

module.exports = {
  addProjectCards: addProjectCards,
  handleScroll: handleScroll
};

},{"./helpers.js":3}]},{},[4]);
