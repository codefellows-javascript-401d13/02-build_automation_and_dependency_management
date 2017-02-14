'use-strict';

const gulp = require('gulp');
const eslint = require('gulp-eslint');

gulp.task('test', function() {
  gulp.src('./test/*-test.js', { read: false})
  .pipe(mocha({ reporter: 'nyan' }));
});

gulp.task('lint', function() {
  gulp.src(['**/*.js', '!node_modules'])
  .pipe(eslint())
  .pipe(eslint.format())
  .pipe(eslint.failAfterError());
});

gulp.task('dev', ['test', 'lint']);

gulp.task('default', ['dev']);
