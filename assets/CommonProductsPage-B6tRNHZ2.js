import{r as e,u as o,b as f,f as m,j as s}from"./index-h0TlBC4D.js";import{P as j,F as h,S as g}from"./styles-fiBdVnwa.js";const C=({func:d,url:a})=>{const[r,c]=e.useState(!1),[n,i]=e.useState(!1),{source:u}=o(t=>t.products),{appStatus:l}=o(t=>t.app.configState),{category:p}=o(t=>t.categories),S=f();e.useEffect(()=>{S(m({url:a,category:p}))},[p]);const x={filterState:r,openSort:n,setFilterState:c,setOpenSort:i};return s.jsxs(j,{dataState:x,children:[s.jsx(h,{url:a,filterState:r,setFilterState:c}),s.jsxs("div",{className:"products",children:[s.jsx("div",{className:"products-sort",children:s.jsx(g,{openSort:n,setOpenSort:i})}),s.jsx("div",{className:"products-box",children:d({appStatus:l,source:u})})]})]})};export{C};