import{f as i}from"./Dnd51l0P.js";import{d as u,ah as f,K as c,ae as l,aM as d}from"./77kVjPu9.js";const m=u({name:"MDCSlot",functional:!0,props:{name:{type:String,default:"default"},unwrap:{type:[Boolean,String],default:!1},use:{type:Function,default:void 0}},setup(t){const{parent:s}=d(),{default:o}=f(),a=c(()=>typeof t.unwrap=="string"?t.unwrap.split(" "):["*"]);return{fallbackSlot:o,tags:a,parent:s}},render({use:t,unwrap:s,fallbackSlot:o,tags:a,parent:e}){var r;try{let n=t;return typeof t=="string"&&(n=(e==null?void 0:e.slots[t])||((r=e==null?void 0:e.parent)==null?void 0:r.slots[t]),console.warn(`Please set :use="$slots.${t}" in <MDCSlot> component to enable reactivity`)),n?s?i(n(),a):[n()]:o?o():l("div")}catch{return l("div")}}}),_=m;export{_};
