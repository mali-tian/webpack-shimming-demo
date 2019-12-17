# Demo of webpack granular shimming

Some legacy projects rely on `this` being the `window` object. e.g `this.alert()`. This become a problem when this module is executed in a CommonJS context where `this` is equal to `module.exports`. In this case, we can override `this` using the `imports-loader`.

#### Build by webpack
1. run `npm run build`
2. run `node dist/main.js`
You will see **window is not defined** error from terminal
