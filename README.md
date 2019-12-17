# Demo of webpack shimming Globals

Some third party libariries may expected global dependences(e.g: `$` for `jQuery`). which is not suggested by webpack.

Taking the `lodash` as the third party example, let's say provide the `lodash` as a global throughout our application.

#### Build by webpack
1. run `npm run build`
2. Open index.html through browser
