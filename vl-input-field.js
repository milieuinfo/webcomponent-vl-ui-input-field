import{NativeVlElement,define}from"/node_modules/vl-ui-core/vl-core.js";export class VlInputField extends NativeVlElement(HTMLInputElement){static get _observedChildClassAttributes(){return["block","small","error","success","disabled"]}connectedCallback(){this.classList.add("vl-input-field")}get _classPrefix(){return"vl-input-field--"}get _stylePath(){return"/node_modules/vl-ui-input-field/style.css"}};define("vl-input-field",VlInputField,{extends:"input"});