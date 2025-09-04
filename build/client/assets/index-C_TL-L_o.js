import"./lit-html-_TTrhfbU.js";import{a as p,x as l}from"./lit-element-nGwg5-HZ.js";import{n as m}from"./class-map-D78VnDIV.js";import{c as d}from"./index-DSEXG_NF.js";import{c as f,r as h}from"./index-hE0wlW8G.js";const x=f`
  :host {
    position: relative;
    display: flex;
    width: 100%;
    height: 1px;
    background-color: ${({tokens:t})=>t.theme.borderPrimary};
    justify-content: center;
    align-items: center;
  }

  :host > wui-text {
    position: absolute;
    padding: 0px 8px;
    background-color: ${({tokens:t})=>t.theme.backgroundPrimary};
    transition: background-color ${({durations:t})=>t.lg}
      ${({easings:t})=>t["ease-out-power-2"]};
    will-change: background-color;
  }
`;var u=function(t,r,o,n){var i=arguments.length,e=i<3?r:n===null?n=Object.getOwnPropertyDescriptor(r,o):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(t,r,o,n);else for(var c=t.length-1;c>=0;c--)(a=t[c])&&(e=(i<3?a(e):i>3?a(r,o,e):a(r,o))||e);return i>3&&e&&Object.defineProperty(r,o,e),e};let s=class extends p{constructor(){super(...arguments),this.text=""}render(){return l`${this.template()}`}template(){return this.text?l`<wui-text variant="md-regular" color="secondary">${this.text}</wui-text>`:null}};s.styles=[h,x];u([m()],s.prototype,"text",void 0);s=u([d("wui-separator")],s);
