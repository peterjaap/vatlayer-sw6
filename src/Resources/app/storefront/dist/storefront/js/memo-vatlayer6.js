(window.webpackJsonp=window.webpackJsonp||[]).push([["memo-vatlayer6"],{n3wH:function(e,t,n){"use strict";n.r(t);var s=n("Cxgn"),r=n("FGIj"),a=n("nhVY"),i=n("k8s9"),o=n("u0Tz");function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var n=0;n<t.length;n++){var s=t[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}function u(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var h,m,_,y=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),u(this,f(t).apply(this,arguments))}var n,s,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,e),n=t,(s=[{key:"init",value:function(){this._client=new i.a,this._createContainers(),this._registerEvents()}},{key:"_createContainers",value:function(){this._container=document.createElement("div"),this._container.classList.add("vatlayer-container"),this.el.insertAdjacentElement("beforebegin",this._container),this._container.insertAdjacentElement("afterbegin",this.el),this._loader=document.createElement("div"),this._loader.classList.add("vatlayer-loader"),this._container.insertAdjacentElement("beforeend",this._loader),this._message=document.createElement("div"),this._message.classList.add("vatlayer-message"),this._container.insertAdjacentElement("beforeend",this._message),this._message_content=document.createElement("div"),this._message_content.classList.add("vatlayer-message-content"),this._message.insertAdjacentElement("beforeend",this._message_content)}},{key:"_checkVatId",value:function(){var e=this,t=this._getRequestData();t&&(o.a.create(this._loader),this._client.post(this.options.url,JSON.stringify(t),(function(t){return e._parseRequest(JSON.parse(t))})))}},{key:"_parseRequest",value:function(e){var t=this;o.a.remove(this._loader),this.el.classList.forEach((function(e){e.indexOf("alert")>=0&&t.el.classList.remove(e)})),this.el.classList.add("alert-".concat(e.message.type)),this._message.classList.forEach((function(e){e.indexOf("alert")>=0&&t._message.classList.remove(e)})),this._message.classList.add("alert-".concat(e.message.type)),this.el.title=e.message.message,this._message_content.innerHTML=e.message.message}},{key:"_getRequestData",value:function(){if(0!==this.el.value.trimEnd().length){var e={vatId:this.el.value};return window.csrf.enabled&&"twig"===window.csrf.mode&&(e._csrf_token=this.options.csrfToken),e}}},{key:"_registerEvents",value:function(){var e=this._checkVatId.bind(this),t=a.a.debounce(e,1e3);this.el.addEventListener("blur",t),this.el.addEventListener("keydown",t)}}])&&l(n.prototype,s),r&&l(n,r),t}(r.a);h=y,m="options",_={url:window.router["frontend.memo.vatlayer.validate"],csrfToken:""},m in h?Object.defineProperty(h,m,{value:_,enumerable:!0,configurable:!0,writable:!0}):h[m]=_,s.a.register("Vatlayer",y,"[data-vatlayer]")}},[["n3wH","runtime","vendor-node","vendor-shared"]]]);