import"./lit-html-_TTrhfbU.js";import{i as m,a as f,x as d}from"./lit-element-nGwg5-HZ.js";import{n as p}from"./class-map-D78VnDIV.js";import{o as c}from"./if-defined-8ZKh-W65.js";import{c as h}from"./index-DSEXG_NF.js";import{r as v}from"./index-hE0wlW8G.js";import"./index-DOcfw5yA.js";const b=m`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }
`;var o=function(l,r,i,a){var s=arguments.length,e=s<3?r:a===null?a=Object.getOwnPropertyDescriptor(r,i):a,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(l,r,i,a);else for(var u=l.length-1;u>=0;u--)(n=l[u])&&(e=(s<3?n(e):s>3?n(r,i,e):n(r,i))||e);return s>3&&e&&Object.defineProperty(r,i,e),e};let t=class extends f{constructor(){super(...arguments),this.disabled=!1}render(){return d`
      <wui-input-text
        type="email"
        placeholder="Email"
        icon="mail"
        size="lg"
        .disabled=${this.disabled}
        .value=${this.value}
        data-testid="wui-email-input"
        tabIdx=${c(this.tabIdx)}
      ></wui-input-text>
      ${this.templateError()}
    `}templateError(){return this.errorMessage?d`<wui-text variant="sm-regular" color="error">${this.errorMessage}</wui-text>`:null}};t.styles=[v,b];o([p()],t.prototype,"errorMessage",void 0);o([p({type:Boolean})],t.prototype,"disabled",void 0);o([p()],t.prototype,"value",void 0);o([p()],t.prototype,"tabIdx",void 0);t=o([h("wui-email-input")],t);
