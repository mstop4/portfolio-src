const path = require('path');
const gulp = require('gulp');
const del = require('del');
const source = require('vinyl-source-stream');

const concatCss = require('gulp-concat-css');
const sass = require('gulp-sass');
sass.compiler = require('node-sass');
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');
const uglifycss = require('gulp-uglifycss');
const browserify = require('browserify');
const babelify = require('babelify');
const tinyify = require('tinyify');
const imagemin = require('gulp-imagemin');

const buildHtml = () => {
  return gulp.src('src/index.html')
    .pipe(gulp.dest('dist/'));
}

const buildCss = () => {
  return gulp.src('src/css/index.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([ autoprefixer({
      grid: false,
      remove: true
    })]))
    //.pipe(uglifycss({}))
    .pipe(gulp.dest('dist/'))
}

const buildJs = () => {
  const b = browserify({
    entries: 'src/js/index.js',
    plugin: [tinyify],
    transform: [babelify]
  });

  return b.bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('dist/'));
}

const copyImg = () => {
  return gulp.src('src/img/finalized/**/*', {since: gulp.lastRun(copyImg)})
    .pipe(imagemin())
    .pipe(gulp.dest('dist/img/'));
}

const copyFavicon = () => {
  return gulp.src('src/favicon.ico', {since: gulp.lastRun(copyFavicon)})
    .pipe(gulp.dest('dist/'));
};

const copyVid = () => {
  return gulp.src('src/vid/finalized/**/*', {since: gulp.lastRun(copyVid)})
    .pipe(gulp.dest('dist/vid/'));
}

const copyFonts = () => {
  return gulp.src('src/fonts/**/*',  {since: gulp.lastRun(copyFonts)})
    .pipe(gulp.dest('dist/fonts/'));
}

gulp.task('static', gulp.parallel(copyImg, copyFavicon, copyVid, copyFonts));

gulp.task('watch', () => {
  const htmlWatcher = gulp.watch('src/index.html', buildHtml);
  const cssWatcher = gulp.watch('src/css/**/*', buildCss);
  const jsWatcher = gulp.watch('src/js/**/*.js', buildJs);
  const imgWatcher = gulp.watch('src/img/finalized/**/*', copyImg);
  const faviconWatcher = gulp.watch('src/favicon.ico', copyFavicon);
  const vidWatcher = gulp.watch('src/vid/finalized/**/*', copyVid);
  const fontWatcher = gulp.watch('src/fonts/*', copyFonts);

  imgWatcher.on('unlink', function (filePath) {
    const srcPath = path.relative(path.resolve('src/img/finalized'), filePath);
    const destPath = path.resolve('dist/img', srcPath);
    del.sync(destPath);
  });

  vidWatcher.on('unlink', function (filePath) {
    const srcPath = path.relative(path.resolve('src/vid/finalized'), filePath);
    const destPath = path.resolve('dist/vid', srcPath);
    del.sync(destPath);
  });

  fontWatcher.on('unlink', function (filePath) {
    const srcPath = path.relative(path.resolve('src/fonts'), filePath);
    const destPath = path.resolve('dist/fonts', srcPath);
    del.sync(destPath);
  });
});

exports.default = gulp.parallel(buildHtml, buildCss, buildJs, copyImg, copyFavicon, copyVid, copyFonts);