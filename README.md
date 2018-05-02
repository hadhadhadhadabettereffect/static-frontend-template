# front end starter template
basic project template for transpiling static js/css/html files.
* js: [typescript](https://www.typescriptlang.org/) and [browserify](http://browserify.org/)
* html: [pug](https://pugjs.org)
* css: [postcss](http://postcss.org/) with plugins:
    * [precss](https://github.com/jonathantneal/precss)
    * [postcss-import](https://github.com/postcss/postcss-import)
    * [cssnano](http://cssnano.co/)
    * [autoprefixer](https://github.com/postcss/autoprefixer)

## usage
```bash
$ git clone https://github.com/hadhadhadhadabettereffect/static-frontend-template.git {{project}} && cd {{project}}
$ rm -rf .git
$ git init
$ npm install
```
* edit build output paths in config.json. these can be outside the current directory. e.g. "../static"
* add/edit files in src directory. [example branch](https://github.com/hadhadhadhadabettereffect/static-frontend-template/tree/example) has some example src files.
* if outputting multiple files, add entry file paths to 'src' arrays in config.json. otherwise default entry files are src/css/main.css, src/js/main.ts, src/css/index.pug.
* `$ gulp build` bundles src files and writes to dist dirs set in config.json
* `$ gulp watch` watches for changes in src and reruns build task when files updated
* `$ gulp` serves output index.html at localhost:8000, watches for changes in src, and livereloads when files updated. localhost port can be set in config.json.

## config
build options can be added to config.json
e.g.
```json
    ...
    },
    "typescriptOptions": {
        "allowJs": true,
        "target": "es5"
    },
    ...
    "serverOptions": {
        "port": 3333
    }
```
* [browserifyOptions](https://github.com/browserify/browserify#usage)
* [typescriptOptions](https://www.typescriptlang.org/docs/handbook/compiler-options.html)
* [uglifyOptions](https://github.com/mishoo/UglifyJS2#minify-options)
* [pugOptions](https://pugjs.org/api/reference.html)
* [cssnanoOptions](http://cssnano.co/guides/presets/)
* [serverOptions](https://www.npmjs.com/package/gulp-connect)