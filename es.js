self.cssProxiedVars=function(e){"use strict";const t=e=>"-"===e[0]?e:"--"+e.replace(/(([A-Z0-9])([A-Z0-9][a-z]))|(([a-z])([A-Z]))/g,"$2$5-$3$6").toLowerCase()
/*! (c) Andrea Giammarchi */;class r{constructor(e){this._=e}get(e,r){return this._.getPropertyValue(t(r))}set(e,r,s){return e.style.setProperty(t(r),s),!0}}return e.default=(e,t=null)=>new Proxy(e,new r(getComputedStyle(e,t))),e}({}).default;
