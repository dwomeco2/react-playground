import{j as e,r as i}from"./index-c28d4630.js";function c(){const[t,r]=i.useState(30);return i.useEffect(()=>{const s=document.querySelector(".slider-bar"),l=+s.min,n=+s.max,a=+s.value;s.style.backgroundSize=(a-l)*100/(n-l)+"% 100%"},[t]),e.jsx("div",{className:"w-full h-1 rounded-lg relative mt-12 mb-16",children:e.jsx("input",{min:0,max:100,type:"range",className:"slider-bar w-full appearance-none",value:t,onChange:s=>r(+s.target.value)})})}function o({className:t=""}){const[r,s]=i.useState(!1),l="bg-[var(--discount-background-color)]",n="text-[var(--discount-on-background-color)]";return e.jsx("div",{className:t,children:e.jsxs("div",{className:"flex justify-center relative",children:[e.jsx("div",{className:"text-sm text-gray-600 mr-2",children:"Monthly Billing"}),e.jsx("button",{className:`pricing_slider_toggle ${r?"active":""} rounded-full`,onClick:()=>s(a=>!a)}),e.jsx("div",{className:"text-sm text-gray-600 ml-2",children:"Yearly Billing"}),e.jsx("div",{className:`absolute right-10 top-[2px] font-medium text-xs px-2 rounded-full ${l} ${n}`,children:"25% discount"})]})})}function d({children:t}){return e.jsx("div",{className:"slider-container w-[36rem] rounded-md bg-white p-8 overflow-hidden",children:t})}function m(){return e.jsx("div",{className:"flex justify-center items-center",children:e.jsxs(d,{children:[e.jsxs("div",{className:"flex items-center justify-between w-full",children:[e.jsx("div",{className:"font-bold text-gray-400",children:"100K PAGEVIEWS"}),e.jsxs("div",{className:"flex items-center",children:[e.jsx("span",{className:"font-extrabold text-3xl text-[var(--secondary-color)]",children:"$16.00"}),e.jsx("span",{className:"font-bold text-gray-400",children:" / month"})]})]}),e.jsx(c,{}),e.jsx(o,{className:"my-8"}),e.jsx("hr",{className:"mb-8"}),e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsxs("ul",{className:"flex flex-col gap-2 items-start",children:[e.jsx("li",{children:"✅ Unlimited websites"}),e.jsx("li",{children:"✅ 100% data ownership"}),e.jsx("li",{children:"✅ Email reports"})]}),e.jsx("div",{children:e.jsx("button",{className:"py-2 px-10 text-sm bg-[var(--secondary-color)] text-gray-50 rounded-full",children:"Start my trial"})})]})]})})}export{m as default};