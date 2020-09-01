const {assert, driver} = require('vl-ui-core').Test.Setup;
const VlInputFieldPage = require('./pages/vl-input-field.page');

describe('vl-input-field', async () => {
  const vlInputFieldPage = new VlInputFieldPage(driver);

  before(async () => {
    await vlInputFieldPage.load();
  });

  it('Als gebruiker kan ik text inputten in een inputfield', async () => {
    const inputText = 'text';
    const inputField = await vlInputFieldPage.getInputField();
    await inputField.setValue(inputText);
    await assert.eventually.equal(inputField.getValue(), inputText);
  });

  it('Als gebruiker zie ik het onderscheid tussen een gewoon inputfield en een block inputfield', async () => {
    const inputFieldNotBlock = await vlInputFieldPage.getInputField();
    await assert.eventually.isFalse(inputFieldNotBlock.isBlock());
    const inputFieldBlock = await vlInputFieldPage.getInputFieldBlock();
    await assert.eventually.isTrue(inputFieldBlock.isBlock());
  });

  it('Als gebruiker zie ik het onderscheid tussen een gewoon inputfield en een error inputfield', async () => {
    const inputFieldNotError = await vlInputFieldPage.getInputField();
    await assert.eventually.isFalse(inputFieldNotError.isError());
    const inputFieldError = await vlInputFieldPage.getInputFieldError();
    await assert.eventually.isTrue(inputFieldError.isError());
  });

  it('Als gebruiker zie ik het onderscheid tussen een gewoon inputfield en een success inputfield', async () => {
    const inputFieldNotSuccess = await vlInputFieldPage.getInputField();
    await assert.eventually.isFalse(inputFieldNotSuccess.isSuccess());
    const inputFieldSuccess = await vlInputFieldPage.getInputFieldSuccess();
    await assert.eventually.isTrue(inputFieldSuccess.isSuccess());
  });

  it('Als gebruiker zie ik het onderscheid tussen een gewoon inputfield en een disabled inputfield', async () => {
    const inputFieldEnabled = await vlInputFieldPage.getInputField();
    await assert.eventually.isTrue(inputFieldEnabled.isEnabled());
    const inputFieldNotEnabled = await vlInputFieldPage.getInputFieldDisabled();
    await assert.eventually.isFalse(inputFieldNotEnabled.isEnabled());
  });

  it('Als gebruiker kan ik geen waarde zetten in een disabled input veld', async () => {
    const inputFieldDisabled = await vlInputFieldPage.getInputFieldDisabled();
    await assert.isRejected(inputFieldDisabled.setValue('foobar'));
  });

  it('Als gebruiker zie ik het onderscheid tussen een gewoon inputfield en een small inputfield', async () => {
    const inputFieldNotSmall = await vlInputFieldPage.getInputField();
    await assert.eventually.isFalse(inputFieldNotSmall.isSmall());
    const inputFieldSmall = await vlInputFieldPage.getInputFieldSmall();
    await assert.eventually.isTrue(inputFieldSmall.isSmall());
  });

  it('Als gebruiker krijg ik geen foutmeldingen te zien wanneer ik de input velden correct invul', async () => {
    const inputFieldVoornaam = await vlInputFieldPage.getInputFieldVoornaam();
    const inputFieldIban = await vlInputFieldPage.getInputFieldIban();
    await inputFieldVoornaam.setValue('Jos');
    await inputFieldIban.setValue('BE68 5390 0754 7034');
    await vlInputFieldPage.validateForm();
    const inputFieldVoornaamErrorMessage = await vlInputFieldPage.getInputFieldVoornaamErrorMessage();
    const inputFieldIbanErrorMessage = await vlInputFieldPage.getInputFieldIbanErrorMessage();
    await assert.eventually.equal(inputFieldVoornaamErrorMessage.getText(), '');
    await assert.eventually.equal(inputFieldIbanErrorMessage.getText(), '');
  });

  it('Als gebruiker krijg ik foutmeldingen te zien wanneer ik de input velden niet correct invul', async () => {
    const inputFieldIban = await vlInputFieldPage.getInputFieldIban();
    await inputFieldIban.setValue('BE68 5390 0754 703');
    await vlInputFieldPage.validateForm();
    const inputFieldIbanErrorMessage = await vlInputFieldPage.getInputFieldIbanErrorMessage();
    await assert.eventually.equal(inputFieldIbanErrorMessage.getText(), 'Een geldig "IBAN-nummer" is verplicht');
  });

  it('Als gebruiker kan ik een input event opvangen als er iets in een input field getypt wordt en als het inputfield wordt leeggemaakt', async () => {
    const inputText = 'foo';
    const inputFieldMetEvent = await vlInputFieldPage.getInputFieldMetEvent();
    const inputFieldCopy = await vlInputFieldPage.getInputFieldCopy();

    await inputFieldMetEvent.setValue(inputText);
    await assert.eventually.equal(inputFieldCopy.getValue(), inputText);

    await inputFieldMetEvent.clear();
    await assert.eventually.equal(inputFieldCopy.getValue(), '');
  });
});
