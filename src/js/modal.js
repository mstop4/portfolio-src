const setUpListeners = (modal) => {
  modal.back.addEventListener('click', () => {
    console.log('click modal');
    modal.front.classList.add('modal__front--hidden');
    modal.front.classList.remove('modal__front--show');
    modal.back.classList.add('modal__back--hidden');
    modal.back.classList.remove('modal__back--show');
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

module.exports = {
  setUpListeners
}