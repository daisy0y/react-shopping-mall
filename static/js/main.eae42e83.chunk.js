(this["webpackJsonpreact-shopping-mall"]=this["webpackJsonpreact-shopping-mall"]||[]).push([[0],{58:function(e,t,c){},59:function(e,t,c){},65:function(e,t,c){},86:function(e,t,c){"use strict";c.r(t);var n=c(3),i=c(0),a=c.n(i),s=c(18),j=c.n(s),r=(c(58),c(28)),l=c(21),b=c(16),o=c(7),d=c(94),h=c(95),O=c(93),m=c(92),u=(c(59),[{id:0,title:"ABKO(\uc571\ucf54) \uc624\uc5d8\ub77c \uc790\ub3d9\uae09\uc2dd\uae30 PF01",content:"\uc790\ub3d9\uae09\uc2dd\uae30",price:"120,000",url:"../0.jpg"},{id:1,title:"\uc708\ucf54 \ucf54\ud3ab \ubc18\uc601\uad6c \ubc18\ub824\ub3d9\ubb3c \ud138\ube60\uc9d0 \ud138\uc81c\uac70\ub3cc\ub3cc\uc774",content:"\ud138\uc81c\uac70\ub3cc\ub3cc\uc774",price:"9,900",url:"../1.jpg"},{id:2,title:"\ube0c\ub77c\uc6b4\ud3ec \ucd08\uacbd\ub7c9 \ud734\ub300\uc6a9 \ubc18\ub824\ub3d9\ubb3c \uc560\uacac \uc720\ubaa8\ucc28",content:"\uc560\uacac \uc720\ubaa8\ucc28",price:"69,000",url:"../2.jpg"}]);var x=function(e){var t=Object(o.f)();return Object(n.jsxs)("div",{className:"col-md-4",children:[Object(n.jsx)("img",{className:"item-image",src:e.item.url,alt:"123",width:"100%",onClick:function(){t.push("/detail/".concat(e.item.id))}}),Object(n.jsx)("h4",{children:e.item.title}),Object(n.jsxs)("p",{children:[e.item.content," ",e.item.price,"\uc6d0"]})]})};c(65);function p(e){return Object(n.jsxs)("p",{children:["\uc7ac\uace0 : ",e.stock]})}var f=function(e){var t=Object(o.g)().id,c=Object(o.f)(),a=Object(i.useState)(!0),s=Object(l.a)(a,2),j=s[0],b=s[1],d=Object(i.useState)(""),h=Object(l.a)(d,2);h[0],h[1],Object(i.useEffect)((function(){var e=setTimeout((function(){return b(!1),function(){clearTimeout(e)}}),5e3)}),[]);var O=Object(n.jsx)("div",{id:"a",className:"detail-alert",children:"\uc7ac\uace0\uac00 \uc5bc\ub9c8 \ub0a8\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4!"});return Object(n.jsxs)("div",{className:"container",children:[Object(n.jsxs)("div",{children:[Object(n.jsx)("h4",{className:"detail-header",children:"Detail"}),j?O:null]}),Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("div",{className:"col-md-6",children:Object(n.jsx)("img",{src:e.item[t].url,width:"100%"})}),Object(n.jsxs)("div",{className:"col-md-6 mt-4",children:[Object(n.jsx)("h4",{className:"pt-5",children:e.item[e.item[t].id].title}),Object(n.jsx)("p",{children:e.item[t].content}),Object(n.jsx)("p",{children:e.item[t].price}),Object(n.jsx)(p,{stock:e.stock[t],setStock:e.setStock}),Object(n.jsx)("button",{className:"btn btn-danger",onClick:function(){var c=Object(r.a)(e.stock);c[t]=c[t]-1,e.setStock(c)},children:"\uc8fc\ubb38\ud558\uae30"}),Object(n.jsx)("button",{onClick:function(){c.goBack()},className:"btn btn-danger",children:"\ub4a4\ub85c\uac00\uae30"})]})]})]})},v=c(50),g=c.n(v);var k=function(){var e=Object(i.useState)(u),t=Object(l.a)(e,2),c=t[0],a=t[1],s=Object(i.useState)([10,11,5,5,12,9,10,3,9]),j=Object(l.a)(s,2),p=j[0],v=j[1],k=Object(i.useState)(0),N=Object(l.a)(k,2),S=N[0],w=N[1];return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsxs)(d.a,{className:"navbar",bg:"light",expand:"lg",children:[Object(n.jsx)(d.a.Brand,{as:b.b,to:"/",children:"\ubd09\uad6c\uc758 \uac04\uc2dd"}),Object(n.jsx)(d.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(n.jsx)(d.a.Collapse,{id:"basic-navbar-nav",children:Object(n.jsxs)(h.a,{className:"ml-auto",children:[Object(n.jsx)(h.a.Link,{as:b.b,to:"/",children:"Home"}),Object(n.jsx)(h.a.Link,{as:b.b,to:"/Detail/0",children:"Detail"}),Object(n.jsxs)(O.a,{title:"Dropdown",id:"basic-nav-dropdown",children:[Object(n.jsx)(O.a.Item,{href:"#action/3.1",children:"Action"}),Object(n.jsx)(O.a.Item,{href:"#action/3.2",children:"Another action"}),Object(n.jsx)(O.a.Item,{href:"#action/3.3",children:"Something"}),Object(n.jsx)(O.a.Divider,{}),Object(n.jsx)(O.a.Item,{href:"#action/3.4",children:"Separated link"})]})]})})]}),Object(n.jsxs)(o.c,{children:[Object(n.jsxs)(o.a,{exact:!0,path:"/",children:[Object(n.jsxs)(m.a,{className:"background",children:[Object(n.jsx)("h1",{children:"\uadc0\uc5ec\uc6b4 , \ub315\ub315\uc774 \ubd09\uad6c"}),Object(n.jsx)("p",{children:"\ubd09\uad6c\uac00 \uc9c1\uc811 \uc6b4\uc601\ud558\ub294 \uc560\uacac\uc6a9\ud488\uc810\uc785\ub2c8\ub2e4"})]}),Object(n.jsx)("div",{className:"container",children:Object(n.jsx)("div",{className:"row",children:c.map((function(e){return Object(n.jsx)(x,{item:e},e.id)}))})}),S<1?Object(n.jsx)("button",{onClick:function(){w(S+1),g.a.get("https://daisy0y.github.io/more.json").then((function(e){a([].concat(Object(r.a)(c),Object(r.a)(e.data)))})).catch((function(){}))},className:"btn btn-primary",children:"\ub354\ubcf4\uae30"}):null]}),Object(n.jsx)(o.a,{path:"/detail/:id",children:Object(n.jsx)(f,{item:c,stock:p,setStock:v})})]})]})},N=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,96)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,a=t.getLCP,s=t.getTTFB;c(e),n(e),i(e),a(e),s(e)}))};j.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(b.a,{children:Object(n.jsx)(k,{})})}),document.getElementById("root")),N()}},[[86,1,2]]]);
//# sourceMappingURL=main.eae42e83.chunk.js.map