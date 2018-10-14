
function protractorElement() {
  // standart API methods
  const {ElementFinder, ExpectedConditions} = require('protractor')

  ElementFinder.prototype.newSendKeys = async function(sendValue) {
    await this.browser_.wait(ExpectedConditions.presenceOf(this), 2000)
    const tag = await this.getTagName()
    await this.browser_.wait(ExpectedConditions.visibilityOf(this), 2000)
    if(tag === 'div' || tag === 'input' || 'textaread') {
      await defaultSendKeys.call(this, sendValue)
    } else if(tag === 'select') {
      await this.click()
      const options = this.$$('option')
      for(let i = 0; i < await options.count(); i++) {
        if((await options.get(i).getText()).includes(sendValue)) {
          await await options.get(i).click(); return
        }
      }
    }
  }
}

module.exports = protractorElement