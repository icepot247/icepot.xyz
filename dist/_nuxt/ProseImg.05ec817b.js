import{g as r,j as n,D as c,R as h,K as o,E as l,o as u,c as d,k as g}from"./entry.688117da.js";const f=["src","alt","width","height"],p=r({__name:"ProseImg",props:{src:{type:String,default:""},alt:{type:String,default:""},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0}},setup(e){const t=e,i=n(()=>{var a;if((a=t.src)!=null&&a.startsWith("/")&&!t.src.startsWith("//")){const s=c(h(o().app.baseURL));if(s!=="/"&&!t.src.startsWith(s))return l(s,t.src)}return t.src});return(a,s)=>(u(),d("img",{src:g(i),alt:e.alt,width:e.width,height:e.height},null,8,f))}});export{p as default};
