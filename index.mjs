// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-property@v0.2.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@v0.1.0-esm/index.mjs";import{isPrimitive as i}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-number@v0.2.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-kumaraswamy-kurtosis@v0.1.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-kumaraswamy-mean@v0.1.0-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-kumaraswamy-mode@v0.1.0-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-kumaraswamy-skewness@v0.1.0-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-kumaraswamy-stdev@v0.1.0-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-kumaraswamy-variance@v0.1.0-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-kumaraswamy-cdf@v0.1.0-esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-kumaraswamy-logcdf@v0.1.0-esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-kumaraswamy-logpdf@v0.1.0-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-kumaraswamy-pdf@v0.1.0-esm/index.mjs";import b from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-kumaraswamy-quantile@v0.1.0-esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";function j(){var s,e;if(!(this instanceof j))return 0===arguments.length?new j:new j(arguments[0],arguments[1]);if(arguments.length){if(e=arguments[1],!i(s=arguments[0]))throw new TypeError(f("invalid argument. First shape parameter must be a positive number. Value: `%s`.",s));if(!i(e))throw new TypeError(f("invalid argument. Second shape parameter must be a positive number. Value: `%s`.",e))}else s=1,e=1;return t(this,"a",{configurable:!1,enumerable:!0,get:function(){return s},set:function(t){if(!i(t))throw new TypeError(f("invalid assignment. Must be a positive number. Value: `%s`.",t));s=t}}),t(this,"b",{configurable:!1,enumerable:!0,get:function(){return e},set:function(t){if(!i(t))throw new TypeError(f("invalid assignment. Must be a positive number. Value: `%s`.",t));e=t}}),this}e(j.prototype,"kurtosis",(function(){return r(this.a,this.b)})),e(j.prototype,"mean",(function(){return n(this.a,this.b)})),e(j.prototype,"mode",(function(){return a(this.a,this.b)})),e(j.prototype,"skewness",(function(){return m(this.a,this.b)})),e(j.prototype,"stdev",(function(){return o(this.a,this.b)})),e(j.prototype,"variance",(function(){return d(this.a,this.b)})),s(j.prototype,"cdf",(function(t){return p(t,this.a,this.b)})),s(j.prototype,"logcdf",(function(t){return u(t,this.a,this.b)})),s(j.prototype,"logpdf",(function(t){return h(t,this.a,this.b)})),s(j.prototype,"pdf",(function(t){return l(t,this.a,this.b)})),s(j.prototype,"quantile",(function(t){return b(t,this.a,this.b)}));export{j as default};
//# sourceMappingURL=index.mjs.map
