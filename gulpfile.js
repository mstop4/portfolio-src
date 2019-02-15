const { src, dest, parallel, series } = require('gulp');
const del = require('del');
const vinylPaths = require('vinyl-paths');
const source = require('vinyl-source-stream');

const concatCss = require('gulp-concat-css');
const uglifycss = require('gulp-uglifycss');
const browserify = require('browserify');
const babelify = require('babelify');
const tinyify = require('tinyify');

const buildHtml = () => {
  return src('src/index.html')
    .pipe(dest('dist/'));
}

const buildCss = () => {
  return src('src/css/index.css')
    .pipe(concatCss('index.css'))
    .pipe(uglifycss({}))
    .pipe(dest('dist/'))
}

const buildJs = () => {
  //npx browserify src/js/index.js -t babelify -p tinyify -o dist/bundle.js
  const b = browserify({
    entries: 'src/js/index.js',
    plugin: [tinyify],
    transform: [babelify]
  });

  return b.bundle()
    .pipe(source('bundle.js'))
    .pipe(dest('dist/'));
}

const copyImg = () => {
  src('dist/img/*')
    .pipe(vinylPaths(del));

  src('src/img/finalized/*')
    .pipe(dest('dist/img/'));

  return src('src/favicon.ico')
    .pipe(dest('dist/'));
}

const copyVid = () => {
  src('dist/vid/*')
    .pipe(vinylPaths(del));

  return src('src/vid/finalized/*')
    .pipe(dest('dist/vid/'));
}

const copyFonts = () => {
  src('dist/fonts/*')
    .pipe(vinylPaths(del));

  return src('src/fonts/*')
    .pipe(dest('dist/fonts/'));
}

exports.default = parallel(buildHtml, buildCss, buildJs, copyImg, copyVid, copyFonts);