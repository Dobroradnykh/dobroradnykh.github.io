!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=73)}({25:function(e,n,t){var r=t(69),o=t(71);e.exports=r("v5",80,o)},69:function(e,n,t){var r=t(70);e.exports=function(e,n,t){var o=function(e,o,u,c){var a=u&&c||0;if("string"==typeof e&&(e=function(e){e=unescape(encodeURIComponent(e));for(var n=new Array(e.length),t=0;t<e.length;t++)n[t]=e.charCodeAt(t);return n}(e)),"string"==typeof o&&(o=function(e){var n=[];return e.replace(/[a-fA-F0-9]{2}/g,(function(e){n.push(parseInt(e,16))})),n}(o)),!Array.isArray(e))throw TypeError("value must be an array of bytes");if(!Array.isArray(o)||16!==o.length)throw TypeError("namespace must be uuid string or an Array of 16 byte values");var i=t(o.concat(e));if(i[6]=15&i[6]|n,i[8]=63&i[8]|128,u)for(var s=0;s<16;++s)u[a+s]=i[s];return u||r(i)};try{o.name=e}catch(e){}return o.DNS="6ba7b810-9dad-11d1-80b4-00c04fd430c8",o.URL="6ba7b811-9dad-11d1-80b4-00c04fd430c8",o}},70:function(e,n){for(var t=[],r=0;r<256;++r)t[r]=(r+256).toString(16).substr(1);e.exports=function(e,n){var r=n||0,o=t;return[o[e[r++]],o[e[r++]],o[e[r++]],o[e[r++]],"-",o[e[r++]],o[e[r++]],"-",o[e[r++]],o[e[r++]],"-",o[e[r++]],o[e[r++]],"-",o[e[r++]],o[e[r++]],o[e[r++]],o[e[r++]],o[e[r++]],o[e[r++]]].join("")}},71:function(e,n,t){"use strict";function r(e,n,t,r){switch(e){case 0:return n&t^~n&r;case 1:return n^t^r;case 2:return n&t^n&r^t&r;case 3:return n^t^r}}function o(e,n){return e<<n|e>>>32-n}e.exports=function(e){var n=[1518500249,1859775393,2400959708,3395469782],t=[1732584193,4023233417,2562383102,271733878,3285377520];if("string"==typeof e){var u=unescape(encodeURIComponent(e));e=new Array(u.length);for(var c=0;c<u.length;c++)e[c]=u.charCodeAt(c)}e.push(128);var a=e.length/4+2,i=Math.ceil(a/16),s=new Array(i);for(c=0;c<i;c++){s[c]=new Array(16);for(var f=0;f<16;f++)s[c][f]=e[64*c+4*f]<<24|e[64*c+4*f+1]<<16|e[64*c+4*f+2]<<8|e[64*c+4*f+3]}for(s[i-1][14]=8*(e.length-1)/Math.pow(2,32),s[i-1][14]=Math.floor(s[i-1][14]),s[i-1][15]=8*(e.length-1)&4294967295,c=0;c<i;c++){for(var l=new Array(80),h=0;h<16;h++)l[h]=s[c][h];for(h=16;h<80;h++)l[h]=o(l[h-3]^l[h-8]^l[h-14]^l[h-16],1);var d=t[0],p=t[1],v=t[2],y=t[3],m=t[4];for(h=0;h<80;h++){var b=Math.floor(h/20),g=o(d,5)+r(b,p,v,y)+m+n[b]+l[h]>>>0;m=y,y=v,v=o(p,30)>>>0,p=d,d=g}t[0]=t[0]+d>>>0,t[1]=t[1]+p>>>0,t[2]=t[2]+v>>>0,t[3]=t[3]+y>>>0,t[4]=t[4]+m>>>0}return[t[0]>>24&255,t[0]>>16&255,t[0]>>8&255,255&t[0],t[1]>>24&255,t[1]>>16&255,t[1]>>8&255,255&t[1],t[2]>>24&255,t[2]>>16&255,t[2]>>8&255,255&t[2],t[3]>>24&255,t[3]>>16&255,t[3]>>8&255,255&t[3],t[4]>>24&255,t[4]>>16&255,t[4]>>8&255,255&t[4]]}},73:function(e,n,t){"use strict";t.r(n);var r=t(25),o=t.n(r);function u(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var c=[{name:"remarks",key:"localGuid"},{name:"statuses",key:"localGuid"}],a=new(function(){function e(n){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e);var t=n.name,r=n.version,o=n.objects;this.name=t,this.version=r,this.objects=o,this.isReady=null,this._init()}var n,t,r;return n=e,(t=[{key:"_init",value:function(){var e=this;return new Promise((function(n,t){var r=indexedDB.open(e.name,e.version);r.onsuccess=function(){e.api=r.result,n()},r.onupgradeneeded=function(){e.api=r.result,c.forEach((function(e){a.api.objectStoreNames.contains(e.name)||a.api.createObjectStore(e.name,{keyPath:e.key})})),n()},r.onerror=function(e){t(e)}})).then((function(){e.isReady=!0,console.log("indexedDB успешно создано")})).catch((function(n){e.isReady=!1,console.error("Ошибка создания indexedDB",n)}))}},{key:"ready",value:function(){var e=this;return this.isReady?Promise.resolve():!1===this.isReady?Promise.reject():new Promise((function(n){setTimeout((function(){n(e.ready())}),100)}))}},{key:"getAll",value:function(e){var n=this;return new Promise((function(t,r){n.ready().then((function(){var o=n.api.transaction(e,"readonly").objectStore(e).getAll();o.onsuccess=function(){t(o.result||[])},o.onerror=function(){r(o.error)}}))}))}},{key:"deleteRecord",value:function(e,n){var t=this;return new Promise((function(r,o){t.ready().then((function(){var u=t.api.transaction(e,"readwrite").objectStore(e).delete(n);u.onsuccess=function(){r({result:"ok"})},u.onerror=function(){o(u.error)}}))}))}},{key:"addRecord",value:function(e,n){var t=this;return new Promise((function(r,u){t.ready().then((function(){var c=t.api.transaction(e,"readwrite").objectStore(e);n.localGuid=n.id||n.localGuid||o()(JSON.stringify(n),o.a.URL);var a=c.put(n);a.onsuccess=function(){r(n)},a.onerror=function(){u(a.error)}}))}))}}])&&u(n.prototype,t),r&&u(n,r),e}())({name:"sarex-db",version:1,objects:c}),i=a,s="static-cache",f="response-cache",l="https://sarex111.io";function h(e){return new Response(JSON.stringify(e),{headers:{"content-type":"application/json"}})}function d(e){return fetch(e).then((function(n){return 200===n.status?/javascript|html|css/.test(n.headers.get("Content-Type"))?caches.open(s).then((function(t){return t.put(e,n.clone()).then((function(){return n}))})):caches.open(f).then((function(t){return t.put(e,n.clone()).then((function(){return n}))})):n}))}function p(e){return fetch(e)}self.addEventListener("fetch",(function(e){e.respondWith(function(e){if(e.url.match(l))return function(e){if(e.url.match("/remarks"))return function(e){if("GET"===e.method)return i.getAll("remarks").then((function(e){return e}));if("POST"===e.method||"PUT"===e.method)return e.clone().json().then((function(e){return n=e,i.addRecord("remarks",n).then((function(e){return e}));var n}));if("DELETE"===e.method)return e.clone().json().then((function(e){return function(e){return i.deleteRecord("remarks",e).then((function(e){return e}))}(e.id||e.localGuid)}));return Promise.reject()}(e);if(e.url.match("/status"))return function(e){if("GET"===e.method)return i.getAll("statuses").then((function(e){return e}));if("POST"===e.method||"PUT"===e.method)return e.clone().json().then((function(e){return function(e){return console.log(e),i.addRecord("statuses",e).then((function(e){return e}))}(e)}));return Promise.reject()}(e);return p(e)}(e).then((function(e){return h(e)})).catch((function(e){return h(e)}));if("GET"===e.method&&!e.url.match("chrome-extension")&&!e.url.match("http://localhost"))return caches.open(f).then((function(n){return n.match(e).then((function(n){return n||caches.open(s).then((function(n){return n.match(e)})).then((function(n){return n?(d(e),n):d(e)}))}))}));return p(e)}(e.request))})),self.addEventListener("message",(function(e){var n=e.data,t=void 0===n?{}:n;switch(t.action){case"getCacheRecord":getCacheRecord(t.name);break;case"setCacheRecord":setCacheRecord(t)}}))}});