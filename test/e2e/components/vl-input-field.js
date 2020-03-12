const { VlElement } = require('vl-ui-core').Test;
const { VlFormValidation } = require('vl-ui-form-validation').Test;

class VlInputField extends VlFormValidation { 
    
    async setValue(content) {
    	await this.clear();
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
}

module.exports = VlInputField;
