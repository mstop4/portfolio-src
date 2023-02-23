import { initScrollBuffer } from './helpers';
import * as modal from './components/modal';
import * as headings from './components/headings';
import * as splash from './components/splash';
import * as aboutme from './components/aboutme';
import * as skills from './components/skills';
import * as projects from './components/projects';
import * as contacts from './components/contacts';

import { throttle } from './helpers';
import { updateCopyrightYear } from './components/copyrightYear';

document.addEventListener('DOMContentLoaded', () => {

  // IE 10- detection
  if (((/*@cc_on!@*/false || Boolean(document.documentMode)) && 
       !window.MSInputMethodContext) ) {
    const warning = document.getElementById('is-ie10-');
    warning.classList.remove('hidden');
  }

  initScrollBuffer(0.1);
  headings.initialize();
  splash.initialize();
  aboutme.initialize();
  skills.initialize();
  projects.initialize();
  contacts.initialize();

  const updateCards = throttle(() => {
    projects.handleUpdate();
    contacts.handleUpdate();
    headings.handleUpdate();
    aboutme.handleUpdate();
    skills.handleUpdate();
    splash.handleUpdate();
  }, 100);

  document.addEventListener('scroll', updateCards);
  window.addEventListener('resize', updateCards);
  window.addEventListener('orientationchange', updateCards);

  // document.addEventListener('keydown', e => {
  //   if (e.keyCode == 13) {
  //     tourPage();
  //   }
  // });

  // - Modal
  modal.initialize();
  updateCopyrightYear();
});