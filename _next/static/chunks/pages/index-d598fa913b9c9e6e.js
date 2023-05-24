(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return c(5902)}])},5902:function(a,b,c){"use strict";c.r(b),c.d(b,{default:function(){return q}});var d=c(5893),e=c(214),f=c.n(e),g=c(7294),h=c(323);function i(a){var b=a.label,c=a.value,e=a.setValue,f=function(a){var b,c=Number.parseFloat(null!==(b=a.target.value)&& void 0!==b?b:"0");e(Number.isNaN(c)?0:c)};return(0,d.jsx)("div",{children:(0,d.jsx)(h.Z,{type:"number",value:c,onChange:f,label:b,margin:"normal",size:"small"})})}var j=c(1799),k=c(9396),l=c(1594);function m(a){var b=a.title,c=a.headers,e=a.rows;return(0,d.jsxs)("div",{children:[b&&(0,d.jsx)("h3",{children:b}),(0,d.jsxs)(l.ZP,{container:!0,spacing:2,columns:8,children:[(0,d.jsx)(l.ZP,{container:!0,item:!0,wrap:"nowrap",children:c.map(function(a){return(0,d.jsx)(l.ZP,{item:!0,xs:2,children:a},a)})}),e.map(function(a,b){return(0,d.jsx)(l.ZP,{container:!0,item:!0,wrap:"nowrap",children:a.map(function(a){var b;return(0,d.jsx)(l.ZP,{item:!0,xs:2,children:(b=a,"string"==typeof b?b:b.toFixed(0).split("").reverse().map(function(a,b){return b%3==0?"".concat(a," "):a}).reverse().join(""))},a)})},a.join(""))})]})]})}var n=["возраст","зп","платежи","остаток","накоплено за год","процент по вкладу","накоплено всего",];function o(a){for(var b=a.ages,c=a.salary,e=a.payments,f=a.changes,g=a.startWithMoney,h=a.flatCost,i=function(a){return a.rent+a.flat+a.eat+a.fun+a.health},l=[],o=c,p=e,q=g,r=b.currentAge,s=h,t=0;r<b.deathAge;r++){var u=i(p),v=o.salary*(1-o.tax/100)-u,w=12*v,x=q*f.percentToSaving/100;q+=w+x,s*=1+f.inflation/100,p.flat>0&&q>s&&(p.flat=0,q-=s,t=r);var y,z,A=[r,o.salary,u,v,w,x,q,];if(l.push(A),o=(y=o,z=f.salaryGrown,(0,k.Z)((0,j.Z)({},y),{salary:y.salary*(1+z/100)})),p=function(a,b){var c=1+b/100;return{rent:a.rent*c,flat:a.flat*c,eat:a.eat*c,fun:a.fun*c,health:a.health*c}}(p,f.inflation),12*u*Math.min(b.deathAge-r,25)<q)break}return(0,d.jsxs)("div",{children:[(0,d.jsxs)("span",{children:["Можно выйти на пенсию в ",r]}),(0,d.jsxs)("span",{children:["Квартира куплена в ",t]}),(0,d.jsx)(m,{headers:n,rows:l,title:"Процесс накопления"})]})}function p(){var a=(0,g.useState)(30),b=a[0],c=a[1],e=(0,g.useState)(78),f=e[0],h=e[1],j=(0,g.useState)(1e6),k=j[0],l=j[1],m=(0,g.useState)(25e4),n=m[0],p=m[1],q=(0,g.useState)(0),r=q[0],s=q[1],t=(0,g.useState)(6),u=t[0],v=t[1],w=(0,g.useState)(4e4),x=w[0],y=w[1],z=(0,g.useState)(5e4),A=z[0],B=z[1],C=(0,g.useState)(5e3),D=C[0],E=C[1],F=(0,g.useState)(2e4),G=F[0],H=F[1],I=(0,g.useState)(2e4),J=I[0],K=I[1],L=(0,g.useState)(8),M=L[0],N=L[1],O=(0,g.useState)(8),P=O[0],Q=O[1],R=(0,g.useState)(5),S=R[0],T=R[1],U=(0,g.useState)(1e7),V=U[0],W=U[1];return(0,d.jsxs)("div",{children:[(0,d.jsxs)("div",{children:[(0,d.jsx)("h4",{style:{marginBlockEnd:"0.25em"},children:"Личные данные"}),(0,d.jsxs)("div",{style:{display:"flex",gap:"20px"},children:[(0,d.jsx)(i,{label:"Ваш текущий возраст",setValue:c,value:b}),(0,d.jsx)(i,{label:"Предполагаемый возраст дожития",setValue:h,value:f}),(0,d.jsx)(i,{label:"Начальный капитал",setValue:l,value:k})]}),(0,d.jsx)("h4",{style:{marginBlockEnd:"0.25em"},children:"Данные о зарплате"}),(0,d.jsxs)("div",{style:{display:"flex",gap:"20px"},children:[(0,d.jsx)(i,{label:"Ваша текущая зарплата",setValue:p,value:n}),(0,d.jsx)(i,{label:"Районный кофициент (в процентах)",setValue:s,value:r}),(0,d.jsx)(i,{label:"Процент отчислений с зарплаты",setValue:v,value:u})]}),(0,d.jsx)("h4",{style:{marginBlockEnd:"0.25em"},children:"Данные о тратах"}),(0,d.jsxs)("div",{style:{display:"flex",gap:"20px"},children:[(0,d.jsx)(i,{label:"Стоимость аренды",setValue:B,value:A}),(0,d.jsx)(i,{label:"Комунальные платежи",setValue:E,value:D}),(0,d.jsx)(i,{label:"Траты на еду",setValue:y,value:x}),(0,d.jsx)(i,{label:"Траты на развлечения",setValue:K,value:J}),(0,d.jsx)(i,{label:"Траты на здоровье",setValue:H,value:G})]}),(0,d.jsx)("h4",{style:{marginBlockEnd:"0.25em"},children:"Средние изменения"}),(0,d.jsxs)("div",{style:{display:"flex",gap:"20px"},children:[(0,d.jsx)(i,{label:"Предполагаемая инфляция",setValue:N,value:M}),(0,d.jsx)(i,{label:"Предполагаемый рост зп",setValue:Q,value:P}),(0,d.jsx)(i,{label:"Процент на остаток",setValue:T,value:S}),(0,d.jsx)(i,{label:"Стоимость жилья для покупки",setValue:W,value:V})]})]}),(0,d.jsx)(o,{ages:{currentAge:b,deathAge:f},changes:{inflation:M,salaryGrown:P,percentToSaving:S},payments:{rent:A,flat:D,eat:x,fun:J,health:G},salary:{salary:n,regionBonus:r,tax:u},startWithMoney:k,flatCost:V})]})}var q=function(){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("h3",{className:f().header,children:"FIRE калькулятор"}),(0,d.jsx)("div",{className:f().container,children:(0,d.jsxs)("div",{className:f().mainContainer,children:[(0,d.jsx)("div",{children:"Калькулятор для расчета возраста выхода на пенсию по американской системе FIRE. По этой системе необходимо накопить денег на 25 лет жизни по текущему уровню трат."}),(0,d.jsx)(p,{})]})})]})}},214:function(a){a.exports={container:"Home_container__bCOhY",header:"Home_header__GCVRv",mainContainer:"Home_mainContainer__elrQV",main:"Home_main__nLjiQ",footer:"Home_footer____T7K",title:"Home_title__T09hD",description:"Home_description__41Owk",code:"Home_code__suPER",grid:"Home_grid__GxQ85",card:"Home_card___LpL1",logo:"Home_logo__27_tb"}}},function(a){a.O(0,[241,774,888,179],function(){var b;return a(a.s=8312)}),_N_E=a.O()}])