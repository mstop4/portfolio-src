const path = require('path');
const gulp = require('gulp');
const del = require('del');
const source = require('vinyl-source-stream');

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
};

const buildCss = () => {
  return gulp.src('src/css/index.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([ autoprefixer({
      grid: false,
      remove: true
    })]))
    .pipe(uglifycss({}))
    .pipe(gulp.dest('dist/'));
};

const buildJs = () => {
  const b = browserify({
    entries: 'src/js/index.js',
    plugin: [tinyify],
    transform: [babelify]
  });

  return b.bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('dist/'));
};

const copyImg = () => {
  return gulp.src('src/img/finalized/**/*', {since: gulp.lastRun(copyImg)})
    .pipe(imagemin())
    .pipe(gulp.dest('dist/img/'));
};

const copyVid = () => {
  return gulp.src('src/vid/finalized/**/*', {since: gulp.lastRun(copyVid)})
    .pipe(gulp.dest('dist/vid/'));
};

const copyFonts = () => {
  return gulp.src('src/fonts/**/*',  {since: gulp.lastRun(copyFonts)})
    .pipe(gulp.dest('dist/fonts/'));
};

const copyDownloads = () => {
  return gulp.src('src/downloads/finalized/**/*',  {since: gulp.lastRun(copyDownloads)})
    .pipe(gulp.dest('dist/downloads/'));
};

const copyConfig = (done) => {
  gulp.src('src/browserconfig.xml',  {since: gulp.lastRun(copyConfig)})
    .pipe(gulp.dest('dist/'));

  gulp.src('src/site.webmanifest',  {since: gulp.lastRun(copyConfig)})
    .pipe(gulp.dest('dist/'));

  done();
};

gulp.task('static', gulp.parallel(copyImg, copyVid, copyFonts, copyDownloads, copyConfig));

gulp.task('watch', () => {
  gulp.watch('src/index.html', buildHtml);
  gulp.watch('src/css/**/*', buildCss);
  gulp.watch('src/js/**/*.js', buildJs);
  const imgWatcher = gulp.watch('src/img/finalized/**/*', copyImg);
  const vidWatcher = gulp.watch('src/vid/finalized/**/*', copyVid);
  const fontWatcher = gulp.watch('src/fonts/**/*', copyFonts);
  const dlWatcher = gulp.watch('src/downloads/**/*', copyDownloads);

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

  dlWatcher.on('unlink', function (filePath) {
    const srcPath = path.relative(path.resolve('src/downloads'), filePath);
    const destPath = path.resolve('dist/downloads', srcPath);
    del.sync(destPath);
  });
});

exports.default = gulp.parallel(buildHtml, buildCss, buildJs, copyImg, copyVid, copyFonts, copyDownloads, copyConfig);