import{d as C,ah as w,M as B,N as I,r as y,K as S,aB as D,c as s,e as n,f as d,n as l,I as e,F as f,R as g,S as h,g as N,t as U,aC as z,aD as A,am as F,P,a0 as R}from"./77kVjPu9.js";const V=["onClick"],E=C({inheritAttrs:!1,__name:"Tabs",props:{selectedIndex:{type:Number,default:0},class:{type:[String,Object,Array],default:void 0}},setup(x){const _={wrapper:"relative my-5 space-y-6",header:"flex items-center relative",border:"absolute bottom-0 inset-x-0 w-full h-px bg-gray-200 dark:bg-gray-800",tab:{base:"px-4 py-2.5 font-semibold text-sm/6 flex items-center gap-1.5 border-b z-[1] focus-visible:outline-primary",active:"text-primary border-primary",inactive:"text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 border-transparent hover:border-gray-300 dark:hover:border-gray-700",icon:{base:"w-5 h-5 flex-shrink-0"}}},m=x,i=w(),{ui:r,attrs:k}=B("content.tabs",void 0,_,I(m,"class"),!0),p=y(m.selectedIndex||0),b=y(1),v=S(()=>{var u;return b.value,((u=i.default)==null?void 0:u.call(i).map((o,c)=>{var t,a;return{index:c,label:((t=o.props)==null?void 0:t.label)||`${c}`,icon:(a=o.props)==null?void 0:a.icon,component:o}}))||[]});return D(()=>{b.value+=1}),(u,o)=>{const c=R;return s(),n("div",P({class:e(r).wrapper},e(k)),[d("div",{class:l(e(r).header)},[d("div",{class:l(e(r).border)},null,2),(s(!0),n(f,null,g(e(v),(t,a)=>(s(),n("button",{key:a,class:l([e(r).tab.base,e(p)===a?e(r).tab.active:e(r).tab.inactive]),onClick:$=>p.value=a},[t.icon?(s(),h(c,{key:0,name:t.icon,class:l(e(r).tab.icon.base)},null,8,["name","class"])):N("",!0),d("span",null,U(t.label),1)],10,V))),128))],2),(s(!0),n(f,null,g(e(v),(t,a)=>z((s(),n("div",{key:a},[(s(),h(F(t.component)))])),[[A,e(p)===a]])),128))],16)}}});export{E as default};
