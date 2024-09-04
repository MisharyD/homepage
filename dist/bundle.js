(()=>{"use strict";var n={37:(n,e,t)=>{t.d(e,{A:()=>g});var r=t(601),i=t.n(r),o=t(314),a=t.n(o),c=t(417),l=t.n(c),s=new URL(t(615),t.b),p=new URL(t(863),t.b),f=a()(i()),d=l()(s),m=l()(p);f.push([n.id,`@font-face {\n    font-family: 'robotoregular';\n    src: url(${d}) format('woff2'),\n         url(${m}) format('woff');\n    font-weight: normal;\n    font-style: normal;\n\n}\n\n*\n{\n    font-family: "robotoregular";\n}\n\n:root\n{\n    --title-size:48px;\n    --section-margin: 10vw;\n    --card-width: calc(100% - (2 * var(--section-margin)))\n}\n\nhtml,body\n{\n    margin:0px;\n    padding-top: 32px;\n}\n\nheader\n{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap:0.5rem;\n    margin: 32px;\n}\n\nheader .my-picture\n{\n    width:320px;\n}\n\n.about-container\n{\n    display: flex;\n    flex-direction: column;\n    gap:2rem;\n}\n\n.title-and-description-container\n{\n    display: flex;\n    flex-direction: column;\n    gap:1rem;\n}\n\n.about-title\n{\n    text-align: center;\n    margin-top: 24px;\n    margin-bottom: 12px;\n    font-size: var(--title-size);\n    font-weight: lighter;\n}\n\nheader .contacts-container\n{\n    align-self: center;\n\n    display: flex;\n    align-items: center;\n    gap:3rem;\n}\n\nheader .icon\n{\n    width:32px;\n    fill:black;\n}\n\nmain\n{\n    margin:32px var(--section-margin);\n    margin-top: 32px;\n}\n\n.main-title\n{\n    text-align: center;\n    font-size: var(--title-size);\n    font-weight: lighter;\n}\n\n.cards-container\n{\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(var(--card-width), 1fr));\n    gap:70px;\n}\n\n.project-card\n{\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n}\n\n.project-img\n{\n    width:100%;\n    height:auto;\n}\n\n.project-info\n{\n    display: flex;\n    flex-direction: column;\n    gap:0.5rem;\n    padding: 12px 24px;\n    height:150px;\n    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.5);\n}\n\n.project-info .name\n{\n    font-size: 28px;\n}\n\n.name-and-links-container\n{\n    display: flex;\n    justify-content: space-between;\n}\n\n.links-container\n{\n    display: flex;\n    gap:1rem;\n}\n\n.project-info .icon\n{\n    width: 24px;\n}\n\nfooter\n{\n    --footer-margin:24px;\n    display: flex;\n    flex-direction: column;\n    margin-top: 120px;\n    \n    background-color: #0891B2;\n    color: white;\n}\n\n.address\n{\n    margin:12px var(--footer-margin);\n}\n\n.footer-title\n{\n    font-size: 48px;\n    margin: 12px;\n    font-weight: lighter;\n    text-align: center;\n}\n\nfooter .contacts-container\n{\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    margin: 12px var(--footer-margin);\n    gap:1rem;\n}\n\n.social-links\n{\n    display: flex;\n    align-self: center;\n    gap:1rem;\n}\n\n.contacts-container .icon\n{\n    width: 40px;\n}\n\n/* desktop */\n@media (min-width:1200px)\n{\n    :root\n    {\n        --section-margin:5vw;\n        --card-width: 350px;\n        --title-size:48px\n    }\n\n    header\n    {\n        display: flex;\n        flex-direction: row;\n        align-items: center;\n        gap:0;\n        margin: 32px var(--section-margin);\n        height: 20vw;\n        min-height: 350px;\n    }\n\n    header .my-picture\n    {\n        width:35vw;\n        height: calc(100% + 100px);\n        min-width: 500px;\n        margin-bottom: 48px;\n    }\n\n    .about-container\n    {\n        display: flex;\n        flex-direction: column;\n        justify-content: space-around;\n        gap:1rem;\n        box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.5);\n        min-height: 100%;\n        padding:0px 24px;\n    }\n\n    .about-title\n    {\n        align-self: flex-start;\n        margin:0px;\n        font-size: var(--title-size);\n        font-weight: lighter;\n    }\n\n    .description\n    {\n        margin: 0px;\n    }\n\n    header .contacts-container\n    {\n        align-self: flex-end;\n        display: flex;\n        align-items: center;\n        gap:2rem;\n    }\n\n    header .icon\n    {\n        width:32px;\n        fill:black;\n    }\n\n    .main-title\n    {\n        text-align: start\n    }\n\n    footer\n    {\n        --footer-margin:24px;\n        display: flex;\n        flex-direction: row;\n        justify-content: space-around;\n        margin-top: 120px;\n        \n        background-color: #0891B2;\n        color: white;\n    }\n\n    .footer-info-container\n    {\n        display: flex;\n        flex-direction: column;\n    }\n\n    .address\n    {\n        margin:12px var(--footer-margin);\n    }\n\n    .footer-title\n    {\n        font-size: 48px;\n        margin: 12px;\n        font-weight: lighter;\n        text-align: center;\n    }\n\n    footer .contacts-container\n    {\n        display: flex;\n        flex-direction: column;\n        align-items: flex-start;\n        margin: 12px var(--footer-margin);\n        gap:1rem;\n    }\n\n    .social-links\n    {\n        display: flex;\n        align-self: center;\n        gap:1rem;\n    }\n\n    .contacts-container .icon\n    {\n        width: 40px;\n    }\n\n    footer .my-picture\n    {\n        width:50vw;\n        min-width: 600px;\n        height:30vh;\n        min-height: 300px; \n    }\n\n}\n\n/* tablet */ \n@media (min-width:750px) \n{\n    :root\n    {\n        --section-margin:5vw;\n        --card-width: 300px;\n        --title-size:48px\n    }\n\n    header\n    {\n        display: flex;\n        flex-direction: row;\n        align-items: center;\n        gap:0;\n        margin: 32px var(--section-margin);\n        height: 20vw;\n        min-height: 250px;\n    }\n\n    header .my-picture\n    {\n        width:300px;\n        height: 300px;\n        margin-bottom: 48px;\n    }\n\n    .about-container\n    {\n        display: flex;\n        flex-direction: column;\n        justify-content: space-around;\n        gap:1rem;\n        box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.5);\n        min-height: 100%;\n        padding:12px 24px;\n    }\n\n    .about-title\n    {\n        align-self: flex-start;\n        margin:0px;\n        font-size: var(--title-size);\n        font-weight: lighter;\n    }\n\n    .description\n    {\n        margin: 0px;\n    }\n\n    header .contacts-container\n    {\n        align-self: flex-end;\n        display: flex;\n        align-items: center;\n        gap:2rem;\n    }\n\n    header .icon\n    {\n        width:32px;\n        fill:black;\n    }\n\n    .main-title\n    {\n        text-align: start\n    }\n\n    footer\n    {\n        --footer-margin:24px;\n        display: flex;\n        flex-direction: row;\n        justify-content: space-around;\n        margin-top: 120px;\n        \n        background-color: #0891B2;\n        color: white;\n    }\n\n    .footer-info-container\n    {\n        display: flex;\n        flex-direction: column;\n        gap:2rem;\n    }\n\n    .address\n    {\n        margin:12px var(--footer-margin);\n        font-size: 28px;\n    }\n\n    .footer-title\n    {\n        font-size: 64px;\n        margin: 0px;\n        padding:0px;\n        font-weight: lighter;\n        text-align: center;\n    }\n\n    footer .contacts-container\n    {\n        display: flex;\n        flex-direction: column;\n        align-items: flex-start;\n        margin: 12px var(--footer-margin);\n        gap:1rem;\n        font-size: 28px;\n    }\n\n    .social-links\n    {\n        display: flex;\n        align-self: center;\n        gap:1rem;\n    }\n\n    .contacts-container .icon\n    {\n        width: 40px;\n    }\n\n    footer .my-picture\n    {\n        width:30vw;\n        min-width: 400px;\n        height:20vh;\n        min-height: 400px; \n    }\n\n}\n`,""]);const g=f},332:(n,e,t)=>{t.d(e,{A:()=>c});var r=t(601),i=t.n(r),o=t(314),a=t.n(o)()(i());a.push([n.id,"html,\nbody {\n  margin: 0px;\n  height: 100dvh;\n}\n\n* {\n  box-sizing: border-box;\n}\n\nbutton {\ncursor: pointer;\nborder: 0px;\n}",""]);const c=a},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,i,o){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var l=this[c][0];null!=l&&(a[l]=!0)}for(var s=0;s<n.length;s++){var p=[].concat(n[s]);r&&a[p[0]]||(void 0!==o&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=o),t&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=t):p[2]=t),i&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=i):p[4]="".concat(i)),e.push(p))}},e}},417:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var o={},a=[],c=0;c<n.length;c++){var l=n[c],s=r.base?l[0]+r.base:l[0],p=o[s]||0,f="".concat(s," ").concat(p);o[s]=p+1;var d=t(f),m={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==d)e[d].references++,e[d].updater(m);else{var g=i(m,r);r.byIndex=c,e.splice(c,0,{identifier:f,updater:g,references:1})}a.push(f)}return a}function i(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,i){var o=r(n=n||[],i=i||{});return function(n){n=n||[];for(var a=0;a<o.length;a++){var c=t(o[a]);e[c].references--}for(var l=r(n,i),s=0;s<o.length;s++){var p=t(o[s]);0===e[p].references&&(e[p].updater(),e.splice(p,1))}o=l}}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var i=void 0!==t.layer;i&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,i&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},863:(n,e,t)=>{n.exports=t.p+"c10272052d7dba42456e.woff"},615:(n,e,t)=>{n.exports=t.p+"bc957b6cbe0c9a0faa29.woff2"}},e={};function t(r){var i=e[r];if(void 0!==i)return i.exports;var o=e[r]={id:r,exports:{}};return n[r](o,o.exports,t),o.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");if(r.length)for(var i=r.length-1;i>-1&&(!n||!/^http(s?):/.test(n));)n=r[i--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0;var r=t(72),i=t.n(r),o=t(825),a=t.n(o),c=t(659),l=t.n(c),s=t(56),p=t.n(s),f=t(540),d=t.n(f),m=t(113),g=t.n(m),x=t(37),u={};u.styleTagTransform=g(),u.setAttributes=p(),u.insert=l().bind(null,"head"),u.domAPI=a(),u.insertStyleElement=d(),i()(x.A,u),x.A&&x.A.locals&&x.A.locals;var h=t(332),v={};v.styleTagTransform=g(),v.setAttributes=p(),v.insert=l().bind(null,"head"),v.domAPI=a(),v.insertStyleElement=d(),i()(h.A,v),h.A&&h.A.locals&&h.A.locals})();