const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/privyConnector--nGFtbB8.js","assets/jsx-runtime-DF5SV9au.js","assets/index-TjLUG_Bo.js","assets/index-B1yGdhtz.js","assets/walletConnect-BmfqopVd.js","assets/isAddressEqual-BZ0F7Med.js","assets/index.es-CQTua3R0.js","assets/sha3-C47P6eDd.js","assets/_u64-CPCIv9dJ.js","assets/hooks.module-B3Nfv_UP.js","assets/index-7JkPJWjm.js","assets/index-BHYcTakE.js","assets/sha2-Cuix5xAA.js","assets/walletConnector-bBSWenva.js","assets/lit-element-nGwg5-HZ.js","assets/_commonjs-dynamic-modules-TDtrdbi3.js","assets/fallback-zV5QAe9Q.js"])))=>i.map(i=>d[i]);
import{j as e}from"./jsx-runtime-DF5SV9au.js";import{aW as R,aX as D,aY as y,aN as L}from"./index-B1yGdhtz.js";import{r as i}from"./index-TjLUG_Bo.js";import{i as M}from"./index-BHYcTakE.js";import{u as A,w as f}from"./config-BjWGQWqg.js";import{a as _,g as $}from"./seo-CnldTrz-.js";import{c as T,d as W,e as z,O as F}from"./index-DWebz2o4.js";import{u as J,_ as U,M as Y,L as H,S as K}from"./components-DGokT-SI.js";/**
 * @remix-run/react v2.16.8
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */let x="positions";function V({getKey:t,...r}){let{isSpaMode:c}=J(),o=T(),m=W();z({getKey:t,storageKey:x});let u=i.useMemo(()=>{if(!t)return null;let s=t(o,m);return s!==o.key?s:null},[]);if(c)return null;let p=((s,d)=>{if(!window.history.state||!window.history.state.key){let l=Math.random().toString(32).slice(2);window.history.replaceState({key:l},"")}try{let g=JSON.parse(sessionStorage.getItem(s)||"{}")[d||window.history.state.key];typeof g=="number"&&window.scrollTo(0,g)}catch(l){console.error(l),sessionStorage.removeItem(s)}}).toString();return i.createElement("script",U({},r,{suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`(${p})(${JSON.stringify(x)}, ${JSON.stringify(u)})`}}))}const k="orderly_network_id",j=()=>typeof window>"u"?"mainnet":localStorage.getItem(k)||"mainnet",B=t=>{typeof window<"u"&&localStorage.setItem(k,t)},h=()=>{const t="en,zh,ja".split(",").map(r=>r.trim()).filter(r=>r.length>0)||[];return t.length>0?t:["en"]},X=()=>{const t=_(),r=h();if(typeof window<"u"){const o=new URLSearchParams(window.location.search).get("lang");if(o&&r.includes(o))return o}return r.includes(t)?t:r[0]||"en"},S=()=>e.jsxs("div",{className:"loading-container",children:[e.jsx("div",{className:"loading-spinner"}),e.jsx("style",{children:`
				.loading-container {
					display: flex;
					justify-content: center;
					align-items: center;
					width: 100%;
					height: 100vh;
					background-color: rgba(0, 0, 0, 0.03);
				}
				.loading-spinner {
					width: 50px;
					height: 50px;
					border: 4px solid rgba(0, 0, 0, 0.1);
					border-radius: 50%;
					border-left-color: #09f;
					animation: spin 1s linear infinite;
				}
				@keyframes spin {
					0% {
						transform: rotate(0deg);
					}
					100% {
						transform: rotate(360deg);
					}
				}
			`})]});i.lazy(()=>L(()=>import("./privyConnector--nGFtbB8.js").then(t=>t.P),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12])));const Z=i.lazy(()=>L(()=>import("./walletConnector-bBSWenva.js").then(t=>t.w),__vite__mapDeps([13,1,2,3,4,14,15,16]))),q=t=>{const r=A(),c=j(),[o,m]=i.useState(!1),u=a=>{if(a)return a.split(",").map(n=>n.trim()).filter(n=>n).map(n=>({id:parseInt(n,10)})).filter(n=>!isNaN(n.id))},p=a=>{},s=u("1,56,43114,1329,900900900,146,1514,80094,42161,8453"),d=u("97,421614"),l=s||d?{...s&&{mainnet:s},...d&&{testnet:d}}:void 0,g=p();i.useEffect(()=>{m(!0)},[]);const v=i.useCallback((a,{isTestnet:n})=>{const w=j();(n&&w==="mainnet"||!n&&w==="testnet")&&(B(n?"testnet":"mainnet"),setTimeout(()=>{window.location.reload()},100))},[]),I=async a=>{if(typeof window<"u"){const n=new URL(window.location.href);a===y.en?n.searchParams.delete("lang"):n.searchParams.set("lang",a),window.history.replaceState({},"",n.toString())}},b=a=>h().includes(a)?a===y.en?f(`/locales/extend/${a}.json`):[f(`/locales/${a}.json`),f(`/locales/extend/${a}.json`)]:[],C=X(),P=h(),N=R.filter(a=>P.includes(a.localCode)),E=e.jsx(M,{brokerId:"demo",brokerName:"WZ_temp",networkId:c,onChainChanged:v,appIcons:r.orderlyAppProvider.appIcons,...l&&{chainFilter:l},defaultChain:g,children:t.children});if(!o)return e.jsx(S,{});const O=e.jsx(Z,{networkId:c,children:E});return e.jsx(D,{onLanguageChanged:I,backend:{loadPath:b},locale:C,languages:N,children:e.jsx(i.Suspense,{fallback:e.jsx(S,{}),children:O})})},ie=()=>$();function le({children:t}){const r=_();return e.jsxs("html",{lang:r,children:[e.jsxs("head",{children:[e.jsx("meta",{charSet:"utf-8"}),e.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),e.jsx("link",{rel:"icon",type:"image/webp",href:f("/favicon.webp")}),e.jsx(Y,{}),e.jsx(H,{})]}),e.jsxs("body",{style:{paddingTop:"50px"},children:["ADFSDFSD",e.jsx(q,{children:t}),e.jsx(V,{}),e.jsx(K,{})]})]})}function ce(){return e.jsx(F,{})}export{le as Layout,ce as default,ie as meta};
