const coinFlip = () => {
  return Math.floor(Math.random() * 2);
}

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
  getWindowSize,
  getScrollPosition,
  throttle
}