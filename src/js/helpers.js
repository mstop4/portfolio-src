const coinFlip = function() {
  return Math.floor(Math.random() * 2);
}

const getScrollPosition = function() {
  const scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
  const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

  return {
    top: scrollPos,
    bottom: scrollPos + windowHeight
  };
}

module.exports = {
  coinFlip,
  getScrollPosition
}