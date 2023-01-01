// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-property@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@esm/index.mjs";import{isPrimitive as i}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-number@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-kumaraswamy-kurtosis@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-kumaraswamy-mean@esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-kumaraswamy-mode@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-kumaraswamy-skewness@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-kumaraswamy-stdev@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-kumaraswamy-variance@esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-kumaraswamy-cdf@esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-kumaraswamy-logcdf@esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-kumaraswamy-logpdf@esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-kumaraswamy-pdf@esm/index.mjs";import b from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-kumaraswamy-quantile@esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";function j(){var t,e;if(!(this instanceof j))return 0===arguments.length?new j:new j(arguments[0],arguments[1]);if(arguments.length){if(e=arguments[1],!i(t=arguments[0]))throw new TypeError(f("invalid argument. First shape parameter must be a positive number. Value: `%s`.",t));if(!i(e))throw new TypeError(f("invalid argument. Second shape parameter must be a positive number. Value: `%s`.",e))}else t=1,e=1;return s(this,"a",{configurable:!1,enumerable:!0,get:function(){return t},set:function(s){if(!i(s))throw new TypeError(f("invalid assignment. Must be a positive number. Value: `%s`.",s));t=s}}),s(this,"b",{configurable:!1,enumerable:!0,get:function(){return e},set:function(s){if(!i(s))throw new TypeError(f("invalid assignment. Must be a positive number. Value: `%s`.",s));e=s}}),this}e(j.prototype,"kurtosis",(function(){return r(this.a,this.b)})),e(j.prototype,"mean",(function(){return n(this.a,this.b)})),e(j.prototype,"mode",(function(){return a(this.a,this.b)})),e(j.prototype,"skewness",(function(){return m(this.a,this.b)})),e(j.prototype,"stdev",(function(){return o(this.a,this.b)})),e(j.prototype,"variance",(function(){return d(this.a,this.b)})),t(j.prototype,"cdf",(function(s){return p(s,this.a,this.b)})),t(j.prototype,"logcdf",(function(s){return u(s,this.a,this.b)})),t(j.prototype,"logpdf",(function(s){return h(s,this.a,this.b)})),t(j.prototype,"pdf",(function(s){return l(s,this.a,this.b)})),t(j.prototype,"quantile",(function(s){return b(s,this.a,this.b)}));export{j as default};
//# sourceMappingURL=index.mjs.map
