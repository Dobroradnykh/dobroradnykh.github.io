!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="/",t(t.s=117)}({112:function(e,n,t){var r=t(113);e.exports=function(e,n,t){var o=function(e,o,u,i){var c=u&&i||0;if("string"==typeof e&&(e=function(e){e=unescape(encodeURIComponent(e));for(var n=new Array(e.length),t=0;t<e.length;t++)n[t]=e.charCodeAt(t);return n}(e)),"string"==typeof o&&(o=function(e){var n=[];return e.replace(/[a-fA-F0-9]{2}/g,(function(e){n.push(parseInt(e,16))})),n}(o)),!Array.isArray(e))throw TypeError("value must be an array of bytes");if(!Array.isArray(o)||16!==o.length)throw TypeError("namespace must be uuid string or an Array of 16 byte values");var a=t(o.concat(e));if(a[6]=15&a[6]|n,a[8]=63&a[8]|128,u)for(var s=0;s<16;++s)u[c+s]=a[s];return u||r(a)};try{o.name=e}catch(e){}return o.DNS="6ba7b810-9dad-11d1-80b4-00c04fd430c8",o.URL="6ba7b811-9dad-11d1-80b4-00c04fd430c8",o}},113:function(e,n){for(var t=[],r=0;r<256;++r)t[r]=(r+256).toString(16).substr(1);e.exports=function(e,n){var r=n||0,o=t;return[o[e[r++]],o[e[r++]],o[e[r++]],o[e[r++]],"-",o[e[r++]],o[e[r++]],"-",o[e[r++]],o[e[r++]],"-",o[e[r++]],o[e[r++]],"-",o[e[r++]],o[e[r++]],o[e[r++]],o[e[r++]],o[e[r++]],o[e[r++]]].join("")}},114:function(e,n,t){"use strict";function r(e,n,t,r){switch(e){case 0:return n&t^~n&r;case 1:return n^t^r;case 2:return n&t^n&r^t&r;case 3:return n^t^r}}function o(e,n){return e<<n|e>>>32-n}e.exports=function(e){var n=[1518500249,1859775393,2400959708,3395469782],t=[1732584193,4023233417,2562383102,271733878,3285377520];if("string"==typeof e){var u=unescape(encodeURIComponent(e));e=new Array(u.length);for(var i=0;i<u.length;i++)e[i]=u.charCodeAt(i)}e.push(128);var c=e.length/4+2,a=Math.ceil(c/16),s=new Array(a);for(i=0;i<a;i++){s[i]=new Array(16);for(var f=0;f<16;f++)s[i][f]=e[64*i+4*f]<<24|e[64*i+4*f+1]<<16|e[64*i+4*f+2]<<8|e[64*i+4*f+3]}for(s[a-1][14]=8*(e.length-1)/Math.pow(2,32),s[a-1][14]=Math.floor(s[a-1][14]),s[a-1][15]=8*(e.length-1)&4294967295,i=0;i<a;i++){for(var l=new Array(80),h=0;h<16;h++)l[h]=s[i][h];for(h=16;h<80;h++)l[h]=o(l[h-3]^l[h-8]^l[h-14]^l[h-16],1);var d=t[0],p=t[1],m=t[2],y=t[3],v=t[4];for(h=0;h<80;h++){var b=Math.floor(h/20),g=o(d,5)+r(b,p,m,y)+v+n[b]+l[h]>>>0;v=y,y=m,m=o(p,30)>>>0,p=d,d=g}t[0]=t[0]+d>>>0,t[1]=t[1]+p>>>0,t[2]=t[2]+m>>>0,t[3]=t[3]+y>>>0,t[4]=t[4]+v>>>0}return[t[0]>>24&255,t[0]>>16&255,t[0]>>8&255,255&t[0],t[1]>>24&255,t[1]>>16&255,t[1]>>8&255,255&t[1],t[2]>>24&255,t[2]>>16&255,t[2]>>8&255,255&t[2],t[3]>>24&255,t[3]>>16&255,t[3]>>8&255,255&t[3],t[4]>>24&255,t[4]>>16&255,t[4]>>8&255,255&t[4]]}},117:function(e,n,t){"use strict";t.r(n);var r=t(23),o=t.n(r);function u(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var a=[{name:"remarks",key:"localGuid"},{name:"statuses",key:"localGuid"},{name:"prescriptions",key:"localGuid"},{name:"files",key:"localGuid"}],s=new(function(){function e(n){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e);var t=n.name,r=n.version,o=n.objects;this.name=t,this.version=r,this.objects=o,this.isReady=null,this._init()}var n,t,r;return n=e,(t=[{key:"_init",value:function(){var e=this;return new Promise((function(n,t){var r=indexedDB.open(e.name,e.version);r.onsuccess=function(){e.api=r.result,n()},r.onupgradeneeded=function(){e.api=r.result,a.forEach((function(e){s.api.objectStoreNames.contains(e.name)||s.api.createObjectStore(e.name,{keyPath:e.key})})),n()},r.onerror=function(e){t(e)}})).then((function(){e.isReady=!0,console.log("indexedDB успешно создано")})).catch((function(n){e.isReady=!1,console.error("Ошибка создания indexedDB",n)}))}},{key:"ready",value:function(){var e=this;return this.isReady?Promise.resolve():!1===this.isReady?Promise.reject():new Promise((function(n){setTimeout((function(){n(e.ready())}),100)}))}},{key:"getAll",value:function(e){var n=this;return new Promise((function(t,r){n.ready().then((function(){var o=n.api.transaction(e,"readonly").objectStore(e).getAll();o.onsuccess=function(){t(o.result||[])},o.onerror=function(){r(o.error)}}))}))}},{key:"deleteRecord",value:function(e,n){var t=this;return new Promise((function(r,o){t.ready().then((function(){var u=t.api.transaction(e,"readwrite").objectStore(e).delete(n);u.onsuccess=function(){r({result:"ok"})},u.onerror=function(){o(u.error)}}))}))}},{key:"addRecord",value:function(e,n){var t=this;return new Promise((function(r,u){t.ready().then((function(){var i=t.api.transaction(e,"readwrite").objectStore(e);n.localGuid=n.id||n.localGuid||o()(JSON.stringify(n),o.a.URL);var c=i.put(n);c.onsuccess=function(){r(n)},c.onerror=function(){u(c.error)}}))}))}},{key:"addFile",value:function(e,n,t){var r=this;return new Promise((function(c,a){r.ready().then((function(){var s=r.api.transaction(e,"readwrite").objectStore(e);t.localGuid=t.id||t.localGuid||o()(JSON.stringify(t),o.a.URL);var f=s.put(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?u(t,!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},t,{url:n}));f.onsuccess=function(){c(t)},f.onerror=function(){a(f.error)}}))}))}},{key:"getFile",value:function(e,n){var t=this;return new Promise((function(r,o){t.ready().then((function(){var u=t.api.transaction(e,"readonly").objectStore(e).get(n);u.onsuccess=function(){r(u.result)},u.onerror=function(){o(u.error)}}))}))}},{key:"deleteFile",value:function(e,n){var t=this;return new Promise((function(r,o){t.ready().then((function(){var u=t.api.transaction(e,"readwrite").objectStore(e).delete(n);u.onsuccess=function(){r()},u.onerror=function(){o(u.error)}}))}))}}])&&c(n.prototype,t),r&&c(n,r),e}())({name:"sarex-db",version:1,objects:a}),f=s,l="static-cache",h="response-cache",d="response-cache-autodesc",p="https://sarex111.io",m="https://developer.api.autodesk.com",y="https://blooming-cove-51473.herokuapp.com";function v(e){return fetch(e).then((function(n){return 200===n.status?/javascript|html|css/.test(n.headers.get("Content-Type"))?caches.open(l).then((function(t){return t.put(e,n.clone()).then((function(){return n}))})):caches.open(h).then((function(t){return t.put(e,n.clone()).then((function(){return n}))})):n}))}function b(e){return fetch(e)}self.addEventListener("fetch",(function(e){e.respondWith(function(e){if(e.url.match(p))return function(e){if(e.url.match("/remarks"))return function(e){if("GET"===e.method)return f.getAll("remarks").then((function(e){return e}));if("POST"===e.method||"PUT"===e.method)return e.clone().json().then((function(e){return n=e,f.addRecord("remarks",n).then((function(e){return e}));var n}));if("DELETE"===e.method)return e.clone().json().then((function(e){return function(e){return f.deleteRecord("remarks",e).then((function(e){return e}))}(e.id||e.localGuid)}));return Promise.reject()}(e);if(e.url.match("/status"))return function(e){if("GET"===e.method)return f.getAll("statuses").then((function(e){return e}));if("POST"===e.method||"PUT"===e.method)return e.clone().json().then((function(e){return function(e){return f.addRecord("statuses",e).then((function(e){return e}))}(e)}));return Promise.reject()}(e);if(e.url.match("/prescriptions"))return function(e){if("GET"===e.method)return f.getAll("prescriptions").then((function(e){return e}));if("POST"===e.method||"PUT"===e.method)return e.clone().json().then((function(e){return function(e){return f.addRecord("prescriptions",e).then((function(e){return e}))}(e)}));if("DELETE"===e.method)return e.clone().json().then((function(e){return function(e){return f.deleteRecord("prescriptions",e).then((function(e){return e}))}(e.id||e.localGuid)}));return Promise.reject()}(e);if(e.url.match("/files"))return function(e){if("GET"===e.method)return function(e){return f.getFile("files",e).then((function(e){return e}))}(e.url.replace(/.+\//,""));if("POST"===e.method)return e.json().then((function(e){return n=e.url,t=e.data,f.addFile("files",n,t).then((function(e){return e}));var n,t}));if("DELETE"===e.method)return function(e){return f.deleteFile("files",e).then((function(e){return e}))}(e.url.replace(/.+\//,""));return Promise.reject()}(e);return b(e)}(e).then((function(e){return function(e){return new Response(JSON.stringify(e),{headers:{"content-type":"application/json"}})}(e)})).catch((function(e){return n={error:{message:e.message}},new Response(JSON.stringify(n),{headers:{"content-type":"application/json"},status:500});var n}));if(e.url.match(y))return fetch(e);if(e.url.match(m))return caches.open(d).then((function(n){var t=new Request(e.url,{method:e.method});return n.match(t).then((function(n){return n||function(e,n){return fetch(e).then((function(e){return 200===e.status?caches.open(d).then((function(t){return t.put(n,e.clone()).then((function(){return e}))})):e}))}(e,t)}))}));if("GET"===e.method&&!e.url.match("chrome-extension")&&!e.url.match("http://localhost"))return caches.open(h).then((function(n){return n.match(e).then((function(n){return n||caches.open(l).then((function(n){return n.match(e)})).then((function(n){return n?(v(e),n):v(e)}))}))}));return b(e)}(e.request))})),self.addEventListener("message",(function(e){var n=e.data,t=void 0===n?{}:n;switch(t.action){case"getCacheRecord":getCacheRecord(t.name);break;case"setCacheRecord":setCacheRecord(t)}}))},23:function(e,n,t){var r=t(112),o=t(114);e.exports=r("v5",80,o)}});