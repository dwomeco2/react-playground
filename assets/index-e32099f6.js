import{r as c,j as n}from"./index-c28d4630.js";const u=[{id:0,h:"20rem",bg:"rgb(105, 64, 231)"}],h={images:u};function g(o){const[r,s]=c.useState(o||[]),[l,d]=c.useState();return c.useEffect(()=>{const e=r.map(a=>({ref:a.ref,br:a.ref.current.getBoundingClientRect()}));l!=null&&l.forEach(a=>{const t=e.find(i=>i.ref.current===a.ref.current);if(t!=null){const i=t.ref.current,m=a.br.left-t.br.left,f=a.br.top-t.br.top;(m!==0||f!==0)&&(i.style.transform=`translate(${m}px, ${f}px)`,i.style.transition="transform 0s",requestAnimationFrame(()=>{i.style.transform="",i.style.transition="transform 500ms"}))}}),d(e)},[r]),[r,s]}function y(){const[o,r]=g(h.images.map(e=>({...e,ref:c.createRef()}))),[s,l]=c.useState(!1);function d(){if(s)return;l(!0);const e=Math.max(...o.map(t=>t.id)),a=[];for(let t=0;t<5;t++)a.push(p(e+t));setTimeout(()=>{l(!1),r([...o,...a])},2e3)}return c.useEffect(()=>{const e=document.querySelector(".scroller"),a=i=>{if(!(e==null||e.scrollHeight<=e.clientHeight))for(const m of i)m.isIntersecting&&d()},t=new IntersectionObserver(a,{root:e,threshold:0});return t==null||t.observe(e==null?void 0:e.lastChild),()=>{t==null||t.unobserve(e==null?void 0:e.lastChild),t==null||t.disconnect()}},[o,s]),n.jsxs("div",{children:[n.jsx("p",{children:"masonry in grid layout only implemented by firefox"}),n.jsxs("div",{className:"flex gap-x-4 justify-center my-6",children:[n.jsx("button",{className:"bg-slate-700 rounded-full py-2 px-8 text-white",onClick:()=>r(x(o)),children:"Randomize"}),n.jsx("button",{className:"bg-red-500 rounded-full py-2 px-8 text-white",onClick:d,children:"Add 5"})]}),n.jsxs("div",{className:"scroller w-full max-h-[50rem] relative overflow-y-scroll bg-gray-400",children:[s&&n.jsx("div",{className:"sticky top-0 w-full h-12 leading-[3rem] backdrop-blur text-center text-white font-bold text-lg z-20",children:"Loading"}),n.jsx("div",{className:`scroller-item columns-3 gap-2 w-full rounded-md p-6 ${s?"mt-[-3rem]":""}`,children:o.map(e=>n.jsxs("div",{ref:e.ref,className:"flex justify-center items-center relative mb-2 hover:scale-110 hover:z-10 cursor-pointer",children:[n.jsx("div",{className:"absolute text-5xl font-bold text-white",children:e.id}),n.jsx("img",{className:"w-full aspect-video",style:{height:`${e.h}`,backgroundColor:`${e.bg}`}})]},e.id))}),n.jsx("div",{className:"w-full h-[1px]"})]})]})}function x(o){const r=[...o];for(let s=0;s<r.length-1;s++){const l=s+Math.floor(Math.random()*(r.length-s)),d=r[l];r[l]=r[s],r[s]=d}return r}function p(o){const r=`${Math.floor(Math.random()*29)+10}rem`,s=`rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`;return{id:o+1,h:r,bg:s,ref:c.createRef()}}export{y as default};
