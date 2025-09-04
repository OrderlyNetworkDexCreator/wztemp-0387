import"./lit-html-_TTrhfbU.js";import{a as k,x as p}from"./lit-element-nGwg5-HZ.js";import{n as x,r as g}from"./class-map-D78VnDIV.js";import{p as C,s as w,m as $,c as m,r as v,O as l}from"./index-hE0wlW8G.js";import{c as f}from"./index-DSEXG_NF.js";import{o as z}from"./if-defined-8ZKh-W65.js";import{e as O,n as _}from"./ref-3T9CwXfV.js";const h=C({isLegalCheckboxChecked:!1}),u={state:h,subscribe(e){return $(h,()=>e(h))},subscribeKey(e,t){return w(h,e,t)},setIsLegalCheckboxChecked(e){h.isLegalCheckboxChecked=e}},E=m`
  label {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    user-select: none;
    column-gap: ${({spacing:e})=>e[2]};
  }

  label > input[type='checkbox'] {
    height: 0;
    width: 0;
    opacity: 0;
    position: absolute;
  }

  label > span {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    border: 1px solid ${({colors:e})=>e.neutrals400};
    color: ${({colors:e})=>e.white};
    background-color: transparent;
    will-change: border-color, background-color;
  }

  label > span > wui-icon {
    opacity: 0;
    will-change: opacity;
  }

  label > input[type='checkbox']:checked + span > wui-icon {
    color: ${({colors:e})=>e.white};
  }

  label > input[type='checkbox']:not(:checked) > span > wui-icon {
    color: ${({colors:e})=>e.neutrals900};
  }

  label > input[type='checkbox']:checked + span > wui-icon {
    opacity: 1;
  }

  /* -- Sizes --------------------------------------------------- */
  label[data-size='lg'] > span {
    width: 24px;
    height: 24px;
    min-width: 24px;
    min-height: 24px;
    border-radius: ${({borderRadius:e})=>e[10]};
  }

  label[data-size='md'] > span {
    width: 20px;
    height: 20px;
    min-width: 20px;
    min-height: 20px;
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  label[data-size='sm'] > span {
    width: 16px;
    height: 16px;
    min-width: 16px;
    min-height: 16px;
    border-radius: ${({borderRadius:e})=>e[1]};
  }

  /* -- Focus states --------------------------------------------------- */
  label > input[type='checkbox']:focus-visible + span,
  label > input[type='checkbox']:focus + span {
    border: 1px solid ${({tokens:e})=>e.core.borderAccentPrimary};
    box-shadow: 0px 0px 0px 4px rgba(9, 136, 240, 0.2);
  }

  /* -- Checked states --------------------------------------------------- */
  label > input[type='checkbox']:checked + span {
    background-color: ${({tokens:e})=>e.core.iconAccentPrimary};
    border: 1px solid transparent;
  }

  /* -- Hover states --------------------------------------------------- */
  input[type='checkbox']:not(:checked):not(:disabled) + span:hover {
    border: 1px solid ${({colors:e})=>e.neutrals700};
    background-color: ${({colors:e})=>e.neutrals800};
    box-shadow: none;
  }

  input[type='checkbox']:checked:not(:disabled) + span:hover {
    border: 1px solid transparent;
    background-color: ${({colors:e})=>e.accent080};
    box-shadow: none;
  }

  /* -- Disabled state --------------------------------------------------- */
  label > input[type='checkbox']:checked:disabled + span {
    border: 1px solid transparent;
    opacity: 0.3;
  }

  label > input[type='checkbox']:not(:checked):disabled + span {
    border: 1px solid ${({colors:e})=>e.neutrals700};
  }

  label:has(input[type='checkbox']:disabled) {
    cursor: auto;
  }

  label > input[type='checkbox']:disabled + span {
    cursor: not-allowed;
  }
`;var b=function(e,t,c,i){var n=arguments.length,o=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,c):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,c,i);else for(var r=e.length-1;r>=0;r--)(s=e[r])&&(o=(n<3?s(o):n>3?s(t,c,o):s(t,c))||o);return n>3&&o&&Object.defineProperty(t,c,o),o};const P={lg:"md",md:"sm",sm:"sm"};let a=class extends k{constructor(){super(...arguments),this.inputElementRef=O(),this.checked=void 0,this.disabled=!1,this.size="md"}render(){const t=P[this.size];return p`
      <label data-size=${this.size}>
        <input
          ${_(this.inputElementRef)}
          ?checked=${z(this.checked)}
          ?disabled=${this.disabled}
          type="checkbox"
          @change=${this.dispatchChangeEvent}
        />
        <span>
          <wui-icon name="checkmarkBold" size=${t}></wui-icon>
        </span>
        <slot></slot>
      </label>
    `}dispatchChangeEvent(){var t;this.dispatchEvent(new CustomEvent("checkboxChange",{detail:(t=this.inputElementRef.value)==null?void 0:t.checked,bubbles:!0,composed:!0}))}};a.styles=[v,E];b([x({type:Boolean})],a.prototype,"checked",void 0);b([x({type:Boolean})],a.prototype,"disabled",void 0);b([x()],a.prototype,"size",void 0);a=b([f("wui-checkbox")],a);const R=m`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  wui-checkbox {
    padding: ${({spacing:e})=>e[3]};
  }
  a {
    text-decoration: none;
    color: ${({tokens:e})=>e.theme.textSecondary};
    font-weight: 500;
  }
`;var y=function(e,t,c,i){var n=arguments.length,o=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,c):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,c,i);else for(var r=e.length-1;r>=0;r--)(s=e[r])&&(o=(n<3?s(o):n>3?s(t,c,o):s(t,c))||o);return n>3&&o&&Object.defineProperty(t,c,o),o};let d=class extends k{constructor(){super(),this.unsubscribe=[],this.checked=u.state.isLegalCheckboxChecked,this.unsubscribe.push(u.subscribeKey("isLegalCheckboxChecked",t=>{this.checked=t}))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){var n;const{termsConditionsUrl:t,privacyPolicyUrl:c}=l.state,i=(n=l.state.features)==null?void 0:n.legalCheckbox;return!t&&!c||!i?null:p`
      <wui-checkbox
        ?checked=${this.checked}
        @checkboxChange=${this.onCheckboxChange.bind(this)}
        data-testid="wui-checkbox"
      >
        <wui-text color="secondary" variant="sm-regular" align="left">
          I agree to our ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
        </wui-text>
      </wui-checkbox>
    `}andTemplate(){const{termsConditionsUrl:t,privacyPolicyUrl:c}=l.state;return t&&c?"and":""}termsTemplate(){const{termsConditionsUrl:t}=l.state;return t?p`<a rel="noreferrer" target="_blank" href=${t}>terms of service</a>`:null}privacyTemplate(){const{privacyPolicyUrl:t}=l.state;return t?p`<a rel="noreferrer" target="_blank" href=${t}>privacy policy</a>`:null}onCheckboxChange(){u.setIsLegalCheckboxChecked(!this.checked)}};d.styles=[R];y([g()],d.prototype,"checked",void 0);d=y([f("w3m-legal-checkbox")],d);export{u as O};
