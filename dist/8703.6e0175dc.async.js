"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[8703],{38703:function(ct,ve,p){p.d(ve,{Z:function(){return it}});var s=p(67294),he=p(76278),ye=p(64894),Ce=p(17012),Se=p(62208),$e=p(93967),D=p.n($e),be=p(98423),ke=p(53124),ne=p(87462),z=p(1413),oe=p(91),se={percent:0,prefixCls:"rc-progress",strokeColor:"#2db7f5",strokeLinecap:"round",strokeWidth:1,trailColor:"#D9D9D9",trailWidth:1,gapPosition:"bottom"},ie=function(){var t=(0,s.useRef)([]),r=(0,s.useRef)(null);return(0,s.useEffect)(function(){var n=Date.now(),o=!1;t.current.forEach(function(l){if(l){o=!0;var i=l.style;i.transitionDuration=".3s, .3s, .3s, .06s",r.current&&n-r.current<100&&(i.transitionDuration="0s, 0s")}}),o&&(r.current=Date.now())}),t.current},xe=["className","percent","prefixCls","strokeColor","strokeLinecap","strokeWidth","style","trailColor","trailWidth","transition"],Pe=function(t){var r=(0,z.Z)((0,z.Z)({},se),t),n=r.className,o=r.percent,l=r.prefixCls,i=r.strokeColor,c=r.strokeLinecap,a=r.strokeWidth,f=r.style,d=r.trailColor,g=r.trailWidth,m=r.transition,$=(0,oe.Z)(r,xe);delete $.gapPosition;var v=Array.isArray(o)?o:[o],h=Array.isArray(i)?i:[i],y=ie(),C=a/2,S=100-a/2,O="M ".concat(c==="round"?C:0,",").concat(C,`
         L `).concat(c==="round"?S:100,",").concat(C),E="0 0 100 ".concat(a),b=0;return s.createElement("svg",(0,ne.Z)({className:D()("".concat(l,"-line"),n),viewBox:E,preserveAspectRatio:"none",style:f},$),s.createElement("path",{className:"".concat(l,"-line-trail"),d:O,strokeLinecap:c,stroke:d,strokeWidth:g||a,fillOpacity:"0"}),v.map(function(k,P){var x=1;switch(c){case"round":x=1-a/100;break;case"square":x=1-a/2/100;break;default:x=1;break}var I={strokeDasharray:"".concat(k*x,"px, 100px"),strokeDashoffset:"-".concat(b,"px"),transition:m||"stroke-dashoffset 0.3s ease 0s, stroke-dasharray .3s ease 0s, stroke 0.3s linear"},u=h[P]||h[h.length-1];return b+=k,s.createElement("path",{key:P,className:"".concat(l,"-line-path"),d:O,strokeLinecap:c,stroke:u,strokeWidth:a,fillOpacity:"0",ref:function(R){y[P]=R},style:I})}))},Ee=Pe,X=p(71002),Ie=p(97685),Oe=p(98924),ae=0,Le=(0,Oe.Z)();function je(){var e;return Le?(e=ae,ae+=1):e="TEST_OR_SSR",e}var We=function(e){var t=s.useState(),r=(0,Ie.Z)(t,2),n=r[0],o=r[1];return s.useEffect(function(){o("rc_progress_".concat(je()))},[]),e||n},ce=function(t){var r=t.bg,n=t.children;return s.createElement("div",{style:{width:"100%",height:"100%",background:r}},n)};function le(e,t){return Object.keys(e).map(function(r){var n=parseFloat(r),o="".concat(Math.floor(n*t),"%");return"".concat(e[r]," ").concat(o)})}var we=s.forwardRef(function(e,t){var r=e.prefixCls,n=e.color,o=e.gradientId,l=e.radius,i=e.style,c=e.ptg,a=e.strokeLinecap,f=e.strokeWidth,d=e.size,g=e.gapDegree,m=n&&(0,X.Z)(n)==="object",$=m?"#FFF":void 0,v=d/2,h=s.createElement("circle",{className:"".concat(r,"-circle-path"),r:l,cx:v,cy:v,stroke:$,strokeLinecap:a,strokeWidth:f,opacity:c===0?0:1,style:i,ref:t});if(!m)return h;var y="".concat(o,"-conic"),C=g?"".concat(180+g/2,"deg"):"0deg",S=le(n,(360-g)/360),O=le(n,1),E="conic-gradient(from ".concat(C,", ").concat(S.join(", "),")"),b="linear-gradient(to ".concat(g?"bottom":"top",", ").concat(O.join(", "),")");return s.createElement(s.Fragment,null,s.createElement("mask",{id:y},h),s.createElement("foreignObject",{x:0,y:0,width:d,height:d,mask:"url(#".concat(y,")")},s.createElement(ce,{bg:b},s.createElement(ce,{bg:E}))))}),Ae=we,G=100,_=function(t,r,n,o,l,i,c,a,f,d){var g=arguments.length>10&&arguments[10]!==void 0?arguments[10]:0,m=n/100*360*((360-i)/360),$=i===0?0:{bottom:0,top:180,left:90,right:-90}[c],v=(100-o)/100*r;f==="round"&&o!==100&&(v+=d/2,v>=r&&(v=r-.01));var h=G/2;return{stroke:typeof a=="string"?a:void 0,strokeDasharray:"".concat(r,"px ").concat(t),strokeDashoffset:v+g,transform:"rotate(".concat(l+m+$,"deg)"),transformOrigin:"".concat(h,"px ").concat(h,"px"),transition:"stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s, stroke-width .06s ease .3s, opacity .3s ease 0s",fillOpacity:0}},De=["id","prefixCls","steps","strokeWidth","trailWidth","gapDegree","gapPosition","trailColor","strokeLinecap","style","className","strokeColor","percent"];function de(e){var t=e!=null?e:[];return Array.isArray(t)?t:[t]}var Ne=function(t){var r=(0,z.Z)((0,z.Z)({},se),t),n=r.id,o=r.prefixCls,l=r.steps,i=r.strokeWidth,c=r.trailWidth,a=r.gapDegree,f=a===void 0?0:a,d=r.gapPosition,g=r.trailColor,m=r.strokeLinecap,$=r.style,v=r.className,h=r.strokeColor,y=r.percent,C=(0,oe.Z)(r,De),S=G/2,O=We(n),E="".concat(O,"-gradient"),b=S-i/2,k=Math.PI*2*b,P=f>0?90+f/2:-90,x=k*((360-f)/360),I=(0,X.Z)(l)==="object"?l:{count:l,gap:2},u=I.count,H=I.gap,R=de(y),N=de(h),T=N.find(function(j){return j&&(0,X.Z)(j)==="object"}),Z=T&&(0,X.Z)(T)==="object",A=Z?"butt":m,V=_(k,x,0,100,P,f,d,g,A,i),J=ie(),W=function(){var B=0;return R.map(function(M,F){var te=N[F]||N[N.length-1],K=_(k,x,B,M,P,f,d,te,A,i);return B+=M,s.createElement(Ae,{key:F,color:te,ptg:M,radius:b,prefixCls:o,gradientId:E,style:K,strokeLinecap:A,strokeWidth:i,gapDegree:f,ref:function(re){J[F]=re},size:G})}).reverse()},L=function(){var B=Math.round(u*(R[0]/100)),M=100/u,F=0;return new Array(u).fill(null).map(function(te,K){var q=K<=B-1?N[0]:g,re=q&&(0,X.Z)(q)==="object"?"url(#".concat(E,")"):void 0,me=_(k,x,F,M,P,f,d,q,"butt",i,H);return F+=(x-me.strokeDashoffset+H)*100/x,s.createElement("circle",{key:K,className:"".concat(o,"-circle-path"),r:b,cx:S,cy:S,stroke:re,strokeWidth:i,opacity:1,style:me,ref:function(at){J[K]=at}})})};return s.createElement("svg",(0,ne.Z)({className:D()("".concat(o,"-circle"),v),viewBox:"0 0 ".concat(G," ").concat(G),style:$,id:n,role:"presentation"},C),!u&&s.createElement("circle",{className:"".concat(o,"-circle-trail"),r:b,cx:S,cy:S,stroke:g,strokeLinecap:A,strokeWidth:c||i,style:V}),u?L():W())},ue=Ne,lt={Line:Ee,Circle:ue},Te=p(83062),ee=p(78589);function w(e){return!e||e<0?0:e>100?100:e}function U(e){let{success:t,successPercent:r}=e,n=r;return t&&"progress"in t&&(n=t.progress),t&&"percent"in t&&(n=t.percent),n}const Ze=e=>{let{percent:t,success:r,successPercent:n}=e;const o=w(U({success:r,successPercent:n}));return[o,w(w(t)-o)]},Me=e=>{let{success:t={},strokeColor:r}=e;const{strokeColor:n}=t;return[n||ee.ez.green,r||null]},Q=(e,t,r)=>{var n,o,l,i;let c=-1,a=-1;if(t==="step"){const f=r.steps,d=r.strokeWidth;typeof e=="string"||typeof e=="undefined"?(c=e==="small"?2:14,a=d!=null?d:8):typeof e=="number"?[c,a]=[e,e]:[c=14,a=8]=Array.isArray(e)?e:[e.width,e.height],c*=f}else if(t==="line"){const f=r==null?void 0:r.strokeWidth;typeof e=="string"||typeof e=="undefined"?a=f||(e==="small"?6:8):typeof e=="number"?[c,a]=[e,e]:[c=-1,a=8]=Array.isArray(e)?e:[e.width,e.height]}else(t==="circle"||t==="dashboard")&&(typeof e=="string"||typeof e=="undefined"?[c,a]=e==="small"?[60,60]:[120,120]:typeof e=="number"?[c,a]=[e,e]:Array.isArray(e)&&(c=(o=(n=e[0])!==null&&n!==void 0?n:e[1])!==null&&o!==void 0?o:120,a=(i=(l=e[0])!==null&&l!==void 0?l:e[1])!==null&&i!==void 0?i:120));return[c,a]},Re=3,Be=e=>Re/e*100;var Fe=e=>{const{prefixCls:t,trailColor:r=null,strokeLinecap:n="round",gapPosition:o,gapDegree:l,width:i=120,type:c,children:a,success:f,size:d=i,steps:g}=e,[m,$]=Q(d,"circle");let{strokeWidth:v}=e;v===void 0&&(v=Math.max(Be(m),6));const h={width:m,height:$,fontSize:m*.15+6},y=s.useMemo(()=>{if(l||l===0)return l;if(c==="dashboard")return 75},[l,c]),C=Ze(e),S=o||c==="dashboard"&&"bottom"||void 0,O=Object.prototype.toString.call(e.strokeColor)==="[object Object]",E=Me({success:f,strokeColor:e.strokeColor}),b=D()(`${t}-inner`,{[`${t}-circle-gradient`]:O}),k=s.createElement(ue,{steps:g,percent:g?C[1]:C,strokeWidth:v,trailWidth:v,strokeColor:g?E[1]:E,strokeLinecap:n,trailColor:r,prefixCls:t,gapDegree:y,gapPosition:S}),P=m<=20,x=s.createElement("div",{className:b,style:h},k,!P&&a);return P?s.createElement(Te.Z,{title:a},x):x},fe=p(54548),Xe=p(14747),Ge=p(56023),He=p(45503);const Y="--progress-line-stroke-color",ge="--progress-percent",pe=e=>{const t=e?"100%":"-100%";return new fe.E4(`antProgress${e?"RTL":"LTR"}Active`,{"0%":{transform:`translateX(${t}) scaleX(0)`,opacity:.1},"20%":{transform:`translateX(${t}) scaleX(0)`,opacity:.5},to:{transform:"translateX(0) scaleX(1)",opacity:0}})},Ve=e=>{const{componentCls:t,iconCls:r}=e;return{[t]:Object.assign(Object.assign({},(0,Xe.Wf)(e)),{display:"inline-block","&-rtl":{direction:"rtl"},"&-line":{position:"relative",width:"100%",fontSize:e.fontSize},[`${t}-outer`]:{display:"inline-flex",alignItems:"center",width:"100%"},[`${t}-inner`]:{position:"relative",display:"inline-block",width:"100%",flex:1,overflow:"hidden",verticalAlign:"middle",backgroundColor:e.remainingColor,borderRadius:e.lineBorderRadius},[`${t}-inner:not(${t}-circle-gradient)`]:{[`${t}-circle-path`]:{stroke:e.defaultColor}},[`${t}-success-bg, ${t}-bg`]:{position:"relative",background:e.defaultColor,borderRadius:e.lineBorderRadius,transition:`all ${e.motionDurationSlow} ${e.motionEaseInOutCirc}`},[`${t}-layout-bottom`]:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",[`${t}-text`]:{width:"max-content",marginInlineStart:0,marginTop:e.marginXXS}},[`${t}-bg`]:{overflow:"hidden","&::after":{content:'""',background:{_multi_value_:!0,value:["inherit",`var(${Y})`]},height:"100%",width:`calc(1 / var(${ge}) * 100%)`,display:"block"},[`&${t}-bg-inner`]:{minWidth:"max-content","&::after":{content:"none"},[`${t}-text-inner`]:{color:e.colorWhite,[`&${t}-text-bright`]:{color:"rgba(0, 0, 0, 0.45)"}}}},[`${t}-success-bg`]:{position:"absolute",insetBlockStart:0,insetInlineStart:0,backgroundColor:e.colorSuccess},[`${t}-text`]:{display:"inline-block",marginInlineStart:e.marginXS,color:e.colorText,lineHeight:1,width:"2em",whiteSpace:"nowrap",textAlign:"start",verticalAlign:"middle",wordBreak:"normal",[r]:{fontSize:e.fontSize},[`&${t}-text-outer`]:{width:"max-content"},[`&${t}-text-outer${t}-text-start`]:{width:"max-content",marginInlineStart:0,marginInlineEnd:e.marginXS}},[`${t}-text-inner`]:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%",marginInlineStart:0,padding:`0 ${(0,fe.bf)(e.paddingXXS)}`,[`&${t}-text-start`]:{justifyContent:"start"},[`&${t}-text-end`]:{justifyContent:"end"}},[`&${t}-status-active`]:{[`${t}-bg::before`]:{position:"absolute",inset:0,backgroundColor:e.colorBgContainer,borderRadius:e.lineBorderRadius,opacity:0,animationName:pe(),animationDuration:e.progressActiveMotionDuration,animationTimingFunction:e.motionEaseOutQuint,animationIterationCount:"infinite",content:'""'}},[`&${t}-rtl${t}-status-active`]:{[`${t}-bg::before`]:{animationName:pe(!0)}},[`&${t}-status-exception`]:{[`${t}-bg`]:{backgroundColor:e.colorError},[`${t}-text`]:{color:e.colorError}},[`&${t}-status-exception ${t}-inner:not(${t}-circle-gradient)`]:{[`${t}-circle-path`]:{stroke:e.colorError}},[`&${t}-status-success`]:{[`${t}-bg`]:{backgroundColor:e.colorSuccess},[`${t}-text`]:{color:e.colorSuccess}},[`&${t}-status-success ${t}-inner:not(${t}-circle-gradient)`]:{[`${t}-circle-path`]:{stroke:e.colorSuccess}}})}},Ke=e=>{const{componentCls:t,iconCls:r}=e;return{[t]:{[`${t}-circle-trail`]:{stroke:e.remainingColor},[`&${t}-circle ${t}-inner`]:{position:"relative",lineHeight:1,backgroundColor:"transparent"},[`&${t}-circle ${t}-text`]:{position:"absolute",insetBlockStart:"50%",insetInlineStart:0,width:"100%",margin:0,padding:0,color:e.circleTextColor,fontSize:e.circleTextFontSize,lineHeight:1,whiteSpace:"normal",textAlign:"center",transform:"translateY(-50%)",[r]:{fontSize:e.circleIconFontSize}},[`${t}-circle&-status-exception`]:{[`${t}-text`]:{color:e.colorError}},[`${t}-circle&-status-success`]:{[`${t}-text`]:{color:e.colorSuccess}}},[`${t}-inline-circle`]:{lineHeight:1,[`${t}-inner`]:{verticalAlign:"bottom"}}}},ze=e=>{const{componentCls:t}=e;return{[t]:{[`${t}-steps`]:{display:"inline-block","&-outer":{display:"flex",flexDirection:"row",alignItems:"center"},"&-item":{flexShrink:0,minWidth:e.progressStepMinWidth,marginInlineEnd:e.progressStepMarginInlineEnd,backgroundColor:e.remainingColor,transition:`all ${e.motionDurationSlow}`,"&-active":{backgroundColor:e.defaultColor}}}}}},Ue=e=>{const{componentCls:t,iconCls:r}=e;return{[t]:{[`${t}-small&-line, ${t}-small&-line ${t}-text ${r}`]:{fontSize:e.fontSizeSM}}}},Qe=e=>({circleTextColor:e.colorText,defaultColor:e.colorInfo,remainingColor:e.colorFillSecondary,lineBorderRadius:100,circleTextFontSize:"1em",circleIconFontSize:`${e.fontSize/e.fontSizeSM}em`});var Ye=(0,Ge.I$)("Progress",e=>{const t=e.calc(e.marginXXS).div(2).equal(),r=(0,He.TS)(e,{progressStepMarginInlineEnd:t,progressStepMinWidth:t,progressActiveMotionDuration:"2.4s"});return[Ve(r),Ke(r),ze(r),Ue(r)]},Qe),Je=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r};const qe=e=>{let t=[];return Object.keys(e).forEach(r=>{const n=parseFloat(r.replace(/%/g,""));isNaN(n)||t.push({key:n,value:e[r]})}),t=t.sort((r,n)=>r.key-n.key),t.map(r=>{let{key:n,value:o}=r;return`${o} ${n}%`}).join(", ")},_e=(e,t)=>{const{from:r=ee.ez.blue,to:n=ee.ez.blue,direction:o=t==="rtl"?"to left":"to right"}=e,l=Je(e,["from","to","direction"]);if(Object.keys(l).length!==0){const c=qe(l),a=`linear-gradient(${o}, ${c})`;return{background:a,[Y]:a}}const i=`linear-gradient(${o}, ${r}, ${n})`;return{background:i,[Y]:i}};var et=e=>{const{prefixCls:t,direction:r,percent:n,size:o,strokeWidth:l,strokeColor:i,strokeLinecap:c="round",children:a,trailColor:f=null,percentPosition:d,success:g}=e,{align:m,type:$}=d,v=i&&typeof i!="string"?_e(i,r):{[Y]:i,background:i},h=c==="square"||c==="butt"?0:void 0,y=o!=null?o:[-1,l||(o==="small"?6:8)],[C,S]=Q(y,"line",{strokeWidth:l}),O={backgroundColor:f||void 0,borderRadius:h},E=Object.assign(Object.assign({width:`${w(n)}%`,height:S,borderRadius:h},v),{[ge]:w(n)/100}),b=U(e),k={width:`${w(b)}%`,height:S,borderRadius:h,backgroundColor:g==null?void 0:g.strokeColor},P={width:C<0?"100%":C},x=s.createElement("div",{className:`${t}-inner`,style:O},s.createElement("div",{className:D()(`${t}-bg`,`${t}-bg-${$}`),style:E},$==="inner"&&a),b!==void 0&&s.createElement("div",{className:`${t}-success-bg`,style:k})),I=$==="outer"&&m==="start",u=$==="outer"&&m==="end";return $==="outer"&&m==="center"?s.createElement("div",{className:`${t}-layout-bottom`},x,a):s.createElement("div",{className:`${t}-outer`,style:P},I&&a,x,u&&a)},tt=e=>{const{size:t,steps:r,percent:n=0,strokeWidth:o=8,strokeColor:l,trailColor:i=null,prefixCls:c,children:a}=e,f=Math.round(r*(n/100)),d=t==="small"?2:14,g=t!=null?t:[d,o],[m,$]=Q(g,"step",{steps:r,strokeWidth:o}),v=m/r,h=new Array(r);for(let y=0;y<r;y++){const C=Array.isArray(l)?l[y]:l;h[y]=s.createElement("div",{key:y,className:D()(`${c}-steps-item`,{[`${c}-steps-item-active`]:y<=f-1}),style:{backgroundColor:y<=f-1?C:i,width:v,height:$}})}return s.createElement("div",{className:`${c}-steps-outer`},h,a)},rt=p(10274),nt=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r};const gt=null,ot=["normal","exception","active","success"];var st=s.forwardRef((e,t)=>{const{prefixCls:r,className:n,rootClassName:o,steps:l,strokeColor:i,percent:c=0,size:a="default",showInfo:f=!0,type:d="line",status:g,format:m,style:$,percentPosition:v={}}=e,h=nt(e,["prefixCls","className","rootClassName","steps","strokeColor","percent","size","showInfo","type","status","format","style","percentPosition"]),{align:y="end",type:C="outer"}=v,S=Array.isArray(i)?i[0]:i,O=typeof i=="string"||Array.isArray(i)?i:void 0,E=s.useMemo(()=>{if(S){const W=typeof S=="string"?S:Object.values(S)[0];return new rt.C(W).isLight()}return!1},[i]),b=s.useMemo(()=>{var W,L;const j=U(e);return parseInt(j!==void 0?(W=j!=null?j:0)===null||W===void 0?void 0:W.toString():(L=c!=null?c:0)===null||L===void 0?void 0:L.toString(),10)},[c,e.success,e.successPercent]),k=s.useMemo(()=>!ot.includes(g)&&b>=100?"success":g||"normal",[g,b]),{getPrefixCls:P,direction:x,progress:I}=s.useContext(ke.E_),u=P("progress",r),[H,R,N]=Ye(u),T=d==="line",Z=T&&!l,A=s.useMemo(()=>{if(!f)return null;const W=U(e);let L;const j=m||(M=>`${M}%`),B=T&&E&&C==="inner";return C==="inner"||m||k!=="exception"&&k!=="success"?L=j(w(c),w(W)):k==="exception"?L=T?s.createElement(Ce.Z,null):s.createElement(Se.Z,null):k==="success"&&(L=T?s.createElement(he.Z,null):s.createElement(ye.Z,null)),s.createElement("span",{className:D()(`${u}-text`,{[`${u}-text-bright`]:B,[`${u}-text-${y}`]:Z,[`${u}-text-${C}`]:Z}),title:typeof L=="string"?L:void 0},L)},[f,c,b,k,d,u,m]);let V;d==="line"?V=l?s.createElement(tt,Object.assign({},e,{strokeColor:O,prefixCls:u,steps:typeof l=="object"?l.count:l}),A):s.createElement(et,Object.assign({},e,{strokeColor:S,prefixCls:u,direction:x,percentPosition:{align:y,type:C}}),A):(d==="circle"||d==="dashboard")&&(V=s.createElement(Fe,Object.assign({},e,{strokeColor:S,prefixCls:u,progressStatus:k}),A));const J=D()(u,`${u}-status-${k}`,{[`${u}-${d==="dashboard"&&"circle"||d}`]:d!=="line",[`${u}-inline-circle`]:d==="circle"&&Q(a,"circle")[0]<=20,[`${u}-line`]:Z,[`${u}-line-align-${y}`]:Z,[`${u}-line-position-${C}`]:Z,[`${u}-steps`]:l,[`${u}-show-info`]:f,[`${u}-${a}`]:typeof a=="string",[`${u}-rtl`]:x==="rtl"},I==null?void 0:I.className,n,o,R,N);return H(s.createElement("div",Object.assign({ref:t,style:Object.assign(Object.assign({},I==null?void 0:I.style),$),className:J,role:"progressbar","aria-valuenow":b},(0,be.Z)(h,["trailColor","strokeWidth","width","gapDegree","gapPosition","strokeLinecap","success","successPercent"])),V))}),it=st}}]);
