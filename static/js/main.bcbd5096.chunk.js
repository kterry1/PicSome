(this.webpackJsonppicsome=this.webpackJsonppicsome||[]).push([[0],{22:function(e,t,n){e.exports=n(33)},27:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(17),i=n.n(c),l=(n(27),n(8)),o=n(20),u=n(21),m=n(4),s=r.a.createContext();function f(e){var t=e.children,n=Object(a.useState)([]),c=Object(m.a)(n,2),i=c[0],l=c[1],f=Object(a.useState)([]),d=Object(m.a)(f,2),E=d[0],v=d[1];return Object(a.useEffect)((function(){fetch("https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json").then((function(e){return e.json()})).then((function(e){return l(e)}))}),[]),r.a.createElement(s.Provider,{value:{allPhotos:i,toggleFavorite:function(e){var t=i.map((function(t){return t.id===e?Object(u.a)({},t,{isFavorite:!t.isFavorite}):t}));l(t)},addItemToCart:function(e){v((function(t){return[].concat(Object(o.a)(t),[e])}))},cartItems:E,removeItemFromCart:function(e){v((function(t){return t.filter((function(t){return t.id!==e}))}))},emptyCart:function(){v([])}}},t)}function d(){var e=Object(a.useContext)(s).cartItems;return r.a.createElement("header",null,r.a.createElement(l.b,{to:"/"},r.a.createElement("h2",null,"Pic Some")),r.a.createElement(l.b,{to:"/cart"},e.length>0?r.a.createElement("i",{className:"ri-shopping-cart-fill ri-fw ri-2x"}):r.a.createElement("i",{className:"ri-shopping-cart-line ri-fw ri-2x"})))}function E(){var e=Object(a.useState)(!1),t=Object(m.a)(e,2),n=t[0],r=t[1],c=Object(a.useRef)(null);function i(){r(!0)}function l(){r(!1)}return Object(a.useEffect)((function(){return c.current.addEventListener("mouseenter",i),c.current.addEventListener("mouseleave",l),function(){c.current.removeEventListener("mouseenter",i),c.current.removeEventListener("mouseleave",l)}}),[]),[n,c]}function v(e){var t=e.item,n=E(),c=Object(m.a)(n,2),i=c[0],l=c[1],o=Object(a.useContext)(s).removeItemFromCart,u=i?"ri-delete-bin-fill":"ri-delete-bin-line";return r.a.createElement("div",{className:"cart-item"},r.a.createElement("i",{onClick:function(){return o(t.id)},className:u,ref:l}),r.a.createElement("img",{alt:"picture available to buy",src:t.url,width:"130px"}),r.a.createElement("p",null,"$5.99"))}function b(){var e=Object(a.useState)("Place Order"),t=Object(m.a)(e,2),n=t[0],c=t[1],i=Object(a.useContext)(s),l=i.cartItems,o=i.emptyCart,u=(5.99*l.length).toLocaleString("en-US",{style:"currency",currency:"USD"}),f=l.map((function(e){return r.a.createElement(v,{key:e.id,item:e})}));return r.a.createElement("main",{className:"cart-page"},r.a.createElement("h1",null,"Check out"),f,r.a.createElement("p",{className:"total-cost"},"Total:",u," "),l.length>0?r.a.createElement("div",{className:"order-button"},r.a.createElement("button",{onClick:function(){c("Ordering..."),setTimeout((function(){console.log("Order placed!"),c("Place Order!"),o()}),2e3)}},n)):r.a.createElement("p",null,"You have no items in your cart."))}function p(e){var t=e.className,n=e.img,c=E(),i=Object(m.a)(c,2),l=i[0],o=i[1],u=Object(a.useContext)(s),f=u.toggleFavorite,d=u.cartItems,v=u.addItemToCart,b=u.removeItemFromCart;return r.a.createElement("div",{ref:o,className:"".concat(t," image-container")},r.a.createElement("img",{alt:"Variety of Images to buy",src:n.url,className:"image-grid"}),n.isFavorite?r.a.createElement("i",{className:"ri-heart-fill favorite",onClick:function(){return f(n.id)}}):l?r.a.createElement("i",{className:"ri-heart-line favorite",onClick:function(){return f(n.id)}}):void 0,d.some((function(e){return e.id===n.id}))?r.a.createElement("i",{onClick:function(){return b(n.id)},className:"ri-shopping-cart-fill cart"}):l?r.a.createElement("i",{onClick:function(){return v(n)},className:"ri-add-circle-line cart"}):void 0)}function h(){var e=Object(a.useContext)(s).allPhotos.map((function(e,t){return r.a.createElement(p,{key:e.id,img:e,className:(n=t,n%5===0?"big":n%6===0?"wide":void 0)});var n}));return r.a.createElement("main",{className:"photos"},e)}var g=n(6);function O(){return r.a.createElement("div",null,r.a.createElement(d,null),r.a.createElement(g.c,null,r.a.createElement(g.a,{exact:!0,path:"/"},r.a.createElement(h,null)),r.a.createElement(g.a,{exact:!0,path:"/cart"},r.a.createElement(b,null))))}i.a.render(r.a.createElement(f,null,r.a.createElement(l.a,null,r.a.createElement(O,null))),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.bcbd5096.chunk.js.map