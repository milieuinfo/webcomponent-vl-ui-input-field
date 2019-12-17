const VlInputField = require('../components/vl-input-field');
const { Page } = require('vl-ui-core');
const { Config } = require('vl-ui-core');

class VlInputFieldPage extends Page {
    async _getInputField(selector) {
        return new VlInputField(this.driver, selector);
    }

    async load() {
        await super.load(Config.baseUrl + '/demo/vl-input-field.html');
    }
}

module.exports = VlInputFieldPage;
