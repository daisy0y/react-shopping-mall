(this["webpackJsonpreact-shopping-mall"]=this["webpackJsonpreact-shopping-mall"]||[]).push([[0],{48:function(e,t,c){},55:function(e,t,c){},60:function(e,t,c){},82:function(e,t,c){"use strict";c.r(t);var a=c(11),i=c(2),n=c(0),s=c.n(n),r=c(15),l=c.n(r),j=(c(55),c(18)),d=c(12),b=c(4),o=c(85),u=c(86),h=c(84),O=(c(48),[{id:0,title:"ABKO(\uc571\ucf54) \uc624\uc5d8\ub77c \uc790\ub3d9\uae09\uc2dd\uae30 PF01",content:"\uc790\ub3d9\uae09\uc2dd\uae30",price:"120,000",url:"https://daisy0y.github.io/images/0.jpg"},{id:1,title:"\uc708\ucf54 \ucf54\ud3ab \ubc18\uc601\uad6c \ubc18\ub824\ub3d9\ubb3c \ud138\ube60\uc9d0 \ud138\uc81c\uac70\ub3cc\ub3cc\uc774",content:"\ud138\uc81c\uac70\ub3cc\ub3cc\uc774",price:"9,900",url:"https://daisy0y.github.io/images/1.jpg"},{id:2,title:"\ube0c\ub77c\uc6b4\ud3ec \ucd08\uacbd\ub7c9 \ud734\ub300\uc6a9 \ubc18\ub824\ub3d9\ubb3c \uc560\uacac \uc720\ubaa8\ucc28",content:"\uc560\uacac \uc720\ubaa8\ucc28",price:"69,000",url:"https://daisy0y.github.io/images/2.jpg"}]);var m=function(e){var t=Object(b.f)(),c=Object(n.useContext)(C);return Object(i.jsx)(C.Provider,{value:c,children:Object(i.jsxs)("div",{className:"col-md-4",children:[Object(i.jsx)("img",{className:"item-image",src:e.item.url,alt:"123",width:"100%",onClick:function(){t.push("/detail/".concat(e.item.id))}}),Object(i.jsx)("h4",{children:e.item.title}),Object(i.jsxs)("p",{className:"list-price",children:[e.item.content," ",e.item.price,"\uc6d0"]}),Object(i.jsxs)("p",{children:[" \uc7ac\uace0\uac00 ",Object(i.jsx)("span",{className:"item-stock",children:c[e.item.id]}),"\uac1c \ub0a8\uc558\uc5b4\uc694!! "]})]})})},x=(c(60),c(87)),p=c(24);function v(e){return Object(n.useEffect)((function(){e.setTabSwitch(!0)})),0===e.tab?Object(i.jsx)("div",{children:"\uc0c1\ud488\uc124\uba85\ub780\uc785\ub2c8\ub2e4"}):1===e.tab?Object(i.jsx)("div",{children:"\ub9ac\ubdf0\ub780\uc785\ub2c8\ub2e4"}):void 0}function f(e){return Object(i.jsxs)("p",{children:["\uc7ac\uace0 : ",e.stock]})}var g=Object(p.b)((function(e){return{store:e.reducer,alertState:e.reducer2}}))((function(e){var t=Object(b.g)().id,c=Object(b.f)(),s=Object(n.useState)(!0),r=Object(j.a)(s,2),l=r[0],d=r[1],o=Object(n.useState)(0),h=Object(j.a)(o,2),O=h[0],m=h[1],p=Object(n.useState)(!1),g=Object(j.a)(p,2),k=g[0],y=g[1];Object(n.useEffect)((function(){var e=setTimeout((function(){return d(!1),function(){clearTimeout(e)}}),4e3)}),[]);var N=Object(i.jsx)("div",{id:"a",className:"detail-alert",children:"\uc7ac\uace0\uac00 \uc5bc\ub9c8 \ub0a8\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4!"});return Object(i.jsxs)("div",{className:"container",children:[Object(i.jsxs)("div",{children:[Object(i.jsx)("h4",{className:"detail-header",children:"Detail"}),l?N:null]}),Object(i.jsxs)("div",{className:"row",children:[Object(i.jsx)("div",{className:"col-md-6",children:Object(i.jsx)("img",{src:e.item[t].url,width:"100%"})}),Object(i.jsxs)("div",{className:"col-md-6 mt-4",children:[Object(i.jsx)("h4",{className:"pt-5",children:e.item[e.item[t].id].title}),Object(i.jsx)("p",{children:e.item[t].content}),Object(i.jsxs)("p",{children:[e.item[t].price,"\uc6d0"]}),Object(i.jsx)(f,{stock:e.stock[t],setStock:e.setStock}),Object(i.jsx)("button",{className:"btn btn-success",onClick:function(){var i=Object(a.a)(e.stock);i[t]=i[t]-1,e.setStock(i),e.dispatch({type:"addCart",payload:{id:e.item[e.item[t].id].id+1,name:e.item[e.item[t].id].title,quan:1}}),c.push("/cart")},children:"\uc8fc\ubb38\ud558\uae30"}),Object(i.jsx)("button",{onClick:function(){c.goBack()},className:"btn btn-success",children:"\ub4a4\ub85c\uac00\uae30"})]})]}),Object(i.jsxs)(u.a,{className:"mt-5",variant:"tabs",defaultActiveKey:"link-0",children:[Object(i.jsx)(u.a.Item,{children:Object(i.jsx)(u.a.Link,{eventKey:"link-0",onClick:function(){y(!1),m(0)},children:"\uc0c1\uc138\uc815\ubcf4"})}),Object(i.jsx)(u.a.Item,{children:Object(i.jsx)(u.a.Link,{eventKey:"link-1",onClick:function(){y(!1),m(1)},children:"\ub9ac\ubdf0"})})]}),Object(i.jsx)(x.a,{in:k,classNames:"tabs",timeout:1e3,children:Object(i.jsx)(v,{setTabSwitch:y,tab:O})})]})})),k=c(44),y=c.n(k),N=Object(n.lazy)((function(){return c.e(3).then(c.bind(null,89))})),C=s.a.createContext();var S=function(){var e=Object(n.useState)(O),t=Object(j.a)(e,2),c=t[0],s=t[1],r=Object(n.useState)([10,11,5,5,12,9,10,3,9]),l=Object(j.a)(r,2),x=l[0],p=l[1],v=Object(n.useState)(0),f=Object(j.a)(v,2),k=f[0],S=f[1];return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsxs)(o.a,{className:"navbar",bg:"light",expand:"lg",children:[Object(i.jsx)(o.a.Brand,{as:d.b,to:"/react-shopping-mall",children:"\ubd09\uad6c\uc758 \uac04\uc2dd"}),Object(i.jsx)(o.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(i.jsx)(o.a.Collapse,{id:"basic-navbar-nav",children:Object(i.jsxs)(u.a,{className:"ml-auto",children:[Object(i.jsx)(u.a.Link,{as:d.b,to:"/react-shopping-mall",children:"Home"}),Object(i.jsx)(u.a.Link,{as:d.b,to:"/Detail/0",children:"Detail"}),Object(i.jsx)(u.a.Link,{as:d.b,to:"/cart",children:"Cart"})]})})]}),Object(i.jsxs)(b.c,{children:[Object(i.jsxs)(b.a,{exact:!0,path:"/react-shopping-mall",children:[Object(i.jsxs)(h.a,{className:"background",children:[Object(i.jsx)("h1",{children:"\uadc0\uc5ec\uc6b4 , \ub315\ub315\uc774 \ubd09\uad6c"}),Object(i.jsx)("p",{children:"\ubd09\uad6c\uac00 \uc9c1\uc811 \uc6b4\uc601\ud558\ub294 \uc560\uacac\uc6a9\ud488\uc810\uc785\ub2c8\ub2e4"})]}),Object(i.jsx)(C.Provider,{value:x,children:Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)("div",{className:"row",children:c.map((function(e){return Object(i.jsx)(m,{item:e},e.id)}))}),k<1?Object(i.jsx)("button",{onClick:function(){S(k+1),y.a.get("https://daisy0y.github.io/more.json").then((function(e){s([].concat(Object(a.a)(c),Object(a.a)(e.data)))})).catch((function(){}))},className:"btn btn-primary",children:"\ub354\ubcf4\uae30"}):null]})})]}),Object(i.jsx)(b.a,{path:"/detail/:id",children:Object(i.jsx)(g,{item:c,stock:x,setStock:p})}),Object(i.jsx)(b.a,{path:"/cart",children:Object(i.jsx)(n.Suspense,{fallback:Object(i.jsx)("div",{children:"\ub85c\ub529\uc911\uc785\ub2c8\ub2e4."}),children:Object(i.jsx)(N,{})})})]})]})},w=function(e){e&&e instanceof Function&&c.e(4).then(c.bind(null,88)).then((function(t){var c=t.getCLS,a=t.getFID,i=t.getFCP,n=t.getLCP,s=t.getTTFB;c(e),a(e),i(e),n(e),s(e)}))},q=c(22);var L=[{id:0,name:"\ubd09\uad6c \uac04\uc2dd \uc0ac\uc8fc\uae30",quan:1}];var T=Object(q.c)(Object(q.b)({reducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;if("addCart"===t.type){var c=e.findIndex((function(e){return e.id===t.payload.id}));if(c>=0){var i=Object(a.a)(e);return i[c].quan++,i}var n=Object(a.a)(e);return n.push(t.payload),n}if("increase"===t.type){var s=Object(a.a)(e);return s[t.payload].quan++,s}if("decrease"===t.type){var r=Object(a.a)(e);return r[t.payload].quan--,r[t.payload].quan<0&&(alert("\ucd5c\uc18c \uac2f\uc218 \uc785\ub2c8\ub2e4."),r[t.payload].quan++),r}return e},reducer2:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=arguments.length>1?arguments[1]:void 0;return"close"!==t.type&&e}}));l.a.render(Object(i.jsx)(d.a,{children:Object(i.jsx)(p.a,{store:T,children:Object(i.jsx)(S,{})})}),document.getElementById("root")),w()}},[[82,1,2]]]);
//# sourceMappingURL=main.0698011e.chunk.js.map