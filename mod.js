// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty,n=Object.prototype,e=n.toString,u=n.__defineGetter__,i=n.__defineSetter__,o=n.__lookupGetter__,a=n.__lookupSetter__;var f=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,t,f){var c,l,y,p;if("object"!=typeof r||null===r||"[object Array]"===e.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof f||null===f||"[object Array]"===e.call(f))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+f+"`.");if((l="value"in f)&&(o.call(r,t)||a.call(r,t)?(c=r.__proto__,r.__proto__=n,delete r[t],r[t]=f.value,r.__proto__=c):r[t]=f.value),y="get"in f,p="set"in f,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&u&&u.call(r,t,f.get),p&&i&&i.call(r,t,f.set),r};function c(r,t,n){f(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}function l(r,t,n){f(r,t,{configurable:!1,enumerable:!1,get:n})}function y(r){return"number"==typeof r}var p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function v(){return p&&"symbol"==typeof Symbol.toStringTag}var s=Object.prototype.toString;var b=Object.prototype.hasOwnProperty;var N="function"==typeof Symbol?Symbol.toStringTag:"";var h=v()?function(r){var t,n,e,u,i;if(null==r)return s.call(r);n=r[N],i=N,t=null!=(u=r)&&b.call(u,i);try{r[N]=void 0}catch(t){return s.call(r)}return e=s.call(r),t?r[N]=n:delete r[N],e}:function(r){return s.call(r)},m=Number,w=m.prototype.toString;var d=v();function g(r){return"object"==typeof r&&(r instanceof m||(d?function(r){try{return w.call(r),!0}catch(r){return!1}}(r):"[object Number]"===h(r)))}function A(r){return y(r)||g(r)}function _(r){return y(r)&&r>0}function U(r){return g(r)&&r.valueOf()>0}function j(r){return _(r)||U(r)}function O(r){return r!=r}c(A,"isPrimitive",y),c(A,"isObject",g),c(j,"isPrimitive",_),c(j,"isObject",U);var E="function"==typeof Uint32Array;var I="function"==typeof Uint32Array?Uint32Array:null;var S,T="function"==typeof Uint32Array?Uint32Array:void 0;S=function(){var r,t,n;if("function"!=typeof I)return!1;try{t=new I(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(E&&n instanceof Uint32Array||"[object Uint32Array]"===h(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?T:function(){throw new Error("not implemented")};var F=S,H="function"==typeof Float64Array;var P="function"==typeof Float64Array?Float64Array:null;var V,G="function"==typeof Float64Array?Float64Array:void 0;V=function(){var r,t,n;if("function"!=typeof P)return!1;try{t=new P([1,3.14,-3.14,NaN]),n=t,r=(H&&n instanceof Float64Array||"[object Float64Array]"===h(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?G:function(){throw new Error("not implemented")};var M=V,k="function"==typeof Uint8Array;var L="function"==typeof Uint8Array?Uint8Array:null;var W,x="function"==typeof Uint8Array?Uint8Array:void 0;W=function(){var r,t,n;if("function"!=typeof L)return!1;try{t=new L(t=[1,3.14,-3.14,256,257]),n=t,r=(k&&n instanceof Uint8Array||"[object Uint8Array]"===h(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?x:function(){throw new Error("not implemented")};var q=W,C="function"==typeof Uint16Array;var Y="function"==typeof Uint16Array?Uint16Array:null;var R,z="function"==typeof Uint16Array?Uint16Array:void 0;R=function(){var r,t,n;if("function"!=typeof Y)return!1;try{t=new Y(t=[1,3.14,-3.14,65536,65537]),n=t,r=(C&&n instanceof Uint16Array||"[object Uint16Array]"===h(n))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?z:function(){throw new Error("not implemented")};var B,D={uint16:R,uint8:q};(B=new D.uint16(1))[0]=4660;var J=52===new D.uint8(B.buffer)[0],K=!0===J?1:0,Q=new M(1),X=new F(Q.buffer);function Z(r){return Q[0]=r,X[K]}var $=!0===J?1:0,rr=new M(1),tr=new F(rr.buffer);function nr(r,t){return rr[0]=r,tr[$]=t>>>0,rr[0]}var er=Number.POSITIVE_INFINITY,ur=m.NEGATIVE_INFINITY;var ir=.6931471803691238,or=1.9082149292705877e-10;var ar=Math.sqrt;function fr(r){return Math.abs(r)}var cr=Math.floor,lr=Math.ceil;function yr(r){return r<0?lr(r):cr(r)}var pr,vr;function sr(r){return r===er||r===ur}!0===J?(pr=1,vr=0):(pr=0,vr=1);var br,Nr,hr={HIGH:pr,LOW:vr},mr=new M(1),wr=new F(mr.buffer),dr=hr.HIGH,gr=hr.LOW;function Ar(r,t){return mr[0]=t,r[0]=wr[dr],r[1]=wr[gr],r}function _r(r,t){return 1===arguments.length?Ar([0,0],r):Ar(r,t)}!0===J?(br=1,Nr=0):(br=0,Nr=1);var Ur={HIGH:br,LOW:Nr},jr=new M(1),Or=new F(jr.buffer),Er=Ur.HIGH,Ir=Ur.LOW;function Sr(r,t){return Or[Er]=r,Or[Ir]=t,jr[0]}var Tr=[0,0];function Fr(r,t){var n,e;return _r(Tr,r),n=Tr[0],n&=2147483647,e=Z(t),Sr(n|=e&=2147483648,Tr[1])}function Hr(r,t,n,e){return O(r)||sr(r)?(t[e]=r,t[e+n]=0,t):0!==r&&fr(r)<22250738585072014e-324?(t[e]=4503599627370496*r,t[e+n]=-52,t):(t[e]=r,t[e+n]=0,t)}c((function(r){return Hr(r,[0,0],1,0)}),"assign",Hr);var Pr=[0,0],Vr=[0,0];function Gr(r,t){var n,e;return 0===t||0===r||O(r)||sr(r)?r:(Hr(r,Pr,1,0),t+=Pr[1],t+=function(r){var t=Z(r);return(t=(2146435072&t)>>>20)-1023|0}(r=Pr[0]),t<-1074?Fr(0,r):t>1023?r<0?ur:er:(t<=-1023?(t+=52,e=2220446049250313e-31):e=1,_r(Vr,r),n=Vr[0],n&=2148532223,e*Sr(n|=t+1023<<20,Vr[1])))}function Mr(r){var t;return O(r)||r===er?r:r===ur?0:r>709.782712893384?er:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<3.725290298461914e-9?1+r:function(r,t,n){var e,u,i,o;return Gr(1-(t-(e=r-t)*(i=e-(u=e*e)*(0===(o=u)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-i)-r),n)}(r-.6931471803691238*(t=yr(r<0?1.4426950408889634*r-.5:1.4426950408889634*r+.5)),1.9082149292705877e-10*t,t)}function kr(r){return cr(r)===r}function Lr(r){return kr(r/2)}function Wr(r){return Lr(r>0?r-1:r+1)}var xr=!0===J?0:1,qr=new M(1),Cr=new F(qr.buffer);function Yr(r,t){return qr[0]=r,Cr[xr]=t>>>0,qr[0]}function Rr(r){return 0|r}var zr=[1,1.5],Br=[0,.5849624872207642],Dr=[0,1.350039202129749e-8];var Jr=1e300,Kr=1e-300,Qr=[0,0],Xr=[0,0];function Zr(r,t){var n,e,u,i,o,a,f,c,l,y,p,v,s,b;if(O(r)||O(t))return NaN;if(_r(Qr,t),o=Qr[0],0===Qr[1]){if(0===t)return 1;if(1===t)return r;if(-1===t)return 1/r;if(.5===t)return ar(r);if(-.5===t)return 1/ar(r);if(2===t)return r*r;if(3===t)return r*r*r;if(4===t)return(r*=r)*r;if(sr(t))return function(r,t){return-1===r?(r-r)/(r-r):1===r?1:fr(r)<1==(t===er)?0:er}(r,t)}if(_r(Qr,r),i=Qr[0],0===Qr[1]){if(0===i)return function(r,t){return t===ur?er:t===er?0:t>0?Wr(t)?r:0:Wr(t)?Fr(er,r):er}(r,t);if(1===r)return 1;if(-1===r&&Wr(t))return-1;if(sr(r))return r===ur?Zr(-0,-t):t<0?0:er}if(r<0&&!1===kr(t))return(r-r)/(r-r);if(u=fr(r),n=2147483647&i|0,e=2147483647&o|0,f=o>>>31|0,a=(a=i>>>31|0)&&Wr(t)?-1:1,e>1105199104){if(e>1139802112)return function(r,t){return(2147483647&Z(r))<=1072693247?t<0?1/0:0:t>0?1/0:0}(r,t);if(n<1072693247)return 1===f?a*Jr*Jr:a*Kr*Kr;if(n>1072693248)return 0===f?a*Jr*Jr:a*Kr*Kr;p=function(r,t){var n,e,u,i,o,a;return n=(o=1.9259629911266175e-8*(u=t-1)-u*u*(0===(a=u)?.5:.5+a*(.25*a-.3333333333333333))*1.4426950408889634)-((e=Yr(e=(i=1.4426950216293335*u)+o,0))-i),r[0]=e,r[1]=n,r}(Xr,u)}else p=function(r,t,n){var e,u,i,o,a,f,c,l,y,p,v,s,b,N,h,m,w,d,g,A,_;return d=0,n<1048576&&(d-=53,n=Z(t*=9007199254740992)),d+=(n>>20)-1023|0,n=1072693248|(g=1048575&n|0),g<=235662?A=0:g<767610?A=1:(A=0,d+=1,n-=1048576),o=Yr(u=(m=(t=nr(t,n))-(c=zr[A]))*(w=1/(t+c)),0),e=524288+(n>>1|536870912),f=nr(0,e+=A<<18),h=(i=u*u)*i*(0===(_=i)?.5999999999999946:.5999999999999946+_*(.4285714285785502+_*(.33333332981837743+_*(.272728123808534+_*(.23066074577556175+.20697501780033842*_))))),f=Yr(f=3+(i=o*o)+(h+=(a=w*(m-o*f-o*(t-(f-c))))*(o+u)),0),b=(v=-7.028461650952758e-9*(y=Yr(y=(m=o*f)+(w=a*f+(h-(f-3-i))*u),0))+.9617966939259756*(w-(y-m))+Dr[A])-((s=Yr(s=(p=.9617967009544373*y)+v+(l=Br[A])+(N=d),0))-N-l-p),r[0]=s,r[1]=b,r}(Xr,u,n);if(y=(t-(c=Yr(t,0)))*p[0]+t*p[1],l=c*p[0],_r(Qr,v=y+l),s=Rr(Qr[0]),b=Rr(Qr[1]),s>=1083179008){if(0!=(s-1083179008|b))return a*Jr*Jr;if(y+8008566259537294e-32>v-l)return a*Jr*Jr}else if((2147483647&s)>=1083231232){if(0!=(s-3230714880|b))return a*Kr*Kr;if(y<=v-l)return a*Kr*Kr}return v=function(r,t,n){var e,u,i,o,a,f,c,l,y,p,v;return p=((y=2147483647&r|0)>>20)-1023|0,l=0,y>1071644672&&(e=((l=r+(1048576>>p+1)>>>0)&~(1048575>>(p=((2147483647&l)>>20)-1023|0)))>>>0,l=(1048575&l|1048576)>>20-p>>>0,r<0&&(l=-l),t-=i=nr(0,e)),r=Rr(r=Z(c=1-((c=(o=.6931471824645996*(i=Yr(i=n+t,0)))+(a=.6931471805599453*(n-(i-t))+-1.904654299957768e-9*i))*(u=c-(i=c*c)*(0===(v=i)?.16666666666666602:.16666666666666602+v*(v*(6613756321437934e-20+v*(4.1381367970572385e-8*v-16533902205465252e-22))-.0027777777777015593)))/(u-2)-((f=a-(c-o))+c*f)-c))),(r+=l<<20>>>0)>>20<=0?Gr(c,l):nr(c,r)}(s,l,y),a*v}function $r(r){var t,n;return 0===r?1/0:((r<0?-r:r)<=1?(t=709811.662581658+r*(679979.8474157227+r*(293136.7857211597+r*(74887.54032914672+r*(12555.290582413863+r*(1443.4299244417066+r*(115.24194596137347+r*(6.309239205732627+r*(.22668404630224365+r*(.004826466289237662+4624429436045379e-20*r))))))))),n=0+r*(362880+r*(1026576+r*(1172700+r*(723680+r*(269325+r*(63273+r*(9450+r*(870+r*(45+1*r)))))))))):(t=4624429436045379e-20+(r=1/r)*(.004826466289237662+r*(.22668404630224365+r*(6.309239205732627+r*(115.24194596137347+r*(1443.4299244417066+r*(12555.290582413863+r*(74887.54032914672+r*(293136.7857211597+r*(679979.8474157227+709811.662581658*r))))))))),n=1+r*(45+r*(870+r*(9450+r*(63273+r*(269325+r*(723680+r*(1172700+r*(1026576+r*(362880+0*r)))))))))),t/n)}var rt=10.900511;function tt(r,t){var n,e,u,i,o,a,f;return O(r)||O(t)||r<0||t<0?NaN:1===t?1/r:1===r?1/t:(f=r+t)<2220446049250313e-31?(o=f/r,o/=t):f===r&&t<2220446049250313e-31?1/t:f===t&&r<2220446049250313e-31?1/r:(r<t&&(a=t,t=r,r=a),e=r+rt-.5,u=t+rt-.5,i=f+rt-.5,o=$r(r)*($r(t)/$r(f)),fr(t*(n=r-.5-t))<100*i&&r>100?o*=Mr(n*function(r){var t,n,e,u,i,o,a,f,c,l;if(r<-1||O(r))return NaN;if(-1===r)return ur;if(r===er)return r;if(0===r)return r;if(l=1,(e=r<0?-r:r)<.41421356237309503){if(e<1.862645149230957e-9)return e<5551115123125783e-32?r:r-r*r*.5;r>-.2928932188134525&&(l=0,u=r,n=1)}return 0!==l&&(e<9007199254740992?(i=(l=((n=Z(c=1+r))>>20)-1023)>0?1-(c-r):r-(c-1),i/=c):(l=((n=Z(c=r))>>20)-1023,i=0),(n&=1048575)<434334?c=nr(c,1072693248|n):(l+=1,c=nr(c,1071644672|n),n=1048576-n>>2),u=c-1),t=.5*u*u,0===n?0===u?l*ir+(i+=l*or):l*ir-((f=t*(1-.6666666666666666*u))-(l*or+i)-u):(f=(a=(o=u/(2+u))*o)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(a),0===l?u-(t-o*(t+f)):l*ir-(t-(o*(t+f)+(l*or+i))-u))}(-t/i)):o*=Zr(e/i,n),o*=Zr(i>1e10?e/i*(u/i):e*u/(i*i),t),o*=ar(2.718281828459045/u))}function nt(r,t,n){return O(r)||O(t)||O(n)||t<=0||n<=0?NaN:r<=0?0:r>=1?1:1-Zr(1-Zr(r,t),n)}function et(r){return function(){return r}}c(nt,"factory",(function(r,t){return O(r)||O(t)||r<=0||t<=0?et(NaN):function(n){if(O(n))return NaN;if(n<=0)return 0;if(n>=1)return 1;return 1-Zr(1-Zr(n,r),t)}}));var ut=.6931471803691238,it=1.9082149292705877e-10;function ot(r){var t,n,e,u,i,o,a,f,c,l,y,p;return 0===r?ur:O(r)||r<0?NaN:(i=0,(n=Z(r))<1048576&&(i-=54,n=Z(r*=0x40000000000000)),n>=2146435072?r+r:(i+=(n>>20)-1023|0,i+=(f=(n&=1048575)+614244&1048576|0)>>20|0,a=(r=nr(r,n|1072693248^f))-1,(1048575&2+n)<3?0===a?0===i?0:i*ut+i*it:(o=a*a*(.5-.3333333333333333*a),0===i?a-o:i*ut-(o-i*it-a)):(f=n-398458|0,c=440401-n|0,u=(y=(p=(l=a/(2+a))*l)*p)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(y),e=p*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(y),o=e+u,(f|=c)>0?(t=.5*a*a,0===i?a-(t-l*(t+o)):i*ut-(t-(l*(t+o)+i*it)-a)):0===i?a-l*(a-o):i*ut-(l*(a-o)-i*it-a))))}function at(r,t,n){return O(r)||O(t)||O(n)||t<=0||n<=0?NaN:r<=0?ur:r>=1?0:ot(1-Zr(1-Zr(r,t),n))}function ft(r,t,n){var e;return O(r)||O(t)||O(n)||t<=0||n<=0?NaN:r<=0||r>=1?ur:(e=ot(t*n),e+=(t-1)*ot(r),e+=(n-1)*ot(1-Zr(r,t)))}function ct(r,t,n){return O(r)||O(t)||O(n)||t<=0||n<=0?NaN:r<=0||r>=1?0:t*n*Zr(r,t-1)*Zr(1-Zr(r,t),n-1)}function lt(r,t,n){return O(r)||O(t)||O(n)||t<=0||n<=0||r<0||r>1?NaN:Zr(1-Zr(1-r,1/n),1/t)}function yt(){var r,t=arguments,n=t[0],e="https://stdlib.io/e/"+n+"?";for(r=1;r<t.length;r++)e+="&arg[]="+encodeURIComponent(t[r]);return e}function pt(){var r,t;if(!(this instanceof pt))return 0===arguments.length?new pt:new pt(arguments[0],arguments[1]);if(arguments.length){if(t=arguments[1],!_(r=arguments[0]))throw new TypeError(yt("invalid argument. First shape parameter must be a positive number. Value: `%s`.",r));if(!_(t))throw new TypeError(yt("invalid argument. Second shape parameter must be a positive number. Value: `%s`.",t))}else r=1,t=1;return f(this,"a",{configurable:!1,enumerable:!0,get:function(){return r},set:function(t){if(!_(t))throw new TypeError(yt("invalid assignment. Must be a positive number. Value: `%s`.",t));r=t}}),f(this,"b",{configurable:!1,enumerable:!0,get:function(){return t},set:function(r){if(!_(r))throw new TypeError(yt("invalid assignment. Must be a positive number. Value: `%s`.",r));t=r}}),this}c(at,"factory",(function(r,t){return O(r)||O(t)||r<=0||t<=0?et(NaN):function(n){if(O(n))return NaN;if(n<=0)return ur;if(n>=1)return 0;return ot(1-Zr(1-Zr(n,r),t))}})),c(ft,"factory",(function(r,t){return O(r)||O(t)||r<=0||t<=0?et(NaN):function(n){var e;if(O(n))return NaN;if(n<=0||n>=1)return ur;return e=ot(r*t),e+=(r-1)*ot(n),e+=(t-1)*ot(1-Zr(n,r))}})),c(ct,"factory",(function(r,t){return O(r)||O(t)||r<=0||t<=0?et(NaN):function(n){if(O(n))return NaN;if(n<=0||n>=1)return 0;return r*t*Zr(n,r-1)*Zr(1-Zr(n,r),t-1)}})),c(lt,"factory",(function(r,t){return O(r)||O(t)||r<=0||t<=0?et(NaN):function(n){if(O(n)||n<0||n>1)return NaN;return Zr(1-Zr(1-n,1/t),1/r)}})),l(pt.prototype,"kurtosis",(function(){return r=this.a,t=this.b,O(r)||r<=0||O(t)||t<=0?NaN:(i=t*tt(1+1/r,t),o=t*tt(1+2/r,t),a=t*tt(1+3/r,t),e=t*tt(1+4/r,t)-4*a*i+6*o*(u=i*i)-3*u*u,e/=(n=o-i*i)*n);var r,t,n,e,u,i,o,a})),l(pt.prototype,"mean",(function(){return r=this.a,t=this.b,O(r)||r<=0||O(t)||t<=0?NaN:t*tt(1+1/r,t);var r,t})),l(pt.prototype,"mode",(function(){return r=this.a,t=this.b,O(r)||r<1||O(t)||t<1||1===r&&1===t?NaN:Zr((r-1)/(r*t-1),1/r);var r,t})),l(pt.prototype,"skewness",(function(){return r=this.a,t=this.b,O(r)||r<=0||O(t)||t<=0?NaN:(e=t*tt(1+1/r,t),u=t*tt(1+2/r,t),(t*tt(1+3/r,t)-3*e*(n=u-e*e)-e*e*e)/Zr(n,1.5));var r,t,n,e,u})),l(pt.prototype,"stdev",(function(){return r=this.a,t=this.b,O(r)||r<=0||O(t)||t<=0?NaN:(n=t*tt(1+1/r,t),e=t*tt(1+2/r,t),ar(e-n*n));var r,t,n,e})),l(pt.prototype,"variance",(function(){return r=this.a,t=this.b,O(r)||r<=0||O(t)||t<=0?NaN:(n=t*tt(1+1/r,t),t*tt(1+2/r,t)-n*n);var r,t,n})),c(pt.prototype,"cdf",(function(r){return nt(r,this.a,this.b)})),c(pt.prototype,"logcdf",(function(r){return at(r,this.a,this.b)})),c(pt.prototype,"logpdf",(function(r){return ft(r,this.a,this.b)})),c(pt.prototype,"pdf",(function(r){return ct(r,this.a,this.b)})),c(pt.prototype,"quantile",(function(r){return lt(r,this.a,this.b)}));export{pt as default};
//# sourceMappingURL=mod.js.map