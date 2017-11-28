const gulp = require('gulp');
const fa2svg = require('font-awesome-svg-png/index');
const path = require('path');
const transform = require('gulp-transform');
const rename = require('gulp-rename');
const listfiles = require('gulp-listfiles');

const assets = path.resolve(__dirname, 'assets');
const svgAssets = path.resolve(assets, 'svg');
const jsonAssets = path.resolve(assets, 'json');

gulp.task('icons:create', cb => {
  fa2svg.generate({
    png: false,
    color: 'black',
    dest: svgAssets
  }, cb);
})

function svg2json(content, file) {
  const sizeMatch = content.match(/ viewBox="0 0 (\d+) (\d+)"/);
  const dMatch = content.match(/ d="([^"]+)"/);
  if (!sizeMatch || !dMatch) {
    return null;
  }
  const name = path.parse(file.path).name;
  const json = {
    width: parseInt(sizeMatch[1], 10),
    height: parseInt(sizeMatch[2], 10),
    paths: [{
      d: dMatch[1]
    }]
  }
  return JSON.stringify(json, null, 2);
}

function json2source(content, file) {
  const icon = content.replace(/"/g, '\'');
  return `import Icon from '../components/Icon.html'\n\nIcon.register(${icon})\n`
}

gulp.task('icons:json', ['icons:create'], () => {
  return gulp.src('svg/**/*.svg', { cwd: assets })
    .pipe(transform('utf8', svg2json))
    .pipe(rename({ extname: '.json', dirname: '' }))
    .pipe(gulp.dest('json', { cwd: assets }))
})

gulp.task('icons:generate', ['icons:json'], () => {
  return gulp.src('json/*.json', { cwd: assets })
    .pipe(transform('utf8', json2source))
    .pipe(rename({ extname: '.js', dirname: '' }))
    .pipe(gulp.dest('src/icons', { cwd: __dirname }))
    .pipe(listfiles({
      filename: 'index.js',
      prefix: 'import \'./',
      postfix: '\''
    }))
    .pipe(gulp.dest('src/icons', { cwd: __dirname }))
})
