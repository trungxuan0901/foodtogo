(this.webpackJsonpfood=this.webpackJsonpfood||[]).push([[0],{39:function(e,t,c){},49:function(e,t,c){},50:function(e,t,c){},51:function(e,t,c){},63:function(e,t,c){},64:function(e,t,c){},65:function(e,t,c){},66:function(e,t,c){},68:function(e,t,c){},69:function(e,t,c){},71:function(e,t,c){"use strict";c.r(t);var n=c(3),i=c.n(n),a=c(25),s=c.n(a),r=(c(49),c(13)),j=(c(50),c(40)),l=c.n(j),o=(c(51),c(14)),d=c(41),b=c.n(d),h=c(2),u=Object(n.createContext)(),O=function(e){var t=e.reducer,c=e.initialState,i=e.children;return Object(h.jsx)(u.Provider,{value:Object(n.useReducer)(t,c),children:i})},m=function(){return Object(n.useContext)(u)},x=c(35),p=(x.a.initializeApp({apiKey:"AIzaSyB00Nw2KUt32zFUAwuruGFlBqsBZJTkLW0",authDomain:"foodtogo-e327a.firebaseapp.com",projectId:"foodtogo-e327a",storageBucket:"foodtogo-e327a.appspot.com",messagingSenderId:"575296343390",appId:"1:575296343390:web:f826e82d658006daa993cf"}).firestore(),x.a.auth());var g=function(){var e=m(),t=Object(r.a)(e,2),c=t[0],n=c.basket,i=c.loggedinuser;return t[1],Object(h.jsxs)("nav",{className:"header",children:[Object(h.jsxs)("div",{className:"header__search",children:[Object(h.jsx)("input",{className:"header__searchInput"}),Object(h.jsx)(l.a,{className:"header__searchIcon"})]}),Object(h.jsxs)("div",{className:"header__nav",children:[Object(h.jsx)(o.b,{to:!i&&"/login",className:"header_link",children:Object(h.jsxs)("div",{onClick:function(){i&&p.signOut()},className:"header__option",children:[Object(h.jsxs)("span",{className:"header__optionLineOne",children:["Hello, ",null===i||void 0===i?void 0:i.email]}),Object(h.jsx)("span",{className:"header__optionLineTwo",children:i?"Signout":"Sign In"})]})}),Object(h.jsx)(o.b,{to:"/",className:"header_link",children:Object(h.jsxs)("div",{className:"header__option",children:[Object(h.jsx)("span",{className:"header__optionLineOne",children:"Returns"}),Object(h.jsx)("span",{className:"header__optionLineTwo",children:"& Oder"})]})})]}),Object(h.jsx)(o.b,{to:"/checkout",className:"header_link",children:Object(h.jsxs)("div",{className:"header__optionBasket",children:[Object(h.jsx)(b.a,{}),Object(h.jsx)("span",{className:"header__optionLineTwo header__productCount",children:null===n||void 0===n?void 0:n.length})]})})]})},_=c(10),f=c.p+"static/media/logo.fbda1cb2.jpg";c(63);var v=function(){var e=Object(_.f)(),t=Object(n.useState)(""),c=Object(r.a)(t,2),i=c[0],a=c[1],s=Object(n.useState)(""),j=Object(r.a)(s,2),l=j[0],o=j[1];return Object(h.jsxs)("div",{className:"login",children:[Object(h.jsx)("img",{className:"login__logo",src:f,alt:"logo"}),Object(h.jsxs)("div",{className:"login__container",children:[Object(h.jsx)("h1",{children:"Sign in"}),Object(h.jsxs)("form",{children:[Object(h.jsx)("h5",{children:"E-mail"}),Object(h.jsx)("input",{value:i,onChange:function(e){return a(e.target.value)},type:"email"}),Object(h.jsx)("h5",{children:"Password"}),Object(h.jsx)("input",{value:l,onChange:function(e){return o(e.target.value)},type:"password"}),Object(h.jsx)("button",{onClick:function(t){t.preventDefault(),p.signInWithEmailAndPassword(i,l).then((function(t){e.push("/")})).catch((function(e){return alert(e.message)}))},type:"submit",className:"login__signInButton",children:"Sign In"}),Object(h.jsx)("hr",{}),Object(h.jsx)("p",{children:"New customer? Start here."}),Object(h.jsx)("button",{onClick:function(t){t.preventDefault(),p.createUserWithEmailAndPassword(i,l).then((function(t){e.push("/")})).catch((function(e){return alert(e.message)}))},type:"submit",className:"login__registerButton",children:"Create New Account"})]})]})]})},N=(c(64),c.p+"static/media/TomHum.d76fb58a.jpg"),k=(c(65),c(42)),T=c.n(k);var B=function(e){var t=e.id,c=e.title,n=e.image,i=e.price,a=e.rating,s=m(),j=Object(r.a)(s,2),l=(j[0].basket,j[1]);return Object(h.jsxs)("div",{className:"product",children:[Object(h.jsxs)("div",{className:"product__info",children:[Object(h.jsx)("p",{children:c}),Object(h.jsxs)("p",{className:"product__price",children:[Object(h.jsx)("strong",{children:i}),Object(h.jsx)("small",{children:"$"})]}),Object(h.jsx)("div",{className:"product__rating",children:Array(a).fill().map((function(e){return Object(h.jsx)("p",{children:"*"})}))})]}),Object(h.jsx)("img",{src:n,alt:"hinh anh"}),Object(h.jsx)(o.b,{children:Object(h.jsx)("div",{className:"product_basket",onClick:function(){l({type:"ADD_TO_BASKET",item:{id:t,title:c,image:n,price:i,rating:a}})},children:Object(h.jsx)(T.a,{})})})]})};var S=function(){return Object(h.jsxs)("div",{className:"home",children:[Object(h.jsxs)("div",{className:"home__row",children:[Object(h.jsx)(B,{id:"1",title:"T\xf4m H\xf9m Bi\u1ec3n \u0110\xf4ng",price:50,rating:4,image:N}),Object(h.jsx)(B,{id:"1",title:"T\xf4m H\xf9m Bi\u1ec3n \u0110\xf4ng",price:50,rating:4,image:N}),Object(h.jsx)(B,{id:"1",title:"T\xf4m H\xf9m Bi\u1ec3n \u0110\xf4ng",price:50,rating:4,image:N})]}),Object(h.jsxs)("div",{className:"home__row",children:[Object(h.jsx)(B,{id:"1",title:"T\xf4m H\xf9m Bi\u1ec3n \u0110\xf4ng",price:50,rating:4,image:N}),Object(h.jsx)(B,{id:"1",title:"T\xf4m H\xf9m Bi\u1ec3n \u0110\xf4ng",price:50,rating:4,image:N}),Object(h.jsx)(B,{id:"1",title:"T\xf4m H\xf9m Bi\u1ec3n \u0110\xf4ng",price:50,rating:4,image:N}),Object(h.jsx)(B,{id:"1",title:"T\xf4m H\xf9m Bi\u1ec3n \u0110\xf4ng",price:50,rating:4,image:N}),Object(h.jsx)(B,{id:"1",title:"T\xf4m H\xf9m Bi\u1ec3n \u0110\xf4ng",price:50,rating:4,image:N})]}),Object(h.jsxs)("div",{className:"home__row",children:[Object(h.jsx)(B,{id:"1",title:"T\xf4m H\xf9m Bi\u1ec3n \u0110\xf4ng",price:50,rating:4,image:N}),Object(h.jsx)(B,{id:"1",title:"T\xf4m H\xf9m Bi\u1ec3n \u0110\xf4ng",price:50,rating:4,image:N})]})]})},y=(c(66),c(43)),w=c.n(y);var C=function(){var e=m(),t=Object(r.a)(e,2),c=t[0].basket;return t[1],Object(h.jsxs)("div",{className:"subtotal",children:[Object(h.jsx)(w.a,{renderText:function(e){return Object(h.jsxs)("p",{children:["T\u1ed5ng (",c.length," m\xf3n): ",Object(h.jsx)("strong",{children:"".concat(e)})]})},decimalScale:2,value:function(e){return null===e||void 0===e?void 0:e.reduce((function(e,t){return t.price+e}),0)}(c),displayType:"text",thousandSeparator:!0,prefix:"$"}),Object(h.jsx)("button",{children:"Thanh To\xe1n"})]})};c(39);var A=function(e){var t=e.id,c=e.title,n=e.image,i=e.price,a=e.rating,s=m(),j=Object(r.a)(s,2),l=(j[0].basket,j[1]);return Object(h.jsxs)("div",{className:"productcart",children:[Object(h.jsx)("img",{className:"productcart__image ",src:n,alt:""}),Object(h.jsxs)("div",{className:"productcart__info",children:[Object(h.jsx)("p",{className:"productcart__title",children:c}),Object(h.jsxs)("p",{className:"productcart__price",children:[i,"$"]}),Object(h.jsx)("div",{className:"productcart__rating",children:Array(a).fill().map((function(e){return Object(h.jsx)("span",{children:"*"})}))}),Object(h.jsx)("button",{onClick:function(){l({type:"REMOVE_FROM_CART",id:t})},children:"X\xf3a kh\u1ecfi gi\u1ecf h\xe0ng"})]})]})};var I=function(){var e=m(),t=Object(r.a)(e,1)[0].basket;return Object(h.jsxs)("div",{className:"checkout",children:[Object(h.jsx)("div",{className:"checkout__left",children:0===t.lenght?Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{className:"checkout__title",children:"Your Shopping basket empty"}),Object(h.jsx)("p",{children:"You have no items your basket. Buy one."})]}):Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{className:"shoppingbaskettitle",children:"Gi\u1ecf h\xe0ng c\u1ee7a b\u1ea1n"}),t.map((function(e){return Object(h.jsx)(A,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating})}))]})}),t.length>0&&Object(h.jsx)("div",{className:"checkout__right",children:Object(h.jsx)(C,{})})]})};c(68);var E=function(){return Object(h.jsxs)("div",{className:"footerarea",children:[Object(h.jsx)("div",{className:"footerarea__top",children:Object(h.jsx)("h5",{children:"Back to top"})}),Object(h.jsxs)("div",{className:"footerarea__links",children:[Object(h.jsx)("div",{className:"footerarea__linksarea",children:Object(h.jsx)("span",{children:"Test"})}),Object(h.jsx)("div",{className:"footerarea__linksarea",children:Object(h.jsx)("span",{children:"Test"})}),Object(h.jsx)("div",{className:"footerarea__linksarea",children:Object(h.jsx)("span",{children:"Test"})}),Object(h.jsx)("div",{className:"footerarea__linksarea",children:Object(h.jsx)("span",{children:"Test"})})]})]})};c(69);var H=function(){return Object(h.jsx)("div",{className:"navlink",children:Object(h.jsxs)("div",{className:"navlink__outer",children:[Object(h.jsx)(o.b,{children:"Th\u1ef1c \u0110\u01a1n"}),Object(h.jsx)(o.b,{children:"Deal 199k"}),Object(h.jsx)(o.b,{children:"\u0110\u1eb7t b\xe0n"}),Object(h.jsx)(o.b,{children:"Khuy\u1ebfn m\xe3i"}),Object(h.jsx)(o.b,{children:"Li\xean h\u1ec7"})]})})};var L=function(){var e=m(),t=Object(r.a)(e,2),c=t[0].loggedinuser,i=t[1];return Object(n.useEffect)((function(){var e=p.onAuthStateChanged((function(e){i(e?{type:"SET_LOGIN",user:e}:{type:"SET_LOGIN",user:null})}));return function(){e()}}),[]),console.log("user>>",c),Object(h.jsx)(o.a,{children:Object(h.jsx)("div",{className:"App",children:Object(h.jsxs)(_.c,{children:[Object(h.jsxs)(_.a,{path:"/checkout",children:[Object(h.jsx)(g,{}),Object(h.jsx)(I,{})]}),Object(h.jsx)(_.a,{path:"/login",children:Object(h.jsx)(v,{})}),Object(h.jsxs)(_.a,{path:"/",children:[Object(h.jsx)(g,{}),Object(h.jsx)(H,{}),Object(h.jsx)(S,{}),Object(h.jsx)(E,{})]})]})})})},D=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,83)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,a=t.getLCP,s=t.getTTFB;c(e),n(e),i(e),a(e),s(e)}))},F=c(36),R=c(22),P=function(e,t){switch(t.type){case"ADD_TO_BASKET":return Object(R.a)(Object(R.a)({},e),{},{basket:[].concat(Object(F.a)(e.basket),[t.item])});case"SET_LOGIN":return Object(R.a)(Object(R.a)({},e),{},{loggedinuser:t.user});case"REMOVE_FROM_CART":var c=Object(F.a)(e.basket),n=e.basket.findIndex((function(e){return e.id===t.id}));return n>=0?c.splice(n,1):console.log("there aaa"),Object(R.a)(Object(R.a)({},e),{},{basket:c})}};s.a.render(Object(h.jsx)(i.a.StrictMode,{children:Object(h.jsx)(O,{initialState:{basket:[],loggedinuser:null},reducer:P,children:Object(h.jsx)(L,{})})}),document.getElementById("root")),D()}},[[71,1,2]]]);
//# sourceMappingURL=main.60054e4f.chunk.js.map