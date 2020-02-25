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

    it('Als gebruiker zie ik een gewoon inputfield', async() => {
        const inputField = await vlInputFieldPage.getInputField();
        await assert.eventually.isTrue(inputField.isEnabled());
        await assert.eventually.isFalse(inputField.isBlock());
        await assert.eventually.isFalse(inputField.isError());
        await assert.eventually.isFalse(inputField.isSuccess());
        await assert.eventually.isFalse(inputField.isSmall());
    });

    it('Als gebruiker zie ik een block inputfield', async() => {
        const inputField = await vlInputFieldPage.getInputFieldBlock();
        await assert.eventually.isTrue(inputField.isEnabled());
        await assert.eventually.isTrue(inputField.isBlock());
        await assert.eventually.isFalse(inputField.isError());
        await assert.eventually.isFalse(inputField.isSuccess());
        await assert.eventually.isFalse(inputField.isSmall());
    });

    it('Als gebruiker zie ik een error inputfield', async() => {
        const inputField = await vlInputFieldPage.getInputFieldError();
        await assert.eventually.isTrue(inputField.isEnabled());
        await assert.eventually.isTrue(inputField.isError());
        await assert.eventually.isFalse(inputField.isBlock());
        await assert.eventually.isFalse(inputField.isSuccess());
        await assert.eventually.isFalse(inputField.isSmall());
    });

    it('Als gebruiker zie ik een success inputfield', async() => {
        const inputField = await vlInputFieldPage.getInputFieldSuccess();
        await assert.eventually.isTrue(inputField.isEnabled());
        await assert.eventually.isTrue(inputField.isSuccess());
        await assert.eventually.isFalse(inputField.isError());
        await assert.eventually.isFalse(inputField.isBlock());
        await assert.eventually.isFalse(inputField.isSmall());
    });

    it('Als gebruiker zie ik een disabled inputfield', async() => {
        const inputField = await vlInputFieldPage.getInputFieldDisabled();
        await assert.eventually.isFalse(inputField.isEnabled());
        await assert.eventually.isFalse(inputField.isSuccess());
        await assert.eventually.isFalse(inputField.isError());
        await assert.eventually.isFalse(inputField.isBlock());
        await assert.eventually.isFalse(inputField.isSmall());
    });



    it('Als gebruiker zie ik een small inputfield', async() => {
        const inputField = await vlInputFieldPage.getInputFieldSmall();
        await assert.eventually.isTrue(inputField.isEnabled());
        await assert.eventually.isTrue(inputField.isSmall());
        await assert.eventually.isFalse(inputField.isSuccess());
        await assert.eventually.isFalse(inputField.isError());
        await assert.eventually.isFalse(inputField.isBlock());
    });


    after(async () => {
        return driver.quit();
    });
});
