import"./lit-html-_TTrhfbU.js";import{a as k,x as u}from"./lit-element-nGwg5-HZ.js";import{n as p,r as N}from"./class-map-D78VnDIV.js";import{c as z,r as ie,b as j,a8 as g,d as q,R as oe,O as ne,E as se,g as ae,W as le}from"./index-hE0wlW8G.js";import{U as X,c as M}from"./index-DSEXG_NF.js";import{dR as O}from"./index-B1yGdhtz.js";import{g as Q}from"./index-TjLUG_Bo.js";import"./index-8bO_JXwy.js";import"./index-DHUcy1MU.js";import{o as ue}from"./if-defined-8ZKh-W65.js";import"./index-D0yfWJaP.js";import"./index-CYUNKNU6.js";var B={exports:{}},ce=B.exports,Z;function de(){return Z||(Z=1,function(e,t){(function(i,o){e.exports=o()})(ce,function(){return{name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(i){var o=["th","st","nd","rd"],n=i%100;return"["+i+(o[(n-20)%10]||o[n]||o[0])+"]"}}})}(B)),B.exports}var pe=de();const me=Q(pe);var E={exports:{}},he=E.exports,ee;function ge(){return ee||(ee=1,function(e,t){(function(i,o){e.exports=o()})(he,function(){return function(i,o,n){i=i||{};var r=o.prototype,s={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function a(l,d,m,f){return r.fromToBase(l,d,m,f)}n.en.relativeTime=s,r.fromToBase=function(l,d,m,f,w){for(var h,D,C,Y=m.$locale().relativeTime||s,P=i.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],re=P.length,S=0;S<re;S+=1){var b=P[S];b.d&&(h=f?n(l).diff(m,b.d,!0):m.diff(l,b.d,!0));var A=(i.rounding||Math.round)(Math.abs(h));if(C=h>0,A<=b.r||!b.r){A<=1&&S>0&&(b=P[S-1]);var W=Y[b.l];w&&(A=w(""+A)),D=typeof W=="string"?W.replace("%d",A):W(A,d,b.l,C);break}}if(d)return D;var V=C?Y.future:Y.past;return typeof V=="function"?V(D):V.replace("%s",D)},r.to=function(l,d){return a(l,d,this,!0)},r.from=function(l,d){return a(l,d,this)};var c=function(l){return l.$u?n.utc():n()};r.toNow=function(l){return this.to(c(this),l)},r.fromNow=function(l){return this.from(c(this),l)}}})}(E)),E.exports}var fe=ge();const we=Q(fe);var U={exports:{}},xe=U.exports,te;function ye(){return te||(te=1,function(e,t){(function(i,o){e.exports=o()})(xe,function(){return function(i,o,n){n.updateLocale=function(r,s){var a=n.Ls[r];if(a)return(s?Object.keys(s):[]).forEach(function(c){a[c]=s[c]}),a}}})}(U)),U.exports}var ve=ye();const be=Q(ve);O.extend(we);O.extend(be);const $e={...me,name:"en-web3-modal",relativeTime:{future:"in %s",past:"%s ago",s:"%d sec",m:"1 min",mm:"%d min",h:"1 hr",hh:"%d hrs",d:"1 d",dd:"%d d",M:"1 mo",MM:"%d mo",y:"1 yr",yy:"%d yr"}},Te=["January","February","March","April","May","June","July","August","September","October","November","December"];O.locale("en-web3-modal",$e);const J={getMonthNameByIndex(e){return Te[e]},getYear(e=new Date().toISOString()){return O(e).year()},getRelativeDateFromNow(e){return O(e).locale("en-web3-modal").fromNow(!0)},formatDate(e,t="DD MMM"){return O(e).format(t)}},_e=3,Ie=["receive","deposit","borrow","claim"],De=["withdraw","repay","burn"],R={getTransactionGroupTitle(e,t){const i=J.getYear(),o=J.getMonthNameByIndex(t);return e===i?o:`${o} ${e}`},getTransactionImages(e){const[t,i]=e,o=!!t&&(e==null?void 0:e.every(s=>!!s.nft_info)),n=(e==null?void 0:e.length)>1;return(e==null?void 0:e.length)===2&&!o?[this.getTransactionImage(i),this.getTransactionImage(t)]:n?e.map(s=>this.getTransactionImage(s)):[this.getTransactionImage(t)]},getTransactionImage(e){return{type:R.getTransactionTransferTokenType(e),url:R.getTransactionImageURL(e)}},getTransactionImageURL(e){var n,r,s,a,c;let t;const i=!!(e!=null&&e.nft_info),o=!!(e!=null&&e.fungible_info);return e&&i?t=(s=(r=(n=e==null?void 0:e.nft_info)==null?void 0:n.content)==null?void 0:r.preview)==null?void 0:s.url:e&&o&&(t=(c=(a=e==null?void 0:e.fungible_info)==null?void 0:a.icon)==null?void 0:c.url),t},getTransactionTransferTokenType(e){if(e!=null&&e.fungible_info)return"FUNGIBLE";if(e!=null&&e.nft_info)return"NFT"},getTransactionDescriptions(e){var m,f,w;const t=(m=e==null?void 0:e.metadata)==null?void 0:m.operationType,i=e==null?void 0:e.transfers,o=((f=e==null?void 0:e.transfers)==null?void 0:f.length)>0,n=((w=e==null?void 0:e.transfers)==null?void 0:w.length)>1,r=o&&(i==null?void 0:i.every(h=>!!(h!=null&&h.fungible_info))),[s,a]=i;let c=this.getTransferDescription(s),l=this.getTransferDescription(a);if(!o)return(t==="send"||t==="receive")&&r?(c=X.getTruncateString({string:e==null?void 0:e.metadata.sentFrom,charsStart:4,charsEnd:6,truncate:"middle"}),l=X.getTruncateString({string:e==null?void 0:e.metadata.sentTo,charsStart:4,charsEnd:6,truncate:"middle"}),[c,l]):[e.metadata.status];if(n)return i.map(h=>this.getTransferDescription(h)).reverse();let d="";return Ie.includes(t)?d="+":De.includes(t)&&(d="-"),c=d.concat(c),[c]},getTransferDescription(e){var i;let t="";return e&&(e!=null&&e.nft_info?t=((i=e==null?void 0:e.nft_info)==null?void 0:i.name)||"-":e!=null&&e.fungible_info&&(t=this.getFungibleTransferDescription(e)||"-")),t},getFungibleTransferDescription(e){var o;return e?[this.getQuantityFixedValue(e==null?void 0:e.quantity.numeric),(o=e==null?void 0:e.fungible_info)==null?void 0:o.symbol].join(" ").trim():null},getQuantityFixedValue(e){return e?parseFloat(e).toFixed(_e):null}};var H;(function(e){e.approve="approved",e.bought="bought",e.borrow="borrowed",e.burn="burnt",e.cancel="canceled",e.claim="claimed",e.deploy="deployed",e.deposit="deposited",e.execute="executed",e.mint="minted",e.receive="received",e.repay="repaid",e.send="sent",e.sell="sold",e.stake="staked",e.trade="swapped",e.unstake="unstaked",e.withdraw="withdrawn"})(H||(H={}));const Ae=z`
  :host > wui-flex {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 40px;
    height: 40px;
    box-shadow: inset 0 0 0 1px ${({tokens:e})=>e.core.glass010};
    background-color: ${({tokens:e})=>e.core.glass010};
  }

  :host([data-no-images='true']) > wui-flex {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[3]} !important;
  }

  :host > wui-flex wui-image {
    display: block;
  }

  :host > wui-flex,
  :host > wui-flex wui-image,
  .swap-images-container,
  .swap-images-container.nft,
  wui-image.nft {
    border-top-left-radius: var(--local-left-border-radius);
    border-top-right-radius: var(--local-right-border-radius);
    border-bottom-left-radius: var(--local-left-border-radius);
    border-bottom-right-radius: var(--local-right-border-radius);
  }

  wui-icon {
    width: 20px;
    height: 20px;
  }

  .swap-images-container {
    position: relative;
    width: 40px;
    height: 40px;
    overflow: hidden;
  }

  .swap-images-container wui-image:first-child {
    position: absolute;
    width: 40px;
    height: 40px;
    top: 0;
    left: 0%;
    clip-path: inset(0px calc(50% + 2px) 0px 0%);
  }

  .swap-images-container wui-image:last-child {
    clip-path: inset(0px 0px 0px calc(50% + 2px));
  }

  wui-flex.status-box {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(20%, 20%);
    border-radius: ${({borderRadius:e})=>e[4]};
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    box-shadow: 0 0 0 2px ${({tokens:e})=>e.theme.backgroundPrimary};
    overflow: hidden;
    width: 16px;
    height: 16px;
  }
`;var _=function(e,t,i,o){var n=arguments.length,r=n<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(r=(n<3?s(r):n>3?s(t,i,r):s(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};let y=class extends k{constructor(){super(...arguments),this.images=[],this.secondImage={type:void 0,url:""}}render(){const[t,i]=this.images;this.images.length||(this.dataset.noImages="true");const o=(t==null?void 0:t.type)==="NFT",n=i!=null&&i.url?i.type==="NFT":o,r=o?"var(--apkt-borderRadius-3)":"var(--apkt-borderRadius-5)",s=n?"var(--apkt-borderRadius-3)":"var(--apkt-borderRadius-5)";return this.style.cssText=`
    --local-left-border-radius: ${r};
    --local-right-border-radius: ${s};
    `,u`<wui-flex> ${this.templateVisual()} ${this.templateIcon()} </wui-flex>`}templateVisual(){const[t,i]=this.images,o=t==null?void 0:t.type;return this.images.length===2&&(t!=null&&t.url||i!=null&&i.url)?u`<div class="swap-images-container">
        ${t!=null&&t.url?u`<wui-image src=${t.url} alt="Transaction image"></wui-image>`:null}
        ${i!=null&&i.url?u`<wui-image src=${i.url} alt="Transaction image"></wui-image>`:null}
      </div>`:t!=null&&t.url?u`<wui-image src=${t.url} alt="Transaction image"></wui-image>`:o==="NFT"?u`<wui-icon size="inherit" color="default" name="nftPlaceholder"></wui-icon>`:u`<wui-icon size="inherit" color="default" name="coinPlaceholder"></wui-icon>`}templateIcon(){let t="accent-primary",i;return i=this.getIcon(),this.status&&(t=this.getStatusColor()),i?u`
      <wui-flex alignItems="center" justifyContent="center" class="status-box">
        <wui-icon-box size="sm" color=${t} icon=${i}></wui-icon-box>
      </wui-flex>
    `:null}getDirectionIcon(){switch(this.direction){case"in":return"arrowBottom";case"out":return"arrowTop";default:return}}getIcon(){return this.onlyDirectionIcon?this.getDirectionIcon():this.type==="trade"?"swapHorizontal":this.type==="approve"?"checkmark":this.type==="cancel"?"close":this.getDirectionIcon()}getStatusColor(){switch(this.status){case"confirmed":return"success";case"failed":return"error";case"pending":return"inverse";default:return"accent-primary"}}};y.styles=[Ae];_([p()],y.prototype,"type",void 0);_([p()],y.prototype,"status",void 0);_([p()],y.prototype,"direction",void 0);_([p({type:Boolean})],y.prototype,"onlyDirectionIcon",void 0);_([p({type:Array})],y.prototype,"images",void 0);_([p({type:Object})],y.prototype,"secondImage",void 0);y=_([M("wui-transaction-visual")],y);const Re=z`
  :host {
    width: 100%;
  }

  :host > wui-flex:first-child {
    align-items: center;
    column-gap: ${({spacing:e})=>e[2]};
    padding: ${({spacing:e})=>e[1]} ${({spacing:e})=>e[2]};
    width: 100%;
  }

  :host > wui-flex:first-child wui-text:nth-child(1) {
    text-transform: capitalize;
  }

  wui-transaction-visual {
    width: 40px;
    height: 40px;
  }

  wui-flex {
    flex: 1;
  }

  :host wui-flex wui-flex {
    overflow: hidden;
  }

  :host .description-container wui-text span {
    word-break: break-all;
  }

  :host .description-container wui-text {
    overflow: hidden;
  }

  :host .description-separator-icon {
    margin: 0px 6px;
  }

  :host wui-text > span {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }
`;var $=function(e,t,i,o){var n=arguments.length,r=n<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(r=(n<3?s(r):n>3?s(t,i,r):s(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};let x=class extends k{constructor(){super(...arguments),this.type="approve",this.onlyDirectionIcon=!1,this.images=[]}render(){return u`
      <wui-flex>
        <wui-transaction-visual
          .status=${this.status}
          direction=${ue(this.direction)}
          type=${this.type}
          .onlyDirectionIcon=${this.onlyDirectionIcon}
          .images=${this.images}
        ></wui-transaction-visual>
        <wui-flex flexDirection="column" gap="1">
          <wui-text variant="lg-medium" color="primary">
            ${H[this.type]||this.type}
          </wui-text>
          <wui-flex class="description-container">
            ${this.templateDescription()} ${this.templateSecondDescription()}
          </wui-flex>
        </wui-flex>
        <wui-text variant="sm-medium" color="secondary"><span>${this.date}</span></wui-text>
      </wui-flex>
    `}templateDescription(){var i;const t=(i=this.descriptions)==null?void 0:i[0];return t?u`
          <wui-text variant="md-regular" color="secondary">
            <span>${t}</span>
          </wui-text>
        `:null}templateSecondDescription(){var i;const t=(i=this.descriptions)==null?void 0:i[1];return t?u`
          <wui-icon class="description-separator-icon" size="sm" name="arrowRight"></wui-icon>
          <wui-text variant="md-regular" color="secondary">
            <span>${t}</span>
          </wui-text>
        `:null}};x.styles=[ie,Re];$([p()],x.prototype,"type",void 0);$([p({type:Array})],x.prototype,"descriptions",void 0);$([p()],x.prototype,"date",void 0);$([p({type:Boolean})],x.prototype,"onlyDirectionIcon",void 0);$([p()],x.prototype,"status",void 0);$([p()],x.prototype,"direction",void 0);$([p({type:Array})],x.prototype,"images",void 0);x=$([M("wui-transaction-list-item")],x);const Oe=z`
  wui-flex {
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
  }

  wui-image {
    border-radius: ${({borderRadius:e})=>e[128]};
  }

  .fallback-icon {
    color: ${({tokens:e})=>e.theme.iconInverse};
    border-radius: ${({borderRadius:e})=>e[3]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  .direction-icon,
  .status-image {
    position: absolute;
    right: 0;
    bottom: 0;
    border-radius: ${({borderRadius:e})=>e[128]};
    border: 2px solid ${({tokens:e})=>e.theme.backgroundPrimary};
  }

  .direction-icon {
    padding: ${({spacing:e})=>e["01"]};
    color: ${({tokens:e})=>e.core.iconSuccess};

    background-color: color-mix(
      in srgb,
      ${({tokens:e})=>e.core.textSuccess} 30%,
      ${({tokens:e})=>e.theme.backgroundPrimary} 70%
    );
  }

  /* -- Sizes --------------------------------------------------- */
  :host([data-size='sm']) > wui-image:not(.status-image),
  :host([data-size='sm']) > wui-flex {
    width: 24px;
    height: 24px;
  }

  :host([data-size='lg']) > wui-image:not(.status-image),
  :host([data-size='lg']) > wui-flex {
    width: 40px;
    height: 40px;
  }

  :host([data-size='sm']) .fallback-icon {
    height: 16px;
    width: 16px;
    padding: ${({spacing:e})=>e[1]};
  }

  :host([data-size='lg']) .fallback-icon {
    height: 32px;
    width: 32px;
    padding: ${({spacing:e})=>e[1]};
  }

  :host([data-size='sm']) .direction-icon,
  :host([data-size='sm']) .status-image {
    transform: translate(40%, 30%);
  }

  :host([data-size='lg']) .direction-icon,
  :host([data-size='lg']) .status-image {
    transform: translate(40%, 10%);
  }

  :host([data-size='sm']) .status-image {
    height: 14px;
    width: 14px;
  }

  :host([data-size='lg']) .status-image {
    height: 20px;
    width: 20px;
  }

  /* -- Crop effects --------------------------------------------------- */
  .swap-crop-left-image,
  .swap-crop-right-image {
    position: absolute;
    top: 0;
    bottom: 0;
  }

  .swap-crop-left-image {
    left: 0;
    clip-path: inset(0px calc(50% + 1.5px) 0px 0%);
  }

  .swap-crop-right-image {
    right: 0;
    clip-path: inset(0px 0px 0px calc(50% + 1.5px));
  }
`;var L=function(e,t,i,o){var n=arguments.length,r=n<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(r=(n<3?s(r):n>3?s(t,i,r):s(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};const G={sm:"xxs",lg:"md"};let T=class extends k{constructor(){super(...arguments),this.type="approve",this.size="lg",this.statusImageUrl="",this.images=[]}render(){return u`<wui-flex>${this.templateVisual()} ${this.templateIcon()}</wui-flex>`}templateVisual(){switch(this.dataset.size=this.size,this.type){case"trade":return this.swapTemplate();case"fiat":return this.fiatTemplate();case"unknown":return this.unknownTemplate();default:return this.tokenTemplate()}}swapTemplate(){const[t,i]=this.images;return this.images.length===2&&(t||i)?u`
        <wui-image class="swap-crop-left-image" src=${t} alt="Swap image"></wui-image>
        <wui-image class="swap-crop-right-image" src=${i} alt="Swap image"></wui-image>
      `:t?u`<wui-image src=${t} alt="Swap image"></wui-image>`:null}fiatTemplate(){return u`<wui-icon
      class="fallback-icon"
      size=${G[this.size]}
      name="dollar"
    ></wui-icon>`}unknownTemplate(){return u`<wui-icon
      class="fallback-icon"
      size=${G[this.size]}
      name="questionMark"
    ></wui-icon>`}tokenTemplate(){const[t]=this.images;return t?u`<wui-image src=${t} alt="Token image"></wui-image> `:u`<wui-icon
      class="fallback-icon"
      name=${this.type==="nft"?"image":"coinPlaceholder"}
    ></wui-icon>`}templateIcon(){return this.statusImageUrl?u`<wui-image
        class="status-image"
        src=${this.statusImageUrl}
        alt="Status image"
      ></wui-image>`:u`<wui-icon
      class="direction-icon"
      size=${G[this.size]}
      name=${this.getTemplateIcon()}
    ></wui-icon>`}getTemplateIcon(){return this.type==="trade"?"arrowClockWise":"arrowBottom"}};T.styles=[Oe];L([p()],T.prototype,"type",void 0);L([p()],T.prototype,"size",void 0);L([p()],T.prototype,"statusImageUrl",void 0);L([p({type:Array})],T.prototype,"images",void 0);T=L([M("wui-transaction-thumbnail")],T);const Ce=z`
  :host > wui-flex:first-child {
    gap: ${({spacing:e})=>e[2]};
    padding: ${({spacing:e})=>e[3]};
    width: 100%;
  }

  wui-flex {
    display: flex;
    flex: 1;
  }
`;var Se=function(e,t,i,o){var n=arguments.length,r=n<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(r=(n<3?s(r):n>3?s(t,i,r):s(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};let K=class extends k{render(){return u`
      <wui-flex alignItems="center">
        <wui-shimmer width="40px" height="40px" rounded></wui-shimmer>
        <wui-flex flexDirection="column" gap="1">
          <wui-shimmer width="124px" height="16px" rounded></wui-shimmer>
          <wui-shimmer width="60px" height="14px" rounded></wui-shimmer>
        </wui-flex>
        <wui-shimmer width="24px" height="12px" rounded></wui-shimmer>
      </wui-flex>
    `}};K.styles=[ie,Ce];K=Se([M("wui-transaction-list-item-loader")],K);const ke=z`
  :host {
    min-height: 100%;
  }

  .group-container[last-group='true'] {
    padding-bottom: ${({spacing:e})=>e[3]};
  }

  .contentContainer {
    height: 280px;
  }

  .contentContainer > wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: ${({borderRadius:e})=>e[3]};
  }

  .contentContainer > .textContent {
    width: 65%;
  }

  .emptyContainer {
    height: 100%;
  }
`;var I=function(e,t,i,o){var n=arguments.length,r=n<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(r=(n<3?s(r):n>3?s(t,i,r):s(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};const F="last-transaction",Ne=7;let v=class extends k{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.page="activity",this.caipAddress=j.state.activeCaipAddress,this.transactionsByYear=g.state.transactionsByYear,this.loading=g.state.loading,this.empty=g.state.empty,this.next=g.state.next,g.clearCursor(),this.unsubscribe.push(j.subscribeKey("activeCaipAddress",t=>{t&&this.caipAddress!==t&&(g.resetTransactions(),g.fetchTransactions(t)),this.caipAddress=t}),j.subscribeKey("activeCaipNetwork",()=>{this.updateTransactionView()}),g.subscribe(t=>{this.transactionsByYear=t.transactionsByYear,this.loading=t.loading,this.empty=t.empty,this.next=t.next}))}firstUpdated(){this.updateTransactionView(),this.createPaginationObserver()}updated(){this.setPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){return u` ${this.empty?null:this.templateTransactionsByYear()}
    ${this.loading?this.templateLoading():null}
    ${!this.loading&&this.empty?this.templateEmpty():null}`}updateTransactionView(){g.resetTransactions(),this.caipAddress&&g.fetchTransactions(q.getPlainAddress(this.caipAddress))}templateTransactionsByYear(){return Object.keys(this.transactionsByYear).sort().reverse().map(i=>{const o=parseInt(i,10),n=new Array(12).fill(null).map((r,s)=>{var l;const a=R.getTransactionGroupTitle(o,s),c=(l=this.transactionsByYear[o])==null?void 0:l[s];return{groupTitle:a,transactions:c}}).filter(({transactions:r})=>r).reverse();return n.map(({groupTitle:r,transactions:s},a)=>{const c=a===n.length-1;return s?u`
          <wui-flex
            flexDirection="column"
            class="group-container"
            last-group="${c?"true":"false"}"
            data-testid="month-indexes"
          >
            <wui-flex
              alignItems="center"
              flexDirection="row"
              .padding=${["2","3","3","3"]}
            >
              <wui-text variant="md-medium" color="secondary" data-testid="group-title">
                ${r}
              </wui-text>
            </wui-flex>
            <wui-flex flexDirection="column" gap="2">
              ${this.templateTransactions(s,c)}
            </wui-flex>
          </wui-flex>
        `:null})})}templateRenderTransaction(t,i){const{date:o,descriptions:n,direction:r,isAllNFT:s,images:a,status:c,transfers:l,type:d}=this.getTransactionListItemProps(t),m=(l==null?void 0:l.length)>1;return(l==null?void 0:l.length)===2&&!s?u`
        <wui-transaction-list-item
          date=${o}
          .direction=${r}
          id=${i&&this.next?F:""}
          status=${c}
          type=${d}
          .images=${a}
          .descriptions=${n}
        ></wui-transaction-list-item>
      `:m?l.map((w,h)=>{const D=R.getTransferDescription(w),C=i&&h===l.length-1;return u` <wui-transaction-list-item
          date=${o}
          direction=${w.direction}
          id=${C&&this.next?F:""}
          status=${c}
          type=${d}
          .onlyDirectionIcon=${!0}
          .images=${[a[h]]}
          .descriptions=${[D]}
        ></wui-transaction-list-item>`}):u`
      <wui-transaction-list-item
        date=${o}
        .direction=${r}
        id=${i&&this.next?F:""}
        status=${c}
        type=${d}
        .images=${a}
        .descriptions=${n}
      ></wui-transaction-list-item>
    `}templateTransactions(t,i){return t.map((o,n)=>{const r=i&&n===t.length-1;return u`${this.templateRenderTransaction(o,r)}`})}emptyStateActivity(){return u`<wui-flex
      class="emptyContainer"
      flexGrow="1"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      .padding=${["10","5","10","5"]}
      gap="5"
      data-testid="empty-activity-state"
    >
      <wui-icon-box color="default" icon="wallet" size="xl"></wui-icon-box>
      <wui-flex flexDirection="column" alignItems="center" gap="2">
        <wui-text align="center" variant="lg-medium" color="primary">No Transactions yet</wui-text>
        <wui-text align="center" variant="lg-regular" color="secondary"
          >Start trading on dApps <br />
          to grow your wallet!</wui-text
        >
      </wui-flex>
    </wui-flex>`}emptyStateAccount(){return u`<wui-flex
      class="contentContainer"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      gap="4"
      data-testid="empty-account-state"
    >
      <wui-icon-box icon="swapHorizontal" size="lg" color="default"></wui-icon-box>
      <wui-flex
        class="textContent"
        gap="2"
        flexDirection="column"
        justifyContent="center"
        flexDirection="column"
      >
        <wui-text variant="md-regular" align="center" color="primary">No activity yet</wui-text>
        <wui-text variant="sm-regular" align="center" color="secondary"
          >Your next transactions will appear here</wui-text
        >
      </wui-flex>
      <wui-link @click=${this.onReceiveClick.bind(this)}>Trade</wui-link>
    </wui-flex>`}templateEmpty(){return this.page==="account"?u`${this.emptyStateAccount()}`:u`${this.emptyStateActivity()}`}templateLoading(){return this.page==="activity"?Array(Ne).fill(u` <wui-transaction-list-item-loader></wui-transaction-list-item-loader> `).map(t=>t):null}onReceiveClick(){oe.push("WalletReceive")}createPaginationObserver(){const{projectId:t}=ne.state;this.paginationObserver=new IntersectionObserver(([i])=>{i!=null&&i.isIntersecting&&!this.loading&&(g.fetchTransactions(q.getPlainAddress(this.caipAddress)),se.sendEvent({type:"track",event:"LOAD_MORE_TRANSACTIONS",properties:{address:q.getPlainAddress(this.caipAddress),projectId:t,cursor:this.next,isSmartAccount:ae(j.state.activeChain)===le.ACCOUNT_TYPES.SMART_ACCOUNT}}))},{}),this.setPaginationObserver()}setPaginationObserver(){var i,o,n;(i=this.paginationObserver)==null||i.disconnect();const t=(o=this.shadowRoot)==null?void 0:o.querySelector(`#${F}`);t&&((n=this.paginationObserver)==null||n.observe(t))}getTransactionListItemProps(t){var c,l,d,m,f;const i=J.formatDate((c=t==null?void 0:t.metadata)==null?void 0:c.minedAt),o=R.getTransactionDescriptions(t),n=t==null?void 0:t.transfers,r=(l=t==null?void 0:t.transfers)==null?void 0:l[0],s=!!r&&((d=t==null?void 0:t.transfers)==null?void 0:d.every(w=>!!w.nft_info)),a=R.getTransactionImages(n);return{date:i,direction:r==null?void 0:r.direction,descriptions:o,isAllNFT:s,images:a,status:(m=t.metadata)==null?void 0:m.status,transfers:n,type:(f=t.metadata)==null?void 0:f.operationType}}};v.styles=ke;I([p()],v.prototype,"page",void 0);I([N()],v.prototype,"caipAddress",void 0);I([N()],v.prototype,"transactionsByYear",void 0);I([N()],v.prototype,"loading",void 0);I([N()],v.prototype,"empty",void 0);I([N()],v.prototype,"next",void 0);v=I([M("w3m-activity-list")],v);
