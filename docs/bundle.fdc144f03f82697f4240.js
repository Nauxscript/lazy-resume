(()=>{"use strict";var e={456:(e,t,n)=>{e.exports=n.p+"asset/img/mini_program.jpg"}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var c=t[r]={exports:{}};return e[r](c,c.exports,n),c.exports}n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),(()=>{function e(e){"dark"===localStorage.theme||!("theme"in localStorage)&&window.matchMedia("(prefers-color-scheme: dark)").matches?(document.querySelector("html").classList.remove("dark"),localStorage.theme="light"):(document.documentElement.classList.add("dark"),localStorage.theme="dark")}n(456),window.onload=function(){console.log("ready"),"dark"===localStorage.theme||!("theme"in localStorage)&&window.matchMedia("(prefers-color-scheme: dark)").matches?document.querySelector("html").classList.add("dark"):document.querySelector("html").classList.remove("dark")};const t=document.getElementById("toggleDarkMode");t&&t.addEventListener("click",e);const r=document.getElementById("switch");r&&r.addEventListener("click",e);const o=document.getElementById("print");o&&o.addEventListener("click",a);const c=document.getElementById("pdfFile");c&&c.addEventListener("click",a);const i=(new Date).valueOf();function a(){var e=document.getElementById("print-iframe");if(!e){let t=document.getElementById("print-content"),n=null;(e=document.createElement("IFRAME")).setAttribute("id","print-iframe"),document.body.appendChild(e),n=e.contentWindow.document,e.style.display="none",n.write('<style media="print">body {zoom: .8;}</style>'),n.write('<link rel="stylesheet" href="./index.css?t='+i+'">'),n.write("<body>"+t.innerHTML+"</body>"),n.close(),e.contentWindow.focus()}setTimeout((function(){e.contentWindow.print()}),50)}})()})();