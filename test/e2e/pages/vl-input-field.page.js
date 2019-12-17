const VlInputField = require('../components/vl-input-field');
const { Page } = require('vl-ui-core');
const { Config } = require('vl-ui-core');

class VlInputFieldPage extends Page {
    async _getInputField(selector) {
        return new VlInputField(this.driver, selector);
    }

    async getDefaultInputField() {
        return this._getInputField('#input');
    }

    async getBlockInputField() {
        return this._getInputField('#input-block');
    }

    async getErrorInputField() {
        return this._getInputField('#input-error');
    }

    async getSuccessInputField() {
        return this._getInputField('#input-success');
    }

    async getDisabledInputField() {
        return this._getInputField('#input-disabled');
    }

    async getSmallInputField() {
        return this._getInputField('#input-small');
    }

    async load() {
        await super.load(Config.baseUrl + '/demo/vl-input-field.html');
    }
}

module.exports = VlInputFieldPage;
