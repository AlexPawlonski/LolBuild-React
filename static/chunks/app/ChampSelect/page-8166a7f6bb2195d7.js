(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[729],{9557:function(e,t,n){Promise.resolve().then(n.bind(n,7280))},7280:function(e,t,n){"use strict";n.r(t);var a=n(7437),s=n(2265),l=n(6119),u=n(5546),r=n(4685),i=n(4054),o=n(4033);t.default=e=>{let{}=e,{language:t,version:n,setLevel:c}=(0,i.b)(),[p,d]=(0,s.useState)(),[f,m]=(0,s.useState)(),{data:h,isLoading:v}=(0,u.M1)(t,n),{mutate:w}=(0,u.Oo)(),x=(0,o.useRouter)(),S=(0,s.useMemo)(()=>{if((null==h?void 0:h.data)&&!v){let e=Object.entries(null==h?void 0:h.data).map(e=>e[1]);return p&&(e=e.filter(e=>{var t;return((t=e.tags).find(e=>e===l.Vp.Tank)?l.uU.Top:t.find(e=>e===l.Vp.Mage||e===l.Vp.Assassin)?l.uU.Middle:t.find(e=>e===l.Vp.Marksman)?l.uU.Adc:t.find(e=>e===l.Vp.Support)?l.uU.Support:l.uU.Jungle)===p})),f&&(e=e.filter(e=>e.name.toLowerCase().includes(f.toLowerCase()))),e}},[h,v,f,p]);return(0,a.jsxs)("section",{className:"lg:px-2 w-full",children:[(0,a.jsx)(r.fc,{roleSelect:p,setRoleSelected:e=>d(e),nameSearch:e=>m(e)}),(0,a.jsx)("div",{className:"flex flex-wrap content-start gap-3 m-2 mb-0 pt-1 pl-1 overflow-scroll navFilterHeight",children:!v&&(null==S?void 0:S.map((e,s)=>(0,a.jsx)(r.xv,{champion:e,onClick:e=>{c(1),w({lang:t,version:n,id:e},{onSuccess:()=>x.push("/DataView")})}},"champ-"+s)))})]})}}},function(e){e.O(0,[674,973,528,971,472,744],function(){return e(e.s=9557)}),_N_E=e.O()}]);