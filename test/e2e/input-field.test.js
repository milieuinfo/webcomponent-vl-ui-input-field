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

    after(async () => {
        return driver.quit();
    });
});
