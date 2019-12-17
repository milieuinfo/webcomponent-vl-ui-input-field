
const { assert, driver } = require('vl-ui-core').Test;
const VlInputFieldPage = require('./pages/vl-input-field.page');

describe('vl-input-field', async () => {
    const vlInputFieldPage = new VlInputFieldPage(driver);

    before(() => {
        return vlInputFieldPage.load();
    });

    it('als gebruiker kan ik in een standaard inputveld tekst typen en verwijderen', async () => {
        const input = await vlInputFieldPage.getDefaultInputField();
        await assert.eventually.isTrue(input.isEmpty());
        await input.sendKeys('bigger');
        await assert.eventually.isFalse(input.isEmpty());
        assert.equal(await input.getText(), 'bigger');
        await input.clear();
        await assert.eventually.isTrue(input.isEmpty());
    });
    
    it('als gebruiker kan ik in een block inputveld tekst typen en verwijderen', async () => {
        const input = await vlInputFieldPage.getBlockInputField();
        await assert.eventually.isTrue(input.isBlock());
        await assert.eventually.isTrue(input.isEmpty());
        await input.sendKeys('and');
        assert.equal(await input.getText(), 'and');
        await assert.eventually.isFalse(input.isEmpty());
        await input.clear();
        await assert.eventually.isTrue(input.isEmpty());
    });
    
    it('als gebruiker kan ik in een error inputveld tekst typen en verwijderen', async () => {
        const input = await vlInputFieldPage.getErrorInputField();
        await assert.eventually.isTrue(input.isError());
        await assert.eventually.isTrue(input.isEmpty());
        await input.sendKeys('bolder');
        assert.equal(await input.getText(), 'bolder');
        await assert.eventually.isFalse(input.isEmpty());
        await input.clear();
        await assert.eventually.isTrue(input.isEmpty());
    });
    
    it('als gebruiker kan ik in een success inputveld tekst typen en verwijderen', async () => {
        const input = await vlInputFieldPage.getSuccessInputField();
        await assert.eventually.isTrue(input.isSuccess());
        await assert.eventually.isTrue(input.isEmpty());
        await input.sendKeys('boom');
        assert.equal(await input.getText(), 'boom');
        await assert.eventually.isFalse(input.isEmpty());
        await input.clear();
        await assert.eventually.isTrue(input.isEmpty());
    });
    
    it('als gebruiker kan ik in een disabled inputveld geen tekst typen', async () => {
        const input = await vlInputFieldPage.getDisabledInputField();
        await assert.eventually.isTrue(input.isDisabled());
    });
    
    it('als gebruiker kan ik in een small inputveld tekst typen en verwijderen', async () => {
        const input = await vlInputFieldPage.getSmallInputField();
        await assert.eventually.isTrue(input.isSmall());
        await assert.eventually.isTrue(input.isEmpty());
        await input.sendKeys('shakelak');
        assert.equal(await input.getText(), 'shakelak');
        await assert.eventually.isFalse(input.isEmpty());
        await input.clear();
        await assert.eventually.isTrue(input.isEmpty());
    })

});
