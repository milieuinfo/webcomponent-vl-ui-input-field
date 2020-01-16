
const { assert, driver } = require('vl-ui-core').Test;
const VlInputFieldPage = require('./pages/vl-input-field.page');

describe('vl-input-field', async () => {
    const vlInputFieldPage = new VlInputFieldPage(driver);

    before((done) => {
        vlInputFieldPage.load().then(() => {
            done()
        });
    });

   after((done) => {
       if(driver) {
           driver.quit();
           done();
       }
   })
});
