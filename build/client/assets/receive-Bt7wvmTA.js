import"./lit-html-_TTrhfbU.js";import{a as k,x as l}from"./lit-element-nGwg5-HZ.js";import{n as $,r as b}from"./class-map-D78VnDIV.js";import{o as N}from"./if-defined-8ZKh-W65.js";import{c as C,r as R,e as A,A as w,b as d,S as h,o as f,T as y,g as S,W as I,R as T,d as O}from"./index-hE0wlW8G.js";import{c as v,U as _}from"./index-DSEXG_NF.js";import"./index-D0yfWJaP.js";import"./index-Bx6wVS7d.js";import"./index-B1yGdhtz.js";import"./index-TjLUG_Bo.js";import"./jsx-runtime-DF5SV9au.js";import"./walletConnect-BmfqopVd.js";import"./index.es-CQTua3R0.js";import"./privyConnector--nGFtbB8.js";import"./isAddressEqual-BZ0F7Med.js";import"./sha3-C47P6eDd.js";import"./_u64-CPCIv9dJ.js";import"./hooks.module-B3Nfv_UP.js";import"./index-7JkPJWjm.js";import"./index-BHYcTakE.js";import"./sha2-Cuix5xAA.js";const E=C`
  button {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${({spacing:e})=>e[4]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[3]};
    border: none;
    padding: ${({spacing:e})=>e[3]};
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color;
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  button:hover:enabled,
  button:active:enabled {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  wui-text {
    flex: 1;
    color: ${({tokens:e})=>e.theme.textSecondary};
  }

  wui-flex {
    width: auto;
    display: flex;
    align-items: center;
    gap: ${({spacing:e})=>e["01"]};
  }

  wui-icon {
    color: ${({tokens:e})=>e.theme.iconDefault};
  }

  .network-icon {
    position: relative;
    width: 20px;
    height: 20px;
    border-radius: ${({borderRadius:e})=>e[4]};
    overflow: hidden;
    margin-left: -8px;
  }

  .network-icon:first-child {
    margin-left: 0px;
  }

  .network-icon:after {
    position: absolute;
    inset: 0;
    content: '';
    display: block;
    height: 100%;
    width: 100%;
    border-radius: ${({borderRadius:e})=>e[4]};
    box-shadow: inset 0 0 0 1px ${({tokens:e})=>e.core.glass010};
  }
`;var g=function(e,t,r,i){var s=arguments.length,o=s<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,r):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(o=(s<3?n(o):s>3?n(t,r,o):n(t,r))||o);return s>3&&o&&Object.defineProperty(t,r,o),o};let p=class extends k{constructor(){super(...arguments),this.networkImages=[""],this.text=""}render(){return l`
      <button>
        <wui-text variant="md-regular" color="inherit">${this.text}</wui-text>
        <wui-flex>
          ${this.networksTemplate()}
          <wui-icon name="chevronRight" size="sm" color="inherit"></wui-icon>
        </wui-flex>
      </button>
    `}networksTemplate(){const t=this.networkImages.slice(0,5);return l` <wui-flex class="networks">
      ${t==null?void 0:t.map(r=>l` <wui-flex class="network-icon"> <wui-image src=${r}></wui-image> </wui-flex>`)}
    </wui-flex>`}};p.styles=[R,A,E];g([$({type:Array})],p.prototype,"networkImages",void 0);g([$()],p.prototype,"text",void 0);p=g([v("wui-compatible-network")],p);const W=C`
  wui-compatible-network {
    margin-top: ${({spacing:e})=>e[4]};
    width: 100%;
  }

  wui-qr-code {
    width: unset !important;
    height: unset !important;
  }

  wui-icon {
    align-items: normal;
  }
`;var m=function(e,t,r,i){var s=arguments.length,o=s<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,r):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(o=(s<3?n(o):s>3?n(t,r,o):n(t,r))||o);return s>3&&o&&Object.defineProperty(t,r,o),o};let u=class extends k{constructor(){super(),this.unsubscribe=[],this.address=w.state.address,this.profileName=w.state.profileName,this.network=d.state.activeCaipNetwork,this.unsubscribe.push(w.subscribe(t=>{t.address?(this.address=t.address,this.profileName=t.profileName):h.showError("Account not found")}),d.subscribeKey("activeCaipNetwork",t=>{t!=null&&t.id&&(this.network=t)}))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){if(!this.address)throw new Error("w3m-wallet-receive-view: No account provided");const t=f.getNetworkImage(this.network);return l` <wui-flex
      flexDirection="column"
      .padding=${["0","4","4","4"]}
      alignItems="center"
    >
      <wui-chip-button
        data-testid="receive-address-copy-button"
        @click=${this.onCopyClick.bind(this)}
        text=${_.getTruncateString({string:this.profileName||this.address||"",charsStart:this.profileName?18:4,charsEnd:this.profileName?0:4,truncate:this.profileName?"end":"middle"})}
        icon="copy"
        size="sm"
        imageSrc=${t||""}
        variant="gray"
      ></wui-chip-button>
      <wui-flex
        flexDirection="column"
        .padding=${["4","0","0","0"]}
        alignItems="center"
        gap="4"
      >
        <wui-qr-code
          size=${232}
          theme=${y.state.themeMode}
          uri=${this.address}
          ?arenaClear=${!0}
          color=${N(y.state.themeVariables["--w3m-qr-color"])}
          data-testid="wui-qr-code"
        ></wui-qr-code>
        <wui-text variant="lg-regular" color="primary" align="center">
          Copy your address or scan this QR code
        </wui-text>
        <wui-button @click=${this.onCopyClick.bind(this)} size="sm" variant="neutral-secondary">
          <wui-icon slot="iconLeft" size="sm" color="inherit" name="copy"></wui-icon>
          <wui-text variant="md-regular" color="inherit">Copy address</wui-text>
        </wui-button>
      </wui-flex>
      ${this.networkTemplate()}
    </wui-flex>`}networkTemplate(){var a;const t=d.getAllRequestedCaipNetworks(),r=d.checkIfSmartAccountEnabled(),i=d.state.activeCaipNetwork,s=t.filter(c=>(c==null?void 0:c.chainNamespace)===(i==null?void 0:i.chainNamespace));if(S(i==null?void 0:i.chainNamespace)===I.ACCOUNT_TYPES.SMART_ACCOUNT&&r)return i?l`<wui-compatible-network
        @click=${this.onReceiveClick.bind(this)}
        text="Only receive assets on this network"
        .networkImages=${[f.getNetworkImage(i)??""]}
      ></wui-compatible-network>`:null;const n=((a=s==null?void 0:s.filter(c=>{var x;return(x=c==null?void 0:c.assets)==null?void 0:x.imageId}))==null?void 0:a.slice(0,5)).map(f.getNetworkImage).filter(Boolean);return l`<wui-compatible-network
      @click=${this.onReceiveClick.bind(this)}
      text="Only receive assets on these networks"
      .networkImages=${n}
    ></wui-compatible-network>`}onReceiveClick(){T.push("WalletCompatibleNetworks")}onCopyClick(){try{this.address&&(O.copyToClopboard(this.address),h.showSuccess("Address copied"))}catch{h.showError("Failed to copy")}}};u.styles=W;m([b()],u.prototype,"address",void 0);m([b()],u.prototype,"profileName",void 0);m([b()],u.prototype,"network",void 0);u=m([v("w3m-wallet-receive-view")],u);export{u as W3mWalletReceiveView};
