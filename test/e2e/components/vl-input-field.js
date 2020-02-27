const { VlElement } = require('vl-ui-core').Test;
const { VlFormValidation } = require('vl-ui-form-validation').Test;

class VlInputField extends VlFormValidation { 
    
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
