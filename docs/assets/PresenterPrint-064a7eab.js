import{f as _,h as d,j as p,ag as h,c as m,ah as u,l as n,ai as t,aj as o,y as s,F as f,ak as g,al as v,am as x,n as i,an as y,ao as b,m as N,ap as k,aq as w,_ as P}from"./nav-1c552790.js";import{N as V}from"./NoteViewer-b71f7d2b.js";import{u as j}from"./index-28b45da3.js";const S={class:"m-4"},L={class:"mb-10"},T={class:"text-4xl font-bold mt-2"},B={class:"opacity-50"},C={class:"text-lg"},D={class:"font-bold flex gap-2"},H={class:"opacity-50"},z=t("div",{class:"flex-auto"},null,-1),F={key:0,class:"border-gray-400/50 mb-8"},M=_({__name:"PresenterPrint",setup(q){d(p),h(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),j({title:`Notes - ${m.title}`});const r=u(()=>x.slice(0,-1).map(a=>{var l;return(l=a.meta)==null?void 0:l.slide}).filter(a=>a!==void 0&&a.notesHTML!==""));return(a,l)=>(i(),n("div",{id:"page-root",style:v(s(w))},[t("div",S,[t("div",L,[t("h1",T,o(s(m).title),1),t("div",B,o(new Date().toLocaleString()),1)]),(i(!0),n(f,null,g(s(r),(e,c)=>(i(),n("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",C,[t("div",D,[t("div",H,o(e==null?void 0:e.no)+"/"+o(s(y)),1),b(" "+o(e==null?void 0:e.title)+" ",1),z])]),N(V,{"note-html":e.notesHTML,class:"max-w-full"},null,8,["note-html"])]),c<s(r).length-1?(i(),n("hr",F)):k("v-if",!0)]))),128))])],4))}}),W=P(M,[["__file","D:/github/share-ppt/node_modules/.pnpm/@slidev+client@0.38.4_vite@4.0.4/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{W as default};
