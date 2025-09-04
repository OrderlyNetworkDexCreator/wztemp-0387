import"./lit-html-_TTrhfbU.js";import{b,a as _,x}from"./lit-element-nGwg5-HZ.js";import{n as y}from"./class-map-D78VnDIV.js";import{c as W}from"./index-DSEXG_NF.js";import"./index-D0yfWJaP.js";import{Q as M}from"./privyConnector--nGFtbB8.js";import{c as O,r as N}from"./index-hE0wlW8G.js";const Q=.1,I=2.5,$=7;function k(t,a,d){return t===a?!1:(t-a<0?a-t:t-a)<=d+Q}function A(t,a){const d=Array.prototype.slice.call(M.create(t,{errorCorrectionLevel:a}).modules.data,0),h=Math.sqrt(d.length);return d.reduce((l,f,p)=>(p%h===0?l.push([f]):l[l.length-1].push(f))&&l,[])}const q={generate({uri:t,size:a,logoSize:d,padding:h=8,dotColor:l="var(--apkt-tokens-theme-textInvert)"}){const p=[],u=A(t,"Q"),n=(a-2*h)/u.length,E=[{x:0,y:0},{x:1,y:0},{x:0,y:1}];E.forEach(({x:i,y:e})=>{const s=(u.length-$)*n*i+h,r=(u.length-$)*n*e+h,c=.45;for(let o=0;o<E.length;o+=1){const m=n*($-o*2);p.push(b`
            <rect
              fill=${o===2?"var(--apkt-tokens-theme-textInvert)":"var(--apkt-tokens-theme-textPrimary)"}
              width=${o===0?m-10:m}
              rx= ${o===0?(m-10)*c:m*c}
              ry= ${o===0?(m-10)*c:m*c}
              stroke=${l}
              stroke-width=${o===0?10:0}
              height=${o===0?m-10:m}
              x= ${o===0?r+n*o+10/2:r+n*o}
              y= ${o===0?s+n*o+10/2:s+n*o}
            />
          `)}});const z=Math.floor((d+25)/n),R=u.length/2-z/2,S=u.length/2+z/2-1,C=[];u.forEach((i,e)=>{i.forEach((s,r)=>{if(u[e][r]&&!(e<$&&r<$||e>u.length-($+1)&&r<$||e<$&&r>u.length-($+1))&&!(e>R&&e<S&&r>R&&r<S)){const c=e*n+n/2+h,o=r*n+n/2+h;C.push([c,o])}})});const v={};return C.forEach(([i,e])=>{var s;v[i]?(s=v[i])==null||s.push(e):v[i]=[e]}),Object.entries(v).map(([i,e])=>{const s=e.filter(r=>e.every(c=>!k(r,c,n)));return[Number(i),s]}).forEach(([i,e])=>{e.forEach(s=>{p.push(b`<circle cx=${i} cy=${s} fill=${l} r=${n/I} />`)})}),Object.entries(v).filter(([i,e])=>e.length>1).map(([i,e])=>{const s=e.filter(r=>e.some(c=>k(r,c,n)));return[Number(i),s]}).map(([i,e])=>{e.sort((r,c)=>r<c?-1:1);const s=[];for(const r of e){const c=s.find(o=>o.some(m=>k(r,m,n)));c?c.push(r):s.push([r])}return[i,s.map(r=>[r[0],r[r.length-1]])]}).forEach(([i,e])=>{e.forEach(([s,r])=>{p.push(b`
              <line
                x1=${i}
                x2=${i}
                y1=${s}
                y2=${r}
                stroke=${l}
                stroke-width=${n/(I/2)}
                stroke-linecap="round"
              />
            `)})}),p}},P=O`
  :host {
    position: relative;
    user-select: none;
    display: block;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    width: 100%;
    height: 100%;
    background-color: ${({tokens:t})=>t.theme.backgroundInvert};
    color: ${({tokens:t})=>t.theme.textInvert};
  }

  :host {
    border-radius: ${({borderRadius:t})=>t[4]};
    display: flex;
    align-items: center;
    justify-content: center;
  }

  :host([data-clear='true']) > wui-icon {
    display: none;
  }

  svg:first-child,
  wui-image,
  wui-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    background-color: ${({tokens:t})=>t.theme.backgroundPrimary};
    box-shadow: inset 0 0 0 4px ${({tokens:t})=>t.theme.backgroundPrimary};
    border-radius: ${({borderRadius:t})=>t[6]};
  }

  wui-image {
    width: 25%;
    height: 25%;
    border-radius: ${({borderRadius:t})=>t[2]};
  }

  wui-icon {
    width: 100%;
    height: 100%;
    color: #3396ff !important;
    transform: translateY(-50%) translateX(-50%) scale(0.25);
  }

  wui-icon > svg {
    width: inherit;
    height: inherit;
  }
`;var w=function(t,a,d,h){var l=arguments.length,f=l<3?a:h===null?h=Object.getOwnPropertyDescriptor(a,d):h,p;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")f=Reflect.decorate(t,a,d,h);else for(var u=t.length-1;u>=0;u--)(p=t[u])&&(f=(l<3?p(f):l>3?p(a,d,f):p(a,d))||f);return l>3&&f&&Object.defineProperty(a,d,f),f};let g=class extends _{constructor(){super(...arguments),this.uri="",this.size=0,this.theme="dark",this.imageSrc=void 0,this.alt=void 0,this.arenaClear=void 0,this.farcaster=void 0}render(){return this.dataset.theme=this.theme,this.dataset.clear=String(this.arenaClear),this.style.cssText=`--local-size: ${this.size}px`,x`<wui-flex
      alignItems="center"
      justifyContent="center"
      class="wui-qr-code"
      direction="column"
      gap="4"
      width="100%"
      style="height: 100%"
    >
      ${this.templateVisual()} ${this.templateSvg()}
    </wui-flex>`}templateSvg(){return b`
      <svg height=${this.size} width=${this.size}>
        ${q.generate({uri:this.uri,size:this.size,logoSize:this.arenaClear?0:this.size/4})}
      </svg>
    `}templateVisual(){return this.imageSrc?x`<wui-image src=${this.imageSrc} alt=${this.alt??"logo"}></wui-image>`:this.farcaster?x`<wui-icon
        class="farcaster"
        size="inherit"
        color="inherit"
        name="farcaster"
      ></wui-icon>`:x`<wui-icon size="inherit" color="inherit" name="walletConnect"></wui-icon>`}};g.styles=[N,P];w([y()],g.prototype,"uri",void 0);w([y({type:Number})],g.prototype,"size",void 0);w([y()],g.prototype,"theme",void 0);w([y()],g.prototype,"imageSrc",void 0);w([y()],g.prototype,"alt",void 0);w([y({type:Boolean})],g.prototype,"arenaClear",void 0);w([y({type:Boolean})],g.prototype,"farcaster",void 0);g=w([W("wui-qr-code")],g);
