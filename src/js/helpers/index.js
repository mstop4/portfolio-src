let scrollBuffer;

const initScrollBuffer = (percent) => {
  updateScrollBuffer(percent);
  document.addEventListener('scroll', () => {
    updateScrollBuffer(percent);
  });
}

const updateScrollBuffer = (percent) => scrollBuffer = getWindowSize().height * percent;
const getScrollBuffer = () => scrollBuffer;
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

const toggleVisibilityFactory = (hiddenClass, visibleCb) => {
  return (elem, pos) => {
    const bodyTop = -parseInt(document.querySelector('body').style.top) || 0;
    const elTop = elem.offsetTop;
    const elBottom = elem.offsetTop + elem.offsetHeight;

    if (elem.classList.contains(hiddenClass)) {
      if ((elTop - scrollBuffer > pos.top + bodyTop && 
        elTop + scrollBuffer < pos.bottom + bodyTop) ||
        (elBottom + scrollBuffer < pos.bottom + bodyTop &&
        elBottom - scrollBuffer > pos.top + bodyTop)) {

        visibleCb(elem);
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
  initScrollBuffer,
  coinFlip,
  capitalize,
  getWindowSize,
  getScrollPosition,
  getScrollBuffer,
  toggleVisibilityFactory,
  throttle
}