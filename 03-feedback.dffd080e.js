!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,d=c||s||Function("return this")(),v=Object.prototype.toString,m=Math.max,y=Math.min,g=function(){return d.Date.now()};function b(e,t,n){var r,i,a,u,f,l,c=0,s=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError(o);function b(t){var n=r,o=i;return r=i=void 0,c=t,u=e.apply(o,n)}function j(e){return c=e,f=setTimeout(S,t),s?b(e):u}function O(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=a}function S(){var e=g();if(O(e))return w(e);f=setTimeout(S,function(e){var n=t-(e-l);return d?y(n,a-(e-c)):n}(e))}function w(e){return f=void 0,v&&r?b(e):(r=i=void 0,u)}function T(){var e=g(),n=O(e);if(r=arguments,i=this,l=e,n){if(void 0===f)return j(l);if(d)return f=setTimeout(S,t),b(l)}return void 0===f&&(f=setTimeout(S,t)),u}return t=h(t)||0,p(n)&&(s=!!n.leading,a=(d="maxWait"in n)?m(h(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),T.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=l=i=f=void 0},T.flush=function(){return void 0===f?u:w(g())},T}function p(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function h(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(p(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=p(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var o=u.test(t);return o||f.test(t)?l(t.slice(2),o?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return p(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),b(e,t,{leading:r,maxWait:t,trailing:i})};var j={save:function(e,t){try{var n=JSON.stringify(t);localStorage.setItem(e,n)}catch(e){console.error("Set state error: ",e.message)}},load:function(e){try{var t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.log("Get state error: ",e.message)}},remove:function(e){try{localStorage.removeItem(e)}catch(e){console.error("Remove item error: ",e.message)}}},O=document.querySelector(".feedback-form"),S="feedback-form-state",w=e(t)((function(e){var t=e.target,n=t.name,r=t.value,o=j.load(S)||{};o[n]=r,console.log(n,r),j.save(S,o)}),500);O.addEventListener("input",w),O.addEventListener("submit",(function(e){e.preventDefault(),e.target.reset(),j.remove(S)})),function(e){var t=e.elements,n=j.load(S);if(n){var r=Object.keys(n),o=!0,i=!1,a=void 0;try{for(var u,f=r[Symbol.iterator]();!(o=(u=f.next()).done);o=!0){var l=u.value;t[l].value=n[l]}}catch(e){i=!0,a=e}finally{try{o||null==f.return||f.return()}finally{if(i)throw a}}}}(O)}();
//# sourceMappingURL=03-feedback.dffd080e.js.map
