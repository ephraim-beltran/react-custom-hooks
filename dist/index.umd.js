(function(t,e){typeof exports=="object"&&typeof module<"u"?e(exports,require("react")):typeof define=="function"&&define.amd?define(["exports","react"],e):(t=typeof globalThis<"u"?globalThis:t||self,e(t["Custom Hooks"]={},t.React))})(this,function(t,e){"use strict";function a(o,c,i=u){const s=new AbortController,[d,n]=e.useState("idle"),[h,f]=e.useState(null),[w,l]=e.useState(null);return e.useEffect(()=>{async function E(p){n("loading");try{const r=await fetch(p,{...c,signal:s.signal});r.ok||i(r.status);const b=await r.json();f(b),n("success")}catch(r){n("error"),l(r),console.error(r)}}return E(o),()=>s.abort()},[o]),[h,d,w]}function u(o){switch(o){case 400:throw new Error("Bad Request");case 401:throw new Error("Request is unauthorized");case 403:throw new Error("Request has been denied");case 404:throw new Error("Requested data not found");case 405:throw new Error("Method Not Allowed");case 406:throw new Error("Not Acceptable");case 408:throw new Error("Request Timedout");default:throw new Error("There's been an error while retrieving data")}}t.useFetch=a,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})});
//# sourceMappingURL=index.umd.js.map
