import gulp from 'gulp'
import babel from 'gulp-babel'
import watch from 'gulp-watch'
import log from 'fancy-log'
import fs from 'fs'
import path from 'path'
import mjml2html from 'mjml'
import { registerComponent } from 'mjml-core'
import ts from 'gulp-typescript'

const tsProject = ts.createProject('tsconfig.json');

const walkSync = (dir, filelist = []) => {
  fs.readdirSync(dir).forEach((file) => {
    // eslint-disable-next-line no-param-reassign
    filelist = fs.statSync(path.join(dir, file)).isDirectory()
      ? walkSync(path.join(dir, file), filelist)
      : filelist.concat(path.join(dir, file))
  })
  return filelist
}

const watchedComponents = walkSync('./components')

const compile = () => gulp
  .src(path.normalize('components/**/*.js'))
  .pipe(babel({
    presets: ['@babel/preset-env'],
  }))
  .on('error', log)
  .pipe(gulp.dest('lib'))
  .pipe(tsProject())
  .pipe(gulp.dest('lib'))
  .on('end', () => {
    watchedComponents.forEach((compPath) => {
      const fullPath = path.join(process.cwd(), compPath.replace(/^components/, 'lib'))
      delete require.cache[fullPath]
      // eslint-disable-next-line import/no-dynamic-require, global-require
      registerComponent(require(fullPath).default)
    })

    fs.readFile(path.normalize('./index.mjml'), 'utf8', (err, data) => {
      if (err) throw err
      const result = mjml2html(data)
      fs.writeFileSync(path.normalize('./index.html'), result.html)
    })
  })

gulp.task('build', compile)

gulp.task('watch', () => {
  compile()
  return watch([path.normalize('components/**/*.js'), path.normalize('index.mjml')], compile)
})
