const { VlElement } = require('vl-ui-core').Test;
const { By, Key } = require('selenium-webdriver');

class VlInputField extends VlElement { 
    
    async setInputValue(content) {
        return this.sendKeys(content, Key.ENTER);
    }

    async getInputValue() {
        return this.getAttribute('value');
    }

}

module.exports = VlInputField;
