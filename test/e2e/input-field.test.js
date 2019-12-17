
const { assert, driver } = require('vl-ui-core').Test;
const VlInputFieldPage = require('./pages/vl-input-field.page');

describe('vl-input-field', async () => {
    const vlInputFieldPage = new VlInputFieldPage(driver);

    before(() => {
        return vlInputFieldPage.load();
    });

    after(() => {
        return driver && driver.quit()
    })
});
