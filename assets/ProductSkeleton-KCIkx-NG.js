import{ag as O,ah as X,_ as h,q as C,p as y,ai as K,a1 as W,aj as q,r as f,m as I,n as P,j as r,o as _,ak as z,t as M,g as U,al as j,s as T,k as V,h as H,am as F,w as J,an as S,b as Q,L as Y,ao as Z}from"./index-2wijax2M.js";const ee=O(),te=["component","direction","spacing","divider","children","className","useFlexGap"],se=X(),ae=ee("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root});function oe(e){return z({props:e,name:"MuiStack",defaultTheme:se})}function ne(e,t){const s=f.Children.toArray(e).filter(Boolean);return s.reduce((a,i,o)=>(a.push(i),o<s.length-1&&a.push(f.cloneElement(t,{key:`separator-${o}`})),a),[])}const re=e=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[e],ie=({ownerState:e,theme:t})=>{let s=h({display:"flex",flexDirection:"column"},C({theme:t},y({values:e.direction,breakpoints:t.breakpoints.values}),a=>({flexDirection:a})));if(e.spacing){const a=K(t),i=Object.keys(t.breakpoints.values).reduce((n,c)=>((typeof e.spacing=="object"&&e.spacing[c]!=null||typeof e.direction=="object"&&e.direction[c]!=null)&&(n[c]=!0),n),{}),o=y({values:e.direction,base:i}),l=y({values:e.spacing,base:i});typeof o=="object"&&Object.keys(o).forEach((n,c,m)=>{if(!o[n]){const p=c>0?o[m[c-1]]:"column";o[n]=p}}),s=W(s,C({theme:t},l,(n,c)=>e.useFlexGap?{gap:j(a,n)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${re(c?o[c]:e.direction)}`]:j(a,n)}}))}return s=q(t.breakpoints,s),s};function ce(e={}){const{createStyledComponent:t=ae,useThemeProps:s=oe,componentName:a="MuiStack"}=e,i=()=>M({root:["root"]},n=>U(a,n),{}),o=t(ie);return f.forwardRef(function(n,c){const m=s(n),u=I(m),{component:p="div",direction:k="column",spacing:B=0,divider:x,children:b,className:A,useFlexGap:D=!1}=u,L=P(u,te),E={direction:k,spacing:B,useFlexGap:D},G=i();return r.jsx(o,h({as:p,ownerState:E,ref:c,className:_(G.root,A)},L,{children:x?ne(b,x):b}))})}function le(e){return String(e).match(/[\d.\-+]*\s*(.*)/)[1]||""}function de(e){return parseFloat(e)}const ue=ce({createStyledComponent:T("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root}),useThemeProps:e=>V({props:e,name:"MuiStack"})}),pe=ue;function he(e){return U("MuiSkeleton",e)}H("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const me=["animation","className","component","height","style","variant","width"];let v=e=>e,R,$,w,N;const ge=e=>{const{classes:t,variant:s,animation:a,hasChildren:i,width:o,height:l}=e;return M({root:["root",s,a,i&&"withChildren",i&&!o&&"fitContent",i&&!l&&"heightAuto"]},he,t)},fe=F(R||(R=v`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),ve=F($||($=v`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`)),ke=T("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:s}=e;return[t.root,t[s.variant],s.animation!==!1&&t[s.animation],s.hasChildren&&t.withChildren,s.hasChildren&&!s.width&&t.fitContent,s.hasChildren&&!s.height&&t.heightAuto]}})(({theme:e,ownerState:t})=>{const s=le(e.shape.borderRadius)||"px",a=de(e.shape.borderRadius);return h({display:"block",backgroundColor:e.vars?e.vars.palette.Skeleton.bg:J(e.palette.text.primary,e.palette.mode==="light"?.11:.13),height:"1.2em"},t.variant==="text"&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${a}${s}/${Math.round(a/.6*10)/10}${s}`,"&:empty:before":{content:'"\\00a0"'}},t.variant==="circular"&&{borderRadius:"50%"},t.variant==="rounded"&&{borderRadius:(e.vars||e).shape.borderRadius},t.hasChildren&&{"& > *":{visibility:"hidden"}},t.hasChildren&&!t.width&&{maxWidth:"fit-content"},t.hasChildren&&!t.height&&{height:"auto"})},({ownerState:e})=>e.animation==="pulse"&&S(w||(w=v`
      animation: ${0} 2s ease-in-out 0.5s infinite;
    `),fe),({ownerState:e,theme:t})=>e.animation==="wave"&&S(N||(N=v`
      position: relative;
      overflow: hidden;

      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */
      -webkit-mask-image: -webkit-radial-gradient(white, black);

      &::after {
        animation: ${0} 2s linear 0.5s infinite;
        background: linear-gradient(
          90deg,
          transparent,
          ${0},
          transparent
        );
        content: '';
        position: absolute;
        transform: translateX(-100%); /* Avoid flash during server-side hydration */
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
      }
    `),ve,(t.vars||t).palette.action.hover)),ye=f.forwardRef(function(t,s){const a=V({props:t,name:"MuiSkeleton"}),{animation:i="pulse",className:o,component:l="span",height:d,style:n,variant:c="text",width:m}=a,u=P(a,me),p=h({},a,{animation:i,component:l,variant:c,hasChildren:!!u.children}),k=ge(p);return r.jsx(ke,h({as:l,ref:s,className:_(k.root,o),ownerState:p},u,{style:h({width:m,height:d},n)}))}),g=ye,be=({product:e})=>{const{id:t,imageUrl:s,color:a,name:i,price:o}=e,l=Q();return r.jsx(Y,{onClick:()=>l(Z()),to:`/product/${t}`,className:"product",children:r.jsxs("div",{className:"product-wrapper",children:[r.jsx("div",{className:"product-image-block",children:s.map((d,n)=>{if(n<2)return r.jsx("img",{className:"product-image",src:d},n)})}),r.jsxs("div",{className:"product-info",children:[r.jsx("p",{className:"product-name",children:i}),r.jsx("p",{className:"product-color text",children:a}),r.jsxs("p",{className:"product-price text",children:["$",o]})]})]})})},Ce=()=>r.jsxs(pe,{spacing:1,children:[r.jsx(g,{variant:"rectangular",height:270,width:270}),r.jsx(g,{variant:"rounded",height:20,width:270}),r.jsx(g,{variant:"rounded",height:10,width:270}),r.jsx(g,{variant:"rounded",height:10,width:270})]});export{be as P,pe as S,Ce as a,g as b};
