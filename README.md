# front end starter template
basic project template for transpiling static js/css/html files.
* js : [typescript](https://www.typescriptlang.org/) and [browserify](http://browserify.org/)
* html : [pug](https://pugjs.org)
* css : [postcss](http://postcss.org/) with plugins:
    * [precss](https://github.com/jonathantneal/precss)
    * [postcss-import](https://github.com/postcss/postcss-import)
    * [cssnano](http://cssnano.co/)
    * [autoprefixer](https://github.com/postcss/autoprefixer)

## usage
```bash
$ git clone git@github.com:hadhadhadhadabettereffect/static-frontend-template.git {{project}} && cd {{project}}
$ npm install
```
* edit build output paths in config.json
* add/edit files in src directory
* if outputting multiple files, add entry file paths to 'src' arrays in config.json. otherwise default entry files are src/css/main.css, src/js/main.ts, src/css/index.pug.
* run `$ gulp build` to output bundled src files to dist dirs set in config.json. minifies output if option set in config.json
* default `$ gulp` task starts server on localhost:8000, watches for changes in src, and outputs bundled files to dist dirs. does not minify files.

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