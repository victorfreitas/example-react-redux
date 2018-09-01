!function(e){function t(t){for(var r,i,u=t[0],c=t[1],s=t[2],p=0,f=[];p<u.length;p++)i=u[p],a[i]&&f.push(a[i][0]),a[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(l&&l(t);f.length;)f.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,u=1;u<n.length;u++){var c=n[u];0!==a[c]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={0:0},o=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var u=window.webpackJsonp=window.webpackJsonp||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var l=c;o.push([17,1]),n()}({17:function(e,t,n){n(31),e.exports=n(29)},29:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(11),i=n(3),u=n(1),c=n.n(u),s=function(e){var t=e.counts;return a.a.createElement("span",{className:"counts"},"Counter:",a.a.createElement("strong",null,t))};s.propTypes={counts:c.a.number.isRequired};var l=s,p=Object(i.b)(function(e){return{counts:e.counters}})(l),f=function(e){var t=e.text,n=e.click;return a.a.createElement("button",{type:"button",className:"btn",onClick:n},t)};f.propTypes={text:c.a.string.isRequired,click:c.a.func.isRequired};var d=f,y=function(e){var t=e.list;return a.a.createElement("div",{className:"buttons"},t.map(function(e){var t=e.text,n=e.click;return a.a.createElement(d,{key:t,text:t,click:n})}))};y.propTypes={list:c.a.arrayOf(c.a.shape({text:c.a.string.isRequired,click:c.a.func.isRequired})).isRequired};var h=y;function v(e){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e,t){return!t||"object"!==v(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function E(e,t){return(E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var O=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),b(this,g(t).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&E(e,t)}(t,r["Component"]),function(e,t,n){t&&m(e.prototype,t),n&&m(e,n)}(t,[{key:"getButtons",value:function(){var e=this;return[{text:"Increment",click:function(){return e.addCount(1)}},{text:"Decrement",click:function(){return e.addCount(-1)}}]}},{key:"addCount",value:function(e){(0,this.props.makeCounters)(e)}},{key:"render",value:function(){return a.a.createElement("div",{className:"counter-container"},a.a.createElement(p,null),a.a.createElement(h,{list:this.getButtons()}))}}]),t}();O.propTypes={makeCounters:c.a.func.isRequired};var w=O,_=function(e){return{type:"CHANGE_ZIPCODE",payload:e}},j=function(e){if(e.erro)throw new Error;return e};function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var C=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.zipCode=t,this.dispatch=n,this.dispatchIsWait(!0),this.request()}return function(e,t,n){t&&S(e.prototype,t),n&&S(e,n)}(e,[{key:"dispatchIsWait",value:function(e){this.dispatch({type:"IS_WAIT",payload:e})}},{key:"getApiUrl",value:function(){return"".concat("https://viacep.com.br/ws","/").concat(this.zipCode,"/json")}},{key:"request",value:function(){var e=this;fetch(this.getApiUrl()).then(function(e){return e.json()}).then(j).then(function(t){return e.done(t)}).catch(function(){return e.error()})}},{key:"done",value:function(e){this.dispatchIsWait(!1),this.dispatch({type:"ADDRESS_CHANGED",payload:e})}},{key:"error",value:function(){this.dispatchIsWait(!1),this.dispatch({type:"ADDRESS_CHANGED",payload:{error:"Address not found for this zip code: (".concat(function(e){var t=e.substring(0,5);return e.length>5&&(t+="-".concat(e.substring(5,8))),t}(this.zipCode),")")}})}}]),e}(),k=function(e){return function(t){return new C(e,t)}},R={makeCounters:function(e){return{type:"MAKE_COUNTERS",payload:e}}},T=Object(i.b)(null,R)(w),q=function(e){var t=e.children;return a.a.createElement("div",{className:"container"},t)};q.propTypes={children:c.a.node.isRequired};var A=q,N=function(e){var t=e.title;return a.a.createElement("h1",{className:"title"},t)};N.defaultProps={title:"Example: React + Redux"},N.propTypes={title:c.a.string};var P=N,x=n(2),I=n(15),D=n.n(I),W=function(e){var t=e.value,n=e.change,r=e.disabled;return a.a.createElement("label",{htmlFor:"zipcode"},"CEP:",a.a.createElement("input",{type:"number",id:"zipcode",value:t,placeholder:"Enter your ZIP Code",onChange:n,disabled:r}))};W.propTypes={value:c.a.string.isRequired,change:c.a.func.isRequired,disabled:c.a.bool.isRequired};var z=W;function Z(e){return(Z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function M(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function U(e){return(U=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function G(e,t){return(G=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function H(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function X(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var B=function(e){function t(){var e,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return X(H(H(n=function(e,t){return!t||"object"!==Z(t)&&"function"!=typeof t?H(e):t}(this,(e=U(t)).call.apply(e,[this].concat(a))))),"handleChange",function(e){var t=e.target.value;(0,n.props.changeZipCode)(t),8===t.length&&n.request(t)}),X(H(H(n)),"handleSubmit",function(e){var t=n.props.value;e.preventDefault(),n.request(t)}),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&G(e,t)}(t,r["Component"]),function(e,t,n){t&&M(e.prototype,t),n&&M(e,n)}(t,[{key:"getClassNames",value:function(){var e=this.props.isWait;return D()("zipcode-form",{spinner:e})}},{key:"request",value:function(e){var t=this.props,n=t.changeAddress,r=t.changeZipCode;n(e),r("")}},{key:"render",value:function(){var e=this.props,t=e.isWait,n=e.value;return a.a.createElement("form",{className:this.getClassNames(),onSubmit:this.handleSubmit},a.a.createElement(z,{value:n,change:this.handleChange,disabled:t}))}}]),t}();B.propTypes={value:c.a.string.isRequired,changeAddress:c.a.func.isRequired,changeZipCode:c.a.func.isRequired,isWait:c.a.bool.isRequired};var J=B,K=Object(i.b)(function(e){return{value:e.zipcode,isWait:e.isWait}},function(e){return Object(x.b)({changeZipCode:_,changeAddress:k},e)})(J),L=function(e){var t=e.message;return a.a.createElement("p",{className:"error-message"},t)};L.propTypes={message:c.a.string.isRequired};var V=L,F=function(e){var t=e.name,n=e.value;return a.a.createElement("p",null,a.a.createElement("span",null,t,":"),a.a.createElement("strong",null,n))};F.propTypes={name:c.a.string.isRequired,value:c.a.string.isRequired};var Q=F;function Y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,a=!1,o=void 0;try{for(var i,u=e[Symbol.iterator]();!(r=(i=u.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==u.return||u.return()}finally{if(a)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var $=function(e){var t=Y(e,2),n=t[0],r=t[1];return a.a.createElement(Q,{key:n,name:n,value:r})},ee=function(e){return e.addresses.map($)};ee.propTypes={addresses:c.a.arrayOf(c.a.arrayOf(c.a.string)).isRequired};var te=ee,ne=function(e){var t=e.address;return a.a.createElement("div",{className:"info"},a.a.createElement(te,{addresses:Object.entries(t)}))};ne.propTypes={address:c.a.shape().isRequired};var re=ne,ae=function(e){var t=e.address;return t.error?a.a.createElement(V,{message:t.error}):t.cep?a.a.createElement(re,{address:t}):null};ae.propTypes={address:c.a.shape({cep:c.a.string,error:c.a.string}).isRequired};var oe=ae,ie=Object(i.b)(function(e){return{address:e.address}})(oe),ue=function(){return a.a.createElement("div",{className:"address-content"},a.a.createElement(K,null),a.a.createElement(ie,null))},ce=["pacman","happy","happy2","smile","smile2","tongue","tongue2","sad","sad2","wink","wink2","grin","grin2","cool","cool2","angry","angry2","evil","evil2","shocked","shocked2","baffled","baffled2","confused","confused2","neutral","neutral2","hipster","hipster2","wondering","wondering2","sleepy","sleepy2","frustrated","frustrated2","crying","crying2"],se=function(e){return a.a.createElement("i",{key:e,className:"icon icon-".concat(e)})},le=function(){return ce.map(se)},pe=function(){return a.a.createElement("div",{className:"icons-wrap"},a.a.createElement("h2",null,"Icons"),a.a.createElement("div",{className:"icons-content"},a.a.createElement(le,null)))},fe=function(){return a.a.createElement(A,null,a.a.createElement(P,null),a.a.createElement(pe,null),a.a.createElement(T,null),a.a.createElement(ue,null))},de={},ye=Object(x.c)({counters:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"MAKE_COUNTERS":return e+t.payload;default:return e}},address:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADDRESS_CHANGED":return t.payload;default:return e}},zipcode:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_ZIPCODE":return function(e){return e.replace(/[^\d]+/g,"").substring(0,8)}(t.payload);default:return e}},isWait:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"IS_WAIT":return t.payload;default:return e}}}),he=n(16),ve=[Object(x.a)(he.a)];window.__REDUX_DEVTOOLS_EXTENSION__&&ve.push(window.__REDUX_DEVTOOLS_EXTENSION__());var me=ve;var be=Object(x.e)(ye,{},x.d.apply(void 0,function(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}(me)));Object(o.render)(a.a.createElement(i.a,{store:be},a.a.createElement(fe,null)),document.getElementById("root"))}});