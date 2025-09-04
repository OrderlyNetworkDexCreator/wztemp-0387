import"./lit-html-_TTrhfbU.js";import{a as g,x as a}from"./lit-element-nGwg5-HZ.js";import{r as u}from"./class-map-D78VnDIV.js";import{c as y,b as f,R as w,S as h,A as P,C as k,d as A}from"./index-hE0wlW8G.js";import{c as b}from"./index-DSEXG_NF.js";import"./index-CPxfyDQe.js";import"./index-okBwvo_y.js";import"./index-D0yfWJaP.js";import"./index-B9OQ6bu2.js";import"./index-CYUNKNU6.js";import{E as i}from"./ExchangeController-CKUVvcCM.js";import"./index-8bO_JXwy.js";import"./index-DOcfw5yA.js";import"./index-DHUcy1MU.js";import"./index-DgapEBFM.js";import"./index-C_TL-L_o.js";import"./index-B1yGdhtz.js";import"./index-TjLUG_Bo.js";import"./jsx-runtime-DF5SV9au.js";import"./walletConnect-BmfqopVd.js";import"./index.es-CQTua3R0.js";import"./privyConnector--nGFtbB8.js";import"./isAddressEqual-BZ0F7Med.js";import"./sha3-C47P6eDd.js";import"./_u64-CPCIv9dJ.js";import"./hooks.module-B3Nfv_UP.js";import"./index-7JkPJWjm.js";import"./index-BHYcTakE.js";import"./sha2-Cuix5xAA.js";import"./index-T1rz9UxS.js";import"./if-defined-8ZKh-W65.js";import"./ref-3T9CwXfV.js";import"./async-directive-BuaOoYpE.js";const I=y`
  .amount-input-container {
    border-radius: ${({borderRadius:s})=>s[5]};
    border-top-right-radius: 0;
    border-top-left-radius: 0;
    border-bottom: 1px solid ${({tokens:s})=>s.core.glass010};
    background-color: ${({tokens:s})=>s.theme.backgroundPrimary};
  }

  .container {
    background-color: ${({tokens:s})=>s.theme.foregroundSecondary};
    border-radius: 30px;
  }
`;var l=function(s,e,n,t){var r=arguments.length,o=r<3?e:t===null?t=Object.getOwnPropertyDescriptor(e,n):t,m;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,e,n,t);else for(var p=s.length-1;p>=0;p--)(m=s[p])&&(o=(r<3?m(o):r>3?m(e,n,o):m(e,n))||o);return r>3&&o&&Object.defineProperty(e,n,o),o};const v=[10,50,100];let c=class extends g{constructor(){super(),this.unsubscribe=[],this.network=f.state.activeCaipNetwork,this.exchanges=i.state.exchanges,this.isLoading=i.state.isLoading,this.amount=i.state.amount,this.tokenAmount=i.state.tokenAmount,this.priceLoading=i.state.priceLoading,this.isPaymentInProgress=i.state.isPaymentInProgress,this.currentPayment=i.state.currentPayment,this.paymentId=i.state.paymentId,this.paymentAsset=i.state.paymentAsset,this.unsubscribe.push(f.subscribeKey("activeCaipNetwork",e=>{this.network=e,this.setDefaultPaymentAsset()}),i.subscribe(e=>{var t,r;this.exchanges=e.exchanges,this.isLoading=e.isLoading,this.amount=e.amount,this.tokenAmount=e.tokenAmount,this.priceLoading=e.priceLoading,this.paymentId=e.paymentId,this.isPaymentInProgress=e.isPaymentInProgress,this.currentPayment=e.currentPayment,this.paymentAsset=e.paymentAsset,e.isPaymentInProgress&&((t=e.currentPayment)==null?void 0:t.exchangeId)&&((r=e.currentPayment)==null?void 0:r.sessionId)&&e.paymentId&&this.handlePaymentInProgress()}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),i.reset()}async firstUpdated(){await this.getPaymentAssets(),this.paymentAsset||await this.setDefaultPaymentAsset(),await i.fetchExchanges()}render(){return a`
      <wui-flex flexDirection="column" gap="2" class="container">
        ${this.amountInputTemplate()} ${this.exchangesTemplate()}
      </wui-flex>
    `}exchangesLoadingTemplate(){return Array.from({length:2}).map(()=>a`<wui-shimmer width="100%" height="65px" borderRadius="xxs"></wui-shimmer>`)}_exchangesTemplate(){return this.exchanges.length>0?this.exchanges.map(e=>a`<wui-list-item
              @click=${()=>this.onExchangeClick(e)}
              chevron
              variant="image"
              imageSrc=${e.imageUrl}
              ?loading=${this.isLoading}
            >
              <wui-text variant="md-regular" color="secondary">
                Deposit from ${e.name}
              </wui-text>
            </wui-list-item>`):a`<wui-flex flexDirection="column" alignItems="center" gap="4" padding="4">
          <wui-text variant="lg-medium" align="center" color="primary">
            No exchanges support this asset on this network
          </wui-text>
        </wui-flex>`}exchangesTemplate(){return a`<wui-flex
      flexDirection="column"
      gap="2"
      .padding=${["3","3","3","3"]}
      class="exchanges-container"
    >
      ${this.isLoading?this.exchangesLoadingTemplate():this._exchangesTemplate()}
    </wui-flex>`}amountInputTemplate(){var e,n;return a`
      <wui-flex flexDirection="column" gap="3" .padding=${["0","3","3","3"]} class="amount-input-container">
        <wui-flex justifyContent="space-between" alignItems="center">
          <wui-text variant="md-medium" color="secondary">Asset</wui-text>

          <wui-token-button
            data-testid="deposit-from-exchange-asset-button"
            flexDirection="row-reverse"
            text=${((e=this.paymentAsset)==null?void 0:e.metadata.symbol)||""}
            imageSrc=${((n=this.paymentAsset)==null?void 0:n.metadata.iconUrl)||""}
            @click=${()=>w.push("PayWithExchangeSelectAsset")}
            >
          </wui-token-button>
        </wui-flex>
        <wui-flex flexDirection="column" alignItems="center" justifyContent="center">
          <wui-flex alignItems="center" gap="1">
            <wui-text variant="h2-regular" color="secondary">${this.amount}</wui-text>
            <wui-text variant="md-regular" color="secondary">USD</wui-text>
          </wui-flex>
          ${this.tokenAmountTemplate()}
          </wui-flex>
          <wui-flex justifyContent="space-between" gap="2">
            ${v.map(t=>a`<wui-button @click=${()=>this.onPresetAmountClick(t)} variant=${this.amount===t?"neutral-primary":"neutral-secondary"} size="sm" fullWidth>$${t}</wui-button>`)}
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}tokenAmountTemplate(){var e;return this.priceLoading?a`<wui-shimmer
        width="65px"
        height="20px"
        borderRadius="xxs"
        variant="light"
      ></wui-shimmer>`:a`
      <wui-text variant="md-regular" color="secondary">
        ${this.tokenAmount.toFixed(4)} ${(e=this.paymentAsset)==null?void 0:e.metadata.symbol}
      </wui-text>
    `}async onExchangeClick(e){if(!this.amount){h.showError("Please enter an amount");return}await i.handlePayWithExchange(e.id)}handlePaymentInProgress(){var n,t;const e=f.state.activeChain;this.isPaymentInProgress&&((n=this.currentPayment)!=null&&n.exchangeId)&&((t=this.currentPayment)!=null&&t.sessionId)&&this.paymentId&&(i.waitUntilComplete({exchangeId:this.currentPayment.exchangeId,sessionId:this.currentPayment.sessionId,paymentId:this.paymentId}).then(r=>{r.status==="SUCCESS"?(h.showSuccess("Deposit completed"),e&&(P.fetchTokenBalance(),k.updateBalance(e))):r.status==="FAILED"&&h.showError("Deposit failed")}),h.showLoading("Deposit in progress..."),w.replace("Account"))}onPresetAmountClick(e){i.setAmount(e)}async getPaymentAssets(){this.network&&await i.getAssetsForNetwork(this.network.caipNetworkId)}async setDefaultPaymentAsset(){if(this.network){const e=await i.getAssetsForNetwork(this.network.caipNetworkId);e[0]&&i.setPaymentAsset(e[0])}}};c.styles=I;l([u()],c.prototype,"network",void 0);l([u()],c.prototype,"exchanges",void 0);l([u()],c.prototype,"isLoading",void 0);l([u()],c.prototype,"amount",void 0);l([u()],c.prototype,"tokenAmount",void 0);l([u()],c.prototype,"priceLoading",void 0);l([u()],c.prototype,"isPaymentInProgress",void 0);l([u()],c.prototype,"currentPayment",void 0);l([u()],c.prototype,"paymentId",void 0);l([u()],c.prototype,"paymentAsset",void 0);c=l([b("w3m-deposit-from-exchange-view")],c);const $=y`
  .contentContainer {
    height: 440px;
    overflow: scroll;
    scrollbar-width: none;
  }

  .contentContainer::-webkit-scrollbar {
    display: none;
  }

  wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: ${({borderRadius:s})=>s[3]};
  }
`;var x=function(s,e,n,t){var r=arguments.length,o=r<3?e:t===null?t=Object.getOwnPropertyDescriptor(e,n):t,m;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,e,n,t);else for(var p=s.length-1;p>=0;p--)(m=s[p])&&(o=(r<3?m(o):r>3?m(e,n,o):m(e,n))||o);return r>3&&o&&Object.defineProperty(e,n,o),o};let d=class extends g{constructor(){super(),this.unsubscribe=[],this.assets=i.state.assets,this.search="",this.onDebouncedSearch=A.debounce(e=>{this.search=e}),this.unsubscribe.push(i.subscribe(e=>{this.assets=e.assets}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return a`
      <wui-flex flexDirection="column">
        ${this.templateSearchInput()} <wui-separator></wui-separator> ${this.templateTokens()}
      </wui-flex>
    `}templateSearchInput(){return a`
      <wui-flex gap="2" padding="3">
        <wui-input-text
          @inputChange=${this.onInputChange.bind(this)}
          class="network-search-input"
          size="sm"
          placeholder="Search token"
          icon="search"
        ></wui-input-text>
      </wui-flex>
    `}templateTokens(){const e=this.assets.filter(t=>t.metadata.name.toLowerCase().includes(this.search.toLowerCase())),n=e.length>0;return a`
      <wui-flex
        class="contentContainer"
        flexDirection="column"
        .padding=${["0","3","0","3"]}
      >
        <wui-flex justifyContent="flex-start" .padding=${["4","3","3","3"]}>
          <wui-text variant="md-medium" color="secondary">Available tokens</wui-text>
        </wui-flex>
        <wui-flex flexDirection="column" gap="2">
          ${n?e.map(t=>a`<wui-list-item
                    .imageSrc=${t.metadata.iconUrl}
                    ?clickable=${!0}
                    @click=${this.handleTokenClick.bind(this,t)}
                  >
                    <wui-text variant="md-medium" color="primary">${t.metadata.name}</wui-text>
                    <wui-text variant="md-regular" color="secondary"
                      >${t.metadata.symbol}</wui-text
                    >
                  </wui-list-item>`):a`<wui-flex
                .padding=${["20","0","0","0"]}
                alignItems="center"
                flexDirection="column"
                gap="4"
              >
                <wui-icon-box icon="coinPlaceholder" color="default" size="lg"></wui-icon-box>
                <wui-flex
                  class="textContent"
                  gap="2"
                  flexDirection="column"
                  justifyContent="center"
                >
                  <wui-text variant="lg-medium" align="center" color="primary">
                    No tokens found
                  </wui-text>
                </wui-flex>
                <wui-link @click=${this.onBuyClick.bind(this)}>Buy</wui-link>
              </wui-flex>`}
        </wui-flex>
      </wui-flex>
    `}onBuyClick(){w.push("OnRampProviders")}onInputChange(e){this.onDebouncedSearch(e.detail)}handleTokenClick(e){i.setPaymentAsset(e),w.goBack()}};d.styles=$;x([u()],d.prototype,"assets",void 0);x([u()],d.prototype,"search",void 0);d=x([b("w3m-deposit-from-exchange-select-asset-view")],d);export{d as W3mDepositFromExchangeSelectAssetView,c as W3mDepositFromExchangeView};
