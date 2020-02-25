const { VlElement } = require('vl-ui-core').Test;
const { By, Key } = require('selenium-webdriver');

class VlInputField extends VlElement { 
    
    async setInputValue(content) {
        return this.sendKeys(content);
    }

    async getInputValue() {
        return this.getAttribute('value');
    }

    async isBlock() {
        return this.hasAttribute('block');
    }

    async isError() {
        debugger;
        return this.hasAttribute('error');
    }

    async isSuccess() {
        return this.hasAttribute('success');
    }

    async isSmall() {
        return this.hasAttribute('small');
    }
}

module.exports = VlInputField;
