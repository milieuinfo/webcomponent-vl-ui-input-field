const { VlElement } = require('vl-ui-core');

class VlInputField extends VlElement {  
    constructor(driver, selector) {
        super(driver, selector);
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

    async isDisabled() {
        return this.hasAttribute('disabled');
    }

    async isSmall() {
        return this.hasAttribute('small');
    }

    async getText() {
        return await this.driver.executeScript('return arguments[0].value', this);
    }

    async isEmpty() {
        return !(await this.getText());
    }
}

module.exports = VlInputField;
