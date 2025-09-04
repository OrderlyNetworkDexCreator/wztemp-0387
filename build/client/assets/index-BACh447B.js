import"./lit-html-_TTrhfbU.js";import{a as h,x as l}from"./lit-element-nGwg5-HZ.js";import{n as u}from"./class-map-D78VnDIV.js";import{c as f,r as p}from"./index-hE0wlW8G.js";import{c as m}from"./index-DSEXG_NF.js";const g=f`
  :host {
    display: block;
    width: 100px;
    height: 100px;
  }

  svg {
    width: 100px;
    height: 100px;
  }

  rect {
    fill: none;
    stroke: ${s=>s.colors.accent100};
    stroke-width: 3px;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var c=function(s,e,o,r){var a=arguments.length,t=a<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,o):r,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(s,e,o,r);else for(var d=s.length-1;d>=0;d--)(i=s[d])&&(t=(a<3?i(t):a>3?i(e,o,t):i(e,o))||t);return a>3&&t&&Object.defineProperty(e,o,t),t};let n=class extends h{constructor(){super(...arguments),this.radius=36}render(){return this.svgLoaderTemplate()}svgLoaderTemplate(){const e=this.radius>50?50:this.radius,r=36-e,a=116+r,t=245+r,i=360+r*1.75;return l`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${e}
          stroke-dasharray="${a} ${t}"
          stroke-dashoffset=${i}
        />
      </svg>
    `}};n.styles=[p,g];c([u({type:Number})],n.prototype,"radius",void 0);n=c([m("wui-loading-thumbnail")],n);
