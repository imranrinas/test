if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let d={};const t=e=>n(e,o),c={module:{uri:o},exports:d,require:t};i[o]=Promise.all(s.map((e=>c[e]||t(e)))).then((e=>(r(...e),d)))}}define(["./workbox-5ffe50d4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-BRpmC-kC.css",revision:null},{url:"assets/index-C87UiSro.js",revision:null},{url:"index.html",revision:"fe37289bd3dcb19047ec130785bb01e9"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"favicon.ico",revision:"03c809fb9a9b63873da96e535d653a6f"},{url:"apple-touch-icon.png",revision:"03c809fb9a9b63873da96e535d653a6f"},{url:"masked-icon.svg",revision:"5677b605d80a41aea136d11bcc4d1b20"},{url:"pwa-192x192.png",revision:"03c809fb9a9b63873da96e535d653a6f"},{url:"pwa-512x512.png",revision:"03c809fb9a9b63873da96e535d653a6f"},{url:"manifest.webmanifest",revision:"b6337ac3ae053da68e8e380309da60f5"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
