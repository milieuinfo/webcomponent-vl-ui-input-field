const VlInputField = require('../components/vl-input-field');
const {Page, Config} = require('vl-ui-core').Test;

class VlInputFieldPage extends Page {
  async getInputField() {
    return this._getInputField('#input-field');
  }

  async getInputFieldBlock() {
    return this._getInputField('#input-field-block');
  }

  async getInputFieldError() {
    return this._getInputField('#input-field-error');
  }

  async getInputFieldSuccess() {
    return this._getInputField('#input-field-success');
  }

  async getInputFieldDisabled() {
    return this._getInputField('#input-field-disabled');
  }

  async getInputFieldSmall() {
    return this._getInputField('#input-field-small');
  }

  async load() {
    await super.load(Config.baseUrl + '/demo/vl-input-field.html');
  }

  async _getInputField(selector) {
    return new VlInputField(this.driver, selector);
  }
}

module.exports = VlInputFieldPage;
