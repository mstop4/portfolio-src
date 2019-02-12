const { innerScrollBuffer, outerScrollBuffer } = require('../data/config');

const coinFlip = () => Math.floor(Math.random() * 2);

const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1);

const getWindowSize = () => {
  return {
    height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
    width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
  };
}

const getScrollPosition = () => {
  const scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
  const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

  return {
    top: scrollPos,
    bottom: scrollPos + windowHeight
  };
}

const toggleVisibilityFactory = (hiddenClass, visibleCb, hiddenCb) => {
  return (elem, pos) => {
    const bodyTop = -parseInt(document.querySelector('body').style.top) || 0;
    const elTop = elem.offsetTop;
    const elBottom = elem.offsetTop + elem.offsetHeight;

    if (elem.classList.contains(hiddenClass)) {
      if ((elTop - innerScrollBuffer > pos.top + bodyTop && 
        elTop + innerScrollBuffer < pos.bottom + bodyTop) ||
        (elBottom + innerScrollBuffer < pos.bottom + bodyTop &&
        elBottom - innerScrollBuffer > pos.top + bodyTop)) {

        visibleCb(elem);
      }
    }

    else {
      if (elTop - outerScrollBuffer >= pos.bottom + bodyTop ||
          elBottom + outerScrollBuffer <= pos.top + bodyTop) {

        hiddenCb(elem);
      }
    }
  }
}

const throttle = (func, delay) => {
  let lastExecTime = 0;
  let timeout = null;

  return () => {
    const now = Date.now();

    if (lastExecTime > 0 && now - lastExecTime <  delay) {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        lastExecTime = now;
        func.apply();
      }, delay);
    } 
    
    else {
      lastExecTime = now;
      func.apply();
    }
  }
}

module.exports = {
  coinFlip,
  capitalize,
  getWindowSize,
  getScrollPosition,
  toggleVisibilityFactory,
  throttle
}