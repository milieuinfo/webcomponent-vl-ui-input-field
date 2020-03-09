const VlInputField = require('../components/vl-input-field');
const { Page, Config } = require('vl-ui-core').Test;
const { By } = require('vl-ui-core').Test.Setup;

class VlInputFieldPage extends Page {
	async _getInputField(selector) {
		return new VlInputField(this.driver, selector);
	}

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

	async getInputFieldVoornaam() {
		return this._getInputField('#input-voornaam');
	}

	async getInputFieldIban() {
		return this._getInputField('#input-iban');
	}

	async getInputFieldVoornaamErrorMessage() {
		return this.driver.findElement(By.css('#validation-voornaam-error-message'));
	}

	async getInputFieldIbanErrorMessage() {
		return this.driver.findElement(By.css('#validation-iban-error-message'));
	}

	async validateForm() {
		const validateFormButton = await this.driver.findElement(By.css("#form-validate-button"));
		return validateFormButton.click();
	}
	
	async load() {
		await super.load(Config.baseUrl + '/demo/vl-input-field.html');
	}
}

module.exports = VlInputFieldPage;
