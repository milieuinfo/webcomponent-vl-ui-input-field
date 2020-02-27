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
        return this.hasClass('vl-input-field--block');
    }

    async isError() {
        return this.hasClass('vl-input-field--error');
    }

    async isSuccess() {
        return this.hasClass('vl-input-field--success');
    }

    async isSmall() {
        return this.hasClass('vl-input-field--small');
    }
}

module.exports = VlInputField;
