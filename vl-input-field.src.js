import {NativeVlElement} from '/node_modules/vl-ui-core/vl-core.src.js';

/**
 * `vl-input-field``
 * Het input field laat de gebruiker toe om een informatie in te vullen in uw applicatie: bijvoorbeeld een email adres of een wachtwoord.
 *
 * @demo demo/vl-input-field.html
 */
export class VlInputField extends NativeVlElement(HTMLInputElement) {

  static get _observedChildClassAttributes() {
    return ['focus', 'block', 'small', 'error', 'success', 'disabled', 'inline'];
  }

  connectedCallback() {
    this.classList.add('vl-input-field');
  }

  get _classPrefix() {
    return 'vl-input-field--';
  }
}

customElements.define('vl-input-field', VlInputField, {extends: 'input'});