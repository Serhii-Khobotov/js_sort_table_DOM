function r(r,t){(null==t||t>r.length)&&(t=r.length);for(var e=0,n=Array(t);e<t;e++)n[e]=r[e];return n}function t(t){return function(t){if(Array.isArray(t))return r(t)}(t)||function(r){if("undefined"!=typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}(t)||function(t,e){if(t){if("string"==typeof t)return r(t,void 0);var n=Object.prototype.toString.call(t).slice(8,-1);if("Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(t,void 0)}}(t)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var e=document.querySelector("table");e.querySelectorAll("th").forEach(function(r,t){r.addEventListener("click",function(){n(t)})});var n=function(r){var n=e.querySelector("tbody"),o=t(n.querySelectorAll("tr")).sort(function(t,e){var n=t.cells[r].textContent.trim(),o=e.cells[r].textContent.trim();return+n?+n-o:3===r?parseFloat(n.replace(/[$,]/g,""))-parseFloat(o.replace(/[$,]/g,"")):n.localeCompare(o)});n.innerHTML="",n.append.apply(n,t(o))};
//# sourceMappingURL=index.9438a74d.js.map