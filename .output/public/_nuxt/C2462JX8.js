import{_ as o}from"./Dj8LuKSq.js";import{d as m,v as i,K as u,aT as h,aH as l,aU as d,c as g,S as p,I as r,am as f}from"./77kVjPu9.js";const _=m({__name:"ProseImg",props:{src:{type:String,default:""},alt:{type:String,default:""},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0}},setup(e){const n=i().public.mdc.useNuxtImage?o:"img",t=e,c=u(()=>{var s;if((s=t.src)!=null&&s.startsWith("/")&&!t.src.startsWith("//")){const a=h(l(i().app.baseURL));if(a!=="/"&&!t.src.startsWith(a))return d(a,t.src)}return t.src});return(s,a)=>(g(),p(f(r(n)),{src:r(c),alt:e.alt,width:e.width,height:e.height},null,8,["src","alt","width","height"]))}});export{_ as default};