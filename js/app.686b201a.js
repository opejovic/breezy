(function(e){function t(t){for(var a,r,l=t[0],i=t[1],s=t[2],u=0,f=[];u<l.length;u++)r=l[u],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&f.push(o[r][0]),o[r]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);d&&d(t);while(f.length)f.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],a=!0,r=1;r<n.length;r++){var l=n[r];0!==o[l]&&(a=!1)}a&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},r={app:0},o={app:0},c=[];function l(e){return i.p+"js/"+({Animations:"Animations",backgrounds:"backgrounds",elements:"elements",forms:"forms",navigations:"navigations",pageExamples:"pageExamples",pageSections:"pageSections"}[e]||e)+"."+{Animations:"07e62e64",backgrounds:"1fb43f68",elements:"9de733a2",forms:"a6ce59e7",navigations:"41f67896",pageExamples:"636ff3ff",pageSections:"8390a08e"}[e]+".js"}function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={Animations:1,backgrounds:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="css/"+({Animations:"Animations",backgrounds:"backgrounds",elements:"elements",forms:"forms",navigations:"navigations",pageExamples:"pageExamples",pageSections:"pageSections"}[e]||e)+"."+{Animations:"6e3aafef",backgrounds:"94bac15b",elements:"31d6cfe0",forms:"31d6cfe0",navigations:"31d6cfe0",pageExamples:"31d6cfe0",pageSections:"31d6cfe0"}[e]+".css",o=i.p+a,c=document.getElementsByTagName("link"),l=0;l<c.length;l++){var s=c[l],u=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(u===a||u===o))return t()}var f=document.getElementsByTagName("style");for(l=0;l<f.length;l++){s=f[l],u=s.getAttribute("data-href");if(u===a||u===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var a=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=a,delete r[e],d.parentNode.removeChild(d),n(c)},d.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){r[e]=0})));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var c=new Promise((function(t,n){a=o[e]=[t,n]}));t.push(a[2]=c);var s,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=l(e);var f=new Error;s=function(t){u.onerror=u.onload=null,clearTimeout(d);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",f.name="ChunkLoadError",f.type=a,f.request=r,n[1](f)}o[e]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:u})}),12e4);u.onerror=u.onload=s,document.head.appendChild(u)}return Promise.all(t)},i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/breezy/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var d=u;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e623"),n("e379"),n("5dc8"),n("37e1");var a=n("7a23"),r={class:"min-h-screen font-inter bg-white px-5 sm:px-10 py-10"},o={class:"w-full"},c={class:"flex justify-between items-center xl:hidden mr-auto"},l=Object(a["h"])("div",null,[Object(a["h"])("h1",{class:"font-mono w-full pb-10"},[Object(a["h"])("span",{class:"font-extrabold"},[Object(a["h"])("a",{href:"https://github.com/opejovic/breezy"},[Object(a["h"])("svg",{class:"text-gray-800",width:"90",height:"27",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},[Object(a["h"])("path",{d:"M77 18.6c-.4 0-.9.3-1.3.7-.4.5-.7 1-.8 1.6-.2 1.3.1 2.4.9 3.2.7.7 2 1.2 3.5 1.5l7.4 1.2.3-.1.2-.3L89 14.9v-.4l-.4-.2-7.1-1.1c-1.7-.3-3-.2-3.9.3-.9.5-1.4 1.4-1.6 2.6-.1.6 0 1.1.2 1.6.2.4.5.7.8.9zm3.8-1.6c0-.2 0-.4.2-.5l.6-.2 2.4.4-.3 1.6-2.3-.3c-.3 0-.4-.2-.5-.4a1 1 0 01-.1-.6zm-.4 5.6c-.2 0-.4-.1-.5-.3a1 1 0 01-.1-.7c0-.2.1-.4.3-.5.1-.2.4-.2.6-.2l2.6.4L83 23l-2.6-.4zM59 21.8v.5l.3.2 4 .6h.5l.3-.3 2.2-3.3 1.5.2-.6 3.5.1.4.3.2 3.9.6.3-.1.2-.3 1.8-11.5V12l-.4-.2-7-1a7 7 0 00-2.8 0 4 4 0 00-2 1.2c-.6.6-1 1.3-1 2.2-.3 1.6.1 2.9 1.3 3.8L59 21.8zm7-5.7a.8.8 0 01-.5-.4 1 1 0 01-.1-.7l.3-.6c.2-.2.4-.2.6-.2l2.3.3-.3 2L66 16zm-20.3.7h-.4l-.2.4-.4 2.5.1.3.3.2L56.4 22h.3l.2-.4L58.7 10v-.4l-.4-.2-11-1.7-.4.1-.2.3-.4 2.5.1.4.3.2 7 1-.2 1.2-6-1-.3.1c-.2.1-.2.2-.2.4l-.4 2.3v.3l.4.2 6 1-.2 1-7.1-1zm-15.1-2.4h-.4l-.2.4-.4 2.5.1.4.3.2 11.3 1.7h.3l.2-.4 1.8-11.5v-.3l-.4-.2-11-1.8-.4.1-.2.3-.4 2.6v.3l.4.2 7 1-.3 1.2-5.9-1-.4.2-.1.3-.4 2.3v.4l.4.2 6 .9-.2 1.1-7.1-1.1zm-15-2.6l-.4.1-.2.4-.5 2.6.1.4.3.2 11.5 1.8.3-.1.2-.3.4-2.6a.8.8 0 00-.1-.6l-4.9-6 5 .7h.4L28 8l.4-2.7V5l-.4-.2L17.3 3h-.4l-.2.4-.4 2.6c0 .2 0 .4.2.6l4.7 6-5.7-.9zM1 .5L.7.6.6 1V1l3.3 8.1-.6 4v.3l.4.2 3.8.6h.3l.2-.4.6-4 5.7-6.7V3v-.2l-.3-.2-3.7-.6c-.4 0-.6 0-.8.3L6.9 5.5 5.4 1.7a.8.8 0 00-.7-.6L1 .5z",fill:"currentColor"})])])]),Object(a["h"])("br"),Object(a["h"])("span",{class:"text-xs italic"},"Vue x Tailwind")])],-1),i={"data-name":"hamburger-menu relative"},s={key:0,class:"w-8 h-8 text-gray-900",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},u=Object(a["h"])("path",{d:"M10 8.6l-7-7-1.5 1.3 7 7.1-7 7L3 18.6l7.1-7 7 7 1.5-1.4-7-7.1 7-7L17 1.4l-7.1 7z",fill:"currentColor","fill-rule":"evenodd"},null,-1),f={key:1,class:"text-gray-900 w-8 h-8",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},d=Object(a["h"])("path",{d:"M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z",fill:"currentColor","fill-rule":"evenodd"},null,-1),p={key:0,class:"xl:hidden border-t border-b right-0 mr-10 py-10 w-full mb-6 flex flex-col space-y-2"},h=Object(a["g"])("Home"),m=Object(a["g"])("Page Examples"),b=Object(a["g"])("Page Sections"),g=Object(a["g"])("Navigations"),v=Object(a["g"])("Forms"),j=Object(a["g"])("Elements"),O=Object(a["g"])("Backgrounds"),w=Object(a["g"])("Animations"),x={class:"flex"},y={class:"hidden xl:flex flex-col pr-10 space-y-4 font-medium text-sm text-gray-700 w-1/12"},k=Object(a["h"])("h1",{class:"font-mono w-full pb-10"},[Object(a["h"])("span",{class:"font-extrabold"},[Object(a["h"])("a",{href:"https://github.com/opejovic/breezy"},[Object(a["h"])("svg",{class:"text-gray-800",width:"90",height:"27",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},[Object(a["h"])("path",{d:"M77 18.6c-.4 0-.9.3-1.3.7-.4.5-.7 1-.8 1.6-.2 1.3.1 2.4.9 3.2.7.7 2 1.2 3.5 1.5l7.4 1.2.3-.1.2-.3L89 14.9v-.4l-.4-.2-7.1-1.1c-1.7-.3-3-.2-3.9.3-.9.5-1.4 1.4-1.6 2.6-.1.6 0 1.1.2 1.6.2.4.5.7.8.9zm3.8-1.6c0-.2 0-.4.2-.5l.6-.2 2.4.4-.3 1.6-2.3-.3c-.3 0-.4-.2-.5-.4a1 1 0 01-.1-.6zm-.4 5.6c-.2 0-.4-.1-.5-.3a1 1 0 01-.1-.7c0-.2.1-.4.3-.5.1-.2.4-.2.6-.2l2.6.4L83 23l-2.6-.4zM59 21.8v.5l.3.2 4 .6h.5l.3-.3 2.2-3.3 1.5.2-.6 3.5.1.4.3.2 3.9.6.3-.1.2-.3 1.8-11.5V12l-.4-.2-7-1a7 7 0 00-2.8 0 4 4 0 00-2 1.2c-.6.6-1 1.3-1 2.2-.3 1.6.1 2.9 1.3 3.8L59 21.8zm7-5.7a.8.8 0 01-.5-.4 1 1 0 01-.1-.7l.3-.6c.2-.2.4-.2.6-.2l2.3.3-.3 2L66 16zm-20.3.7h-.4l-.2.4-.4 2.5.1.3.3.2L56.4 22h.3l.2-.4L58.7 10v-.4l-.4-.2-11-1.7-.4.1-.2.3-.4 2.5.1.4.3.2 7 1-.2 1.2-6-1-.3.1c-.2.1-.2.2-.2.4l-.4 2.3v.3l.4.2 6 1-.2 1-7.1-1zm-15.1-2.4h-.4l-.2.4-.4 2.5.1.4.3.2 11.3 1.7h.3l.2-.4 1.8-11.5v-.3l-.4-.2-11-1.8-.4.1-.2.3-.4 2.6v.3l.4.2 7 1-.3 1.2-5.9-1-.4.2-.1.3-.4 2.3v.4l.4.2 6 .9-.2 1.1-7.1-1.1zm-15-2.6l-.4.1-.2.4-.5 2.6.1.4.3.2 11.5 1.8.3-.1.2-.3.4-2.6a.8.8 0 00-.1-.6l-4.9-6 5 .7h.4L28 8l.4-2.7V5l-.4-.2L17.3 3h-.4l-.2.4-.4 2.6c0 .2 0 .4.2.6l4.7 6-5.7-.9zM1 .5L.7.6.6 1V1l3.3 8.1-.6 4v.3l.4.2 3.8.6h.3l.2-.4.6-4 5.7-6.7V3v-.2l-.3-.2-3.7-.6c-.4 0-.6 0-.8.3L6.9 5.5 5.4 1.7a.8.8 0 00-.7-.6L1 .5z",fill:"currentColor"})])])]),Object(a["h"])("br"),Object(a["h"])("span",{class:"text-xs italic"},"Vue x Tailwind")],-1),L=Object(a["g"])("Home"),z=Object(a["g"])("Page Examples"),_=Object(a["g"])("Page Sections"),S=Object(a["g"])("Navigations"),E=Object(a["g"])("Forms"),A=Object(a["g"])("Elements"),D=Object(a["g"])("Backgrounds"),P=Object(a["g"])("Animations"),C={class:"w-full"};function V(e,t,n,V,T,M){var B=Object(a["x"])("router-link"),N=Object(a["x"])("router-view");return Object(a["r"])(),Object(a["d"])("div",r,[Object(a["h"])("div",o,[Object(a["h"])("div",c,[l,Object(a["h"])("div",i,[Object(a["h"])("button",{class:"focus:outline-none",id:"hamburger",onClick:t[1]||(t[1]=function(){return V.toggle.apply(V,arguments)})},[V.state.menuOpen?(Object(a["r"])(),Object(a["d"])("svg",s,[u])):(Object(a["r"])(),Object(a["d"])("svg",f,[d]))])])]),V.state.menuOpen?(Object(a["r"])(),Object(a["d"])("div",p,[Object(a["h"])(B,{to:"/"},{default:Object(a["D"])((function(){return[h]})),_:1}),Object(a["h"])(B,{to:"/page-examples"},{default:Object(a["D"])((function(){return[m]})),_:1}),Object(a["h"])(B,{to:"/page-sections"},{default:Object(a["D"])((function(){return[b]})),_:1}),Object(a["h"])(B,{to:"/Navigations"},{default:Object(a["D"])((function(){return[g]})),_:1}),Object(a["h"])(B,{to:"/forms"},{default:Object(a["D"])((function(){return[v]})),_:1}),Object(a["h"])(B,{to:"/elements"},{default:Object(a["D"])((function(){return[j]})),_:1}),Object(a["h"])(B,{to:"/backgrounds"},{default:Object(a["D"])((function(){return[O]})),_:1}),Object(a["h"])(B,{to:"/animations"},{default:Object(a["D"])((function(){return[w]})),_:1})])):Object(a["e"])("",!0),Object(a["h"])("div",x,[Object(a["h"])("div",y,[k,Object(a["h"])(B,{to:"/"},{default:Object(a["D"])((function(){return[L]})),_:1}),Object(a["h"])(B,{to:"/page-examples"},{default:Object(a["D"])((function(){return[z]})),_:1}),Object(a["h"])(B,{to:"/page-sections"},{default:Object(a["D"])((function(){return[_]})),_:1}),Object(a["h"])(B,{to:"/navigations"},{default:Object(a["D"])((function(){return[S]})),_:1}),Object(a["h"])(B,{to:"/forms"},{default:Object(a["D"])((function(){return[E]})),_:1}),Object(a["h"])(B,{to:"/elements"},{default:Object(a["D"])((function(){return[A]})),_:1}),Object(a["h"])(B,{to:"/backgrounds"},{default:Object(a["D"])((function(){return[D]})),_:1}),Object(a["h"])(B,{to:"/animations"},{default:Object(a["D"])((function(){return[P]})),_:1})]),Object(a["h"])("div",C,[Object(a["h"])(N)])])])])}var T={name:"App",setup:function(){var e=Object(a["v"])({menuOpen:!1});function t(){return e.menuOpen=!e.menuOpen}return{state:e,toggle:t}}};n("9cdc");T.render=V;var M=T,B=(n("d3b7"),n("6c02")),N=Object(a["f"])('<div class="home text-3xl max-w-3xl mx-auto space-y-8"><p> I&#39;m trying to build and share full responsive <span class="font-mono">Vue.js x TailwindCSS</span> components here. </p><div> First I draw stuff in <a class="underline" href="https://www.figma.com/">Figma</a>, and I try to recreate it in <a class="underline" href="https://www.vuejs.org">Vue</a> and <a class="underline" href="https://www.tailwindcss.com">Tailwind</a>. Any canvases / backgrounds you may see here are drawn in Figma. </div><div> I get a lot of the inspiration from Tailwind creators, Adam and Steve, and sites like Stripe and Github. </div><div> I&#39;m really having loads of fun with this, and I hope I can make someone else&#39;s life easier. </div><div> Copy and paste away. PS. Say hello <a class="underline" href="https://twitter.com/opejovic">@opejovic</a> and <a href="https://github.com/opejovic/breezy" class="underline">star</a> me up. </div><p>Peace,</p><p>Og</p><p class="text-xs pt-10">Built with Vue3 x Tailwind.</p></div>',1);function H(e,t,n,r,o,c){var l=Object(a["x"])("Test"),i=Object(a["x"])("MDXProvider");return Object(a["r"])(),Object(a["d"])(a["a"],null,[N,Object(a["h"])(i,{components:e.components},{default:Object(a["D"])((function(){return[Object(a["h"])(l)]})),_:1},8,["components"])],64)}var I={name:"Home"};I.render=H;var F=I,q=[{path:"/",name:"Home",component:F},{path:"/forms",name:"Forms",component:function(){return n.e("forms").then(n.bind(null,"0894"))}},{path:"/page-sections",name:"PageSections",component:function(){return n.e("pageSections").then(n.bind(null,"6cb1"))}},{path:"/page-examples",name:"PageExamples",component:function(){return n.e("pageExamples").then(n.bind(null,"b3ef"))}},{path:"/elements",name:"Elements",component:function(){return n.e("elements").then(n.bind(null,"1a4d"))}},{path:"/backgrounds",name:"Backgrounds",component:function(){return n.e("backgrounds").then(n.bind(null,"36be"))}},{path:"/animations",name:"Animations",component:function(){return n.e("Animations").then(n.bind(null,"3783"))}},{path:"/navigations",name:"Navigations",component:function(){return n.e("navigations").then(n.bind(null,"8a1e"))}}],J=Object(B["a"])({linkExactActiveClass:"text-gray-400",history:Object(B["b"])("/breezy/"),routes:q}),G=J,K=n("5502"),U=Object(K["a"])({state:{},mutations:{},actions:{},modules:{}}),X=(n("def6"),Object(a["c"])(M));X.use(U).use(G).mount("#app")},"9cdc":function(e,t,n){"use strict";n("c701")},c701:function(e,t,n){},def6:function(e,t,n){}});
//# sourceMappingURL=app.686b201a.js.map