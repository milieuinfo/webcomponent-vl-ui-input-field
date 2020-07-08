const {VlElement} = require('vl-ui-core').Test;
const {vlFormValidation} = require('vl-ui-form-validation').Test;
const {vlPattern} = require('vl-ui-pattern').Test;
const {Key} = require('selenium-webdriver');

class VlInputField extends VlElement {
  constructor(driver, identifier) {
    super(driver, identifier, [vlFormValidation, vlPattern]);
  }

  async setValue(content) {
    await super.clear();
    return this.sendKeys(content);
  }

  async getValue() {
    return this.getAttribute('value');
  }

  async isBlock() {
    return this.hasAttribute('block');
  }

  async isError() {
    return this.hasAttribute('error');
  }

  async isSuccess() {
    return this.hasAttribute('success');
  }

  async isSmall() {
    return this.hasAttribute('small');
  }

  async clear() {
    const value = await this.getValue();
    for (let i = 0; i < value.length; i++) {
      await this.sendKeys(Key.BACK_SPACE);
    }
  }
}

module.exports = VlInputField;
