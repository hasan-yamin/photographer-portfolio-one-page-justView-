if(!self.define){let e,i={};const l=(l,n)=>(l=new URL(l+".js",n).href,i[l]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=l,e.onload=i,document.head.appendChild(e)}else e=l,importScripts(l),i()})).then((()=>{let e=i[l];if(!e)throw new Error(`Module ${l} didn’t register its module`);return e})));self.define=(n,r)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let u={};const o=e=>l(e,s),d={module:{uri:s},exports:u,require:o};i[s]=Promise.all(n.map((e=>d[e]||o(e)))).then((e=>(r(...e),u)))}}define(["./workbox-db5fc017"],(function(e){"use strict";e.setCacheNameDetails({prefix:"eee"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/css/app.e7677ac4.css",revision:null},{url:"/img/about-img-bg.01f724ca.png",revision:null},{url:"/img/about-img.df7f1b9d.jpg",revision:null},{url:"/img/contact-bg.c5969de9.png",revision:null},{url:"/img/home-bg.f78bbd7b.png",revision:null},{url:"/img/p-1.db50d98f.jpg",revision:null},{url:"/img/p-2.b965c9f8.jpg",revision:null},{url:"/img/p-3.47eb8f8a.jpg",revision:null},{url:"/img/p-4.a9d9b717.jpg",revision:null},{url:"/img/p-5.e776e291.jpg",revision:null},{url:"/img/p-6.83a7dde2.jpg",revision:null},{url:"/img/slider-img.263ff76b.jpg",revision:null},{url:"/index.html",revision:"bd4936b3f695da0975f7fa36c4cdc3dd"},{url:"/js/app.beb77114.js",revision:null},{url:"/js/chunk-vendors.8aa7351d.js",revision:null},{url:"/manifest.json",revision:"ea2d6afd6e96ac36ca279b6672647292"}],{})}));
//# sourceMappingURL=service-worker.js.map
