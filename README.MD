```js
const protractorElement = require('protractor-element')

// base protractor config
exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['todo-spec.js'],
  onPrepare: () => {
    // init element interface
    protractorElement()
  }
}
```