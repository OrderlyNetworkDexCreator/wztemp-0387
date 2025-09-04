import"./lit-html-_TTrhfbU.js";import{a as h,x as a}from"./lit-element-nGwg5-HZ.js";import{n as s}from"./class-map-D78VnDIV.js";import{c as m}from"./index-DSEXG_NF.js";import"./index-D0yfWJaP.js";import"./index-CYUNKNU6.js";import{c as p,r as g,e as b}from"./index-hE0wlW8G.js";const x=p`
  button {
    display: block;
    display: flex;
    align-items: center;
    padding: ${({spacing:e})=>e[1]};
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color;
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[32]};
  }

  wui-image {
    border-radius: ${({borderRadius:e})=>e[32]};
  }

  wui-text {
    padding-left: ${({spacing:e})=>e[1]};
    padding-right: ${({spacing:e})=>e[1]};
  }

  .left-icon-container {
    width: 24px;
    height: 24px;
    justify-content: center;
    align-items: center;
  }

  /* -- Sizes --------------------------------------------------- */
  button[data-size='lg'] {
    height: 32px;
  }

  button[data-size='md'] {
    height: 28px;
  }

  button[data-size='sm'] {
    height: 24px;
  }

  button[data-size='lg'] wui-image {
    width: 24px;
    height: 24px;
  }

  button[data-size='md'] wui-image {
    width: 20px;
    height: 20px;
  }

  button[data-size='sm'] wui-image {
    width: 16px;
    height: 16px;
  }

  button[data-size='lg'] .left-icon-container {
    width: 24px;
    height: 24px;
  }

  button[data-size='md'] .left-icon-container {
    width: 20px;
    height: 20px;
  }

  button[data-size='sm'] .left-icon-container {
    width: 16px;
    height: 16px;
  }

  /* -- Focus states --------------------------------------------------- */
  button:focus-visible:enabled {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    box-shadow: 0 0 0 4px ${({tokens:e})=>e.core.foregroundAccent040};
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  @media (hover: hover) {
    button:hover:enabled,
    button:active:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }
  }

  /* -- Disabled states --------------------------------------------------- */
  button:disabled {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    opacity: 0.5;
  }
`;var r=function(e,t,n,d){var l=arguments.length,i=l<3?t:d===null?d=Object.getOwnPropertyDescriptor(t,n):d,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,d);else for(var c=e.length-1;c>=0;c--)(u=e[c])&&(i=(l<3?u(i):l>3?u(t,n,i):u(t,n))||i);return l>3&&i&&Object.defineProperty(t,n,i),i};const f={lg:"lg-regular",md:"lg-regular",sm:"md-regular"},w={lg:"lg",md:"md",sm:"sm"};let o=class extends h{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.text="",this.loading=!1}render(){return this.loading?a` <wui-flex alignItems="center" gap="01" padding="01">
        <wui-shimmer width="20px" height="20px"></wui-shimmer>
        <wui-shimmer width="32px" height="18px" borderRadius="4xs"></wui-shimmer>
      </wui-flex>`:a`
      <button ?disabled=${this.disabled} data-size=${this.size}>
        ${this.imageTemplate()} ${this.textTemplate()}
      </button>
    `}imageTemplate(){if(this.imageSrc)return a`<wui-image src=${this.imageSrc}></wui-image>`;const t=w[this.size];return a` <wui-flex class="left-icon-container">
      <wui-icon size=${t} name="networkPlaceholder"></wui-icon>
    </wui-flex>`}textTemplate(){const t=f[this.size];return a`<wui-text color="primary" variant=${t}
      >${this.text}</wui-text
    >`}};o.styles=[g,b,x];r([s()],o.prototype,"size",void 0);r([s()],o.prototype,"imageSrc",void 0);r([s({type:Boolean})],o.prototype,"disabled",void 0);r([s()],o.prototype,"text",void 0);r([s({type:Boolean})],o.prototype,"loading",void 0);o=r([m("wui-token-button")],o);
