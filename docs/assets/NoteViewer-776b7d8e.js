import{f as a,h as c,j as m,n as i,l as s,ar as l,aj as d,_ as u}from"./nav-3c77a439.js";const p=["innerHTML"],f=["textContent"],v=a({__name:"NoteViewer",props:{class:{type:String,required:!1},noteHtml:{type:String,required:!1},note:{type:String,required:!1}},emits:["click"],setup(e){const n=e;return c(m),(o,t)=>e.noteHtml?(i(),s("div",{key:0,class:l(["prose overflow-auto outline-none",n.class]),onClick:t[0]||(t[0]=r=>o.$emit("click")),innerHTML:e.noteHtml},null,10,p)):(i(),s("div",{key:1,class:l(["prose overflow-auto outline-none",n.class]),onClick:t[1]||(t[1]=r=>o.$emit("click")),textContent:d(e.note)},null,10,f))}}),C=u(v,[["__file","D:/i/share-ppt/node_modules/.pnpm/@slidev+client@0.38.4_vite@4.0.4/node_modules/@slidev/client/internals/NoteViewer.vue"]]);export{C as N};
