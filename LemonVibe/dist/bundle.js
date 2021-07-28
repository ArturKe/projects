(()=>{"use strict";var e={890:(e,t,n)=>{n.d(t,{Z:()=>p});var r=n(645),o=n.n(r),i=n(667),s=n.n(i),a=new URL(n(996),n.b),c=new URL(n(549),n.b),l=new URL(n(242),n.b),d=o()((function(e){return e[1]})),u=s()(a),h=s()(c),m=s()(l);d.push([e.id,".wraper {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    \r\n}\r\n.game_body {\r\n    width: 300px;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n.game_body__top {\r\n    /* height: 30px; */\r\n    background: rgb(173, 131, 211);\r\n    z-index: 5;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n.game_body__counter {\r\n    width: 120px;\r\n    font-size: 15px;\r\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\r\n    color: cornsilk;\r\n    padding-left: 5px;\r\n}\r\n.game_body__pause {\r\n    width: 40px;\r\n    height: 40px;\r\n    background-color: rgba(193, 74, 74, 0.728);\r\n    cursor: pointer;\r\n    border-radius: 12px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-direction: column;\r\n}\r\n\r\n.pause_item {\r\n    width: 23px;\r\n    height: 3px;\r\n    margin: 2px;\r\n    background-color: burlywood;\r\n    border-radius: 2px;\r\n}\r\n.game_body__hearts {\r\n    width: 120px;\r\n}\r\n.game_body__middle {\r\n    height: 300px;\r\n    background: linear-gradient(0deg, rgba(240,240,249,1) 0%, rgba(171,205,223,1) 62%, rgba(0,212,255,1) 100%);\r\n\r\n}\r\n.game_body__bottom {\r\n    height: 30px;\r\n    background-color: burlywood;\r\n    z-index: 5;\r\n\r\n}\r\n\r\n.game_body__main {\r\n    position: relative;\r\n    \r\n    top: -20px;\r\n}\r\n.lemon{\r\n    position: absolute;\r\n    width: 40px;\r\n    height: 40px;\r\n    background: url("+u+") center/cover no-repeat;\r\n    z-index: 1;\r\n    \r\n\r\n}\r\n\r\n.basket{\r\n    position: relative;\r\n    width: 60px;\r\n    height: 40px;\r\n    z-index: 5;\r\n\r\n}\r\n\r\n.black {\r\n    background: url("+h+") center/contain no-repeat;\r\n}\r\n.red{\r\n    \r\n    background: url("+m+") center/contain no-repeat;\r\n \r\n}\r\n\r\n/* -------------------- Menu -------------------- */\r\n.menu {\r\n    height: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    opacity: 0;\r\n    visibility: hidden;\r\n    z-index: 10;\r\n    flex-direction: column;\r\n}\r\n.show{\r\n    opacity: 1;\r\n    visibility: visible;\r\n}\r\n\r\n.hide{\r\n    opacity: 0;\r\n    visibility: hidden;\r\n    \r\n}\r\n\r\n.menu__button {\r\n    width: 150px;\r\n    height: 35px;\r\n    border-radius: 15px;\r\n    font-size: 20px;\r\n    cursor: pointer;\r\n    z-index: 10;\r\n    margin: 5px;\r\n}",""]);const p=d},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(o[s]=!0)}for(var a=0;a<e.length;a++){var c=[].concat(e[a]);r&&o[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var i={},s=[],a=0;a<e.length;a++){var c=e[a],l=r.base?c[0]+r.base:c[0],d=i[l]||0,u="".concat(l," ").concat(d);i[l]=d+1;var h=n(u),m={css:c[1],media:c[2],sourceMap:c[3]};-1!==h?(t[h].references++,t[h].updater(m)):t.push({identifier:u,updater:o(m,r),references:1}),s.push(u)}return s}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var s=0;s<i.length;s++){var a=n(i[s]);t[a].references--}for(var c=r(e,o),l=0;l<i.length;l++){var d=n(i[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}i=c}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r=n.css,o=n.media,i=n.sourceMap;o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,e)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},549:(e,t,n)=>{e.exports=n.p+"f1945ae4b467bd10a78f.png"},242:(e,t,n)=>{e.exports=n.p+"eeeb45cf9b9e8982e9c6.png"},996:(e,t,n)=>{e.exports=n.p+"0e957f250b8abf114cef.png"}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,exports:{}};return e[r](i,i.exports,n),i.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,(()=>{class e{constructor(e){this.target=document.querySelector(e),this.class=e}}var t=n(379),r=n.n(t),o=n(795),i=n.n(o),s=n(569),a=n.n(s),c=n(565),l=n.n(c),d=n(216),u=n.n(d),h=n(589),m=n.n(h),p=n(890),b={};b.styleTagTransform=m(),b.setAttributes=l(),b.insert=a().bind(null,"head"),b.domAPI=i(),b.insertStyleElement=u(),r()(p.Z,b),p.Z&&p.Z.locals&&p.Z.locals,console.log("Hello");const f=new class extends e{constructor(e){super(e),this.renderComponent,this.btn=document.querySelector(".menu__button"),this.wasClicked=!1,this.start="START",this.pause="CONTINUE",this.restart="RESTART",this.init(),this.bindEvents()}init(){this.wasClicked?(document.querySelector(".menu__button").innerHTML=this.pause,this.addButton(this.restart)):document.querySelector(".menu__button").innerHTML=this.start}bindEvents(){document.querySelector(".menu__button").addEventListener("click",this.clickEvent.bind(this)),document.querySelector(this.class).addEventListener("click",this.targetEvent.bind(this))}clickEvent(){console.log("------------------------------MenuButton"),this.hide()}targetEvent(e){e.target.innerText===this.restart&&(this.renderComponent.restartGame(),this.hide())}registerComponent(e){this.renderComponent=e}startGame(){this.renderComponent&&(this.renderComponent.restartGame(),this.wasClicked=!0)}continueGame(){this.renderComponent&&this.renderComponent.continueGame()}addButton(e){const t=document.querySelector(this.class);t.children.length<2&&(t.innerHTML+=`<button class="menu__button">${e}</button>`)}hide(){console.log("hide"),document.querySelector(this.class).classList.remove("show"),this.wasClicked?this.continueGame():this.startGame()}show(){console.log("Show component"+this.wasClicked),this.init(),document.querySelector(this.class).classList.add("show"),this.bindEvents()}}(".menu"),g=new class extends e{constructor(e){super(e),this.counterInit=0,this.counterLose=0,this.gameStart=!1,this.width=300,this.menuComponent,this.menuActive=!1,this.middleElem,this.func}bindMenuEvents(){console.log("Biiiiiind"),this.middleElem=document.querySelector(".game_body__pause"),this.func=this.menuEvent.bind(this),this.middleElem.addEventListener("click",this.func)}menuEvent(e){e.target.classList.contains("basket")||this.menuActive||(this.menuActive=!0,console.log("Mennuuu Calll"),this.pauseGame(),this.menuComponent.show(),this.middleElem.removeEventListener("click",this.func))}start(){console.log("Starting");let e=this.initDraw.bind(this),t=this.updateCoordinate.bind(this),n=setInterval((()=>{window.requestAnimationFrame(e)}),1200),r=setInterval((()=>{window.requestAnimationFrame(t),this.gameStart||(console.log("Stop Update Coordinate gameStrat is: "+this.gameStart),clearInterval(r),clearInterval(n),console.log("Init Timer is: "+r),console.log("Init Timer is: "+n))}),20)}cleanScreen(){document.querySelector(".game_body__main").innerHTML="",console.log("Clean Screen")}bodyStyle(e){document.body.style.overflow=e?"hidden":""}updateCoordinate(){document.querySelectorAll(".lemon").forEach((e=>{let t=e.style.top,n=+e.style.left.slice(0,-2),r=+e.style.transform.slice(7,-4),o=+t.slice(0,-2);if(o+=1,r+=1,e.style.top=`${o}px`,e.style.transform=`rotate(${r}deg)`,o>260){let t=+document.querySelector(".basket").style.left.slice(0,-2);n>=t&&n<=t+60&&(this.counterInit++,this.counterUpdate(this.counterInit),this.basketChangeColor(),document.querySelector(".game_body__main").removeChild(e)),o>300&&(document.querySelector(".game_body__main").removeChild(e),this.counterLose++,console.log("Loose "+this.counterLose))}}))}counterUpdate(e){document.querySelector(".game_body__counter").innerHTML=`Lemons: ${e}`}initDraw(){let e=Math.floor(249*Math.random()+1),t=Math.floor(359*Math.random()+1);document.querySelector(".game_body__main").innerHTML+=`<div class="lemon" data="${this.counterInit}" style="left:${e}px; top: 0px; transform: rotate(${t}deg)"></div>`,console.log("Spawn Lemon")}initBasket(){document.querySelector(".game_body__middle").innerHTML+='<div class="basket black" data="basket" style="left:100px; bottom: 40px"></div>',this.basketBindEvents(),this.basketBindTouchEvents()}basketChangeColor(){document.querySelector(".basket").classList.remove("black"),document.querySelector(".basket").classList.add("red"),setTimeout((()=>{document.querySelector(".basket").classList.remove("red"),document.querySelector(".basket").classList.add("black")}),150)}deleteBasket(){let e=document.querySelector(".basket");e&&document.querySelector(".game_body__middle").removeChild(e)}basketBindEvents(){let e=!1,t={startX:0,startOffsetX:0,curentPosX:0},n=document.querySelector(".basket");n.addEventListener("mousedown",(r=>{e=!0,t.startX=r.clientX,t.startOffsetX=r.layerX,t.curentPosX=+n.style.left.slice(0,-2),this.bodyStyle(!0)})),n.addEventListener("mouseup",(()=>{e=!1,this.bodyStyle(!1)})),n.addEventListener("mousemove",(n=>{e&&this.basketMove(!1,t,n)}))}basketBindTouchEvents(){let e=!1,t={startX:0,startOffsetX:0,curentPosX:0},n=document.querySelector(".basket");n.addEventListener("touchstart",(r=>{e=!0,t.startX=Math.floor(r.touches[0].clientX),console.log(t.startX),t.startOffsetX=10,t.curentPosX=+n.style.left.slice(0,-2),this.bodyStyle(!0)})),n.addEventListener("touchend",(()=>{e=!1,this.bodyStyle(!1)})),n.addEventListener("touchmove",(n=>{e&&this.basketMove(!0,t,n)}))}basketMove(e,t,n){let r,o=document.querySelector(".basket");e&&(r=Math.floor(n.touches[0].clientX)),e||(r=n.clientX);let i=t.curentPosX+r-t.startX;i<0?i=0:i>240&&(i=240),o.style.left=`${i}px`}continueGame(){this.gameStart=!0,this.menuActive=!1,this.counterUpdate(this.counterInit),this.start(),console.log("Continue Game "+this.gameStart),setTimeout(this.bindMenuEvents.bind(this),.5)}pauseGame(){console.log("Pause "+this.gameStart),this.gameStart=!1,console.log("Pause "+this.gameStart)}restartGame(){this.deleteBasket(),this.cleanScreen(),this.menuActive=!1,this.gameStart=!0,this.counterInit=0,this.counterUpdate(this.counterInit),this.initDraw(),this.initBasket(),this.start(),console.log("Restart Game"),setTimeout(this.bindMenuEvents.bind(this),.5)}registerComponent(e){this.menuComponent=e}}(".game_body__middle");f.registerComponent(g),g.registerComponent(f)})()})();