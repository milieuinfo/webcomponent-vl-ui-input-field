const { assert, driver } = require('vl-ui-core').Test.Setup;
const VlInputFieldPage = require('./pages/vl-input-field.page');

describe('vl-input-field', async () => {
    const vlInputFieldPage = new VlInputFieldPage(driver);

    before(async () => {
        return vlInputFieldPage.load();
    });

    it ('Als gebruiker kan ik text inputten in een inputfield', async() => {
        const inputText = 'https://webcomponenten.omgeving.vlaanderen.be/doc/index.html';
        const inputField = await vlInputFieldPage.getInputField();
        await inputField.setInputValue(inputText);
        await assert.eventually.equal(inputField.getInputValue(), inputText);
    });

    it('Als gebruiker zie ik het onderscheid tussen een gewoon inputfield en een block inputfield', async() => {
        const inputFieldNotBlock = await vlInputFieldPage.getInputField();
        await assert.eventually.isFalse(inputFieldNotBlock.isBlock());
        const inputFieldBlock = await vlInputFieldPage.getInputFieldBlock();
        await assert.eventually.isTrue(inputFieldBlock.isEnabled());
    });

    it('Als gebruiker zie ik het onderscheid tussen een gewoon inputfield en een error inputfield', async() => {
    	const inputFieldNotError = await vlInputFieldPage.getInputField();
    	await assert.eventually.isFalse(inputFieldNotError.isBlock());
        const inputFieldError = await vlInputFieldPage.getInputFieldError();
        await assert.eventually.isTrue(inputFieldError.isError());
    });

    it('Als gebruiker zie ik het onderscheid tussen een gewoon inputfield en een success inputfield', async() => {
    	const inputFieldNotSuccess = await vlInputFieldPage.getInputField();
    	await assert.eventually.isFalse(inputFieldNotSuccess.isSuccess());
        const inputFieldSuccess = await vlInputFieldPage.getInputFieldSuccess();
        await assert.eventually.isTrue(inputFieldSuccess.isSuccess());
    });

   	it('Als gebruiker zie ik het onderscheid tussen een gewoon inputfield en een disabled inputfield', async() => {
    	const inputFieldEnabled = await vlInputFieldPage.getInputField();
    	await assert.eventually.isTrue(inputFieldEnabled.isEnabled());
        const inputFieldNotEnabled = await vlInputFieldPage.getInputFieldDisabled();
        await assert.eventually.isFalse(inputFieldNotEnabled.isEnabled());
    });

   	it('Als gebruiker zie ik het onderscheid tussen een gewoon inputfield en een small inputfield', async() => {
   		const inputFieldNotSmall = await vlInputFieldPage.getInputField();
   		await assert.eventually.isFalse(inputFieldNotSmall.isSmall());
        const inputFieldSmall = await vlInputFieldPage.getInputFieldSmall();
        await assert.eventually.isTrue(inputFieldSmall.isSmall());
    });
});
