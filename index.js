// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,r;t=this,r=function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty,n=Object.prototype,e=n.toString,u=n.__defineGetter__,i=n.__defineSetter__,o=n.__lookupGetter__,f=n.__lookupSetter__,a=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?r:function(t,r,a){var c,l,y,p;if("object"!=typeof t||null===t||"[object Array]"===e.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof a||null===a||"[object Array]"===e.call(a))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+a+"`.");if((l="value"in a)&&(o.call(t,r)||f.call(t,r)?(c=t.__proto__,t.__proto__=n,delete t[r],t[r]=a.value,t.__proto__=c):t[r]=a.value),y="get"in a,p="set"in a,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&u&&u.call(t,r,a.get),p&&i&&i.call(t,r,a.set),t};function c(t,r,n){a(t,r,{configurable:!1,enumerable:!1,writable:!1,value:n})}function l(t,r,n){a(t,r,{configurable:!1,enumerable:!1,get:n})}function y(t){return"number"==typeof t}var p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function s(){return p&&"symbol"==typeof Symbol.toStringTag}var v=Object.prototype.toString,b=Object.prototype.hasOwnProperty,h="function"==typeof Symbol?Symbol.toStringTag:"",N=s()?function(t){var r,n,e,u,i;if(null==t)return v.call(t);n=t[h],i=h,r=null!=(u=t)&&b.call(u,i);try{t[h]=void 0}catch(r){return v.call(t)}return e=v.call(t),r?t[h]=n:delete t[h],e}:function(t){return v.call(t)},m=Number,d=m.prototype.toString,w=s();function g(t){return"object"==typeof t&&(t instanceof m||(w?function(t){try{return d.call(t),!0}catch(t){return!1}}(t):"[object Number]"===N(t)))}function A(t){return y(t)||g(t)}function _(t){return y(t)&&t>0}function U(t){return g(t)&&t.valueOf()>0}function j(t){return _(t)||U(t)}function O(t){return t!=t}c(A,"isPrimitive",y),c(A,"isObject",g),c(j,"isPrimitive",_),c(j,"isObject",U);var E,I="function"==typeof Uint32Array,S="function"==typeof Uint32Array?Uint32Array:null,T="function"==typeof Uint32Array?Uint32Array:void 0;E=function(){var t,r,n;if("function"!=typeof S)return!1;try{r=new S(r=[1,3.14,-3.14,4294967296,4294967297]),n=r,t=(I&&n instanceof Uint32Array||"[object Uint32Array]"===N(n))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?T:function(){throw new Error("not implemented")};var F,H=E,P="function"==typeof Float64Array,V="function"==typeof Float64Array?Float64Array:null,G="function"==typeof Float64Array?Float64Array:void 0;F=function(){var t,r,n;if("function"!=typeof V)return!1;try{r=new V([1,3.14,-3.14,NaN]),n=r,t=(P&&n instanceof Float64Array||"[object Float64Array]"===N(n))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){t=!1}return t}()?G:function(){throw new Error("not implemented")};var M,k=F,x="function"==typeof Uint8Array,L="function"==typeof Uint8Array?Uint8Array:null,W="function"==typeof Uint8Array?Uint8Array:void 0;M=function(){var t,r,n;if("function"!=typeof L)return!1;try{r=new L(r=[1,3.14,-3.14,256,257]),n=r,t=(x&&n instanceof Uint8Array||"[object Uint8Array]"===N(n))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?W:function(){throw new Error("not implemented")};var q,C=M,Y="function"==typeof Uint16Array,K="function"==typeof Uint16Array?Uint16Array:null,R="function"==typeof Uint16Array?Uint16Array:void 0;q=function(){var t,r,n;if("function"!=typeof K)return!1;try{r=new K(r=[1,3.14,-3.14,65536,65537]),n=r,t=(Y&&n instanceof Uint16Array||"[object Uint16Array]"===N(n))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?R:function(){throw new Error("not implemented")};var z,B={uint16:q,uint8:C};(z=new B.uint16(1))[0]=4660;var D=52===new B.uint8(z.buffer)[0],J=!0===D?1:0,Q=new k(1),X=new H(Q.buffer);function Z(t){return Q[0]=t,X[J]}var $=!0===D?1:0,tt=new k(1),rt=new H(tt.buffer);function nt(t,r){return tt[0]=t,rt[$]=r>>>0,tt[0]}var et=Number.POSITIVE_INFINITY,ut=m.NEGATIVE_INFINITY,it=1023,ot=.6931471803691238,ft=1.9082149292705877e-10,at=Math.sqrt;function ct(t){return Math.abs(t)}var lt,yt,pt=Math.floor,st=Math.ceil;function vt(t){return t<0?st(t):pt(t)}function bt(t){return t===et||t===ut}!0===D?(lt=1,yt=0):(lt=0,yt=1);var ht,Nt,mt={HIGH:lt,LOW:yt},dt=new k(1),wt=new H(dt.buffer),gt=mt.HIGH,At=mt.LOW;function _t(t,r){return dt[0]=r,t[0]=wt[gt],t[1]=wt[At],t}function Ut(t,r){return 1===arguments.length?_t([0,0],t):_t(t,r)}!0===D?(ht=1,Nt=0):(ht=0,Nt=1);var jt={HIGH:ht,LOW:Nt},Ot=new k(1),Et=new H(Ot.buffer),It=jt.HIGH,St=jt.LOW;function Tt(t,r){return Et[It]=t,Et[St]=r,Ot[0]}var Ft=[0,0];function Ht(t,r){var n,e;return Ut(Ft,t),n=Ft[0],n&=2147483647,e=Z(r),Tt(n|=e&=2147483648,Ft[1])}function Pt(t,r){return O(r)||bt(r)?(t[0]=r,t[1]=0,t):0!==r&&ct(r)<22250738585072014e-324?(t[0]=4503599627370496*r,t[1]=-52,t):(t[0]=r,t[1]=0,t)}var Vt=[0,0],Gt=[0,0];function Mt(t,r){var n,e;return 0===r||0===t||O(t)||bt(t)?t:(function(t,r){1===arguments.length?Pt([0,0],t):Pt(t,r)}(Vt,t),r+=Vt[1],r+=function(t){var r=Z(t);return(r=(2146435072&r)>>>20)-it|0}(t=Vt[0]),r<-1074?Ht(0,t):r>1023?t<0?ut:et:(r<=-1023?(r+=52,e=2220446049250313e-31):e=1,Ut(Gt,t),n=Gt[0],n&=2148532223,e*Tt(n|=r+it<<20,Gt[1])))}var kt=1.4426950408889634,xt=1/(1<<28);function Lt(t){var r;return O(t)||t===et?t:t===ut?0:t>709.782712893384?et:t<-745.1332191019411?0:t>-3.725290298461914e-9&&t<xt?1+t:function(t,r,n){var e,u,i,o;return Mt(1-(r-(e=t-r)*(i=e-(u=e*e)*(0===(o=u)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-i)-t),n)}(t-.6931471803691238*(r=vt(t<0?kt*t-.5:kt*t+.5)),1.9082149292705877e-10*r,r)}function Wt(t){return pt(t)===t}function qt(t){return Wt(t/2)}function Ct(t){return qt(t>0?t-1:t+1)}var Yt=!0===D?0:1,Kt=new k(1),Rt=new H(Kt.buffer);function zt(t,r){return Kt[0]=t,Rt[Yt]=r>>>0,Kt[0]}function Bt(t){return 0|t}var Dt=1048576,Jt=[1,1.5],Qt=[0,.5849624872207642],Xt=[0,1.350039202129749e-8],Zt=2147483647,$t=1048575,tr=1048576,rr=2147483647,nr=1083179008,er=1e300,ur=1e-300,ir=[0,0],or=[0,0];function fr(t,r){var n,e,u,i,o,f,a,c,l,y,p,s,v,b;if(O(t)||O(r))return NaN;if(Ut(ir,r),o=ir[0],0===ir[1]){if(0===r)return 1;if(1===r)return t;if(-1===r)return 1/t;if(.5===r)return at(t);if(-.5===r)return 1/at(t);if(2===r)return t*t;if(3===r)return t*t*t;if(4===r)return(t*=t)*t;if(bt(r))return function(t,r){return-1===t?(t-t)/(t-t):1===t?1:ct(t)<1==(r===et)?0:et}(t,r)}if(Ut(ir,t),i=ir[0],0===ir[1]){if(0===i)return function(t,r){return r===ut?et:r===et?0:r>0?Ct(r)?t:0:Ct(r)?Ht(et,t):et}(t,r);if(1===t)return 1;if(-1===t&&Ct(r))return-1;if(bt(t))return t===ut?fr(-0,-r):r<0?0:et}if(t<0&&!1===Wt(r))return(t-t)/(t-t);if(u=ct(t),n=i&rr|0,e=o&rr|0,a=o>>>31|0,f=(f=i>>>31|0)&&Ct(r)?-1:1,e>1105199104){if(e>1139802112)return function(t,r){return(2147483647&Z(t))<=1072693247?r<0?1/0:0:r>0?1/0:0}(t,r);if(n<1072693247)return 1===a?f*er*er:f*ur*ur;if(n>1072693248)return 0===a?f*er*er:f*ur*ur;p=function(t,r){var n,e,u,i,o,f;return n=(o=1.9259629911266175e-8*(u=r-1)-u*u*(0===(f=u)?.5:.5+f*(.25*f-.3333333333333333))*1.4426950408889634)-((e=zt(e=(i=1.4426950216293335*u)+o,0))-i),t[0]=e,t[1]=n,t}(or,u)}else p=function(t,r,n){var e,u,i,o,f,a,c,l,y,p,s,v,b,h,N,m,d,w,g,A,_;return w=0,n<Dt&&(w-=53,n=Z(r*=9007199254740992)),w+=(n>>20)-it|0,n=1072693248|(g=1048575&n|0),g<=235662?A=0:g<767610?A=1:(A=0,w+=1,n-=Dt),o=zt(u=(m=(r=nt(r,n))-(c=Jt[A]))*(d=1/(r+c)),0),e=524288+(n>>1|536870912),a=nt(0,e+=A<<18),N=(i=u*u)*i*(0===(_=i)?.5999999999999946:.5999999999999946+_*(.4285714285785502+_*(.33333332981837743+_*(.272728123808534+_*(.23066074577556175+.20697501780033842*_))))),a=zt(a=3+(i=o*o)+(N+=(f=d*(m-o*a-o*(r-(a-c))))*(o+u)),0),b=(s=-7.028461650952758e-9*(y=zt(y=(m=o*a)+(d=f*a+(N-(a-3-i))*u),0))+.9617966939259756*(d-(y-m))+Xt[A])-((v=zt(v=(p=.9617967009544373*y)+s+(l=Qt[A])+(h=w),0))-h-l-p),t[0]=v,t[1]=b,t}(or,u,n);if(y=(r-(c=zt(r,0)))*p[0]+r*p[1],l=c*p[0],Ut(ir,s=y+l),v=Bt(ir[0]),b=Bt(ir[1]),v>=nr){if(0!=(v-nr|b))return f*er*er;if(y+8008566259537294e-32>s-l)return f*er*er}else if((v&rr)>=1083231232){if(0!=(v-3230714880|b))return f*ur*ur;if(y<=s-l)return f*ur*ur}return s=function(t,r,n){var e,u,i,o,f,a,c,l,y,p;return y=((l=t&Zt|0)>>20)-it|0,c=0,l>1071644672&&(u=nt(0,((c=t+(tr>>y+1)>>>0)&~($t>>(y=((c&Zt)>>20)-it|0)))>>>0),c=(c&$t|tr)>>20-y>>>0,t<0&&(c=-c),r-=u),t=Bt(t=Z(a=1-((a=(i=.6931471824645996*(u=zt(u=n+r,0)))+(o=.6931471805599453*(n-(u-r))+-1.904654299957768e-9*u))*(e=a-(u=a*a)*(0===(p=u)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((f=o-(a-i))+a*f)-a))),(t+=c<<20>>>0)>>20<=0?Mt(a,c):nt(a,t)}(v,l,y),f*s}var ar=2220446049250313e-31;function cr(t){var r,n;return 0===t?1/0:((t<0?-t:t)<=1?(r=709811.662581658+t*(679979.8474157227+t*(293136.7857211597+t*(74887.54032914672+t*(12555.290582413863+t*(1443.4299244417066+t*(115.24194596137347+t*(6.309239205732627+t*(.22668404630224365+t*(.004826466289237662+4624429436045379e-20*t))))))))),n=0+t*(362880+t*(1026576+t*(1172700+t*(723680+t*(269325+t*(63273+t*(9450+t*(870+t*(45+1*t)))))))))):(r=4624429436045379e-20+(t=1/t)*(.004826466289237662+t*(.22668404630224365+t*(6.309239205732627+t*(115.24194596137347+t*(1443.4299244417066+t*(12555.290582413863+t*(74887.54032914672+t*(293136.7857211597+t*(679979.8474157227+709811.662581658*t))))))))),n=1+t*(45+t*(870+t*(9450+t*(63273+t*(269325+t*(723680+t*(1172700+t*(1026576+t*(362880+0*t)))))))))),r/n)}var lr=10.900511;function yr(t,r){var n,e,u,i,o,f,a;return O(t)||O(r)||t<0||r<0?NaN:1===r?1/t:1===t?1/r:(a=t+r)<ar?(o=a/t,o/=r):a===t&&r<ar?1/r:a===r&&t<ar?1/t:(t<r&&(f=r,r=t,t=f),e=t+lr-.5,u=r+lr-.5,i=a+lr-.5,o=cr(t)*(cr(r)/cr(a)),ct(r*(n=t-.5-r))<100*i&&t>100?o*=Lt(n*function(t){var r,n,e,u,i,o,f,a,c,l;if(t<-1||O(t))return NaN;if(-1===t)return ut;if(t===et)return t;if(0===t)return t;if(l=1,(e=t<0?-t:t)<.41421356237309503){if(e<1.862645149230957e-9)return e<5551115123125783e-32?t:t-t*t*.5;t>-.2928932188134525&&(l=0,u=t,n=1)}return 0!==l&&(e<9007199254740992?(i=(l=((n=Z(c=1+t))>>20)-it)>0?1-(c-t):t-(c-1),i/=c):(l=((n=Z(c=t))>>20)-it,i=0),(n&=1048575)<434334?c=nt(c,1072693248|n):(l+=1,c=nt(c,1071644672|n),n=1048576-n>>2),u=c-1),r=.5*u*u,0===n?0===u?l*ot+(i+=l*ft):l*ot-((a=r*(1-.6666666666666666*u))-(l*ft+i)-u):(a=(f=(o=u/(2+u))*o)*function(t){return 0===t?.6666666666666735:.6666666666666735+t*(.3999999999940942+t*(.2857142874366239+t*(.22222198432149784+t*(.1818357216161805+t*(.15313837699209373+.14798198605116586*t)))))}(f),0===l?u-(r-o*(r+a)):l*ot-(r-(o*(r+a)+(l*ft+i))-u))}(-r/i)):o*=fr(e/i,n),o*=fr(i>1e10?e/i*(u/i):e*u/(i*i),r),o*=at(2.718281828459045/u))}function pr(t,r,n){return O(t)||O(r)||O(n)||r<=0||n<=0?NaN:t<=0?0:t>=1?1:1-fr(1-fr(t,r),n)}function sr(t){return function(){return t}}c(pr,"factory",(function(t,r){return O(t)||O(r)||t<=0||r<=0?sr(NaN):function(n){return O(n)?NaN:n<=0?0:n>=1?1:1-fr(1-fr(n,t),r)}}));var vr=.6931471803691238,br=1.9082149292705877e-10,hr=1048575;function Nr(t){var r,n,e,u,i,o,f,a,c,l,y,p;return 0===t?ut:O(t)||t<0?NaN:(i=0,(n=Z(t))<1048576&&(i-=54,n=Z(t*=0x40000000000000)),n>=2146435072?t+t:(i+=(n>>20)-it|0,i+=(a=614244+(n&=hr)&1048576|0)>>20|0,f=(t=nt(t,n|1072693248^a))-1,(hr&2+n)<3?0===f?0===i?0:i*vr+i*br:(o=f*f*(.5-.3333333333333333*f),0===i?f-o:i*vr-(o-i*br-f)):(a=n-398458|0,c=440401-n|0,u=(y=(p=(l=f/(2+f))*l)*p)*function(t){return 0===t?.3999999999940942:.3999999999940942+t*(.22222198432149784+.15313837699209373*t)}(y),e=p*function(t){return 0===t?.6666666666666735:.6666666666666735+t*(.2857142874366239+t*(.1818357216161805+.14798198605116586*t))}(y),o=e+u,(a|=c)>0?(r=.5*f*f,0===i?f-(r-l*(r+o)):i*vr-(r-(l*(r+o)+i*br)-f)):0===i?f-l*(f-o):i*vr-(l*(f-o)-i*br-f))))}function mr(t,r,n){return O(t)||O(r)||O(n)||r<=0||n<=0?NaN:t<=0?ut:t>=1?0:Nr(1-fr(1-fr(t,r),n))}function dr(t,r,n){var e;return O(t)||O(r)||O(n)||r<=0||n<=0?NaN:t<=0||t>=1?ut:(e=Nr(r*n),e+=(r-1)*Nr(t),e+=(n-1)*Nr(1-fr(t,r)))}function wr(t,r,n){return O(t)||O(r)||O(n)||r<=0||n<=0?NaN:t<=0||t>=1?0:r*n*fr(t,r-1)*fr(1-fr(t,r),n-1)}function gr(t,r,n){return O(t)||O(r)||O(n)||r<=0||n<=0||t<0||t>1?NaN:fr(1-fr(1-t,1/n),1/r)}function Ar(){var t,r=arguments,n=r[0],e="https://stdlib.io/e/"+n+"?";for(t=1;t<r.length;t++)e+="&arg[]="+encodeURIComponent(r[t]);return e}function _r(){var t,r;if(!(this instanceof _r))return 0===arguments.length?new _r:new _r(arguments[0],arguments[1]);if(arguments.length){if(r=arguments[1],!_(t=arguments[0]))throw new TypeError(Ar("invalid argument. First shape parameter must be a positive number. Value: `%s`.",t));if(!_(r))throw new TypeError(Ar("invalid argument. Second shape parameter must be a positive number. Value: `%s`.",r))}else t=1,r=1;return a(this,"a",{configurable:!1,enumerable:!0,get:function(){return t},set:function(r){if(!_(r))throw new TypeError(Ar("invalid assignment. Must be a positive number. Value: `%s`.",r));t=r}}),a(this,"b",{configurable:!1,enumerable:!0,get:function(){return r},set:function(t){if(!_(t))throw new TypeError(Ar("invalid assignment. Must be a positive number. Value: `%s`.",t));r=t}}),this}return c(mr,"factory",(function(t,r){return O(t)||O(r)||t<=0||r<=0?sr(NaN):function(n){return O(n)?NaN:n<=0?ut:n>=1?0:Nr(1-fr(1-fr(n,t),r))}})),c(dr,"factory",(function(t,r){return O(t)||O(r)||t<=0||r<=0?sr(NaN):function(n){var e;return O(n)?NaN:n<=0||n>=1?ut:(e=Nr(t*r),e+=(t-1)*Nr(n),e+=(r-1)*Nr(1-fr(n,t)))}})),c(wr,"factory",(function(t,r){return O(t)||O(r)||t<=0||r<=0?sr(NaN):function(n){return O(n)?NaN:n<=0||n>=1?0:t*r*fr(n,t-1)*fr(1-fr(n,t),r-1)}})),c(gr,"factory",(function(t,r){return O(t)||O(r)||t<=0||r<=0?sr(NaN):function(n){return O(n)||n<0||n>1?NaN:fr(1-fr(1-n,1/r),1/t)}})),l(_r.prototype,"kurtosis",(function(){return t=this.a,r=this.b,O(t)||t<=0||O(r)||r<=0?NaN:(i=r*yr(1+1/t,r),o=r*yr(1+2/t,r),f=r*yr(1+3/t,r),e=r*yr(1+4/t,r)-4*f*i+6*o*(u=i*i)-3*u*u,e/=(n=o-i*i)*n);var t,r,n,e,u,i,o,f})),l(_r.prototype,"mean",(function(){return t=this.a,r=this.b,O(t)||t<=0||O(r)||r<=0?NaN:r*yr(1+1/t,r);var t,r})),l(_r.prototype,"mode",(function(){return t=this.a,r=this.b,O(t)||t<1||O(r)||r<1||1===t&&1===r?NaN:fr((t-1)/(t*r-1),1/t);var t,r})),l(_r.prototype,"skewness",(function(){return t=this.a,r=this.b,O(t)||t<=0||O(r)||r<=0?NaN:(e=r*yr(1+1/t,r),u=r*yr(1+2/t,r),(r*yr(1+3/t,r)-3*e*(n=u-e*e)-e*e*e)/fr(n,1.5));var t,r,n,e,u})),l(_r.prototype,"stdev",(function(){return t=this.a,r=this.b,O(t)||t<=0||O(r)||r<=0?NaN:(n=r*yr(1+1/t,r),e=r*yr(1+2/t,r),at(e-n*n));var t,r,n,e})),l(_r.prototype,"variance",(function(){return t=this.a,r=this.b,O(t)||t<=0||O(r)||r<=0?NaN:(n=r*yr(1+1/t,r),r*yr(1+2/t,r)-n*n);var t,r,n})),c(_r.prototype,"cdf",(function(t){return pr(t,this.a,this.b)})),c(_r.prototype,"logcdf",(function(t){return mr(t,this.a,this.b)})),c(_r.prototype,"logpdf",(function(t){return dr(t,this.a,this.b)})),c(_r.prototype,"pdf",(function(t){return wr(t,this.a,this.b)})),c(_r.prototype,"quantile",(function(t){return gr(t,this.a,this.b)})),_r},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t="undefined"!=typeof globalThis?globalThis:t||self).Kumaraswamy=r();
//# sourceMappingURL=index.js.map
