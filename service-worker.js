if(!self.define){let e,i={};const n=(n,f)=>(n=new URL(n+".js",f).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(f,o)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let r={};const a=e=>n(e,c),d={module:{uri:c},exports:r,require:a};i[c]=Promise.all(f.map((e=>d[e]||a(e)))).then((e=>(o(...e),r)))}}define(["./workbox-6dad1ce7"],(function(e){"use strict";self.skipWaiting(),e.precacheAndRoute([{url:"favicon/android-chrome-192x192.png",revision:"2876035de37002a0ec124e3b06b0f3cc"},{url:"favicon/android-chrome-512x512.png",revision:"432fa6906bcaca74fc21a6377706cd77"},{url:"favicon/apple-touch-icon.png",revision:"efae353de7935146972e27314db52f68"},{url:"favicon/browserconfig.xml",revision:"32f321eaedab23b37169d583a9a5a291"},{url:"favicon/favicon-16x16.png",revision:"5f2ba9402eeb950adf6b357c822e769a"},{url:"favicon/favicon-32x32.png",revision:"898d28b1c4d6c4d08f1cba58596b9d95"},{url:"favicon/favicon.ico",revision:"b163ffb3a2f7e1073adf6b0aff4f3922"},{url:"favicon/mstile-150x150.png",revision:"256dc1183bdc42ab4946814af9046815"},{url:"favicon/safari-pinned-tab.svg",revision:"047ca32334d8df71fbe927b114f885e5"},{url:"favicon/site.webmanifest",revision:"26ec46cfb263649182bef051ee251b53"},{url:"index.9613a2dd3b0faffc869d.js",revision:null},{url:"index.9613a2dd3b0faffc869d.js.LICENSE.txt",revision:"60f6bf9e100e456690e9ab6c9a37bfc2"},{url:"index.html",revision:"45193ea1519f154fa393f4e68c5267ae"},{url:"style.24aba63d62edab6b6b31.css",revision:null}],{}),e.cleanupOutdatedCaches()}));
