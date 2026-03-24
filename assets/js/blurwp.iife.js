var BlurWP=function(We){"use strict";var Iy=Object.defineProperty;var Sy=(We,we,qt)=>we in We?Iy(We,we,{enumerable:!0,configurable:!0,writable:!0,value:qt}):We[we]=qt;var ut=(We,we,qt)=>Sy(We,typeof we!="symbol"?we+"":we,qt);/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var we=function(r,e){return(we=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var o in n)n.hasOwnProperty(o)&&(t[o]=n[o])})(r,e)};function qt(r,e){function t(){this.constructor=r}we(r,e),r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}function K(r,e,t,n){return new(t||(t=Promise))(function(o,a){function i(c){try{u(n.next(c))}catch(l){a(l)}}function s(c){try{u(n.throw(c))}catch(l){a(l)}}function u(c){c.done?o(c.value):new t(function(l){l(c.value)}).then(i,s)}u((n=n.apply(r,[])).next())})}function $(r,e){var t,n,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(u){return function(c){return function(l){if(t)throw new TypeError("Generator is already executing.");for(;i;)try{if(t=1,n&&(o=2&l[0]?n.return:l[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,l[1])).done)return o;switch(n=0,o&&(l=[2&l[0],o.value]),l[0]){case 0:case 1:o=l;break;case 4:return i.label++,{value:l[1],done:!1};case 5:i.label++,n=l[1],l=[0];continue;case 7:l=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(l[0]===6||l[0]===2)){i=0;continue}if(l[0]===3&&(!o||l[1]>o[0]&&l[1]<o[3])){i.label=l[1];break}if(l[0]===6&&i.label<o[1]){i.label=o[1],o=l;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(l);break}o[2]&&i.ops.pop(),i.trys.pop();continue}l=e.call(r,i)}catch(h){l=[6,h],n=0}finally{t=o=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([u,c])}}}var Jc=function(){function r(e){this.global=e,this.flags={},this.flagRegistry={},this.urlFlags={},this.populateURLFlags()}return r.prototype.setPlatform=function(e,t){this.platform!=null&&console.warn("Platform "+this.platformName+" has already been set. Overwriting the platform with "+t+"."),this.platformName=e,this.platform=t},r.prototype.registerFlag=function(e,t,n){if(this.flagRegistry[e]={evaluationFn:t,setHook:n},this.urlFlags[e]!=null){var o=this.urlFlags[e];console.warn("Setting feature override from URL "+e+": "+o+"."),this.set(e,o)}},r.prototype.get=function(e){return e in this.flags?this.flags[e]:(this.flags[e]=this.evaluateFlag(e),this.flags[e])},r.prototype.getNumber=function(e){return this.get(e)},r.prototype.getBool=function(e){return this.get(e)},r.prototype.getFlags=function(){return this.flags},Object.defineProperty(r.prototype,"features",{get:function(){return this.flags},enumerable:!0,configurable:!0}),r.prototype.set=function(e,t){if(this.flagRegistry[e]==null)throw new Error("Cannot set flag "+e+" as it has not been registered.");this.flags[e]=t,this.flagRegistry[e].setHook!=null&&this.flagRegistry[e].setHook(t)},r.prototype.evaluateFlag=function(e){if(this.flagRegistry[e]==null)throw new Error("Cannot evaluate flag '"+e+"': no evaluation function found.");return this.flagRegistry[e].evaluationFn()},r.prototype.setFlags=function(e){this.flags=Object.assign({},e)},r.prototype.reset=function(){this.flags={},this.urlFlags={},this.populateURLFlags()},r.prototype.populateURLFlags=function(){var e=this;if(this.global!==void 0&&this.global.location!==void 0&&this.global.location.search!==void 0){var t,n,o=(t=this.global.location.search,n={},t.replace(/[?&]([^=?&]+)(?:=([^&]*))?/g,function(a){for(var i=[],s=1;s<arguments.length;s++)i[s-1]=arguments[s];return Qc(n,i[0],i[1]),i.join("=")}),n);"tfjsflags"in o&&o.tfjsflags.split(",").forEach(function(a){var i=a.split(":"),s=i[0],u=i[1];e.urlFlags[s]=function(c,l){if((l=l.toLowerCase())==="true"||l==="false")return l==="true";if(""+ +l===l)return+l;throw new Error("Could not parse value flag value "+l+" for flag "+c+".")}(s,u)})}},r}();function Qc(r,e,t){r[decodeURIComponent(e)]=decodeURIComponent(t||"")}function P(){return Ai}var Ai=null,Er=new Map,_o=new Map;function Ti(r,e){var t=Mi(r,e);return Er.get(t)}function Zc(r){return _o.get(r)}function Fi(r){for(var e=Er.entries(),t=[];;){var n=e.next(),o=n.done,a=n.value;if(o)break;var i=a[0],s=a[1];i.split("_")[0]===r&&t.push(s)}return t}function Ni(r){var e=r.kernelName,t=r.backendName,n=Mi(e,t);if(Er.has(n))throw new Error("The kernel '"+e+"' for backend '"+t+"' is already registered");Er.set(n,r)}function tl(r){var e=r.kernelName;_o.has(e)&&console.warn("Overriding the gradient for '"+e+"'"),_o.set(e,r)}function Mi(r,e){return e+"_"+r}function Io(r,e,t){return Math.max(r,Math.min(e,t))}function Pi(r){return r%2==0?r:r+1}function el(r){for(var e=0,t=0;t<r.length;t++)e+=r[t];return e}function _(r,e){if(!r)throw new Error(typeof e=="string"?e:e())}function xt(r,e,t){t===void 0&&(t=""),_(Wt(r,e),function(){return t+" Shapes "+r+" and "+e+" must match"})}function Sn(r){_(r!=null,function(){return"The input to the tensor constructor must be a non-null value."})}function Rn(r,e,t){if(e===void 0&&(e=[]),t===void 0&&(t=!1),e==null&&(e=[]),Array.isArray(r)||Ce(r)&&!t)for(var n=0;n<r.length;++n)Rn(r[n],e,t);else e.push(r);return e}function Y(r){if(r.length===0)return 1;for(var e=r[0],t=1;t<r.length;t++)e*=r[t];return e}function Wt(r,e){if(r===e)return!0;if(r==null||e==null||r.length!==e.length)return!1;for(var t=0;t<r.length;t++)if(r[t]!==e[t])return!1;return!0}function At(r){return r%1==0}function nl(r){if(Math.tanh!=null)return Math.tanh(r);if(r===1/0)return 1;if(r===-1/0)return-1;var e=Math.exp(2*r);return(e-1)/(e+1)}function So(r){var e=Math.ceil(Math.sqrt(r));return[e,Math.ceil(r/e)]}function kn(r,e){return e<=r.length?r:r+" ".repeat(e-r.length)}function Oi(r,e,t){return e===void 0&&(e=function(n){return 0}),new Promise(function(n,o){var a=0,i=function(){if(r())n();else{a++;var s=e(a);t!=null&&a>=t?o():setTimeout(i,s)}};i()})}function rl(r,e){for(var t=1,n=-1,o=0;o<r.length;++o)if(r[o]>=0)t*=r[o];else if(r[o]===-1){if(n!==-1)throw Error("Shapes can only have 1 implicit size. Found -1 at dim "+n+" and dim "+o);n=o}else if(r[o]<0)throw Error("Shapes can not be < 0. Found "+r[o]+" at dim "+o);if(n===-1){if(e>0&&e!==t)throw Error("Size("+e+") must match the product of shape "+r);return r}if(t===0)throw Error("Cannot infer the missing size in ["+r+"] when there are 0 elements");if(e%t!=0)throw Error("The implicit shape can't be a fractional number. Got "+e+" / "+t);var a=r.slice();return a[n]=e/t,a}function Nt(r,e){var t=e.length;return _((r=r==null?e.map(function(n,o){return o}):[].concat(r)).every(function(n){return n>=-t&&n<t}),function(){return"All values in axis param must be in range [-"+t+", "+t+") but got axis "+r}),_(r.every(function(n){return At(n)}),function(){return"All values in axis param must be integers but got axis "+r}),r.map(function(n){return n<0?t+n:n})}function fn(r,e){for(var t=[],n=[],o=e!=null&&Array.isArray(e)&&e.length===0,a=e==null||o?null:Nt(e,r).sort(),i=0,s=0;s<r.length;++s){if(a!=null){if(a[i]===s&&r[s]!==1)throw new Error("Can't squeeze axis "+s+" since its dim '"+r[s]+"' is not 1");(a[i]==null||a[i]>s)&&r[s]===1&&(t.push(r[s]),n.push(s)),a[i]<=s&&i++}r[s]!==1&&(t.push(r[s]),n.push(s))}return{newShape:t,keptDims:n}}function Jn(r,e){var t=null;if(r==null||r==="float32")t=new Float32Array(e);else if(r==="int32")t=new Int32Array(e);else{if(r!=="bool")throw new Error("Unknown data type "+r);t=new Uint8Array(e)}return t}function _r(r,e){var t=null;if(r==null||r==="float32")t=new Float32Array(e);else if(r==="int32")t=new Int32Array(e);else if(r==="bool")t=new Uint8Array(e);else{if(r!=="string")throw new Error("Unknown data type "+r);t=new Array(e)}return t}function ol(r,e){for(var t=0;t<r.length;t++){var n=r[t];if(isNaN(n)||!isFinite(n))throw Error("A tensor of type "+e+" being uploaded contains "+n+".")}}function al(r){return r==="bool"||r==="complex64"||r==="float32"||r==="int32"||r==="string"}function il(r,e){return e!=="complex64"&&(e!=="float32"||r==="complex64")&&(e!=="int32"||r==="float32"||r==="complex64")&&(e!=="bool"||r!=="bool")}function Ce(r){return r instanceof Float32Array||r instanceof Int32Array||r instanceof Uint8Array}function Bi(r){if(r==="float32"||r==="int32")return 4;if(r==="complex64")return 8;if(r==="bool")return 1;throw new Error("Unknown dtype "+r)}function sl(r){if(r==null)return 0;var e=0;return r.forEach(function(t){return e+=t.length}),e}function Ro(r){return typeof r=="string"||r instanceof String}function ul(r){return typeof r=="boolean"}function cl(r){return typeof r=="number"}function Qn(r){return Array.isArray(r)?Qn(r[0]):r instanceof Float32Array?"float32":r instanceof Int32Array||r instanceof Uint8Array?"int32":cl(r)?"float32":Ro(r)?"string":ul(r)?"bool":"float32"}function ko(r){return!!(r&&r.constructor&&r.call&&r.apply)}function Do(r,e){for(var t=e;t<r;++t)if(r%t==0)return t;return r}function Ee(r){var e=r.length;if(e<2)return[];var t=new Array(e-1);t[e-2]=r[e-1];for(var n=e-3;n>=0;--n)t[n]=t[n+1]*r[n+1];return t}function Li(r,e,t){if(e==="string")throw new Error("Cannot convert a string[] to a TypedArray");if(Array.isArray(r)&&(r=Rn(r)),t&&ol(r,e),function(a,i){return a instanceof Float32Array&&i==="float32"||a instanceof Int32Array&&i==="int32"||a instanceof Uint8Array&&i==="bool"}(r,e))return r;if(e==null||e==="float32"||e==="complex64")return new Float32Array(r);if(e==="int32")return new Int32Array(r);if(e==="bool"){for(var n=new Uint8Array(r.length),o=0;o<n.length;++o)Math.round(r[o])!==0&&(n[o]=1);return n}throw new Error("Unknown data type "+e)}function Wi(r,e){if(r.length===0)return e[0];var t=r.reduce(function(n,o){return n*o});if(t===0)return[];if(t!==e.length)throw new Error("["+r+"] does not match the input size.");return function n(o,a,i){var s=new Array;if(a.length===1)for(var u=a[0],c=0;c<u;c++)s[c]=i[o+c];else{u=a[0];var l=a.slice(1),h=l.reduce(function(f,d){return f*d});for(c=0;c<u;c++)s[c]=n(o+c*h,l,i)}return s}(0,r,e)}function Ui(r,e){for(var t=Zn(r,e),n=0;n<t.length;n++)t[n]=1;return t}function Zn(r,e){if(e==null||e==="float32"||e==="complex64")return new Float32Array(r);if(e==="int32")return new Int32Array(r);if(e==="bool")return new Uint8Array(r);throw new Error("Unknown data type "+e)}function _e(){return P().platform.now()}function zi(r){r.forEach(function(e){_(Number.isInteger(e)&&e>=0,function(){return"Tensor must have a shape comprised of positive integers but got shape ["+r+"]."})})}function ll(r,e){return e===void 0&&(e="utf-8"),e=e||"utf-8",P().platform.encode(r,e)}function Ir(r,e){return e===void 0&&(e="utf-8"),e=e||"utf-8",P().platform.decode(r,e)}function Vi(r,e,t){if(e===0)return 0;if(e===1)return r[0];for(var n=r[r.length-1],o=0;o<r.length-1;++o)n+=t[o]*r[o];return n}function hl(r,e,t){if(e===0)return[];if(e===1)return[r];for(var n=new Array(e),o=0;o<n.length-1;++o)n[o]=Math.floor(r/t[o]),r-=n[o]*t[o];return n[n.length-1]=r,n}var fl=function(){function r(e,t){this.backendTimer=e,this.logger=t,t==null&&(this.logger=new dl)}return r.prototype.profileKernel=function(e,t,n){var o,a=this,i=this.backendTimer.time(function(){o=n()});return o.forEach(function(s){s.data().then(function(u){(function(c,l,h){if(l!=="float32")return!1;for(var f=0;f<c.length;f++){var d=c[f];if(isNaN(d)||!isFinite(d))return console.warn("Found "+d+" in the result of '"+h+"'"),!0}})(u,s.dtype,e),i.then(function(c){var l="";c.getExtraProfileInfo!=null&&(l=c.getExtraProfileInfo()),a.logger.logKernelProfile(e,s,u,c.kernelMs,t,l)})})}),o},r}(),dl=function(){function r(){}return r.prototype.logKernelProfile=function(e,t,n,o,a,i){var s=typeof o=="number"?kn(o+"ms",9):o.error,u=kn(e,25),c=t.rank,l=t.size,h=kn(t.shape.toString(),14),f="";for(var d in a){var p=a[d].shape||t.shape,v=p.length;f+=d+": "+v+"D "+(v>0?p:"")+" "}console.log("%c"+u+"	%c"+s+"	%c"+c+"D "+h+"	%c"+l+"	%c"+f+"	%c"+i,"font-weight:bold","color:red","color:blue","color: orange","color: green","color: steelblue")},r}(),Gi=20,tr=3,Ao=7;function pl(r,e,t,n){var o=Ee(e),a=function(c,l,h,f){var d=Y(l),p=f[f.length-1],v=new Array(p).fill(0),g=l.length,m=h==="complex64"?nr(c):c;if(g>1)for(var y=0;y<d/p;y++)for(var b=y*p,x=0;x<p;x++)v[x]=Math.max(v[x],er(m[b+x],0,h).length);return v}(r,e,t,o),i=e.length,s=function c(l,h,f,d,p,v){v===void 0&&(v=!0);var g=f==="complex64"?2:1,m=h[0],y=h.length;if(y===0)return f==="complex64"?[er(nr(l)[0],0,f)]:f==="bool"?[Hi(l[0])]:[l[0].toString()];if(y===1){if(m>Gi){var b=tr*g,x=Array.from(l.slice(0,b)),w=Array.from(l.slice((m-tr)*g,m*g));return f==="complex64"&&(x=nr(x),w=nr(w)),["["+x.map(function(B,V){return er(B,p[V],f)}).join(", ")+", ..., "+w.map(function(B,V){return er(B,p[m-tr+V],f)}).join(", ")+"]"]}return["["+(f==="complex64"?nr(l):Array.from(l)).map(function(B,V){return er(B,p[V],f)}).join(", ")+"]"]}var C=h.slice(1),k=d.slice(1),R=d[0]*g,I=[];if(m>Gi){for(var S=0;S<tr;S++){var F=(T=S*R)+R;I.push.apply(I,c(l.slice(T,F),C,f,k,p,!1))}for(I.push("..."),S=m-tr;S<m;S++)F=(T=S*R)+R,I.push.apply(I,c(l.slice(T,F),C,f,k,p,S===m-1))}else for(S=0;S<m;S++){var T;F=(T=S*R)+R,I.push.apply(I,c(l.slice(T,F),C,f,k,p,S===m-1))}var L=y===2?",":"";for(I[0]="["+I[0]+L,S=1;S<I.length-1;S++)I[S]=" "+I[S]+L;var O=`,
`;for(S=2;S<y;S++)O+=`
`;return I[I.length-1]=" "+I[I.length-1]+"]"+(v?"":O),I}(r,e,t,o,a),u=["Tensor"];return n&&(u.push("  dtype: "+t),u.push("  rank: "+i),u.push("  shape: ["+e+"]"),u.push("  values:")),u.push(s.map(function(c){return"    "+c}).join(`
`)),u.join(`
`)}function er(r,e,t){return kn(Array.isArray(r)?parseFloat(r[0].toFixed(Ao))+" + "+parseFloat(r[1].toFixed(Ao))+"j":Ro(r)?"'"+r+"'":t==="bool"?Hi(r):parseFloat(r.toFixed(Ao)).toString(),e)}function Hi(r){return r===0?"false":"true"}function nr(r){for(var e=[],t=0;t<r.length;t+=2)e.push([r[t],r[t+1]]);return e}var rr=function(){function r(e,t,n){var o=this;if(this.dtype=t,this.shape=e.slice(),this.size=Y(e),n!=null){var a=n.length;_(a===this.size,function(){return"Length of values '"+a+"' does not match the size inferred by the shape '"+o.size+"'."})}if(t==="complex64")throw new Error("complex64 dtype TensorBuffers are not supported. Please create a TensorBuffer for the real and imaginary parts separately and call tf.complex(real, imag).");this.values=n||_r(t,this.size),this.strides=Ee(e)}return r.prototype.set=function(e){for(var t=this,n=[],o=1;o<arguments.length;o++)n[o-1]=arguments[o];n.length===0&&(n=[0]),_(n.length===this.rank,function(){return"The number of provided coordinates ("+n.length+") must match the rank ("+t.rank+")"});var a=this.locToIndex(n);this.values[a]=e},r.prototype.get=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];e.length===0&&(e=[0]);for(var n=0,o=0,a=e;o<a.length;o++){var i=a[o];if(i<0||i>=this.shape[n]){var s="Requested out of range element at "+e+".   Buffer shape="+this.shape;throw new Error(s)}n++}for(var u=e[e.length-1],c=0;c<e.length-1;++c)u+=this.strides[c]*e[c];return this.values[u]},r.prototype.locToIndex=function(e){if(this.rank===0)return 0;if(this.rank===1)return e[0];for(var t=e[e.length-1],n=0;n<e.length-1;++n)t+=this.strides[n]*e[n];return t},r.prototype.indexToLoc=function(e){if(this.rank===0)return[];if(this.rank===1)return[e];for(var t=new Array(this.shape.length),n=0;n<t.length-1;++n)t[n]=Math.floor(e/this.strides[n]),e-=t[n]*this.strides[n];return t[t.length-1]=e,t},Object.defineProperty(r.prototype,"rank",{get:function(){return this.shape.length},enumerable:!0,configurable:!0}),r.prototype.toTensor=function(){return Ie().makeTensor(this.values,this.shape,this.dtype)},r}(),Ie=null,M=null,qi=null,Et=function(){function r(e,t,n,o){this.kept=!1,this.isDisposedInternal=!1,this.shape=e.slice(),this.dtype=t||"float32",this.size=Y(e),this.strides=Ee(e),this.dataId=n,this.id=o,this.rankType=this.rank<5?this.rank.toString():"higher"}return r.prototype.flatten=function(){return this.throwIfDisposed(),this.as1D()},r.prototype.asScalar=function(){return this.throwIfDisposed(),_(this.size===1,function(){return"The array must have only 1 element."}),this.reshape([])},r.prototype.as1D=function(){return this.throwIfDisposed(),this.reshape([this.size])},r.prototype.as2D=function(e,t){return this.throwIfDisposed(),this.reshape([e,t])},r.prototype.as3D=function(e,t,n){return this.throwIfDisposed(),this.reshape([e,t,n])},r.prototype.as4D=function(e,t,n,o){return this.throwIfDisposed(),this.reshape([e,t,n,o])},r.prototype.as5D=function(e,t,n,o,a){return this.throwIfDisposed(),this.reshape([e,t,n,o,a])},r.prototype.asType=function(e){return this.throwIfDisposed(),M.cast(this,e)},Object.defineProperty(r.prototype,"rank",{get:function(){return this.shape.length},enumerable:!0,configurable:!0}),r.prototype.buffer=function(){return K(this,void 0,void 0,function(){var e;return $(this,function(t){switch(t.label){case 0:return[4,this.data()];case 1:return e=t.sent(),[2,M.buffer(this.shape,this.dtype,e)]}})})},r.prototype.bufferSync=function(){return M.buffer(this.shape,this.dtype,this.dataSync())},r.prototype.array=function(){return K(this,void 0,void 0,function(){var e;return $(this,function(t){switch(t.label){case 0:return[4,this.data()];case 1:return e=t.sent(),[2,Wi(this.shape,e)]}})})},r.prototype.arraySync=function(){return Wi(this.shape,this.dataSync())},r.prototype.data=function(){return K(this,void 0,void 0,function(){var e,t;return $(this,function(n){switch(n.label){case 0:return this.throwIfDisposed(),e=Ie().read(this.dataId),this.dtype!=="string"?[3,2]:[4,e];case 1:t=n.sent();try{return[2,t.map(function(o){return Ir(o)})]}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}n.label=2;case 2:return[2,e]}})})},r.prototype.dataSync=function(){this.throwIfDisposed();var e=Ie().readSync(this.dataId);if(this.dtype==="string")try{return e.map(function(t){return Ir(t)})}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}return e},r.prototype.bytes=function(){return K(this,void 0,void 0,function(){var e;return $(this,function(t){switch(t.label){case 0:return this.throwIfDisposed(),[4,Ie().read(this.dataId)];case 1:return e=t.sent(),this.dtype==="string"?[2,e]:[2,new Uint8Array(e.buffer)]}})})},r.prototype.dispose=function(){this.isDisposed||(Ie().disposeTensor(this),this.isDisposedInternal=!0)},Object.defineProperty(r.prototype,"isDisposed",{get:function(){return this.isDisposedInternal},enumerable:!0,configurable:!0}),r.prototype.throwIfDisposed=function(){if(this.isDisposed)throw new Error("Tensor is disposed.")},r.prototype.toFloat=function(){return this.asType("float32")},r.prototype.toInt=function(){return this.asType("int32")},r.prototype.toBool=function(){return this.asType("bool")},r.prototype.print=function(e){return e===void 0&&(e=!1),M.print(this,e)},r.prototype.reshape=function(e){return this.throwIfDisposed(),M.reshape(this,e)},r.prototype.reshapeAs=function(e){return this.throwIfDisposed(),this.reshape(e.shape)},r.prototype.expandDims=function(e){return e===void 0&&(e=0),M.expandDims(this,e)},r.prototype.cumsum=function(e,t,n){return e===void 0&&(e=0),t===void 0&&(t=!1),n===void 0&&(n=!1),M.cumsum(this,e,t,n)},r.prototype.squeeze=function(e){return this.throwIfDisposed(),M.squeeze(this,e)},r.prototype.clone=function(){return this.throwIfDisposed(),M.clone(this)},r.prototype.oneHot=function(e,t,n){return this.throwIfDisposed(),M.oneHot(this,e,t,n)},r.prototype.toString=function(e){return e===void 0&&(e=!1),pl(this.dataSync(),this.shape,this.dtype,e)},r.prototype.tile=function(e){return this.throwIfDisposed(),M.tile(this,e)},r.prototype.gather=function(e,t){return t===void 0&&(t=0),this.throwIfDisposed(),M.gather(this,e,t)},r.prototype.matMul=function(e,t,n){return t===void 0&&(t=!1),n===void 0&&(n=!1),this.throwIfDisposed(),M.matMul(this,e,t,n)},r.prototype.dot=function(e){return this.throwIfDisposed(),M.dot(this,e)},r.prototype.norm=function(e,t,n){return e===void 0&&(e="euclidean"),t===void 0&&(t=null),n===void 0&&(n=!1),this.throwIfDisposed(),M.norm(this,e,t,n)},r.prototype.slice=function(e,t){return this.throwIfDisposed(),M.slice(this,e,t)},r.prototype.reverse=function(e){return this.throwIfDisposed(),M.reverse(this,e)},r.prototype.concat=function(e,t){return t===void 0&&(t=0),this.throwIfDisposed(),e instanceof r&&(e=[e]),M.concat([this].concat(e),t)},r.prototype.split=function(e,t){return t===void 0&&(t=0),this.throwIfDisposed(),M.split(this,e,t)},r.prototype.stack=function(e,t){return t===void 0&&(t=0),M.stack([this,e],t)},r.prototype.unstack=function(e){return e===void 0&&(e=0),M.unstack(this,e)},r.prototype.pad=function(e,t){return t===void 0&&(t=0),M.pad(this,e,t)},r.prototype.batchNormalization=function(e,t,n,o,a){return n===void 0&&(n=.001),qi("tf.batchNormalization() is going away. Use tf.batchNorm() instead, and note the positional argument change of scale, offset, and varianceEpsilon"),this.batchNorm(e,t,a,o,n)},r.prototype.batchNorm=function(e,t,n,o,a){return a===void 0&&(a=.001),this.throwIfDisposed(),M.batchNorm(this,e,t,n,o,a)},r.prototype.all=function(e,t){return e===void 0&&(e=null),t===void 0&&(t=!1),this.throwIfDisposed(),M.all(this,e,t)},r.prototype.any=function(e,t){return e===void 0&&(e=null),t===void 0&&(t=!1),this.throwIfDisposed(),M.any(this,e,t)},r.prototype.logSumExp=function(e,t){return e===void 0&&(e=null),t===void 0&&(t=!1),this.throwIfDisposed(),M.logSumExp(this,e,t)},r.prototype.sum=function(e,t){return e===void 0&&(e=null),t===void 0&&(t=!1),this.throwIfDisposed(),M.sum(this,e,t)},r.prototype.prod=function(e,t){return e===void 0&&(e=null),t===void 0&&(t=!1),this.throwIfDisposed(),M.prod(this,e,t)},r.prototype.mean=function(e,t){return e===void 0&&(e=null),t===void 0&&(t=!1),this.throwIfDisposed(),M.mean(this,e,t)},r.prototype.min=function(e,t){return e===void 0&&(e=null),t===void 0&&(t=!1),this.throwIfDisposed(),M.min(this,e,t)},r.prototype.max=function(e,t){return e===void 0&&(e=null),t===void 0&&(t=!1),this.throwIfDisposed(),M.max(this,e,t)},r.prototype.argMin=function(e){return e===void 0&&(e=null),this.throwIfDisposed(),M.argMin(this,e)},r.prototype.argMax=function(e){return e===void 0&&(e=null),this.throwIfDisposed(),M.argMax(this,e)},r.prototype.cast=function(e){return this.throwIfDisposed(),M.cast(this,e)},r.prototype.add=function(e){return this.throwIfDisposed(),M.add(this,e)},r.prototype.addStrict=function(e){return this.throwIfDisposed(),M.addStrict(this,e)},r.prototype.atan2=function(e){return this.throwIfDisposed(),M.atan2(this,e)},r.prototype.sub=function(e){return this.throwIfDisposed(),M.sub(this,e)},r.prototype.subStrict=function(e){return this.throwIfDisposed(),M.subStrict(this,e)},r.prototype.pow=function(e){return this.throwIfDisposed(),M.pow(this,e)},r.prototype.powStrict=function(e){return this.throwIfDisposed(),M.powStrict(this,e)},r.prototype.mul=function(e){return this.throwIfDisposed(),M.mul(this,e)},r.prototype.mulStrict=function(e){return this.throwIfDisposed(),M.mulStrict(this,e)},r.prototype.div=function(e){return this.throwIfDisposed(),M.div(this,e)},r.prototype.divNoNan=function(e){return this.throwIfDisposed(),M.divNoNan(this,e)},r.prototype.floorDiv=function(e){return this.throwIfDisposed(),M.floorDiv(this,e)},r.prototype.divStrict=function(e){return this.throwIfDisposed(),M.divStrict(this,e)},r.prototype.minimum=function(e){return this.throwIfDisposed(),M.minimum(this,e)},r.prototype.minimumStrict=function(e){return this.throwIfDisposed(),M.minimumStrict(this,e)},r.prototype.maximum=function(e){return this.throwIfDisposed(),M.maximum(this,e)},r.prototype.maximumStrict=function(e){return this.throwIfDisposed(),M.maximumStrict(this,e)},r.prototype.mod=function(e){return this.throwIfDisposed(),M.mod(this,e)},r.prototype.modStrict=function(e){return this.throwIfDisposed(),M.modStrict(this,e)},r.prototype.squaredDifferenceStrict=function(e){return this.throwIfDisposed(),M.squaredDifferenceStrict(this,e)},r.prototype.transpose=function(e){return this.throwIfDisposed(),M.transpose(this,e)},r.prototype.notEqual=function(e){return this.throwIfDisposed(),M.notEqual(this,e)},r.prototype.notEqualStrict=function(e){return this.throwIfDisposed(),M.notEqualStrict(this,e)},r.prototype.less=function(e){return this.throwIfDisposed(),M.less(this,e)},r.prototype.lessStrict=function(e){return this.throwIfDisposed(),M.lessStrict(this,e)},r.prototype.equal=function(e){return this.throwIfDisposed(),M.equal(this,e)},r.prototype.equalStrict=function(e){return this.throwIfDisposed(),M.equalStrict(this,e)},r.prototype.lessEqual=function(e){return this.throwIfDisposed(),M.lessEqual(this,e)},r.prototype.lessEqualStrict=function(e){return this.throwIfDisposed(),M.lessEqualStrict(this,e)},r.prototype.greater=function(e){return this.throwIfDisposed(),M.greater(this,e)},r.prototype.greaterStrict=function(e){return this.throwIfDisposed(),M.greaterStrict(this,e)},r.prototype.greaterEqual=function(e){return this.throwIfDisposed(),M.greaterEqual(this,e)},r.prototype.greaterEqualStrict=function(e){return this.throwIfDisposed(),M.greaterEqualStrict(this,e)},r.prototype.logicalAnd=function(e){return this.throwIfDisposed(),M.logicalAnd(this,e)},r.prototype.logicalOr=function(e){return this.throwIfDisposed(),M.logicalOr(this,e)},r.prototype.logicalNot=function(){return this.throwIfDisposed(),M.logicalNot(this)},r.prototype.logicalXor=function(e){return this.throwIfDisposed(),M.logicalXor(this,e)},r.prototype.where=function(e,t){return this.throwIfDisposed(),M.where(e,this,t)},r.prototype.neg=function(){return this.throwIfDisposed(),M.neg(this)},r.prototype.ceil=function(){return this.throwIfDisposed(),M.ceil(this)},r.prototype.floor=function(){return this.throwIfDisposed(),M.floor(this)},r.prototype.sign=function(){return this.throwIfDisposed(),M.sign(this)},r.prototype.isNaN=function(){return this.throwIfDisposed(),M.isNaN(this)},r.prototype.isInf=function(){return this.throwIfDisposed(),M.isInf(this)},r.prototype.isFinite=function(){return this.throwIfDisposed(),M.isFinite(this)},r.prototype.exp=function(){return this.throwIfDisposed(),M.exp(this)},r.prototype.expm1=function(){return this.throwIfDisposed(),M.expm1(this)},r.prototype.log=function(){return this.throwIfDisposed(),M.log(this)},r.prototype.log1p=function(){return this.throwIfDisposed(),M.log1p(this)},r.prototype.sqrt=function(){return this.throwIfDisposed(),M.sqrt(this)},r.prototype.rsqrt=function(){return this.throwIfDisposed(),M.rsqrt(this)},r.prototype.square=function(){return this.throwIfDisposed(),M.square(this)},r.prototype.reciprocal=function(){return this.throwIfDisposed(),M.reciprocal(this)},r.prototype.abs=function(){return this.throwIfDisposed(),M.abs(this)},r.prototype.clipByValue=function(e,t){return this.throwIfDisposed(),M.clipByValue(this,e,t)},r.prototype.relu=function(){return this.throwIfDisposed(),M.relu(this)},r.prototype.relu6=function(){return this.throwIfDisposed(),M.relu6(this)},r.prototype.elu=function(){return this.throwIfDisposed(),M.elu(this)},r.prototype.selu=function(){return this.throwIfDisposed(),M.selu(this)},r.prototype.leakyRelu=function(e){return e===void 0&&(e=.2),this.throwIfDisposed(),M.leakyRelu(this,e)},r.prototype.prelu=function(e){return this.throwIfDisposed(),M.prelu(this,e)},r.prototype.sigmoid=function(){return this.throwIfDisposed(),M.sigmoid(this)},r.prototype.logSigmoid=function(){return this.throwIfDisposed(),M.logSigmoid(this)},r.prototype.softplus=function(){return this.throwIfDisposed(),M.softplus(this)},r.prototype.zerosLike=function(){return this.throwIfDisposed(),M.zerosLike(this)},r.prototype.onesLike=function(){return this.throwIfDisposed(),M.onesLike(this)},r.prototype.sin=function(){return this.throwIfDisposed(),M.sin(this)},r.prototype.cos=function(){return this.throwIfDisposed(),M.cos(this)},r.prototype.tan=function(){return this.throwIfDisposed(),M.tan(this)},r.prototype.asin=function(){return this.throwIfDisposed(),M.asin(this)},r.prototype.acos=function(){return this.throwIfDisposed(),M.acos(this)},r.prototype.atan=function(){return this.throwIfDisposed(),M.atan(this)},r.prototype.sinh=function(){return this.throwIfDisposed(),M.sinh(this)},r.prototype.cosh=function(){return this.throwIfDisposed(),M.cosh(this)},r.prototype.tanh=function(){return this.throwIfDisposed(),M.tanh(this)},r.prototype.asinh=function(){return this.throwIfDisposed(),M.asinh(this)},r.prototype.acosh=function(){return this.throwIfDisposed(),M.acosh(this)},r.prototype.atanh=function(){return this.throwIfDisposed(),M.atanh(this)},r.prototype.erf=function(){return this.throwIfDisposed(),M.erf(this)},r.prototype.round=function(){return this.throwIfDisposed(),M.round(this)},r.prototype.step=function(e){return e===void 0&&(e=0),this.throwIfDisposed(),M.step(this,e)},r.prototype.softmax=function(e){return e===void 0&&(e=-1),this.throwIfDisposed(),M.softmax(this,e)},r.prototype.logSoftmax=function(e){return e===void 0&&(e=-1),this.throwIfDisposed(),M.logSoftmax(this,e)},r.prototype.resizeBilinear=function(e,t){return t===void 0&&(t=!1),this.throwIfDisposed(),M.image.resizeBilinear(this,e,t)},r.prototype.resizeNearestNeighbor=function(e,t){return t===void 0&&(t=!1),this.throwIfDisposed(),M.image.resizeNearestNeighbor(this,e,t)},r.prototype.conv1d=function(e,t,n,o,a,i){return o===void 0&&(o="NWC"),a===void 0&&(a=1),this.throwIfDisposed(),M.conv1d(this,e,t,n,o,a,i)},r.prototype.conv2d=function(e,t,n,o,a,i){return o===void 0&&(o="NHWC"),a===void 0&&(a=[1,1]),this.throwIfDisposed(),M.conv2d(this,e,t,n,o,a,i)},r.prototype.conv2dTranspose=function(e,t,n,o,a){return this.throwIfDisposed(),M.conv2dTranspose(this,e,t,n,o,a)},r.prototype.depthwiseConv2D=function(e,t,n,o,a,i){return o===void 0&&(o="NHWC"),a===void 0&&(a=[1,1]),this.throwIfDisposed(),M.depthwiseConv2d(this,e,t,n,o,a,i)},r.prototype.separableConv2d=function(e,t,n,o,a,i){return a===void 0&&(a=[1,1]),i===void 0&&(i="NHWC"),this.throwIfDisposed(),M.separableConv2d(this,e,t,n,o,a,i)},r.prototype.avgPool=function(e,t,n,o){return this.throwIfDisposed(),M.avgPool(this,e,t,n,o)},r.prototype.maxPool=function(e,t,n,o){return this.throwIfDisposed(),M.maxPool(this,e,t,n,o)},r.prototype.localResponseNormalization=function(e,t,n,o){return e===void 0&&(e=5),t===void 0&&(t=1),n===void 0&&(n=1),o===void 0&&(o=.5),M.localResponseNormalization(this,e,t,n,o)},r.prototype.pool=function(e,t,n,o,a){return this.throwIfDisposed(),M.pool(this,e,t,n,o,a)},r.prototype.variable=function(e,t,n){return e===void 0&&(e=!0),this.throwIfDisposed(),Ie().makeVariable(this,e,t,n)},r.prototype.unsortedSegmentSum=function(e,t){return this.throwIfDisposed(),M.unsortedSegmentSum(this,e,t)},r.prototype.batchToSpaceND=function(e,t){return this.throwIfDisposed(),M.batchToSpaceND(this,e,t)},r.prototype.spaceToBatchND=function(e,t){return this.throwIfDisposed(),M.spaceToBatchND(this,e,t)},r.prototype.topk=function(e,t){return e===void 0&&(e=1),t===void 0&&(t=!0),this.throwIfDisposed(),M.topk(this,e,t)},r.prototype.stridedSlice=function(e,t,n,o,a,i,s,u){return o===void 0&&(o=0),a===void 0&&(a=0),i===void 0&&(i=0),s===void 0&&(s=0),u===void 0&&(u=0),this.throwIfDisposed(),M.stridedSlice(this,e,t,n,o,a,i,s,u)},r.prototype.depthToSpace=function(e,t){return this.throwIfDisposed(),M.depthToSpace(this,e,t)},r.prototype.fft=function(){return this.throwIfDisposed(),M.spectral.fft(this)},r.prototype.ifft=function(){return this.throwIfDisposed(),M.spectral.ifft(this)},r.prototype.rfft=function(){return this.throwIfDisposed(),M.spectral.rfft(this)},r.prototype.irfft=function(){return this.throwIfDisposed(),M.spectral.irfft(this)},r}();Object.defineProperty(Et,Symbol.hasInstance,{value:function(r){return!!r&&r.dataId!=null&&r.shape!=null&&r.dtype!=null}});var ji,To,Fo,No,Mo,Dn=function(r){function e(t,n,o,a){var i=r.call(this,t.shape,t.dtype,t.dataId,a)||this;return i.trainable=n,i.name=o,i}return qt(e,r),e.prototype.assign=function(t){if(t.dtype!==this.dtype)throw new Error("dtype of the new value ("+t.dtype+") and previous value ("+this.dtype+") must match");if(!Wt(t.shape,this.shape))throw new Error("shape of the new value ("+t.shape+") and previous value ("+this.shape+") must match");Ie().disposeTensor(this),this.dataId=t.dataId,Ie().incRef(this,null)},e.prototype.dispose=function(){Ie().disposeVariable(this),this.isDisposedInternal=!0},e}(Et);Object.defineProperty(Dn,Symbol.hasInstance,{value:function(r){return r instanceof Et&&r.assign!=null&&r.assign instanceof Function}}),function(r){r.R0="R0",r.R1="R1",r.R2="R2",r.R3="R3",r.R4="R4",r.R5="R5",r.R6="R6"}(ji||(ji={})),function(r){r.float32="float32",r.int32="int32",r.bool="int32",r.complex64="complex64"}(To||(To={})),function(r){r.float32="float32",r.int32="int32",r.bool="bool",r.complex64="complex64"}(Fo||(Fo={})),function(r){r.float32="float32",r.int32="float32",r.bool="float32",r.complex64="complex64"}(No||(No={})),function(r){r.float32="complex64",r.int32="complex64",r.bool="complex64",r.complex64="complex64"}(Mo||(Mo={}));var vl={float32:No,int32:To,bool:Fo,complex64:Mo};function Vt(r,e){if(r==="string"||e==="string"){if(r==="string"&&e==="string")return"string";throw new Error("Can not upcast "+r+" with "+e)}return vl[r][e]}function Po(r){return Vt(r,"int32")}function _t(r,e){if(r.dtype===e.dtype)return[r,e];var t=Vt(r.dtype,e.dtype);return[r.cast(t),e.cast(t)]}function gl(r,e){_(r.dtype===e.dtype,function(){return"The dtypes of the first("+r.dtype+") and second("+e.dtype+") input must match"})}function Xi(r){var e=[];return function t(n,o,a){if(n!=null){if(n instanceof Et)return void o.push(n);if(i=n,!(!Array.isArray(i)&&typeof i!="object")){var i,s=n;for(var u in s){var c=s[u];a.has(c)||(a.add(c),t(c,o,a))}}}}(r,e,new Set),e}var Oo,Ki=function(){function r(){this.registeredVariables={},this.nextTapeNodeId=0,this.numBytes=0,this.numTensors=0,this.numStringTensors=0,this.numDataBuffers=0,this.gradientDepth=0,this.kernelDepth=0,this.scopeStack=[],this.numDataMovesStack=[],this.nextScopeId=0,this.tensorInfo=new WeakMap,this.profiling=!1,this.activeProfile={newBytes:0,newTensors:0,peakBytes:0,kernels:[],result:null}}return r.prototype.dispose=function(){for(var e in this.registeredVariables)this.registeredVariables[e].dispose()},r}(),ml=function(){function r(e){this.ENV=e,this.registry={},this.registryFactory={},this.pendingBackendInitId=0,this.state=new Ki}return r.prototype.ready=function(){return K(this,void 0,void 0,function(){var e,t,n;return $(this,function(o){switch(o.label){case 0:if(this.pendingBackendInit!=null)return[2,this.pendingBackendInit.then(function(){})];if(this.backendInstance!=null)return[2];e=this.getSortedBackends(),t=0,o.label=1;case 1:return t<e.length?(n=e[t],[4,this.initializeBackend(n).success]):[3,5];case 2:return o.sent()?[4,this.setBackend(n)]:[3,4];case 3:return o.sent(),[2];case 4:return t++,[3,1];case 5:throw new Error("Could not initialize any backends, all backend initializations failed.")}})})},Object.defineProperty(r.prototype,"backend",{get:function(){if(this.pendingBackendInit!=null)throw new Error("Backend '"+this.backendName+"' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods");if(this.backendInstance==null){var e=this.initializeBackendsAndReturnBest(),t=e.name;if(e.asyncInit)throw new Error("The highest priority backend '"+t+"' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods");this.setBackend(t)}return this.backendInstance},enumerable:!0,configurable:!0}),r.prototype.backendNames=function(){return Object.keys(this.registryFactory)},r.prototype.findBackend=function(e){return!(e in this.registry)&&(!(e in this.registryFactory)||this.initializeBackend(e).asyncInit)?null:this.registry[e]},r.prototype.findBackendFactory=function(e){return e in this.registryFactory?this.registryFactory[e].factory:null},r.prototype.registerBackend=function(e,t,n){return n===void 0&&(n=1),e in this.registryFactory?(console.warn(e+" backend was already registered. Reusing existing backend factory."),!1):(this.registryFactory[e]={factory:t,priority:n},!0)},r.prototype.setBackend=function(e){return K(this,void 0,void 0,function(){var t,n,o;return $(this,function(a){switch(a.label){case 0:if(this.registryFactory[e]==null)throw new Error("Backend name '"+e+"' not found in registry");return this.backendName=e,this.registry[e]!=null?[3,4]:(this.backendInstance=null,t=this.initializeBackend(e),n=t.success,t.asyncInit?[4,n]:[3,2]);case 1:return o=a.sent(),[3,3];case 2:o=n,a.label=3;case 3:if(!o)return[2,!1];a.label=4;case 4:return this.backendInstance=this.registry[e],this.setupRegisteredKernels(),this.profiler=new fl(this.backendInstance),[2,!0]}})})},r.prototype.setupRegisteredKernels=function(){var e=this;Fi(this.backendName).forEach(function(t){t.setupFunc!=null&&t.setupFunc(e.backendInstance)})},r.prototype.disposeRegisteredKernels=function(e){var t=this;Fi(e).forEach(function(n){n.disposeFunc!=null&&n.disposeFunc(t.registry[e])})},r.prototype.initializeBackend=function(e){var t=this,n=this.registryFactory[e];if(n==null)throw new Error("Cannot initialize backend "+e+", no registration found.");try{var o=n.factory();if(Promise.resolve(o)===o){var a=++this.pendingBackendInitId,i=o.then(function(s){return!(a<t.pendingBackendInitId)&&(t.registry[e]=s,t.pendingBackendInit=null,!0)}).catch(function(s){return!(a<t.pendingBackendInitId)&&(t.pendingBackendInit=null,console.warn("Initialization of backend "+e+" failed"),console.warn(s.stack||s.message),!1)});return this.pendingBackendInit=i,{success:i,asyncInit:!0}}return this.registry[e]=o,{success:!0,asyncInit:!1}}catch(s){return console.warn("Initialization of backend "+e+" failed"),console.warn(s.stack||s.message),{success:!1,asyncInit:!1}}},r.prototype.removeBackend=function(e){if(!(e in this.registryFactory))throw new Error(e+" backend not found in registry");this.backendName===e&&this.pendingBackendInit!=null&&this.pendingBackendInitId++,e in this.registry&&(this.disposeRegisteredKernels(e),this.registry[e].dispose(),delete this.registry[e]),delete this.registryFactory[e],this.backendName===e&&(this.pendingBackendInit=null,this.backendName=null,this.backendInstance=null)},r.prototype.getSortedBackends=function(){var e=this;if(Object.keys(this.registryFactory).length===0)throw new Error("No backend found in registry.");return Object.keys(this.registryFactory).sort(function(t,n){return e.registryFactory[n].priority-e.registryFactory[t].priority})},r.prototype.initializeBackendsAndReturnBest=function(){for(var e=this.getSortedBackends(),t=0;t<e.length;t++){var n=e[t],o=this.initializeBackend(n),a=o.success,i=o.asyncInit;if(i||a)return{name:n,asyncInit:i}}throw new Error("Could not initialize any backends, all backend initializations failed.")},r.prototype.moveData=function(e,t){var n=this.state.tensorInfo.get(t),o=n.backend,a=this.readSync(t);o.disposeData(t),n.backend=e,e.move(t,a,n.shape,n.dtype),this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack[this.state.numDataMovesStack.length-1]++},r.prototype.tidy=function(e,t){var n,o=this,a=null;if(t==null){if(typeof e!="function")throw new Error("Please provide a function to tidy()");t=e}else{if(typeof e!="string"&&!(e instanceof String))throw new Error("When calling with two arguments, the first argument to tidy() must be a string");if(typeof t!="function")throw new Error("When calling with two arguments, the 2nd argument to tidy() must be a function");a=e}return this.scopedRun(function(){return o.startScope(a)},function(){return o.endScope(n)},function(){return(n=t())instanceof Promise&&console.error("Cannot return a Promise inside of tidy."),n})},r.prototype.scopedRun=function(e,t,n){e();try{var o=n();return t(),o}catch(a){throw t(),a}},r.prototype.nextTensorId=function(){return r.nextTensorId++},r.prototype.nextVariableId=function(){return r.nextVariableId++},r.prototype.clone=function(e){var t=this.makeTensorFromDataId(e.dataId,e.shape,e.dtype),n={x:e};return this.addTapeNode(this.state.activeScope.name,n,[t],function(o){return{x:function(){return o.toFloat()}}},[]),t},r.prototype.runKernel=function(e,t,n,o,a){return this.runKernelFunc(null,t,null,e,n,o,a)},r.prototype.shouldCheckForMemLeaks=function(){return this.ENV.getBool("IS_TEST")},r.prototype.checkKernelForMemLeak=function(e,t,n){var o=this.backend.numDataIds(),a=0;n.forEach(function(u){a+=u.dtype==="complex64"?3:1});var i=this.state.numDataMovesStack[this.state.numDataMovesStack.length-1],s=o-t-a-i;if(s>0)throw new Error("Backend '"+this.backendName+"' has an internal memory leak ("+s+" data ids) after running '"+e+"'")},r.prototype.runKernelFunc=function(e,t,n,o,a,i,s){var u,c=this;i===void 0&&(i=[]),s===void 0&&(s=[]);var l=[],h=this.isTapeOn();o==null&&(o=this.state.activeScope!=null?this.state.activeScope.name:"");var f,d=function(y){h&&(l=y.map(function(b){return c.keep(c.clone(b))}))},p=this.state.numBytes,v=this.state.numTensors;this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack.push(0);var g,m=Ti(o,this.backendName);return f=m!=null?function(){var y=c.backend.numDataIds();g=m.kernelFunc({inputs:t,attrs:a,backend:c.backend});var b=Array.isArray(g)?g:[g];c.shouldCheckForMemLeaks()&&c.checkKernelForMemLeak(o,y,b);var x=b.map(function(C){var k=C.dataId,R=C.shape,I=C.dtype;return c.makeTensorFromDataId(k,R,I)}),w=x.filter(function(C,k){return s[k]});return d((i||[]).slice().concat(w)),x}:function(){var y=c.backend.numDataIds();g=c.tidy(function(){return e(c.backend,d)});var b=Array.isArray(g)?g:[g];return c.shouldCheckForMemLeaks()&&c.checkKernelForMemLeak(o,y,b),b},this.scopedRun(function(){return c.state.kernelDepth++},function(){return c.state.kernelDepth--},function(){u=c.ENV.getBool("DEBUG")?c.profiler.profileKernel(o,t,function(){return f()}):f()}),h&&this.addTapeNode(o,t,u,n,l),this.state.profiling&&this.state.activeProfile.kernels.push({name:o,bytesAdded:this.state.numBytes-p,totalBytesSnapshot:this.state.numBytes,tensorsAdded:this.state.numTensors-v,totalTensorsSnapshot:this.state.numTensors,inputShapes:Object.keys(t).map(function(y){return t[y].shape}),outputShapes:u.map(function(y){return y.shape})}),Array.isArray(g)?u:u[0]},r.prototype.makeTensor=function(e,t,n,o){if(e==null)throw new Error("Values passed to engine.makeTensor() are null");n=n||"float32",o=o||this.backend;var a=e;n==="string"&&Ro(e[0])&&(a=e.map(function(l){return ll(l)}));var i=o.write(a,t,n),s=new Et(t,n,i,this.nextTensorId());if(this.incRef(s,o),n==="string"){var u=this.state.tensorInfo.get(i),c=sl(a);this.state.numBytes+=c-u.bytes,u.bytes=c}return s},r.prototype.makeTensorFromDataId=function(e,t,n,o){var a=new Et(t,n=n||"float32",e,this.nextTensorId());return this.incRef(a,o),a},r.prototype.makeVariable=function(e,t,n,o){t===void 0&&(t=!0),n=n||this.nextVariableId().toString(),o!=null&&o!==e.dtype&&(e=e.asType(o));var a=new Dn(e,t,n,this.nextTensorId());if(this.state.registeredVariables[a.name]!=null)throw new Error("Variable with name "+a.name+" was already registered");return this.state.registeredVariables[a.name]=a,this.incRef(a,this.backend),a},r.prototype.incRef=function(e,t){var n=this.state.tensorInfo.has(e.dataId)?this.state.tensorInfo.get(e.dataId).refCount:0;if(this.state.numTensors++,e.dtype==="string"&&this.state.numStringTensors++,n===0){this.state.numDataBuffers++;var o=0;e.dtype!=="complex64"&&e.dtype!=="string"&&(o=e.size*Bi(e.dtype)),this.state.tensorInfo.set(e.dataId,{backend:t||this.backend,dtype:e.dtype,shape:e.shape,bytes:o,refCount:0}),this.state.numBytes+=o}this.state.tensorInfo.get(e.dataId).refCount++,e instanceof Dn||this.track(e)},r.prototype.disposeTensor=function(e){if(this.state.tensorInfo.has(e.dataId)){this.state.numTensors--,e.dtype==="string"&&this.state.numStringTensors--;var t=this.state.tensorInfo.get(e.dataId);t.refCount<=1?(e.dtype!=="complex64"&&(this.state.numBytes-=t.bytes),this.state.numDataBuffers--,t.backend.disposeData(e.dataId),this.state.tensorInfo.delete(e.dataId)):this.state.tensorInfo.get(e.dataId).refCount--}},r.prototype.disposeVariables=function(){for(var e in this.state.registeredVariables){var t=this.state.registeredVariables[e];this.disposeVariable(t)}},r.prototype.disposeVariable=function(e){this.disposeTensor(e),this.state.registeredVariables[e.name]!=null&&delete this.state.registeredVariables[e.name]},r.prototype.memory=function(){var e=this.backend.memory();return e.numTensors=this.state.numTensors,e.numDataBuffers=this.state.numDataBuffers,e.numBytes=this.state.numBytes,this.state.numStringTensors>0&&(e.unreliable=!0,e.reasons==null&&(e.reasons=[]),e.reasons.push("Memory usage by string tensors is approximate (2 bytes per character)")),e},r.prototype.profile=function(e){return K(this,void 0,void 0,function(){var t,n;return $(this,function(o){return this.state.profiling=!0,t=this.state.numBytes,n=this.state.numTensors,this.state.activeProfile.kernels=[],this.state.activeProfile.result=e(),this.state.profiling=!1,this.state.activeProfile.peakBytes=Math.max.apply(Math,this.state.activeProfile.kernels.map(function(a){return a.totalBytesSnapshot})),this.state.activeProfile.newBytes=this.state.numBytes-t,this.state.activeProfile.newTensors=this.state.numTensors-n,[2,this.state.activeProfile]})})},r.prototype.isTapeOn=function(){return this.state.gradientDepth>0&&this.state.kernelDepth===0},r.prototype.addTapeNode=function(e,t,n,o,a){var i=this,s={id:this.state.nextTapeNodeId++,kernelName:e,inputs:t,outputs:n,saved:a},u=Zc(e);u!=null&&(o=u.gradFunc),o!=null&&(s.gradient=function(c){return c=c.map(function(l,h){if(l==null){var f=n[h],d=Zn(f.size,f.dtype);return i.makeTensor(d,f.shape,f.dtype)}return l}),o(c.length>1?c:c[0],a)}),this.state.activeTape.push(s)},r.prototype.keep=function(e){return e.kept=!0,e},r.prototype.startTape=function(){this.state.gradientDepth===0&&(this.state.activeTape=[]),this.state.gradientDepth++},r.prototype.endTape=function(){this.state.gradientDepth--},r.prototype.startScope=function(e){var t={track:[],name:"unnamed scope",id:this.state.nextScopeId++};e&&(t.name=e),this.state.scopeStack.push(t),this.state.activeScope=t},r.prototype.endScope=function(e){for(var t=this,n=Xi(e),o=new Set(n.map(function(u){return u.id})),a=0;a<this.state.activeScope.track.length;a++){var i=this.state.activeScope.track[a];i.kept||o.has(i.id)||i.dispose()}var s=this.state.scopeStack.pop();this.state.activeScope=this.state.scopeStack.length===0?null:this.state.scopeStack[this.state.scopeStack.length-1],n.forEach(function(u){u.kept||u.scopeId!==s.id||t.track(u)})},r.prototype.gradients=function(e,t,n,o){var a=this;if(o===void 0&&(o=!1),_(t.length>0,function(){return"gradients() received an empty list of xs."}),n!=null&&n.dtype!=="float32")throw new Error("dy must have 'float32' dtype, but has '"+n.dtype+"'");var i=this.scopedRun(function(){return a.startTape()},function(){return a.endTape()},function(){return a.tidy("forward",e)});_(i instanceof Et,function(){return"The result y returned by f() must be a tensor."});var s=function(u,c,l){for(var h={},f={},d=0;d<c.length;d++)h[c[d].id]=!0;for(d=0;d<u.length;d++){var p=(C=u[d]).inputs;for(var v in p){for(var g=p[v],m=!1,y=0;y<c.length;y++)if(h[g.id]){C.outputs.forEach(function(S){return h[S.id]=!0}),m=!0,f[C.id]=!0;break}if(m)break}}var b={};b[l.id]=!0;var x={};for(d=u.length-1;d>=0;d--)for(p=(C=u[d]).inputs,y=0;y<C.outputs.length;y++)if(b[C.outputs[y].id]){for(var v in p)b[p[v].id]=!0,x[C.id]=!0;break}var w=[];for(d=0;d<u.length;d++){var C;if(f[(C=u[d]).id]&&x[C.id]){var k={};for(var v in C.inputs){var R=C.inputs[v];h[R.id]&&(k[v]=R)}var I=Object.assign({},C);I.inputs=k,I.outputs=C.outputs,w.push(I)}}return w}(this.state.activeTape,t,i);if(!o&&s.length===0&&t.length>0)throw new Error("Cannot compute gradient of y=f(x) with respect to x. Make sure that the f you passed encloses all operations that lead from x to y.");return this.tidy("backward",function(){var u,c,l={};l[i.id]=n??(u=i.shape,c=Ui(Y(u),"float32"),A.makeTensor(c,u,"float32")),function(f,d,p){for(var v=function(m){var y=d[m],b=[];if(y.outputs.forEach(function(k){var R=f[k.id];R!=null?b.push(R):b.push(null)}),y.gradient==null)throw new Error("Cannot compute gradient: gradient function not found for "+y.kernelName+".");var x=y.gradient(b),w=function(k){if(!(k in x))throw new Error("Cannot backprop through input "+k+". Available gradients found: "+Object.keys(x)+".");var R=p(function(){return x[k]()});if(R.dtype!=="float32")throw new Error("Error in gradient for op "+y.kernelName+". The gradient of input "+k+" must have 'float32' dtype, but has '"+R.dtype+"'");var I=y.inputs[k];if(!Wt(R.shape,I.shape))throw new Error("Error in gradient for op "+y.kernelName+". The gradient of input '"+k+"' has shape '"+R.shape+"', which does not match the shape of the input '"+I.shape+"'");if(f[I.id]==null)f[I.id]=R;else{var S=f[I.id];f[I.id]=S.add(R),S.dispose()}};for(var C in y.inputs)w(C)},g=d.length-1;g>=0;g--)v(g)}(l,s,function(f){return a.tidy(f)});var h=t.map(function(f){return l[f.id]});return a.state.gradientDepth===0&&(a.state.activeTape.forEach(function(f){for(var d=0,p=f.saved;d<p.length;d++)p[d].dispose()}),a.state.activeTape=null),{value:i,grads:h}})},r.prototype.customGrad=function(e){var t=this;return _(ko(e),function(){return"The f passed in customGrad(f) must be a function."}),function(){for(var n,o=[],a=0;a<arguments.length;a++)o[a]=arguments[a];_(o.every(function(s){return s instanceof Et}),function(){return"The args passed in customGrad(f)(x1, x2,...) must all be tensors"});var i={};return o.forEach(function(s,u){i[u]=s}),t.runKernelFunc(function(s,u){return _((n=e.apply(void 0,o.concat([u]))).value instanceof Et,function(){return"The function f passed in customGrad(f) must return an object where `obj.value` is a tensor"}),_(ko(n.gradFunc),function(){return"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function."}),n.value},i,function(s,u){var c=n.gradFunc(s,u),l=Array.isArray(c)?c:[c];_(l.length===o.length,function(){return"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns the same number of tensors as inputs passed to f(...)."}),_(l.every(function(f){return f instanceof Et}),function(){return"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns a list of only tensors."});var h={};return l.forEach(function(f,d){h[d]=function(){return f}}),h})}},r.prototype.readSync=function(e){return this.state.tensorInfo.get(e).backend.readSync(e)},r.prototype.read=function(e){return this.state.tensorInfo.get(e).backend.read(e)},r.prototype.time=function(e){return K(this,void 0,void 0,function(){var t,n;return $(this,function(o){switch(o.label){case 0:return t=_e(),[4,this.backend.time(e)];case 1:return(n=o.sent()).wallMs=_e()-t,[2,n]}})})},r.prototype.track=function(e){return this.state.activeScope!=null&&(e.scopeId=this.state.activeScope.id,this.state.activeScope.track.push(e)),e},Object.defineProperty(r.prototype,"registeredVariables",{get:function(){return this.state.registeredVariables},enumerable:!0,configurable:!0}),r.prototype.reset=function(){for(var e in this.pendingBackendInitId++,this.state.dispose(),this.ENV.reset(),this.state=new Ki,this.registry)this.disposeRegisteredKernels(e),this.registry[e].dispose(),delete this.registry[e];this.backendName=null,this.backendInstance=null,this.pendingBackendInit=null},r.nextTensorId=0,r.nextVariableId=0,r}(),A=function(){var r=function(){if(Oo==null){var t=void 0;if(typeof window<"u")t=window;else if(typeof global<"u")t=global;else if(typeof process<"u")t=process;else{if(typeof self>"u")throw new Error("Could not find a global object");t=self}Oo=t}return Oo}();if(r._tfengine==null){var e=new Jc(r);r._tfengine=new ml(e)}return function(t){Ai=t}(r._tfengine.ENV),Ie=function(){return r._tfengine},r._tfengine}();function $i(){return typeof window<"u"&&window.document!=null||typeof WorkerGlobalScope<"u"}var Ue=P();Ue.registerFlag("DEBUG",function(){return!1},function(r){r&&console.warn("Debugging mode is ON. The output of every math call will be downloaded to CPU and checked for NaNs. This significantly impacts performance.")}),Ue.registerFlag("IS_BROWSER",function(){return $i()}),Ue.registerFlag("IS_NODE",function(){return typeof process<"u"&&process.versions!==void 0&&process.versions.node!==void 0}),Ue.registerFlag("IS_CHROME",function(){return typeof navigator<"u"&&navigator!=null&&navigator.userAgent!=null&&/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor)}),Ue.registerFlag("PROD",function(){return!1}),Ue.registerFlag("TENSORLIKE_CHECK_SHAPE_CONSISTENCY",function(){return Ue.getBool("DEBUG")}),Ue.registerFlag("DEPRECATION_WARNINGS_ENABLED",function(){return!0}),Ue.registerFlag("IS_TEST",function(){return!1});var or,oe,ae,dn={},Bo={alpha:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1,depth:!1,stencil:!1,failIfMajorPerformanceCaveat:!0};function yl(r,e){dn[r]=e}function Se(r){r in dn||(dn[r]=function(t){if(t!==1&&t!==2)throw new Error("Cannot get WebGL rendering context, WebGL is disabled.");var n=function(o){if(typeof OffscreenCanvas<"u"&&o===2)return new OffscreenCanvas(300,150);if(typeof document<"u")return document.createElement("canvas");throw new Error("Cannot create a canvas in this context")}(t);return n.addEventListener("webglcontextlost",function(o){o.preventDefault(),delete dn[t]},!1),t===1?n.getContext("webgl",Bo)||n.getContext("experimental-webgl",Bo):n.getContext("webgl2",Bo)}(r));var e=dn[r];return e.isContextLost()?(delete dn[r],Se(r)):(e.disable(e.DEPTH_TEST),e.disable(e.STENCIL_TEST),e.disable(e.BLEND),e.disable(e.DITHER),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SAMPLE_COVERAGE),e.enable(e.SCISSOR_TEST),e.enable(e.CULL_FACE),e.cullFace(e.BACK),dn[r])}function Sr(r,e){return[e,r]}function ar(r){var e=Y(r);return So(Math.ceil(e/4))}function ir(r,e){return[Math.max(1,Math.ceil(e/2)),Math.max(1,Math.ceil(r/2))]}function Lo(r,e){var t,n,o,a,i,s,u,c,l,h=r;return P().getNumber("WEBGL_VERSION")===2?(t=h.R32F,n=h.R16F,o=h.RGBA16F,a=h.RGBA32F,i=h.RED,s=4,u=1,c=h.HALF_FLOAT,l=h.FLOAT):(t=r.RGBA,n=r.RGBA,o=r.RGBA,a=h.RGBA,i=r.RGBA,s=4,u=4,c=e!=null?e.HALF_FLOAT_OES:null,l=r.FLOAT),{internalFormatFloat:t,internalFormatHalfFloat:n,internalFormatPackedHalfFloat:o,internalFormatPackedFloat:a,textureFormatFloat:i,downloadTextureFormat:r.RGBA,downloadUnpackNumChannels:s,defaultNumChannels:u,textureTypeHalfFloat:c,textureTypeFloat:l}}function J(r,e,t){var n=t();return e&&function(o){var a=o.getError();if(a!==o.NO_ERROR)throw new Error("WebGL Error: "+Cl(o,a))}(r),n}(function(r){r[r.DENSE=0]="DENSE",r[r.SHARED_BATCH=1]="SHARED_BATCH"})(or||(or={})),function(r){r[r.RENDER=0]="RENDER",r[r.UPLOAD=1]="UPLOAD",r[r.PIXELS=2]="PIXELS",r[r.DOWNLOAD=3]="DOWNLOAD"}(oe||(oe={})),function(r){r[r.UNPACKED_FLOAT16=0]="UNPACKED_FLOAT16",r[r.UNPACKED_FLOAT32=1]="UNPACKED_FLOAT32",r[r.PACKED_4X1_UNSIGNED_BYTE=2]="PACKED_4X1_UNSIGNED_BYTE",r[r.PACKED_2X2_FLOAT32=3]="PACKED_2X2_FLOAT32",r[r.PACKED_2X2_FLOAT16=4]="PACKED_2X2_FLOAT16"}(ae||(ae={}));var xl=596e-10,bl=65504;function wl(r){return!!(P().getBool("WEBGL_RENDER_FLOAT32_ENABLED")||r===0||xl<Math.abs(r)&&Math.abs(r)<bl)}function Cl(r,e){switch(e){case r.NO_ERROR:return"NO_ERROR";case r.INVALID_ENUM:return"INVALID_ENUM";case r.INVALID_VALUE:return"INVALID_VALUE";case r.INVALID_OPERATION:return"INVALID_OPERATION";case r.INVALID_FRAMEBUFFER_OPERATION:return"INVALID_FRAMEBUFFER_OPERATION";case r.OUT_OF_MEMORY:return"OUT_OF_MEMORY";case r.CONTEXT_LOST_WEBGL:return"CONTEXT_LOST_WEBGL";default:return"Unknown error code "+e}}function Rr(r,e,t){return ze(r,e,function(){return r.getExtension(t)},'Extension "'+t+'" not supported on this browser.')}function El(r,e,t){var n=ze(r,e,function(){return r.createShader(r.VERTEX_SHADER)},"Unable to create vertex WebGLShader.");if(J(r,e,function(){return r.shaderSource(n,t)}),J(r,e,function(){return r.compileShader(n)}),r.getShaderParameter(n,r.COMPILE_STATUS)===!1)throw console.log(r.getShaderInfoLog(n)),new Error("Failed to compile vertex shader.");return n}function _l(r,e,t){var n=ze(r,e,function(){return r.createShader(r.FRAGMENT_SHADER)},"Unable to create fragment WebGLShader.");if(J(r,e,function(){return r.shaderSource(n,t)}),J(r,e,function(){return r.compileShader(n)}),r.getShaderParameter(n,r.COMPILE_STATUS)===!1)throw function(o,a){var i=Il.exec(a);if(i==null)return console.log("Couldn't parse line number in error: "+a),void console.log(o);for(var s=+i[1],u=o.split(`
`),c=u.length.toString().length+2,l=u.map(function(g,m){return kn((m+1).toString(),c)+g}),h=0,f=0;f<l.length;f++)h=Math.max(l[f].length,h);var d=l.slice(0,s-1),p=l.slice(s-1,s),v=l.slice(s);console.log(d.join(`
`)),console.log(a.split(`
`)[0]),console.log("%c "+kn(p[0],h),"border:1px solid red; background-color:#e3d2d2; color:#a61717"),console.log(v.join(`
`))}(t,r.getShaderInfoLog(n)),new Error("Failed to compile fragment shader.");return n}var Wo,Uo,Il=/ERROR: [0-9]+:([0-9]+):/g;function Sl(r,e){return ze(r,e,function(){return r.createProgram()},"Unable to create WebGLProgram.")}function Rl(r,e,t){if(J(r,e,function(){return r.linkProgram(t)}),r.getProgramParameter(t,r.LINK_STATUS)===!1)throw console.log(r.getProgramInfoLog(t)),new Error("Failed to link vertex and fragment shaders.")}function zo(r,e,t){if(J(r,e,function(){return r.validateProgram(t)}),r.getProgramParameter(t,r.VALIDATE_STATUS)===!1)throw console.log(r.getProgramInfoLog(t)),new Error("Shader program validation failed.")}function kl(r,e,t){var n=ze(r,e,function(){return r.createBuffer()},"Unable to create WebGLBuffer");return J(r,e,function(){return r.bindBuffer(r.ARRAY_BUFFER,n)}),J(r,e,function(){return r.bufferData(r.ARRAY_BUFFER,t,r.STATIC_DRAW)}),n}function Dl(r,e,t){var n=ze(r,e,function(){return r.createBuffer()},"Unable to create WebGLBuffer");return J(r,e,function(){return r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,n)}),J(r,e,function(){return r.bufferData(r.ELEMENT_ARRAY_BUFFER,t,r.STATIC_DRAW)}),n}function Al(r,e){return ze(r,e,function(){return r.createTexture()},"Unable to create WebGLTexture.")}function Tl(r,e){var t=P().getNumber("WEBGL_MAX_TEXTURE_SIZE");if(r<=0||e<=0){var n="["+r+"x"+e+"]";throw new Error("Requested texture size "+n+" is invalid.")}if(r>t||e>t)throw n="["+r+"x"+e+"]",new Error("Requested texture size "+n+" greater than WebGL maximum on this browser / GPU "+("["+t+"x"+t+"]")+".")}function Fl(r,e){return ze(r,e,function(){return r.createFramebuffer()},"Unable to create WebGLFramebuffer.")}function Yi(r,e,t,n,o,a,i,s){var u=r.getAttribLocation(t,n);return u!==-1&&(J(r,e,function(){return r.bindBuffer(r.ARRAY_BUFFER,o)}),J(r,e,function(){return r.vertexAttribPointer(u,a,r.FLOAT,!1,i,s)}),J(r,e,function(){return r.enableVertexAttribArray(u)}),!0)}function Nl(r,e,t,n){Ll(r,n),J(r,e,function(){return r.activeTexture(r.TEXTURE0+n)}),J(r,e,function(){return r.bindTexture(r.TEXTURE_2D,t)})}function Ml(r,e,t,n){return ze(r,e,function(){return r.getUniformLocation(t,n)},'uniform "'+n+'" not present in program.')}function Pl(r,e,t){return r.getUniformLocation(e,t)}function Ol(r,e,t,n,o,a){J(r,e,function(){return Nl(r,e,n,a)}),J(r,e,function(){return r.uniform1i(o,a)})}function Vo(r,e,t,n){J(r,e,function(){return r.bindFramebuffer(r.FRAMEBUFFER,n)}),J(r,e,function(){return r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,t,0)})}function Ji(r,e,t){J(r,e,function(){return r.bindFramebuffer(r.FRAMEBUFFER,t)}),J(r,e,function(){return r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,null,0)})}function kr(r){var e=r.checkFramebufferStatus(r.FRAMEBUFFER);if(e!==r.FRAMEBUFFER_COMPLETE)throw new Error("Error binding framebuffer: "+Bl(r,e))}function Bl(r,e){switch(e){case r.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:return"FRAMEBUFFER_INCOMPLETE_ATTACHMENT";case r.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:return"FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT";case r.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:return"FRAMEBUFFER_INCOMPLETE_DIMENSIONS";case r.FRAMEBUFFER_UNSUPPORTED:return"FRAMEBUFFER_UNSUPPORTED";default:return"unknown error "+e}}function ze(r,e,t,n){var o=J(r,e,function(){return t()});if(o==null)throw new Error(n);return o}function Ll(r,e){var t=r.MAX_COMBINED_TEXTURE_IMAGE_UNITS-1,n=e+r.TEXTURE0;if(n<r.TEXTURE0||n>t)throw new Error("textureUnit must be in "+("[gl.TEXTURE0, gl.TEXTURE"+t+"]")+".")}function Dr(r,e){return e===void 0&&(e=2),Y(r.slice(0,r.length-e))}function Ar(r){if(r.length===0)throw Error("Cannot get rows and columns of an empty shape array.");return[r.length>1?r[r.length-2]:1,r[r.length-1]]}function Go(r){var e=[1,1,1];return r.length===0||r.length===1&&r[0]===1||(e=[Dr(r)].concat(Ar(r))),e}function Wl(r,e){var t;e===void 0&&(e=!1);var n=P().getNumber("WEBGL_MAX_TEXTURE_SIZE");if(e&&(n*=2,(r=r.map(function(c,l){return l>=r.length-2?Pi(r[l]):r[l]})).length===1&&(r=[2,r[0]])),r.length!==2){var o=fn(r);r=o.newShape}var a=Y(r);if(r.length<=1&&a<=n)return[1,a];if(r.length===2&&r[0]<=n&&r[1]<=n)return r;if(r.length===3&&r[0]*r[1]<=n&&r[2]<=n)return[r[0]*r[1],r[2]];if(r.length===3&&r[0]<=n&&r[1]*r[2]<=n)return[r[0],r[1]*r[2]];if(r.length===4&&r[0]*r[1]*r[2]<=n&&r[3]<=n)return[r[0]*r[1]*r[2],r[3]];if(r.length===4&&r[0]<=n&&r[1]*r[2]*r[3]<=n)return[r[0],r[1]*r[2]*r[3]];if(e){var i=Dr(r),s=2,u=2;return r.length&&(s=(t=Ar(r))[0],u=t[1]),So(a=i*(s/2)*(u/2)).map(function(c){return 2*c})}return So(a)}function Tr(r){return r%2==0}function Fr(r,e){if(Wt(r=r.slice(-2),e=e.slice(-2))||!r.length||!e.length||r[0]===0||r[1]===0||e[0]===0||e[1]===0)return!0;if(r.length!==e.length){var t=r.slice(-1)[0],n=e.slice(-1)[0];if(t===n||Tr(t)&&Tr(n)&&(r[0]===1||e[0]===1))return!0}return r[1]===e[1]&&Tr(r[0])&&Tr(e[0])}function Ul(r){if(Wo==null){var e=Se(r);Wo=e.getParameter(e.MAX_TEXTURE_SIZE)}return Wo}function zl(r){if(Uo==null){var e=Se(r);Uo=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS)}return Math.min(16,Uo)}function Vl(r){if(r===0)return 0;var e=Se(r);return he(e,"EXT_disjoint_timer_query_webgl2")&&r===2?2:he(e,"EXT_disjoint_timer_query")?1:0}function he(r,e){return r.getExtension(e)!=null}function Qi(r){try{if(Se(r)!=null)return!0}catch{return!1}return!1}function Gl(r){if(r===0)return!1;var e=Se(r);if(r===1){if(!he(e,"OES_texture_float"))return!1}else if(!he(e,"EXT_color_buffer_float"))return!1;return Ho(e)}function Hl(r){if(r===0)return!1;var e=Se(r);if(r!==1){if(he(e,"EXT_color_buffer_float"))return Ho(e);if(he(e,"EXT_color_buffer_half_float")){var t=e.getExtension("EXT_color_buffer_half_float");return function(n,o){var a=Lo(n,o),i=n.createTexture();n.bindTexture(n.TEXTURE_2D,i),n.texImage2D(n.TEXTURE_2D,0,a.internalFormatHalfFloat,1,1,0,a.textureFormatFloat,a.textureTypeHalfFloat,null);var s=n.createFramebuffer();n.bindFramebuffer(n.FRAMEBUFFER,s),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,i,0);var u=n.checkFramebufferStatus(n.FRAMEBUFFER)===n.FRAMEBUFFER_COMPLETE;return n.bindTexture(n.TEXTURE_2D,null),n.bindFramebuffer(n.FRAMEBUFFER,null),n.deleteTexture(i),n.deleteFramebuffer(s),u}(e,t)}return!1}return!!he(e,"OES_texture_float")&&!!he(e,"WEBGL_color_buffer_float")&&Ho(e)}function Ho(r){var e=Lo(r),t=r.createTexture();r.bindTexture(r.TEXTURE_2D,t),r.texImage2D(r.TEXTURE_2D,0,e.internalFormatFloat,1,1,0,e.textureFormatFloat,e.textureTypeFloat,null);var n=r.createFramebuffer();r.bindFramebuffer(r.FRAMEBUFFER,n),r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,t,0);var o=r.checkFramebufferStatus(r.FRAMEBUFFER)===r.FRAMEBUFFER_COMPLETE;return r.bindTexture(r.TEXTURE_2D,null),r.bindFramebuffer(r.FRAMEBUFFER,null),r.deleteTexture(t),r.deleteFramebuffer(n),o}function ql(r){return r===2&&Se(r).fenceSync!=null}var nt=P();function Zi(r){P().getBool("DEPRECATION_WARNINGS_ENABLED")&&console.warn(r+" You can disable deprecation warnings with tf.disableDeprecationWarnings().")}function X(r,e){return A.tidy(r,e)}function Qt(r){Xi(r).forEach(function(e){return e.dispose()})}function jl(r){return A.keep(r)}function Nr(){for(var r=[],e=0;e<arguments.length;e++)r[e]=arguments[e];P().getBool("IS_TEST")||console.warn.apply(console,r)}function Qe(r,e){var t=r;if(Ce(r))return e==="string"?[]:[r.length];if(!Array.isArray(r))return[];for(var n=[];Array.isArray(t)||Ce(t)&&e!=="string";)n.push(t.length),t=t[0];return Array.isArray(r)&&P().getBool("TENSORLIKE_CHECK_SHAPE_CONSISTENCY")&&function o(a,i,s){if(s=s||[],!Array.isArray(a)&&!Ce(a))return void _(i.length===0,function(){return"Element arr["+s.join("][")+"] is a primitive, but should be an array/TypedArray of "+i[0]+" elements"});_(i.length>0,function(){return"Element arr["+s.join("][")+"] should be a primitive, but is an array of "+a.length+" elements"}),_(a.length===i[0],function(){return"Element arr["+s.join("][")+"] should have "+i[0]+" elements, but has "+a.length+" elements"});for(var u=i.slice(1),c=0;c<a.length;++c)o(a[c],u,s.concat(c))}(r,n,[]),n}function ts(r,e,t,n){if(r!=null&&(r!=="numeric"&&r!==e||r==="numeric"&&e==="string"))throw new Error("Argument '"+t+"' passed to '"+n+"' must be "+r+" tensor, but got "+e+" tensor")}function E(r,e,t,n){if(n===void 0&&(n="numeric"),r instanceof Et)return ts(n,r.dtype,e,t),r;var o=Qn(r);if(o!=="string"&&["bool","int32","float32"].indexOf(n)>=0&&(o=n),ts(n,o,e,t),r==null||!Ce(r)&&!Array.isArray(r)&&typeof r!="number"&&typeof r!="boolean"&&typeof r!="string"){var a=r==null?"null":r.constructor.name;throw new Error("Argument '"+e+"' passed to '"+t+"' must be a Tensor or TensorLike, but got '"+a+"'")}var i=Qe(r,o);Ce(r)||Array.isArray(r)||(r=[r]);var s=o!=="string"?Li(r,o,P().getBool("DEBUG")):Rn(r,[],!0);return A.makeTensor(s,i,o)}function Mr(r,e,t,n){if(n===void 0&&(n="numeric"),!Array.isArray(r))throw new Error("Argument "+e+" passed to "+t+" must be a `Tensor[]` or `TensorLike[]`");return r.map(function(o,a){return E(o,e+"["+a+"]",t)},n)}function es(r,e){for(var t=0;t<r.length;++t)if(r[r.length-t-1]!==e-1-t)return!1;return!0}function Xl(r,e,t){for(var n=r.length+e.length,o=[],a=0,i=0,s=0;s<n;s++)t.indexOf(s)===-1?o.push(r[a++]):o.push(e[i++]);return o}function jt(r,e){for(var t=[],n=r.length,o=0;o<n;o++)e.indexOf(o)===-1&&t.push(r[o]);return[t,e.map(function(a){return r[a]})]}function Zt(r,e){return Xl(r,e.map(function(t){return 1}),e)}function ie(r,e,t){_(es(e,t),function(){return r+" supports only inner-most axes for now. Got axes "+e+" and rank-"+t+" input."})}function Re(r,e){if(es(r,e))return null;for(var t=[],n=0;n<e;++n)r.indexOf(n)===-1&&t.push(n);return r.forEach(function(o){return t.push(o)}),t}function qo(r){return r.map(function(e,t){return[t,e]}).sort(function(e,t){return e[1]-t[1]}).map(function(e){return e[0]})}function ke(r,e){for(var t=[],n=e-r;n<e;++n)t.push(n);return t}function Kl(r,e){var t=r[0].length;r.forEach(function(o,a){_(o.length===t,function(){return"Error in concat"+t+"D: rank of tensors["+a+"] must be the same as the rank of the rest ("+t+")"})}),_(e>=0&&e<t,function(){return"Error in concat"+t+"D: axis must be between 0 and "+(t-1)+"."});var n=r[0];r.forEach(function(o,a){for(var i=0;i<t;i++)_(i===e||o[i]===n[i],function(){return"Error in concat"+t+"D: Shape of tensors["+a+"] ("+o+") does not match the shape of the rest ("+n+") along the non-concatenated axis "+a+"."})})}function An(r,e){for(var t=r[0].slice(),n=1;n<r.length;n++)t[e]+=r[n][e];return t}function D(r){var e=Object.keys(r);if(e.length!==1)throw new Error("Please provide an object with a single key (operation name) mapping to a function. Got an object with "+e.length+" keys.");var t=e[0],n=r[t];t.endsWith("_")&&(t=t.substring(0,t.length-1));var o=function(){for(var a=[],i=0;i<arguments.length;i++)a[i]=arguments[i];A.startScope(t);try{var s=n.apply(void 0,a);return s instanceof Promise&&console.error("Cannot return a Promise inside of tidy."),A.endScope(s),s}catch(u){throw A.endScope(null),u}};return Object.defineProperty(o,"name",{value:t,configurable:!0}),o}nt.registerFlag("HAS_WEBGL",function(){return nt.getNumber("WEBGL_VERSION")>0}),nt.registerFlag("WEBGL_VERSION",function(){return Qi(2)?2:Qi(1)?1:0}),nt.registerFlag("WEBGL_BUFFER_SUPPORTED",function(){return nt.get("WEBGL_VERSION")===2}),nt.registerFlag("WEBGL_CPU_FORWARD",function(){return!0}),nt.registerFlag("WEBGL_FORCE_F16_TEXTURES",function(){return!1}),nt.registerFlag("WEBGL_PACK",function(){return nt.getBool("HAS_WEBGL")}),nt.registerFlag("WEBGL_PACK_NORMALIZATION",function(){return nt.getBool("WEBGL_PACK")}),nt.registerFlag("WEBGL_PACK_CLIP",function(){return nt.getBool("WEBGL_PACK")}),nt.registerFlag("WEBGL_PACK_DEPTHWISECONV",function(){return!1}),nt.registerFlag("WEBGL_PACK_BINARY_OPERATIONS",function(){return nt.getBool("WEBGL_PACK")}),nt.registerFlag("WEBGL_PACK_UNARY_OPERATIONS",function(){return nt.getBool("WEBGL_PACK")}),nt.registerFlag("WEBGL_PACK_ARRAY_OPERATIONS",function(){return nt.getBool("WEBGL_PACK")}),nt.registerFlag("WEBGL_PACK_IMAGE_OPERATIONS",function(){return nt.getBool("WEBGL_PACK")}),nt.registerFlag("WEBGL_PACK_REDUCE",function(){return nt.getBool("WEBGL_PACK")}),nt.registerFlag("WEBGL_LAZILY_UNPACK",function(){return nt.getBool("WEBGL_PACK")}),nt.registerFlag("WEBGL_CONV_IM2COL",function(){return nt.getBool("WEBGL_PACK")}),nt.registerFlag("WEBGL_MAX_TEXTURE_SIZE",function(){return Ul(nt.getNumber("WEBGL_VERSION"))}),nt.registerFlag("WEBGL_MAX_TEXTURES_IN_SHADER",function(){return zl(nt.getNumber("WEBGL_VERSION"))}),nt.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION",function(){var r=nt.getNumber("WEBGL_VERSION");return r===0?0:Vl(r)}),nt.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE",function(){return nt.getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")>0&&(r=navigator.userAgent||navigator.vendor||window.opera,!(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(r)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(r.substr(0,4))));var r}),nt.registerFlag("WEBGL_RENDER_FLOAT32_CAPABLE",function(){return Gl(nt.getNumber("WEBGL_VERSION"))}),nt.registerFlag("WEBGL_RENDER_FLOAT32_ENABLED",function(){return!nt.getBool("WEBGL_FORCE_F16_TEXTURES")&&nt.getBool("WEBGL_RENDER_FLOAT32_CAPABLE")}),nt.registerFlag("WEBGL_DOWNLOAD_FLOAT_ENABLED",function(){return Hl(nt.getNumber("WEBGL_VERSION"))}),nt.registerFlag("WEBGL_FENCE_API_ENABLED",function(){return ql(nt.getNumber("WEBGL_VERSION"))}),nt.registerFlag("WEBGL_SIZE_UPLOAD_UNIFORM",function(){return nt.getBool("WEBGL_RENDER_FLOAT32_ENABLED")?4:0}),qi=Zi;var Gt=D({complex_:function(r,e){var t=E(r,"real","complex"),n=E(e,"imag","complex");return xt(t.shape,n.shape,"real and imag shapes, "+t.shape+" and "+n.shape+", must match in call to tf.complex()."),A.runKernelFunc(function(o){return o.complex(t,n)},{$real:t,$imag:n})}}),fe=D({real_:function(r){var e=E(r,"input","real");return A.runKernelFunc(function(t){return t.real(e)},{$input:e})}}),De=D({imag_:function(r){var e=E(r,"input","imag");return A.runKernelFunc(function(t){return t.imag(e)},{$input:e})}});function Ht(r,e,t){return Ze(r,e,Qe(r,t),t)}function Ze(r,e,t,n){if(n==null&&(n=Qn(r)),n==="complex64")throw new Error("Cannot construct a complex64 tensor directly. Please use tf.complex(real, imag).");if(!Ce(r)&&!Array.isArray(r)&&typeof r!="number"&&typeof r!="boolean"&&typeof r!="string")throw new Error("values passed to tensor(values) must be a number/boolean/string or an array of numbers/booleans/strings, or a TypedArray");if(e!=null){zi(e);var o=Y(e),a=Y(t);_(o===a,function(){return"Based on the provided shape, ["+e+"], the tensor should have "+o+" values but has "+a});for(var i=0;i<t.length;++i){var s=t[i],u=i!==t.length-1||s!==Y(e.slice(i));_(t[i]===e[i]||!u,function(){return"Error creating a new Tensor. Inferred shape ("+t+") does not match the provided shape ("+e+"). "})}}return Ce(r)||Array.isArray(r)||(r=[r]),e=e||t,r=n!=="string"?Li(r,n,P().getBool("DEBUG")):Rn(r,[],!0),A.makeTensor(r,e,n)}function q(r,e){if((Ce(r)&&e!=="string"||Array.isArray(r))&&e!=="complex64")throw new Error("Error creating a new Scalar: value must be a primitive (number|boolean|string)");if(e==="string"&&Ce(r)&&!(r instanceof Uint8Array))throw new Error("When making a scalar from encoded string, the value must be `Uint8Array`.");return Ze(r,[],[],e)}function Ft(r,e){Sn(r);var t=Qe(r,e);if(t.length!==1)throw new Error("tensor1d() requires values to be a flat/TypedArray");return Ze(r,null,t,e)}function tn(r,e,t){if(Sn(r),e!=null&&e.length!==2)throw new Error("tensor2d() requires shape to have two numbers");var n=Qe(r,t);if(n.length!==2&&n.length!==1)throw new Error("tensor2d() requires values to be number[][] or flat/TypedArray");if(n.length===1&&e==null)throw new Error("tensor2d() requires shape to be provided when `values` are a flat/TypedArray");return Ze(r,e,n,t)}function jo(r,e,t){if(Sn(r),e!=null&&e.length!==3)throw new Error("tensor3d() requires shape to have three numbers");var n=Qe(r,t);if(n.length!==3&&n.length!==1)throw new Error("tensor3d() requires values to be number[][][] or flat/TypedArray");if(n.length===1&&e==null)throw new Error("tensor3d() requires shape to be provided when `values` are a flat array");return Ze(r,e,n,t)}function te(r,e,t){if(Sn(r),e!=null&&e.length!==4)throw new Error("tensor4d() requires shape to have four numbers");var n=Qe(r,t);if(n.length!==4&&n.length!==1)throw new Error("tensor4d() requires values to be number[][][][] or flat/TypedArray");if(n.length===1&&e==null)throw new Error("tensor4d() requires shape to be provided when `values` are a flat array");return Ze(r,e,n,t)}function $l(r,e,t){if(Sn(r),e!=null&&e.length!==5)throw new Error("tensor5d() requires shape to have five numbers");var n=Qe(r,t);if(n.length!==5&&n.length!==1)throw new Error("tensor5d() requires values to be number[][][][][] or flat/TypedArray");if(n.length===1&&e==null)throw new Error("tensor5d() requires shape to be provided when `values` are a flat array");return Ze(r,e,n,t)}function Yl(r,e,t){if(Sn(r),e!=null&&e.length!==6)throw new Error("tensor6d() requires shape to have six numbers");var n=Qe(r,t);if(n.length!==6&&n.length!==1)throw new Error("tensor6d() requires values to be number[][][][][][] or flat/TypedArray");if(n.length===1&&e==null)throw new Error("tensor6d() requires shape to be provided when `values` are a flat array");return Ze(r,e=e||n,n,t)}function Jl(r,e,t,n){return e===void 0&&(e=!0),A.makeVariable(r,e,t,n)}function Tn(r,e){if(e===void 0&&(e="float32"),e==="complex64"){var t=Tn(r,"float32"),n=Ct(r,"float32");return Gt(t,n)}var o=Ui(Y(r),e);return A.makeTensor(o,r,e)}function Ct(r,e){if(e===void 0&&(e="float32"),e==="complex64"){var t=Ct(r,"float32"),n=Ct(r,"float32");return Gt(t,n)}var o=Zn(Y(r),e);return A.makeTensor(o,r,e)}function Ae(r,e,t){return A.runKernelFunc(function(n){return n.fill(r,e,t)},{})}function Ql(r,e,t){if(t<=0)throw new Error("The number of values should be positive.");return A.runKernelFunc(function(n){return n.linspace(r,e,t)},{})}function Pr(r,e,t,n){if(t===void 0&&(t=1),n===void 0&&(n="float32"),t===0)throw new Error("Cannot have a step of zero");if(r===e||r<e&&t<0||e<r&&t>1)return Ct([0],n);var o=Zn(Math.abs(Math.ceil((e-r)/t)),n);e<r&&t===1&&(t=-1),o[0]=r;for(var a=1;a<o.length;a++)o[a]=o[a-1]+t;return Ft(o,n)}var ns=D({onesLike_:function(r){var e=E(r,"x","onesLike");if(e.dtype==="complex64"){var t=ns(fe(e)),n=pt(De(e));return Gt(t,n)}return A.runKernelFunc(function(o){return o.onesLike(e)},{$x:e},function(o,a){return{$x:function(){return pt(o)}}})}}),pt=D({zerosLike_:function(r){var e=E(r,"x","zerosLike");return A.runKernelFunc(function(t){return t.zerosLike(e)},{$x:e},function(t,n){return{$x:function(){return pt(t)}}})}}),Mt=D({concat_:function(r,e){e===void 0&&(e=0),_(r.length>=1,function(){return"Pass at least one tensor to concat"});var t=Mr(r,"tensors","concat");t[0].dtype==="complex64"&&t.forEach(function(s){if(s.dtype!=="complex64")throw new Error(`Cannot concatenate complex64 tensors with a tensor
          with dtype `+s.dtype+". ")}),e=Nt(e,t[0].shape)[0];var n=An(t.map(function(s){return s.shape}),e);if(Y(n)===0)return Ht([],n);if((t=t.filter(function(s){return s.size>0})).length===1)return t[0];var o=t.map(function(s){return s.shape});Kl(o,e);var a=t,i={axis:e};return A.runKernelFunc(function(s){return s.concat(t,e)},a,function(s){var u=o.map(function(c){return c[e]});return Xo(s,u,e).map(function(c){return function(){return c}})},"Concat",i)}}),Zl=D({concat1d_:function(r){return Mt(r,0)}}),th=D({concat2d_:function(r,e){return Mt(r,e)}}),eh=D({concat3d_:function(r,e){return Mt(r,e)}}),nh=D({concat4d_:function(r,e){return Mt(r,e)}}),Xo=D({split_:function(r,e,t){t===void 0&&(t=0);var n,o=E(r,"x","split");return t=Nt(t,o.shape)[0],typeof e=="number"?(_(o.shape[t]%e==0,function(){return"Number of splits must evenly divide the axis."}),n=new Array(e).fill(o.shape[t]/e)):(_(o.shape[t]===e.reduce(function(a,i){return a+i}),function(){return"The sum of sizes must match the size of the axis dimension."}),n=e),A.runKernelFunc(function(a){return a.split(o,n,t)},{$x:o},function(a){return{$x:function(){return Mt(a,t)}}})}});function pn(r,e){return r(e={exports:{}},e.exports),e.exports}var rh=pn(function(r){(function(e,t,n){function o(s){var u,c=this,l=(u=4022871197,function(h){h=h.toString();for(var f=0;f<h.length;f++){var d=.02519603282416938*(u+=h.charCodeAt(f));d-=u=d>>>0,u=(d*=u)>>>0,u+=4294967296*(d-=u)}return 23283064365386963e-26*(u>>>0)});c.next=function(){var h=2091639*c.s0+23283064365386963e-26*c.c;return c.s0=c.s1,c.s1=c.s2,c.s2=h-(c.c=0|h)},c.c=1,c.s0=l(" "),c.s1=l(" "),c.s2=l(" "),c.s0-=l(s),c.s0<0&&(c.s0+=1),c.s1-=l(s),c.s1<0&&(c.s1+=1),c.s2-=l(s),c.s2<0&&(c.s2+=1),l=null}function a(s,u){return u.c=s.c,u.s0=s.s0,u.s1=s.s1,u.s2=s.s2,u}function i(s,u){var c=new o(s),l=u&&u.state,h=c.next;return h.int32=function(){return 4294967296*c.next()|0},h.double=function(){return h()+11102230246251565e-32*(2097152*h()|0)},h.quick=h,l&&(typeof l=="object"&&a(l,c),h.state=function(){return a(c,{})}),h}t&&t.exports?t.exports=i:this.alea=i})(0,r)}),oh=pn(function(r){(function(e,t,n){function o(s){var u=this,c="";u.x=0,u.y=0,u.z=0,u.w=0,u.next=function(){var h=u.x^u.x<<11;return u.x=u.y,u.y=u.z,u.z=u.w,u.w^=u.w>>>19^h^h>>>8},s===(0|s)?u.x=s:c+=s;for(var l=0;l<c.length+64;l++)u.x^=0|c.charCodeAt(l),u.next()}function a(s,u){return u.x=s.x,u.y=s.y,u.z=s.z,u.w=s.w,u}function i(s,u){var c=new o(s),l=u&&u.state,h=function(){return(c.next()>>>0)/4294967296};return h.double=function(){do var f=((c.next()>>>11)+(c.next()>>>0)/4294967296)/2097152;while(f===0);return f},h.int32=c.next,h.quick=h,l&&(typeof l=="object"&&a(l,c),h.state=function(){return a(c,{})}),h}t&&t.exports?t.exports=i:this.xor128=i})(0,r)}),ah=pn(function(r){(function(e,t,n){function o(s){var u=this,c="";u.next=function(){var h=u.x^u.x>>>2;return u.x=u.y,u.y=u.z,u.z=u.w,u.w=u.v,(u.d=u.d+362437|0)+(u.v=u.v^u.v<<4^h^h<<1)|0},u.x=0,u.y=0,u.z=0,u.w=0,u.v=0,s===(0|s)?u.x=s:c+=s;for(var l=0;l<c.length+64;l++)u.x^=0|c.charCodeAt(l),l==c.length&&(u.d=u.x<<10^u.x>>>4),u.next()}function a(s,u){return u.x=s.x,u.y=s.y,u.z=s.z,u.w=s.w,u.v=s.v,u.d=s.d,u}function i(s,u){var c=new o(s),l=u&&u.state,h=function(){return(c.next()>>>0)/4294967296};return h.double=function(){do var f=((c.next()>>>11)+(c.next()>>>0)/4294967296)/2097152;while(f===0);return f},h.int32=c.next,h.quick=h,l&&(typeof l=="object"&&a(l,c),h.state=function(){return a(c,{})}),h}t&&t.exports?t.exports=i:this.xorwow=i})(0,r)}),ih=pn(function(r){(function(e,t,n){function o(s){var u=this;u.next=function(){var c,l,h=u.x,f=u.i;return c=h[f],l=(c^=c>>>7)^c<<24,l^=(c=h[f+1&7])^c>>>10,l^=(c=h[f+3&7])^c>>>3,l^=(c=h[f+4&7])^c<<7,c=h[f+7&7],l^=(c^=c<<13)^c<<9,h[f]=l,u.i=f+1&7,l},function(c,l){var h,f=[];if(l===(0|l))f[0]=l;else for(l=""+l,h=0;h<l.length;++h)f[7&h]=f[7&h]<<15^l.charCodeAt(h)+f[h+1&7]<<13;for(;f.length<8;)f.push(0);for(h=0;h<8&&f[h]===0;++h);for(h==8?f[7]=-1:f[h],c.x=f,c.i=0,h=256;h>0;--h)c.next()}(u,s)}function a(s,u){return u.x=s.x.slice(),u.i=s.i,u}function i(s,u){s==null&&(s=+new Date);var c=new o(s),l=u&&u.state,h=function(){return(c.next()>>>0)/4294967296};return h.double=function(){do var f=((c.next()>>>11)+(c.next()>>>0)/4294967296)/2097152;while(f===0);return f},h.int32=c.next,h.quick=h,l&&(l.x&&a(l,c),h.state=function(){return a(c,{})}),h}t&&t.exports?t.exports=i:this.xorshift7=i})(0,r)}),sh=pn(function(r){(function(e,t,n){function o(s){var u=this;u.next=function(){var c,l,h=u.w,f=u.X,d=u.i;return u.w=h=h+1640531527|0,l=f[d+34&127],c=f[d=d+1&127],l^=l<<13,c^=c<<17,l^=l>>>15,c^=c>>>12,l=f[d]=l^c,u.i=d,l+(h^h>>>16)|0},function(c,l){var h,f,d,p,v,g=[],m=128;for(l===(0|l)?(f=l,l=null):(l+="\0",f=0,m=Math.max(m,l.length)),d=0,p=-32;p<m;++p)l&&(f^=l.charCodeAt((p+32)%l.length)),p===0&&(v=f),f^=f<<10,f^=f>>>15,f^=f<<4,f^=f>>>13,p>=0&&(v=v+1640531527|0,d=(h=g[127&p]^=f+v)==0?d+1:0);for(d>=128&&(g[127&(l&&l.length||0)]=-1),d=127,p=512;p>0;--p)f=g[d+34&127],h=g[d=d+1&127],f^=f<<13,h^=h<<17,f^=f>>>15,h^=h>>>12,g[d]=f^h;c.w=v,c.X=g,c.i=d}(u,s)}function a(s,u){return u.i=s.i,u.w=s.w,u.X=s.X.slice(),u}function i(s,u){s==null&&(s=+new Date);var c=new o(s),l=u&&u.state,h=function(){return(c.next()>>>0)/4294967296};return h.double=function(){do var f=((c.next()>>>11)+(c.next()>>>0)/4294967296)/2097152;while(f===0);return f},h.int32=c.next,h.quick=h,l&&(l.X&&a(l,c),h.state=function(){return a(c,{})}),h}t&&t.exports?t.exports=i:this.xor4096=i})(0,r)}),uh=pn(function(r){(function(e,t,n){function o(s){var u=this,c="";u.next=function(){var h=u.b,f=u.c,d=u.d,p=u.a;return h=h<<25^h>>>7^f,f=f-d|0,d=d<<24^d>>>8^p,p=p-h|0,u.b=h=h<<20^h>>>12^f,u.c=f=f-d|0,u.d=d<<16^f>>>16^p,u.a=p-h|0},u.a=0,u.b=0,u.c=-1640531527,u.d=1367130551,s===Math.floor(s)?(u.a=s/4294967296|0,u.b=0|s):c+=s;for(var l=0;l<c.length+20;l++)u.b^=0|c.charCodeAt(l),u.next()}function a(s,u){return u.a=s.a,u.b=s.b,u.c=s.c,u.d=s.d,u}function i(s,u){var c=new o(s),l=u&&u.state,h=function(){return(c.next()>>>0)/4294967296};return h.double=function(){do var f=((c.next()>>>11)+(c.next()>>>0)/4294967296)/2097152;while(f===0);return f},h.int32=c.next,h.quick=h,l&&(typeof l=="object"&&a(l,c),h.state=function(){return a(c,{})}),h}t&&t.exports?t.exports=i:this.tychei=i})(0,r)}),vn=pn(function(r){(function(e,t){var n,o=this,a=256,i=6,s="random",u=t.pow(a,i),c=t.pow(2,52),l=2*c,h=a-1;function f(m,y,b){var x=[],w=v(function R(I,S){var F,T=[],L=typeof I;if(S&&L=="object")for(F in I)try{T.push(R(I[F],S-1))}catch{}return T.length?T:L=="string"?I:I+"\0"}((y=y==1?{entropy:!0}:y||{}).entropy?[m,g(e)]:m??function(){try{var R;return n&&(R=n.randomBytes)?R=R(a):(R=new Uint8Array(a),(o.crypto||o.msCrypto).getRandomValues(R)),g(R)}catch{var I=o.navigator,S=I&&I.plugins;return[+new Date,o,S,o.screen,g(e)]}}(),3),x),C=new d(x),k=function(){for(var R=C.g(i),I=u,S=0;R<c;)R=(R+S)*a,I*=a,S=C.g(1);for(;R>=l;)R/=2,I/=2,S>>>=1;return(R+S)/I};return k.int32=function(){return 0|C.g(4)},k.quick=function(){return C.g(4)/4294967296},k.double=k,v(g(C.S),e),(y.pass||b||function(R,I,S,F){return F&&(F.S&&p(F,C),R.state=function(){return p(C,{})}),S?(t[s]=R,I):R})(k,w,"global"in y?y.global:this==t,y.state)}function d(m){var y,b=m.length,x=this,w=0,C=x.i=x.j=0,k=x.S=[];for(b||(m=[b++]);w<a;)k[w]=w++;for(w=0;w<a;w++)k[w]=k[C=h&C+m[w%b]+(y=k[w])],k[C]=y;(x.g=function(R){for(var I,S=0,F=x.i,T=x.j,L=x.S;R--;)I=L[F=h&F+1],S=S*a+L[h&(L[F]=L[T=h&T+I])+(L[T]=I)];return x.i=F,x.j=T,S})(a)}function p(m,y){return y.i=m.i,y.j=m.j,y.S=m.S.slice(),y}function v(m,y){for(var b,x=m+"",w=0;w<x.length;)y[h&w]=h&(b^=19*y[h&w])+x.charCodeAt(w++);return g(y)}function g(m){return String.fromCharCode.apply(0,m)}if(t["seed"+s]=f,v(t.random(),e),r.exports){r.exports=f;try{n=require("crypto")}catch{}}})([],Math)});vn.alea=rh,vn.xor128=oh,vn.xorwow=ah,vn.xorshift7=ih,vn.xor4096=sh,vn.tychei=uh;var Or=vn.alea,Ko=function(){function r(e,t,n,o,a){this.mean=e,this.stdDev=t,this.dtype=n,this.nextVal=NaN,this.truncated=o,this.truncated&&(this.upper=this.mean+2*this.stdDev,this.lower=this.mean-2*this.stdDev);var i=a||Math.random();this.random=Or(i.toString())}return r.prototype.nextValue=function(){if(!isNaN(this.nextVal)){var e=this.nextVal;return this.nextVal=NaN,e}for(var t,n,o=!1;!o;){var a=void 0,i=void 0,s=void 0;do s=(a=2*this.random()-1)*a+(i=2*this.random()-1)*i;while(s>=1||s===0);var u=Math.sqrt(-2*Math.log(s)/s);t=this.mean+this.stdDev*a*u,n=this.mean+this.stdDev*i*u,this.truncated&&!this.isValidTruncated(t)||(o=!0)}return this.truncated&&!this.isValidTruncated(n)||(this.nextVal=this.convertValue(n)),this.convertValue(t)},r.prototype.convertValue=function(e){return this.dtype==null||this.dtype==="float32"?e:Math.round(e)},r.prototype.isValidTruncated=function(e){return e<=this.upper&&e>=this.lower},r}(),ch=function(){function r(e,t,n,o){this.alpha=e,this.beta=1/t,this.dtype=n;var a=o||Math.random();this.randu=Or(a.toString()),this.randn=new Ko(0,1,n,!1,this.randu()),this.d=e<1?e+2/3:e-1/3,this.c=1/Math.sqrt(9*this.d)}return r.prototype.nextValue=function(){for(var e,t,n,o,a,i;;){do o=this.randn.nextValue(),i=1+this.c*o;while(i<=0);if(i*=i*i,t=1-.331*(e=o*o)*e,n=.5*e+this.d*(1-i+Math.log(i)),(a=this.randu())<t||Math.log(a)<n)break}return i=1/this.beta*this.d*i,this.alpha<1&&(i*=Math.pow(this.randu(),1/this.alpha)),this.convertValue(i)},r.prototype.convertValue=function(e){return this.dtype==="float32"?e:Math.round(e)},r}(),lh=function(){function r(e,t,n,o){var a=this;if(e===void 0&&(e=0),t===void 0&&(t=1),this.canReturnFloat=function(){return a.dtype==null||a.dtype==="float32"},this.min=e,this.range=t-e,this.dtype=n,o==null&&(o=Math.random()),typeof o=="number"&&(o=o.toString()),!this.canReturnFloat()&&this.range<=1)throw new Error("The difference between "+e+" - "+t+" <= 1 and dtype is not float");this.random=Or(o)}return r.prototype.convertValue=function(e){return this.canReturnFloat()?e:Math.round(e)},r.prototype.nextValue=function(){return this.convertValue(this.min+this.range*this.random())},r}();function ot(r,e,t){return e===void 0&&(e="float32"),e=e||"float32",zi(r),new rr(r,e,t)}function hh(r,e){e===void 0&&(e=!1),console.log(r.toString(e))}var rs=D({batchToSpaceND_:function(r,e,t){var n=E(r,"x","batchToSpaceND"),o=e.reduce(function(a,i){return a*i});return _(n.rank>=1+e.length,function(){return"input rank is "+n.rank+" but should be > than blockShape.length "+e.length}),_(t.length===e.length,function(){return"crops.length is "+t.length+" but should be equal to blockShape.length  "+e.length}),_(n.shape[0]%o==0,function(){return"input tensor batch is "+n.shape[0]+" but is not divisible by the product of the elements of blockShape "+e.join(" * ")+" === "+o}),A.runKernelFunc(function(a){return a.batchToSpaceND(n,e,t)},{$x:n},function(a){return{$x:function(){return a.spaceToBatchND(e,t)}}})}}),fh=D({broadcastTo_:function(r,e){var t=E(r,"broadcastTo","x"),n=t.shape;if(e.some(function(u){return!(u>0)||u%1!=0}))throw new Error("broadcastTo(): Invalid broadcast shape ["+e+"].");if(e.length<t.rank)throw new Error("broadcastTo(): shape.length="+e.length+" < input.rank="+t.rank+".");if(e.length>t.rank){for(var o=t.shape.slice();o.length<e.length;)o.unshift(1);t=t.reshape(o)}for(var a=Array.from(e),i=e.length-1;i>=0;i--)if(t.shape[i]===e[i])a[i]=1;else if(t.shape[i]!==1)throw new Error("broadcastTo(): ["+n+"] cannot be broadcast to ["+e+"].");var s=a.map(function(u,c){return u>1?c:-1}).filter(function(u){return u>=0});return s.length===0?t.clone():A.runKernelFunc(function(u){return u.tile(t,a)},{input:t},function(u){return{input:function(){return u.sum(s,!0)}}})}}),dh=D({cast_:function(r,e){var t=E(r,"x","cast");if(!al(e))throw new Error("Failed to cast to unknown dtype "+e);if(e==="string"&&t.dtype!=="string"||e!=="string"&&t.dtype==="string")throw new Error("Only strings can be casted to strings");var n={dtype:e};return A.runKernelFunc(function(o){return o.cast(t,e)},{x:t},function(o){return{x:function(){return o.clone()}}},"Cast",n)}}),ph=D({clone_:function(r){var e=E(r,"x","clone",null);return A.runKernelFunc(function(){return A.makeTensorFromDataId(e.dataId,e.shape,e.dtype)},{$x:e},function(t){return{$x:function(){return t.toFloat()}}})}}),vh=D({cumsum_:function(r,e,t,n){e===void 0&&(e=0),t===void 0&&(t=!1),n===void 0&&(n=!1);var o=E(r,"x","cumsum"),a=Re([e|=0],o.rank),i=o;a!=null&&(i=o.transpose(a));var s=ke(1,o.rank)[0],u=A.runKernelFunc(function(c){return c.cumsum(i,s,t,n)},{permutedX:i},function(c){return{permutedX:function(){return c.cumsum(e,t,!n)}}});return a!=null&&(u=u.transpose(a)),u}}),gh=D({depthToSpace_:function(r,e,t){t===void 0&&(t="NHWC");var n=E(r,"x","depthToSpace"),o=t==="NHWC"?n.shape[1]:n.shape[2],a=t==="NHWC"?n.shape[2]:n.shape[3],i=t==="NHWC"?n.shape[3]:n.shape[1];return _(o*e>=0,function(){return`Negative dimension size caused by overflow when multiplying
      `+o+" and "+e+`  for depthToSpace with input shape
      `+n.shape}),_(a*e>=0,function(){return`Negative dimension size caused by overflow when multiplying
      `+a+" and "+e+` for depthToSpace with input shape
          `+n.shape}),_(i%(e*e)==0,function(){return"Dimension size must be evenly divisible by "+e*e+" but is "+i+" for depthToSpace with input shape "+n.shape}),A.runKernelFunc(function(s){return s.depthToSpace(n,e,t)},{$x:n})}}),de=D({expandDims_:function(r,e){e===void 0&&(e=0);var t=E(r,"x","expandDims",null);_(e<=t.rank,function(){return"Axis must be <= rank of the tensor"});var n=t.shape.slice();return e<0&&(_(-(t.rank+1)<=e,function(){return"Axis must be in the interval ["+-(t.rank+1)+", "+t.rank+"]"}),e=t.rank+e+1),n.splice(e,0,1),me(t,n)}}),os=D({eye_:function(r,e,t,n){n===void 0&&(n="float32"),e==null&&(e=r);for(var o=ot([r,e],n),a=r<=e?r:e,i=0;i<a;++i)o.set(1,i,i);var s=o.toTensor().as2D(r,e);if(t==null)return s;if(t.length===1)return Fn(de(s,0),[t[0],1,1]);if(t.length===2)return Fn(de(de(s,0),0),[t[0],t[1],1,1]);if(t.length===3)return Fn(de(de(de(s,0),0),0),[t[0],t[1],t[2],1,1]);throw new Error("eye() currently supports only 1D and 2D batchShapes, but received "+t.length+"D.")}}),mh=D({multinomial_:function(r,e,t,n){n===void 0&&(n=!1);var o=E(r,"logits","multinomial"),a=o.size,i=o.rank;if(a<2)throw new Error("Error in multinomial: you need at least 2 outcomes, but got "+a+".");if(i>2)throw new Error("Rank of probabilities must be 1 or 2, but is "+i);t=t||Math.random();var s=i===1?o.as2D(1,-1):o,u=A.runKernelFunc(function(c){return c.multinomial(s,n,e,t)},{logits2D:s});return i===1?u.as1D():u}}),$o=D({oneHot_:function(r,e,t,n){if(t===void 0&&(t=1),n===void 0&&(n=0),e<2)throw new Error("Error in oneHot: depth must be >=2, but it is "+e);var o=E(r,"indices","oneHot","int32"),a=o.shape.concat([e]);return o=o.flatten(),A.runKernelFunc(function(i){return i.oneHot(o,e,t,n)},{$indices:o},function(i){return{$indices:function(){return Ct(o.shape,"float32")}}}).reshape(a)}}),gn=D({pad_:function(r,e,t){t===void 0&&(t=0);var n=E(r,"x","pad");if(n.rank===0)throw new Error("pad(scalar) is not defined. Pass non-scalar to pad");var o={paddings:e,constantValue:t};return A.runKernelFunc(function(a){return a.pad(n,e,t)},{x:n},function(a){var i=e.map(function(s){return s[0]});return{x:function(){return a.slice(i,n.shape)}}},"PadV2",o)}}),yh=D({pad1d_:function(r,e,t){return t===void 0&&(t=0),_(e.length===2,function(){return"Invalid number of paddings. Must be length of 2."}),gn(r,[e],t)}}),xh=D({pad2d_:function(r,e,t){return t===void 0&&(t=0),_(e.length===2&&e[0].length===2&&e[1].length===2,function(){return"Invalid number of paddings. Must be length of 2 each."}),gn(r,e,t)}}),bh=D({pad3d_:function(r,e,t){return t===void 0&&(t=0),_(e.length===3&&e[0].length===2&&e[1].length===2&&e[2].length===2,function(){return"Invalid number of paddings. Must be length of 2 each."}),gn(r,e,t)}}),wh=D({pad4d_:function(r,e,t){return t===void 0&&(t=0),_(e.length===4&&e[0].length===2&&e[1].length===2&&e[2].length===2&&e[3].length===2,function(){return"Invalid number of paddings. Must be length of 2 each."}),gn(r,e,t)}}),Ch=D({rand_:function(r,e,t){var n=Y(r),o=null;if(t==null||t==="float32")o=new Float32Array(n);else if(t==="int32")o=new Int32Array(n);else{if(t!=="bool")throw new Error("Unknown data type "+t);o=new Uint8Array(n)}for(var a=0;a<n;a++)o[a]=e();return A.makeTensor(o,r,t)}}),Eh=D({randomNormal_:function(r,e,t,n,o){if(e===void 0&&(e=0),t===void 0&&(t=1),n!=null&&n==="bool")throw new Error("Unsupported data type "+n);for(var a=new Ko(e,t,n,!1,o),i=ot(r,n),s=0;s<i.values.length;s++)i.values[s]=a.nextValue();return i.toTensor()}}),_h=D({randomGamma_:function(r,e,t,n,o){if(t===void 0&&(t=1),n===void 0&&(n="float32"),t==null&&(t=1),n==null&&(n="float32"),n!=="float32"&&n!=="int32")throw new Error("Unsupported data type "+n);for(var a=new ch(e,t,n,o),i=ot(r,n),s=0;s<i.values.length;s++)i.values[s]=a.nextValue();return i.toTensor()}}),as=D({randomUniform_:function(r,e,t,n,o){e===void 0&&(e=0),t===void 0&&(t=1),n===void 0&&(n="float32");for(var a=ot(r,n),i=new lh(e,t,null,o),s=0;s<a.values.length;s++)a.values[s]=i.nextValue();return a.toTensor()}}),me=D({reshape_:function(r,e){var t=E(r,"x","reshape",null);e=rl(e,t.size),_(t.size===Y(e),function(){return"new shape and old shape must have the same number of elements."});var n={shape:e};return A.runKernelFunc(function(o){return o.reshape(t,e)},{x:t},function(o){return{x:function(){return o.reshape(t.shape)}}},"Reshape",n)}}),is=D({spaceToBatchND_:function(r,e,t){var n=E(r,"x","spaceToBatchND");return _(n.rank>=1+e.length,function(){return"input rank "+n.rank+" should be > than [blockShape] "+e.length}),_(t.length===e.length,function(){return"paddings.shape[0] "+t.length+" must be equal to [blockShape] "+e.length}),_(n.shape.reduce(function(o,a,i){return i>0&&i<=e.length?o&&(a+t[i-1][0]+t[i-1][1])%e[i-1]==0:o},!0),function(){return"input spatial dimensions "+n.shape.slice(1)+" with paddings "+t.toString()+" must be divisible by blockShapes "+e.toString()}),A.runKernelFunc(function(o){return o.spaceToBatchND(n,e,t)},{$x:n},function(o){return{$x:function(){return o.batchToSpaceND(e,t)}}})}}),ss=D({squeeze_:function(r,e){var t=E(r,"x","squeeze");return me(t,fn(t.shape,e).newShape)}}),se=D({stack_:function(r,e){e===void 0&&(e=0);var t=Mr(r,"tensors","stack");if(_(t.length>=1,function(){return"Pass at least one tensor to tf.stack"}),t.length===1)return t[0].expandDims(e);var n=t[0].rank,o=t[0].shape,a=t[0].dtype;_(e<=n,function(){return"Axis must be <= rank of the tensor"}),t.forEach(function(s){xt(o,s.shape,"All tensors passed to stack must have matching shapes")}),t.forEach(function(s){_(a===s.dtype,function(){return"All tensors passed to stack must have matching dtypes"})});var i=t.map(function(s){return s.expandDims(e)});return Mt(i,e)}}),Fn=D({tile_:function(r,e){var t=E(r,"x","tile",null);_(t.rank===e.length,function(){return"Error in transpose: rank of input "+t.rank+" must match length of reps "+e+"."});var n=[t],o={reps:e};return A.runKernelFunc(function(a,i){var s=a.tile(t,e);return i([t]),s},{x:t},function(a,i){var s=i[0];return{x:function(){var u=pt(s);if(s.rank===1)for(var c=0;c<e[0];++c)u=u.add(a.slice([c*s.shape[0]],[s.shape[0]]));else if(s.rank===2)for(c=0;c<e[0];++c)for(var l=0;l<e[1];++l)u=u.add(a.slice([c*s.shape[0],l*s.shape[1]],[s.shape[0],s.shape[1]]));else if(s.rank===3)for(c=0;c<e[0];++c)for(l=0;l<e[1];++l)for(var h=0;h<e[2];++h)u=u.add(a.slice([c*s.shape[0],l*s.shape[1],h*s.shape[2]],[s.shape[0],s.shape[1],s.shape[2]]));else{if(s.rank!==4)throw new Error("Gradient for tile operation is not implemented for rank-"+s.rank+" tensors yet.");for(c=0;c<e[0];++c)for(l=0;l<e[1];++l)for(h=0;h<e[2];++h)for(var f=0;f<e[3];++f)u=u.add(a.slice([c*s.shape[0],l*s.shape[1],h*s.shape[2],f*s.shape[3]],[s.shape[0],s.shape[1],s.shape[2],s.shape[3]]))}return u}}},"Tile",o,n)}}),Ih=D({truncatedNormal_:function(r,e,t,n,o){if(e===void 0&&(e=0),t===void 0&&(t=1),n!=null&&n==="bool")throw new Error("Unsupported data type "+n);for(var a=new Ko(e,t,n,!0,o),i=ot(r,n),s=0;s<i.values.length;s++)i.values[s]=a.nextValue();return i.toTensor()}}),Pt=D({unstack_:function(r,e){e===void 0&&(e=0),e=e||0;var t=E(r,"x","unstack");_(e>=-t.shape.length&&e<t.shape.length,function(){return"Axis = "+e+" is not in [-"+t.shape.length+", "+t.shape.length+")"}),e<0&&(e+=t.shape.length);var n={axis:e};return A.runKernelFunc(function(o){return o.unstack(t,e)},{x:t},function(o){return{x:function(){return se(o,e)}}},"Unpack",n)}}),Sh=function(r,e){return K(this,void 0,void 0,function(){var t,n,o,a,i,s,u,c,l,h;return $(this,function(f){switch(f.label){case 0:return t=E(r,"x","setdiff1d"),n=E(e,"y","setdiff1d"),_(t.dtype===n.dtype,function(){return"x and y should have the same dtype, but got x ("+t.dtype+") and y ("+n.dtype+")."}),_(t.rank===1,function(){return"x should be 1D tensor, but got x ("+t.shape+")."}),_(n.rank===1,function(){return"y should be 1D tensor, but got y ("+n.shape+")."}),[4,t.data()];case 1:return o=f.sent(),[4,n.data()];case 2:for(a=f.sent(),i=new Set(a),s=0,l=0;l<o.length;l++)i.has(o[l])||s++;for(u=new rr([s],t.dtype),c=new rr([s],"int32"),l=0,h=0;l<o.length;l++)i.has(o[l])||(u.values[h]=o[l],c.values[h]=l,h++);return[2,[u.toTensor(),c.toTensor()]]}})})};function Br(r,e,t,n){n===void 0&&(n=!0);var o=[];if(n)(o=o.concat(e.slice(0))).push(r[0]/t),o=o.concat(r.slice(1));else{o=o.concat(r[0]);for(var a=e.length,i=0;i<a;++i)o=o.concat([r[i+1]/e[i],e[i]]);o=o.concat(r.slice(a+1))}return o}function Lr(r,e,t){t===void 0&&(t=!0);var n=[];if(t){n.push(e);for(var o=e+1;o<r;++o)o<=2*e?(n.push(o),n.push(o-(e+1))):n.push(o)}else{var a=[],i=[];for(o=1;o<r;++o)o>=2*e+1||o%2==1?i.push(o):a.push(o);n.push.apply(n,a),n.push(0),n.push.apply(n,i)}return n}function Wr(r,e,t,n){n===void 0&&(n=!0);var o=[];n?o.push(r[0]/t):o.push(r[0]*t);for(var a=1;a<r.length;++a)a<=e.length?n?o.push(e[a-1]*r[a]):o.push(r[a]/e[a-1]):o.push(r[a]);return o}function us(r,e){for(var t=[0],n=0;n<e;++n)t.push(r[n][0]);return t}function cs(r,e,t){for(var n=r.slice(0,1),o=0;o<t;++o)n.push(r[o+1]-e[o][0]-e[o][1]);return n}function ls(r,e){if(r.rank<1)throw new Error("tf.gatherND() expects the input to be rank 1 or higher, but the rank was "+r.rank+".");if(e.rank<1)throw new Error("tf.gatherND() expects the indices to be rank 1 or higher, but the rank was "+e.rank+".");if(e.dtype!=="int32")throw new Error("tf.gatherND() expects the indices to be int32 type, but the dtype was "+e.dtype+".");if(e.shape[e.rank-1]>r.rank)throw new Error("index innermost dimension length must be <= tensor rank; saw: "+e.shape[e.rank-1]+" vs. "+r.rank);if(r.size===0)throw new Error("Requested more than 0 entries, but input is empty. Input shape: "+r.shape+".");for(var t=e.shape,n=t[t.length-1],o=1,a=0;a<t.length-1;++a)o*=t[a];var i=r.shape,s=t.slice();s.pop();var u=1;for(a=n;a<r.rank;++a)u*=i[a],s.push(i[a]);var c=Ee(r.shape).map(function(l){return l/u}).concat([1]).slice(0,n);return[s,o,u,c]}var hs=30;function Yo(r){return r<=hs?r:Do(r,Math.floor(Math.sqrt(r)))}function Rh(r,e,t){var n=e.rank>1?e.shape[e.rank-1]:1,o=e.rank>1?e.rank-1:1,a="Must have updates.shape = indices.shape[:batchDim] + shape[sliceDim:], got updates.shape: "+t.shape+", indices.shape: "+e.shape+", shape: "+r+", sliceDim: "+n+", and batchDim: "+o+".";if(t.rank<o)throw new Error(a+" update.rank < "+o+". ");if(r.length<n+(t.rank-o))throw new Error(a+" Output shape length < "+(n+(t.rank-o)));if(t.rank!==o+r.length-n)throw new Error(a+" update.rank != "+(o+r.length-n));for(var i=0;i<o;++i)if(t.shape[i]!==e.shape[i])throw new Error(a+" updates.shape["+i+"] ("+t.shape[i]+") != indices.shape["+i+"] ("+e.shape[i]+").");for(i=0;i<t.rank-o;++i)if(t.shape[i+o]!==r[i+n])throw new Error(a+" updates.shape["+(i+o)+"] ("+t.shape[i+o]+") != shape["+(i+o)+"] ("+r[i+o]+")")}function kh(r,e,t){if(e.rank<1)throw new Error("tf.scatterND() expects the indices to be rank 1 or higher, but the rank was "+e.rank+".");if(r.rank<1)throw new Error("tf.scatterND() expects the updates to be rank 1 or higher, but the rank was "+r.rank+".");if(e.dtype!=="int32")throw new Error("The dtype of 'indices' should be int32, but got dtype: "+e.dtype);if(t.length<1)throw new Error("Output rank must be greater or equal to 1, but got shape: "+t);if(t.length===0){if(e.size===0)throw new Error("Indices specified for empty output. indices shape: "+e.shape);if(r.size===0)throw new Error("Updates specified for empty output. updates shape: "+r.shape)}Rh(t,e,r)}function Ur(r,e,t){for(var n=e.shape.length,o=n>1?e.shape[n-1]:1,a=t.length,i=1,s=o;s<a;++s)i*=t[s];var u=o<1?1:o;return{sliceRank:o,numUpdates:Y(e.shape)/u,sliceSize:i,strides:Ee(t.slice(0,o)).concat([1]),outputSize:Y(t)}}function Dh(r,e,t){_(r.rank===e.length,function(){return"Error in slice"+r.rank+"D: Length of begin "+e+" must match the rank of the array ("+r.rank+")."}),_(r.rank===t.length,function(){return"Error in slice"+r.rank+"D: Length of size "+t+" must match the rank of the array ("+r.rank+")."});for(var n=function(a){_(e[a]+t[a]<=r.shape[a],function(){return"Error in slice"+r.rank+"D: begin["+a+"] + size["+a+"] ("+(e[a]+t[a])+") would overflow input.shape["+a+"] ("+r.shape[a]+")"})},o=0;o<r.rank;++o)n(o)}function fs(r){for(var e=[],t=0;r>0;)1&r&&e.push(t),r/=2,t++;return e}function Jo(r,e,t){for(var n=[],o=0;o<r.length;o++)n[o]=Math.ceil((e[o]-r[o])/t[o]);return n}function Ah(r,e,t,n,o){var a=e[o],i=t[o]||1;(r&1<<o||a==null)&&(a=i>0?Number.MIN_SAFE_INTEGER:Number.MAX_SAFE_INTEGER);var s=n[o];return a<0&&(a+=s),a=Io(0,a,s-1)}function Th(r,e,t,n,o){var a=e[o],i=t[o]||1;(r&1<<o||a==null)&&(a=i>0?Number.MAX_SAFE_INTEGER:Number.MIN_SAFE_INTEGER);var s=n[o];return a<0&&(a+=s),a=i>0?Io(0,a,s):Io(-1,a,s-1)}function ds(r,e,t){for(var n=t.length,o=0;o<t.length;o++)if(t[o]>1){n=o;break}for(o=n+1;o<t.length;o++)if(e[o]>0||t[o]!==r[o])return!1;return!0}function ps(r,e){for(var t=r.length>0?r[r.length-1]:1,n=0;n<r.length-1;n++)t+=r[n]*e[n];return t}function Fh(r,e){_(ko(r),function(){return"The f passed in variableGrads(f) must be a function"}),_(e==null||Array.isArray(e)&&e.every(function(l){return l instanceof Dn}),function(){return"The varList passed in variableGrads(f, varList) must be an array of variables"});var t=e!=null;if(!t)for(var n in e=[],A.registeredVariables)e.push(A.registeredVariables[n]);var o=t?e.filter(function(l){return!l.trainable}):null,a=e.length;_((e=e.filter(function(l){return l.trainable})).length>0,function(){return"variableGrads() expects at least one of the input variables to be trainable, but none of the "+a+" variables is trainable."});var i=A.gradients(r,e,null,!0),s=i.value,u=i.grads;_(u.some(function(l){return l!=null}),function(){return"Cannot find a connection between any variable and the result of the loss function y=f(x). Please make sure the operations that use variables are inside the function f passed to minimize()."}),_(s.rank===0,function(){return"The f passed in variableGrads(f) must return a scalar, but it returned a rank-"+s.rank+" tensor"});var c={};return e.forEach(function(l,h){u[h]!=null&&(c[l.name]=u[h])}),o!=null&&o.forEach(function(l){return c[l.name]=null}),{value:s,grads:c}}function zr(r){return A.customGrad(r)}var Ve=D({softmax_:function(r,e){e===void 0&&(e=-1);var t=E(r,"logits","softmax","float32");if(e===-1&&(e=t.rank-1),e!==t.rank-1)throw Error("Softmax along a non-last dimension is not yet supported. Logits was rank "+t.rank+" and dim was "+e);return A.runKernelFunc(function(n,o){var a=n.softmax(t,e);return o([a]),a},{logits:t},function(n,o){var a=o[0],i=n.mul(a);return{logits:function(){return i.sub(i.sum([e],!0).mul(a))}}},"Softmax",{dim:e},[],[!0])}}),Nh=D({logSoftmax_:function(r,e){e===void 0&&(e=-1);var t=E(r,"logits","logSoftmax");if(e===-1&&(e=t.rank-1),e!==t.rank-1)throw Error("Log Softmax along a non-last dimension is not yet supported. Logits was rank "+t.rank+" and axis was "+e);return zr(function(n,o){var a=n.max(e,!0),i=n.sub(a),s=i.toFloat().sub(i.exp().sum(e,!0).log());return o([s]),{value:s,gradFunc:function(u,c){var l=c[0].exp();return u.sub(u.sum(e,!0).mul(l))}}})(t)}}),vs=function(){function r(e,t){this.backend=e,this.dataMover=t,this.data=new WeakMap,this.dataIdsCount=0}return r.prototype.get=function(e){return this.data.has(e)||this.dataMover.moveData(this.backend,e),this.data.get(e)},r.prototype.set=function(e,t){this.dataIdsCount++,this.data.set(e,t)},r.prototype.has=function(e){return this.data.has(e)},r.prototype.delete=function(e){return this.dataIdsCount--,this.data.delete(e)},r.prototype.numDataIds=function(){return this.dataIdsCount},r}(),gs=function(){function r(){}return r.prototype.time=function(e){return N("time")},r.prototype.read=function(e){return N("read")},r.prototype.readSync=function(e){return N("readSync")},r.prototype.numDataIds=function(){return N("numDataIds")},r.prototype.disposeData=function(e){return N("disposeData")},r.prototype.write=function(e,t,n){return N("write")},r.prototype.move=function(e,t,n,o){return N("move")},r.prototype.memory=function(){return N("memory")},r.prototype.floatPrecision=function(){return N("floatPrecision")},r.prototype.epsilon=function(){return this.floatPrecision()===32?1e-7:1e-4},r.prototype.batchMatMul=function(e,t,n,o){return N("batchMatMul")},r.prototype.fusedBatchMatMul=function(e){return e.a,e.b,e.transposeA,e.transposeB,e.bias,e.activation,e.preluActivationWeights,N("fusedBatchMatMul")},r.prototype.slice=function(e,t,n){return N("slice")},r.prototype.stridedSlice=function(e,t,n,o){return N("stridedSlice")},r.prototype.unstack=function(e,t){return N("unstack")},r.prototype.reverse=function(e,t){return N("reverse")},r.prototype.concat=function(e,t){return N("concat")},r.prototype.neg=function(e){return N("neg")},r.prototype.add=function(e,t){return N("add")},r.prototype.addN=function(e){return N("addN")},r.prototype.subtract=function(e,t){return N("subtract")},r.prototype.multiply=function(e,t){return N("multiply")},r.prototype.realDivide=function(e,t){return N("realDivide")},r.prototype.floorDiv=function(e,t){return N("floorDiv")},r.prototype.sum=function(e,t){return N("sum")},r.prototype.prod=function(e,t){return N("prod")},r.prototype.unsortedSegmentSum=function(e,t,n){return N("unsortedSegmentSum")},r.prototype.argMin=function(e,t){return N("argMin")},r.prototype.argMax=function(e,t){return N("argMax")},r.prototype.equal=function(e,t){return N("equal")},r.prototype.notEqual=function(e,t){return N("notEqual")},r.prototype.less=function(e,t){return N("less")},r.prototype.lessEqual=function(e,t){return N("lessEqual")},r.prototype.greater=function(e,t){return N("greater")},r.prototype.greaterEqual=function(e,t){return N("greaterEqual")},r.prototype.logicalNot=function(e){return N("logicalNot")},r.prototype.logicalAnd=function(e,t){return N("logicalAnd")},r.prototype.logicalOr=function(e,t){return N("logicalOr")},r.prototype.where=function(e){return N("where")},r.prototype.select=function(e,t,n){return N("select")},r.prototype.topk=function(e,t,n){return N("topk")},r.prototype.min=function(e,t){return N("min")},r.prototype.minimum=function(e,t){return N("minimum")},r.prototype.mod=function(e,t){return N("mod")},r.prototype.max=function(e,t){return N("max")},r.prototype.maximum=function(e,t){return N("maximum")},r.prototype.all=function(e,t){return N("all")},r.prototype.any=function(e,t){return N("any")},r.prototype.squaredDifference=function(e,t){return N("squaredDifference")},r.prototype.ceil=function(e){return N("ceil")},r.prototype.floor=function(e){return N("floor")},r.prototype.round=function(e){return N("round")},r.prototype.sign=function(e){return N("sign")},r.prototype.isNaN=function(e){return N("isNaN")},r.prototype.isInf=function(e){return N("isInf")},r.prototype.isFinite=function(e){return N("isFinite")},r.prototype.pow=function(e,t){return N("pow")},r.prototype.exp=function(e){return N("exp")},r.prototype.expm1=function(e){return N("expm1")},r.prototype.softmax=function(e,t){return N("softmax")},r.prototype.log=function(e){return N("log")},r.prototype.log1p=function(e){return N("log1p")},r.prototype.sqrt=function(e){return N("sqrt")},r.prototype.rsqrt=function(e){return N("rsqrt")},r.prototype.square=function(e){return N("square")},r.prototype.reciprocal=function(e){return N("reciprocal")},r.prototype.relu=function(e){return N("relu")},r.prototype.relu6=function(e){return N("relu6")},r.prototype.prelu=function(e,t){return N("prelu")},r.prototype.elu=function(e){return N("elu")},r.prototype.eluDer=function(e,t){return N("eluDer")},r.prototype.selu=function(e){return N("selu")},r.prototype.int=function(e){return N("int")},r.prototype.clip=function(e,t,n){return N("clip")},r.prototype.abs=function(e){return N("abs")},r.prototype.complexAbs=function(e){return N("complexAbs")},r.prototype.sigmoid=function(e){return N("sigmoid")},r.prototype.softplus=function(e){return N("softplus")},r.prototype.sin=function(e){return N("sin")},r.prototype.cos=function(e){return N("cos")},r.prototype.tan=function(e){return N("tan")},r.prototype.asin=function(e){return N("asin")},r.prototype.acos=function(e){return N("acos")},r.prototype.atan=function(e){return N("atan")},r.prototype.atan2=function(e,t){return N("atan2")},r.prototype.sinh=function(e){return N("sinh")},r.prototype.cosh=function(e){return N("cosh")},r.prototype.tanh=function(e){return N("tanh")},r.prototype.asinh=function(e){return N("asinh")},r.prototype.acosh=function(e){return N("acosh")},r.prototype.atanh=function(e){return N("atanh")},r.prototype.erf=function(e){return N("erf")},r.prototype.step=function(e,t){return N("step")},r.prototype.fusedConv2d=function(e){return e.input,e.filter,e.convInfo,e.bias,e.activation,e.preluActivationWeights,N("fusedConv2d")},r.prototype.conv2d=function(e,t,n){return N("conv2d")},r.prototype.conv2dDerInput=function(e,t,n){return N("conv2dDerInput")},r.prototype.conv2dDerFilter=function(e,t,n){return N("conv2dDerFilter")},r.prototype.fusedDepthwiseConv2D=function(e){return e.input,e.filter,e.convInfo,e.bias,e.activation,e.preluActivationWeights,N("fusedDepthwiseConv2D")},r.prototype.depthwiseConv2D=function(e,t,n){return N("depthwiseConv2D")},r.prototype.depthwiseConv2DDerInput=function(e,t,n){return N("depthwiseConv2DDerInput")},r.prototype.depthwiseConv2DDerFilter=function(e,t,n){return N("depthwiseConv2DDerFilter")},r.prototype.conv3d=function(e,t,n){return N("conv3d")},r.prototype.conv3dDerInput=function(e,t,n){return N("conv3dDerInput")},r.prototype.conv3dDerFilter=function(e,t,n){return N("conv3dDerFilter")},r.prototype.maxPool=function(e,t){return N("maxPool")},r.prototype.maxPoolBackprop=function(e,t,n,o){return N("maxPoolBackprop")},r.prototype.avgPool=function(e,t){return N("avgPool")},r.prototype.avgPoolBackprop=function(e,t,n){return N("avgPoolBackprop")},r.prototype.avgPool3d=function(e,t){return N("avgPool3d")},r.prototype.avgPool3dBackprop=function(e,t,n){return N("avgPool3dBackprop")},r.prototype.maxPool3d=function(e,t){return N("maxPool3d")},r.prototype.maxPool3dBackprop=function(e,t,n,o){return N("maxPool3dBackprop")},r.prototype.reshape=function(e,t){return N("reshape")},r.prototype.cast=function(e,t){return N("cast")},r.prototype.tile=function(e,t){return N("tile")},r.prototype.pad=function(e,t,n){return N("pad")},r.prototype.transpose=function(e,t){return N("transpose")},r.prototype.gather=function(e,t,n){return N("gather")},r.prototype.gatherND=function(e,t){return N("gatherND")},r.prototype.scatterND=function(e,t,n){return N("scatterND")},r.prototype.batchToSpaceND=function(e,t,n){return N("batchToSpaceND")},r.prototype.spaceToBatchND=function(e,t,n){return N("spaceToBatchND")},r.prototype.resizeBilinear=function(e,t,n,o){return N("resizeBilinear")},r.prototype.resizeBilinearBackprop=function(e,t,n){return N("resizeBilinearBackprop")},r.prototype.resizeNearestNeighbor=function(e,t,n,o){return N("resizeNearestNeighbor")},r.prototype.resizeNearestNeighborBackprop=function(e,t,n){return N("resizeNearestNeighborBackprop")},r.prototype.batchNormalization=function(e,t,n,o,a,i){return N("batchNormalization")},r.prototype.localResponseNormalization4D=function(e,t,n,o,a){return N("localResponseNormalization4D")},r.prototype.LRNGrad=function(e,t,n,o,a,i,s){return N("LRNGrad")},r.prototype.multinomial=function(e,t,n,o){return N("multinomial")},r.prototype.oneHot=function(e,t,n,o){return N("oneHot")},r.prototype.cumsum=function(e,t,n,o){return N("cumsum")},r.prototype.nonMaxSuppression=function(e,t,n,o,a){return N("nonMaxSuppression")},r.prototype.fft=function(e){return N("fft")},r.prototype.ifft=function(e){return N("ifft")},r.prototype.complex=function(e,t){return N("complex")},r.prototype.real=function(e){return N("real")},r.prototype.imag=function(e){return N("imag")},r.prototype.cropAndResize=function(e,t,n,o,a,i){return N("cropAndResize")},r.prototype.depthToSpace=function(e,t,n){return N("depthToSpace")},r.prototype.split=function(e,t,n){return N("split")},r.prototype.sparseToDense=function(e,t,n,o){return N("sparseToDense")},r.prototype.diag=function(e){return N("diag")},r.prototype.fill=function(e,t,n){return N("fill")},r.prototype.onesLike=function(e){return N("onesLike")},r.prototype.zerosLike=function(e){return N("zerosLike")},r.prototype.linspace=function(e,t,n){return N("linspace")},r.prototype.dispose=function(){return N("dispose")},r}();function N(r){throw new Error("'"+r+"' not yet implemented or not found in the registry. Did you forget to import the kernel?")}function en(r,e){for(var t=r.length,n=[],o=0;o<t;o++){var a=t-1-o,i=r[a]||1;(e[e.length-1-o]||1)>1&&i===1&&n.unshift(a)}return n}function Ot(r,e){for(var t=[],n=0;n<e.length;n++){var o=r[r.length-n-1],a=e.length-n-1,i=e[a];(o==null||o===1&&i>1)&&t.unshift(a)}return t}function lt(r,e){for(var t=[],n=Math.max(r.length,e.length),o=0;o<n;o++){var a=r[r.length-o-1];a==null&&(a=1);var i=e[e.length-o-1];if(i==null&&(i=1),a===1)t.unshift(i);else if(i===1)t.unshift(a);else{if(a!==i)throw Error("Operands could not be broadcast together with shapes "+r+" and "+e+".");t.unshift(a)}}return t}function sr(r,e,t,n,o,a,i){i===void 0&&(i="channelsLast");var s,u=Hr(e),c=u[0],l=u[1];if(i==="channelsLast")s=[c,l,r[3],r[3]];else{if(i!=="channelsFirst")throw new Error("Unknown dataFormat "+i);s=[c,l,r[1],r[1]]}return mn(r,s,t,n,o,a,!1,i)}function Vr(r,e,t,n,o,a,i){i===void 0&&(i="NDHWC");var s,u,c=Qo(e),l=c[0],h=c[1],f=c[2];if(i==="NDHWC")u="channelsLast",s=[l,h,f,r[4],r[4]];else{if(i!=="NCDHW")throw new Error("Unknown dataFormat "+i);u="channelsFirst",s=[l,h,f,r[1],r[1]]}return Gr(r,s,t,n,o,!1,u,a)}function mn(r,e,t,n,o,a,i,s){i===void 0&&(i=!1),s===void 0&&(s="channelsLast");var u=[-1,-1,-1,-1],c=u[0],l=u[1],h=u[2],f=u[3];if(s==="channelsLast")c=r[0],l=r[1],h=r[2],f=r[3];else{if(s!=="channelsFirst")throw new Error("Unknown dataFormat "+s);c=r[0],f=r[1],l=r[2],h=r[3]}var d,p=e[0],v=e[1],g=e[3],m=Hr(t),y=m[0],b=m[1],x=Hr(n),w=x[0],C=x[1],k=Nn(p,w),R=Nn(v,C),I=function(O,B,V,U,W,G,H,j){var tt,et,it;if(typeof O=="number"){tt={top:O,bottom:O,left:O,right:O,type:O===0?"VALID":"NUMBER"};var st=function(dt,bt,yt,Dt,St){Dt==null&&(Dt=ms(dt,bt,yt));var Rt=dt[0],Oe=dt[1],Be=ur((Rt-bt+2*Dt)/yt+1,St);_(At(Be),function(){return"The output # of rows ("+Be+") must be an integer. Change the stride and/or zero pad parameters"});var le=ur((Oe-bt+2*Dt)/yt+1,St);return _(At(le),function(){return"The output # of columns ("+le+") must be an integer. Change the stride and/or zero pad parameters"}),[Be,le]}([B,V],G,U,O,j);et=st[0],it=st[1]}else if(O==="same"){et=Math.ceil(B/U),it=Math.ceil(V/W);var ht=Math.max(0,(et-1)*U+G-B),vt=Math.max(0,(it-1)*W+H-V),ft=Math.floor(ht/2),gt=ht-ft,Tt=Math.floor(vt/2);tt={top:ft,bottom:gt,left:Tt,right:vt-Tt,type:"SAME"}}else{if(O!=="valid")throw Error("Unknown padding parameter: "+O);tt={top:0,bottom:0,left:0,right:0,type:"VALID"},et=Math.ceil((B-G+1)/U),it=Math.ceil((V-H+1)/W)}return{padInfo:tt,outHeight:et,outWidth:it}}(o,l,h,y,b,k,R,a),S=I.padInfo,F=I.outHeight,T=I.outWidth,L=i?g*f:g;return s==="channelsFirst"?d=[c,L,F,T]:s==="channelsLast"&&(d=[c,F,T,L]),{batchSize:c,dataFormat:s,inHeight:l,inWidth:h,inChannels:f,outHeight:F,outWidth:T,outChannels:L,padInfo:S,strideHeight:y,strideWidth:b,filterHeight:p,filterWidth:v,effectiveFilterHeight:k,effectiveFilterWidth:R,dilationHeight:w,dilationWidth:C,inShape:r,outShape:d,filterShape:e}}function Gr(r,e,t,n,o,a,i,s){a===void 0&&(a=!1),i===void 0&&(i="channelsLast");var u=[-1,-1,-1,-1,-1],c=u[0],l=u[1],h=u[2],f=u[3],d=u[4];if(i==="channelsLast")c=r[0],l=r[1],h=r[2],f=r[3],d=r[4];else{if(i!=="channelsFirst")throw new Error("Unknown dataFormat "+i);c=r[0],d=r[1],l=r[2],h=r[3],f=r[4]}var p,v=e[0],g=e[1],m=e[2],y=e[4],b=Qo(t),x=b[0],w=b[1],C=b[2],k=Qo(n),R=k[0],I=k[1],S=k[2],F=Nn(v,R),T=Nn(g,I),L=Nn(m,S),O=function(H,j,tt,et,it,st,ht,vt,ft,gt,Tt){var dt,bt,yt,Dt;if(typeof H=="number"){dt={top:H,bottom:H,left:H,right:H,front:H,back:H,type:H===0?"VALID":"NUMBER"};var St=function($n,Je,Ii,Yn,Le,Si){Le==null&&(Le=ms($n,Je,Yn));var Cy=$n[0],Ey=$n[1],_y=$n[2],Ri=ur((Cy-Je+2*Le)/Yn+1,Si);_(At(Ri),function(){return"The output # of depths ("+Ri+") must be an integer. Change the stride and/or zero pad parameters"});var ki=ur((Ey-Je+2*Le)/Yn+1,Si);_(At(ki),function(){return"The output # of rows ("+ki+") must be an integer. Change the stride and/or zero pad parameters"});var Di=ur((_y-Je+2*Le)/Yn+1,Si);return _(At(Di),function(){return"The output # of columns ("+Di+") must be an integer. Change the stride and/or zero pad parameters"}),[Ri,ki,Di,Ii]}([j,tt,et,1],vt,1,it,H,Tt);bt=St[0],yt=St[1],Dt=St[2]}else if(H==="same"){bt=Math.ceil(j/it),yt=Math.ceil(tt/st),Dt=Math.ceil(et/ht);var Rt=(bt-1)*it+vt-j,Oe=(yt-1)*st+ft-tt,Be=(Dt-1)*ht+gt-et,le=Math.floor(Rt/2),Kn=Rt-le,$e=Math.floor(Oe/2),hn=Oe-$e,Ye=Math.floor(Be/2);dt={top:$e,bottom:hn,left:Ye,right:Be-Ye,front:le,back:Kn,type:"SAME"}}else{if(H!=="valid")throw Error("Unknown padding parameter: "+H);dt={top:0,bottom:0,left:0,right:0,front:0,back:0,type:"VALID"},bt=Math.ceil((j-vt+1)/it),yt=Math.ceil((tt-ft+1)/st),Dt=Math.ceil((et-gt+1)/ht)}return{padInfo:dt,outDepth:bt,outHeight:yt,outWidth:Dt}}(o,l,h,f,x,w,C,F,T,L,s),B=O.padInfo,V=O.outDepth,U=O.outHeight,W=O.outWidth,G=a?y*d:y;return i==="channelsFirst"?p=[c,G,V,U,W]:i==="channelsLast"&&(p=[c,V,U,W,G]),{batchSize:c,dataFormat:i,inDepth:l,inHeight:h,inWidth:f,inChannels:d,outDepth:V,outHeight:U,outWidth:W,outChannels:G,padInfo:B,strideDepth:x,strideHeight:w,strideWidth:C,filterDepth:v,filterHeight:g,filterWidth:m,effectiveFilterDepth:F,effectiveFilterHeight:T,effectiveFilterWidth:L,dilationDepth:R,dilationHeight:I,dilationWidth:S,inShape:r,outShape:p,filterShape:e}}function ms(r,e,t,n){n===void 0&&(n=1);var o=Nn(e,n);return Math.floor((r[0]*(t-1)-t+o)/2)}function Hr(r){return typeof r=="number"?[r,r,r]:r.length===2?[r[0],r[1],1]:r}function Qo(r){return typeof r=="number"?[r,r,r]:r}function Nn(r,e){return e<=1?r:r+(r-1)*(e-1)}function ur(r,e){if(!e)return r;switch(e){case"round":return Math.round(r);case"ceil":return Math.ceil(r);case"floor":return Math.floor(r);default:throw new Error("Unknown roundingMode "+e)}}function Mn(r){var e=Hr(r),t=e[0],n=e[1],o=e[2];return t===1&&n===1&&o===1}function ee(r,e){return Mn(r)||Mn(e)}function Zo(r){if(r==="NHWC")return"channelsLast";if(r==="NCHW")return"channelsFirst";throw new Error("Unknown dataFormat "+r)}function ys(r,e,t){if(e==="complex64"){if(r.dtype==="complex64")return r.clone();var n=Ct(r.shape),o=r.toFloat(),a=t.complex(o,n);return n.dispose(),o.dispose(),a}if(!il(r.dtype,e))return A.makeTensorFromDataId(r.dataId,r.shape,e);if(r.dtype==="complex64"){var i=t.real(r);return a=i.cast(e),i.dispose(),a}if(e==="int32")return t.int(r);if(e==="bool"){var s=q(0,r.dtype);return a=t.notEqual(r,s),s.dispose(),a}throw new Error("Error in Cast: failed to cast "+r.dtype+" to "+e)}function ta(r,e){return A.makeTensorFromDataId(r.dataId,e,r.dtype)}function xs(r,e,t){var n=(e-r)/(t-1),o=Zn(t,"float32");o[0]=r;for(var a=1;a<o.length;a++)o[a]=o[a-1]+n;return Ft(o,"float32")}function ea(r,e){if(r.length!==e.length)throw new Error("Cannot merge real and imag arrays of different lengths. real:"+r.length+", imag: "+e.length+".");for(var t=new Float32Array(2*r.length),n=0;n<t.length;n+=2)t[n]=r[n/2],t[n+1]=e[n/2];return t}function bs(r,e){return{real:r[2*e],imag:r[2*e+1]}}function Mh(r,e,t,n){r[2*n]=e,r[2*n+1]=t}function Ph(r,e,t){var n=(t?2:-2)*Math.PI*(r/e);return{real:Math.cos(n),imag:Math.sin(n)}}function Oh(r,e,t){var n=function(a,i,s){return function(u,c,l){for(var h=0,f=u.length,d=0,p=!1;h<f;){var v=l(c,u[d=h+(f-h>>>1)]);v>0?h=d+1:(f=d,p=!v)}return p?h:-h-1}(a,i,s||Bh)}(r,e,t),o=n<0?-(n+1):n;r.splice(o,0,e)}function Bh(r,e){return r>e?1:r<e?-1:0}function na(r,e,t,n,o){return ws(r,e,t,n,o,0).selectedIndices}function ra(r,e,t,n,o,a){var i=ws(r,e,t,n,o,a);return i.numValidOutputs.dispose(),{selectedIndices:i.selectedIndices,selectedScores:i.selectedScores}}function ws(r,e,t,n,o,a,i,s){s===void 0&&(s=!1);for(var u=Array.from(e).map(function(x,w){return{score:x,boxIndex:w,suppressBeginIndex:0}}).filter(function(x){return x.score>o}).sort(Cs),c=a>0?-.5/a:0,l=[],h=[];l.length<t&&u.length>0;){var f=u.pop(),d=f.score,p=f.boxIndex,v=f.suppressBeginIndex;if(d<o)break;for(var g=!1,m=l.length-1;m>=v;--m){var y=Lh(r,p,l[m]);if(y>=n){g=!0;break}if(f.score=f.score*Wh(n,c,y),f.score<=o)break}f.suppressBeginIndex=l.length,g||(f.score===d?(l.push(p),h.push(f.score)):f.score>o&&Oh(u,f,Cs))}var b=l.length;return s&&(l.fill(0,b),h.fill(0,b)),{selectedIndices:Ft(l,"int32"),selectedScores:Ft(h,"float32"),numValidOutputs:q(b,"int32")}}function Lh(r,e,t){var n=r.subarray(4*e,4*e+4),o=r.subarray(4*t,4*t+4),a=Math.min(n[0],n[2]),i=Math.min(n[1],n[3]),s=Math.max(n[0],n[2]),u=Math.max(n[1],n[3]),c=Math.min(o[0],o[2]),l=Math.min(o[1],o[3]),h=Math.max(o[0],o[2]),f=Math.max(o[1],o[3]),d=(s-a)*(u-i),p=(h-c)*(f-l);if(d<=0||p<=0)return 0;var v=Math.max(a,c),g=Math.max(i,l),m=Math.min(s,h),y=Math.min(u,f),b=Math.max(m-v,0)*Math.max(y-g,0);return b/(d+p-b)}function Wh(r,e,t){var n=Math.exp(e*t*t);return t<=r?n:0}function Cs(r,e){return r.score-e.score||r.score===e.score&&e.boxIndex-r.boxIndex}function Es(r,e,t){var n=new Array(r.rank).fill(0),o=r.shape.slice();return e.map(function(a){o[t]=a;var i=r.slice(n,o);return n[t]+=a,i})}function _s(r,e){for(var t=new Array(r.rank),n=0;n<t.length;n++)t[n]=r.shape[n]*e[n];var o=ot(t,r.dtype);for(n=0;n<o.values.length;++n){for(var a=o.indexToLoc(n),i=new Array(r.rank),s=0;s<i.length;s++)i[s]=a[s]%r.shape[s];var u=r.locToIndex(i);o.values[n]=r.values[u]}return o.toTensor()}function Is(r,e,t,n,o){for(var a=e[e.length-1],i=[r.length/a,a],s=i[0],u=i[1],c=Jn(t,s*n),l=Jn("int32",s*n),h=0;h<s;h++){for(var f=h*u,d=r.subarray(f,f+u),p=[],v=0;v<d.length;v++)p.push({value:d[v],index:v});p.sort(function(x,w){return w.value-x.value});var g=h*n,m=c.subarray(g,g+n),y=l.subarray(g,g+n);for(v=0;v<n;v++)m[v]=p[v].value,y[v]=p[v].index}var b=e.slice();return b[b.length-1]=n,[Ht(c,b,t),Ht(l,b,"int32")]}function oa(r,e){for(var t=[],n=0;n<e.length;n++)e[n]&&t.push(n);var o=ot(r,"int32"),a=ot([t.length,r.length],"int32");for(n=0;n<t.length;n++){var i=o.indexToLoc(t[n]),s=n*r.length;a.values.set(i,s)}return a.toTensor()}var Uh=function(r,e){this.outputShape=[],this.outputShape=r,this.variableNames=e.map(function(o,a){return"T"+a});var t=[];this.variableNames.forEach(function(o){t.push("float v"+o+" = get"+o+"AtOutCoords();")});var n=this.variableNames.map(function(o){return"v"+o}).join(" + ");this.userCode=`
      void main() {
        `+t.join(`
        `)+`

        float result = `+n+`;
        setOutput(result);
      }
    `},zh=function(r,e){this.outputShape=[],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=r,this.variableNames=e.map(function(o,a){return"T"+a});var t=[];this.variableNames.forEach(function(o){t.push("vec4 v"+o+" = get"+o+"AtOutCoords();")});var n=this.variableNames.map(function(o){return"v"+o}).join(" + ");this.userCode=`
      void main() {
        `+t.join(`
        `)+`

        vec4 result = `+n+`;
        setOutput(result);
      }
    `},Vh=function(r,e,t){this.variableNames=["A"];var n=r.windowSize,o=r.batchSize,a=r.inSize,i=Math.ceil(a/n);t||this.variableNames.push("bestIndicesA"),this.outputShape=[o,i];var s=e==="max"?">":"<",u=t?"inOffset + i;":"round(getBestIndicesA(batch, inOffset + i));";this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * `+n+`;

        int bestIndex = inOffset;
        float bestValue = getA(batch, bestIndex);

        for (int i = 0; i < `+n+`; i++) {
          int inIdx = `+u+`;
          float candidate = getA(batch, inIdx);
          if (candidate `+s+` bestValue) {
            bestValue = candidate;
            bestIndex = inIdx;
          }
        }
        setOutput(float(bestIndex));
      }
    `};function Ss(r,e){return["x","y","z","w","u","v"].slice(0,e).map(function(t){return r+"."+t})}function ne(r,e){return e===1?[r]:Ss(r,e)}function Xt(){var r,e,t,n,o,a,i,s,u,c;return P().getNumber("WEBGL_VERSION")===2?(r="#version 300 es",e="in",t="out",n="in",o="texture",a="outputColor",i="out vec4 outputColor;",s=`
      bool isnan_custom(float val) {
        return (val > 0.0 || val < 0.0) ? false : val != 0.0;
      }

      bvec4 isnan_custom(vec4 val) {
        return bvec4(isnan_custom(val.x),
          isnan_custom(val.y), isnan_custom(val.z), isnan_custom(val.w));
      }

      #define isnan(value) isnan_custom(value)
    `,u="",c=`
      #define round(value) newRound(value)
      int newRound(float value) {
        return int(floor(value + 0.5));
      }

      ivec4 newRound(vec4 value) {
        return ivec4(floor(value + vec4(0.5)));
      }
    `):(r="",e="attribute",t="varying",n="varying",o="texture2D",a="gl_FragColor",i="",s=`
      #define isnan(value) isnan_custom(value)
      bool isnan_custom(float val) {
        return (val > 0. || val < 1. || val == 0.) ? false : true;
      }
      bvec4 isnan_custom(vec4 val) {
        return bvec4(isnan(val.x), isnan(val.y), isnan(val.z), isnan(val.w));
      }
    `,u=`
      uniform float INFINITY;

      bool isinf(float val) {
        return abs(val) == INFINITY;
      }
      bvec4 isinf(vec4 val) {
        return equal(abs(val), vec4(INFINITY));
      }
    `,c=`
      int round(float value) {
        return int(floor(value + 0.5));
      }

      ivec4 round(vec4 value) {
        return ivec4(floor(value + vec4(0.5)));
      }
    `),{version:r,attribute:e,varyingVs:t,varyingFs:n,texture2D:o,output:a,defineOutput:i,defineSpecialNaN:s,defineSpecialInf:u,defineRound:c}}function yn(r,e,t){t===void 0&&(t="index");var n=Ee(e);return n.map(function(o,a){return"int "+r[a]+" = "+t+" / "+o+"; "+(a===n.length-1?"int "+r[a+1]+" = "+t+" - "+r[a]+" * "+o:"index -= "+r[a]+" * "+o)+";"}).join("")}function aa(r){var e=Ee(r).map(function(t){return t.toString()});return`
  int getFlatIndex(ivec3 coords) {
    return coords.x * `+e[0]+" + coords.y * "+e[1]+` + coords.z;
  }
`}var Rs=`
  const float FLOAT_MAX = 1.70141184e38;
  const float FLOAT_MIN = 1.17549435e-38;

  lowp vec4 encode_float(highp float v) {
    if (isnan(v)) {
      return vec4(255, 255, 255, 255);
    }

    highp float av = abs(v);

    if(av < FLOAT_MIN) {
      return vec4(0.0, 0.0, 0.0, 0.0);
    } else if(v > FLOAT_MAX) {
      return vec4(0.0, 0.0, 128.0, 127.0) / 255.0;
    } else if(v < -FLOAT_MAX) {
      return vec4(0.0, 0.0,  128.0, 255.0) / 255.0;
    }

    highp vec4 c = vec4(0,0,0,0);

    highp float e = floor(log2(av));
    highp float m = exp2(fract(log2(av))) - 1.0;

    c[2] = floor(128.0 * m);
    m -= c[2] / 128.0;
    c[1] = floor(32768.0 * m);
    m -= c[1] / 32768.0;
    c[0] = floor(8388608.0 * m);

    highp float ebias = e + 127.0;
    c[3] = floor(ebias / 2.0);
    ebias -= c[3] * 2.0;
    c[2] += floor(ebias) * 128.0;

    c[3] += 128.0 * step(0.0, -v);

    return c / 255.0;
  }
`;function Gh(r,e,t,n){var o=[];r.forEach(function(d){var p=Y(d.shapeInfo.logicalShape);d.shapeInfo.isUniform?o.push("uniform float "+d.name+(p>1?"["+p+"]":"")+";"):(o.push("uniform sampler2D "+d.name+";"),o.push("uniform int offset"+d.name+";"))});var a,i,s=o.join(`
`),u=r.map(function(d){return function(p,v,g){g===void 0&&(g=!1);var m="";m+=g?ks(p):Pn(p);var y=p.shapeInfo.logicalShape,b=v.logicalShape;return y.length<=b.length&&(m+=g?function(x,w){var C,k=x.name,R=k.charAt(0).toUpperCase()+k.slice(1),I="get"+R+"AtOutCoords",S=x.shapeInfo.logicalShape.length,F=w.logicalShape.length,T=en(x.shapeInfo.logicalShape,w.logicalShape),L=wt(F),O=F-S,B=["x","y","z","w","u","v"];C=S===0?"":F<2&&T.length>=1?"coords = 0;":T.map(function(tt){return"coords."+B[tt+O]+" = 0;"}).join(`
`);var V="";V=F<2&&S>0?"coords":x.shapeInfo.logicalShape.map(function(tt,et){return"coords."+B[et+O]}).join(", ");var U="return outputValue;",W=Y(x.shapeInfo.logicalShape)===1,G=Y(w.logicalShape)===1;if(S!==1||W||G){if(W&&!G)U=F===1?`
        return vec4(outputValue.x, outputValue.x, 0., 0.);
      `:`
        return vec4(outputValue.x);
      `;else if(T.length){var H=S-2,j=S-1;T.indexOf(H)>-1&&T.indexOf(j)>-1?U="return vec4(outputValue.x);":T.indexOf(H)>-1?U="return vec4(outputValue.x, outputValue.y, outputValue.x, outputValue.y);":T.indexOf(j)>-1&&(U="return vec4(outputValue.xx, outputValue.zz);")}}else U=`
      return vec4(outputValue.xy, outputValue.xy);
    `;return`
    vec4 `+I+`() {
      `+L+` coords = getOutputCoords();
      `+C+`
      vec4 outputValue = get`+R+"("+V+`);
      `+U+`
    }
  `}(p,v):function(x,w){var C=x.name,k=C.charAt(0).toUpperCase()+C.slice(1),R="get"+k+"AtOutCoords",I=w.texShape,S=x.shapeInfo.texShape,F=x.shapeInfo.logicalShape.length,T=w.logicalShape.length;if(!x.shapeInfo.isUniform&&F===T&&x.shapeInfo.flatOffset==null&&Wt(S,I))return`
      float `+R+`() {
        return sampleTexture(`+C+`, resultUV);
      }
    `;var L,O=wt(T),B=en(x.shapeInfo.logicalShape,w.logicalShape),V=T-F,U=["x","y","z","w","u","v"];L=F===0?"":T<2&&B.length>=1?"coords = 0;":B.map(function(G){return"coords."+U[G+V]+" = 0;"}).join(`
`);var W="";return W=T<2&&F>0?"coords":x.shapeInfo.logicalShape.map(function(G,H){return"coords."+U[H+V]}).join(", "),`
    float `+R+`() {
      `+O+` coords = getOutputCoords();
      `+L+`
      return get`+k+"("+W+`);
    }
  `}(p,v)),m}(d,e,n)}).join(`
`),c=e.texShape,l=Xt(),h=function(d){return`
    float sampleTexture(sampler2D textureSampler, vec2 uv) {
      return `+d.texture2D+`(textureSampler, uv).r;
    }
  `}(l),f=function(d){return d.version+`
    precision highp float;
    precision highp int;
    precision highp sampler2D;
    `+d.varyingFs+` vec2 resultUV;
    `+d.defineOutput+`
    const vec2 halfCR = vec2(0.5, 0.5);

    struct ivec5
    {
      int x;
      int y;
      int z;
      int w;
      int u;
    };

    struct ivec6
    {
      int x;
      int y;
      int z;
      int w;
      int u;
      int v;
    };

    uniform float NAN;
    `+d.defineSpecialNaN+`
    `+d.defineSpecialInf+`
    `+d.defineRound+`

    int imod(int x, int y) {
      return x - y * (x / y);
    }

    int idiv(int a, int b, float sign) {
      int res = a / b;
      int mod = imod(a, b);
      if (sign < 0. && mod != 0) {
        res -= 1;
      }
      return res;
    }

    //Based on the work of Dave Hoskins
    //https://www.shadertoy.com/view/4djSRW
    #define HASHSCALE1 443.8975
    float random(float seed){
      vec2 p = resultUV * seed;
      vec3 p3  = fract(vec3(p.xyx) * HASHSCALE1);
      p3 += dot(p3, p3.yzx + 19.19);
      return fract((p3.x + p3.y) * p3.z);
    }

    `+Hh+`
    `+qh+`
    `+jh+`
  `}(l);return e.isPacked?(a=function(d,p){switch(d.length){case 0:return`
    int getOutputCoords() {
      return 0;
    }
  `;case 1:return function(x,w){var C=[Math.ceil(w[0]/2),Math.ceil(w[1]/2)];return C[0]===1?`
      int getOutputCoords() {
        return 2 * int(resultUV.x * `+C[1]+`.0);
      }
    `:C[1]===1?`
      int getOutputCoords() {
        return 2 * int(resultUV.y * `+C[0]+`.0);
      }
    `:`
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+C[0]+", "+C[1]+`));
      return 2 * (resTexRC.x * `+C[1]+` + resTexRC.y);
    }
  `}(0,p);case 2:return function(x,w){var C=[Math.ceil(w[0]/2),Math.ceil(w[1]/2)];if(Wt(x,w))return`
      ivec2 getOutputCoords() {
        return 2 * ivec2(resultUV.yx * vec2(`+C[0]+", "+C[1]+`));
      }
    `;var k=Math.ceil(x[1]/2);return`
    ivec2 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+C[0]+", "+C[1]+`));

      int index = resTexRC.x * `+C[1]+` + resTexRC.y;
      int r = 2 * (index / `+k+`);
      int c = imod(index, `+k+`) * 2;

      return ivec2(r, c);
    }
  `}(d,p);case 3:return v=d,g=p,m=[Math.ceil(g[0]/2),Math.ceil(g[1]/2)],y=Math.ceil(v[2]/2),b=y*Math.ceil(v[1]/2),`
    ivec3 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+m[0]+", "+m[1]+`));
      int index = resTexRC.x * `+m[1]+` + resTexRC.y;

      int b = index / `+b+`;
      index -= b * `+b+`;

      int r = 2 * (index / `+y+`);
      int c = imod(index, `+y+`) * 2;

      return ivec3(b, r, c);
    }
  `;default:return function(x,w){for(var C=[Math.ceil(w[0]/2),Math.ceil(w[1]/2)],k=Math.ceil(x[x.length-1]/2),R=k*Math.ceil(x[x.length-2]/2),I=R,S="",F="b, r, c",T=2;T<x.length-1;T++)I*=x[x.length-T-1],S=`
      int b`+T+" = index / "+I+`;
      index -= b`+T+" * "+I+`;
    `+S,F="b"+T+", "+F;return`
    ivec`+x.length+` getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+C[0]+", "+C[1]+`));
      int index = resTexRC.x * `+C[1]+` + resTexRC.y;

      `+S+`

      int b = index / `+R+`;
      index -= b * `+R+`;

      int r = 2 * (index / `+k+`);
      int c = imod(index, `+k+`) * 2;

      return ivec`+x.length+"("+F+`);
    }
  `}(d,p)}var v,g,m,y,b}(e.logicalShape,c),i=function(d){return`
    void setOutput(vec4 val) {
      `+d.output+` = val;
    }
  `}(l)):(a=function(d,p){switch(d.length){case 0:return`
    int getOutputCoords() {
      return 0;
    }
  `;case 1:return function(m,y){return y[0]===1?`
      int getOutputCoords() {
        return int(resultUV.x * `+y[1]+`.0);
      }
    `:y[1]===1?`
      int getOutputCoords() {
        return int(resultUV.y * `+y[0]+`.0);
      }
    `:`
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+y[0]+", "+y[1]+`));
      return resTexRC.x * `+y[1]+` + resTexRC.y;
    }
  `}(0,p);case 2:return function(m,y){return Wt(m,y)?`
      ivec2 getOutputCoords() {
        return ivec2(resultUV.yx * vec2(`+y[0]+", "+y[1]+`));
      }
    `:m[1]===1?`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(`+y[0]+", "+y[1]+`));
        int index = resTexRC.x * `+y[1]+` + resTexRC.y;
        return ivec2(index, 0);
      }
    `:m[0]===1?`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(`+y[0]+", "+y[1]+`));
        int index = resTexRC.x * `+y[1]+` + resTexRC.y;
        return ivec2(0, index);
      }
    `:`
    ivec2 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+y[0]+", "+y[1]+`));
      int index = resTexRC.x * `+y[1]+` + resTexRC.y;
      int r = index / `+m[1]+`;
      int c = index - r * `+m[1]+`;
      return ivec2(r, c);
    }
  `}(d,p);case 3:return v=p,g=yn(["r","c","d"],d),`
    ivec3 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+v[0]+", "+v[1]+`));
      int index = resTexRC.x * `+v[1]+` + resTexRC.y;
      `+g+`
      return ivec3(r, c, d);
    }
  `;case 4:return function(m,y){var b=yn(["r","c","d","d2"],m);return`
    ivec4 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(`+y[0]+", "+y[1]+`));
      int index = resTexRC.x * `+y[1]+` + resTexRC.y;
      `+b+`
      return ivec4(r, c, d, d2);
    }
  `}(d,p);case 5:return function(m,y){var b=yn(["r","c","d","d2","d3"],m);return`
    ivec5 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx * vec2(`+y[0]+`,
                             `+y[1]+`));

      int index = resTexRC.x * `+y[1]+` + resTexRC.y;

      `+b+`

      ivec5 outShape = ivec5(r, c, d, d2, d3);
      return outShape;
    }
  `}(d,p);case 6:return function(m,y){var b=yn(["r","c","d","d2","d3","d4"],m);return`
    ivec6 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(`+y[0]+", "+y[1]+`));
      int index = resTexRC.x * `+y[1]+` + resTexRC.y;

      `+b+`

      ivec6 result = ivec6(r, c, d, d2, d3, d4);
      return result;
    }
  `}(d,p);default:throw new Error(d.length+"-D output sampling is not yet supported")}var v,g}(e.logicalShape,c),i=function(d){return`
    void setOutput(float val) {
      `+d.output+` = vec4(val, 0, 0, 0);
    }
  `}(l)),n&&(f+=Xh),[f,h,i,s,a,u,t].join(`
`)}function Pn(r){var e=r.shapeInfo.logicalShape;switch(e.length){case 0:return function(t){var n=t.name,o="get"+n.charAt(0).toUpperCase()+n.slice(1);if(t.shapeInfo.isUniform)return"float "+o+"() {return "+n+";}";var a=t.shapeInfo.texShape,i=a[0],s=a[1];if(i===1&&s===1)return`
      float `+o+`() {
        return sampleTexture(`+n+`, halfCR);
      }
    `;var u=t.shapeInfo.texShape,c=u[0],l=u[1],h=xn(n);return`
    float `+o+`() {
      vec2 uv = uvFromFlat(`+c+", "+l+", "+h+`);
      return sampleTexture(`+n+`, uv);
    }
  `}(r);case 1:return function(t){var n=t.name,o="get"+n.charAt(0).toUpperCase()+n.slice(1);if(t.shapeInfo.isUniform)return`
      float `+o+`(int index) {
        `+On(t)+`
      }
    `;var a=t.shapeInfo.texShape,i=a[0],s=a[1];if(s===1&&i===1)return`
      float `+o+`(int index) {
        return sampleTexture(`+n+`, halfCR);
      }
    `;var u=xn(n);return s===1?`
      float `+o+`(int index) {
        vec2 uv = vec2(0.5, (float(index + `+u+") + 0.5) / "+i+`.0);
        return sampleTexture(`+n+`, uv);
      }
    `:i===1?`
      float `+o+`(int index) {
        vec2 uv = vec2((float(index + `+u+") + 0.5) / "+s+`.0, 0.5);
        return sampleTexture(`+n+`, uv);
      }
    `:`
    float `+o+`(int index) {
      vec2 uv = uvFromFlat(`+i+", "+s+", index + "+u+`);
      return sampleTexture(`+n+`, uv);
    }
  `}(r);case 2:return function(t){var n=t.shapeInfo.logicalShape,o=t.name,a="get"+o.charAt(0).toUpperCase()+o.slice(1),i=t.shapeInfo.texShape;if(i!=null&&Wt(n,i)){var s=i[0],u=i[1];return`
    float `+a+`(int row, int col) {
      vec2 uv = (vec2(col, row) + halfCR) / vec2(`+u+".0, "+s+`.0);
      return sampleTexture(`+o+`, uv);
    }
  `}var c=fn(n),l=c.newShape,h=c.keptDims,f=l;if(f.length<n.length){var d=Bn(t,f);return`
      `+Pn(d)+`
      float `+a+`(int row, int col) {
        return `+a+"("+Ln(["row","col"],h)+`);
      }
    `}if(t.shapeInfo.isUniform)return`
      float `+a+`(int row, int col) {
        int index = round(dot(vec2(row, col), vec2(`+n[1]+`, 1)));
        `+On(t)+`
      }
    `;var p=i[0],v=i[1],g=xn(o);return v===1?`
    float `+a+`(int row, int col) {
      float index = dot(vec3(row, col, `+g+"), vec3("+n[1]+`, 1, 1));
      vec2 uv = vec2(0.5, (index + 0.5) / `+p+`.0);
      return sampleTexture(`+o+`, uv);
    }
  `:p===1?`
    float `+a+`(int row, int col) {
      float index = dot(vec3(row, col, `+g+"), vec3("+n[1]+`, 1, 1));
      vec2 uv = vec2((index + 0.5) / `+v+`.0, 0.5);
      return sampleTexture(`+o+`, uv);
    }
  `:`
  float `+a+`(int row, int col) {
    // Explicitly use integer operations as dot() only works on floats.
    int index = row * `+n[1]+" + col + "+g+`;
    vec2 uv = uvFromFlat(`+p+", "+v+`, index);
    return sampleTexture(`+o+`, uv);
  }
`}(r);case 3:return function(t){var n=t.shapeInfo.logicalShape,o=t.name,a="get"+o.charAt(0).toUpperCase()+o.slice(1),i=n[1]*n[2],s=n[2],u=fn(n),c=u.newShape,l=u.keptDims,h=c;if(h.length<n.length){var f=Bn(t,h);return`
        `+Pn(f)+`
        float `+a+`(int row, int col, int depth) {
          return `+a+"("+Ln(["row","col","depth"],l)+`);
        }
      `}if(t.shapeInfo.isUniform)return`
      float `+a+`(int row, int col, int depth) {
        int index = round(dot(vec3(row, col, depth),
                          vec3(`+i+", "+s+`, 1)));
        `+On(t)+`
      }
    `;var d=t.shapeInfo.texShape,p=d[0],v=d[1],g=t.shapeInfo.flatOffset;if(v===i&&g==null)return`
        float `+a+`(int row, int col, int depth) {
          float texR = float(row);
          float texC = dot(vec2(col, depth), vec2(`+s+`, 1));
          vec2 uv = (vec2(texC, texR) + halfCR) /
                     vec2(`+v+".0, "+p+`.0);
          return sampleTexture(`+o+`, uv);
        }
      `;if(v===s&&g==null)return`
    float `+a+`(int row, int col, int depth) {
      float texR = dot(vec2(row, col), vec2(`+n[1]+`, 1));
      float texC = float(depth);
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(`+v+".0, "+p+`.0);
      return sampleTexture(`+o+`, uv);
    }
  `;var m=xn(o);return`
      float `+a+`(int row, int col, int depth) {
        // Explicitly use integer operations as dot() only works on floats.
        int index = row * `+i+" + col * "+s+" + depth + "+m+`;
        vec2 uv = uvFromFlat(`+p+", "+v+`, index);
        return sampleTexture(`+o+`, uv);
      }
  `}(r);case 4:return function(t){var n=t.shapeInfo.logicalShape,o=t.name,a="get"+o.charAt(0).toUpperCase()+o.slice(1),i=n[3],s=n[2]*i,u=n[1]*s,c=fn(n),l=c.newShape,h=c.keptDims;if(l.length<n.length){var f=Bn(t,l);return`
      `+Pn(f)+`
      float `+a+`(int row, int col, int depth, int depth2) {
        return `+a+"("+Ln(["row","col","depth","depth2"],h)+`);
      }
    `}if(t.shapeInfo.isUniform)return`
      float `+a+`(int row, int col, int depth, int depth2) {
        int index = round(dot(vec4(row, col, depth, depth2),
                          vec4(`+u+", "+s+", "+i+`, 1)));
        `+On(t)+`
      }
    `;var d=t.shapeInfo.flatOffset,p=t.shapeInfo.texShape,v=p[0],g=p[1];if(g===u&&d==null)return`
      float `+a+`(int row, int col, int depth, int depth2) {
        float texR = float(row);
        float texC =
            dot(vec3(col, depth, depth2),
                vec3(`+s+", "+i+`, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(`+g+".0, "+v+`.0);
        return sampleTexture(`+o+`, uv);
      }
    `;if(g===i&&d==null)return`
      float `+a+`(int row, int col, int depth, int depth2) {
        float texR = dot(vec3(row, col, depth),
                         vec3(`+n[1]*n[2]+", "+n[2]+`, 1));
        float texC = float(depth2);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(`+g+".0, "+v+`.0);
        return sampleTexture(`+o+`, uv);
      }
    `;var m=xn(o);return`
    float `+a+`(int row, int col, int depth, int depth2) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * `+u+" + col * "+s+` +
          depth * `+i+` + depth2;
      vec2 uv = uvFromFlat(`+v+", "+g+", index + "+m+`);
      return sampleTexture(`+o+`, uv);
    }
  `}(r);case 5:return function(t){var n=t.shapeInfo.logicalShape,o=t.name,a="get"+o.charAt(0).toUpperCase()+o.slice(1),i=n[4],s=n[3]*i,u=n[2]*s,c=n[1]*u,l=fn(n),h=l.newShape,f=l.keptDims;if(h.length<n.length){var d=Bn(t,h);return`
      `+Pn(d)+`
      float `+a+`(int row, int col, int depth, int depth2, int depth3) {
        return `+a+"("+Ln(["row","col","depth","depth2","depth3"],f)+`);
      }
    `}if(t.shapeInfo.isUniform)return`
      float `+a+`(int row, int col, int depth, int depth2, int depth3) {
        float index = dot(
          vec4(row, col, depth, depth2),
          vec4(`+c+", "+u+", "+s+", "+i+`)) +
          depth3;
        `+On(t)+`
      }
    `;var p=t.shapeInfo.flatOffset,v=t.shapeInfo.texShape,g=v[0],m=v[1];if(m===c&&p==null)return`
      float `+a+`(int row, int col, int depth, int depth2, int depth3) {
        int texR = row;
        float texC = dot(vec4(col, depth, depth2, depth3),
                         vec4(`+u+", "+s+", "+i+`, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(`+m+".0, "+g+`.0);
        return sampleTexture(`+o+`, uv);
      }
    `;if(m===i&&p==null)return`
      float `+a+`(int row, int col, int depth, int depth2, int depth3) {
        float texR = dot(
          vec4(row, col, depth, depth2),
          vec4(`+n[1]*n[2]*n[3]+`,
               `+n[2]*n[3]+", "+n[3]+`, 1));
        int texC = depth3;
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(`+m+".0, "+g+`.0);
        return sampleTexture(`+o+`, uv);
      }
    `;var y=xn(o);return`
    float `+a+`(int row, int col, int depth, int depth2, int depth3) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * `+c+" + col * "+u+" + depth * "+s+` +
          depth2 * `+i+" + depth3 + "+y+`;
      vec2 uv = uvFromFlat(`+g+", "+m+`, index);
      return sampleTexture(`+o+`, uv);
    }
  `}(r);case 6:return function(t){var n=t.shapeInfo.logicalShape,o=t.name,a="get"+o.charAt(0).toUpperCase()+o.slice(1),i=fn(n),s=i.newShape,u=i.keptDims;if(s.length<n.length){var c=Bn(t,s);return`
      `+Pn(c)+`
      float `+a+`(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        return `+a+"("+Ln(["row","col","depth","depth2","depth3","depth4"],u)+`);
      }
    `}var l=n[5],h=n[4]*l,f=n[3]*h,d=n[2]*f,p=n[1]*d;if(t.shapeInfo.isUniform)return`
      float `+a+`(int row, int col, int depth,
                  int depth2, int depth3, int depth4) {
        int index = round(dot(
          vec4(row, col, depth, depth2),
          vec4(`+p+", "+d+", "+f+", "+h+`)) +
          dot(
            vec2(depth3, depth4),
            vec2(`+l+`, 1)));
        `+On(t)+`
      }
    `;var v=t.shapeInfo.flatOffset,g=t.shapeInfo.texShape,m=g[0],y=g[1];if(y===p&&v==null)return`
      float `+a+`(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        int texR = row;
        float texC = dot(vec4(col, depth, depth2, depth3),
          vec4(`+d+", "+f+", "+h+", "+l+`)) +
               float(depth4);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(`+y+".0, "+m+`.0);
        return sampleTexture(`+o+`, uv);
      }
    `;if(y===l&&v==null)return`
      float `+a+`(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        float texR = dot(vec4(row, col, depth, depth2),
          vec4(`+n[1]*n[2]*n[3]*n[4]+`,
               `+n[2]*n[3]*n[4]+`,
               `+n[3]*n[4]+`,
               `+n[4]+`)) + float(depth3);
        int texC = depth4;
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(`+y+".0, "+m+`.0);
        return sampleTexture(`+o+`, uv);
      }
    `;var b=xn(o);return`
    float `+a+`(int row, int col, int depth,
                  int depth2, int depth3, int depth4) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * `+p+" + col * "+d+" + depth * "+f+` +
          depth2 * `+h+" + depth3 * "+l+" + depth4 + "+b+`;
      vec2 uv = uvFromFlat(`+m+", "+y+`, index);
      return sampleTexture(`+o+`, uv);
    }
  `}(r);default:throw new Error(e.length+"-D input sampling is not yet supported")}}function ks(r){var e,t,n;switch(r.shapeInfo.logicalShape.length){case 0:return e=r.name,t="get"+e.charAt(0).toUpperCase()+e.slice(1),n=Xt(),`
    vec4 `+t+`() {
      return `+n.texture2D+"("+e+`, halfCR);
    }
  `;case 1:return function(o){var a=o.name,i="get"+a.charAt(0).toUpperCase()+a.slice(1),s=o.shapeInfo.texShape,u=[Math.ceil(s[0]/2),Math.ceil(s[1]/2)],c=Xt();return`
    vec4 `+i+`(int index) {
      vec2 uv = packedUVfrom1D(
        `+u[0]+", "+u[1]+`, index);
      return `+c.texture2D+"("+a+`, uv);
    }
  `}(r);case 2:return function(o){var a=o.shapeInfo.logicalShape,i=o.name,s="get"+i.charAt(0).toUpperCase()+i.slice(1),u=o.shapeInfo.texShape,c=u[0],l=u[1],h=Xt();if(u!=null&&Wt(a,u))return`
      vec4 `+s+`(int row, int col) {
        vec2 uv = (vec2(col, row) + halfCR) / vec2(`+l+".0, "+c+`.0);

        return `+h.texture2D+"("+i+`, uv);
      }
    `;var f=[Math.ceil(u[0]/2),Math.ceil(u[1]/2)],d=Math.ceil(a[1]/2);return`
    vec4 `+s+`(int row, int col) {
      vec2 uv = packedUVfrom2D(`+d+", "+f[0]+", "+f[1]+`, row, col);
      return `+h.texture2D+"("+i+`, uv);
    }
  `}(r);case 3:return function(o){var a=o.shapeInfo.logicalShape,i=o.name,s="get"+i.charAt(0).toUpperCase()+i.slice(1),u=o.shapeInfo.texShape,c=[Math.ceil(u[0]/2),Math.ceil(u[1]/2)];if(a[0]===1){var l=a.slice(1),h=Bn(o,l);return`
        `+ks(h)+`
        vec4 `+s+`(int b, int row, int col) {
          return `+s+"("+Ln(["b","row","col"],[1,2])+`);
        }
      `}var f=c[0],d=c[1],p=Math.ceil(a[2]/2),v=p*Math.ceil(a[1]/2),g=Xt();return`
    vec4 `+s+`(int b, int row, int col) {
      vec2 uv = packedUVfrom3D(
        `+f+", "+d+", "+v+", "+p+`, b, row, col);
      return `+g.texture2D+"("+i+`, uv);
    }
  `}(r);default:return function(o){for(var a=o.shapeInfo.logicalShape,i=a.length,s=o.name,u="get"+s.charAt(0).toUpperCase()+s.slice(1),c=o.shapeInfo.texShape,l=[Math.ceil(c[0]/2),Math.ceil(c[1]/2)],h=l[0],f=l[1],d=Math.ceil(a[i-1]/2),p=d*Math.ceil(a[i-2]/2),v="int b, int row, int col",g="b * "+p+" + (row / 2) * "+d+" + (col / 2)",m=2;m<i-1;m++)v="int b"+m+", "+v,p*=a[i-m-1],g="b"+m+" * "+p+" + "+g;var y=Xt();return`
    vec4 `+u+"("+v+`) {
      int index = `+g+`;
      int texR = index / `+f+`;
      int texC = index - texR * `+f+`;
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(`+f+", "+h+`);
      return `+y.texture2D+"("+s+`, uv);
    }
  `}(r)}}var Hh=`
vec2 uvFromFlat(int texNumR, int texNumC, int index) {
  int texR = index / texNumC;
  int texC = index - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
vec2 packedUVfrom1D(int texNumR, int texNumC, int index) {
  int texelIndex = index / 2;
  int texR = texelIndex / texNumC;
  int texC = texelIndex - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,qh=`
vec2 packedUVfrom2D(int texelsInLogicalRow, int texNumR,
  int texNumC, int row, int col) {
  int texelIndex = (row / 2) * texelsInLogicalRow + (col / 2);
  int texR = texelIndex / texNumC;
  int texC = texelIndex - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,jh=`
vec2 packedUVfrom3D(int texNumR, int texNumC,
    int texelsInBatch, int texelsInLogicalRow, int b,
    int row, int col) {
  int index = b * texelsInBatch + (row / 2) * texelsInLogicalRow + (col / 2);
  int texR = index / texNumC;
  int texC = index - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,Xh=`
  float getChannel(vec4 frag, vec2 innerDims) {
    vec2 modCoord = mod(innerDims, 2.);
    return modCoord.x == 0. ?
      (modCoord.y == 0. ? frag.r : frag.g) :
      (modCoord.y == 0. ? frag.b : frag.a);
  }
  float getChannel(vec4 frag, int dim) {
    float modCoord = mod(float(dim), 2.);
    return modCoord == 0. ? frag.r : frag.g;
  }
`;function xn(r){return"offset"+r}function On(r){var e=r.name,t=Y(r.shapeInfo.logicalShape);return t<2?"return "+e+";":`
    for (int i = 0; i < `+t+`; i++) {
      if (i == index) {
        return `+e+`[i];
      }
    }
  `}function wt(r){if(r<=1)return"int";if(r===2)return"ivec2";if(r===3)return"ivec3";if(r===4)return"ivec4";if(r===5)return"ivec5";if(r===6)return"ivec6";throw Error("GPU for rank "+r+" is not yet supported")}function Bn(r,e){var t=JSON.parse(JSON.stringify(r));return t.shapeInfo.logicalShape=e,t}function Ln(r,e){return e.map(function(t){return r[t]}).join(", ")}var Kh=function(r,e,t,n){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,_(r.length>2,function(){return"Packed arg"+(t.charAt(0).toUpperCase()+t.slice(1))+" supports only inputs with rank above 2."});var o=r[r.length-1],a=Math.ceil(o/e);this.outputShape=r.slice(0,-1),a>1&&this.outputShape.push(a),n||this.variableNames.push("bestIndicesA");var i,s,u=this.outputShape,c=u.length,l=wt(c),h=ne("coords",c);if(a===1){var f=wt(s=c+1);i=`
        `+f+" sourceLocR = "+f+"("+h.join()+`, 0);
        ++`+h[c-1]+`;
        `+f+" sourceLocG = "+f+"("+h.join()+`, 0);
        ++`+h[c-2]+`;
        `+f+" sourceLocA = "+f+"("+h.join()+`, 0);
        --`+h[c-1]+`;
        `+f+" sourceLocB = "+f+"("+h.join()+`, 0);
        --`+h[c-2]+";"}else s=c,i=`
        `+l+` sourceLocR = coords;
        ++`+h[c-1]+`;
        `+l+` sourceLocG = coords;
        ++`+h[c-2]+`;
        `+l+` sourceLocA = coords;
        --`+h[c-1]+`;
        `+l+` sourceLocB = coords;
        --`+h[c-2]+";";var d=["x","y","z","w","u","v"].slice(0,s),p="."+d[s-1],v=d.map(function(R){return"int "+R}),g=ne("sourceLocR",s-1).concat("inIdx.r"),m=ne("sourceLocG",s-1).concat("inIdx.g"),y=ne("sourceLocB",s-1).concat("inIdx.b"),b=ne("sourceLocA",s-1).concat("inIdx.a"),x=t==="max"?"greaterThan":"lessThan",w=n?"":`
          inIdx = round(vec4(getBestIndicesAChannel(`+g.join()+`),
                             getBestIndicesAChannel(`+m.join()+`),
                             getBestIndicesAChannel(`+y.join()+`),
                             getBestIndicesAChannel(`+b.join()+")));",C=`vec4(
            getAChannel(`+g.join()+`),
            hasNextCol ? getAChannel(`+m.join()+`) : 0.,
            hasNextRow ? getAChannel(`+y.join()+`) : 0.,
            hasNextRow && hasNextCol ? getAChannel(`+b.join()+") : 0.)",k=n?"":`
      float getBestIndicesAChannel(`+v.join()+`) {
        return getChannel(getBestIndicesA(`+d.join()+`),
                                          vec2(`+d.slice(-2).join()+`));
      }`;this.userCode=`
      float getAChannel(`+v.join()+`) {
        return getChannel(getA(`+d.join()+`),
                               vec2(`+d.slice(-2).join()+`));
      }
      `+k+`
      void main() {
        `+l+` coords = getOutputCoords();
        bool hasNextCol = `+h[c-1]+" < "+(u[c-1]-1)+`;
        bool hasNextRow = `+h[c-2]+" < "+(u[c-2]-1)+`;
        `+i+`
        ivec4 srcIdx = ivec4(sourceLocR`+p+", sourceLocG"+p+`,
          sourceLocB`+p+", sourceLocA"+p+") * "+e+`;
        ivec4 inIdx = srcIdx;
        vec4 bestIndex = vec4(inIdx);
        vec4 bestValue = `+C+`;

        for (int i = 0; i < `+e+`; i++) {
          inIdx = srcIdx;
          `+w+`
          vec4 candidate = `+C+`;
          bvec4 nan = isnan(candidate);
          bvec4 replace = bvec4(
            vec4(`+x+`(candidate, bestValue)) * (vec4(1.0) - vec4(nan)));

          bestValue = vec4(replace.x  ? candidate.x : bestValue.x,
                           replace.y  ? candidate.y : bestValue.y,
                           replace.z  ? candidate.z : bestValue.z,
                           replace.w  ? candidate.w : bestValue.w);
          bestIndex = mix(bestIndex, vec4(inIdx), vec4(replace));
          srcIdx++;
        }
        setOutput(bestIndex);
      }
    `},$h=function(r){this.variableNames=["dy"],this.outputShape=r.inShape;var e=r.filterHeight,t=r.filterWidth,n=r.strideHeight,o=r.strideWidth,a=r.dilationHeight,i=r.dilationWidth,s=r.effectiveFilterHeight,u=r.effectiveFilterWidth,c=s-1-r.padInfo.top,l=u-1-r.padInfo.left,h=1/(e*t);this.userCode=`
      const ivec2 pads = ivec2(`+c+", "+l+`);
      const float avgMultiplier = float(`+h+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];

        ivec2 dyRCCorner = coords.yz - pads;
        int dyRCorner = dyRCCorner.x;
        int dyCCorner = dyRCCorner.y;

        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < `+s+`;
            wR += `+a+`) {
          float dyR = float(dyRCorner + wR) / `+n+`.0;

          if (dyR < 0.0 || dyR >= `+r.outHeight+`.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          for (int wC = 0; wC < `+u+`;
            wC+= `+i+`) {
            float dyC = float(dyCCorner + wC) / `+o+`.0;

            if (dyC < 0.0 || dyC >= `+r.outWidth+`.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            float dyValue = getDy(b, idyR, idyC, d);

            dotProd += dyValue * avgMultiplier;
          }
        }
        setOutput(dotProd);
      }
    `},Yh=function(r){this.variableNames=["dy"],this.outputShape=r.inShape;var e=r.filterDepth,t=r.filterHeight,n=r.filterWidth,o=r.strideDepth,a=r.strideHeight,i=r.strideWidth,s=r.dilationDepth,u=r.dilationHeight,c=r.dilationWidth,l=r.effectiveFilterDepth,h=r.effectiveFilterHeight,f=r.effectiveFilterWidth,d=l-1-r.padInfo.front,p=h-1-r.padInfo.top,v=f-1-r.padInfo.left,g=1/(e*t*n);this.userCode=`
      const ivec3 pads = ivec3(`+d+", "+p+", "+v+`);
      const float avgMultiplier = float(`+g+`);

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyDCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        // Convolve dy(?, ?, ?, d) with pos mask(:, :, :, ch) to get
        // dx(xD, xR, xC, ch).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int wD = 0; wD < `+l+`;
            wD += `+s+`) {
          float dyD = float(dyDCorner + wD) / `+o+`.0;

          if (dyD < 0.0 || dyD >= `+r.outDepth+`.0 || fract(dyD) > 0.0) {
            continue;
          }
          int idyD = int(dyD);

          for (int wR = 0; wR < `+h+`;
              wR += `+u+`) {
            float dyR = float(dyRCorner + wR) / `+a+`.0;

            if (dyR < 0.0 || dyR >= `+r.outHeight+`.0 ||
                fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            for (int wC = 0; wC < `+f+`;
                wC += `+c+`) {
              float dyC = float(dyCCorner + wC) / `+i+`.0;

              if (dyC < 0.0 || dyC >= `+r.outWidth+`.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              float dyValue = getDy(batch, idyD, idyR, idyC, ch);

              dotProd += dyValue * avgMultiplier;
            }
          }
        }
        setOutput(dotProd);
      }
    `},Jh=function(r,e,t,n,o,a){this.outputShape=[],this.variableNames=["x","mean","variance"],lt(r,e),lt(r,t);var i="0.0";n!=null&&(lt(r,n),this.variableNames.push("offset"),i="getOffsetAtOutCoords()");var s="1.0";o!=null&&(lt(r,o),this.variableNames.push("scale"),s="getScaleAtOutCoords()"),this.outputShape=r,this.userCode=`
      void main() {
        float x = getXAtOutCoords();
        float mean = getMeanAtOutCoords();
        float variance = getVarianceAtOutCoords();
        float offset = `+i+`;
        float scale = `+s+`;
        float inv = scale * inversesqrt(variance + float(`+a+`));
        setOutput(dot(vec3(x, -mean, offset), vec3(inv, inv, 1)));
      }
    `},Qh=function(r,e,t,n,o,a){this.packedInputs=!0,this.packedOutput=!0,this.variableNames=["x","mean","variance"],lt(r,e),lt(r,t);var i="vec4(0.0)";n!=null&&(lt(r,n),this.variableNames.push("offset"),i="getOffsetAtOutCoords()");var s="vec4(1.0)";o!=null&&(lt(r,o),this.variableNames.push("scale"),s="getScaleAtOutCoords()"),this.outputShape=r,this.userCode=`
      void main() {
        vec4 offset = `+i+`;
        vec4 scale = `+s+`;

        vec4 x = getXAtOutCoords();
        vec4 mean = getMeanAtOutCoords();
        vec4 variance = getVarianceAtOutCoords();

        vec4 inv = scale * inversesqrt(variance + vec4(`+a+`));

        setOutput((x - mean) * inv + offset);
      }
    `},Zh="return areal * breal - aimag * bimag;",tf="return areal * bimag + aimag * breal;",Ds=function(r,e,t){this.variableNames=["AReal","AImag","BReal","BImag"],this.outputShape=lt(e,t),this.userCode=`
      float binaryOpComplex(
          float areal, float aimag, float breal, float bimag) {
        `+r+`
      }

      void main() {
        float areal = getARealAtOutCoords();
        float aimag = getAImagAtOutCoords();
        float breal = getBRealAtOutCoords();
        float bimag = getBImagAtOutCoords();
        setOutput(binaryOpComplex(areal, aimag, breal, bimag));
      }
    `},ia="return a + b;",sa="return a - b;",As="return a * b;",Ts="return (a < 0.) ? b * a : a;",kt=function(r,e,t){this.variableNames=["A","B"],this.outputShape=lt(e,t),this.userCode=`
      float binaryOperation(float a, float b) {
        `+r+`
      }

      void main() {
        float a = getAAtOutCoords();
        float b = getBAtOutCoords();
        setOutput(binaryOperation(a, b));
      }
    `},Fs=`
  vec4 aLessThanZero = vec4(lessThan(a, vec4(0.)));
  return (aLessThanZero * (b * a)) + ((vec4(1.0) - aLessThanZero) * a);
`,Ge=function(r,e,t,n){n===void 0&&(n=!1),this.variableNames=["A","B"],this.supportsBroadcasting=!0,this.packedInputs=!0,this.packedOutput=!0,this.outputShape=lt(e,t);var o=this.outputShape.length,a="";if(n)if(o===0||Y(this.outputShape)===1)a=`
          result.y = 0.;
          result.z = 0.;
          result.w = 0.;
        `;else if(a=`
          `+wt(o)+` coords = getOutputCoords();
        `,o===1)a+=`
            result.y = (coords + 1) >= `+this.outputShape[0]+` ? 0. : result.y;
            result.z = 0.;
            result.w = 0.;
          `;else{var i=ne("coords",o);a+=`
            bool nextRowOutOfBounds =
              (`+i[o-2]+" + 1) >= "+this.outputShape[o-2]+`;
            bool nextColOutOfBounds =
              (`+i[o-1]+" + 1) >= "+this.outputShape[o-1]+`;
            result.y = nextColOutOfBounds ? 0. : result.y;
            result.z = nextRowOutOfBounds ? 0. : result.z;
            result.w = nextColOutOfBounds || nextRowOutOfBounds ? 0. : result.w;
          `}this.userCode=`
      vec4 binaryOperation(vec4 a, vec4 b) {
        `+r+`
      }

      void main() {
        vec4 a = getAAtOutCoords();
        vec4 b = getBAtOutCoords();

        vec4 result = binaryOperation(a, b);
        `+a+`

        setOutput(result);
      }
    `},ef=function(){function r(e){this.variableNames=["A"],this.outputShape=e,this.userCode=`
      uniform float minVal;
      uniform float maxVal;

      void main() {
        float value = getAAtOutCoords();
        if (isnan(value)) {
          setOutput(value);
          return;
        }

        setOutput(clamp(value, minVal, maxVal));
      }
    `}return r.prototype.getCustomSetupFunc=function(e,t){var n=this;return function(o,a){n.minLoc==null&&(n.minLoc=o.getUniformLocationNoThrow(a,"minVal"),n.maxLoc=o.getUniformLocationNoThrow(a,"maxVal")),o.gl.uniform1f(n.minLoc,e),o.gl.uniform1f(n.maxLoc,t)}},r}(),nf=function(){function r(e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=e,this.userCode=`
      uniform float minVal;
      uniform float maxVal;

      void main() {
        vec4 value = getAAtOutCoords();

        if (any(isnan(value))) {
          setOutput(value);
          return;
        }

        setOutput(clamp(value, vec4(minVal), vec4(maxVal)));
      }
    `}return r.prototype.getCustomSetupFunc=function(e,t){var n=this;return function(o,a){n.minLoc==null&&(n.minLoc=o.getUniformLocationNoThrow(a,"minVal"),n.maxLoc=o.getUniformLocationNoThrow(a,"maxVal")),o.gl.uniform1f(n.minLoc,e),o.gl.uniform1f(n.maxLoc,t)}},r}(),rf=function(r){this.variableNames=["real","imag"],this.outputShape=r,this.userCode=`
      void main() {
        float re = abs(getRealAtOutCoords());
        float im = abs(getImagAtOutCoords());
        float mx = max(re, im);

        // sadly the length function in glsl is not underflow-safe
        // (at least not on Intel GPUs). So the safe solution is
        // to ensure underflow-safety in all cases.
        setOutput(
          mx == 0.0 ? 0.0 : mx * length(vec2(1, min(re, im)/mx))
        );
      }
    `},of=function(r){this.outputShape=[],this.outputShape=An(r,1),this.variableNames=r.map(function(s,u){return"T"+u});var e=new Array(r.length-1);e[0]=r[0][1];for(var t=1;t<e.length;t++)e[t]=e[t-1]+r[t][1];var n=["if (yC < "+e[0]+") setOutput(getT0(yR, yC));"];for(t=1;t<e.length;t++){var o=e[t-1];n.push("else if (yC < "+e[t]+") setOutput(getT"+t+"(yR, yC-"+o+"));")}var a=e.length,i=e[e.length-1];n.push("else setOutput(getT"+a+"(yR, yC-"+i+"));"),this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int yR = coords.x;
        int yC = coords.y;

        `+n.join(`
        `)+`
      }
    `},af=function(r,e){this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[],this.outputShape=An(r,e);var t=this.outputShape,n=t.length,o=wt(n),a=ne("coords",n),i=["x","y","z","w","u","v"].slice(0,n);this.variableNames=r.map(function(g,m){return"T"+m});var s=new Array(r.length-1);s[0]=r[0][e];for(var u=1;u<s.length;u++)s[u]=s[u-1]+r[u][e];var c=i[e],l=i.slice(-2),h=i.join(),f="if ("+c+" < "+s[0]+`) {
        return getChannel(
            getT0(`+h+"), vec2("+l.join()+`));
        }`;for(u=1;u<s.length;u++){var d=s[u-1];f+=`
        if (`+c+" < "+s[u]+"  && "+c+" >= "+s[u-1]+`) {
          return getChannel(
            getT`+u+"("+qr(i,c,d)+`),
            vec2(`+qr(l,c,d)+`));
        }`}var p=s.length,v=s[s.length-1];f+=`
        return getChannel(
          getT`+p+"("+qr(i,c,v)+`),
          vec2(`+qr(l,c,v)+"));",this.userCode=`
      float getValue(`+i.map(function(g){return"int "+g})+`) {
        `+f+`
      }

      void main() {
        `+o+` coords = getOutputCoords();
        vec4 result = vec4(getValue(`+a+`), 0., 0., 0.);

        `+a[n-1]+" = "+a[n-1]+` + 1;
        if (`+a[n-1]+" < "+t[n-1]+`) {
          result.g = getValue(`+a+`);
        }

        `+a[n-2]+" = "+a[n-2]+` + 1;
        if (`+a[n-2]+" < "+t[n-2]+`) {
          result.a = getValue(`+a+`);
        }

        `+a[n-1]+" = "+a[n-1]+` - 1;
        if (`+a[n-2]+" < "+t[n-2]+` &&
            `+a[n-1]+" < "+t[n-1]+`) {
          result.b = getValue(`+a+`);
        }
        setOutput(result);
      }
    `};function qr(r,e,t){var n=r.indexOf(e);return r.map(function(o,a){return a===n?o+" - "+t:o}).join()}var sf=function(r){this.variableNames=["x","dy"],this.outputShape=r.filterShape;var e=r.strideHeight,t=r.strideWidth,n=r.padInfo.top,o=r.padInfo.left,a=r.dataFormat==="channelsLast";this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int wR = coords.x;
        int wC = coords.y;
        int d1 = coords.z;
        int d2 = coords.w;

        // Convolve x(?, ?, d1) with dy(:, :, d2) to get dw(wR, wC, d1, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int b = 0; b < `+r.batchSize+`; b++) {
          for (int yR = 0; yR < `+r.outHeight+`; yR++) {
            int xR = wR + yR * `+e+" - "+n+`;

            if (xR < 0 || xR >= `+r.inHeight+`) {
              continue;
            }

            for (int yC = 0; yC < `+r.outWidth+`; yC++) {
              int xC = wC + yC * `+t+" - "+o+`;

              if (xC < 0 || xC >= `+r.inWidth+`) {
                continue;
              }

              if (`+a+`) {
                float dyValue = getDy(b, yR, yC, d2);
                float xValue = getX(b, xR, xC, d1);
                dotProd += (xValue * dyValue);
              } else {
                float dyValue = getDy(b, d2, yR, yC);
                float xValue = getX(b, d1, xR, xC);
                dotProd += (xValue * dyValue);
              }

            }
          }
        }
        setOutput(dotProd);
      }
    `},uf=function(r){this.variableNames=["dy","W"],this.outputShape=r.inShape;var e=r.filterHeight,t=r.filterWidth,n=r.strideHeight,o=r.strideWidth,a=r.dataFormat==="channelsLast",i=e-1-r.padInfo.top,s=t-1-r.padInfo.left,u=a?1:2,c=a?2:3,l=a?3:1;this.userCode=`
      const ivec2 pads = ivec2(`+i+", "+s+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[`+l+`];

        ivec2 dyCorner = ivec2(coords[`+u+"], coords["+c+`]) - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < `+e+`; wR++) {
          float dyR = float(dyRCorner + wR) / `+n+`.0;

          if (dyR < 0.0 || dyR >= `+r.outHeight+`.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          int wRPerm = `+e+` - 1 - wR;

          for (int wC = 0; wC < `+t+`; wC++) {
            float dyC = float(dyCCorner + wC) / `+o+`.0;

            if (dyC < 0.0 || dyC >= `+r.outWidth+`.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            int wCPerm = `+t+` - 1 - wC;

            for (int d2 = 0; d2 < `+r.outChannels+`; d2++) {

              if (`+a+`) {
                float xValue = getDy(batch, idyR, idyC, d2);
                float wValue = getW(wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              } else {
                float xValue = getDy(batch, d2, idyR, idyC);
                float wValue = getW(wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              }

            }
          }
        }
        setOutput(dotProd);
      }
    `},cf=function(r){this.variableNames=["x","dy"],this.outputShape=r.filterShape;var e=r.strideDepth,t=r.strideHeight,n=r.strideWidth,o=r.padInfo.front,a=r.padInfo.top,i=r.padInfo.left;this.userCode=`
      void main() {
        ivec5 coords = getOutputCoords();
        int wF = coords.x;
        int wR = coords.y;
        int wC = coords.z;
        int d1 = coords.w;
        int d2 = coords.u;

        float dotProd = 0.0;

        for (int b = 0; b < `+r.batchSize+`; b++) {
          for (int yF = 0; yF < `+r.outDepth+`; yF++) {
            int xF = wF + yF * `+e+" - "+o+`;

            if (xF < 0 || xF >= `+r.inDepth+`) {
              continue;
            }

            for (int yR = 0; yR < `+r.outHeight+`; yR++) {
              int xR = wR + yR * `+t+" - "+a+`;

              if (xR < 0 || xR >= `+r.inHeight+`) {
                continue;
              }

              for (int yC = 0; yC < `+r.outWidth+`; yC++) {
                int xC = wC + yC * `+n+" - "+i+`;

                if (xC < 0 || xC >= `+r.inWidth+`) {
                  continue;
                }

                float dyValue = getDy(b, yF, yR, yC, d2);
                float xValue = getX(b, xF, xR, xC, d1);
                dotProd += (xValue * dyValue);
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `},lf=function(r){this.variableNames=["dy","W"],this.outputShape=r.inShape;var e=r.filterDepth,t=r.filterHeight,n=r.filterWidth,o=r.strideDepth,a=r.strideHeight,i=r.strideWidth,s=e-1-r.padInfo.front,u=t-1-r.padInfo.top,c=n-1-r.padInfo.left;this.userCode=`
      const ivec3 pads = ivec3(`+s+", "+u+", "+c+`);

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int d1 = coords.u;


        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyFCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        float dotProd = 0.0;
        for (int wF = 0; wF < `+e+`; wF++) {
          float dyF = float(dyFCorner + wF) / `+o+`.0;

          if (dyF < 0.0 || dyF >= `+r.outDepth+`.0 || fract(dyF) > 0.0) {
            continue;
          }
          int idyF = int(dyF);

          int wFPerm = `+e+` - 1 - wF;

          for (int wR = 0; wR < `+t+`; wR++) {
            float dyR = float(dyRCorner + wR) / `+a+`.0;

            if (dyR < 0.0 || dyR >= `+r.outHeight+`.0 ||
              fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            int wRPerm = `+t+` - 1 - wR;

            for (int wC = 0; wC < `+n+`; wC++) {
              float dyC = float(dyCCorner + wC) / `+i+`.0;

              if (dyC < 0.0 || dyC >= `+r.outWidth+`.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              int wCPerm = `+n+` - 1 - wC;

              for (int d2 = 0; d2 < `+r.outChannels+`; d2++) {
                float xValue = getDy(batch, idyF, idyR, idyC, d2);
                float wValue = getW(wFPerm, wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `},hf=function(r){this.variableNames=["x","dy"],this.outputShape=r.filterShape;var e=r.strideHeight,t=r.strideWidth,n=r.padInfo.top,o=r.padInfo.left,a=r.outChannels/r.inChannels;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int wR = coords.x;
        int wC = coords.y;
        int d1 = coords.z;
        int dm = coords.w;
        int d2 = d1 * `+a+` + dm;

        float dotProd = 0.0;

        // TO DO: Vec4 over the batch size
        for (int b = 0; b < `+r.batchSize+`; b++) {
          for (int yR = 0; yR < `+r.outHeight+`; yR++) {
            int xR = wR + yR * `+e+" - "+n+`;

            if (xR < 0 || xR >= `+r.inHeight+`) {
              continue;
            }

            for (int yC = 0; yC < `+r.outWidth+`; yC++) {
              int xC = wC + yC * `+t+" - "+o+`;

              if (xC < 0 || xC >= `+r.inWidth+`) {
                continue;
              }

              float dyValue = getDy(b, yR, yC, d2);
              float xValue = getX(b, xR, xC, d1);
              dotProd += (xValue * dyValue);
            }
          }
        }
        setOutput(dotProd);
      }
    `},ff=function(r){this.variableNames=["dy","W"],this.outputShape=r.inShape;var e=r.filterHeight,t=r.filterWidth,n=r.strideHeight,o=r.strideWidth,a=e-1-r.padInfo.top,i=t-1-r.padInfo.left,s=r.outChannels/r.inChannels;this.userCode=`
      const ivec2 pads = ivec2(`+a+", "+i+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[3];
        ivec2 dyCorner = coords.yz - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        float dotProd = 0.0;

        for (int wR = 0; wR < `+e+`; wR++) {
          float dyR = float(dyRCorner + wR) / `+n+`.0;

          if (dyR < 0.0 || dyR >= `+r.outHeight+`.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          int wRPerm = `+e+` - 1 - wR;

          for (int wC = 0; wC < `+t+`; wC++) {
            float dyC = float(dyCCorner + wC) / `+o+`.0;

            if (dyC < 0.0 || dyC >= `+r.outWidth+`.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            int wCPerm = `+t+` - 1 - wC;

            // TO DO: Vec4 over the channelMul
            for (int dm = 0; dm < `+s+`; dm++) {
              int d2 = d1 * `+s+` + dm;
              float xValue = getDy(batch, idyR, idyC, d2);
              float wValue = getW(wRPerm, wCPerm, d1, dm);
              dotProd += xValue * wValue;
            }
          }
        }
        setOutput(dotProd);
      }
    `},Ns=function(r,e,t,n){e===void 0&&(e=!1),t===void 0&&(t=null),n===void 0&&(n=!1),this.variableNames=["x","W"],this.outputShape=r.outShape;var o=r.padInfo.top,a=r.padInfo.left,i=r.strideHeight,s=r.strideWidth,u=r.dilationHeight,c=r.dilationWidth,l=r.filterHeight,h=r.filterWidth,f=4*Math.floor(r.inChannels/4),d=r.inChannels%4,p=r.dataFormat==="channelsLast",v=p?1:2,g=p?2:3,m=p?3:1,y="",b="";t&&(y=n?`float activation(float a) {
          float b = getPreluActivationWeightsAtOutCoords();
          `+t+`
        }`:`
          float activation(float x) {
            `+t+`
          }
        `,b="result = activation(result);");var x=e?"result += getBiasAtOutCoords();":"";e&&this.variableNames.push("bias"),n&&this.variableNames.push("preluActivationWeights"),this.userCode=`
      `+y+`

      const ivec2 strides = ivec2(`+i+", "+s+`);
      const ivec2 pads = ivec2(`+o+", "+a+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d2 = coords[`+m+`];

        ivec2 xRCCorner =
            ivec2(coords[`+v+"], coords["+g+`]) * strides - pads;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // Convolve x(?, ?, d1) with w(:, :, d1, d2) to get y(yR, yC, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < `+l+`; wR++) {
          int xR = xRCorner + wR * `+u+`;

          if (xR < 0 || xR >= `+r.inHeight+`) {
            continue;
          }

          for (int wC = 0; wC < `+h+`; wC++) {
            int xC = xCCorner + wC * `+c+`;

            if (xC < 0 || xC >= `+r.inWidth+`) {
              continue;
            }

            for (int d1 = 0; d1 < `+f+`; d1 += 4) {
              vec4 wValues = vec4(
                getW(wR, wC, d1, d2),
                getW(wR, wC, d1 + 1, d2),
                getW(wR, wC, d1 + 2, d2),
                getW(wR, wC, d1 + 3, d2)
              );

              if (`+p+`) {
                vec4 xValues = vec4(
                  getX(batch, xR, xC, d1),
                  getX(batch, xR, xC, d1 + 1),
                  getX(batch, xR, xC, d1 + 2),
                  getX(batch, xR, xC, d1 + 3)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec4 xValues = vec4(
                  getX(batch, d1, xR, xC),
                  getX(batch, d1 + 1, xR, xC),
                  getX(batch, d1 + 2, xR, xC),
                  getX(batch, d1 + 3, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }
            }

            if (`+(d===1)+`) {

              if (`+p+`) {
                dotProd +=
                    getX(batch, xR, xC, `+f+`) *
                    getW(wR, wC, `+f+`, d2);
              } else {
                dotProd +=
                    getX(batch, `+f+`, xR, xC) *
                    getW(wR, wC, `+f+`, d2);
              }

            } else if (`+(d===2)+`) {
              vec2 wValues = vec2(
                getW(wR, wC, `+f+`, d2),
                getW(wR, wC, `+f+` + 1, d2)
              );

              if (`+p+`) {
                vec2 xValues = vec2(
                  getX(batch, xR, xC, `+f+`),
                  getX(batch, xR, xC, `+f+` + 1)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec2 xValues = vec2(
                  getX(batch, `+f+`, xR, xC),
                  getX(batch, `+f+` + 1, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }

            } else if (`+(d===3)+`) {
              vec3 wValues = vec3(
                getW(wR, wC, `+f+`, d2),
                getW(wR, wC, `+f+` + 1, d2),
                getW(wR, wC, `+f+` + 2, d2)
              );

              if (`+p+`) {
                vec3 xValues = vec3(
                  getX(batch, xR, xC, `+f+`),
                  getX(batch, xR, xC, `+f+` + 1),
                  getX(batch, xR, xC, `+f+` + 2)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec3 xValues = vec3(
                  getX(batch, `+f+`, xR, xC),
                  getX(batch, `+f+` + 1, xR, xC),
                  getX(batch, `+f+` + 2, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }

            }
          }
        }

        float result = dotProd;
        `+x+`
        `+b+`
        setOutput(result);
      }
    `},df=function(r){this.variableNames=["x","W"],this.outputShape=r.outShape;var e=r.padInfo.front,t=r.padInfo.top,n=r.padInfo.left,o=r.strideDepth,a=r.strideHeight,i=r.strideWidth,s=r.dilationDepth,u=r.dilationHeight,c=r.dilationWidth,l=r.filterDepth,h=r.filterHeight,f=r.filterWidth,d=4*Math.floor(r.inChannels/4),p=r.inChannels%4;this.userCode=`
      const ivec3 strides = ivec3(`+o+", "+a+", "+i+`);
      const ivec3 pads = ivec3(`+e+", "+t+", "+n+`);

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int d2 = coords.u;

        ivec3 xFRCCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
        int xFCorner = xFRCCorner.x;
        int xRCorner = xFRCCorner.y;
        int xCCorner = xFRCCorner.z;

        // Convolve x(?, ?, ?, d1) with w(:, :, :, d1, d2) to get
        // y(yF, yR, yC, d2). ? = to be determined. : = across all
        // values in that axis.
        float dotProd = 0.0;
        for (int wF = 0; wF < `+l+`; wF++) {
          int xF = xFCorner + wF * `+s+`;

          if (xF < 0 || xF >= `+r.inDepth+`) {
            continue;
          }

          for (int wR = 0; wR < `+h+`; wR++) {
            int xR = xRCorner + wR * `+u+`;

            if (xR < 0 || xR >= `+r.inHeight+`) {
              continue;
            }

            for (int wC = 0; wC < `+f+`; wC++) {
              int xC = xCCorner + wC * `+c+`;

              if (xC < 0 || xC >= `+r.inWidth+`) {
                continue;
              }

              for (int d1 = 0; d1 < `+d+`; d1 += 4) {
                vec4 xValues = vec4(
                  getX(batch, xF, xR, xC, d1),
                  getX(batch, xF, xR, xC, d1 + 1),
                  getX(batch, xF, xR, xC, d1 + 2),
                  getX(batch, xF, xR, xC, d1 + 3)
                );
                vec4 wValues = vec4(
                  getW(wF, wR, wC, d1, d2),
                  getW(wF, wR, wC, d1 + 1, d2),
                  getW(wF, wR, wC, d1 + 2, d2),
                  getW(wF, wR, wC, d1 + 3, d2)
                );

                dotProd += dot(xValues, wValues);
              }

              if (`+(p===1)+`) {
                dotProd +=
                  getX(batch, xF, xR, xC, `+d+`) *
                  getW(wF, wR, wC, `+d+`, d2);
              } else if (`+(p===2)+`) {
                vec2 xValues = vec2(
                  getX(batch, xF, xR, xC, `+d+`),
                  getX(batch, xF, xR, xC, `+d+` + 1)
                );
                vec2 wValues = vec2(
                  getW(wF, wR, wC, `+d+`, d2),
                  getW(wF, wR, wC, `+d+` + 1, d2)
                );
                dotProd += dot(xValues, wValues);
              } else if (`+(p===3)+`) {
                vec3 xValues = vec3(
                  getX(batch, xF, xR, xC, `+d+`),
                  getX(batch, xF, xR, xC, `+d+` + 1),
                  getX(batch, xF, xR, xC, `+d+` + 2)
                );
                vec3 wValues = vec3(
                  getW(wF, wR, wC, `+d+`, d2),
                  getW(wF, wR, wC, `+d+` + 1, d2),
                  getW(wF, wR, wC, `+d+` + 2, d2)
                );
                dotProd += dot(xValues, wValues);
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `},Ms=function(r,e,t,n){e===void 0&&(e=!1),t===void 0&&(t=null),n===void 0&&(n=!1),this.variableNames=["x","W"],this.outputShape=r.outShape;var o=r.inHeight,a=r.inWidth,i=r.padInfo.top,s=r.padInfo.left,u=r.strideHeight,c=r.strideWidth,l=r.dilationHeight,h=r.dilationWidth,f=r.filterHeight,d=r.filterWidth,p=r.outChannels/r.inChannels,v="",g="";t&&(v=n?`float activation(float a) {
          float b = getPreluActivationWeightsAtOutCoords();
          `+t+`
        }`:`
          float activation(float x) {
            `+t+`
          }
        `,g="result = activation(result);");var m=e?"result += getBiasAtOutCoords();":"";e&&this.variableNames.push("bias"),n&&this.variableNames.push("preluActivationWeights"),this.userCode=`
      `+v+`

      const ivec2 strides = ivec2(`+u+", "+c+`);
      const ivec2 pads = ivec2(`+i+", "+s+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        ivec2 xRCCorner = coords.yz * strides - pads;
        int d2 = coords.w;
        int d1 = d2 / `+p+`;
        int q = d2 - d1 * `+p+`;

        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // Convolve x(?, ?, d1) with w(:, :, d1, q) to get y(yR, yC, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        // TO DO(dsmilkov): Flatten the two for loops and vec4 the operations.
        for (int wR = 0; wR < `+f+`; wR++) {
          int xR = xRCorner + wR * `+l+`;

          if (xR < 0 || xR >= `+o+`) {
            continue;
          }

          for (int wC = 0; wC < `+d+`; wC++) {
            int xC = xCCorner + wC * `+h+`;

            if (xC < 0 || xC >= `+a+`) {
              continue;
            }

            float xVal = getX(batch, xR, xC, d1);
            float wVal = getW(wR, wC, d1, q);
            dotProd += xVal * wVal;
          }
        }

        float result = dotProd;
        `+m+`
        `+g+`
        setOutput(result);
      }
    `},Ps=function(r,e,t,n){e===void 0&&(e=!1),t===void 0&&(t=null),n===void 0&&(n=!1),this.variableNames=["x","W"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=r.outShape;for(var o=r.inHeight,a=r.inWidth,i=r.padInfo.top,s=r.padInfo.left,u=r.strideHeight,c=r.strideWidth,l=r.dilationHeight,h=r.dilationWidth,f=r.filterHeight,d=r.filterWidth,p=d,v="int xR; int xC; int xCOffset;",g=0;g<f;g++)for(var m=0;m<d;m++)v+=`
          vec4 xTexelR`+g+"C"+2*m+` = vec4(0.);
          vec4 wR`+g+"C"+m+` = vec4(0.);
          vec4 xR`+g+"C"+m+" = vec4(0.);";for(g=0;g<f;g++)for(var y=0;y<p;y++){if(v+=`
          xR = xRCorner + `+g*l+`;
          xC = xCCorner + `+(m=2*y)*h+`;
        `,c===1){if(m<d&&(v+=s%2==1?`
                xCOffset = xC + 1;
                if(xR >= 0 && xR < `+o+" && xCOffset >= 0 && xCOffset < "+a+`) {
                  xTexelR`+g+"C"+m+` = getX(batch, xR, xCOffset, d1);

                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if(xCOffset + 1 >= `+a+`) {
                    xTexelR`+g+"C"+m+`.zw = vec2(0.);
                  }
                } else {
                  xTexelR`+g+"C"+m+` = vec4(0.);
                }

                xCOffset = xC + 1 - 2;
                if(xR >= 0 && xR < `+o+" && xCOffset >= 0 && xCOffset < "+a+`) {
                  vec4 previous = getX(batch, xR, xCOffset, d1);

                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if(xCOffset + 1 >= `+a+`) {
                    previous.zw = vec2(0.);
                  }

                  xR`+g+"C"+m+" = vec4(previous.zw, xTexelR"+g+"C"+m+`.xy);
                } else {
                  xR`+g+"C"+m+" = vec4(0, 0, xTexelR"+g+"C"+m+`.xy);
                }
              `:`
                if(xR >= 0 && xR < `+o+" && xC >= 0 && xC < "+a+`) {
                  xTexelR`+g+"C"+m+` = getX(batch, xR, xC, d1);
                } else {
                  xTexelR`+g+"C"+m+` = vec4(0.);
                }

                xR`+g+"C"+m+" = xTexelR"+g+"C"+m+`;
              `,m+1<d)){var b=s%2==0?Pi(h):h;h%2==0&&s%2==1||h%2!=0&&s%2!=1?(v+=`
                  xCOffset = xC + `+s%2+" + "+b+`;

                  if(xR >= 0 && xR < `+o+` &&
                    xCOffset >= 0 && xCOffset < `+a+`) {
                    xTexelR`+g+"C"+(m+2)+` = getX(batch, xR, xCOffset, d1);
                  }
                `,h>1&&(v+=`
                    xCOffset -= 2;
                    if(xR >= 0 && xR < `+o+` &&
                      xCOffset >= 0 && xCOffset < `+a+`) {
                      xTexelR`+g+"C"+m+` = getX(batch, xR, xCOffset, d1);
                    } else {
                      xTexelR`+g+"C"+m+` = vec4(0.);
                    }
                  `),v+=`
                  xR`+g+"C"+(m+1)+` = vec4(
                    xTexelR`+g+"C"+m+".zw, xTexelR"+g+"C"+(m+2)+`.xy);
                `):v+=`
                  xCOffset = xC + `+b+`;

                  if(xR >= 0 && xR < `+o+` &&
                    xCOffset >= 0 && xCOffset < `+a+`) {
                    xTexelR`+g+"C"+(m+2)+` = getX(batch, xR, xCOffset, d1);
                  }

                  xR`+g+"C"+(m+1)+" = xTexelR"+g+"C"+(m+2)+`;
                `}}else m<d&&(v+=`
              if(xR >= 0 && xR < `+o+`) {
            `,s%2==1?(v+=`
                xCOffset = xC + 1 - `+c+`;
                if(xCOffset >= 0 && xCOffset < `+a+`) {
                  xTexelR`+g+"C"+m+` = getX(batch, xR, xCOffset, d1);
                } else {
                  xTexelR`+g+"C"+m+` = vec4(0.);
                }

                if(xC + 1 >= 0 && xC + 1 < `+a+`) {
                  xTexelR`+g+"C"+(m+2)+` = getX(batch, xR, xC + 1, d1);
                } else {
                  xTexelR`+g+"C"+(m+2)+` = vec4(0.);
                }

                xR`+g+"C"+m+` = vec4(
                  xTexelR`+g+"C"+m+".zw, xTexelR"+g+"C"+(m+2)+`.zw);
              `,m+1<d&&(v+=`
                  vec4 final = vec4(0.);
                  xCOffset = xC + 1 + `+c+`;
                  if(xCOffset >= 0 && xCOffset < `+a+`) {
                    final = getX(batch, xR, xCOffset, d1);
                  }
                  xR`+g+"C"+(m+1)+" = vec4(xTexelR"+g+"C"+(m+2)+`.xy, final.xy);
                `)):(v+=`
                if(xC >= 0 && xC < `+a+`) {
                  xTexelR`+g+"C"+m+` = getX(batch, xR, xC, d1);
                } else {
                  xTexelR`+g+"C"+m+` = vec4(0.);
                }

                xCOffset = xC + `+c+`;
                if(xCOffset >= 0 && xCOffset < `+a+`) {
                  xTexelR`+g+"C"+(m+2)+` = getX(batch, xR, xCOffset, d1);
                } else {
                  xTexelR`+g+"C"+(m+2)+` = vec4(0.);
                }

                xR`+g+"C"+m+` = vec4(
                  xTexelR`+g+"C"+m+".xy, xTexelR"+g+"C"+(m+2)+`.xy);
              `,m+1<d&&(v+=`
                  xR`+g+"C"+(m+1)+` = vec4(
                    xTexelR`+g+"C"+m+".zw, xTexelR"+g+"C"+(m+2)+`.zw);
                `)),v+="}");m<d&&(v+=`
            vec4 wTexelR`+g+"C"+m+" = getW("+g+", "+m+`, d1, q);
            wR`+g+"C"+m+" = vec4(wTexelR"+g+"C"+m+".xz, wTexelR"+g+"C"+m+`.xz);
          `,m+1<d&&(v+=`
              vec4 wTexelR`+g+"C"+(m+1)+" = getW("+g+", "+(m+1)+`, d1, q);
              wR`+g+"C"+(m+1)+` =
                vec4(wTexelR`+g+"C"+(m+1)+".xz, wTexelR"+g+"C"+(m+1)+".xz);"))}for(g=0;g<f;g++)for(m=0;m<d;m++)v+="dotProd += xR"+g+"C"+m+" * wR"+g+"C"+m+";";var x="",w="";t&&(x=n?`vec4 activation(vec4 a) {
          vec4 b = getPreluActivationWeightsAtOutCoords();
          `+t+`
        }`:`vec4 activation(vec4 x) {
          `+t+`
        }`,w="result = activation(result);");var C=e?"result += getBiasAtOutCoords();":"";e&&this.variableNames.push("bias"),n&&this.variableNames.push("preluActivationWeights"),this.userCode=`
      `+x+`

      const ivec2 strides = ivec2(`+u+", "+c+`);
      const ivec2 pads = ivec2(`+i+", "+s+`);

      void main() {

        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        ivec2 xRCCorner = coords.yz * strides - pads;
        int d2 = coords.w;
        int d1 = d2;
        int q = 0;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        vec4 dotProd = vec4(0.);

        `+v+`

        vec4 result = dotProd;
        `+C+`
        `+w+`
        setOutput(result);
      }
    `},pf=function(r,e,t,n,o){this.variableNames=["Image","Boxes","BoxInd"],this.outputShape=[];var a=r[0],i=r[1],s=r[2],u=r[3],c=e[0],l=t[0],h=t[1];this.outputShape=[c,l,h,u];var f=n==="bilinear"?1:0,d=[i-1+".0",s-1+".0"],p=d[0],v=d[1],g=l>1?[""+(i-1)/(l-1),"(y2-y1) * height_ratio","y1*"+p+" + float(y)*(height_scale)"]:["0.0","0.0","0.5 * (y1+y2) * "+p],m=g[0],y=g[1],b=g[2],x=h>1?[""+(s-1)/(h-1),"(x2-x1) * width_ratio","x1*"+v+" + float(x)*(width_scale)"]:["0.0","0.0","0.5 * (x1+x2) * "+v],w=x[0],C=x[1],k=x[2];this.userCode=`
      const float height_ratio = float(`+m+`);
      const float width_ratio = float(`+w+`);
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int y = coords[1];
        int x = coords[2];
        int d = coords[3];

        // get box vals
        float y1 = getBoxes(b,0);
        float x1 = getBoxes(b,1);
        float y2 = getBoxes(b,2);
        float x2 = getBoxes(b,3);

        // get image in batch index
        int bInd = round(getBoxInd(b));
        if(bInd < 0 || bInd >= `+a+`) {
          return;
        }

        float height_scale = `+y+`;
        float width_scale = `+C+`;

        float in_y = `+b+`;
        if( in_y < 0.0 || in_y > `+p+` ) {
          setOutput(float(`+o+`));
          return;
        }
        float in_x = `+k+`;
        if( in_x < 0.0 || in_x > `+v+` ) {
          setOutput(float(`+o+`));
          return;
        }

        vec2 sourceFracIndexCR = vec2(in_x,in_y);
        if(`+f+` == 1) {
          // Compute the four integer indices.
          ivec2 sourceFloorCR = ivec2(sourceFracIndexCR);
          ivec2 sourceCeilCR = ivec2(ceil(sourceFracIndexCR));

          float topLeft = getImage(b, sourceFloorCR.y, sourceFloorCR.x, d);
          float bottomLeft = getImage(b, sourceCeilCR.y, sourceFloorCR.x, d);
          float topRight = getImage(b, sourceFloorCR.y, sourceCeilCR.x, d);
          float bottomRight = getImage(b, sourceCeilCR.y, sourceCeilCR.x, d);

          vec2 fracCR = sourceFracIndexCR - vec2(sourceFloorCR);

          float top = topLeft + (topRight - topLeft) * fracCR.x;
          float bottom = bottomLeft + (bottomRight - bottomLeft) * fracCR.x;
          float newValue = top + (bottom - top) * fracCR.y;
          setOutput(newValue);
        } else {
          // Compute the coordinators of nearest neighbor point.
          ivec2 sourceNearestCR = ivec2(floor(
            sourceFracIndexCR + vec2(0.5,0.5)));
          float newValue = getImage(b, sourceNearestCR.y, sourceNearestCR.x, d);
          setOutput(newValue);
        }
      }
    `},vf=function(r,e,t){this.variableNames=["x"],this.outputShape=r;var n=r.length,o=r[r.length-1],a=t?"<":">";this.userCode=`
      int getIndex(int i) {
        `+(t?"return "+o+" -i - 1;":"return i;")+`
      }

      void main() {
        `+wt(n)+` coords = getOutputCoords();
        int end = `+Os(n,"coords")+`;
        float val = 0.0;
        for (int i = `+o+` - 1; i >= 0; i -= 1) {
          int idx = getIndex(i);
          if (idx `+a+` end) {
            continue;
          }
          if (idx == end && `+e+`) {
            continue;
          }
          `+Os(n,"coords")+` = idx;
          val += getX(`+function(i,s){if(i===1)return""+s;if(i===2)return s+".x, "+s+".y";if(i===3)return s+".x, "+s+".y, "+s+".z";if(i===4)return s+".x, "+s+".y, "+s+".z, "+s+".w";throw Error("Cumulative sum for rank "+i+" is not yet supported")}(n,"coords")+`);
        }
        setOutput(val);
      }
    `};function Os(r,e){if(r===1)return""+e;if(r===2)return e+".y";if(r===3)return e+".z";if(r===4)return e+".w";throw Error("Cumulative sum for rank "+r+" is not yet supported")}var gf=function(r){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.outPackingScheme=or.DENSE;var e=ar(r),t=Xt();this.outputShape=r,this.userCode=`
      ivec3 outCoordsFromFlatIndex(int index) {
        `+yn(["r","c","d"],r)+`
        return ivec3(r, c, d);
      }

      void main() {
        ivec2 resTexRC = ivec2(resultUV.yx *
          vec2(`+e[0]+", "+e[1]+`));
        int index = 4 * (resTexRC.x * `+e[1]+` + resTexRC.y);

        vec4 result = vec4(0.);

        for (int i=0; i<4; i++) {
          int flatIndex = index + i;
          ivec3 rc = outCoordsFromFlatIndex(flatIndex);
          result[i] = getA(rc.x, rc.y, rc.z);
        }

        `+t.output+` = result;
      }
    `},mf=function(r){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outPackingScheme=or.DENSE;var e=ar(r),t=Xt();this.outputShape=r,this.userCode=`
      ivec3 outCoordsFromFlatIndex(int index) {
        `+yn(["r","c","d"],r)+`
        return ivec3(r, c, d);
      }

      void main() {
        ivec2 resTexRC = ivec2(resultUV.yx *
          vec2(`+e[0]+", "+e[1]+`));
        int index = 4 * (resTexRC.x * `+e[1]+` + resTexRC.y);

        vec4 result = vec4(0.);

        for (int i=0; i<4; i++) {
          int flatIndex = index + i;
          ivec3 rc = outCoordsFromFlatIndex(flatIndex);
          result[i] = getChannel(getA(rc.x, rc.y, rc.z), vec2(rc.y, rc.z));
        }

        `+t.output+` = result;
      }
    `},yf=function(){function r(e,t,n){this.variableNames=["x"],this.outputShape=[],this.outputShape=e,this.blockSize=t,this.dataFormat=n,this.userCode=`
    void main() {
      ivec4 coords = getOutputCoords();
      int b = coords[0];
      int h = `+this.getHeightCoordString()+`;
      int w = `+this.getWidthCoordString()+`;
      int d = `+this.getDepthCoordString()+`;

      int in_h = h / `+t+`;
      int offset_h = imod(h, `+t+`);
      int in_w = w / `+t+`;
      int offset_w = imod(w, `+t+`);
      int offset_d = (offset_h * `+t+` + offset_w) *
        `+this.getOutputDepthSize()+`;
      int in_d = d + offset_d;

      float result = `+this.getInputSamplingString()+`;
      setOutput(result);
    }
  `}return r.prototype.getHeightCoordString=function(){return this.dataFormat==="NHWC"?"coords[1]":"coords[2]"},r.prototype.getWidthCoordString=function(){return this.dataFormat==="NHWC"?"coords[2]":"coords[3]"},r.prototype.getDepthCoordString=function(){return this.dataFormat==="NHWC"?"coords[3]":"coords[1]"},r.prototype.getOutputDepthSize=function(){return this.dataFormat==="NHWC"?this.outputShape[3]:this.outputShape[1]},r.prototype.getInputSamplingString=function(){return this.dataFormat==="NHWC"?"getX(b, in_h, in_w, in_d)":"getX(b, in_d, in_h, in_w)"},r}(),xf=function(r){this.variableNames=["X"],this.outputShape=[r,r],this.userCode=`
      void main() {
          ivec2 coords = getOutputCoords();
          float val = coords[0] == coords[1] ? getX(coords[0]) : 0.0;
          setOutput(val);
      }
    `},bf=function(r){this.variableNames=["A"],this.outTexUsage=oe.DOWNLOAD;var e=Xt();this.outputShape=r,this.userCode=`
      `+Rs+`

      void main() {
        float x = getAAtOutCoords();
        `+e.output+` = encode_float(x);
      }
    `},wf=function(r){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!1,this.outTexUsage=oe.DOWNLOAD;var e=Xt();this.outputShape=r,this.userCode=`
      `+Rs+`

      void main() {
        ivec3 coords = getOutputCoords();
        float x = getChannel(getAAtOutCoords(), vec2(coords.y, coords.z));
        `+e.output+` = encode_float(x);
      }
    `},Cf=function(r,e,t){t===void 0&&(t=!1),this.variableNames=["A"];var n=Xt(),o=e[0],a=e[1];this.outputShape=r;var i="result";t&&(i="floor(result * 255. + 0.5)"),this.userCode=`
      `+aa(r)+`

      void main() {
        ivec3 coords = getOutputCoords();

        int flatIndex = getFlatIndex(coords);
        int offset = imod(flatIndex, 4);

        flatIndex = idiv(flatIndex, 4, 1.);
        
        int r = flatIndex / `+a+`;
        int c = imod(flatIndex, `+a+`);
        vec2 uv = (vec2(c, r) + halfCR) / vec2(`+a+".0, "+o+`.0);
        vec4 values = `+n.texture2D+`(A, uv);

        float result;

        if(offset == 0) {
          result = values[0];
        } else if(offset == 1) {
          result = values[1];
        } else if(offset == 2) {
          result = values[2];
        } else {
          result = values[3];
        }

        `+n.output+" = vec4("+i+`, 0., 0., 0.);
      }
    `},Ef=function(r,e,t){t===void 0&&(t=!1),this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0;var n=Xt(),o=e[0],a=e[1];this.outputShape=r;var i="",s="result";t&&(s="floor(result * 255. + 0.5)");for(var u=0;u<=1;u++)for(var c=0;c<=1;c++){var l=2*u+c;i+=`
          localCoords = coords;
          if(localCoords[2] + `+c+" < "+r[2]+`) {
            localCoords[2] += `+c+`;
            if(localCoords[1] + `+u+" < "+r[1]+`) {
              localCoords[1] += `+u+`;

              flatIndex = getFlatIndex(localCoords);
              offset = imod(flatIndex, 4);

              flatIndex = idiv(flatIndex, 4, 1.);

              r = flatIndex / `+a+`;
              c = imod(flatIndex, `+a+`);
              uv = (vec2(c, r) + halfCR) / vec2(`+a+".0, "+o+`.0);
              values = `+n.texture2D+`(A, uv);

              if(offset == 0) {
                result[`+l+`] = values[0];
              } else if(offset == 1) {
                result[`+l+`] = values[1];
              } else if(offset == 2) {
                result[`+l+`] = values[2];
              } else {
                result[`+l+`] = values[3];
              }
            }
          }
        `}this.userCode=`
      `+aa(r)+`

      void main() {
        ivec3 coords = getOutputCoords();

        vec4 result = vec4(0.);
        int flatIndex, r, c, offset;
        ivec3 localCoords;
        vec2 uv;
        vec4 values;

        `+i+`

        `+n.output+" = "+s+`;
      }
    `},_f="return real * expR - imag * expI;",If="return real * expI + imag * expR;",Bs=function(r,e,t){this.variableNames=["real","imag"];var n=e[1];this.outputShape=e;var o=t?"2.0 * "+Math.PI:"-2.0 * "+Math.PI,a=t?n+".0":"1.0";this.userCode=`
      const float exponentMultiplier = `+o+`;

      float unaryOpComplex(float real, float expR, float imag, float expI) {
        `+r+`
      }

      float mulMatDFT(int batch, int index) {
        float indexRatio = float(index) / float(`+n+`);
        float exponentMultiplierTimesIndexRatio =
            exponentMultiplier * indexRatio;

        float result = 0.0;

        for (int i = 0; i < `+n+`; i++) {
          // x = (-2|2 * PI / N) * index * i;
          float x = exponentMultiplierTimesIndexRatio * float(i);
          float expR = cos(x);
          float expI = sin(x);
          float real = getReal(batch, i);
          float imag = getImag(batch, i);

          result +=
              unaryOpComplex(real, expR, imag, expI) / `+a+`;
        }

        return result;
      }

      void main() {
        ivec2 coords = getOutputCoords();
        setOutput(mulMatDFT(coords[0], coords[1]));
      }
    `},Sf=function(){function r(e,t){this.outputShape=[],this.variableNames=["x"],this.outputShape=e,this.userCode=`
      uniform float value;
      void main() {
        // Input can be obtained from uniform value.
        setOutput(value);
      }
    `}return r.prototype.getCustomSetupFunc=function(e){var t=this;return function(n,o){t.valueLoc==null&&(t.valueLoc=n.getUniformLocationNoThrow(o,"value")),n.gl.uniform1f(t.valueLoc,e)}},r}(),Rf=function(r,e,t){this.variableNames=["A","indices"];var n=r.slice();n[t]=e,this.outputShape=n,this.rank=n.length;var o=wt(this.rank),a=function(i,s){var u=i.length;if(u>4)throw Error("Gather for rank "+u+" is not yet supported");if(u===1)return"int(getIndices(resRC))";for(var c=["resRC.x","resRC.y","resRC.z","resRC.w"],l=[],h=0;h<i.length;h++)h===s?l.push("int(getIndices("+c[h]+"))"):l.push(""+c[h]);return l.join()}(r,t);this.userCode=`
      void main() {
        `+o+` resRC = getOutputCoords();
        setOutput(getA(`+a+`));
      }
    `},kf=function(r,e,t){this.sliceDim=r,this.strides=e,this.variableNames=["x","indices"],this.outputShape=t;var n=wt(e.length),o=wt(t.length),a=this.sliceDim>1?"strides[j]":"strides";this.userCode=`
        `+n+" strides = "+n+"("+this.strides+`);
         void main() {
          `+o+` coords = getOutputCoords();
          int flattenIndex = 0;
          for (int j = 0; j < `+this.sliceDim+`; j++) {
            int index = round(getIndices(coords[0], j));
            flattenIndex += index * `+a+`;
          }
          setOutput(getX(flattenIndex, coords[1]));
        }
      `};function Df(r,e){var t=Xt();return El(r,e,t.version+`
    precision highp float;
    `+t.attribute+` vec3 clipSpacePos;
    `+t.attribute+` vec2 uv;
    `+t.varyingVs+` vec2 resultUV;

    void main() {
      gl_Position = vec4(clipSpacePos, 1);
      resultUV = uv;
    }`)}function Af(r,e){return kl(r,e,new Float32Array([-1,1,0,0,1,-1,-1,0,0,0,1,1,0,1,1,1,-1,0,1,0]))}function Tf(r,e){return Dl(r,e,new Uint16Array([0,1,2,2,1,3]))}function cr(r,e,t,n,o,a,i){Tl(t,n);var s=Al(r,e),u=r.TEXTURE_2D;return J(r,e,function(){return r.bindTexture(u,s)}),J(r,e,function(){return r.texParameteri(u,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE)}),J(r,e,function(){return r.texParameteri(u,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}),J(r,e,function(){return r.texParameteri(u,r.TEXTURE_MIN_FILTER,r.NEAREST)}),J(r,e,function(){return r.texParameteri(u,r.TEXTURE_MAG_FILTER,r.NEAREST)}),J(r,e,function(){return r.texImage2D(u,0,o,t,n,0,a,i,null)}),J(r,e,function(){return r.bindTexture(r.TEXTURE_2D,null)}),s}function Ff(r,e,t,n,o){var a=Sr(t,n);return cr(r,e,a[0],a[1],o.internalFormatFloat,o.textureFormatFloat,r.FLOAT)}function Nf(r,e,t,n,o){var a=Sr(t,n);return cr(r,e,a[0],a[1],o.internalFormatHalfFloat,o.textureFormatFloat,o.textureTypeHalfFloat)}function Mf(r,e,t,n,o){var a=Sr(t,n);return cr(r,e,a[0],a[1],r.RGBA,r.RGBA,r.UNSIGNED_BYTE)}function Pf(r,e,t,n,o){var a=ir(t,n);return cr(r,e,a[0],a[1],o.internalFormatPackedFloat,r.RGBA,r.FLOAT)}function Of(r,e,t,n,o){var a=ir(t,n);return cr(r,e,a[0],a[1],o.internalFormatPackedHalfFloat,r.RGBA,o.textureTypeHalfFloat)}function Bf(r,e,t,n){return J(r,e,function(){return r.bindBuffer(r.ARRAY_BUFFER,n)}),Yi(r,e,t,"clipSpacePos",n,3,20,0)&&Yi(r,e,t,"uv",n,2,20,12)}function Lf(r,e,t,n,o,a,i){var s,u,c;J(r,e,function(){return r.bindTexture(r.TEXTURE_2D,t)}),a instanceof Uint8Array?(s=new Uint8Array(n*o*4),u=r.UNSIGNED_BYTE,c=r.RGBA):(s=new Float32Array(n*o*4),u=r.FLOAT,c=i.internalFormatPackedFloat),s.set(a),J(r,e,function(){return r.texImage2D(r.TEXTURE_2D,0,c,n,o,0,r.RGBA,u,s)}),J(r,e,function(){return r.bindTexture(r.TEXTURE_2D,null)})}function Wf(r,e,t,n){J(r,e,function(){return r.bindTexture(r.TEXTURE_2D,t)}),n.data instanceof Uint8Array?J(r,e,function(){return r.texImage2D(r.TEXTURE_2D,0,r.RGBA,n.width,n.height,0,r.RGBA,r.UNSIGNED_BYTE,n.data)}):J(r,e,function(){return r.texImage2D(r.TEXTURE_2D,0,r.RGBA,r.RGBA,r.UNSIGNED_BYTE,n)}),J(r,e,function(){return r.bindTexture(r.TEXTURE_2D,null)})}function Uf(r,e,t,n,o){var a=r.createBuffer();J(r,e,function(){return r.bindBuffer(r.PIXEL_PACK_BUFFER,a)});var i=16*t*n;return J(r,e,function(){return r.bufferData(r.PIXEL_PACK_BUFFER,i,r.STREAM_READ)}),J(r,e,function(){return r.readPixels(0,0,n,t,r.RGBA,r.FLOAT,0)}),J(r,e,function(){return r.bindBuffer(r.PIXEL_PACK_BUFFER,null)}),a}function zf(r,e,t){var n=r,o=new Float32Array(t);return n.bindBuffer(n.PIXEL_PACK_BUFFER,e),n.getBufferSubData(n.PIXEL_PACK_BUFFER,0,o),n.bindBuffer(n.PIXEL_PACK_BUFFER,null),o}function Vf(r,e,t,n,o){var a=Sr(t,n),i=a[0],s=a[1],u=new Uint8Array(t*n*4);return J(r,e,function(){return r.readPixels(0,0,i,s,o.downloadTextureFormat,r.UNSIGNED_BYTE,u)}),new Float32Array(u.buffer)}function Gf(r,e,t,n,o,a,i,s){var u=r,c=new Float32Array(function(l,h){var f=ir(l,h);return f[0]*f[1]*4}(a,i));return u.bindBuffer(u.PIXEL_PACK_BUFFER,e),u.getBufferSubData(u.PIXEL_PACK_BUFFER,0,c),u.bindBuffer(u.PIXEL_PACK_BUFFER,null),c}function Hf(r,e,t,n){var o=new Float32Array(t*n*4);return J(r,e,function(){return r.readPixels(0,0,n,t,r.RGBA,r.FLOAT,o)}),o}var qf=function(){function r(e){this.outputTexture=null,this.program=null,this.disposed=!1,this.vertexAttrsAreBound=!1,this.itemsToPoll=[];var t=P().getNumber("WEBGL_VERSION");e!=null?(this.gl=e,yl(t,e)):this.gl=Se(t);var n="WEBGL_color_buffer_float";if(P().getNumber("WEBGL_VERSION")===1){if(this.textureFloatExtension=Rr(this.gl,this.debug,"OES_texture_float"),he(this.gl,"OES_texture_half_float"))this.textureHalfFloatExtension=Rr(this.gl,this.debug,"OES_texture_half_float");else if(P().get("WEBGL_FORCE_F16_TEXTURES"))throw new Error("GL context does not support half float textures, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.");if(this.colorBufferFloatExtension=this.gl.getExtension(n),he(this.gl,"EXT_color_buffer_half_float"))this.colorBufferHalfFloatExtension=Rr(this.gl,this.debug,"EXT_color_buffer_half_float");else if(P().get("WEBGL_FORCE_F16_TEXTURES"))throw new Error("GL context does not support color renderable half floats, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.")}else if(n="EXT_color_buffer_float",he(this.gl,n))this.colorBufferFloatExtension=this.gl.getExtension(n);else{if(!he(this.gl,"EXT_color_buffer_half_float"))throw new Error("GL context does not support color renderable floats");this.colorBufferHalfFloatExtension=this.gl.getExtension("EXT_color_buffer_half_float")}this.vertexBuffer=Af(this.gl,this.debug),this.indexBuffer=Tf(this.gl,this.debug),this.framebuffer=Fl(this.gl,this.debug),this.textureConfig=Lo(this.gl,this.textureHalfFloatExtension)}return Object.defineProperty(r.prototype,"debug",{get:function(){return P().getBool("DEBUG")},enumerable:!0,configurable:!0}),r.prototype.dispose=function(){var e=this;if(!this.disposed){this.program!=null&&console.warn("Disposing a GPGPUContext that still has a bound WebGLProgram. This is probably a resource leak, delete the program with GPGPUContext.deleteProgram before disposing."),this.outputTexture!=null&&console.warn("Disposing a GPGPUContext that still has a bound output matrix texture.  This is probably a resource leak, delete the output matrix texture with GPGPUContext.deleteMatrixTexture before disposing.");var t=this.gl;J(t,this.debug,function(){return t.finish()}),J(t,this.debug,function(){return t.bindFramebuffer(t.FRAMEBUFFER,null)}),J(t,this.debug,function(){return t.deleteFramebuffer(e.framebuffer)}),J(t,this.debug,function(){return t.bindBuffer(t.ARRAY_BUFFER,null)}),J(t,this.debug,function(){return t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,null)}),J(t,this.debug,function(){return t.deleteBuffer(e.indexBuffer)}),this.disposed=!0}},r.prototype.createFloat32MatrixTexture=function(e,t){return this.throwIfDisposed(),Ff(this.gl,this.debug,e,t,this.textureConfig)},r.prototype.createFloat16MatrixTexture=function(e,t){return this.throwIfDisposed(),Nf(this.gl,this.debug,e,t,this.textureConfig)},r.prototype.createUnsignedBytesMatrixTexture=function(e,t){return this.throwIfDisposed(),Mf(this.gl,this.debug,e,t,this.textureConfig)},r.prototype.uploadPixelDataToTexture=function(e,t){this.throwIfDisposed(),Wf(this.gl,this.debug,e,t)},r.prototype.uploadDenseMatrixToTexture=function(e,t,n,o){this.throwIfDisposed(),Lf(this.gl,this.debug,e,t,n,o,this.textureConfig)},r.prototype.createFloat16PackedMatrixTexture=function(e,t){return this.throwIfDisposed(),Of(this.gl,this.debug,e,t,this.textureConfig)},r.prototype.createPackedMatrixTexture=function(e,t){return this.throwIfDisposed(),Pf(this.gl,this.debug,e,t,this.textureConfig)},r.prototype.deleteMatrixTexture=function(e){var t=this;this.throwIfDisposed(),this.outputTexture===e&&(Ji(this.gl,this.debug,this.framebuffer),this.outputTexture=null),J(this.gl,this.debug,function(){return t.gl.deleteTexture(e)})},r.prototype.downloadByteEncodedFloatMatrixFromOutputTexture=function(e,t,n){var o=this;return this.downloadMatrixDriver(e,function(){return Vf(o.gl,o.debug,t,n,o.textureConfig)})},r.prototype.downloadPackedMatrixFromBuffer=function(e,t,n,o,a,i){return Gf(this.gl,e,0,0,0,a,i,this.textureConfig)},r.prototype.downloadFloat32MatrixFromBuffer=function(e,t){return zf(this.gl,e,t)},r.prototype.createBufferFromTexture=function(e,t,n){this.bindTextureToFrameBuffer(e);var o=Uf(this.gl,this.debug,t,n,this.textureConfig);return this.unbindTextureToFrameBuffer(),o},r.prototype.createAndWaitForFence=function(){var e=this.createFence(this.gl);return this.pollFence(e)},r.prototype.createFence=function(e){var t,n,o=this;if(P().getBool("WEBGL_FENCE_API_ENABLED")){var a=e,i=a.fenceSync(a.SYNC_GPU_COMMANDS_COMPLETE,0);e.flush(),n=function(){var s=a.clientWaitSync(i,0,0);return s===a.ALREADY_SIGNALED||s===a.CONDITION_SATISFIED},t=i}else P().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")>0?(t=this.beginQuery(),this.endQuery(),n=function(){return o.isQueryAvailable(t,P().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))}):n=function(){return!0};return{query:t,isFencePassed:n}},r.prototype.downloadMatrixFromPackedTexture=function(e,t,n){var o=this;return this.downloadMatrixDriver(e,function(){return Hf(o.gl,o.debug,t,n)})},r.prototype.createProgram=function(e){this.throwIfDisposed();var t=this.gl,n=_l(t,this.debug,e),o=Df(t,this.debug),a=Sl(t,this.debug);return J(t,this.debug,function(){return t.attachShader(a,o)}),J(t,this.debug,function(){return t.attachShader(a,n)}),Rl(t,this.debug,a),this.debug&&zo(t,this.debug,a),this.vertexAttrsAreBound||(this.setProgram(a),this.vertexAttrsAreBound=Bf(t,this.debug,this.program,this.vertexBuffer)),a},r.prototype.deleteProgram=function(e){var t=this;this.throwIfDisposed(),e===this.program&&(this.program=null),e!=null&&J(this.gl,this.debug,function(){return t.gl.deleteProgram(e)})},r.prototype.setProgram=function(e){var t=this;this.throwIfDisposed(),this.program=e,this.program!=null&&this.debug&&zo(this.gl,this.debug,this.program),J(this.gl,this.debug,function(){return t.gl.useProgram(e)})},r.prototype.getUniformLocation=function(e,t,n){return n===void 0&&(n=!0),this.throwIfDisposed(),n?Ml(this.gl,this.debug,e,t):Pl(this.gl,e,t)},r.prototype.getAttributeLocation=function(e,t){var n=this;return this.throwIfDisposed(),J(this.gl,this.debug,function(){return n.gl.getAttribLocation(e,t)})},r.prototype.getUniformLocationNoThrow=function(e,t){return this.throwIfDisposed(),this.gl.getUniformLocation(e,t)},r.prototype.setInputMatrixTexture=function(e,t,n){this.throwIfDisposed(),this.throwIfNoProgram(),Ol(this.gl,this.debug,this.program,e,t,n)},r.prototype.setOutputMatrixTexture=function(e,t,n){this.setOutputMatrixTextureDriver(e,n,t)},r.prototype.setOutputPackedMatrixTexture=function(e,t,n){this.throwIfDisposed();var o=ir(t,n),a=o[0],i=o[1];this.setOutputMatrixTextureDriver(e,a,i)},r.prototype.setOutputMatrixWriteRegion=function(e,t,n,o){this.setOutputMatrixWriteRegionDriver(n,e,o,t)},r.prototype.setOutputPackedMatrixWriteRegion=function(e,t,n,o){throw new Error("setOutputPackedMatrixWriteRegion not implemented.")},r.prototype.debugValidate=function(){this.program!=null&&zo(this.gl,this.debug,this.program),kr(this.gl)},r.prototype.executeProgram=function(){this.throwIfDisposed(),this.throwIfNoProgram();var e=this.gl;this.debug&&this.debugValidate(),J(e,this.debug,function(){return e.drawElements(e.TRIANGLES,6,e.UNSIGNED_SHORT,0)})},r.prototype.blockUntilAllProgramsCompleted=function(){var e=this;this.throwIfDisposed(),J(this.gl,this.debug,function(){return e.gl.finish()})},r.prototype.getQueryTimerExtension=function(){return this.disjointQueryTimerExtension==null&&(this.disjointQueryTimerExtension=Rr(this.gl,this.debug,P().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")===2?"EXT_disjoint_timer_query_webgl2":"EXT_disjoint_timer_query")),this.disjointQueryTimerExtension},r.prototype.getQueryTimerExtensionWebGL2=function(){return this.getQueryTimerExtension()},r.prototype.getQueryTimerExtensionWebGL1=function(){return this.getQueryTimerExtension()},r.prototype.beginQuery=function(){if(P().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")===2){var e=this.gl,t=this.getQueryTimerExtensionWebGL2(),n=e.createQuery();return e.beginQuery(t.TIME_ELAPSED_EXT,n),n}var o=this.getQueryTimerExtensionWebGL1(),a=o.createQueryEXT();return o.beginQueryEXT(o.TIME_ELAPSED_EXT,a),a},r.prototype.endQuery=function(){if(P().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")!==2){var e=this.getQueryTimerExtensionWebGL1();e.endQueryEXT(e.TIME_ELAPSED_EXT)}else{var t=this.gl,n=this.getQueryTimerExtensionWebGL2();t.endQuery(n.TIME_ELAPSED_EXT)}},r.prototype.waitForQueryAndGetTime=function(e){return K(this,void 0,void 0,function(){var t=this;return $(this,function(n){switch(n.label){case 0:return[4,Oi(function(){return t.disposed||t.isQueryAvailable(e,P().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))})];case 1:return n.sent(),[2,this.getQueryTime(e,P().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))]}})})},r.prototype.getQueryTime=function(e,t){if(t===0)return null;if(t===2){var n=this.gl;return n.getQueryParameter(e,n.QUERY_RESULT)/1e6}var o=this.getQueryTimerExtensionWebGL1();return o.getQueryObjectEXT(e,o.QUERY_RESULT_EXT)/1e6},r.prototype.isQueryAvailable=function(e,t){if(t===0)return!0;if(t===2){var n=this.gl,o=this.getQueryTimerExtensionWebGL2(),a=n.getQueryParameter(e,n.QUERY_RESULT_AVAILABLE);return this.disjoint==null&&(this.disjoint=this.gl.getParameter(o.GPU_DISJOINT_EXT)),a&&!this.disjoint}return a=(o=this.getQueryTimerExtensionWebGL1()).getQueryObjectEXT(e,o.QUERY_RESULT_AVAILABLE_EXT),this.disjoint==null&&(this.disjoint=this.gl.getParameter(o.GPU_DISJOINT_EXT)),a&&!this.disjoint},r.prototype.pollFence=function(e){var t=this;return new Promise(function(n){t.addItemToPoll(function(){return e.isFencePassed()},function(){return n()})})},r.prototype.pollItems=function(){for(var e=function(n){for(var o=0;o<n.length&&n[o]();++o);return o-1}(this.itemsToPoll.map(function(n){return n.isDoneFn})),t=0;t<=e;++t)(0,this.itemsToPoll[t].resolveFn)();this.itemsToPoll=this.itemsToPoll.slice(e+1)},r.prototype.addItemToPoll=function(e,t){var n=this;this.itemsToPoll.push({isDoneFn:e,resolveFn:t}),this.itemsToPoll.length>1||Oi(function(){return n.pollItems(),n.itemsToPoll.length===0})},r.prototype.bindTextureToFrameBuffer=function(e){this.throwIfDisposed(),Vo(this.gl,this.debug,e,this.framebuffer),this.debug&&kr(this.gl)},r.prototype.unbindTextureToFrameBuffer=function(){this.outputTexture!=null?(Vo(this.gl,this.debug,this.outputTexture,this.framebuffer),this.debug&&kr(this.gl)):Ji(this.gl,this.debug,this.framebuffer)},r.prototype.downloadMatrixDriver=function(e,t){this.bindTextureToFrameBuffer(e);var n=t();return this.unbindTextureToFrameBuffer(),n},r.prototype.setOutputMatrixTextureDriver=function(e,t,n){this.throwIfDisposed();var o=this.gl;Vo(o,this.debug,e,this.framebuffer),this.debug&&kr(o),this.outputTexture=e,J(o,this.debug,function(){return o.viewport(0,0,t,n)}),J(o,this.debug,function(){return o.scissor(0,0,t,n)})},r.prototype.setOutputMatrixWriteRegionDriver=function(e,t,n,o){var a=this;this.throwIfDisposed(),J(this.gl,this.debug,function(){return a.gl.scissor(e,t,n,o)})},r.prototype.throwIfDisposed=function(){if(this.disposed)throw new Error("Attempted to use disposed GPGPUContext.")},r.prototype.throwIfNoProgram=function(){if(this.program==null)throw new Error("No GPU program is currently set.")},r}();function Ls(r,e){if(r.length!==e.length)throw Error("Binary was compiled with "+r.length+" inputs, but was executed with "+e.length+" inputs");r.forEach(function(t,n){var o=t.logicalShape,a=e[n],i=a.shape;if(!Wt(o,i))throw Error("Binary was compiled with different shapes than the current args. Shapes "+o+" and "+i+" must match");if(!t.isUniform||!a.isUniform){var s=t.texShape,u=a.isUniform?null:a.texData.texShape;if(!Wt(s,u))throw Error("Binary was compiled with different texture shapes than the current args. Shape "+s+" and "+u+" must match")}})}var jf=function(r,e,t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=r;for(var n=t.filterWidth,o=t.inChannels,a=t.strideWidth,i=t.strideHeight,s=t.padInfo,u=t.outWidth,c=t.dilationWidth,l=t.dilationHeight,h=t.dataFormat,f=s.left,d=s.top,p=o*n,v=Xt(),g=h==="channelsLast",m=g?0:1,y=g?1:2,b="",x=0;x<=1;x++)for(var w=0;w<=1;w++)b+=`
          blockIndex = rc.y + `+w+`;
          pos = rc.x + `+x+`;

          if(blockIndex < `+r[1]+" && pos < "+r[0]+`) {
            offsetY = int(blockIndex / (`+u+")) * "+i+" - "+d+`;
            d0 = offsetY + `+l+" * (pos / "+p+`);

            if(d0 < `+e[m]+` && d0 >= 0) {

              offsetX = int(mod(float(blockIndex), `+u+".) * "+a+". - "+f+`.);
              d1 = offsetX + `+c+" * (int(mod(float(pos), "+p+".) / "+o+`.));

              if(d1 < `+e[y]+` && d1 >= 0) {

                ch = int(mod(float(pos), `+o+`.));

                if (`+g+`) {
                  innerDims = vec2(d1, ch);
                  result[`+(2*x+w)+`] = getChannel(
                    getA(d0, int(innerDims.x),
                    int(innerDims.y)), innerDims);
                } else {
                  innerDims = vec2(d0, d1);
                  result[`+(2*x+w)+`] = getChannel(
                    getA(ch, int(innerDims.x),
                    int(innerDims.y)), innerDims);
                }
              }
            }
          }
        `;this.userCode=`
      void main() {
        ivec2 rc = getOutputCoords();

        vec4 result = vec4(0);

        int blockIndex, pos, offsetY, d0, offsetX, d1, ch;
        vec2 innerDims;

        `+b+`

        `+v.output+` = result;
      }
    `},Xf=function(r,e,t,n,o){this.variableNames=["x"],this.outputShape=[];var a,i=e,s=r[3]-1;this.outputShape=r;var u="float("+t+") + float("+n+") * sum";a=o===.5?"inversesqrt("+u+")":o===1?"1.0/("+u+")":"exp(log("+u+") * float(-"+o+"));",this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int r = coords[1];
        int c = coords[2];
        int d = coords[3];
        float x = getX(b, r, c, d);
        float sum = 0.0;
        for (int j = -`+i+"; j <= "+i+`; j++) {
          int idx = d + j;
          if (idx >= 0 && idx <=  `+s+`) {
            float z = getX(b, r, c, idx);
            sum += z * z;
          }
        }
        float val = x * `+a+`;
        setOutput(val);
      }
    `},Kf=function(r,e,t,n,o){this.variableNames=["inputImage","outputImage","dy"],this.outputShape=[],this.outputShape=r,this.depth=r[3],this.depthRadius=e,this.bias=t,this.alpha=n,this.beta=o,this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int r = coords[1];
        int c = coords[2];

        float result = 0.0;
        for (int d = 0; d < `+this.depth+`; ++d) {
          int depthBegin = int(max(0.0, float(d - `+e+`)));
          int depthEnd = int(min(float(`+this.depth+`),
              float(d + `+e+` + 1)));

          const int MIN_DEPTH_BEGIN = 0;
          const int MAX_DEPTH_END = `+this.depth+`;

          float norm = 0.0;
          for (int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k) {
            if (k < depthBegin){
              continue;
            }
            else if (k >= depthBegin && k < depthEnd) {
              norm += getInputImage(b, r, c, k) * getInputImage(b, r, c, k);
            }
            else {
              break;
            }
          }

          norm = float(`+n+") * norm + float("+t+`);

          for(int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k){
            if (k < depthBegin){
              continue;
            }
            else if (k >= depthBegin && k < depthEnd){
              float dyi = -2.0 * float(`+n+`)
                * float(`+o+`)
                * getInputImage(b ,r ,c, k) * getOutputImage(b, r, c, d)
                / norm;
              if (k == d) {
                dyi += pow(norm, -1.0 * `+o+`);
              }
              if (k == coords[3]) {
                dyi *= getDy(b, r, c, d);
                result += dyi;
              }
            }
            else {
              break;
            }
          }
      }
      setOutput(result);
      }
    `},$f=function(r,e,t,n,o){this.variableNames=["x"],this.outputShape=[],this.packedInputs=!0,this.packedOutput=!0;var a,i=e,s=r[3]-1;this.outputShape=r;var u="float("+t+") + float("+n+") * sum";a=o===.5?"inversesqrt("+u+")":o===1?"1.0/("+u+")":"exp(log("+u+") * float(-"+o+"));",this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords.x;
        int r = coords.y;
        int c = coords.z;
        int d = coords.w;

        bool hasNextCol = d < `+this.outputShape[3]+`;
        bool hasNextRow = c < `+this.outputShape[2]+`;

        vec4 sum = vec4(0.);
        vec4 xFragAtOutputCoords = getX(b, r, c, d);

        vec4 xAtOutputCoords = vec4(
          getChannel(xFragAtOutputCoords, vec2(c, d)),
          hasNextCol ?
            getChannel(xFragAtOutputCoords, vec2(c, d + 1)) : 0.0,
          hasNextRow ?
            getChannel(xFragAtOutputCoords , vec2(c + 1, d)) : 0.0,
          (hasNextRow && hasNextCol) ?
            getChannel(xFragAtOutputCoords, vec2(c + 1, d + 1)) : 0.0
        );

        int firstChannel = d - `+i+`;
        vec2 cache = vec2(0.);
        if(firstChannel >= 0){
          vec4 firstChannelFrag = getX(b, r, c, firstChannel);
          cache.x = getChannel(firstChannelFrag, vec2(c, firstChannel));
            if(hasNextRow){
              cache.y = getChannel(firstChannelFrag, vec2(c + 1, firstChannel));
            }
        }

        ivec2 depth = ivec2(d, d + 1);
        for (int j = - `+i+"; j <= "+i+`; j++) {
          ivec2 idx = depth + j;
          bvec2 aboveLowerBound = greaterThanEqual(idx, ivec2(0));
          bvec2 belowUpperBound = lessThanEqual(idx, ivec2(`+s+`));

          bool depthInRange = aboveLowerBound.x && belowUpperBound.x;
          bool depthPlusOneInRange = aboveLowerBound.y && belowUpperBound.y;

          if(depthInRange || depthPlusOneInRange){
            vec4 z = vec4(0.);
            vec4 xFragAtCurrentDepth;
            z.xz = cache.xy;
            if(depthPlusOneInRange && hasNextCol){
              xFragAtCurrentDepth = idx.y != d ?
                getX(b, r, c, idx.y) : xFragAtOutputCoords;
              z.y = getChannel(xFragAtCurrentDepth, vec2(c, idx.y));
              if(hasNextRow){
                z.w = getChannel(xFragAtCurrentDepth, vec2(c + 1, idx.y));
              }
            }
            cache.xy = z.yw;
            sum += z * z;
          }
        }
        vec4 result = xAtOutputCoords * `+a+`;
        setOutput(result);
      }
    `},Yf=function(r){this.variableNames=["dy","maxPos"],this.outputShape=r.inShape;var e=r.strideHeight,t=r.strideWidth,n=r.dilationHeight,o=r.effectiveFilterHeight,a=r.effectiveFilterWidth,i=o-1-r.padInfo.top,s=a-1-r.padInfo.left,u=o*a-1;this.userCode=`
      const ivec2 pads = ivec2(`+i+", "+s+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];

        ivec2 dyRCCorner = coords.yz - pads;
        int dyRCorner = dyRCCorner.x;
        int dyCCorner = dyRCCorner.y;

        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < `+o+`;
          wR += `+n+`) {
          float dyR = float(dyRCorner + wR) / `+e+`.0;

          if (dyR < 0.0 || dyR >= `+r.outHeight+`.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          for (int wC = 0; wC < `+a+`; wC++) {
            float dyC = float(dyCCorner + wC) / `+t+`.0;

            if (dyC < 0.0 || dyC >= `+r.outWidth+`.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            float dyValue = getDy(b, idyR, idyC, d);
            int maxPosValue = `+u+` - int(getMaxPos(b, idyR, idyC, d));

            // Get the current value, check it against the value from the
            // position matrix.
            int curPosValue = wR * `+a+` + wC;
            float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);

            dotProd += dyValue * mask;
          }
        }
        setOutput(dotProd);
      }
    `},Jf=function(r){this.variableNames=["dy","maxPos"],this.outputShape=r.inShape;var e=r.strideDepth,t=r.strideHeight,n=r.strideWidth,o=r.dilationDepth,a=r.dilationHeight,i=r.dilationWidth,s=r.effectiveFilterDepth,u=r.effectiveFilterHeight,c=r.effectiveFilterWidth,l=s-1-r.padInfo.front,h=u-1-r.padInfo.top,f=c-1-r.padInfo.left,d=s*u*c-1;this.userCode=`
      const ivec3 pads = ivec3(`+l+", "+h+", "+f+`);

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyDCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        // Convolve dy(?, ?, ?, ch) with pos mask(:, :, :, d) to get
        // dx(xD, xR, xC, ch).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int wD = 0; wD < `+s+`;
           wD += `+o+`) {
          float dyD = float(dyDCorner + wD) / `+e+`.0;

          if (dyD < 0.0 || dyD >= `+r.outDepth+`.0 || fract(dyD) > 0.0) {
            continue;
          }
          int idyD = int(dyD);

          for (int wR = 0; wR < `+u+`;
              wR += `+a+`) {
            float dyR = float(dyRCorner + wR) / `+t+`.0;

            if (dyR < 0.0 || dyR >= `+r.outHeight+`.0 ||
                fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            for (int wC = 0; wC < `+c+`;
                wC += `+i+`) {
              float dyC = float(dyCCorner + wC) / `+n+`.0;

              if (dyC < 0.0 || dyC >= `+r.outWidth+`.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              float dyValue = getDy(batch, idyD, idyR, idyC, ch);
              int maxPosValue = `+d+` -
                  int(getMaxPos(batch, idyD, idyR, idyC, ch));

              // Get the current value, check it against the value from the
              // position matrix.
              int curPosValue =
                  wD * `+u+" * "+c+` +
                  wR * `+c+` + wC;
              float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);

              dotProd += dyValue * mask;
            }
          }
        }
        setOutput(dotProd);
      }
    `},ua=function(r,e,t,n,o,a,i){t===void 0&&(t=!1),n===void 0&&(n=!1),o===void 0&&(o=!1),a===void 0&&(a=null),i===void 0&&(i=!1),this.variableNames=["matrixA","matrixB"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=e;var s=t?r[1]:r[2],u=Math.ceil(s/2),c=t?"i * 2, rc.y":"rc.y, i * 2",l=n?"rc.z, i * 2":"i * 2, rc.z",h=t?["a.xxyy","a.zzww"]:["a.xxzz","a.yyww"],f=n?["b.xzxz","b.ywyw"]:["b.xyxy","b.zwzw"],d="",p="";a&&(d=i?`vec4 activation(vec4 a) {
          vec4 b = getPreluActivationWeightsAtOutCoords();
          `+a+`
        }`:`vec4 activation(vec4 x) {
          `+a+`
        }`,p="result = activation(result);");var v=o?"result += getBiasAtOutCoords();":"";o&&this.variableNames.push("bias"),i&&this.variableNames.push("preluActivationWeights"),this.userCode=`
      `+d+`

      const float sharedDimension = `+u+`.0;

      vec4 dot2x2ARowBCol(ivec3 rc) {
        vec4 result = vec4(0);
        for (int i = 0; i < `+u+`; i++) {
          vec4 a = getMatrixA(rc.x, `+c+`);
          vec4 b = getMatrixB(rc.x, `+l+`);

          // These swizzled products need to be separately added.
          // See: https://github.com/tensorflow/tfjs/issues/1735
          result += (`+h[0]+" * "+f[0]+`);
          result += (`+h[1]+" * "+f[1]+`);
        }
        return result;
      }

      void main() {
        ivec3 rc = getOutputCoords();
        vec4 result = dot2x2ARowBCol(rc);

        `+v+`

        `+p+`

        setOutput(result);
      }
    `},Qf=function(){function r(e,t,n){this.variableNames=["probs"],this.outputShape=[e,n],this.userCode=`
      uniform float seed;

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];

        float r = random(seed);
        float cdf = 0.0;

        for (int i = 0; i < `+(t-1)+`; i++) {
          cdf += getProbs(batch, i);

          if (r < cdf) {
            setOutput(float(i));
            return;
          }
        }

        // If no other event happened, last event happened.
        setOutput(float(`+(t-1)+`));
      }
    `}return r.prototype.getCustomSetupFunc=function(e){var t=this;return function(n,o){t.seedLoc==null&&(t.seedLoc=n.getUniformLocation(o,"seed")),n.gl.uniform1f(t.seedLoc,e)}},r}(),Zf=function(r,e,t,n){this.variableNames=["indices"],this.outputShape=[r,e],this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int index = round(getIndices(coords.x));
        setOutput(mix(float(`+n+"), float("+t+`),
                      float(index == coords.y)));
      }
    `},td=function(r){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.outputShape=r;var e=r.length;if(e===0)this.userCode=`
        void main() {
          setOutput(vec4(getA(), 0., 0., 0.));
        }
      `;else{var t=ne("rc",e),n=wt(e),o=function(s,u,c){if(s===1)return"rc > "+u[0];for(var l="",h=s-2;h<s;h++)l+=c[h]+" >= "+u[h],h<s-1&&(l+="||");return l}(e,r,t),a=function(s,u,c,l){if(s===1)return"";var h=l.slice(-2);return`
    int r = `+h[0]+`;
    int c = `+h[1]+`;
    int rp1 = r + 1;
    int cp1 = c + 1;

    bool cEdge = cp1 >= `+u+`;
    bool rEdge = rp1 >= `+c+`;
  `}(e,r[r.length-1],r[r.length-2],t),i=function(s,u){var c=s.length,l=function(h,f){for(var d=[],p=0;p<=1;p++)for(var v=0;v<=1;v++){for(var g=(p===0?"r":"rp1")+", "+(v===0?"c":"cp1"),m=2;m<h;m++)g=f[f.length-1-m]+","+g;d.push(g)}return d}(c,u);return c===1?`getA(rc),
            rc + 1 >= `+s[0]+` ? 0. : getA(rc + 1),
            0, 0`:"getA("+l[0]+`),
          cEdge ? 0. : getA(`+l[1]+`),
          rEdge ? 0. : getA(`+l[2]+`),
          rEdge || cEdge ? 0. : getA(`+l[3]+")"}(r,t);this.userCode=`
        void main() {
          `+n+` rc = getOutputCoords();

          if(`+o+`) {
            setOutput(vec4(0));
          } else {
            `+a+`

            setOutput(vec4(`+i+`));
          }
        }
      `}},ed=function(r,e,t){this.variableNames=["x"],this.outputShape=e.map(function(u,c){return u[0]+r[c]+u[1]});var n=r.length,o=wt(n),a=e.map(function(u){return u[0]}).join(","),i=e.map(function(u,c){return u[0]+r[c]}).join(","),s=["coords[0]","coords[1]","coords[2]","coords[3]"].slice(0,n);this.userCode=n!==1?`
      `+o+" start = "+o+"("+a+`);
      `+o+" end = "+o+"("+i+`);

      void main() {
        `+o+` outC = getOutputCoords();
        if (any(lessThan(outC, start)) || any(greaterThanEqual(outC, end))) {
          setOutput(float(`+t+`));
        } else {
          `+o+` coords = outC - start;
          setOutput(getX(`+s+`));
        }
      }
    `:`
        int start = `+a+`;
        int end = `+i+`;

        void main() {
          int outC = getOutputCoords();
          if (outC < start || outC >= end) {
            setOutput(float(`+t+`));
          } else {
            setOutput(getX(outC - start));
          }
        }
      `},nd=function(r,e,t){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=e.map(function(g,m){return g[0]+r[m]+g[1]});for(var n=r.length,o=wt(n),a=e.map(function(g){return g[0]}).join(","),i=e.map(function(g,m){return g[0]+r[m]}).join(","),s=ne("rc",n),u=ne("source",n),c=s[n-1]+" < "+this.outputShape[n-1],l=n===1?"source":"vec2("+u.slice(-2).join()+")",h=[o+" rc = outputLoc;",s[n-1]+` += 1;
       if(`+c+`) {
      `,n===1?"":`}
       rc = outputLoc;
       `+s[n-2]+` += 1;
       if(`+s[n-2]+" < "+this.outputShape[n-2]+") {",n===1?"":"  "+s[n-1]+` += 1;
         if(`+c+") {"],f=n===1?"rc < start || rc >= end":"any(lessThan(rc, start)) || any(greaterThanEqual(rc, end))",d="",p=0,v=n===1?2:4;p<v;p++)d+=`
        `+h[p]+`
        if (`+f+`) {
          result[`+p+"] = float("+t+`);
        } else {
          `+o+` source = rc - start;
          result[`+p+"] = getChannel(getX("+u.join()+"), "+l+`);
        }
      `;d+=n===1?"} ":"}}",this.userCode=`
      const `+o+" start = "+o+"("+a+`);
      const `+o+" end = "+o+"("+i+`);

      void main() {
        `+o+` outputLoc = getOutputCoords();
        vec4 result = vec4(0.);
        `+d+`
        setOutput(result);
      }
    `},ca=function(r,e,t){if(this.variableNames=["x"],e==="avg"&&t)throw new Error("Cannot compute positions for average pool.");var n=r.filterWidth,o=r.strideHeight,a=r.strideWidth,i=r.dilationHeight,s=r.dilationWidth,u=r.effectiveFilterHeight,c=r.effectiveFilterWidth,l=r.padInfo.top,h=r.padInfo.left;this.outputShape=r.outShape;var f=e==="avg",d="0.0";if(f||(d="-1.0 / 1e-20"),t)this.userCode=`
        const ivec2 strides = ivec2(`+o+", "+a+`);
        const ivec2 pads = ivec2(`+l+", "+h+`);

        void main() {
          ivec4 coords = getOutputCoords();
          int batch = coords[0];
          int d = coords[3];

          ivec2 xRCCorner = coords.yz * strides - pads;
          int xRCorner = xRCCorner.x;
          int xCCorner = xRCCorner.y;

          // max/min x(?, ?, d) to get y(yR, yC, d).
          // ? = to be determined
          float minMaxValue = 0.0;
          float minMaxValueFound = 0.0;
          int minMaxPosition = 0;
          float avgValue = 0.0;

          for (int wR = 0; wR < `+u+`;
              wR += `+i+`) {
            int xR = xRCorner + wR;

            if (xR < 0 || xR >= `+r.inHeight+`) {
              continue;
            }

            for (int wC = 0; wC < `+c+`;
                wC += `+s+`) {
              int xC = xCCorner + wC;

              if (xC < 0 || xC >= `+r.inWidth+`) {
                continue;
              }

              float value = getX(batch, xR, xC, d);

              // If a min / max value has already been found, use it. If not,
              // use the current value.
              float currMinMaxValue = mix(
                  value, minMaxValue, minMaxValueFound);
              if (value >= currMinMaxValue) {
                minMaxValue = value;
                minMaxValueFound = 1.0;
                minMaxPosition = wR * `+c+` + wC;
              }
            }
          }
          setOutput(float(minMaxPosition));
        }
      `;else{var p=e+"("+e+"("+e+"(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])";e==="avg"&&(p="avgValue / count");var v=4*Math.floor(n/4),g=n%4,m=`
      if (`+f+`) {
        avgValue += dot(values, ones);
      } else {
        minMaxValue = max(values, minMaxValue);
      }
    `;this.userCode=`
      const ivec2 strides = ivec2(`+o+", "+a+`);
      const ivec2 pads = ivec2(`+l+", "+h+`);
      const float initializationValue = `+d+`;
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float count = 0.0;

      float getValue(int batch, int xR, int xC, int d) {
        if (xC < 0 || xC >= `+r.inWidth+`) {
          return initializationValue;
        }
        count += 1.0;
        return getX(batch, xR, xC, d);
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d = coords[3];

        ivec2 xRCCorner = coords.yz * strides - pads;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // max/min x(?, ?, d) to get y(yR, yC, d).
        // ? = to be determined
        vec4 minMaxValue = vec4(`+d+`);
        float avgValue = 0.0;
        count = 0.0;

        for (int wR = 0; wR < `+u+`;
            wR += `+i+`) {
          int xR = xRCorner + wR;

          if (xR < 0 || xR >= `+r.inHeight+`) {
            continue;
          }

          for (int wC = 0; wC < `+v+`; wC += 4) {
            int xC = xCCorner + wC * `+s+`;

            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + `+s+`, d),
              getValue(batch, xR, xC + 2 * `+s+`, d),
              getValue(batch, xR, xC + 3 * `+s+`, d)
            );

            `+m+`
          }

          int xC = xCCorner + `+v+`;
          if (`+(g===1)+`) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              initializationValue,
              initializationValue,
              initializationValue
            );

            `+m+`
          } else if (`+(g===2)+`) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + `+s+`, d),
              initializationValue,
              initializationValue
            );

            `+m+`
          } else if (`+(g===3)+`) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + `+s+`, d),
              getValue(batch, xR, xC + 2 * `+s+`, d),
              initializationValue
            );

            `+m+`
          }
        }
        setOutput(`+p+`);
      }
    `}},la=function(r,e,t){if(this.variableNames=["x"],e==="avg"&&t)throw new Error("Cannot compute positions for average pool.");var n=r.filterWidth,o=r.strideDepth,a=r.strideHeight,i=r.strideWidth,s=r.dilationDepth,u=r.dilationHeight,c=r.dilationWidth,l=r.effectiveFilterDepth,h=r.effectiveFilterHeight,f=r.effectiveFilterWidth,d=r.padInfo.front,p=r.padInfo.top,v=r.padInfo.left;this.outputShape=r.outShape;var g=e==="avg",m="0.0";if(g||(m="-1.0 / 1e-20"),t)this.userCode=`
        const ivec3 strides =
            ivec3(`+o+", "+a+", "+i+`);
        const ivec3 pads = ivec3(`+d+", "+p+", "+v+`);

        void main() {
          ivec5 coords = getOutputCoords();
          int batch = coords.x;
          int ch = coords.u;

          ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
          int xDCorner = xCorner.x;
          int xRCorner = xCorner.y;
          int xCCorner = xCorner.z;

          // max/min x(?, ?, ?, ch) to get y(yD, yR, yC, ch).
          // ? = to be determined
          float minMaxValue = 0.0;
          float minMaxValueFound = 0.0;
          int minMaxPosition = 0;

          for (int wD = 0; wD < `+l+`;
              wD += `+s+`) {
            int xD = xDCorner + wD;

            if (xD < 0 || xD >= `+r.inDepth+`) {
              continue;
            }

            for (int wR = 0; wR < `+h+`;
                wR += `+u+`) {
              int xR = xRCorner + wR;

              if (xR < 0 || xR >= `+r.inHeight+`) {
                continue;
              }

              for (int wC = 0; wC < `+f+`;
                  wC += `+c+`) {
                int xC = xCCorner + wC;

                if (xC < 0 || xC >= `+r.inWidth+`) {
                  continue;
                }

                float value = getX(batch, xD, xR, xC, ch);

                // If a min / max value has already been found, use it. If not,
                // use the current value.
                float currMinMaxValue = mix(
                    value, minMaxValue, minMaxValueFound);
                if (value >= currMinMaxValue) {
                  minMaxValue = value;
                  minMaxValueFound = 1.0;
                  minMaxPosition =
                      wD * `+h+" * "+f+` +
                      wR * `+f+` + wC;;
                }
              }
            }
          }
          setOutput(float(minMaxPosition));
        }
      `;else{var y=e+"("+e+"("+e+"(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])";e==="avg"&&(y="avgValue / count");var b=4*Math.floor(n/4),x=n%4,w=`
      if (`+g+`) {
        avgValue += dot(values, ones);
      } else {
        minMaxValue = max(values, minMaxValue);
      }
    `;this.userCode=`
      const ivec3 strides =
        ivec3(`+o+", "+a+", "+i+`);
      const ivec3 pads = ivec3(`+d+", "+p+", "+v+`);
      const float initializationValue = `+m+`;
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float count = 0.0;

      float getValue(int batch, int xD, int xR, int xC, int ch) {
        if (xC < 0 || xC >= `+r.inWidth+`) {
          return initializationValue;
        }
        count += 1.0;
        return getX(batch, xD, xR, xC, ch);
      }

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
        int xDCorner = xCorner.x;
        int xRCorner = xCorner.y;
        int xCCorner = xCorner.z;

        // max/min x(?, ?, ?, d) to get y(yD, yR, yC, ch).
        // ? = to be determined
        vec4 minMaxValue = vec4(`+m+`);
        float avgValue = 0.0;
        count = 0.0;

        for (int wD = 0; wD < `+l+`;
            wD += `+s+`) {
          int xD = xDCorner + wD;

          if (xD < 0 || xD >= `+r.inDepth+`) {
            continue;
          }

          for (int wR = 0; wR < `+h+`;
            wR += `+u+`) {
            int xR = xRCorner + wR;

            if (xR < 0 || xR >= `+r.inHeight+`) {
              continue;
            }

            for (int wC = 0; wC < `+b+`; wC += 4) {
              int xC = xCCorner + wC * `+c+`;

              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + `+c+`, ch),
                getValue(batch, xD, xR, xC + 2 * `+c+`, ch),
                getValue(batch, xD, xR, xC + 3 * `+c+`, ch)
              );

              `+w+`
            }

            int xC = xCCorner + `+b+`;
            if (`+(x===1)+`) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                initializationValue,
                initializationValue,
                initializationValue
              );

              `+w+`
            } else if (`+(x===2)+`) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + `+c+`, ch),
                initializationValue,
                initializationValue
              );

              `+w+`
            } else if (`+(x===3)+`) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + `+c+`, ch),
                getValue(batch, xD, xR, xC + 2 * `+c+`, ch),
                initializationValue
              );

              `+w+`
            }
          }
          setOutput(`+y+`);
        }
      }
    `}},rd=function(r,e){this.variableNames=["x"];var t=r.windowSize,n=r.batchSize,o=r.inSize,a=Math.ceil(o/t);this.outputShape=[n,a];var i="0.0",s="";e==="prod"?i="1.0":e==="min"?(i="1.0 / 1e-20",s="min"):e==="max"&&(i="-1.0 / 1e-20",s="max");var u=e+"("+e+"("+e+"(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])";e==="sum"?u="sumValue":e==="prod"?u="prodValue":e==="all"?u="allValue":e==="any"&&(u="anyValue");var c=4*Math.floor(t/4),l=t%4,h=`
      if (`+(e==="sum")+`) {
        sumValue += dot(values, ones);
      } else if (`+(e==="prod")+`) {
        vec2 tmp = vec2(values[0], values[1]) * vec2(values[2], values[3]);
        prodValue *= tmp[0] * tmp[1];
      } else {
        minMaxValue = `+s+`(values, minMaxValue);
      }
    `,f="vec4";e==="all"?(i="1.0",h=`
        bool reducedAllValue = all(values);
        float floatedReducedAllValue = float(reducedAllValue);
        allValue = float(allValue >= 1.0 && floatedReducedAllValue >= 1.0);
      `,f="bvec4"):e==="any"&&(i="0.0",h=`
        bool reducedAnyValue = any(values);
        float floatedReducedAnyValue = float(reducedAnyValue);
        anyValue = float(anyValue >= 1.0 || floatedReducedAnyValue >= 1.0);
      `,f="bvec4");var d="";o%t>0&&(d=`
        if (inIdx < 0 || inIdx >= `+o+`) {
          return initializationValue;
        }
      `),this.userCode=`
      const float initializationValue = `+i+`;
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float getValue(int batch, int inIdx) {
        `+d+`
        return getX(batch, inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * `+t+`;

        vec4 minMaxValue = vec4(`+i+`);
        float prodValue = 1.0;
        float sumValue = 0.0;
        float allValue = 1.0;
        float anyValue = 0.0;

        for (int i = 0; i < `+c+`; i += 4) {
          int inIdx = inOffset + i;
          `+f+" values = "+f+`(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          `+h+`
        }

        int inIdx = inOffset + `+c+`;
        if (`+(l===1)+`) {
          `+f+" values = "+f+`(
            getValue(batch, inIdx),
            initializationValue,
            initializationValue,
            initializationValue
          );

          `+h+`
        } else if (`+(l===2)+`) {
          `+f+" values = "+f+`(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            initializationValue,
            initializationValue
          );

          `+h+`
        } else if (`+(l===3)+`) {
          `+f+" values = "+f+`(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            initializationValue
          );

          `+h+`
        }
        setOutput(`+u+`);
      }
    `},od=function(r,e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=r;for(var t="",n=0;n<4;n++){var o="thisRC = rc;";n%2==1&&(o+="thisRC.z += 1;"),n>1&&(o+="thisRC.y += 1;"),t+=`
        `+o+`
        `+(n>0?"if(thisRC.y < rows && thisRC.z < cols){":"")+`
          int flatIndex = getFlatIndex(thisRC);

          ivec3 inputRC = inputCoordsFromReshapedOutCoords(flatIndex);
          vec2 inputRCInnerDims = vec2(float(inputRC.y),float(inputRC.z));

          result[`+n+`] =
            getChannel(getA(inputRC.x, inputRC.y, inputRC.z), inputRCInnerDims);
        `+(n>0?"}":"")+`
      `}this.userCode=`
      
    ivec3 inputCoordsFromReshapedOutCoords(int index) {
      `+yn(["r","c","d"],e)+`
      return ivec3(r, c, d);
    }
  
      `+aa(r)+`

      void main() {
        ivec3 rc = getOutputCoords();

        vec4 result = vec4(0.);

        ivec3 thisRC;
        int rows = `+r[1]+`;
        int cols = `+r[2]+`;

        `+t+`

        setOutput(result);
      }
    `},ad=function(r,e,t){this.variableNames=["dy"],this.outputShape=[],this.outputShape=e.shape;var n=e.shape,o=n[1],a=n[2],i=r.shape,s=i[1],u=i[2],c=[t&&s>1?o-1:o,t&&u>1?a-1:a],l=[t&&s>1?s-1:s,t&&u>1?u-1:u],h=c[0]/l[0],f=c[1]/l[1],d=1/h,p=1/f,v=2*Math.ceil(d)+2,g=2*Math.ceil(p)+2;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        int r = coords[1];
        int c = coords[2];

        float accumulator = 0.0;

        const float heightScale = float(`+h+`);
        const float widthScale = float(`+f+`);

        const float invHeightScale = float(`+d+`);
        const float invWidthScale = float(`+p+`);

        const int winHeight = int(`+v+`);
        const int winWidth = int(`+g+`);

        // Compute bounds for where in dy we will look
        float startRLerp = floor(float(r) * invHeightScale);
        int startDyR = int(startRLerp - float(winHeight / 2));

        float startCLerp = floor(float(c) * invWidthScale);
        int startDyC = int(startCLerp - float(winWidth / 2));

        // Loop over dy
        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {
          int dyR = dyROffset + startDyR;

          // Guard against the window exceeding the bounds of dy
          if (dyR < 0 || dyR >= `+s+`) {
            continue;
          }

          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {
            int dyC = dyCOffset + startDyC;

            // Guard against the window exceeding the bounds of dy
            if (dyC < 0 || dyC >= `+u+`) {
              continue;
            }

            float dxR = float(dyR) * heightScale;
            int topDxRIndex = int(floor(dxR));
            int bottomDxRIndex = int(min(ceil(dxR), `+(o-1)+`.0));
            float dxRLerp = dxR - float(topDxRIndex);
            float inverseDxRLerp = 1.0 - dxRLerp;

            float dxC = float(dyC) * widthScale;
            int leftDxCIndex = int(floor(dxC));
            int rightDxCIndex = int(min(ceil(dxC), `+(a-1)+`.0));
            float dxCLerp = dxC - float(leftDxCIndex);
            float inverseDxCLerp = 1.0 - dxCLerp;

            if (r == topDxRIndex && c == leftDxCIndex) {
              // topLeft
              accumulator +=
                getDy(b, dyR, dyC, d) * inverseDxRLerp * inverseDxCLerp;
            }

            if (r == topDxRIndex && c == rightDxCIndex) {
              // topRight
              accumulator += getDy(b, dyR, dyC, d) * inverseDxRLerp * dxCLerp;
            }

            if (r == bottomDxRIndex && c == leftDxCIndex) {
              // bottomLeft
              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * inverseDxCLerp;
            }

            if (r == bottomDxRIndex && c == rightDxCIndex) {
              // bottomRight
              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * dxCLerp;
            }
          }
        }
        // End loop over dy

        setOutput(accumulator);
      }
    `},id=function(r,e,t,n){this.variableNames=["A"],this.outputShape=[];var o=r[0],a=r[1],i=r[2],s=r[3];this.outputShape=[o,e,t,s];var u=[n&&e>1?a-1:a,n&&t>1?i-1:i],c=[n&&e>1?e-1:e,n&&t>1?t-1:t];this.userCode=`
      const vec2 effectiveInputOverOutputRatioRC = vec2(
          `+u[0]/c[0]+`,
          `+u[1]/c[1]+`);
      const vec2 inputShapeRC = vec2(`+a+".0, "+i+`.0);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        ivec2 yRC = coords.yz;

        // Fractional source index.
        vec2 sourceFracIndexRC = vec2(yRC) * effectiveInputOverOutputRatioRC;

        // Compute the four integer indices.
        ivec2 sourceFloorRC = ivec2(sourceFracIndexRC);
        ivec2 sourceCeilRC = ivec2(
          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));

        float topLeft = getA(b, sourceFloorRC.x, sourceFloorRC.y, d);
        float bottomLeft = getA(b, sourceCeilRC.x, sourceFloorRC.y, d);
        float topRight = getA(b, sourceFloorRC.x, sourceCeilRC.y, d);
        float bottomRight = getA(b, sourceCeilRC.x, sourceCeilRC.y, d);

        vec2 fracRC = sourceFracIndexRC - vec2(sourceFloorRC);

        float top = topLeft + (topRight - topLeft) * fracRC.y;
        float bottom = bottomLeft + (bottomRight - bottomLeft) * fracRC.y;
        float newValue = top + (bottom - top) * fracRC.x;

        setOutput(newValue);
      }
    `},sd=function(r,e,t,n){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[];var o=r[0],a=r[1],i=r[2],s=r[3];this.outputShape=[o,e,t,s];var u=[n&&e>1?a-1:a,n&&t>1?i-1:i],c=[n&&e>1?e-1:e,n&&t>1?t-1:t];this.userCode=`
      const vec3 effectiveInputOverOutputRatioRC = vec3(
          `+u[0]/c[0]+`,
          `+u[1]/c[1]+`,
          `+u[1]/c[1]+`);
      const vec3 inputShapeRC = vec3(`+a+".0, "+i+`.0,
                                     `+i+`.0);

      float getAValue(int b, int r, int c, int d) {
        return getChannel(getA(b, r, c, d), vec2(c, d));
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        // Calculate values for next column in yRC.z.
        ivec3 yRC = coords.yzz + ivec3(0, 0, 1);

        // Fractional source index.
        vec3 sourceFracIndexRC = vec3(yRC) * effectiveInputOverOutputRatioRC;

        // Compute the four integer indices.
        ivec3 sourceFloorRC = ivec3(sourceFracIndexRC);
        ivec3 sourceCeilRC = ivec3(
          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));

        // Should we calculate next column and row elements in 2x2 packed cell.
        bool hasNextCol = d < `+(s-1)+`;
        bool hasNextRow = coords.z < `+(t-1)+`;

        // In parallel, construct four corners for all four components in
        // packed 2x2 cell.
        vec4 topLeft = vec4(
          getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d),
          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d + 1) : 0.0);

        vec4 bottomLeft = vec4(
          getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d),
          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d + 1) : 0.0);

        vec4 topRight = vec4(
          getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d),
          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d + 1) : 0.0);

        vec4 bottomRight = vec4(
          getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d),
          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d + 1) : 0.0);

        vec3 fracRC = sourceFracIndexRC - vec3(sourceFloorRC);

        vec4 top = mix(topLeft, topRight, fracRC.yyzz);
        vec4 bottom = mix(bottomLeft, bottomRight, fracRC.yyzz);
        vec4 newValue = mix(top, bottom, fracRC.x);

        setOutput(newValue);
      }
    `},ud=function(r,e,t){this.variableNames=["dy"],this.outputShape=[],this.outputShape=e.shape;var n=e.shape,o=n[1],a=n[2],i=r.shape,s=i[1],u=i[2],c=[t&&s>1?o-1:o,t&&u>1?a-1:a],l=[t&&s>1?s-1:s,t&&u>1?u-1:u],h=c[0]/l[0],f=c[1]/l[1],d=1/h,p=1/f,v=2*Math.ceil(d)+2,g=2*Math.ceil(p)+2;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        int r = coords[1];
        int c = coords[2];

        float accumulator = 0.0;

        const float heightScale = float(`+h+`);
        const float widthScale = float(`+f+`);

        const float invHeightScale = float(`+d+`);
        const float invWidthScale = float(`+p+`);

        const int winHeight = int(`+v+`);
        const int winWidth = int(`+g+`);

        // Compute bounds for where in dy we will look
        float startRLerp = floor(float(r) * invHeightScale);
        int startDyR = int(floor(startRLerp - float(winHeight / 2)));

        float startCLerp = floor(float(c) * invWidthScale);
        int startDyC = int(floor(startCLerp - float(winWidth / 2)));

        // Loop over dy
        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {
          int dyR = dyROffset + startDyR;

          // Guard against the window exceeding the bounds of dy
          if (dyR < 0 || dyR >= `+s+`) {
            continue;
          }

          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {
            int dyC = dyCOffset + startDyC;

            // Guard against the window exceeding the bounds of dy
            if (dyC < 0 || dyC >= `+u+`) {
              continue;
            }

            float sourceFracRow =
              float(`+c[0]+`) *
                (float(dyR) / float(`+l[0]+`));

            float sourceFracCol =
                float(`+c[1]+`) *
                  (float(dyC) / float(`+l[1]+`));

            int sourceNearestRow = int(min(
                float(int(`+o+`) - 1),
                `+t+` ? float(round(sourceFracRow)) :
                                  float(floor(sourceFracRow))));

            int sourceNearestCol = int(min(
                float(int(`+a+`) - 1),
                `+t+` ? float(round(sourceFracCol)) :
                                  float(floor(sourceFracCol))));

            if (r == sourceNearestRow && c == sourceNearestCol) {
              accumulator += getDy(b, dyR, dyC, d);
            }
          }
        }
        // End loop over dy

        setOutput(accumulator);
      }
    `},cd=function(r,e,t,n){this.variableNames=["A"],this.outputShape=[];var o=r[0],a=r[1],i=r[2],s=r[3];this.outputShape=[o,e,t,s];var u=[n&&e>1?a-1:a,n&&t>1?i-1:i],c=[n&&e>1?e-1:e,n&&t>1?t-1:t],l=n?"0.5":"0.0";this.userCode=`
      const vec2 effectiveInputOverOutputRatioRC = vec2(
          `+u[0]/c[0]+`,
          `+u[1]/c[1]+`);
      const vec2 inputShapeRC = vec2(`+a+".0, "+i+`.0);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        ivec2 yRC = coords.yz;

        // Fractional source index.
        vec2 sourceFracIndexRC = vec2(yRC) * effectiveInputOverOutputRatioRC;

        // Compute the coordinators of nearest neighbor point.
        ivec2 sourceNearestRC = ivec2(
          min(inputShapeRC - 1.0, floor(sourceFracIndexRC + `+l+`)));

        float newValue = getA(b, sourceNearestRC.x, sourceNearestRC.y, d);

        setOutput(newValue);
      }
    `},ld=function(r,e){this.variableNames=["x"];var t=r.length;if(t>4)throw new Error("WebGL backend: Reverse of rank-"+t+" tensor is not yet supported");if(this.outputShape=r,t!==1){var n=r.map(function(a,i){return function(s){return e.indexOf(s)!==-1&&r[s]!==1?r[s]+" - coords["+s+"] - 1":"coords["+s+"]"}(i)}).join(","),o=wt(t);this.userCode=`
      void main() {
        `+o+` coords = getOutputCoords();
        setOutput(getX(`+n+`));
      }
    `}else this.userCode=`
        void main() {
          int coord = getOutputCoords();
          setOutput(getX(`+r[0]+` - coord - 1));
        }
      `},hd=function(r,e){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0;var t=r.length;if(t>4)throw new Error("WebGL backend: Reverse of rank-"+t+" tensor is not yet supported");this.outputShape=r;var n=ne("rc",t),o=n[t-1]+" + 1 < "+this.outputShape[t-1],a=n[t-2]+" + 1 < "+this.outputShape[t-2],i=wt(t);function s(u){var c=r.map(function(l,h){return function(f,d){return e.indexOf(f)!==-1&&r[f]!==1?r[f]+" - "+d[f]+" - 1":""+d[f]}(h,u)});return"getChannel(getX("+c.join(",")+"), vec2("+c.slice(-2).join(",")+"))"}this.userCode=t===1?`
        void main(){
          int rc = getOutputCoords();
          vec4 result = vec4(0.);
          result.r = getChannel(getX(`+r[0]+` - rc - 1),
            `+r[0]+` - rc - 1);
          if(`+o+`){
              result.g = getChannel(getX(`+r[0]+` - (rc  + 1) - 1),
                `+r[0]+` - (rc  + 1) - 1);
          }
          setOutput(result);
        }
      `:`
        void main() {
          `+i+` rc = getOutputCoords();
          vec4 result = vec4(0.);
          result.r = `+function(u){return s(u)}(n.slice())+`;
          if(`+o+`){
            result.g = `+function(u){return u[t-1]="("+u[t-1]+" + 1)",s(u)}(n.slice())+`;
          }
          if(`+a+`) {
            result.b = `+function(u){return u[t-2]="("+u[t-2]+" + 1)",s(u)}(n.slice())+`;
            if(`+o+`) {
              result.a = `+function(u){return u[t-1]="("+u[t-1]+" + 1)",u[t-2]="("+u[t-2]+" + 1)",s(u)}(n.slice())+`;
            }
          }
          setOutput(result);
        }
    `},Ws=function(r,e,t,n,o,a,i){this.variableNames=["updates","indices","defaultValue"],this.outputShape=a;var s=wt(o.length),u=wt(a.length),c="";t===1?c="i":t===2&&(c="i, j");var l="getIndices("+c+")",h="";n===1?h="i":n===2&&(h="i, coords[1]");var f="getUpdates("+h+")",d=e>1?"strides[j]":"strides";this.userCode=`
        `+s+" strides = "+s+"("+o+`);

        void main() {
          `+u+` coords = getOutputCoords();
          float sum = 0.0;
          bool found = false;
          for (int i = 0; i < `+r+`; i++) {
            int flattenedIndex = 0;
            for (int j = 0; j < `+e+`; j++) {
              int index = round(`+l+`);
              flattenedIndex += index * `+d+`;
            }
            if (flattenedIndex == coords[0]) {
              sum += `+f+`;
              found = true;
            }
          }
          setOutput(mix(getDefaultValue(), sum, float(found)));
        }
      `},fd=function(r,e){this.variableNames=["x","segmentIds"];var t=r.windowSize,n=r.batchSize,o=r.inSize,a=r.numSegments,i=a*Math.ceil(o/t);this.outputShape=[n,i];var s=4*Math.floor(t/4),u=t%4,c=`
        sumValue += dot(values, segFilter);
    `,l="";o%t>0&&(l=`
        if (inIdx < 0 || inIdx >= `+o+`) {
          return initializationValue;
        }
      `);var h="";o%t>0&&(h=`
        if (inIdx < 0 || inIdx >= `+o+`) {
          return -1.0;
        }
      `),this.userCode=`
      const float initializationValue = 0.0;

      float getValue(int batch, int inIdx) {
        `+l+`
        return getX(batch, inIdx);
      }

      float getSegmentIdAtIndex(int inIdx) {
        `+h+`
        return getSegmentIds(inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = int(floor(float(outIdx) / float(
          `+a+")) * float("+t+`));
        int currentSeg = int(mod(float(outIdx), float(`+a+`)));

        float sumValue = 0.0;

        for (int i = 0; i < `+s+`; i += 4) {
          int inIdx = inOffset + i;
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 3)) == currentSeg ? 1 : 0
          );

          `+c+`
        }

        int inIdx = inOffset + `+s+`;
        if (`+(u===1)+`) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            initializationValue,
            initializationValue,
            initializationValue
          );

          int inIdxSeg = int(getSegmentIdAtIndex(inIdx));

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            0,
            0,
            0
          );

          `+c+`
        } else if (`+(u===2)+`) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            initializationValue,
            initializationValue
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
              0,
              0
          );

          `+c+`
        } else if (`+(u===3)+`) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            initializationValue
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,
            0
          );

          `+c+`
        }
        setOutput(sumValue);
      }
    `},dd=function(r,e,t){var n,o;if(this.variableNames=["c","a","b"],this.outputShape=e,t>4)throw Error("Where for rank "+t+" is not yet supported");if(t===1)o="resRC",n="resRC";else{for(var a=["resRC.x","resRC.y","resRC.z","resRC.w"],i=[],s=[],u=0;u<e.length;u++)s.push(""+a[u]),u<r&&i.push(""+a[u]);n=i.join(),o=s.join()}var c=wt(t);this.userCode=`
      void main() {
        `+c+` resRC = getOutputCoords();
        float cVal = getC(`+n+`);
        if (cVal >= 1.0) {
          setOutput(getA(`+o+`));
        } else {
          setOutput(getB(`+o+`));
        }
      }
    `},pd=function(){function r(e){this.variableNames=["source"],this.outputShape=e,this.rank=e.length;var t,n=wt(this.rank),o="uniform int start["+this.rank+"];",a=function(i){if(i===1)return"sourceLoc";if(i<=6)return ha.slice(0,i).map(function(s){return"sourceLoc."+s}).join(",");throw Error("Slicing for rank "+i+" is not yet supported")}(this.rank);t=`
        `+n+` sourceLoc;
        `+n+` coords = getOutputCoords();
        `+e.map(function(i,s){return"sourceLoc."+ha[s]+" = start["+s+"] + coords."+ha[s]+";"}).join(`
`)+`
      `,this.userCode=`
      `+o+`
      void main() {
        `+t+`
        setOutput(getSource(`+a+`));
      }
    `}return r.prototype.getCustomSetupFunc=function(e){var t=this;if(e.length!==this.rank)throw Error("The rank ("+this.rank+") of the program must match the length of start ("+e.length+")");return function(n,o){t.startLoc==null&&(t.startLoc=n.getUniformLocationNoThrow(o,"start"),t.startLoc==null)||n.gl.uniform1iv(t.startLoc,e)}},r}(),ha=["x","y","z","w","u","v"],vd=function(){function r(e){this.variableNames=["source"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=e,this.rank=e.length;var t=wt(this.rank),n=ne("coords",this.rank),o=ne("sourceLoc",this.rank),a=this.rank===1?"sourceLoc":"vec2("+o.slice(-2).join()+")",i="getChannel(getSource("+o.join()+"), "+a+")",s=`
      result.x = `+i+`;
      if (++`+n[this.rank-1]+" < "+e[this.rank-1]+`) {
        ++`+o[this.rank-1]+`;
        result.y = `+i+`;
        --`+o[this.rank-1]+`;
      }
    `,u=this.rank===1?"":`
      --`+n[this.rank-1]+`;
      if (++`+n[this.rank-2]+" < "+e[this.rank-2]+`) {
        ++`+o[this.rank-2]+`;
        result.z = `+i+`;
        if (++`+n[this.rank-1]+" < "+e[this.rank-1]+`) {
          ++`+o[this.rank-1]+`;
          result.w = `+i+`;
        }
      }
    `,c=this.rank<=4?`sourceLoc = coords +
            `+t+"("+e.map(function(l,h){return"start["+h+"]"}).join()+");":e.map(function(l,h){return o[h]+" = "+n[h]+" + start["+h+"];"}).join(`
`);this.userCode=`
      uniform int start[`+this.rank+`];
      void main() {
        `+t+` coords = getOutputCoords();
        `+t+` sourceLoc;
        `+c+`
        vec4 result = vec4(0.);
        `+s+`
        `+u+`
        setOutput(result);
      }
    `}return r.prototype.getCustomSetupFunc=function(e){var t=this;if(e.length!==this.rank)throw Error("The rank ("+this.rank+") of the program must match the length of start ("+e.length+")");return function(n,o){t.startLoc==null&&(t.startLoc=n.getUniformLocationNoThrow(o,"start"),t.startLoc==null)||n.gl.uniform1iv(t.startLoc,e)}},r}(),gd=function(r,e,t){this.variableNames=["x"],this.outputShape=t;var n=t.length,o=wt(t.length),a=wt(t.length),i="";if(n===1)i="coords * strides + begin";else{var s=0;i=t.map(function(u,c){return s++,t.length===1?"coords * strides["+c+"] + begin["+c+"]":"coords["+(s-1)+"] * strides["+c+"] + begin["+c+"]"}).join(",")}this.userCode=`
      `+o+" begin = "+o+"("+r+`);
      `+o+" strides = "+o+"("+e+`);

      void main() {
        `+a+` coords = getOutputCoords();
        setOutput(getX(`+i+`));
      }
    `},md=function(){function r(e){this.gpgpu=e,this.numUsedTextures=0,this.numFreeTextures=0,this.freeTextures={},this.logEnabled=!1,this.usedTextures={}}return r.prototype.acquireTexture=function(e,t,n){var o,a=Us(t,n),i=zs(e,a,n);if(i in this.freeTextures||(this.freeTextures[i]=[]),i in this.usedTextures||(this.usedTextures[i]=[]),this.freeTextures[i].length>0){this.numFreeTextures--,this.numUsedTextures++,this.log();var s=this.freeTextures[i].shift();return this.usedTextures[i].push(s),s}return this.numUsedTextures++,this.log(),a===ae.PACKED_2X2_FLOAT32?o=this.gpgpu.createPackedMatrixTexture(e[0],e[1]):a===ae.PACKED_2X2_FLOAT16?o=this.gpgpu.createFloat16PackedMatrixTexture(e[0],e[1]):a===ae.UNPACKED_FLOAT32?o=this.gpgpu.createFloat32MatrixTexture(e[0],e[1]):a===ae.UNPACKED_FLOAT16?o=this.gpgpu.createFloat16MatrixTexture(e[0],e[1]):a===ae.PACKED_4X1_UNSIGNED_BYTE&&(o=this.gpgpu.createUnsignedBytesMatrixTexture(e[0],e[1])),this.usedTextures[i].push(o),o},r.prototype.releaseTexture=function(e,t,n,o){if(this.freeTextures!=null){var a=zs(t,Us(n,o),o);a in this.freeTextures||(this.freeTextures[a]=[]),this.freeTextures[a].push(e),this.numFreeTextures++,this.numUsedTextures--;var i=this.usedTextures[a],s=i.indexOf(e);if(s<0)throw new Error("Cannot release a texture that was never provided by this texture manager");i.splice(s,1),this.log()}},r.prototype.log=function(){if(this.logEnabled){var e=this.numFreeTextures+this.numUsedTextures;console.log("Free/Used",this.numFreeTextures+" / "+this.numUsedTextures,"("+e+")")}},r.prototype.getNumUsedTextures=function(){return this.numUsedTextures},r.prototype.getNumFreeTextures=function(){return this.numFreeTextures},r.prototype.dispose=function(){var e=this;if(this.freeTextures!=null){for(var t in this.freeTextures)this.freeTextures[t].forEach(function(n){e.gpgpu.deleteMatrixTexture(n)});for(var t in this.usedTextures)this.usedTextures[t].forEach(function(o){e.gpgpu.deleteMatrixTexture(o)});this.freeTextures=null,this.usedTextures=null,this.numUsedTextures=0,this.numFreeTextures=0}},r}();function Us(r,e){if(r===oe.UPLOAD)return ae.PACKED_2X2_FLOAT32;if(r===oe.RENDER||r==null)return function(t){return P().getBool("WEBGL_RENDER_FLOAT32_ENABLED")?t?ae.PACKED_2X2_FLOAT32:ae.UNPACKED_FLOAT32:t?ae.PACKED_2X2_FLOAT16:ae.UNPACKED_FLOAT16}(e);if(r===oe.DOWNLOAD||r===oe.PIXELS)return ae.PACKED_4X1_UNSIGNED_BYTE;throw new Error("Unknown logical texture type "+r)}function zs(r,e,t){return r[0]+"_"+r[1]+"_"+e+"_"+t}var yd=function(r,e){this.variableNames=["A"];for(var t=new Array(r.length),n=0;n<t.length;n++)t[n]=r[n]*e[n];this.outputShape=t,this.rank=t.length;var o=wt(this.rank),a=function(i){var s=i.length;if(s>5)throw Error("Tile for rank "+s+" is not yet supported");if(s===1)return"imod(resRC, "+i[0]+")";for(var u=["resRC.x","resRC.y","resRC.z","resRC.w","resRC.u"],c=[],l=0;l<i.length;l++)c.push("imod("+u[l]+", "+i[l]+")");return c.join()}(r);this.userCode=`
      void main() {
        `+o+` resRC = getOutputCoords();
        setOutput(getA(`+a+`));
      }
    `},xd=function(r,e){this.variableNames=["A"];for(var t=new Array(r.length),n=0;n<t.length;n++)t[n]=r[e[n]];this.outputShape=t,this.rank=t.length;var o=wt(this.rank),a=function(i){var s=i.length;if(s>6)throw Error("Transpose for rank "+s+" is not yet supported");for(var u=["resRC.x","resRC.y","resRC.z","resRC.w","resRC.u","resRC.v"],c=new Array(s),l=0;l<i.length;l++)c[i[l]]=u[l];return c.join()}(e);this.userCode=`
    void main() {
      `+o+` resRC = getOutputCoords();
      setOutput(getA(`+a+`));
    }
    `},bd=function(r,e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0;for(var t=new Array(r.length),n=0;n<t.length;n++)t[n]=r[e[n]];if(this.outputShape=t,this.rank=t.length,this.rank>6)throw Error("Packed transpose for rank "+this.rank+" is not yet supported.");var o=wt(this.rank),a=Ss("rc",this.rank),i=new Array(this.rank);for(n=0;n<e.length;n++)i[e[n]]=a[n];var s="vec2("+i.slice(-2).join()+")",u="++"+a[this.rank-1]+" < "+t[this.rank-1],c="getChannel(getA("+i.join()+"), "+s+")";this.userCode=`
    void main() {
      `+o+` rc = getOutputCoords();
      vec4 result = vec4(0.);
      result[0] = `+c+`;
      if(`+u+`) {
        result[1] = `+c+`;
      }
      --`+a[this.rank-1]+`;
      if(++`+a[this.rank-2]+" < "+t[this.rank-2]+`) {
        result[2] = `+c+`;
        if(`+u+`) {
          result[3] = `+c+`;
        }
      }
      setOutput(result);
    }
    `},fa=1.7580993408473768,da=1.0507009873554805,at=function(r,e){this.variableNames=["A"],this.outputShape=r,this.userCode=`
      float unaryOperation(float x) {
        `+e+`
      }

      void main() {
        float x = getAAtOutCoords();
        float y = unaryOperation(x);

        setOutput(y);
      }
    `},ye="if (isnan(x)) return x;",wd="return x;",Vs="return abs(x);",Gs=ye+`
  return (x < 0.0) ? 0.0 : x;
`,Hs=ye+`
  return (x < 0.0) ? 0.0 : min(6.0, x);
`,qs="return (x >= 0.0) ? x : (exp(x) - 1.0);",Cd=`
  // Stable and Attracting Fixed Point (0, 1) for Normalized Weights.
  // see: https://arxiv.org/abs/1706.02515
  float scaleAlpha = `+fa+`;
  float scale = `+da+`;
  return (x >= 0.0) ? scale * x : scaleAlpha * (exp(x) - 1.0);
`,js="return -x;",Xs="return ceil(x);",Ks="return floor(x);",$s="return exp(x);",Ys="return exp(x) - 1.0;",Ed=ye+`
  return sin(x);
`,_d=ye+`
  return cos(x);
`,Id=ye+`
  if (abs(x) > 1.) {
    return NAN;
  }
  return asin(x);
`,Sd=ye+`
  if (abs(x) > 1.) {
    return NAN;
  }
  return acos(x);
`,Rd=ye+`
  return atan(x);
`,kd=ye+"return log(x + sqrt(x * x + 1.0));",Dd=ye+`
  if (x < 1.0) return NAN;
  return log(x + sqrt(x * x - 1.0));`,Ad=ye+`
  if ((x < -1.0) || (x > 1.0)) return NAN;
  return (log(1.0 + x) - log(1.0 - x)) / 2.0;`,jr="return x;",Td="return x;",Js=`
  vec4 result = x * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,Qs=`
  vec4 result = min(x, vec4(6.)) * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,Zs=`
  vec4 result;

  result.r = (x.r >= 0.0) ? x.r : (exp(x.r) - 1.0);
  result.g = (x.g >= 0.0) ? x.g : (exp(x.g) - 1.0);
  result.b = (x.b >= 0.0) ? x.b : (exp(x.b) - 1.0);
  result.a = (x.a >= 0.0) ? x.a : (exp(x.a) - 1.0);

  return result;
`,lr=function(r,e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=r,this.userCode=`
      vec4 unaryOperation(vec4 x) {
        `+e+`
      }

      void main() {
        vec4 x = getAAtOutCoords();
        vec4 y = unaryOperation(x);

        setOutput(y);
      }
    `},Fd=function(r){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!1,this.outputShape=r;var e=r.length,t=ne("rc",e),n=wt(e),o=function(s,u){if(s===1)return"rc";for(var c="",l=0;l<s;l++)c+=u[l],l<s-1&&(c+=",");return c}(e,t),a=t.slice(-2),i=e<=1?"rc":"vec2("+a.join(",")+")";this.userCode=`
      void main() {
        `+n+` rc = getOutputCoords();
        vec4 packedInput = getA(`+o+`);

        setOutput(getChannel(packedInput, `+i+`));
      }
    `},Xr={};function Kr(r,e){if(e===void 0&&(e=!1),r==="linear")return e?Td:wd;if(r==="relu")return e?Js:Gs;if(r==="elu")return e?Zs:qs;if(r==="relu6")return e?Qs:Hs;if(r==="prelu")return e?Fs:Ts;throw new Error("Activation "+r+" has not been implemented for the WebGL backend.")}var Nd=600,Md=function(r){function e(t){var n,o=r.call(this)||this;if(o.pendingRead=new WeakMap,o.pendingDisposal=new WeakSet,o.dataRefCount=new WeakMap,o.numBytesInGPU=0,o.uploadWaitMs=0,o.downloadWaitMs=0,o.warnedAboutMemory=!1,o.pendingDeletes=0,o.disposed=!1,!P().getBool("HAS_WEBGL"))throw new Error("WebGL is not supported on this device");if(t==null){var a=Se(P().getNumber("WEBGL_VERSION"));o.binaryCache=((n=P().getNumber("WEBGL_VERSION"))in Xr||(Xr[n]={}),Xr[n]),o.gpgpu=new qf(a),o.canvas=a.canvas,o.gpgpuCreatedLocally=!0}else o.gpgpu=t,o.binaryCache={},o.gpgpuCreatedLocally=!1,o.canvas=t.gl.canvas;return o.textureManager=new md(o.gpgpu),o.numMBBeforeWarning=P().global.screen==null?1024:P().global.screen.height*P().global.screen.width*window.devicePixelRatio*Nd/1024/1024,o.texData=new vs(o,A),o}return qt(e,r),e.prototype.numDataIds=function(){return this.texData.numDataIds()+(this.cpuBackend?this.cpuBackend.numDataIds():0)-this.pendingDeletes},e.prototype.write=function(t,n,o){if(P().getBool("DEBUG")&&this.checkNumericalProblems(t),o==="complex64"&&t!=null)throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");var a={};return this.texData.set(a,{shape:n,dtype:o,values:t,usage:oe.UPLOAD}),a},e.prototype.move=function(t,n,o,a){if(P().getBool("DEBUG")&&this.checkNumericalProblems(n),a==="complex64")throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");this.texData.set(t,{shape:o,dtype:a,values:n,usage:oe.UPLOAD})},e.prototype.readSync=function(t){var n=this.texData.get(t),o=n.values,a=n.dtype,i=n.complexTensors,s=n.slice,u=n.shape,c=n.isPacked;if(s!=null){var l=void 0;l=c?new lr(u,jr):new at(u,jr);var h=this.runWebGLProgram(l,[{dataId:t,shape:u,dtype:a}],a),f=this.readSync(h.dataId);return this.disposeData(h.dataId),f}if(o!=null)return this.convertAndCacheOnCPU(t);if(a==="string")return o;var d,p,v=this.activeTimers!=null;return v&&(d=_e()),a==="complex64"?p=ea(i.real.dataSync(),i.imag.dataSync()):p=this.getValuesFromTexture(t),v&&(this.downloadWaitMs+=_e()-d),this.convertAndCacheOnCPU(t,p)},e.prototype.read=function(t){return K(this,void 0,void 0,function(){var n,o,a,i,s,u,c,l,h,f,d,p,v,g,m,y,b,x,w,C,k,R;return $(this,function(I){switch(I.label){case 0:if(this.pendingRead.has(t))return n=this.pendingRead.get(t),[2,new Promise(function(S){return n.push(S)})];if(o=this.texData.get(t),a=o.values,i=o.shape,s=o.slice,u=o.dtype,c=o.complexTensors,l=o.isPacked,s!=null)return h=void 0,h=l?new lr(i,jr):new at(i,jr),f=this.runWebGLProgram(h,[{dataId:t,shape:i,dtype:u}],u),d=this.read(f.dataId),this.disposeData(f.dataId),[2,d];if(a!=null)return[2,this.convertAndCacheOnCPU(t)];if(!P().getBool("WEBGL_DOWNLOAD_FLOAT_ENABLED")&&P().getNumber("WEBGL_VERSION")===2)throw new Error("tensor.data() with WEBGL_DOWNLOAD_FLOAT_ENABLED=false and WEBGL_VERSION=2 not yet supported.");return p=null,u!=="complex64"&&P().get("WEBGL_BUFFER_SUPPORTED")&&(v=this.decode(t),g=this.texData.get(v.dataId),p=(R=this.gpgpu).createBufferFromTexture.apply(R,[g.texture].concat(ar(i)))),this.pendingRead.set(t,[]),u==="complex64"?[3,2]:[4,this.gpgpu.createAndWaitForFence()];case 1:I.sent(),I.label=2;case 2:return u!=="complex64"?[3,4]:[4,Promise.all([c.real.data(),c.imag.data()])];case 3:return y=I.sent(),b=y[0],x=y[1],m=ea(b,x),[3,5];case 4:p==null?m=this.getValuesFromTexture(t):(w=Y(i),m=this.gpgpu.downloadFloat32MatrixFromBuffer(p,w)),I.label=5;case 5:return v!=null&&this.disposeData(v.dataId),C=this.convertAndCacheOnCPU(t,m),k=this.pendingRead.get(t),this.pendingRead.delete(t),k.forEach(function(S){return S(C)}),this.pendingDisposal.has(t)&&(this.pendingDisposal.delete(t),this.disposeData(t),this.pendingDeletes--),[2,C]}})})},e.prototype.checkNumericalProblems=function(t){if(t!=null)for(var n=0;n<t.length;n++){var o=t[n];if(!wl(o))throw P().getBool("WEBGL_RENDER_FLOAT32_CAPABLE")?Error("The value "+o+" cannot be represented with your current settings. Consider enabling float32 rendering: 'tf.env().set('WEBGL_RENDER_FLOAT32_ENABLED', true);'"):Error("The value "+o+" cannot be represented on this device.")}},e.prototype.getValuesFromTexture=function(t){var n,o=this.texData.get(t),a=o.shape,i=o.dtype,s=o.isPacked,u=Y(a);if(P().getBool("WEBGL_DOWNLOAD_FLOAT_ENABLED")){var c=this.decode(t),l=this.texData.get(c.dataId),h=(n=this.gpgpu).downloadMatrixFromPackedTexture.apply(n,[l.texture].concat(ar(a))).subarray(0,u);return this.disposeData(c.dataId),h}var f=P().getBool("WEBGL_PACK")&&s===!0,d=f?Go(a):a,p=f?new wf(d):new bf(d),v=this.runWebGLProgram(p,[{shape:d,dtype:i,dataId:t}],"float32"),g=this.texData.get(v.dataId),m=this.gpgpu.downloadByteEncodedFloatMatrixFromOutputTexture(g.texture,g.texShape[0],g.texShape[1]).subarray(0,u);return this.disposeData(v.dataId),m},e.prototype.time=function(t){return K(this,void 0,void 0,function(){var n,o,a,i,s,u,c;return $(this,function(l){switch(l.label){case 0:return n=this.activeTimers,o=[],a=!1,this.programTimersStack==null?(this.programTimersStack=o,a=!0):this.activeTimers.push(o),this.activeTimers=o,t(),i=Rn(this.activeTimers.map(function(h){return h.query})).filter(function(h){return h!=null}),s=Rn(this.activeTimers.map(function(h){return h.name})).filter(function(h){return h!=null}),this.activeTimers=n,a&&(this.programTimersStack=null),u={uploadWaitMs:this.uploadWaitMs,downloadWaitMs:this.downloadWaitMs,kernelMs:null,wallMs:null},P().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?[4,Promise.all(i)]:[3,2];case 1:return c=l.sent(),u.kernelMs=el(c),u.getExtraProfileInfo=function(){return c.map(function(h,f){return{name:s[f],ms:h}}).map(function(h){return h.name+": "+h.ms}).join(", ")},[3,3];case 2:u.kernelMs={error:"WebGL query timers are not supported in this environment."},l.label=3;case 3:return this.uploadWaitMs=0,this.downloadWaitMs=0,[2,u]}})})},e.prototype.memory=function(){return{unreliable:!1,numBytesInGPU:this.numBytesInGPU}},e.prototype.startTimer=function(){return P().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?this.gpgpu.beginQuery():{startMs:_e(),endMs:null}},e.prototype.endTimer=function(t){return P().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?(this.gpgpu.endQuery(),t):(t.endMs=_e(),t)},e.prototype.getQueryTime=function(t){return K(this,void 0,void 0,function(){var n;return $(this,function(o){return P().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?[2,this.gpgpu.waitForQueryAndGetTime(t)]:[2,(n=t).endMs-n.startMs]})})},e.prototype.disposeData=function(t){if(!this.pendingDisposal.has(t)){if(this.pendingRead.has(t))return this.pendingDisposal.add(t),void this.pendingDeletes++;if(this.texData.has(t)){this.releaseGPUData(t);var n=this.texData.get(t).complexTensors;n!=null&&(n.real.dispose(),n.imag.dispose()),this.texData.delete(t)}}},e.prototype.releaseGPUData=function(t){var n=this.texData.get(t),o=n.texture,a=n.dtype,i=n.texShape,s=n.usage,u=n.isPacked,c=n.slice,l=c&&c.origDataId||t,h=this.dataRefCount.get(l);h>1?this.dataRefCount.set(l,h-1):(this.dataRefCount.delete(l),o!=null&&(this.numBytesInGPU-=this.computeBytes(i,a),this.textureManager.releaseTexture(o,i,s,u)));var f=this.texData.get(t);f.texture=null,f.texShape=null,f.isPacked=!1,f.slice=null},e.prototype.getTexture=function(t){return this.uploadToGPU(t),this.texData.get(t).texture},e.prototype.getDataInfo=function(t){return this.texData.get(t)},e.prototype.getCPUBackend=function(){return P().getBool("WEBGL_CPU_FORWARD")?(this.cpuBackend==null&&(this.cpuBackend=A.findBackend("cpu")),this.cpuBackend):null},e.prototype.shouldExecuteOnCPU=function(t,n){var o=this;return n===void 0&&(n=128),this.getCPUBackend()!=null&&t.every(function(a){return o.texData.get(a.dataId).texture==null&&a.size<n})},e.prototype.getGPGPUContext=function(){return this.gpgpu},e.prototype.complex=function(t,n){var o=this.makeOutput(t.shape,"complex64");return this.texData.get(o.dataId).complexTensors={real:A.keep(t.clone()),imag:A.keep(n.clone())},o},e.prototype.real=function(t){return this.texData.get(t.dataId).complexTensors.real.clone()},e.prototype.imag=function(t){return this.texData.get(t.dataId).complexTensors.imag.clone()},e.prototype.slice=function(t,n,o){if(this.shouldExecuteOnCPU([t]))return this.cpuBackend.slice(t,n,o);if(Y(o)===0)return Ht([],o,t.dtype);var a=this.texData.get(t.dataId).isPacked,i=ds(t.shape,n,o);if(a||!i){var s=P().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new vd(o):new pd(o),u=s.getCustomSetupFunc(n);return this.compileAndRun(s,[t],null,u)}return this.uploadToGPU(t.dataId),this.shallowSlice(t,n,o)},e.prototype.shallowSlice=function(t,n,o){var a=this.texData.get(t.dataId),i=this.makeOutput(o,t.dtype),s=this.texData.get(i.dataId);Object.assign(s,a),s.shape=o,s.dtype=t.dtype;var u=ps(n,t.strides);a.slice&&(u+=a.slice.flatOffset),s.slice={flatOffset:u,origDataId:a.slice&&a.slice.origDataId||t.dataId};var c=this.dataRefCount.get(s.slice.origDataId)||1;return this.dataRefCount.set(s.slice.origDataId,c+1),i},e.prototype.stridedSlice=function(t,n,o,a){if(this.shouldExecuteOnCPU([t]))return this.cpuBackend.stridedSlice(t,n,o,a);var i=Jo(n,o,a);if(i.some(function(u){return u===0}))return Ht([],i);var s=new gd(n,a,i);return this.compileAndRun(s,[t])},e.prototype.reverse=function(t,n){var o=P().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new hd(t.shape,n):new ld(t.shape,n);return this.compileAndRun(o,[t])},e.prototype.concat=function(t,n){if(t[0].dtype==="complex64"){var o=t.map(function(d){return fe(d)}),a=t.map(function(d){return De(d)});return Gt(this.concat(o,n),this.concat(a,n))}if(this.shouldExecuteOnCPU(t))return this.cpuBackend.concat(t,n);if(t.length===1)return t[0];if(t.length>P().getNumber("WEBGL_MAX_TEXTURES_IN_SHADER")){var i=Math.floor(t.length/2),s=this.concat(t.slice(0,i),n),u=this.concat(t.slice(i),n);return this.concat([s,u],n)}if(P().getBool("WEBGL_PACK_ARRAY_OPERATIONS")&&t[0].rank>1){var c=new af(t.map(function(d){return d.shape}),n);return this.compileAndRun(c,t)}var l=An(t.map(function(d){return d.shape}),n),h=t.map(function(d){return d.as2D(-1,Y(d.shape.slice(n)))}),f=new of(h.map(function(d){return d.shape}));return this.compileAndRun(f,h).reshape(l)},e.prototype.neg=function(t){if(this.shouldExecuteOnCPU([t]))return this.cpuBackend.neg(t);if(P().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(t,js,t.dtype);var n=new at(t.shape,js);return this.compileAndRun(n,[t])},e.prototype.batchMatMul=function(t,n,o,a){var i=o?t.shape[2]:t.shape[1],s=a?n.shape[1]:n.shape[2],u=o?t.shape[1]:t.shape[2],c=t.shape[0];if((i===1||s===1)&&u>1e3){o&&(t=t.transpose([0,2,1])),a&&(n=n.transpose([0,2,1]));var l=s===1?t:t.as3D(c,u,1),h=s===1?2:1,f=s===1?n.as3D(c,1,u):n;return this.multiply(l,f).sum(h,!0)}var d=Vt(t.dtype,n.dtype),p=new ua(t.shape,[c,i,s],o,a);return this.compileAndRun(p,[t,n],d)},e.prototype.fusedBatchMatMul=function(t){var n=t.a,o=t.b,a=t.transposeA,i=t.transposeB,s=t.bias,u=t.activation,c=t.preluActivationWeights,l=a?n.shape[2]:n.shape[1],h=i?o.shape[1]:o.shape[2],f=n.shape[0],d=Vt(n.dtype,o.dtype),p=s!=null,v=c!=null,g=u?Kr(u,!0):null,m=new ua(n.shape,[f,l,h],a,i,p,g,v),y=[n,o];return s&&y.push(s),c&&y.push(c),this.compileAndRun(m,y,d)},e.prototype.multiply=function(t,n){if(t.dtype==="complex64"){var o=this.texData.get(t.dataId),a=this.texData.get(n.dataId),i=new Ds(Zh,t.shape,n.shape),s=new Ds(tf,t.shape,n.shape),u=[this.makeComplexComponentTensorInfo(t,o.complexTensors.real),this.makeComplexComponentTensorInfo(t,o.complexTensors.imag),this.makeComplexComponentTensorInfo(n,a.complexTensors.real),this.makeComplexComponentTensorInfo(n,a.complexTensors.imag)],c=this.compileAndRun(i,u),l=this.compileAndRun(s,u),h=this.complex(c,l);return c.dispose(),l.dispose(),h}if(this.shouldExecuteOnCPU([t,n]))return this.cpuBackend.multiply(t,n);if(P().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(t,n,As,t.dtype);var f=new kt(As,t.shape,n.shape);return this.compileAndRun(f,[t,n],t.dtype)},e.prototype.batchNormalization=function(t,n,o,a,i,s){var u=[t,n,o],c=null;s!=null&&(c=s.shape,u.push(s));var l=null;if(i!=null&&(l=i.shape,u.push(i)),P().getBool("WEBGL_PACK_NORMALIZATION")){var h=new Qh(t.shape,n.shape,o.shape,c,l,a);return this.compileAndRun(h,u)}var f=new Jh(t.shape,n.shape,o.shape,c,l,a);return this.compileAndRun(f,u)},e.prototype.localResponseNormalization4D=function(t,n,o,a,i){var s=P().getBool("WEBGL_PACK_NORMALIZATION")?new $f(t.shape,n,o,a,i):new Xf(t.shape,n,o,a,i);return this.compileAndRun(s,[t])},e.prototype.LRNGrad=function(t,n,o,a,i,s,u){var c=new Kf(n.shape,a,i,s,u);return this.compileAndRun(c,[n,o,t])},e.prototype.tile=function(t,n){if(t.dtype==="string"){var o=this.readSync(t.dataId).map(function(i){return Ir(i)});return _s(ot(t.shape,t.dtype,o),n)}var a=new yd(t.shape,n);return this.compileAndRun(a,[t])},e.prototype.pad=function(t,n,o){var a=P().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new nd(t.shape,n,o):new ed(t.shape,n,o);return this.compileAndRun(a,[t])},e.prototype.transpose=function(t,n){if(this.shouldExecuteOnCPU([t]))return this.cpuBackend.transpose(t,n);var o=P().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new bd(t.shape,n):new xd(t.shape,n);return this.compileAndRun(o,[t])},e.prototype.gather=function(t,n,o){if(this.shouldExecuteOnCPU([t,n]))return this.cpuBackend.gather(t,n,o);var a=new Rf(t.shape,n.size,o);return this.compileAndRun(a,[t,n])},e.prototype.batchToSpaceND=function(t,n,o){_(t.rank<=4,function(){return"batchToSpaceND for rank > 4 with a WebGL backend not implemented yet"});var a=n.reduce(function(h,f){return h*f}),i=Br(t.shape,n,a),s=Lr(i.length,n.length),u=Wr(t.shape,n,a),c=us(o,n.length),l=cs(u,o,n.length);return t.reshape(i).transpose(s).reshape(u).slice(c,l)},e.prototype.spaceToBatchND=function(t,n,o){_(t.rank<=4,function(){return"spaceToBatchND for rank > 4 with a WebGL backend not implemented yet"});var a=n.reduce(function(f,d){return f*d}),i=[[0,0]];i.push.apply(i,o);for(var s=1+n.length;s<t.shape.length;++s)i.push([0,0]);var u=t.pad(i),c=Br(u.shape,n,a,!1),l=Lr(c.length,n.length,!1),h=Wr(u.shape,n,a,!1);return u.reshape(c).transpose(l).reshape(h)},e.prototype.reduce=function(t,n,o){var a=t.shape[0],i=t.shape[1],s=Yo(i),u=new rd({windowSize:s,inSize:i,batchSize:a},n),c=this.compileAndRun(u,[t],o);return c.shape[1]===1?c:this.reduce(c,n,o)},e.prototype.argReduce=function(t,n,o){o===void 0&&(o=null);var a=t.shape[0],i=t.shape[1];o!=null&&(a=o.shape[0],i=o.shape[1]);var s=Yo(i),u=new Vh({windowSize:s,inSize:i,batchSize:a},n,o==null),c=[t];o!=null&&c.push(o);var l=this.compileAndRun(u,c,"int32");return l.shape[1]===1?l:this.argReduce(t,n,l)},e.prototype.argReducePacked=function(t,n,o){o===void 0&&(o=null);var a=o!=null?o.shape:t.shape,i=Yo(a[a.length-1]),s=new Kh(a,i,n,o==null),u=o==null?[t]:[t,o],c=this.compileAndRun(s,u,"int32");return c.rank===t.rank?this.argReducePacked(t,n,c):c},e.prototype.sum=function(t,n){ie("sum",n,t.rank);var o=jt(t.shape,n),a=o[0],i=Y(o[1]),s=t.as2D(-1,i),u=Po(t.dtype);return this.reduce(s,"sum",u).reshape(a)},e.prototype.prod=function(t,n){if(this.shouldExecuteOnCPU([t]))return this.cpuBackend.prod(t,n);var o=jt(t.shape,n),a=o[0],i=Y(o[1]),s=t.as2D(-1,i),u=Po(t.dtype);return this.reduce(s,"prod",u).reshape(a)},e.prototype.unsortedSegmentSum=function(t,n,o){var a=0,i=Re([a],t.rank),s=t;i!=null&&(s=t.transpose(i),a=ke(1,t.rank)[0]);var u=function(d,p,v){for(var g=[],m=d.length,y=0;y<m;y++)y!==p?g.push(d[y]):g.push(v);return g}(s.shape,a,o),c=Y([s.shape[a]]),l=s.as2D(-1,c),h=Po(t.dtype),f=this.segOpCompute(l,"unsortedSegmentSum",n,h,o).reshape(u);return i!=null&&(f=f.transpose(qo(i))),f},e.prototype.segOpCompute=function(t,n,o,a,i){var s=t.shape[0],u=t.shape[1],c=function(f,d){var p,v=!1;for(f<=hs?(p=f,v=!0):p=Do(f,Math.floor(Math.sqrt(f)));!v;)p>d||p===f?v=!0:p=Do(f,p+1);return p}(u,i),l=new fd({windowSize:c,inSize:u,batchSize:s,numSegments:i}),h=this.compileAndRun(l,[t,o],a);return h.shape[1]===i?h:(o=Pr(0,i).tile([u/c]),this.segOpCompute(h,n,o,a,i))},e.prototype.argMinMaxReduce=function(t,n,o){var a=[n];if(ie("arg"+o.charAt(0).toUpperCase()+o.slice(1),a,t.rank),!P().getBool("WEBGL_PACK_REDUCE")||t.rank<=2){var i=jt(t.shape,a),s=i[0],u=Y(i[1]),c=t.as2D(-1,u);return this.argReduce(c,o).reshape(s)}return this.argReducePacked(t,o)},e.prototype.argMin=function(t,n){return this.argMinMaxReduce(t,n,"min")},e.prototype.argMax=function(t,n){return this.argMinMaxReduce(t,n,"max")},e.prototype.cumsum=function(t,n,o,a){if(n!==t.rank-1)throw new Error("WebGL cumsum shader expects an inner-most axis="+(t.rank-1)+" but got axis="+n);var i=new vf(t.shape,o,a);return this.compileAndRun(i,[t])},e.prototype.equal=function(t,n){if(P().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(t,n,`
  return vec4(equal(a, b));
`,"bool");var o=new kt("return float(a == b);",t.shape,n.shape);return this.compileAndRun(o,[t,n],"bool")},e.prototype.notEqual=function(t,n){if(P().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(t,n,`
  return vec4(notEqual(a, b));
`,"bool");var o=new kt("return float(a != b);",t.shape,n.shape);return this.compileAndRun(o,[t,n],"bool")},e.prototype.less=function(t,n){if(this.shouldExecuteOnCPU([t,n]))return this.cpuBackend.less(t,n);if(P().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(t,n,`
  return vec4(lessThan(a, b));
`,"bool");var o=new kt("return float(a < b);",t.shape,n.shape);return this.compileAndRun(o,[t,n],"bool")},e.prototype.lessEqual=function(t,n){if(P().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(t,n,`
  return vec4(lessThanEqual(a, b));
`,"bool");var o=new kt("return float(a <= b);",t.shape,n.shape);return this.compileAndRun(o,[t,n],"bool")},e.prototype.greater=function(t,n){if(this.shouldExecuteOnCPU([t,n]))return this.cpuBackend.greater(t,n);if(P().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(t,n,`
  return vec4(greaterThan(a, b));
`,"bool");var o=new kt("return float(a > b);",t.shape,n.shape);return this.compileAndRun(o,[t,n],"bool")},e.prototype.greaterEqual=function(t,n){if(P().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(t,n,`
  return vec4(greaterThanEqual(a, b));
`,"bool");var o=new kt("return float(a >= b);",t.shape,n.shape);return this.compileAndRun(o,[t,n],"bool")},e.prototype.logicalNot=function(t){var n=new at(t.shape,"return float(!(x >= 1.0));");return this.compileAndRun(n,[t])},e.prototype.logicalAnd=function(t,n){if(P().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(t,n,`
  return vec4(
    vec4(greaterThanEqual(a, vec4(1.0))) *
    vec4(greaterThanEqual(b, vec4(1.0))));
`,"bool");var o=new kt("return float(a >= 1.0 && b >= 1.0);",t.shape,n.shape);return this.compileAndRun(o,[t,n],"bool")},e.prototype.logicalOr=function(t,n){if(P().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(t,n,`
  return min(
    vec4(greaterThanEqual(a, vec4(1.0))) +
    vec4(greaterThanEqual(b, vec4(1.0))),
    vec4(1.0));
`,"bool");var o=new kt("return float(a >= 1.0 || b >= 1.0);",t.shape,n.shape);return this.compileAndRun(o,[t,n],"bool")},e.prototype.select=function(t,n,o){var a=new dd(t.rank,n.shape,n.rank);return this.compileAndRun(a,[t,n,o],Vt(n.dtype,o.dtype))},e.prototype.where=function(t){Nr("tf.where() in webgl locks the UI thread. Call tf.whereAsync() instead");var n=t.dataSync();return oa(t.shape,n)},e.prototype.topk=function(t,n,o){return Is(t.dataSync(),t.shape,t.dtype,n)},e.prototype.min=function(t,n){ie("min",n,t.rank);var o=jt(t.shape,n),a=o[0],i=Y(o[1]),s=t.as2D(-1,i);return this.reduce(s,"min",s.dtype).reshape(a)},e.prototype.minimum=function(t,n){if(this.shouldExecuteOnCPU([t,n]))return this.cpuBackend.minimum(t,n);var o=P().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new Ge(`
  vec4 result = vec4(min(a, b));
  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`,t.shape,n.shape):new kt(`
  if (isnan(a)) return a;
  if (isnan(b)) return b;

  return min(a, b);
`,t.shape,n.shape);return this.compileAndRun(o,[t,n])},e.prototype.mod=function(t,n){var o=P().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new Ge(`
  vec4 result = mod(a, b);
  vec4 isNaN = vec4(equal(b, vec4(0.0)));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`,t.shape,n.shape):new kt(`if (b == 0.0) return NAN;
  return mod(a, b);`,t.shape,n.shape);return this.compileAndRun(o,[t,n])},e.prototype.max=function(t,n){if(this.shouldExecuteOnCPU([t]))return this.cpuBackend.max(t,n);ie("max",n,t.rank);var o=jt(t.shape,n),a=o[0],i=Y(o[1]),s=t.as2D(-1,i);return this.reduce(s,"max",s.dtype).reshape(a)},e.prototype.maximum=function(t,n){if(this.shouldExecuteOnCPU([t,n]))return this.cpuBackend.maximum(t,n);var o=P().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new Ge(`
  vec4 result = vec4(max(a, b));
  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`,t.shape,n.shape):new kt(`
  if (isnan(a)) return a;
  if (isnan(b)) return b;

  return max(a, b);
`,t.shape,n.shape);return this.compileAndRun(o,[t,n])},e.prototype.all=function(t,n){ie("all",n,t.rank);var o=jt(t.shape,n),a=o[0],i=Y(o[1]),s=t.as2D(-1,i);return this.reduce(s,"all",s.dtype).reshape(a)},e.prototype.any=function(t,n){ie("any",n,t.rank);var o=jt(t.shape,n),a=o[0],i=Y(o[1]),s=t.as2D(-1,i);return this.reduce(s,"any",s.dtype).reshape(a)},e.prototype.realDivide=function(t,n){if(P().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(t,n,`
  // vec4 one = vec4(equal(a, b));
  // return one + (vec4(1.0) - one) * a / b;
  vec4 result = a / b;
  if(a.x == b.x) {
    result.x = 1.;
  }
  if(a.y == b.y) {
    result.y = 1.;
  }
  if(a.z == b.z) {
    result.z = 1.;
  }
  if(a.w == b.w) {
    result.w = 1.;
  }

  return result;
`,"float32",!0);var o=new kt(`
if (a == b) {
  return 1.0;
};
return a / b;`,t.shape,n.shape);return this.compileAndRun(o,[t,n],"float32")},e.prototype.floorDiv=function(t,n){if(P().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(t,n,`
  ivec4 ia = round(a);
  ivec4 ib = round(b);
  bvec4 cond = notEqual(ib, ivec4(0));
  ivec4 result = ivec4(0);
  vec4 s = sign(a) * sign(b);

  // Windows (D3D) wants guaranteed non-zero int division at compile-time.
  if (cond[0]) {
    result[0] = idiv(ia[0], ib[0], s[0]);
  }
  if (cond[1]) {
    result[1] = idiv(ia[1], ib[1], s[1]);
  }
  if (cond[2]) {
    result[2] = idiv(ia[2], ib[2], s[2]);
  }
  if (cond[3]) {
    result[3] = idiv(ia[3], ib[3], s[3]);
  }
  return vec4(result);
`,"int32");var o=new kt(`
  float s = sign(a) * sign(b);
  int ia = round(a);
  int ib = round(b);
  if (ib != 0) {
    // Windows (D3D) wants guaranteed non-zero int division at compile-time.
    return float(idiv(ia, ib, s));
  } else {
    return NAN;
  }
`,t.shape,n.shape);return this.compileAndRun(o,[t,n],"int32")},e.prototype.add=function(t,n){if(t.dtype==="complex64"&&n.dtype==="complex64")return this.complexSeparableBinaryOp(t,n,ia);if(this.shouldExecuteOnCPU([t,n]))return this.cpuBackend.add(t,n);var o=Vt(t.dtype,n.dtype);if(P().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(t,n,ia,o);var a=new kt(ia,t.shape,n.shape);return this.compileAndRun(a,[t,n],o)},e.prototype.packedUnaryOp=function(t,n,o){var a=new lr(t.shape,n);return this.compileAndRun(a,[t],o)},e.prototype.packedBinaryOp=function(t,n,o,a,i){i===void 0&&(i=!1);var s=new Ge(o,t.shape,n.shape,i);return this.compileAndRun(s,[t,n],a)},e.prototype.complexSeparableBinaryOp=function(t,n,o){var a=this,i=this.texData.get(t.dataId),s=this.texData.get(n.dataId),u=[[i.complexTensors.real,s.complexTensors.real],[i.complexTensors.imag,s.complexTensors.imag]].map(function(f){var d=f[0],p=f[1],v=a.makeComplexComponentTensorInfo(t,d),g=a.makeComplexComponentTensorInfo(n,p),m=new kt(o,t.shape,n.shape);return a.compileAndRun(m,[v,g],Vt(d.dtype,p.dtype))}),c=u[0],l=u[1],h=this.complex(c,l);return c.dispose(),l.dispose(),h},e.prototype.makeComplexComponentTensorInfo=function(t,n){return{dataId:n.dataId,dtype:n.dtype,shape:t.shape}},e.prototype.addN=function(t){if(t.length===1)return t[0];if(t.length>P().get("WEBGL_MAX_TEXTURES_IN_SHADER")){var n=Math.floor(t.length/2),o=this.addN(t.slice(0,n)),a=this.addN(t.slice(n));return this.addN([o,a])}var i=t.map(function(c){return c.dtype}).reduce(function(c,l){return Vt(c,l)}),s=t.map(function(c){return c.shape}),u=P().getBool("WEBGL_PACK")?new zh(t[0].shape,s):new Uh(t[0].shape,s);return this.compileAndRun(u,t,i)},e.prototype.subtract=function(t,n){if(t.dtype==="complex64"&&n.dtype==="complex64")return this.complexSeparableBinaryOp(t,n,sa);if(this.shouldExecuteOnCPU([t,n]))return this.cpuBackend.subtract(t,n);var o=Vt(t.dtype,n.dtype);if(P().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(t,n,sa,t.dtype);var a=new kt(sa,t.shape,n.shape);return this.compileAndRun(a,[t,n],o)},e.prototype.pow=function(t,n){var o=P().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new Ge(`
  // isModRound1 has 1 for components with round(mod(b, 2.0)) == 1, 0 otherwise.
  vec4 isModRound1 = vec4(equal(round(mod(b, 2.0)), ivec4(1)));
  vec4 multiplier = sign(a) * isModRound1 + (vec4(1.0) - isModRound1);
  vec4 result = multiplier * pow(abs(a), b);

  // Ensure that a^0 = 1, including 0^0 = 1 as this correspond to TF and JS
  bvec4 isExpZero = equal(b, vec4(0.0));
  result.r = isExpZero.r ? 1.0 : result.r;
  result.g = isExpZero.g ? 1.0 : result.g;
  result.b = isExpZero.b ? 1.0 : result.b;
  result.a = isExpZero.a ? 1.0 : result.a;

  vec4 isNaN = vec4(lessThan(a, vec4(0.0))) * vec4(lessThan(floor(b), b));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`,t.shape,n.shape):new kt(`
if(a < 0.0 && floor(b) < b){
  return NAN;
}
if (b == 0.0) {
  return 1.0;
}
return (round(mod(b, 2.0)) != 1) ?
    pow(abs(a), b) : sign(a) * pow(abs(a), b);
`,t.shape,n.shape),a=Vt(t.dtype,n.dtype);return this.compileAndRun(o,[t,n],a)},e.prototype.ceil=function(t){if(this.shouldExecuteOnCPU([t]))return this.cpuBackend.ceil(t);if(P().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(t,Xs,t.dtype);var n=new at(t.shape,Xs);return this.compileAndRun(n,[t])},e.prototype.floor=function(t){if(this.shouldExecuteOnCPU([t]))return this.cpuBackend.floor(t);if(P().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(t,Ks,t.dtype);var n=new at(t.shape,Ks);return this.compileAndRun(n,[t])},e.prototype.sign=function(t){var n=new at(t.shape,`
  if (isnan(x)) { return 0.0; }
  return sign(x);
`);return this.compileAndRun(n,[t])},e.prototype.isNaN=function(t){var n=new at(t.shape,"return float(isnan(x));");return this.compileAndRun(n,[t],"bool")},e.prototype.isInf=function(t){var n=new at(t.shape,"return float(isinf(x));");return this.compileAndRun(n,[t],"bool")},e.prototype.isFinite=function(t){var n=new at(t.shape,"return float(!isnan(x) && !isinf(x));");return this.compileAndRun(n,[t],"bool")},e.prototype.round=function(t){var n=new at(t.shape,`
  // OpenGL ES does not support round function.
  // The algorithm is based on banker's rounding.
  float base = floor(x);
  if ((x - base) < 0.5) {
    return floor(x);
  } else if ((x - base) > 0.5) {
    return ceil(x);
  } else {
    if (mod(base, 2.0) == 0.0) {
      return base;
    } else {
      return base + 1.0;
    }
  }
`);return this.compileAndRun(n,[t])},e.prototype.exp=function(t){if(this.shouldExecuteOnCPU([t]))return this.cpuBackend.exp(t);if(P().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(t,$s,t.dtype);var n=new at(t.shape,$s);return this.compileAndRun(n,[t])},e.prototype.expm1=function(t){if(this.shouldExecuteOnCPU([t]))return this.cpuBackend.expm1(t);if(P().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(t,Ys,t.dtype);var n=new at(t.shape,Ys);return this.compileAndRun(n,[t])},e.prototype.softmax=function(t,n){var o=Nt([n],t.shape),a=this.max(t,o),i=Zt(a.shape,o),s=this.subtract(t,a.reshape(i)),u=this.exp(s),c=this.sum(u,o).reshape(i);return this.realDivide(u,c)},e.prototype.log=function(t){if(this.shouldExecuteOnCPU([t]))return this.cpuBackend.log(t);if(P().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(t,`
  vec4 result = log(x);
  vec4 isNaN = vec4(lessThan(x, vec4(0.0)));
  result.r = isNaN.r == 1.0 ? NAN : result.r;
  result.g = isNaN.g == 1.0 ? NAN : result.g;
  result.b = isNaN.b == 1.0 ? NAN : result.b;
  result.a = isNaN.a == 1.0 ? NAN : result.a;

  return result;
`,t.dtype);var n=new at(t.shape,`if (x < 0.0) return NAN;
  return log(x);`);return this.compileAndRun(n,[t])},e.prototype.log1p=function(t){var n=new at(t.shape,"return log(1.0 + x);");return this.compileAndRun(n,[t])},e.prototype.sqrt=function(t){var n=new at(t.shape,"return sqrt(x);");return this.compileAndRun(n,[t])},e.prototype.rsqrt=function(t){if(this.shouldExecuteOnCPU([t]))return this.cpuBackend.rsqrt(t);var n=new at(t.shape,"return inversesqrt(x);");return this.compileAndRun(n,[t])},e.prototype.reciprocal=function(t){var n=new at(t.shape,"return 1.0 / x;");return this.compileAndRun(n,[t])},e.prototype.relu=function(t){var n;return n=P().getBool("WEBGL_PACK")?new lr(t.shape,Js):new at(t.shape,Gs),this.compileAndRun(n,[t])},e.prototype.relu6=function(t){var n;return n=P().getBool("WEBGL_PACK")?new lr(t.shape,Qs):new at(t.shape,Hs),this.compileAndRun(n,[t])},e.prototype.prelu=function(t,n){var o=P().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new Ge(Fs,t.shape,n.shape):new kt(Ts,t.shape,n.shape);return this.compileAndRun(o,[t,n])},e.prototype.elu=function(t){if(P().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(t,Zs,t.dtype);var n=new at(t.shape,qs);return this.compileAndRun(n,[t])},e.prototype.eluDer=function(t,n){var o=P().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new Ge(`
  vec4 bGTEZero = vec4(greaterThanEqual(b, vec4(0.)));
  return (bGTEZero * a) + ((vec4(1.0) - bGTEZero) * (a * (b + vec4(1.0))));
`,t.shape,n.shape):new kt("return (b >= 1.0) ? a : a * (b + 1.0);",t.shape,n.shape);return this.compileAndRun(o,[t,n])},e.prototype.selu=function(t){var n=new at(t.shape,Cd);return this.compileAndRun(n,[t])},e.prototype.int=function(t){var n=new at(t.shape,"return float(int(x));");return this.compileAndRun(n,[t],"int32")},e.prototype.clip=function(t,n,o){var a,i=(a=P().getBool("WEBGL_PACK_CLIP")?new nf(t.shape):new ef(t.shape)).getCustomSetupFunc(n,o);return this.compileAndRun(a,[t],null,i)},e.prototype.abs=function(t){if(this.shouldExecuteOnCPU([t]))return this.cpuBackend.abs(t);if(P().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(t,Vs,t.dtype);var n=new at(t.shape,Vs);return this.compileAndRun(n,[t])},e.prototype.complexAbs=function(t){var n=this.texData.get(t.dataId),o=new rf(t.shape),a=[this.makeComplexComponentTensorInfo(t,n.complexTensors.real),this.makeComplexComponentTensorInfo(t,n.complexTensors.imag)];return this.compileAndRun(o,a)},e.prototype.sigmoid=function(t){var n=new at(t.shape,"return 1.0 / (1.0 + exp(-1.0 * x));");return this.compileAndRun(n,[t])},e.prototype.softplus=function(t){var n=new at(t.shape,`
  float epsilon = 1.1920928955078125e-7;
  float threshold = log(epsilon) + 2.0;

  bool too_large = x > -threshold;
  bool too_small = x < threshold;

  float result;
  float exp_x = exp(x);

  if (too_large){
    result = x;
  }
  else if (too_small){
    result = exp_x;
  }
  else{
    result = log(exp_x + 1.0);
  }
  return result;
`);return this.compileAndRun(n,[t])},e.prototype.sin=function(t){var n=new at(t.shape,Ed);return this.compileAndRun(n,[t])},e.prototype.cos=function(t){var n=new at(t.shape,_d);return this.compileAndRun(n,[t])},e.prototype.tan=function(t){var n=new at(t.shape,"return tan(x);");return this.compileAndRun(n,[t])},e.prototype.asin=function(t){var n=new at(t.shape,Id);return this.compileAndRun(n,[t])},e.prototype.acos=function(t){var n=new at(t.shape,Sd);return this.compileAndRun(n,[t])},e.prototype.atan=function(t){var n=new at(t.shape,Rd);return this.compileAndRun(n,[t])},e.prototype.atan2=function(t,n){var o=P().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new Ge(`
  vec4 result = atan(a, b);
  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`,t.shape,n.shape):new kt(`
  if (isnan(a)) return a;
  if (isnan(b)) return b;

  return atan(a, b);
`,t.shape,n.shape);return this.compileAndRun(o,[t,n])},e.prototype.sinh=function(t){var n=new at(t.shape,`
  float e2x = exp(x);
  return (e2x - 1.0 / e2x) / 2.0;
`);return this.compileAndRun(n,[t])},e.prototype.cosh=function(t){var n=new at(t.shape,`
  float e2x = exp(-x);
  return (e2x + 1.0 / e2x) / 2.0;
`);return this.compileAndRun(n,[t])},e.prototype.tanh=function(t){var n=new at(t.shape,`
  float e2x = exp(-2.0 * abs(x));
  return sign(x) * (1.0 - e2x) / (1.0 + e2x);
`);return this.compileAndRun(n,[t])},e.prototype.asinh=function(t){var n=new at(t.shape,kd);return this.compileAndRun(n,[t])},e.prototype.acosh=function(t){var n=new at(t.shape,Dd);return this.compileAndRun(n,[t])},e.prototype.atanh=function(t){var n=new at(t.shape,Ad);return this.compileAndRun(n,[t])},e.prototype.erf=function(t){var n=new at(t.shape,`
  // Error function is calculated approximately with elementary function.
  // See "Handbook of Mathematical Functions with Formulas,
  // Graphs, and Mathematical Tables", Abramowitz and Stegun.
  float p = 0.3275911;
  float a1 = 0.254829592;
  float a2 = -0.284496736;
  float a3 = 1.421413741;
  float a4 = -1.453152027;
  float a5 = 1.061405429;

  float sign = sign(x);
  x = abs(x);
  float t = 1.0 / (1.0 + p * x);
  return sign * (1.0 - (((((a5*t + a4)*t) + a3)*t + a2)*t + a1)*t*exp(-x*x));
`);return this.compileAndRun(n,[t])},e.prototype.step=function(t,n){var o=new at(t.shape,function(a){return a===void 0&&(a=0),ye+`
    return x > 0.0 ? 1.0 : float(`+a+`);
  `}(n));return this.compileAndRun(o,[t])},e.prototype.conv2dByMatMul=function(t,n,o,a,i,s){var u=t.shape,c=this.texData.get(t.dataId),l=o.inChannels,h=u[0]*u[1]*u[2],f=o.outChannels,d=o.dataFormat==="channelsLast",p=(h===1||f===1)&&l>1e3,v=u[2]%2!=0&&!!c.isPacked;if(p||!P().getBool("WEBGL_LAZILY_UNPACK")||!P().getBool("WEBGL_PACK_BINARY_OPERATIONS")||!v){var g=d?u[0]*u[1]*u[2]:u[0]*u[2]*u[3],m=this.reshape(t,[1,g,o.inChannels]),y=this.reshape(n,[1,o.inChannels,o.outChannels]);return this.reshape(this.fusedBatchMatMul({a:m,b:y,transposeA:!1,transposeB:!1,bias:a,activation:i,preluActivationWeights:s}),o.outShape)}var b=d?u[0]*u[1]*(u[2]+1):u[0]*u[2]*(u[3]+1),x={dataId:t.dataId,shape:[1,b,o.inChannels],dtype:t.dtype},w=c.shape;c.shape=c.shape.slice(),c.shape[c.shape.length-2]++,_(Fr(c.shape,x.shape),function(){return"packed reshape "+c.shape+" to "+x.shape+" isn't free"});var C=this.reshape(n,[1,o.inChannels,o.outChannels]),k=this.fusedBatchMatMul({a:x,b:C,transposeA:!1,transposeB:!1,bias:a,activation:i,preluActivationWeights:s}),R=this.texData.get(k.dataId);return _(R.isPacked,function(){return"batchMatMul result is expected to be packed"}),c.shape=w,R.shape=o.outShape,A.makeTensorFromDataId(k.dataId,o.outShape,k.dtype)},e.prototype.conv2dWithIm2Row=function(t,n,o,a,i,s){var u=o.filterWidth,c=o.filterHeight,l=o.inChannels,h=o.outWidth,f=o.outHeight,d=o.dataFormat==="channelsLast",p=u*c*l,v=f*h,g=[p,v],m=t.squeeze([0]),y=n.reshape([1,p,-1]),b=new jf(g,m.shape,o),x=this.compileAndRun(b,[m]).reshape([1,g[0],g[1]]),w=a!=null,C=s!=null,k=i?Kr(i,!0):null,R=new ua(x.shape,[1,v,o.outChannels],!0,!1,w,k,C),I=[x,y];a&&I.push(a),C&&I.push(s);var S=this.compileAndRun(R,I);return d?S.reshape([1,f,h,o.outChannels]):S.reshape([1,o.outChannels,f,h])},e.prototype.fusedConv2d=function(t){var n=t.input,o=t.filter,a=t.convInfo,i=t.bias,s=t.activation,u=t.preluActivationWeights;if(a.filterHeight===1&&a.filterWidth===1&&a.dilationHeight===1&&a.dilationWidth===1&&a.strideHeight===1&&a.strideWidth===1&&(a.padInfo.type==="SAME"||a.padInfo.type==="VALID"))return this.conv2dByMatMul(n,o,a,i,s,u);if(P().getBool("WEBGL_CONV_IM2COL")&&n.shape[0]===1)return this.conv2dWithIm2Row(n,o,a,i,s,u);var c=i!=null,l=u!=null,h=s?Kr(s,!1):null,f=new Ns(a,c,h,l),d=[n,o];return i&&d.push(i),u&&d.push(u),this.compileAndRun(f,d)},e.prototype.conv2d=function(t,n,o){if(o.filterHeight===1&&o.filterWidth===1&&o.dilationHeight===1&&o.dilationWidth===1&&o.strideHeight===1&&o.strideWidth===1&&(o.padInfo.type==="SAME"||o.padInfo.type==="VALID"))return this.conv2dByMatMul(t,n,o);if(P().getBool("WEBGL_CONV_IM2COL")&&t.shape[0]===1)return this.conv2dWithIm2Row(t,n,o);var a=new Ns(o);return this.compileAndRun(a,[t,n])},e.prototype.conv2dDerInput=function(t,n,o){var a=new uf(o);return this.compileAndRun(a,[t,n])},e.prototype.conv2dDerFilter=function(t,n,o){var a=new sf(o);return this.compileAndRun(a,[t,n])},e.prototype.fusedDepthwiseConv2D=function(t){var n,o=t.input,a=t.filter,i=t.convInfo,s=t.bias,u=t.activation,c=t.preluActivationWeights,l=P().getBool("WEBGL_PACK_DEPTHWISECONV")&&i.strideWidth<=2&&i.outChannels/i.inChannels==1,h=u?Kr(u,l):null,f=[o,a],d=s!=null,p=c!=null;return d&&f.push(s),p&&f.push(c),l?(n=new Ps(i,d,h,p),this.compileAndRun(n,f)):(n=new Ms(i,d,h,p),this.compileAndRun(n,f))},e.prototype.depthwiseConv2D=function(t,n,o){var a;return P().getBool("WEBGL_PACK_DEPTHWISECONV")&&o.strideWidth<=2&&o.outChannels/o.inChannels==1?(a=new Ps(o),this.compileAndRun(a,[t,n])):(a=new Ms(o),this.compileAndRun(a,[t,n]))},e.prototype.depthwiseConv2DDerInput=function(t,n,o){var a=new ff(o);return this.compileAndRun(a,[t,n])},e.prototype.depthwiseConv2DDerFilter=function(t,n,o){var a=new hf(o);return this.compileAndRun(a,[t,n])},e.prototype.conv3d=function(t,n,o){var a=new df(o);return this.compileAndRun(a,[t,n])},e.prototype.conv3dDerInput=function(t,n,o){var a=new lf(o);return this.compileAndRun(a,[t,n])},e.prototype.conv3dDerFilter=function(t,n,o){var a=new cf(o);return this.compileAndRun(a,[t,n])},e.prototype.maxPool=function(t,n){var o=new ca(n,"max",!1);return this.compileAndRun(o,[t])},e.prototype.avgPool=function(t,n){var o=new ca(n,"avg",!1);return this.compileAndRun(o,[t],"float32")},e.prototype.maxPoolBackprop=function(t,n,o,a){var i=new ca(a,"max",!0),s=this.compileAndRun(i,[n]),u=new Yf(a),c=this.compileAndRun(u,[t,s],n.dtype);return s.dispose(),c},e.prototype.avgPoolBackprop=function(t,n,o){var a=new $h(o);return this.compileAndRun(a,[t],n.dtype)},e.prototype.cast=function(t,n){return ys(t,n,this)},e.prototype.unstack=function(t,n){for(var o=t.shape[n],a=new Array(t.rank-1),i=0,s=0;s<t.rank;s++)s!==n&&(a[i++]=t.shape[s]);var u=new Array(t.rank).fill(0),c=t.shape.slice();c[n]=1;var l=new Array(o);for(s=0;s<l.length;s++)u[n]=s,l[s]=this.slice(t,u,c).reshape(a);return l},e.prototype.avgPool3d=function(t,n){var o=new la(n,"avg",!1);return this.compileAndRun(o,[t],"float32")},e.prototype.avgPool3dBackprop=function(t,n,o){var a=new Yh(o);return this.compileAndRun(a,[t],n.dtype)},e.prototype.maxPool3d=function(t,n){var o=new la(n,"max",!1);return this.compileAndRun(o,[t],"float32")},e.prototype.maxPool3dBackprop=function(t,n,o,a){var i=new la(a,"max",!0),s=this.compileAndRun(i,[n]),u=new Jf(a),c=this.compileAndRun(u,[t,s],n.dtype);return s.dispose(),c},e.prototype.reshape=function(t,n){var o=this.texData.get(t.dataId);if(o.isPacked&&!Fr(t.shape,n)&&(o.texture===null||!Fr(o.shape,n))){var a=this.packedReshape(t,n);return A.makeTensorFromDataId(a.dataId,a.shape,a.dtype)}return ta(t,n)},e.prototype.resizeBilinear=function(t,n,o,a){var i=P().getBool("WEBGL_PACK_IMAGE_OPERATIONS")?new sd(t.shape,n,o,a):new id(t.shape,n,o,a);return this.compileAndRun(i,[t],"float32")},e.prototype.resizeBilinearBackprop=function(t,n,o){var a=new ad(t,n,o);return this.compileAndRun(a,[t])},e.prototype.resizeNearestNeighbor=function(t,n,o,a){var i=new cd(t.shape,n,o,a);return this.compileAndRun(i,[t])},e.prototype.resizeNearestNeighborBackprop=function(t,n,o){var a=new ud(t,n,o);return this.compileAndRun(a,[t])},e.prototype.multinomial=function(t,n,o,a){var i=n?t:Ve(t),s=i.shape[0],u=i.shape[1],c=new Qf(s,u,o),l=c.getCustomSetupFunc(a);return this.compileAndRun(c,[i],"int32",l)},e.prototype.oneHot=function(t,n,o,a){var i=new Zf(t.size,n,o,a);return this.compileAndRun(i,[t])},e.prototype.diag=function(t){var n=new xf(t.size);return this.compileAndRun(n,[t])},e.prototype.nonMaxSuppression=function(t,n,o,a,i){return Nr("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead"),na(t.dataSync(),n.dataSync(),o,a,i)},e.prototype.cropAndResize=function(t,n,o,a,i,s){var u=new pf(t.shape,n.shape,a,i,s);return this.compileAndRun(u,[t,n,o],"float32")},e.prototype.depthToSpace=function(t,n,o){_(n>1,function(){return"blockSize should be > 1 for depthToSpace, but was: "+n});var a=t.shape[0],i=o==="NHWC"?t.shape[1]:t.shape[2],s=o==="NHWC"?t.shape[2]:t.shape[3],u=o==="NHWC"?t.shape[3]:t.shape[1],c=i*n,l=s*n,h=u/(n*n),f=new yf(o==="NHWC"?[a,c,l,h]:[a,h,c,l],n,o);return this.compileAndRun(f,[t])},e.prototype.split=function(t,n,o){return Es(t,n,o)},e.prototype.scatterND=function(t,n,o){var a=Ur(0,t,o),i=a.sliceRank,s=a.numUpdates,u=a.sliceSize,c=a.strides,l=a.outputSize,h=[l/u,u],f=t.reshape([s,i]),d=n.reshape([s,u]);if(l===0)return ta(Ht([]),o);var p=q(0),v=new Ws(s,i,f.rank,d.rank,c,h);return this.compileAndRun(v,[d,f,p]).reshape(o)},e.prototype.sparseToDense=function(t,n,o,a){var i=Ur(0,t,o),s=i.sliceRank,u=i.numUpdates,c=i.strides,l=i.outputSize,h=new Ws(u,s,t.rank,n.rank,c,[l,1]);return this.compileAndRun(h,[n,t,a]).reshape(o)},e.prototype.fft=function(t){return this.fftImpl(t,!1)},e.prototype.ifft=function(t){return this.fftImpl(t,!0)},e.prototype.fftImpl=function(t,n){var o=this.texData.get(t.dataId),a=new Bs(_f,t.shape,n),i=new Bs(If,t.shape,n),s=[this.makeComplexComponentTensorInfo(t,o.complexTensors.real),this.makeComplexComponentTensorInfo(t,o.complexTensors.imag)],u=this.compileAndRun(a,s),c=this.compileAndRun(i,s),l=this.complex(u,c).as2D(t.shape[0],t.shape[1]);return u.dispose(),c.dispose(),l},e.prototype.gatherND=function(t,n){var o=n.shape,a=o[o.length-1],i=ls(t,n),s=i[0],u=i[1],c=i[2],l=i[3],h=n.reshape([u,a]),f=t.reshape([t.size/c,c]),d=new kf(a,l,[u,c]);return this.compileAndRun(d,[f,h]).reshape(s)},e.prototype.fill=function(t,n,o){if((o=o||Qn(n))==="string"){var a=_r(o,Y(t));return a.fill(n),A.makeTensor(a,t,o,this)}var i=new Sf(t,n),s=i.getCustomSetupFunc(n);return this.compileAndRun(i,[],o,s)},e.prototype.onesLike=function(t){if(t.dtype==="string")throw new Error("onesLike is not supported under string dtype");return this.fill(t.shape,1,t.dtype)},e.prototype.zerosLike=function(t){return this.fill(t.shape,t.dtype==="string"?"":0,t.dtype)},e.prototype.linspace=function(t,n,o){return xs(t,n,o)},e.prototype.makeTensorInfo=function(t,n){var o=this.write(null,t,n);return this.texData.get(o).usage=null,{dataId:o,shape:t,dtype:n}},e.prototype.makeOutput=function(t,n){var o=this.makeTensorInfo(t,n).dataId;return A.makeTensorFromDataId(o,t,n,this)},e.prototype.unpackTensor=function(t){var n=new Fd(t.shape);return this.runWebGLProgram(n,[t],t.dtype)},e.prototype.packTensor=function(t){var n=new td(t.shape);return this.runWebGLProgram(n,[t],t.dtype,null,!0)},e.prototype.packedReshape=function(t,n){var o=[Dr(t.shape)].concat(Ar(t.shape)),a={dtype:t.dtype,shape:o,dataId:t.dataId},i=[Dr(n)].concat(Ar(n)),s=new od(i,o),u=this.runWebGLProgram(s,[a],t.dtype,null,!0);return{dataId:u.dataId,shape:n,dtype:u.dtype}},e.prototype.decode=function(t){var n,o=this.texData.get(t),a=o.isPacked,i=o.shape,s=o.dtype,u=Go(i);return n=a?new mf(u):new gf(u),{dtype:s,shape:i,dataId:this.runWebGLProgram(n,[{shape:u,dtype:s,dataId:t}],s,null,!0).dataId}},e.prototype.runWebGLProgram=function(t,n,o,a,i){var s=this;i===void 0&&(i=!1);var u=this.makeTensorInfo(t.outputShape,o),c=this.texData.get(u.dataId);if(t.packedOutput&&(c.isPacked=!0),t.outPackingScheme===or.DENSE){var l=ar(t.outputShape);c.texShape=l.map(function(b){return 2*b})}if(t.outTexUsage!=null&&(c.usage=t.outTexUsage),Y(u.shape)===0)return c.values=Jn(u.dtype,0),u;var h=[],f=n.map(function(b){if(b.dtype==="complex64")throw new Error("GPGPUProgram does not support complex64 input. For complex64 dtypes, please separate the program into real and imaginary parts.");var x=s.texData.get(b.dataId);if(x.texture==null){if(!t.packedInputs&&Y(b.shape)<=P().getNumber("WEBGL_SIZE_UPLOAD_UNIFORM"))return{shape:b.shape,texData:null,isUniform:!0,uniformValues:x.values};t.packedInputs&&(x.isPacked=!0,x.shape=b.shape)}else if(!!x.isPacked!=!!t.packedInputs)b=x.isPacked?s.unpackTensor(b):s.packTensor(b),h.push(b),x=s.texData.get(b.dataId);else if(x.isPacked&&!Fr(x.shape,b.shape)){var w=b,C=b.shape;b.shape=x.shape,b=s.packedReshape(b,C),h.push(b),x=s.texData.get(b.dataId),w.shape=C}return s.uploadToGPU(b.dataId),{shape:b.shape,texData:x,isUniform:!1}});this.uploadToGPU(u.dataId);var d,p={shape:u.shape,texData:c,isUniform:!1},v=function(b,x,w){var C="";x.concat(w).forEach(function(I){var S=I.texData!=null&&I.texData.slice!=null&&I.texData.slice.flatOffset>0,F=I.isUniform?"uniform":I.texData.texShape;C+=I.shape+"_"+F+"_"+S});var k=b.userCode,R=b.constructor.name;return R+="_"+C+"_"+k}(t,f,p),g=this.getAndSaveBinary(v,function(){return function(b,x,w,C){var k=x.userCode,R=w.map(function(W,G){var H={logicalShape:W.shape,texShape:W.isUniform?null:W.texData.texShape,isUniform:W.isUniform,isPacked:!W.isUniform&&W.texData.isPacked,flatOffset:null};return W.texData!=null&&W.texData.slice!=null&&W.texData.slice.flatOffset>0&&(H.flatOffset=W.texData.slice.flatOffset),{name:x.variableNames[G],shapeInfo:H}}),I=R.map(function(W){return W.shapeInfo}),S={logicalShape:C.shape,texShape:C.texData.texShape,isUniform:!1,isPacked:C.texData.isPacked,flatOffset:null},F=Gh(R,S,k,x.packedInputs),T=b.createProgram(F),L=null,O=b.getUniformLocation(T,"NAN",!1);P().getNumber("WEBGL_VERSION")===1&&(L=b.getUniformLocation(T,"INFINITY",!1));for(var B={},V=0;V<x.variableNames.length;V++){var U=x.variableNames[V];B[U]=b.getUniformLocation(T,U,!1),B["offset"+U]=b.getUniformLocation(T,"offset"+U,!1)}return{program:x,source:F,webGLProgram:T,uniformLocations:B,inShapeInfos:I,outShapeInfo:S,infLoc:L,nanLoc:O}}(s.gpgpu,t,f,p)}),m=this.activeTimers!=null;if(m&&(d=this.startTimer()),function(b,x,w,C,k){Ls(x.inShapeInfos,w),Ls([x.outShapeInfo],[C]);var R=C.texData.texture,I=C.texData.texShape;C.texData.isPacked?b.setOutputPackedMatrixTexture(R,I[0],I[1]):b.setOutputMatrixTexture(R,I[0],I[1]),b.setProgram(x.webGLProgram),P().getNumber("WEBGL_VERSION")===1&&x.infLoc!==null&&b.gl.uniform1f(x.infLoc,1/0),x.nanLoc!==null&&b.gl.uniform1f(x.nanLoc,NaN),w.forEach(function(S,F){var T=x.program.variableNames[F],L=x.uniformLocations[T],O=x.uniformLocations["offset"+T];if(L!=null)if(S.isUniform)if(Y(S.shape)<2)b.gl.uniform1f(L,S.uniformValues[0]);else{var B=S.uniformValues;B instanceof Float32Array||(B=new Float32Array(B)),b.gl.uniform1fv(L,B)}else S.texData.slice!=null&&O!=null&&b.gl.uniform1i(O,S.texData.slice.flatOffset),b.setInputMatrixTexture(S.texData.texture,L,F)}),k!=null&&k(b,x.webGLProgram),b.executeProgram()}(this.gpgpu,g,f,p,a),h.forEach(function(b){return s.disposeData(b.dataId)}),m&&(d=this.endTimer(d),this.activeTimers.push({name:t.constructor.name,query:this.getQueryTime(d)})),!P().getBool("WEBGL_LAZILY_UNPACK")&&c.isPacked&&i===!1){var y=this.unpackTensor(u);return this.disposeData(u.dataId),y}return u},e.prototype.compileAndRun=function(t,n,o,a,i){i===void 0&&(i=!1),o=o||n[0].dtype;var s=this.runWebGLProgram(t,n,o,a,i);return A.makeTensorFromDataId(s.dataId,s.shape,s.dtype)},e.prototype.getAndSaveBinary=function(t,n){return t in this.binaryCache||(this.binaryCache[t]=n()),this.binaryCache[t]},e.prototype.getTextureManager=function(){return this.textureManager},e.prototype.dispose=function(){var t=this;this.disposed||(P().getBool("IS_TEST")||Object.keys(this.binaryCache).forEach(function(n){t.gpgpu.deleteProgram(t.binaryCache[n].webGLProgram),delete t.binaryCache[n]}),this.textureManager.dispose(),this.canvas!=null&&typeof HTMLCanvasElement<"u"&&this.canvas instanceof HTMLCanvasElement?this.canvas.remove():this.canvas=null,this.gpgpuCreatedLocally&&(this.gpgpu.program=null,this.gpgpu.dispose()),this.disposed=!0)},e.prototype.floatPrecision=function(){var t=this;return this.floatPrecisionValue==null&&(this.floatPrecisionValue=X(function(){if(!P().get("WEBGL_RENDER_FLOAT32_ENABLED")){var n=P().getBool("DEBUG");P().set("DEBUG",!1);var o=t.abs(q(1e-8)).dataSync()[0];if(P().set("DEBUG",n),o>0)return 32}return 16})),this.floatPrecisionValue},e.prototype.epsilon=function(){return this.floatPrecision()===32?1e-7:1e-4},e.prototype.uploadToGPU=function(t){var n,o=this.texData.get(t),a=o.shape,i=o.dtype,s=o.values,u=o.texture,c=o.usage,l=o.isPacked;if(u==null){var h,f=this.activeTimers!=null;f&&(h=_e());var d=o.texShape;if(d==null&&(d=Wl(a,l),o.texShape=d),s!=null){var p=Go(a),v=void 0,g=d[1],m=d[0],y=s instanceof Uint8Array;l?(g=(n=ir(d[0],d[1]))[0],m=n[1],v=new Ef(p,[m,g],y)):v=new Cf(p,[m,g],y);var b=this.makeTensorInfo([m,g],i);this.texData.get(b.dataId).usage=y?oe.PIXELS:oe.UPLOAD,this.gpgpu.uploadDenseMatrixToTexture(this.getTexture(b.dataId),g,m,s);var x=this.runWebGLProgram(v,[b],i,null,!0),w=this.texData.get(x.dataId);o.texture=w.texture,o.texShape=w.texShape,o.isPacked=w.isPacked,o.usage=w.usage,this.disposeData(b.dataId),this.texData.delete(x.dataId),o.values=null,f&&(this.uploadWaitMs+=_e()-h)}else{var C=this.acquireTexture(d,c,i,l);o.texture=C}}},e.prototype.convertAndCacheOnCPU=function(t,n){var o=this.texData.get(t),a=o.dtype;return this.releaseGPUData(t),n!=null&&(o.values=function(i,s){if(s==="float32"||s==="complex64")return i;if(s==="int32"||s==="bool"){for(var u=s==="int32"?new Int32Array(i.length):new Uint8Array(i.length),c=0;c<u.length;++c)u[c]=Math.round(i[c]);return u}throw new Error("Unknown dtype "+s)}(n,a)),o.values},e.prototype.acquireTexture=function(t,n,o,a){if(this.numBytesInGPU+=this.computeBytes(t,o),!this.warnedAboutMemory&&this.numBytesInGPU>1024*this.numMBBeforeWarning*1024){var i=(this.numBytesInGPU/1024/1024).toFixed(2);this.warnedAboutMemory=!0,console.warn("High memory usage in GPU: "+i+" MB, most likely due to a memory leak")}return this.textureManager.acquireTexture(t,n,a)},e.prototype.computeBytes=function(t,n){return t[0]*t[1]*Bi(n)},e}(gs);$i()&&A.registerBackend("webgl",function(){return new Md},2);var Pd=D({square_:function(r){var e=E(r,"x","square"),t=[e];return A.runKernelFunc(function(n,o){return o([e]),n.square(e)},{x:e},null,"Square",{},t,[])}}),hr="SquaredDifference",tu=D({squaredDifference_:function(r,e){var t,n=E(r,"a","squaredDifference"),o=E(e,"b","squaredDifference");t=_t(n,o),n=t[0],o=t[1],lt(n.shape,o.shape);var a={a:n,b:o},i=[n,o];return A.runKernelFunc(function(s,u){var c=s.squaredDifference(n,o);return u([n,o]),c},a,function(s,u){var c=u[0],l=u[1],h=q(2);return{a:function(){return s.mul(c.sub(l).mul(h))},b:function(){return s.mul(l.sub(c).mul(h))}}},hr,{},i,[])}}),Od=D({abs_:function(r){var e=E(r,"x","abs");return e.dtype==="complex64"?A.runKernelFunc(function(t){return t.complexAbs(e)},{$x:e}):A.runKernelFunc(function(t,n){var o=t.abs(e);return n([e]),o},{x:e},function(t,n){var o=n[0];return{x:function(){return t.mul(o.toFloat().step(-1))}}},"Abs")}}),Bd=D({acos_:function(r){var e=E(r,"x","acos");return A.runKernelFunc(function(t,n){var o=t.acos(e);return n([e]),o},{$x:e},function(t,n){var o=n[0];return{$x:function(){return t.divStrict(q(1).sub(o.toFloat().square()).sqrt()).neg()}}})}}),Ld=D({acosh_:function(r){var e=E(r,"x","acosh");return A.runKernelFunc(function(t,n){var o=t.acosh(e);return n([e]),o},{$x:e},function(t,n){var o=n[0];return{$x:function(){return t.divStrict(o.toFloat().square().sub(1).sqrt())}}})}}),Wd=D({asin_:function(r){var e=E(r,"x","asin");return A.runKernelFunc(function(t,n){var o=t.asin(e);return n([e]),o},{$x:e},function(t,n){var o=n[0];return{$x:function(){return t.divStrict(q(1).sub(o.toFloat().square()).sqrt())}}})}}),Ud=D({asinh_:function(r){var e=E(r,"x","asinh");return A.runKernelFunc(function(t,n){var o=t.asinh(e);return n([e]),o},{$x:e},function(t,n){var o=n[0];return{$x:function(){return t.divStrict(q(1).add(o.toFloat().square()).sqrt())}}})}}),zd=D({atan_:function(r){var e=E(r,"x","atan");return A.runKernelFunc(function(t,n){var o=t.atan(e);return n([e]),o},{$x:e},function(t,n){var o=n[0];return{$x:function(){return t.div(o.toFloat().square().add(1))}}})}}),Vd=D({atanh_:function(r){var e=E(r,"x","atanh");return A.runKernelFunc(function(t,n){var o=t.atanh(e);return n([e]),o},{$x:e},function(t,n){var o=n[0];return{$x:function(){return t.div(q(1).sub(o.toFloat().square()))}}})}}),Gd=D({ceil_:function(r){var e=E(r,"x","ceil");return A.runKernelFunc(function(t){return t.ceil(e)},{$x:e},function(t){return{$x:function(){return pt(t)}}})}}),pa=D({clipByValue_:function(r,e,t){var n=E(r,"x","clipByValue");_(e<=t,function(){return"Error in clip: min ("+e+") must be less than or equal to max ("+t+")."});var o=[n],a={min:e,max:t};return A.runKernelFunc(function(i,s){var u=i.clip(n,e,t);return s([n]),u},{x:n},function(i,s){var u=s[0];return{x:function(){return i.where(u.greaterEqual(e).logicalAnd(u.lessEqual(t)),pt(i))}}},"ClipByValue",a,o)}}),Hd=D({cos_:function(r){var e=E(r,"x","cos"),t=[e];return A.runKernelFunc(function(n,o){var a=n.cos(e);return o([e]),a},{x:e},function(n,o){var a=o[0];return{x:function(){return a.toFloat().sin().neg().mul(n)}}},"Cos",{},t)}}),qd=D({cosh_:function(r){var e=E(r,"x","cosh");return A.runKernelFunc(function(t,n){var o=t.cosh(e);return n([e]),o},{$x:e},function(t,n){var o=n[0];return{$x:function(){return o.toFloat().sinh().mulStrict(t)}}})}}),jd=D({erf_:function(r){var e=E(r,"x","erf");return _(e.dtype==="int32"||e.dtype==="float32",function(){return"Input dtype must be `int32` or `float32`."}),e.dtype==="int32"&&(e=e.toFloat()),A.runKernelFunc(function(t,n){var o=t.erf(e);return n([e]),o},{$x:e},function(t,n){var o=n[0];return{$x:function(){return t.mul(o.square().neg().exp().mul(2/Math.sqrt(Math.PI)))}}})}}),va=D({exp_:function(r){var e=E(r,"x","exp");return A.runKernelFunc(function(t,n){var o=t.exp(e);return n([o]),o},{x:e},function(t,n){return{x:function(){return t.mulStrict(n[0])}}},"Exp",{},[],[!0])}}),Xd=D({expm1_:function(r){var e=E(r,"x","expm1");return A.runKernelFunc(function(t,n){var o=t.expm1(e);return n([e]),o},{$x:e},function(t,n){var o=n[0];return{$x:function(){return t.mul(o.exp())}}})}}),Kd=D({floor_:function(r){var e=E(r,"x","floor");return A.runKernelFunc(function(t){return t.floor(e)},{$x:e},function(t){return{$x:function(){return pt(t)}}})}}),$d=D({log_:function(r){var e=E(r,"x","log"),t=[e];return A.runKernelFunc(function(n,o){var a=n.log(e);return o([e]),a},{x:e},function(n,o){var a=o[0];return{x:function(){return n.div(a.toFloat())}}},"Log",{},t)}}),Yd=D({log1p_:function(r){var e=E(r,"x","log1p");return A.runKernelFunc(function(t,n){var o=t.log1p(e);return n([e]),o},{$x:e},function(t,n){var o=n[0];return{$x:function(){return t.div(o.add(1))}}})}}),Jd=D({logSigmoid_:function(r){var e=E(r,"x","logSigmoid");return A.runKernelFunc(function(t,n){var o=t.softplus(e.neg()).neg();return n([e]),o},{$x:e},function(t,n){var o=n[0];return{$x:function(){return t.mul(o.neg().sigmoid())}}})}}),$r=D({neg_:function(r){var e=E(r,"x","neg"),t=[e];return A.runKernelFunc(function(n){return n.neg(e)},{x:e},function(n){return{x:function(){return n.neg()}}},"Neg",{},t)}}),Qd=D({reciprocal_:function(r){var e=E(r,"x","reciprocal");return A.runKernelFunc(function(t,n){var o=t.reciprocal(e);return n([e]),o},{$x:e},function(t,n){var o=n[0];return{$x:function(){return t.div(o.square().neg())}}})}}),Zd=D({round_:function(r){var e=E(r,"x","round");return A.runKernelFunc(function(t){return t.round(e)},{$x:e},function(t){return{$x:function(){return pt(t)}}})}}),eu=D({rsqrt_:function(r){var e=E(r,"x","rsqrt"),t=[e];return A.runKernelFunc(function(n,o){var a=n.rsqrt(e);return o([e]),a},{x:e},function(n,o){var a=o[0];return{x:function(){return n.div(a.pow(1.5).mul(2)).neg()}}},"Rsqrt",{},t)}}),nu=D({sigmoid_:function(r){var e=E(r,"x","sigmoid");return A.runKernelFunc(function(t,n){var o=t.sigmoid(e);return n([o]),o},{x:e},function(t,n){var o=n[0];return{x:function(){return t.mul(o.mul(q(1).sub(o)))}}},"Sigmoid")}}),tp=D({sign_:function(r){var e=E(r,"x","sign");return A.runKernelFunc(function(t){return t.sign(e)},{$x:e},function(t){return{$x:function(){return pt(t)}}})}}),ep=D({isNaN_:function(r){var e=E(r,"x","isNaN");return A.runKernelFunc(function(t){return t.isNaN(e)},{$x:e},function(t){return{$x:function(){return pt(t)}}})}}),np=D({isInf_:function(r){var e=E(r,"x","isInf");return A.runKernelFunc(function(t){return t.isInf(e)},{$x:e},function(t){return{$x:function(){return pt(t)}}})}}),rp=D({isFinite_:function(r){var e=E(r,"x","isFinite");return A.runKernelFunc(function(t){return t.isFinite(e)},{$x:e},function(t){return{$x:function(){return pt(t)}}})}}),op=D({sin_:function(r){var e=E(r,"x","sin"),t=[e];return A.runKernelFunc(function(n,o){var a=n.sin(e);return o([e]),a},{x:e},function(n,o){var a=o[0];return{x:function(){return a.toFloat().cos().mul(n)}}},"Sin",{},t)}}),ap=D({sinh_:function(r){var e=E(r,"x","sinh");return A.runKernelFunc(function(t,n){var o=t.sinh(e);return n([e]),o},{$x:e},function(t,n){var o=n[0];return{$x:function(){return o.toFloat().cosh().mulStrict(t)}}})}}),ip=D({softplus_:function(r){var e=E(r,"x","softplus");return A.runKernelFunc(function(t,n){var o=t.softplus(e);return n([e]),o},{$x:e},function(t,n){var o=n[0];return{$x:function(){return t.mul(o.sigmoid())}}})}}),sp=D({sqrt_:function(r){var e=E(r,"x","sqrt");return A.runKernelFunc(function(t,n){var o=t.sqrt(e);return n([e]),o},{$x:e},function(t,n){var o=n[0];return{$x:function(){return t.div(o.toFloat().sqrt().mul(2))}}})}}),up=D({step_:function(r,e){e===void 0&&(e=0);var t=E(r,"x","step");return A.runKernelFunc(function(n){return n.step(t,e)},{$x:t},function(n){return{$x:function(){return pt(n)}}})}}),cp=D({tan_:function(r){var e=E(r,"x","tan");return A.runKernelFunc(function(t,n){var o=t.tan(e);return n([e]),o},{$x:e},function(t,n){var o=n[0];return{$x:function(){return t.div(o.cos().square())}}})}}),lp=D({tanh_:function(r){var e=E(r,"x","tanh");return A.runKernelFunc(function(t,n){var o=t.tanh(e);return n([o]),o},{x:e},function(t,n){var o=n[0];return{x:function(){return q(1).sub(o.square()).mulStrict(t)}}},"Tanh",{},null,[!0])}});function ru(r,e,t,n,o,a){var i,s,u=E(r,"x","batchNorm"),c=E(e,"mean","batchNorm"),l=E(t,"variance","batchNorm");return o!=null&&(i=E(o,"scale","batchNorm")),n!=null&&(s=E(n,"offset","batchNorm")),_(u.rank===2,function(){return"Error in batchNorm3D: x must be rank 3 but got rank "+u.rank+"."}),_(c.rank===2||c.rank===1,function(){return"Error in batchNorm2D: mean must be rank 2 or rank 1 but got rank "+c.rank+"."}),_(l.rank===2||l.rank===1,function(){return"Error in batchNorm2D: variance must be rank 2 or rank 1 but got rank "+l.rank+"."}),i!=null&&_(i.rank===2||i.rank===1,function(){return"Error in batchNorm2D: scale must be rank 2 or rank 1 but got rank "+i.rank+"."}),s!=null&&_(s.rank===2||s.rank===1,function(){return"Error in batchNorm2D: offset must be rank 2 or rank 1 but got rank "+s.rank+"."}),fr(u,c,l,s,i,a)}function ou(r,e,t,n,o,a){var i,s,u=E(r,"x","batchNorm"),c=E(e,"mean","batchNorm"),l=E(t,"variance","batchNorm");return o!=null&&(i=E(o,"scale","batchNorm")),n!=null&&(s=E(n,"offset","batchNorm")),_(u.rank===3,function(){return"Error in batchNorm3D: x must be rank 3 but got rank "+u.rank+"."}),_(c.rank===3||c.rank===1,function(){return"Error in batchNorm3D: mean must be rank 3 or rank 1 but got rank "+c.rank+"."}),_(l.rank===3||l.rank===1,function(){return"Error in batchNorm3D: variance must be rank 3 or rank 1 but got rank "+l.rank+"."}),i!=null&&_(i.rank===3||i.rank===1,function(){return"Error in batchNorm3D: scale must be rank 3 or rank 1 but got rank "+i.rank+"."}),s!=null&&_(s.rank===3||s.rank===1,function(){return"Error in batchNorm3D: offset must be rank 3 or rank 1 but got rank "+s.rank+"."}),fr(u,c,l,s,i,a)}function au(r,e,t,n,o,a){var i,s,u=E(r,"x","batchNorm"),c=E(e,"mean","batchNorm"),l=E(t,"variance","batchNorm");return o!=null&&(i=E(o,"scale","batchNorm")),n!=null&&(s=E(n,"offset","batchNorm")),_(u.rank===4,function(){return"Error in batchNorm4D: x must be rank 4 but got rank "+u.rank+"."}),_(c.rank===4||c.rank===1,function(){return"Error in batchNorm4D: mean must be rank 4 or rank 1 but got rank "+c.rank+"."}),_(l.rank===4||l.rank===1,function(){return"Error in batchNorm4D: variance must be rank 4 or rank 1 but got rank "+l.rank+"."}),i!=null&&_(i.rank===4||i.rank===1,function(){return"Error in batchNorm4D: scale must be rank 4 or rank 1 but got rank "+i.rank+"."}),s!=null&&_(s.rank===4||s.rank===1,function(){return"Error in batchNorm4D: offset must be rank 4 or rank 1 but got rank "+s.rank+"."}),fr(u,c,l,s,i,a)}function fr(r,e,t,n,o,a){a==null&&(a=.001);var i,s,u,c=E(r,"x","batchNorm"),l=E(e,"mean","batchNorm"),h=E(t,"variance","batchNorm");o!=null&&(i=E(o,"scale","batchNorm")),n!=null&&(s=E(n,"offset","batchNorm")),_(l.rank===h.rank,function(){return"Batch normalization gradient requires mean and variance to have equal ranks."}),_(s==null||l.rank===s.rank,function(){return"Batch normalization gradient requires mean and offset to have equal ranks."}),_(i==null||l.rank===i.rank,function(){return"Batch normalization gradient requires mean and scale to have equal ranks."}),u=c.rank===0||c.rank===1?c.as4D(1,1,1,c.size):c.rank===2?c.as4D(1,1,c.shape[0],c.shape[1]):c.rank===3?c.as4D(1,c.shape[0],c.shape[1],c.shape[2]):c;var f=[c,l,h,i];return A.runKernelFunc(function(d,p){var v=d.batchNormalization(u,Yr(l),Yr(h),a,Yr(i),Yr(s));return p([c,l,h,i]),v},{x:c,mean:l,variance:h,scale:i,offset:s},function(d,p){var v=p,g=v[0],m=v[1],y=v[2],b=v[3],x=b??q(1),w=Ot(m.shape,u.shape),C=[];if(m.rank===1){for(var k=0;k<u.shape.length-1;++k)C.push(u.shape[k]);C.push(1)}var R=g.sub(m),I=d.mul(x),S=eu(y.add(q(a))),F=S.mul(S).mul(S).mul(q(-.5));return{x:function(){return m.rank===1?d.mul(Fn(S.as4D(1,1,1,m.shape[0]),C)).mul(x).reshape(g.shape):d.mul(S).mul(x).reshape(g.shape)},mean:function(){var T=S.mul(q(-1)).mul(I);return m.rank===1&&(T=T.sum(w)),T.reshape(m.shape)},variance:function(){var T=F.mul(R).mul(I);return m.rank===1&&(T=T.sum(w)),T.reshape(m.shape)},scale:function(){var T=R.mul(S),L=d.mul(T);return m.rank===1&&(L=L.sum(w)),L.reshape(m.shape)},offset:function(){var T=d;return m.rank===1&&(T=T.sum(w)),T.reshape(m.shape)}}},"BatchNormalization",{varianceEpsilon:a},f).reshape(c.shape)}function Yr(r){return r==null?null:r.rank===0?r.as1D():r.rank===1?r:r.rank===2?r.as4D(1,1,r.shape[0],r.shape[1]):r.rank===3?r.as4D(1,r.shape[0],r.shape[1],r.shape[2]):r}function Jr(){Zi("tf.batchNormalization() is going away. Use tf.batchNorm() instead, and note the positional argument change of scale, offset, and varianceEpsilon")}var hp=D({batchNormalization2d_:function(r,e,t,n,o,a){return n===void 0&&(n=.001),Jr(),ru(r,e,t,a,o,n)}}),fp=D({batchNormalization3d_:function(r,e,t,n,o,a){return n===void 0&&(n=.001),Jr(),ou(r,e,t,a,o,n)}}),dp=D({batchNormalization4d_:function(r,e,t,n,o,a){return n===void 0&&(n=.001),Jr(),au(r,e,t,a,o,n)}}),pp=D({batchNormalization_:function(r,e,t,n,o,a){return n===void 0&&(n=.001),Jr(),fr(r,e,t,a,o,n)}}),iu=D({batchNorm_:fr}),vp=D({batchNorm2d_:ru}),gp=D({batchNorm3d_:ou}),mp=D({batchNorm4d_:au}),Qr=D({logicalAnd_:function(r,e){var t=E(r,"a","logicalAnd","bool"),n=E(e,"b","logicalAnd","bool");return lt(t.shape,n.shape),A.runKernelFunc(function(o){return o.logicalAnd(t,n)},{a:t,b:n},null,"LogicalAnd")}}),yp=D({logicalNot_:function(r){var e=E(r,"x","logicalNot","bool");return A.runKernelFunc(function(t){return t.logicalNot(e)},{$x:e})}}),su=D({logicalOr_:function(r,e){var t=E(r,"a","logicalOr","bool"),n=E(e,"b","logicalOr","bool");return lt(t.shape,n.shape),A.runKernelFunc(function(o){return o.logicalOr(t,n)},{$a:t,$b:n})}}),xp=D({logicalXor_:function(r,e){var t=E(r,"a","logicalXor","bool"),n=E(e,"b","logicalXor","bool");return lt(t.shape,n.shape),su(r,e).logicalAnd(Qr(r,e).logicalNot())}}),bn=D({where_:function(r,e,t){var n=E(e,"a","where"),o=E(t,"b","where"),a=E(r,"condition","where","bool");return xt(n.shape,o.shape,"Error in where: "),a.rank===1?_(a.shape[0]===n.shape[0],function(){return"The first dimension of `a` must match the size of `condition`."}):xt(a.shape,o.shape,"Error in where: "),A.runKernelFunc(function(i,s){var u=i.select(a,n,o);return s([a]),u},{$condition:a,$a:n,$b:o},function(i,s){var u=s[0];return{$condition:function(){return pt(u).toFloat()},$a:function(){return i.mul(u.cast(i.dtype))},$b:function(){return i.mul(u.logicalNot().cast(i.dtype))}}})}}),uu=function(r){return K(this,void 0,void 0,function(){var e,t,n;return $(this,function(o){switch(o.label){case 0:return[4,(e=E(r,"condition","whereAsync","bool")).data()];case 1:return t=o.sent(),n=oa(e.shape,t),r!==e&&e.dispose(),[2,n]}})})},ct=D({add_:function(r,e){var t,n=E(r,"a","add"),o=E(e,"b","add");t=_t(n,o),n=t[0],o=t[1];var a=lt(n.shape,o.shape);return A.runKernelFunc(function(i){return i.add(n,o)},{a:n,b:o},function(i){return{a:function(){var s=i,u=Ot(n.shape,a);return u.length>0&&(s=s.sum(u)),s.reshape(n.shape)},b:function(){var s=i,u=Ot(o.shape,a);return u.length>0&&(s=s.sum(u)),s.reshape(o.shape)}}},"Add")}}),bp=D({addN_:function(r){_(Array.isArray(r),function(){return"The argument passed to tf.addN() must be a list of tensors"}),_(r.length>=1,function(){return"Must pass at least one tensor to tf.addN(), but got "+r.length});var e=r.map(function(o,a){return E(o,"tensors"+a,"addN")}),t=e[0];e.forEach(function(o){if(o.dtype!==t.dtype)throw new Error("All tensors passed to tf.addN() must have the same dtype")}),e.forEach(function(o){if(!Wt(o.shape,t.shape))throw new Error("All tensors passed to tf.addN() must have the same shape")});var n=e;return A.runKernelFunc(function(o){return o.addN(e)},n,function(o){var a={};return e.forEach(function(i,s){a[s]=function(){return o.clone()}}),a},"AddN")}}),wp=D({addStrict_:function(r,e){var t=E(r,"a","addStrict"),n=E(e,"b","addStrict");return xt(t.shape,n.shape,"Error in addStrict: "),t.add(n)}}),Cp=D({atan2_:function(r,e){var t,n=E(r,"a","atan2"),o=E(e,"b","atan2");t=_t(n,o),n=t[0],o=t[1];var a=lt(n.shape,o.shape);return A.runKernelFunc(function(i,s){var u=i.atan2(n,o);return s([n,o]),u},{$a:n,$b:o},function(i,s){var u=s[0],c=s[1];return{$a:function(){var l=ct(u.square(),c.square()),h=i.mul(c.div(l)),f=Ot(u.shape,a);return f.length>0&&(h=h.sum(f)),h.reshape(u.shape)},$b:function(){var l=ct(u.square(),c.square()),h=$r(i.mul(u.div(l))),f=Ot(c.shape,a);return f.length>0&&(h=h.sum(f)),h.reshape(c.shape)}}})}}),xe=D({div_:function(r,e){var t,n=E(r,"a","div"),o=E(e,"b","div");if(t=_t(n,o),n=t[0],o=t[1],n.dtype==="int32"&&o.dtype==="int32")return cu(n,o);var a=lt(n.shape,o.shape);return A.runKernelFunc(function(i,s){var u=i.realDivide(n,o);return s([n,o]),u},{a:n,b:o},function(i,s){var u=s[0],c=s[1];return{a:function(){var l=i.div(c.toFloat()),h=Ot(u.shape,a);return h.length>0?l.sum(h).reshape(u.shape):l},b:function(){var l=i.mul(u.toFloat()),h=Ot(c.shape,a);h.length>0&&(l=l.sum(h).reshape(c.shape));var f=c.square();return l.div(f.toFloat()).neg()}}},"Div")}}),Ep=D({divNoNan_:function(r,e){var t,n=E(r,"a","div"),o=E(e,"b","div");n=(t=_t(n,o))[0],o=t[1];var a=xe(n,o),i=pt(a),s=o.equal(i);return bn(s,i,a)}}),_p=D({divStrict_:function(r,e){var t=E(r,"a","div"),n=E(e,"b","div");return xt(t.shape,n.shape,"Error in divideStrict: "),t.div(n)}}),cu=D({floorDiv_:function(r,e){var t,n=E(r,"a","floorDiv"),o=E(e,"b","floorDiv");t=_t(n,o),n=t[0],o=t[1];var a=lt(n.shape,o.shape);return A.runKernelFunc(function(i,s){var u=i.floorDiv(n,o);return s([n,o]),u},{a:n,b:o},function(i,s){var u=s[0],c=s[1];return{a:function(){var l=i.div(c.toFloat()),h=Ot(u.shape,a);return h.length>0?l.sum(h).reshape(u.shape):l},b:function(){var l=i.mul(u.toFloat()),h=Ot(c.shape,a);h.length>0&&(l=l.sum(h).reshape(c.shape));var f=c.square();return l.div(f.toFloat()).neg()}}},"FloorDiv")}}),ga=D({maximum_:function(r,e){var t,n=E(r,"a","maximum"),o=E(e,"b","maximum");return t=_t(n,o),n=t[0],o=t[1],n.dtype==="bool"&&(n=n.toInt(),o=o.toInt()),lt(n.shape,o.shape),A.runKernelFunc(function(a,i){var s=a.maximum(n,o);return i([n,o]),s},{a:n,b:o},function(a,i){var s=i[0],u=i[1];return{a:function(){return a.mul(s.greaterEqual(u).toFloat())},b:function(){return a.mul(s.less(u).toFloat())}}},"Maximum")}}),Ip=D({maximumStrict_:function(r,e){var t=E(r,"a","maximumStrict"),n=E(e,"b","maximumStrict");return xt(t.shape,n.shape,"Error in maximumStrict: "),t.maximum(n)}}),lu=D({minimum_:function(r,e){var t,n=E(r,"a","minimum"),o=E(e,"b","minimum");return t=_t(n,o),n=t[0],o=t[1],n.dtype==="bool"&&(n=n.toInt(),o=o.toInt()),lt(n.shape,o.shape),A.runKernelFunc(function(a,i){var s=a.minimum(n,o);return i([n,o]),s},{a:n,b:o},function(a,i){var s=i[0],u=i[1];return{a:function(){return a.mul(s.lessEqual(u).toFloat())},b:function(){return a.mul(s.greater(u).toFloat())}}},"Minimum")}}),Sp=D({minimumStrict_:function(r,e){var t=E(r,"a","minimumStrict"),n=E(e,"b","minimumStrict");return xt(t.shape,n.shape,"Error in minimumStrict: "),t.minimum(n)}}),Rp=D({mod_:function(r,e){var t,n=E(r,"a","mod"),o=E(e,"b","mod");t=_t(n,o),n=t[0],o=t[1];var a=lt(n.shape,o.shape);return A.runKernelFunc(function(i,s){var u=i.mod(n,o);return s([n,o]),u},{$a:n,$b:o},function(i,s){var u=s[0],c=s[1];return{$a:function(){var l=Ot(u.shape,a);return l.length>0?i.sum(l).reshape(u.shape):i},$b:function(){var l=i.mul(u.div(c).floor().neg()),h=Ot(c.shape,a);return h.length>0?l.sum(h).reshape(c.shape):l}}})}}),kp=D({modStrict_:function(r,e){var t=E(r,"a","modStrict"),n=E(e,"b","modStrict");return xt(t.shape,n.shape,"Error in modStrict: "),t.mod(n)}}),Kt=D({mul_:function(r,e){var t,n=E(r,"a","mul"),o=E(e,"b","mul");t=_t(n,o),n=t[0],o=t[1];var a=lt(n.shape,o.shape);return A.runKernelFunc(function(i,s){var u=i.multiply(n,o);return s([n,o]),u},{a:n,b:o},function(i,s){var u=s[0],c=s[1];return{a:function(){var l=i.mul(c.toFloat()),h=Ot(u.shape,a);return h.length>0?l.sum(h).reshape(u.shape):l},b:function(){var l=i.mul(u.toFloat()),h=Ot(c.shape,a);return h.length>0?l.sum(h).reshape(c.shape):l}}},"Mul")}}),Dp=D({mulStrict_:function(r,e){var t=E(r,"a","mul"),n=E(e,"b","mul");return xt(t.shape,n.shape,"Error in multiplyStrict: "),t.mul(n)}}),Zr=D({pow_:function(r,e){var t,n=E(r,"base","pow"),o=E(e,"exp","pow");t=_t(n,o),n=t[0],o=t[1];var a=lt(n.shape,o.shape),i=[n,o];return A.runKernelFunc(function(s,u){var c=s.pow(n,o);return u([n,o,c]),c},{a:n,b:o},function(s,u){var c=u[0],l=u[1],h=u[2];return{a:function(){var f=l.toFloat(),d=s.mul(f.mul(c.pow(f.sub(q(1))))),p=Ot(c.shape,a);return p.length>0&&(d=d.sum(p)),d.reshape(c.shape)},b:function(){var f=c.greater(0),d=c.log().where(f,pt(c)),p=s.mul(h.mul(d)),v=Ot(l.shape,a);return v.length>0&&(p=p.sum(v)),p.reshape(l.shape)}}},"Pow",{},i,[!0])}}),Ap=D({powStrict_:function(r,e){return xt(r.shape,e.shape,"Error in powStrict: "),r.pow(e)}}),Tp=D({squaredDifferenceStrict_:function(r,e){var t=E(r,"a","squaredDifferenceStrict"),n=E(e,"b","squaredDifferenceStrict");return xt(t.shape,n.shape,"Error in squaredDifferenceStrict: "),t.squaredDifference(n)}}),Bt=D({sub_:function(r,e){var t,n=E(r,"a","sub"),o=E(e,"b","sub");t=_t(n,o),n=t[0],o=t[1];var a=lt(n.shape,o.shape);return A.runKernelFunc(function(i){return i.subtract(n,o)},{a:n,b:o},function(i){return{a:function(){var s=i,u=Ot(n.shape,a);return u.length>0&&(s=s.sum(u)),s.reshape(n.shape)},b:function(){var s=i,u=Ot(o.shape,a);return u.length>0&&(s=s.sum(u)),s.neg().reshape(o.shape)}}},"Sub")}}),Fp=D({subStrict_:function(r,e){var t=E(r,"a","subStrict"),n=E(e,"b","subStrict");return xt(t.shape,n.shape,"Error in subStrict: "),t.sub(n)}}),hu=D({equal_:function(r,e){var t,n=E(r,"a","equal"),o=E(e,"b","equal");return t=_t(n,o),n=t[0],o=t[1],lt(n.shape,o.shape),A.runKernelFunc(function(a){return a.equal(n,o)},{$a:n,$b:o})}}),Np=D({equalStrict_:function(r,e){var t=E(r,"a","equalStrict"),n=E(e,"b","equalStrict");return xt(t.shape,n.shape,"Error in equalStrict: "),t.equal(n)}}),Mp=D({greater_:function(r,e){var t,n=E(r,"a","greater"),o=E(e,"b","greater");return t=_t(n,o),n=t[0],o=t[1],lt(n.shape,o.shape),A.runKernelFunc(function(a){return a.greater(n,o)},{a:n,b:o},null,"Greater")}}),fu=D({greaterEqual_:function(r,e){var t,n=E(r,"a","greaterEqual"),o=E(e,"b","greaterEqual");return t=_t(n,o),n=t[0],o=t[1],lt(n.shape,o.shape),A.runKernelFunc(function(a,i){var s=a.greaterEqual(n,o);return i([n,o]),s},{a:n,b:o},function(a,i){var s=i[0],u=i[1];return{a:function(){return pt(s)},b:function(){return pt(u)}}},"GreaterEqual")}}),Pp=D({greaterEqualStrict_:function(r,e){var t=E(r,"a","greaterEqualStrict"),n=E(e,"b","greaterEqualStrict");return xt(t.shape,n.shape,"Error in greaterEqualStrict: "),t.greaterEqual(n)}}),Op=D({greaterStrict_:function(r,e){var t=E(r,"a","greaterStrict"),n=E(e,"b","greaterStrict");return xt(t.shape,n.shape,"Error in greaterStrict: "),t.greater(n)}}),Bp=D({less_:function(r,e){var t,n=E(r,"a","less"),o=E(e,"b","less");return t=_t(n,o),n=t[0],o=t[1],lt(n.shape,o.shape),A.runKernelFunc(function(a){return a.less(n,o)},{a:n,b:o},null,"Less")}}),Lp=D({lessEqual_:function(r,e){var t,n=E(r,"a","lessEqual"),o=E(e,"b","lessEqual");return t=_t(n,o),n=t[0],o=t[1],lt(n.shape,o.shape),A.runKernelFunc(function(a,i){var s=a.lessEqual(n,o);return i([n,o]),s},{a:n,b:o},null,"LessEqual")}}),Wp=D({lessEqualStrict_:function(r,e){var t=E(r,"a","lessEqualStrict"),n=E(e,"b","lessEqualStrict");return xt(t.shape,n.shape,"Error in lessEqualStrict: "),t.lessEqual(n)}}),Up=D({lessStrict_:function(r,e){var t=E(r,"a","lessStrict"),n=E(e,"b","lessStrict");return xt(t.shape,n.shape,"Error in lessStrict: "),t.less(n)}}),zp=D({notEqual_:function(r,e){var t,n=E(r,"a","notEqual"),o=E(e,"b","notEqual");return t=_t(n,o),n=t[0],o=t[1],lt(n.shape,o.shape),A.runKernelFunc(function(a){return a.notEqual(n,o)},{a:n,b:o},null,"NotEqual")}}),Vp=D({notEqualStrict_:function(r,e){var t=E(r,"a","notEqualStrict"),n=E(e,"b","notEqualStrict");return xt(t.shape,n.shape,"Error in notEqualStrict: "),t.notEqual(n)}});function du(r,e){for(var t=[],n=r;n<e;++n)t.push(n);return t}function pu(r){for(var e=[],t=0;t<r.length;++t)for(var n=0;n<r[t].length;++n)e.push(r[t][n]);return e}var ma=D({gather_:function(r,e,t){t===void 0&&(t=0);var n=E(r,"x","gather"),o=E(e,"indices","gather","int32");t=Nt(t,n.shape)[0];var a=function(i,s,u){for(var c=i.shape[u],l=[],h=1,f=1,d=0;d<u;d++)l.push(i.shape[d]),h*=i.shape[d];for(d=0;d<s.rank;d++)l.push(s.shape[d]);for(d=u+1;d<i.rank;d++)l.push(i.shape[d]),f*=i.shape[d];return{batchSize:h,sliceSize:f,dimSize:c,outputShape:l}}(n,o,t);return A.runKernelFunc(function(i,s){var u=i.gather(n,o.flatten(),t);return s([o]),u},{x:n,indices:o},function(i,s){var u=s[0];return{x:function(){var c=n.shape,l=u.size,h=c.slice(0,t),f=h.length,d=c.slice(t,c.length).slice(1),p=d.length,v=du(0,f),g=du(f+1,f+1+p),m=pu([h,[l],d]),y=i.reshape(m),b=u.reshape([l]),x=pu([[f],v,g]),w=y.transpose(x),C=vu(w,b,n.shape[t]),k=qo(x);return C=C.transpose(k)},indices:function(){return u}}},"Gather",{axis:t}).reshape(a.outputShape)}}),vu=D({unsortedSegmentSum_:function(r,e,t){var n=E(r,"x","unsortedSegmentSum"),o=E(e,"segmentIds","unsortedSegmentSum","int32");return _(At(t),function(){return"numSegments must be of dtype int"}),A.runKernelFunc(function(a,i){var s=a.unsortedSegmentSum(n,o,t);return i([o]),s},{$x:n},function(a,i){var s=i[0];return{$x:function(){return function(u,c){for(var l=ga(c,pt(c)),h=ma(u,l),f=fu(c,q(0,"int32")),d=h.rank-f.rank,p=0;p<d;++p)f=de(f,p+1);f=Qr(f,Tn(h.shape,"bool"));var v=pt(h);return bn(f,h,v)}(a,s)}}})}}),Gp=function(r,e,t){return K(this,void 0,void 0,function(){var n,o,a,i,s,u,c,l,h,f,d,p,v;return $(this,function(g){switch(g.label){case 0:for(n=E(r,"tensor","boolMask"),o=E(e,"mask","boolMask","bool"),a=t??0,i=o.rank,s=n.shape,_(i>0,function(){return"mask cannot be scalar"}),xt(s.slice(a,a+i),o.shape,"mask's shape must match the first K dimensions of tensor's shape,"),u=1,c=a;c<a+i;c++)u*=s[c];return l=s.slice(0,a).concat([u],s.slice(a+i)),h=n.reshape(l),f=o.reshape([-1]),[4,uu(f)];case 1:return d=g.sent(),p=d.squeeze([1]),v=ma(h,p,a),r!==n&&n.dispose(),e!==o&&o.dispose(),p.dispose(),h.dispose(),f.dispose(),d.dispose(),[2,v]}})})};function gu(r,e,t,n,o,a,i){a===void 0&&(a="NHWC"),_(r.length===e.rank,function(){return"Length of inShape ("+r.length+") and rank of dy ("+e.rank+") must match"});var s=r,u=e,c=!1;e.rank===3&&(c=!0,u=e.as4D(1,e.shape[0],e.shape[1],e.shape[2]),s=[1,r[0],r[1],r[2]]),_(s.length===4,function(){return"Error in conv2dDerInput: inShape must be length 4, but got length "+s.length+"."}),_(u.rank===4,function(){return"Error in conv2dDerInput: dy must be rank 4, but got rank "+u.rank}),_(t.rank===4,function(){return"Error in conv2dDerInput: filter must be rank 4, but got rank "+t.rank});var l=a==="NHWC"?s[3]:s[1],h=a==="NHWC"?u.shape[3]:u.shape[1];_(l===t.shape[2],function(){return"Error in conv2dDerInput: depth of input ("+l+") must match input depth for filter "+t.shape[2]+"."}),_(h===t.shape[3],function(){return"Error in conv2dDerInput: depth of output ("+h+") must match output depth for filter "+t.shape[3]+"."}),i!=null&&_(At(o),function(){return"Error in conv2dDerInput: pad must be an integer when using, dimRoundingMode "+i+" but got pad "+o+"."});var f=Zo(a),d=mn(s,t.shape,n,1,o,i,!1,f),p=A.runKernelFunc(function(v,g){var m=v.conv2dDerInput(u,t,d);return g([t,u]),m},{dy4D:u,filter:t},function(v,g){var m=g[0],y=g[1];return{dy4D:function(){return pe(v,m,n,o,a,1,i)},filter:function(){return xa(v,y,m.shape,n,o,a,i)}}});return c?p.as3D(p.shape[1],p.shape[2],p.shape[3]):p}function ya(r){var e=function(a){return typeof a=="number"?[a,a,a]:a.length===2?[a[0],a[1],1]:a}(r),t=e[0],n=e[1],o=e[2];return t===1&&n===1&&o===1}function mu(r,e,t,n,o){_(r.length===e.rank,function(){return"Length of inShape ("+r.length+") and rank of dy ("+e.rank+") must match"});var a=r,i=e,s=!1;e.rank===4&&(s=!0,i=e.as5D(1,e.shape[0],e.shape[1],e.shape[2],e.shape[3]),a=[1,r[0],r[1],r[2],r[3]]);var u=a[4],c=i.shape[4];_(a.length===5,function(){return"Error in conv3dDerInput: inShape must be length 5, but got length "+a.length+"."}),_(i.rank===5,function(){return"Error in conv3dDerInput: dy must be rank 5, but got rank "+i.rank}),_(t.rank===5,function(){return"Error in conv3dDerInput: filter must be rank 5, but got rank "+t.rank}),_(u===t.shape[3],function(){return"Error in conv3dDerInput: depth of input ("+u+") must match input depth for filter "+t.shape[3]+"."}),_(c===t.shape[4],function(){return"Error in conv3dDerInput: depth of output ("+c+") must match output depth for filter "+t.shape[4]+"."});var l=Gr(a,t.shape,n,1,o),h=A.runKernelFunc(function(f){return f.conv3dDerInput(i,t,l)},{dy5D:i});return s?h.as4D(h.shape[1],h.shape[2],h.shape[3],h.shape[4]):h}var Hp=D({conv1d_:function(r,e,t,n,o,a,i){o===void 0&&(o="NWC"),a===void 0&&(a=1);var s=E(r,"x","conv1d"),u=E(e,"filter","conv1d"),c=s,l=!1;s.rank===2&&(l=!0,c=s.as3D(1,s.shape[0],s.shape[1])),_(c.rank===3,function(){return"Error in conv1d: input must be rank 3, but got rank "+c.rank+"."}),_(u.rank===3,function(){return"Error in conv1d: filter must be rank 3, but got rank "+u.rank+"."}),i!=null&&_(At(n),function(){return"Error in conv1d: pad must be an integer when using, dimRoundingMode "+i+" but got pad "+n+"."}),_(c.shape[2]===u.shape[1],function(){return"Error in conv1d: depth of input ("+c.shape[2]+") must match input depth for filter "+u.shape[1]+"."}),_(ee(t,a),function(){return"Error in conv1D: Either stride or dilation must be 1. Got stride "+t+" and dilation '"+a+"'"}),_(o==="NWC",function(){return"Error in conv1d: got dataFormat of "+o+" but only NWC is currently supported."});var h=u.as4D(1,u.shape[0],u.shape[1],u.shape[2]),f=c.as4D(c.shape[0],1,c.shape[1],c.shape[2]),d=pe(f,h,[1,t],n,"NHWC",[1,a],i);return l?d.as2D(d.shape[2],d.shape[3]):d.as3D(d.shape[0],d.shape[2],d.shape[3])}}),pe=D({conv2d_:function(r,e,t,n,o,a,i){o===void 0&&(o="NHWC"),a===void 0&&(a=[1,1]);var s=E(r,"x","conv2d"),u=E(e,"filter","conv2d"),c=s,l=!1;s.rank===3&&(l=!0,c=s.as4D(1,s.shape[0],s.shape[1],s.shape[2])),_(c.rank===4,function(){return"Error in conv2d: input must be rank 4, but got rank "+c.rank+"."}),_(u.rank===4,function(){return"Error in conv2d: filter must be rank 4, but got rank "+u.rank+"."}),i!=null&&_(At(n),function(){return"Error in conv2d: pad must be an integer when using, dimRoundingMode "+i+" but got pad "+n+"."});var h=o==="NHWC"?c.shape[3]:c.shape[1];_(h===u.shape[2],function(){return"Error in conv2d: depth of input ("+h+") must match input depth for filter "+u.shape[2]+"."}),_(ee(t,a),function(){return"Error in conv2D: Either strides or dilations must be 1. Got strides "+t+" and dilations '"+a+"'"});var f=Zo(o),d=mn(c.shape,u.shape,t,a,n,i,!1,f),p=[u,c],v=A.runKernelFunc(function(g,m){var y=g.conv2d(c,u,d);return m([u,c]),y},{x:c,filter:u},function(g,m){var y=m,b=y[0],x=y[1];return _(Mn(a),function(){return"Error in gradient of conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '"+a+"'"}),{x:function(){return yu(x.shape,g,b,t,n,o)},filter:function(){return xa(x,g,b.shape,t,n,o)}}},"Conv2D",d,p);return l?v.as3D(v.shape[1],v.shape[2],v.shape[3]):v}}),qp=D({conv3d_:function(r,e,t,n,o,a){o===void 0&&(o="NDHWC"),a===void 0&&(a=[1,1,1]);var i=E(r,"x","conv3d"),s=E(e,"filter","conv3d"),u=i,c=!1;i.rank===4&&(c=!0,u=i.as5D(1,i.shape[0],i.shape[1],i.shape[2],i.shape[3])),_(u.rank===5,function(){return"Error in conv3d: input must be rank 5, but got rank "+u.rank+"."}),_(s.rank===5,function(){return"Error in conv3d: filter must be rank 5, but got rank "+s.rank+"."}),_(u.shape[4]===s.shape[3],function(){return"Error in conv3d: depth of input ("+u.shape[4]+") must match input depth for filter "+s.shape[3]+"."}),_(function(f,d){return ya(f)||ya(d)}(t,a),function(){return"Error in conv3D: Either strides or dilations must be 1. Got strides "+t+" and dilations '"+a+"'"}),_(o==="NDHWC",function(){return"Error in conv3d: got dataFormat of "+o+" but only NDHWC is currently supported."});var l=Gr(u.shape,s.shape,t,a,n),h=A.runKernelFunc(function(f,d){var p=f.conv3d(u,s,l);return d([u,s]),p},{x:u,$filter:s},function(f,d){_(ya(a),function(){return"Error in gradient of conv3D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '"+a+"'"});var p=d[0],v=d[1];return{x:function(){return mu(p.shape,f,v,t,n)},$filter:function(){return function(g,m,y,b,x){var w=g;g.rank===4&&(w=g.as5D(1,g.shape[0],g.shape[1],g.shape[2],g.shape[3]));var C=m;C.rank===4&&(C=m.as5D(1,m.shape[0],m.shape[1],m.shape[2],m.shape[3])),_(w.rank===5,function(){return"Error in conv3dDerFilter: input must be rank 5, but got shape "+w.shape+"."}),_(C.rank===5,function(){return"Error in conv3dDerFilter: dy must be rank 5, but got shape "+C.shape+"."}),_(y.length===5,function(){return"Error in conv3dDerFilter: filterShape must be length 5, but got "+y+"."}),_(w.shape[4]===y[3],function(){return"Error in conv3dDerFilter: depth of input "+w.shape[4]+") must match input depth in filter ("+y[3]+"."}),_(C.shape[4]===y[4],function(){return"Error in conv3dDerFilter: depth of dy ("+C.shape[4]+") must match output depth for filter ("+y[4]+")."});var k=Gr(w.shape,y,b,1,x);return A.runKernelFunc(function(R){return R.conv3dDerFilter(w,C,k)},{x5D:w,dy5D:C})}(p,f,v.shape,t,n)}}});return c?h.as4D(h.shape[1],h.shape[2],h.shape[3],h.shape[4]):h}}),xa=D({conv2dDerFilter_:function(r,e,t,n,o,a,i){a===void 0&&(a="NHWC");var s=r;r.rank===3&&(s=r.as4D(1,r.shape[0],r.shape[1],r.shape[2]));var u=e;u.rank===3&&(u=e.as4D(1,e.shape[0],e.shape[1],e.shape[2])),_(s.rank===4,function(){return"Error in conv2dDerFilter: input must be rank 4, but got shape "+s.shape+"."}),_(u.rank===4,function(){return"Error in conv2dDerFilter: dy must be rank 4, but got shape "+u.shape+"."}),_(t.length===4,function(){return"Error in conv2dDerFilter: filterShape must be length 4, but got "+t+"."});var c=a==="NHWC"?s.shape[3]:s.shape[1],l=a==="NHWC"?u.shape[3]:u.shape[1];_(c===t[2],function(){return"Error in conv2dDerFilter: depth of input "+c+") must match input depth in filter ("+t[2]+"."}),_(l===t[3],function(){return"Error in conv2dDerFilter: depth of dy ("+l+") must match output depth for filter ("+t[3]+")."}),i!=null&&_(At(o),function(){return"Error in conv2dDerFilter: pad must be an integer when using, dimRoundingMode "+i+" but got pad "+o+"."});var h=Zo(a),f=mn(s.shape,t,n,1,o,i,!1,h);return A.runKernelFunc(function(d){return d.conv2dDerFilter(s,u,f)},{x4D:s,dy4D:u})}}),yu=D({conv2dDerInput_:gu}),to=D({depthwiseConv2d_:function(r,e,t,n,o,a,i){a===void 0&&(a=[1,1]);var s=E(r,"x","depthwiseConv2d"),u=E(e,"filter","depthwiseConv2d"),c=s,l=!1;s.rank===3&&(l=!0,c=s.as4D(1,s.shape[0],s.shape[1],s.shape[2])),_(c.rank===4,function(){return"Error in depthwiseConv2d: input must be rank 4, but got rank "+c.rank+"."}),_(u.rank===4,function(){return"Error in depthwiseConv2d: filter must be rank 4, but got rank "+u.rank+"."}),_(c.shape[3]===u.shape[2],function(){return"Error in depthwiseConv2d: number of input channels ("+c.shape[3]+") must match the inChannels dimension in filter "+u.shape[2]+"."}),a==null&&(a=[1,1]),_(ee(t,a),function(){return"Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides "+t+" and dilations '"+a+"'"}),i!=null&&_(At(n),function(){return"Error in depthwiseConv2d: pad must be an integer when using, dimRoundingMode "+i+" but got pad "+n+"."});var h=mn(c.shape,u.shape,t,a,n,i,!0),f=[c,u],d=A.runKernelFunc(function(p,v){var g=p.depthwiseConv2D(c,u,h);return v([c,u]),g},{x:c,filter:u},function(p,v){_(Mn(a),function(){return"Error in gradient of depthwiseConv2d: dilation rates greater than 1 are not yet supported. Got dilations '"+a+"'"});var g=v[0],m=v[1];return{x:function(){return xu(g.shape,p,m,h)},filter:function(){return bu(g,p,m.shape,h)}}},"DepthwiseConv2dNative",h,f);return l?d.as3D(d.shape[1],d.shape[2],d.shape[3]):d}}),xu=D({depthwiseConv2dDerInput_:function(r,e,t,n){var o=e,a=!1;e.rank===3&&(a=!0,o=e.as4D(1,e.shape[0],e.shape[1],e.shape[2]));var i=A.runKernelFunc(function(s){return s.depthwiseConv2DDerInput(o,t,n)},{dy4D:o});return a?i.as3D(i.shape[1],i.shape[2],i.shape[3]):i}}),bu=D({depthwiseConv2dDerFilter_:function(r,e,t,n){var o=r;r.rank===3&&(o=r.as4D(1,r.shape[0],r.shape[1],r.shape[2]));var a=e;return a.rank===3&&(a=e.as4D(1,e.shape[0],e.shape[1],e.shape[2])),A.runKernelFunc(function(i){return i.depthwiseConv2DDerFilter(o,a,n)},{x4D:o,dy4D:a})}}),ba=D({separableConv2d_:function(r,e,t,n,o,a,i){a===void 0&&(a=[1,1]),i===void 0&&(i="NHWC");var s=E(r,"x","separableConv2d"),u=E(e,"depthwiseFilter","separableConv2d"),c=E(t,"pointwiseFilter","separableConv2d"),l=s,h=!1;if(s.rank===3&&(h=!0,l=s.as4D(1,s.shape[0],s.shape[1],s.shape[2])),i==="NCHW")throw new Error("separableConv2d currently does not support dataFormat NCHW; only NHWC is supported");_(l.rank===4,function(){return"Error in separableConv2d: input must be rank 4, but got rank "+l.rank+"."}),_(u.rank===4,function(){return"Error in separableConv2d: depthwise filter must be rank 4, but got rank "+u.rank+"."}),_(c.rank===4,function(){return"Error in separableConv2d: pointwise filter must be rank 4, but got rank "+u.rank+"."}),_(c.shape[0]===1,function(){return"Error in separableConv2d: the first dimension of pointwise filter  must be 1, but got "+c.shape[0]+"."}),_(c.shape[1]===1,function(){return"Error in separableConv2d: the second dimension of pointwise filter must be 1, but got "+c.shape[1]+"."});var f=u.shape[2],d=u.shape[3];_(c.shape[2]===f*d,function(){return"Error in separableConv2d: the third dimension of pointwise filter must be "+f*d+", but got "+c.shape[2]+"."});var p=to(l,u,n,o,i,a),v=pe(p,c,1,"valid",i);return h?v.as3D(v.shape[1],v.shape[2],v.shape[3]):v}}),jp=D({conv2dTranspose_:function(r,e,t,n,o,a){return gu(t,E(r,"x","conv2dTranspose"),E(e,"filter","conv2dTranspose"),n,o,"NHWC",a)}}),Xp=D({conv3dTranspose_:function(r,e,t,n,o){return mu(t,E(r,"x","conv3dTranspose"),E(e,"filter","conv3dTranspose"),n,o)}}),eo=D({matMul_:function(r,e,t,n){var o;t===void 0&&(t=!1),n===void 0&&(n=!1);var a=E(r,"a","matMul"),i=E(e,"b","matMul");o=_t(a,i),a=o[0],i=o[1];var s=t?a.shape[a.rank-2]:a.shape[a.rank-1],u=n?i.shape[i.rank-1]:i.shape[i.rank-2],c=t?a.shape[a.rank-1]:a.shape[a.rank-2],l=n?i.shape[i.rank-2]:i.shape[i.rank-1],h=a.shape.slice(0,-2),f=i.shape.slice(0,-2),d=Y(h),p=Y(f);_(a.rank>=2&&i.rank>=2&&a.rank===i.rank,function(){return"Error in matMul: inputs must have the same rank of at least 2, got ranks "+a.rank+" and "+i.rank+"."}),_(Wt(h,f),function(){return"Error in matMul: outer dimensions ("+h+") and ("+f+") of Tensors with shapes "+a.shape+" and "+i.shape+" must match."}),_(s===u,function(){return"Error in matMul: inner shapes ("+s+") and ("+u+") of Tensors with shapes "+a.shape+" and "+i.shape+" and transposeA="+t+" and transposeB="+n+" must match."});var v=a.shape.slice(0,-2).concat([c,l]),g=t?a.as3D(d,s,c):a.as3D(d,c,s),m=n?i.as3D(p,l,u):i.as3D(p,u,l),y={transposeA:t,transposeB:n};return A.runKernelFunc(function(b,x){var w=b.batchMatMul(g,m,t,n);return x([g,m]),w},{a:g,b:m},function(b,x){var w=x,C=w[0],k=w[1];return t||n?!t&&n?{a:function(){return b.matMul(k,!1,!1)},b:function(){return b.matMul(C,!0,!1)}}:t&&!n?{a:function(){return k.matMul(b,!1,!0)},b:function(){return C.matMul(b,!1,!1)}}:{a:function(){return k.matMul(b,!0,!0)},b:function(){return b.matMul(C,!0,!0)}}:{a:function(){return b.matMul(k,!1,!0)},b:function(){return C.matMul(b,!0,!1)}}},"BatchMatMul",y).reshape(v)}}),Kp=D({dot_:function(r,e){var t=E(r,"t1","dot"),n=E(e,"t2","dot");_(!(t.rank!==1&&t.rank!==2||n.rank!==1&&n.rank!==2),function(){return"Error in dot: inputs must all be rank 1 or 2, but got ranks "+t.rank+" and "+n.rank+"."});var o=t.rank===1?t.size:t.shape[1],a=n.rank===1?n.size:n.shape[0];return _(o===a,function(){return"Error in dot: inner dimensions of inputs must match, but got "+o+" and "+a+"."}),t.rank===1&&n.rank===1?t.as2D(1,-1).matMul(n.as2D(-1,1)).asScalar():t.rank===1&&n.rank===2?t.as2D(1,-1).matMul(n.as2D(n.shape[0],n.shape[1])).as1D():t.rank===2&&n.rank===1?t.matMul(n.as2D(-1,1)).as1D():t.matMul(n.as2D(n.shape[0],n.shape[1]))}}),$p=D({outerProduct_:function(r,e){var t=E(r,"v1","outerProduct"),n=E(e,"v2","outerProduct");return _(t.rank===1&&n.rank===1,function(){return"Error in outerProduct: inputs must be rank 1, but got ranks "+t.rank+" and "+n.rank+"."}),t.as2D(-1,1).matMul(n.as2D(1,-1))}}),dr=D({reverse_:function(r,e){var t=E(r,"x","reverse");if(t.rank===0)return t.clone();var n=Nt(e,t.shape);return A.runKernelFunc(function(o){return o.reverse(t,n)},{$x:t},function(o){return{$x:function(){return o.reverse(n)}}}).reshapeAs(t)}}),Yp=D({reverse1d_:function(r){var e=E(r,"x","reverse");return _(e.rank===1,function(){return"Error in reverse1D: x must be rank 1 but got rank "+e.rank+"."}),dr(e,0)}}),Jp=D({reverse2d_:function(r,e){var t=E(r,"x","reverse");return _(t.rank===2,function(){return"Error in reverse2D: x must be rank 2 but got rank "+t.rank+"."}),dr(t,e)}}),Qp=D({reverse3d_:function(r,e){var t=E(r,"x","reverse");return _(t.rank===3,function(){return"Error in reverse3D: x must be rank 3 but got rank "+t.rank+"."}),dr(t,e)}}),Zp=D({reverse4d_:function(r,e){var t=E(r,"x","reverse");return _(t.rank===4,function(){return"Error in reverse4D: x must be rank 4 but got rank "+t.rank+"."}),dr(t,e)}});function wu(r,e,t,n,o,a){var i=E(r,"x","maxPool"),s=i,u=!1;i.rank===3&&(u=!0,s=i.as4D(1,i.shape[0],i.shape[1],i.shape[2])),_(s.rank===4,function(){return"Error in maxPool: input must be rank 4 but got rank "+s.rank+"."}),_(ee(t,n),function(){return"Error in maxPool: Either strides or dilations must be 1. Got strides "+t+" and dilations '"+n+"'"}),a!=null&&_(At(o),function(){return"Error in maxPool: pad must be an integer when using, dimRoundingMode "+a+" but got pad "+o+"."});var c=sr(s.shape,e,t,n,o,a);if(c.filterWidth===1&&c.filterHeight===1&&Wt(c.inShape,c.outShape))return i.clone();var l=[s],h=A.runKernelFunc(function(f,d){var p=f.maxPool(s,c);return d([s,p]),p},{x:s},function(f,d){var p=d[0],v=d[1];return{x:function(){return function(g,m,y,b,x,w,C,k){var R=E(g,"dy","maxPoolBackprop"),I=E(m,"input","maxPoolBackprop"),S=E(y,"output","maxPoolBackprop");_(I.rank===R.rank,function(){return"Rank of input ("+I.rank+") does not match rank of dy ("+R.rank+")"}),_(ee(x,w),function(){return"Error in maxPoolBackProp: Either strides or dilations must be 1. Got strides "+x+" and dilations '"+w+"'"}),_(R.rank===4,function(){return"Error in maxPoolBackprop: dy must be rank 4 but got rank "+R.rank+"."}),_(I.rank===4,function(){return"Error in maxPoolBackprop: input must be rank 4 but got rank "+I.rank+"."});var F=sr(I.shape,b,x,w,C,k);return A.runKernelFunc(function(T){return T.maxPoolBackprop(R,I,S,F)},{$dy:R,$input:I})}(f,p,v,e,t,n,o)}}},"MaxPool",c,l);return u?h.as3D(h.shape[1],h.shape[2],h.shape[3]):h}function Cu(r,e,t,n,o,a){var i=E(r,"x","avgPool","float32");_(ee(t,n),function(){return"Error in avgPool: Either strides or dilations must be 1. Got strides "+t+" and dilations '"+n+"'"});var s=i,u=!1;i.rank===3&&(u=!0,s=i.as4D(1,i.shape[0],i.shape[1],i.shape[2])),_(s.rank===4,function(){return"Error in avgPool: x must be rank 4 but got rank "+s.rank+"."}),a!=null&&_(At(o),function(){return"Error in avgPool: pad must be an integer when using, dimRoundingMode "+a+" but got pad "+o+"."});var c=sr(s.shape,e,t,n,o,a);if(c.filterWidth===1&&c.filterHeight===1&&Wt(c.inShape,c.outShape))return i.clone();var l=A.runKernelFunc(function(h){return h.avgPool(s,c)},{x:s},function(h){return{x:function(){return function(f,d,p,v,g,m){var y=E(f,"dy","avgPoolBackprop"),b=E(d,"input","avgPoolBackprop");_(b.rank===y.rank,function(){return"Rank of input ("+b.rank+") does not match rank of dy ("+y.rank+")"}),_(ee(v,g),function(){return"Error in avgPoolBackprop: Either strides or dilations must be 1. Got strides "+v+" and dilations '"+g+"'"});var x=b,w=y,C=!1;b.rank===3&&(C=!0,x=b.as4D(1,b.shape[0],b.shape[1],b.shape[2]),w=y.as4D(1,y.shape[0],y.shape[1],y.shape[2])),_(w.rank===4,function(){return"Error in avgPoolBackprop: dy must be rank 4 but got rank "+w.rank+"."}),_(x.rank===4,function(){return"Error in avgPoolBackprop: input must be rank 4 but got rank "+x.rank+"."});var k=sr(x.shape,p,v,g,m),R=A.runKernelFunc(function(I){return I.avgPoolBackprop(w,x,k)},{dy4D:w,input4D:x});return C?R.as3D(R.shape[1],R.shape[2],R.shape[3]):R}(h,s,e,t,n,o)}}},"AvgPool",c);return l=l.cast(i.dtype),u?l.as3D(l.shape[1],l.shape[2],l.shape[3]):l}var Ut=D({maxPool_:function(r,e,t,n,o){return wu(r,e,t,1,n,o)}}),pr=D({avgPool_:function(r,e,t,n,o){return Cu(r,e,t,1,n,o)}}),tv=D({pool_:function(r,e,t,n,o,a){o==null&&(o=[1,1]),a==null&&(a=1),n===0&&(n="valid");var i=E(r,"x","maxPool"),s=i,u=!1;i.rank===3&&(u=!0,s=i.as4D(1,i.shape[0],i.shape[1],i.shape[2])),_(ee(a,o),function(){return"Error in pool: Either strides or dilations must be 1. Got strides "+a+" and dilations '"+o+"'"});var c,l=sr(s.shape,e,a,o,n),h=[l.dilationHeight,l.dilationWidth];c=n==="same"?function(x,w){var C=x.map(function(I,S){return I+(I-1)*(w[S]-1)}).map(function(I){return I-1}),k=C.map(function(I){return Math.floor(I/2)}),R=C.map(function(I,S){return I-k[S]});return C.map(function(I,S){return[k[S],R[S]]})}([l.filterHeight,l.filterWidth],h):[[0,0],[0,0]];var f=h[0]===1&&h[1]===1,d=function(x,w,C){var k=C.map(function(O){return O[0]}),R=C.map(function(O){return O[1]}),I=x.concat(k,R),S=w.map(function(O,B){return(O-I[B]%O)%O}),F=R.map(function(O,B){return O+S[B]}),T=w.map(function(O,B){return[k[B],F[B]]}),L=w.map(function(O,B){return[0,S[B]]});return[T,L]}([l.inHeight,l.inWidth],h,c),p=d[0],v=d[1],g=f?n:"valid",m=f?s:is(s,h,p),y=(t==="avg"?function(){return Cu(m,e,a,1,g)}:function(){return wu(m,e,a,1,g)})(),b=f?y:rs(y,h,v);return u?b.as3D(b.shape[1],b.shape[2],b.shape[3]):b}}),ev=D({maxPool3d_:function(r,e,t,n,o,a,i){a===void 0&&(a="NDHWC");var s=E(r,"x","maxPool3d"),u=s,c=!1;s.rank===4&&(c=!0,u=s.as5D(1,s.shape[0],s.shape[1],s.shape[2],s.shape[3])),i==null&&(i=[1,1,1]),_(u.rank===5,function(){return"Error in maxPool3d: x must be rank 5 but got rank "+u.rank+"."}),_(a==="NDHWC",function(){return"Error in maxPool3d: Only NDHWC is currently supported, but got dataFormat of "+a}),_(ee(t,i),function(){return"Error in maxPool3d: Either strides or dilations must be 1. Got strides "+t+" and dilations '"+i+"'"}),o!=null&&_(At(n),function(){return"Error in maxPool3d: pad must be an integer when using, dimRoundingMode "+o+" but got pad "+n+"."});var l=Vr(u.shape,e,t,i,n,o,a),h=A.runKernelFunc(function(f,d){var p=f.maxPool3d(u,l);return d([u,p]),p},{x:u},function(f,d){var p=d[0],v=d[1];return{x:function(){return function(g,m,y,b,x,w,C,k){var R=E(g,"dy","maxPool3dBackprop"),I=E(m,"input","maxPool3dBackprop"),S=E(y,"output","maxPool3dBackprop"),F=R,T=I,L=S,O=!1;I.rank===4&&(O=!0,F=R.as5D(1,R.shape[0],R.shape[1],R.shape[2],R.shape[3]),T=I.as5D(1,I.shape[0],I.shape[1],I.shape[2],I.shape[3]),L=S.as5D(1,S.shape[0],S.shape[1],S.shape[2],S.shape[3])),_(F.rank===5,function(){return"Error in maxPool3dBackprop: dy must be rank 5 but got rank "+F.rank+"."}),_(T.rank===5,function(){return"Error in maxPool3dBackprop: input must be rank 5 but got rank "+T.rank+"."}),_(L.rank===5,function(){return"Error in maxPool3dBackprop: output must be rank 5 but got rank "+L.rank+"."}),w==null&&(w=[1,1,1]),_(ee(x,w),function(){return"Error in maxPool3dBackprop: Either strides or dilations must be 1. Got strides "+x+" and dilations '"+w+"'"}),k!=null&&_(At(C),function(){return"Error in maxPool3dBackprop: pad must be an integer when using, dimRoundingMode "+k+" but got pad "+C+"."});var B=Vr(T.shape,b,x,w,C,k),V=A.runKernelFunc(function(U){return U.maxPool3dBackprop(F,T,L,B)},{dy5D:F,input5D:T});return O?V.as4D(V.shape[1],V.shape[2],V.shape[3],V.shape[4]):V}(f,p,v,e,t,i,n,o)}}});return c?h.as4D(h.shape[1],h.shape[2],h.shape[3],h.shape[4]):h}}),nv=D({avgPool3d_:function(r,e,t,n,o,a,i){a===void 0&&(a="NDHWC");var s=E(r,"x","avgPool3d","float32"),u=s,c=!1;s.rank===4&&(c=!0,u=s.as5D(1,s.shape[0],s.shape[1],s.shape[2],s.shape[3])),i==null&&(i=[1,1,1]),_(u.rank===5,function(){return"Error in avgPool3d: x must be rank 5 but got rank "+u.rank+"."}),_(a==="NDHWC",function(){return"Error in avgPool3d: Only NDHWC is currently supported, but got dataFormat of "+a}),_(ee(t,i),function(){return"Error in avgPool3d: Either strides or dilations must be 1. Got strides "+t+" and dilations '"+i+"'"}),o!=null&&_(At(n),function(){return"Error in avgPool3d: pad must be an integer when using, dimRoundingMode "+o+" but got pad "+n+"."});var l=Vr(u.shape,e,t,i,n,o,a),h=A.runKernelFunc(function(f){return f.avgPool3d(u,l)},{x:u},function(f){return{x:function(){return function(d,p,v,g,m,y,b){var x=E(d,"dy","avgPool3dBackprop"),w=E(p,"input","avgPool3dBackprop"),C=x,k=w,R=!1;w.rank===4&&(R=!0,C=x.as5D(1,x.shape[0],x.shape[1],x.shape[2],x.shape[3]),k=w.as5D(1,w.shape[0],w.shape[1],w.shape[2],w.shape[3])),_(C.rank===5,function(){return"Error in avgPool3dBackprop: dy must be rank 5 but got rank "+C.rank+"."}),_(k.rank===5,function(){return"Error in avgPool3dBackprop: input must be rank 5 but got rank "+k.rank+"."}),m==null&&(m=[1,1,1]),_(ee(g,m),function(){return"Error in avgPool3dBackprop: Either strides or dilations must be 1. Got strides "+g+" and dilations '"+m+"'"}),b!=null&&_(At(y),function(){return"Error in maxPool3dBackprop: pad must be an integer when using, dimRoundingMode "+b+" but got pad "+y+"."});var I=Vr(k.shape,v,g,m,y,b),S=A.runKernelFunc(function(F){return F.avgPool3dBackprop(C,k,I)},{dy5D:C,input5D:k});return R?S.as4D(S.shape[1],S.shape[2],S.shape[3],S.shape[4]):S}(f,u,e,t,i,n,o)}}});return h=h.cast(u.dtype),c?h.as4D(h.shape[1],h.shape[2],h.shape[3],h.shape[4]):h}}),Te=D({slice_:function(r,e,t){var n,o,a=E(r,"x","slice");if(a.rank===0)throw new Error("Slicing scalar is not possible");(n=typeof e=="number"?[e].concat(new Array(a.rank-1).fill(0)):e.length<a.rank?e.concat(new Array(a.rank-e.length).fill(0)):e.slice()).forEach(function(u){_(u!==-1,function(){return"slice() does not support negative begin indexing."})}),o=(o=t==null?new Array(a.rank).fill(-1):typeof t=="number"?[t].concat(new Array(a.rank-1).fill(-1)):t.length<a.rank?t.concat(new Array(a.rank-t.length).fill(-1)):t).map(function(u,c){return u>=0?u:(_(u===-1,function(){return"Negative size values should be exactly -1 but got "+u+" for the slice() size at index "+c+"."}),a.shape[c]-n[c])}),Dh(a,n,o);var i=a.shape,s={begin:n,size:o};return A.runKernelFunc(function(u){return u.slice(a,n,o)},{x:a},function(u){for(var c=[],l=0;l<u.rank;l++)c.push([n[l],i[l]-n[l]-o[l]]);return{x:function(){return u.pad(c)}}},"Slice",s)}}),rv=D({slice1d_:function(r,e,t){var n=E(r,"x","slice1d");return _(n.rank===1,function(){return"slice1d expects a rank-1 tensor, but got a rank-"+n.rank+" tensor"}),Te(n,[e],[t])}}),ov=D({slice2d_:function(r,e,t){var n=E(r,"x","slice2d");return _(n.rank===2,function(){return"slice2d expects a rank-2 tensor, but got a rank-"+n.rank+" tensor"}),Te(n,e,t)}}),Eu=D({slice3d_:function(r,e,t){var n=E(r,"x","slice3d");return _(n.rank===3,function(){return"slice3d expects a rank-3 tensor, but got a rank-"+n.rank+" tensor"}),Te(n,e,t)}}),av=D({slice4d_:function(r,e,t){var n=E(r,"x","slice4d");return _(n.rank===4,function(){return"slice4d expects a rank-4 tensor, but got a rank-"+n.rank+" tensor"}),Te(n,e,t)}});function _u(r,e,t,n,o){return e.rank<t.rank&&(e=e.reshape(Zt(e.shape,n))),r.rank<t.rank&&(r=r.reshape(Zt(r.shape,n))),{x:function(){var a=r.mul(t.equal(e).cast(r.dtype));return o==null?a:a.transpose(o)}}}var iv=D({all_:function(r,e,t){e===void 0&&(e=null),t===void 0&&(t=!1);var n=E(r,"x","all","bool"),o=Nt(e,n.shape),a=o,i=Re(a,n.rank);i!=null&&(n=n.transpose(i),a=ke(a.length,n.rank));var s=A.runKernelFunc(function(c){return c.all(n,a)},{$x:n});if(t){var u=Zt(s.shape,o);return s.reshape(u)}return s}}),sv=D({any_:function(r,e,t){e===void 0&&(e=null),t===void 0&&(t=!1);var n=E(r,"x","any","bool"),o=Nt(e,n.shape),a=o,i=Re(a,n.rank);i!=null&&(n=n.transpose(i),a=ke(a.length,n.rank));var s=A.runKernelFunc(function(c){return c.any(n,a)},{$x:n});if(t){var u=Zt(s.shape,o);return s.reshape(u)}return s}}),uv=D({argMax_:function(r,e){e===void 0&&(e=0);var t=E(r,"x","argMax");e==null&&(e=0);var n=Nt(e,t.shape),o=Re(n,t.rank);o!=null&&(t=t.transpose(o),n=ke(n.length,t.rank));var a={axis:n[0]},i=[t];return A.runKernelFunc(function(s,u){var c=s.argMax(t,n[0]);return u([t]),c},{x:t},function(s,u){var c=u[0];return{x:function(){return pt(c)}}},"ArgMax",a,i)}}),cv=D({argMin_:function(r,e){e===void 0&&(e=0);var t=E(r,"x","argMin");e==null&&(e=0);var n=Nt(e,t.shape),o=Re(n,t.rank);return o!=null&&(t=t.transpose(o),n=ke(n.length,t.rank)),A.runKernelFunc(function(a,i){var s=a.argMin(t,n[0]);return i([t]),s},{$x:t},function(a,i){var s=i[0];return{$x:function(){return pt(s)}}})}}),lv=D({logSumExp_:function(r,e,t){e===void 0&&(e=null),t===void 0&&(t=!1);var n=E(r,"x","logSumExp"),o=Nt(e,n.shape),a=n.max(o,!0),i=n.sub(a).exp().sum(o).log(),s=a.reshape(i.shape).add(i);if(t){var u=Zt(s.shape,o);return s.reshape(u)}return s}}),no=D({max_:function(r,e,t){e===void 0&&(e=null),t===void 0&&(t=!1);var n=E(r,"x","max"),o=n,a=Nt(e,n.shape),i=a,s=Re(i,n.rank);s!=null&&(n=n.transpose(s),i=ke(i.length,n.rank));var u=[n],c=A.runKernelFunc(function(h,f){var d=h.max(n,i);return f([o,d]),d},{x:n},function(h,f){return _u(h,f[1],f[0],a,s)},"Max",{axes:i},u,[!0]);if(t){var l=Zt(c.shape,a);c=c.reshape(l)}return c}}),hv=D({mean_:function(r,e,t){e===void 0&&(e=null),t===void 0&&(t=!1);var n=E(r,"x","mean"),o=Nt(e,n.shape),a=Y(jt(n.shape,o)[1]);return zr(function(i){var s=q(a);return{value:(s.dtype===i.dtype?i:i.cast(s.dtype)).div(s).sum(e,t),gradFunc:function(u){var c=i.shape.slice();return o.forEach(function(l){c[l]=1}),u.reshape(c).mul(Tn(i.shape,"float32")).div(a)}}})(n)}}),fv=D({min_:function(r,e,t){e===void 0&&(e=null),t===void 0&&(t=!1);var n=E(r,"x","min"),o=n,a=Nt(e,n.shape),i=a,s=Re(i,n.rank);s!=null&&(n=n.transpose(s),i=ke(i.length,n.rank));var u=[n],c=A.runKernelFunc(function(h,f){var d=h.min(n,i);return f([o,d]),d},{x:n},function(h,f){return _u(h,f[1],f[0],a,s)},"Min",{axes:i},u,[!0]);if(t){var l=Zt(c.shape,a);c=c.reshape(l)}return c}}),dv=D({moments_:function(r,e,t){e===void 0&&(e=null),t===void 0&&(t=!1);var n=Nt(e,(r=E(r,"x","moments")).shape),o=r.mean(n,t),a=o.shape;t||(a=Zt(o.shape,n));var i=r.toFloat().sub(o.reshape(a)).square();return{mean:o,variance:i.mean(n,t)}}}),Iu=D({sum_:function(r,e,t){e===void 0&&(e=null),t===void 0&&(t=!1);var n=E(r,"x","sum");n.dtype==="bool"&&(n=n.toInt());var o=Nt(e,n.shape);return zr(function(a){var i=Re(o,a.rank),s=o,u=a;i!=null&&(u=a.transpose(i),s=ke(s.length,a.rank));var c=function(d){var p=a.shape.slice();return o.forEach(function(v){p[v]=1}),d.reshape(p).mul(Tn(a.shape,"float32"))},l={axes:s},h=A.runKernelFunc(function(d){return d.sum(u,s)},{x:u},function(d){return{x:function(){return c(d)}}},"Sum",l);if(t){var f=Zt(h.shape,o);h=h.reshape(f)}return{value:h,gradFunc:c}})(n)}}),pv=D({prod_:function(r,e,t){e===void 0&&(e=null),t===void 0&&(t=!1);var n=E(r,"x","prod");n.dtype==="bool"&&(n=n.toInt());var o=Nt(e,n.shape),a=Re(o,n.rank),i=o,s=n;a!=null&&(s=n.transpose(a),i=ke(i.length,n.rank));var u=A.runKernelFunc(function(l){return l.prod(s,i)},{permutedX:s});if(t){var c=Zt(u.shape,o);u=u.reshape(c)}return u}}),Su=D({elu_:function(r){var e=E(r,"x","elu");return A.runKernelFunc(function(t,n){var o=t.elu(e);return n([o]),o},{$x:e},function(t,n){var o=n[0];return{$x:function(){return A.runKernelFunc(function(a){return a.eluDer(t,o)},{dy:t,y:o})}}})}}),vv=D({leakyRelu_:function(r,e){e===void 0&&(e=.2);var t=E(r,"x","leakyRelu");return ga(q(e).mul(t),t)}}),Ru=D({prelu_:function(r,e){var t=E(r,"x","prelu"),n=E(e,"alpha","prelu");return A.runKernelFunc(function(o,a){var i=o.prelu(t,n);return a([t,n]),i},{x:t,alpha:n},function(o,a){var i=a[0],s=a[1],u=i.greater(0);return{x:function(){return bn(u,o,o.mul(s))},alpha:function(){var c=bn(u,pt(o),o.mul(i)),l=Ot(s.shape,o.shape);return l.length>0&&(c=c.sum(l)),c.reshape(s.shape)}}},"Prelu")}}),It=D({relu_:function(r){var e=E(r,"x","relu");return e.dtype==="bool"?e.toInt():A.runKernelFunc(function(t,n){var o=t.relu(e);return n([e]),o},{x:e},function(t,n){var o=n[0];return{x:function(){return t.mulStrict(o.step().toFloat())}}},"Relu")}}),ku=D({relu6_:function(r){var e=E(r,"x","relu6");return e.dtype==="bool"?e.toInt():A.runKernelFunc(function(t,n){var o=t.relu6(e);return n([e]),o},{x:e},function(t,n){var o=n[0],a=o.lessEqual(6).mul(o.step());return{x:function(){return t.mulStrict(a.toFloat())}}},"Relu6")}}),gv=D({selu_:function(r){var e=E(r,"x","selu");return A.runKernelFunc(function(t,n){var o=t.selu(e);return n([e]),o},{$x:e},function(t,n){var o=n[0];return{$x:function(){var a=o.greater(q(0)),i=q(fa),s=q(da),u=t.mul(s),c=t.mul(i).mul(o.toFloat().exp());return bn(a,u,c)}}})}}),nn=D({transpose_:function(r,e){var t=E(r,"x","transpose");if(e==null&&(e=t.shape.map(function(o,a){return a}).reverse()),_(t.rank===e.length,function(){return"Error in transpose: rank of input "+t.rank+" must match length of perm "+e+"."}),e.forEach(function(o){_(o>=0&&o<t.rank,function(){return"All entries in 'perm' must be between 0 and "+(t.rank-1)+" but got "+e})}),t.rank<=1)return t.clone();var n={perm:e};return A.runKernelFunc(function(o){return o.transpose(t,e)},{x:t},function(o){var a=qo(e);return{x:function(){return o.transpose(a)}}},"Transpose",n)}}),mv=D({localResponseNormalization_:function(r,e,t,n,o){e===void 0&&(e=5),t===void 0&&(t=1),n===void 0&&(n=1),o===void 0&&(o=.5);var a=E(r,"x","localResponseNormalization");_(a.rank===4||a.rank===3,function(){return`Error in localResponseNormalization: x must be rank 3 or 4 but got
               rank `+a.rank+"."}),_(At(e),function(){return"Error in localResponseNormalization: depthRadius must be an integer but got depthRadius "+e+"."});var i=a,s=!1;a.rank===3&&(s=!0,i=a.as4D(1,a.shape[0],a.shape[1],a.shape[2]));var u=A.runKernelFunc(function(c,l){var h=c.localResponseNormalization4D(i,e,t,n,o);return l([i,h]),h},{x4D:i},function(c,l){var h=l[0],f=l[1];return{x4D:function(){return A.runKernelFunc(function(d){return d.LRNGrad(c,h,f,e,t,n,o)},{})}}});return s?u.as3D(u.shape[1],u.shape[2],u.shape[3]):u}}),Du=D({norm_:function(r,e,t,n){e===void 0&&(e="euclidean"),t===void 0&&(t=null),n===void 0&&(n=!1);var o=function s(u,c,l){if(l===void 0&&(l=null),u.rank===0)return u.abs();if(u.rank!==1&&l===null)return s(u.reshape([-1]),c,l);if(u.rank===1||typeof l=="number"||Array.isArray(l)&&l.length===1){if(c===1)return u.abs().sum(l);if(c===1/0)return u.abs().max(l);if(c===-1/0)return u.abs().min(l);if(c==="euclidean"||c===2)return u.abs().pow(q(2,"int32")).sum(l).sqrt();throw new Error("Error in norm: invalid ord value: "+c)}if(Array.isArray(l)&&l.length===2){if(c===1)return u.abs().sum(l[0]).max(l[1]-1);if(c===1/0)return u.abs().sum(l[1]).max(l[0]);if(c===-1/0)return u.abs().sum(l[1]).min(l[0]);if(c==="fro"||c==="euclidean")return u.square().sum(l).sqrt();throw new Error("Error in norm: invalid ord value: "+c)}throw new Error("Error in norm: invalid axis: "+l)}(r=E(r,"x","norm"),e,t),a=o.shape;if(n){var i=Nt(t,r.shape);a=Zt(o.shape,i)}return o.reshape(a)}}),yv=D({basicLSTMCell_:function(r,e,t,n,o,a){var i=E(r,"forgetBias","basicLSTMCell"),s=E(e,"lstmKernel","basicLSTMCell"),u=E(t,"lstmBias","basicLSTMCell"),c=E(n,"data","basicLSTMCell"),l=E(o,"c","basicLSTMCell"),h=E(a,"h","basicLSTMCell"),f=c.concat(h,1).matMul(s).add(u),d=f.shape[0],p=f.shape[1]/4,v=[d,p],g=f.slice([0,0],v),m=f.slice([0,p],v),y=f.slice([0,2*p],v),b=f.slice([0,3*p],v),x=g.sigmoid().mulStrict(m.tanh()).addStrict(l.mulStrict(i.add(y).sigmoid())),w=x.tanh().mulStrict(b.sigmoid());return[x,w]}}),xv=D({multiRNNCell_:function(r,e,t,n){for(var o=E(e,"data","multiRNNCell"),a=Mr(t,"c","multiRNNCell"),i=Mr(n,"h","multiRNNCell"),s=o,u=[],c=0;c<r.length;c++){var l=r[c](s,a[c],i[c]);u.push(l[0]),u.push(l[1]),s=l[1]}var h=[],f=[];for(c=0;c<u.length;c+=2)h.push(u[c]),f.push(u[c+1]);return[h,f]}}),bv=D({movingAverage_:function(r,e,t,n,o){o===void 0&&(o=!0);var a=E(r,"v","movingAverage"),i=E(e,"x","movingAverage"),s=E(t,"decay","movingAverage");gl(a,i),_(Wt(a.shape,i.shape),function(){return"Shape mismatch in v and x"});var u=q(1),c=u.sub(s),l=i.sub(a).mul(c);if(o){_(n!=null,function(){return"When using zeroDebias: true, step is required."});var h=E(n,"step","movingAverage");l=l.div(u.sub(Zr(s,h)))}return a.add(l)}}),wv=D({stridedSlice_:function(r,e,t,n,o,a,i,s,u){if(o===void 0&&(o=0),a===void 0&&(a=0),i===void 0&&(i=0),s===void 0&&(s=0),u===void 0&&(u=0),n==null&&(n=new Array(e.length)),i!==0)throw new Error("ellipsis mask is not yet supported");var c=E(r,"x","stridedSlice"),l=fs(s),h=c.shape.slice();l.forEach(function(g){e[g]=0,t[g]=1,h.splice(g,0,1)}),c=c.reshape(h);for(var f=0;f<c.rank;f++)e[f]=Ah(o,e,n,c.shape,f),t[f]=Th(a,t,n,c.shape,f),n[f]=n[f]||1;var d=fs(u);d.forEach(function(g){t[g]=e[g]+1,n[g]=1});var p=Jo(e,t,n),v=p.filter(function(g,m){return d.indexOf(m)===-1});return n.every(function(g){return g===1})?Te(c,e,p).reshape(v):A.runKernelFunc(function(g){return g.stridedSlice(c,e,t,n)},{$x:c}).reshape(v)}}),Cv=D({topk_:function(r,e,t){e===void 0&&(e=1),t===void 0&&(t=!0);var n=E(r,"x","topk");if(n.rank===0)throw new Error("topk() expects the input to be of rank 1 or higher");var o=n.shape[n.shape.length-1];if(e>o)throw new Error("'k' passed to topk() must be <= the last dimension ("+o+") but got "+e);var a=A.runKernelFunc(function(i){return i.topk(n,e,t)},{$x:n});return{values:a[0],indices:a[1]}}}),Ev=D({scatterND_:function(r,e,t){var n=E(r,"indices","scatterND","int32"),o=E(e,"updates","scatterND");return kh(o,n,t),A.runKernelFunc(function(a){return a.scatterND(n,o,t)},{indices:n,updates:o},null,"ScatterNd",{shape:t})}}),wa=D({fft_:function(r){_(r.dtype==="complex64",function(){return"The dtype for tf.spectral.fft() must be complex64 but got "+r.dtype+"."});var e=r.shape[r.shape.length-1],t=r.size/e,n=r.as2D(t,e);return A.runKernelFunc(function(o){return o.fft(n)},{input:r}).reshape(r.shape)}}),ro=D({ifft_:function(r){_(r.dtype==="complex64",function(){return"The dtype for tf.spectral.ifft() must be complex64 but got "+r.dtype+"."});var e=r.shape[r.shape.length-1],t=r.size/e,n=r.as2D(t,e);return A.runKernelFunc(function(o){return o.ifft(n)},{input:r}).reshape(r.shape)}}),Ca=D({rfft_:function(r,e){_(r.dtype==="float32",function(){return"The dtype for rfft() must be real value but got "+r.dtype});var t,n=r.shape[r.shape.length-1],o=r.size/n;if(e!=null&&e<n){var a=r.shape.map(function(m){return 0}),i=r.shape.map(function(m){return m});i[r.shape.length-1]=e,t=r.slice(a,i),n=e}else if(e!=null&&e>n){var s=r.shape.map(function(m){return m});s[r.shape.length-1]=e-n,t=r.concat(Ct(s),r.shape.length-1),n=e}else t=r;var u=t.zerosLike(),c=Gt(t,u).as2D(o,n),l=wa(c),h=Math.floor(n/2)+1,f=fe(l),d=De(l),p=f.split([h,n-h],f.shape.length-1),v=d.split([h,n-h],d.shape.length-1),g=t.shape.slice();return g[t.shape.length-1]=h,Gt(p[0],v[0]).reshape(g)}}),Au=D({irfft_:function(r){var e=r.shape[r.shape.length-1],t=r.size/e;if(e<=2){var n=r.as2D(t,e),o=ro(n);return fe(o)}var a=[t,2*(e-1)],i=fe(r).as2D(t,e),s=De(r).as2D(t,e),u=i.slice([0,1],[t,e-2]).reverse(1),c=s.slice([0,1],[t,e-2]).reverse(1).mul(q(-1)),l=i.concat(u,1),h=s.concat(c,1);return n=Gt(l,h).as2D(a[0],a[1]),o=ro(n),fe(o)}}),_v=Object.freeze({fft:wa,ifft:ro,rfft:Ca,irfft:Au}),Iv=D({sparseToDense_:function(r,e,t,n){n===void 0&&(n=0);var o=E(r,"sparseIndices","sparseToDense","int32"),a=E(e,"sparseValues","sparseToDense"),i=E(n,"defaultValue","sparseToDense",a.dtype);return function(s,u,c,l){if(s.dtype!=="int32")throw new Error("tf.sparseToDense() expects the indices to be int32 type, but the dtype was "+s.dtype+".");if(s.rank>2)throw new Error("sparseIndices should be a scalar, vector, or matrix, but got shape "+s.shape+".");var h=s.rank>0?s.shape[0]:1,f=s.rank>1?s.shape[1]:1;if(c.length!==f)throw new Error("outputShape has incorrect number of elements:, "+c.length+", should be: "+f+".");var d=u.size;if(u.rank!==0&&(u.rank!==1||d!==h))throw new Error("sparseValues has incorrect shape "+u.shape+", should be [] or ["+h+"]");if(u.dtype!==l.dtype)throw new Error("sparseValues.dtype must match defaultValues.dtype")}(o,a,t,i),A.runKernelFunc(function(s){return s.sparseToDense(o,a,t,i)},{$sparseIndices:o,$sparseValues:a,$defaultValue:i})}}),Sv=D({gatherND_:function(r,e){var t=E(e,"indices","gatherND","int32"),n=E(r,"x","gatherND");return A.runKernelFunc(function(o){return o.gatherND(n,t)},{x:n,indices:t},null,"GatherNd")}}),Rv=D({diag_:function(r){var e=E(r,"x","diag").flatten(),t=r.shape.concat(r.shape);return A.runKernelFunc(function(n){return n.diag(e)},{$x:e}).reshape(t)}}),kv=D({dropout_:function(r,e,t,n){var o=E(r,"x","dropout");if(_(o.dtype==="float32",function(){return"x has to be a floating point tensor since it's going to be scaled, but got a "+o.dtype+" tensor instead."}),_(e>=0&&e<1,function(){return"rate must be a float in the range [0, 1), but got "+e+"."}),e===0)return r instanceof Et?o.clone():o;var a=function(u,c){if(c==null)return u.shape.slice();if(Wt(u.shape,c))return c;if(u.shape.length===c.length){for(var l=[],h=0;h<u.shape.length;h++)c[h]==null&&u.shape[h]!=null?l.push(u.shape[h]):l.push(c[h]);return l}return c}(o,t),i=1-e,s=as(a,0,1,"float32",n).add(i).floor().div(i);return o.mul(s)}});function Tu(r,e,t){for(var n=1-r%2,o=new Float32Array(r),a=0;a<r;++a){var i=2*Math.PI*a/(r+n-1);o[a]=e-t*Math.cos(i)}return Ft(o,"float32")}var Ea=D({hannWindow_:function(r){return Tu(r,.5,.5)}}),Fu=D({hammingWindow_:function(r){return Tu(r,.54,.46)}}),_a=D({frame_:function(r,e,t,n,o){n===void 0&&(n=!1),o===void 0&&(o=0);for(var a=0,i=[];a+e<=r.size;)i.push(Te(r,a,e)),a+=t;if(n)for(;a<r.size;){var s=a+e-r.size,u=Mt([Te(r,a,e-s),Ae([s],o)]);i.push(u),a+=t}return i.length===0?tn([],[0,e]):Mt(i).as2D(i.length,e)}}),Nu=D({stft_:function(r,e,t,n,o){var a;o===void 0&&(o=Ea),n==null&&(a=e,n=Math.floor(Math.pow(2,Math.ceil(Math.log(a)/Math.log(2)))));for(var i=_a(r,e,t),s=Kt(i,o(e)),u=[],c=0;c<i.shape[0];c++)u.push(Ca(s.slice([c,0],[1,e]),n));return Mt(u)}}),Dv=Object.freeze({hannWindow:Ea,hammingWindow:Fu,frame:_a,stft:Nu}),$t,Av=function(r,e,t){return t===void 0&&(t=1),K(this,void 0,void 0,function(){var n,o,a,i,s,u,c,l,h,f,d,p,v,g;return $(this,function(m){switch(m.label){case 0:return n=E(r,"predictions","inTopK"),o=E(e,"targets","inTopK"),_(n.rank>1,function(){return"inTopK() expects the predictions to be of rank 2 or higher, but got "+n.rank}),_(n.rank-1===o.rank,function(){return"predictions rank should be 1 larger than targets rank, but got predictions rank "+n.rank+" and targets rank "+o.rank}),xt(n.shape.slice(0,n.shape.length-1),o.shape,"predictions's shape should be align with the targets' shape, except the last dimension."),a=n.shape[n.shape.length-1],_(t>0&&t<=a,function(){return"'k' passed to inTopK() must be > 0 && <= the predictions last dimension ("+a+"), but got "+t}),[4,n.data()];case 1:return i=m.sent(),[4,o.data()];case 2:for(s=m.sent(),u=[i.length/a,a],l=u[1],h=Jn("bool",c=u[0]),f=0;f<c;f++){for(d=f*l,p=i.subarray(d,d+l),v=[],g=0;g<p.length;g++)v.push({value:p[g],index:g});for(v.sort(function(y,b){return b.value-y.value}),h[f]=0,g=0;g<t;g++)if(v[g].index===s[f]){h[f]=1;break}}return r!==n&&n.dispose(),e!==o&&o.dispose(),[2,Ht(h,o.shape,"bool")]}})})};(function(r){r[r.NONE=0]="NONE",r[r.MEAN=1]="MEAN",r[r.SUM=2]="SUM",r[r.SUM_BY_NONZERO_WEIGHTS=3]="SUM_BY_NONZERO_WEIGHTS"})($t||($t={}));var Tv=D({absoluteDifference_:function(r,e,t,n){n===void 0&&(n=$t.SUM_BY_NONZERO_WEIGHTS);var o=E(r,"labels","absoluteDifference"),a=E(e,"predictions","absoluteDifference"),i=null;t!=null&&(i=E(t,"weights","absoluteDifference")),xt(o.shape,a.shape,"Error in absoluteDifference: ");var s=o.sub(a).abs();return He(s,i,n)}}),He=D({computeWeightedLoss_:function(r,e,t){t===void 0&&(t=$t.SUM_BY_NONZERO_WEIGHTS);var n=E(r,"losses","computeWeightedLoss"),o=null;e!=null&&(o=E(e,"weights","computeWeightedLoss"));var a=o==null?n:n.mul(o);if(t===$t.NONE)return a;if(t===$t.SUM)return a.sum();if(t===$t.MEAN){if(o==null)return a.mean();var i=n.size/o.size,s=a.sum().div(o.sum());return i>1?s.div(q(i)):s}if(t===$t.SUM_BY_NONZERO_WEIGHTS){if(o==null)return a.sum().div(q(n.size));var u=o.mul(Tn(n.shape)).notEqual(q(0)).sum().toFloat();return a.sum().div(u)}throw Error("Unknown reduction: "+t)}}),Fv=D({cosineDistance_:function(r,e,t,n,o){o===void 0&&(o=$t.SUM_BY_NONZERO_WEIGHTS);var a=E(r,"labels","cosineDistance"),i=E(e,"predictions","cosineDistance"),s=null;n!=null&&(s=E(n,"weights","cosineDistance")),xt(a.shape,i.shape,"Error in cosineDistance: ");var u=q(1).sub(a.mul(i).sum(t,!0));return He(u,s,o)}}),Nv=D({hingeLoss_:function(r,e,t,n){n===void 0&&(n=$t.SUM_BY_NONZERO_WEIGHTS);var o=E(r,"labels","hingeLoss"),a=E(e,"predictions","hingeLoss"),i=null;t!=null&&(i=E(t,"weights","hingeLoss")),xt(o.shape,a.shape,"Error in hingeLoss: ");var s=q(1);o=q(2).mul(o).sub(s);var u=s.sub(o.mul(a)).relu();return He(u,i,n)}}),Mv=D({huberLoss_:function(r,e,t,n,o){n===void 0&&(n=1),o===void 0&&(o=$t.SUM_BY_NONZERO_WEIGHTS);var a=E(r,"labels","huberLoss"),i=E(e,"predictions","huberLoss"),s=null;t!=null&&(s=E(t,"weights","huberLoss")),xt(a.shape,i.shape,"Error in huberLoss: ");var u=q(n),c=i.sub(a).abs(),l=lu(c,u),h=c.sub(l),f=q(.5).mul(l.square()).add(u.mul(h));return He(f,s,o)}}),Pv=D({logLoss_:function(r,e,t,n,o){n===void 0&&(n=1e-7),o===void 0&&(o=$t.SUM_BY_NONZERO_WEIGHTS);var a=E(r,"labels","logLoss"),i=E(e,"predictions","logLoss"),s=null;t!=null&&(s=E(t,"weights","logLoss")),xt(a.shape,i.shape,"Error in logLoss: ");var u=q(1),c=q(n),l=a.mul(i.add(c).log()).neg().sub(u.sub(a).mul(u.sub(i).add(c).log()));return He(l,s,o)}}),Ov=D({meanSquaredError_:function(r,e,t,n){n===void 0&&(n=$t.SUM_BY_NONZERO_WEIGHTS);var o=E(r,"labels","meanSquaredError"),a=E(e,"predictions","meanSquaredError"),i=null;t!=null&&(i=E(t,"weights","meanSquaredError")),xt(o.shape,a.shape,"Error in meanSquaredError: ");var s=o.squaredDifference(a);return He(s,i,n)}}),Bv=D({sigmoidCrossEntropy_:function(r,e,t,n,o){n===void 0&&(n=0),o===void 0&&(o=$t.SUM_BY_NONZERO_WEIGHTS);var a=E(r,"multiClassLabels","sigmoidCrossEntropy"),i=E(e,"logits","sigmoidCrossEntropy"),s=null;if(t!=null&&(s=E(t,"weights","sigmoidCrossEntropy")),xt(a.shape,i.shape,"Error in sigmoidCrossEntropy: "),n>0){var u=q(n),c=q(1),l=q(.5);a=a.mul(c.sub(u)).add(l.mul(u))}var h=function(f,d){var p=E(f,"labels","sigmoidCrossEntropyWithLogits"),v=E(d,"logits","sigmoidCrossEntropyWithLogits");xt(p.shape,v.shape,"Error in sigmoidCrossEntropyWithLogits: ");var g=v.relu(),m=v.mul(p),y=v.abs().neg().exp().log1p();return g.sub(m).add(y)}(a,i);return He(h,s,o)}}),Lv=D({softmaxCrossEntropy_:function(r,e,t,n,o){n===void 0&&(n=0),o===void 0&&(o=$t.SUM_BY_NONZERO_WEIGHTS);var a=E(r,"onehotLabels","softmaxCrossEntropy"),i=E(e,"logits","softmaxCrossEntropy"),s=null;if(t!=null&&(s=E(t,"weights","softmaxCrossEntropy")),xt(a.shape,i.shape,"Error in softmaxCrossEntropy: "),n>0){var u=q(n),c=q(1),l=q(a.shape[1]);a=a.mul(c.sub(u)).add(u.div(l))}var h=function(f,d,p){if(p===void 0&&(p=-1),p===-1&&(p=d.rank-1),p!==d.rank-1)throw Error("Softmax cross entropy along a non-last dimension is not yet supported. Labels / logits was rank "+d.rank+" and dim was "+p);return zr(function(v,g,m){var y=g.logSumExp([p],!0),b=g.toFloat().sub(y);return m([v,b]),{value:b.mul(v).neg().sum([p]),gradFunc:function(x,w){var C=w[0],k=w[1],R=Zt(x.shape,[p]);return[x.reshape(R).mul(C.toFloat().sub(k.exp())),x.reshape(R).mul(k.exp().sub(C.toFloat()))]}}})(f,d)}(a,i);return He(h,s,o)}}),Wv=Object.freeze({get Reduction(){return $t},absoluteDifference:Tv,computeWeightedLoss:He,cosineDistance:Fv,hingeLoss:Nv,huberLoss:Mv,logLoss:Pv,meanSquaredError:Ov,sigmoidCrossEntropy:Bv,softmaxCrossEntropy:Lv});function Mu(r,e){return e===void 0&&(e=!1),A.tidy(function(){if(r.shape.length!==2)throw new Error("qr2d() requires a 2D Tensor, but got a "+r.shape.length+"D Tensor.");for(var t=r.shape[0],n=r.shape[1],o=os(t),a=r.clone(),i=tn([[1]],[1,1]),s=i.clone(),u=t>=n?n:t,c=function(h){var f,d=a,p=s,v=o;f=A.tidy(function(){var g=a.slice([h,h],[t-h,1]),m=g.norm(),y=a.slice([h,h],[1,1]),b=tn([[-1]]).where(y.greater(0),tn([[1]])),x=y.sub(b.mul(m)),w=g.div(x);s=w.shape[0]===1?i.clone():i.concat(w.slice([1,0],[w.shape[0]-1,w.shape[1]]),0);var C=b.matMul(x).div(m).neg(),k=a.slice([h,0],[t-h,n]),R=C.mul(s);if(h===0)a=k.sub(R.matMul(s.transpose().matMul(k)));else{var I=k.sub(R.matMul(s.transpose().matMul(k)));a=a.slice([0,0],[h,n]).concat(I,0)}var S=o.slice([0,h],[t,o.shape[1]-h]);if(h===0)o=S.sub(S.matMul(s).matMul(R.transpose()));else{var F=S.sub(S.matMul(s).matMul(R.transpose()));o=o.slice([0,0],[t,h]).concat(F,1)}return[s,a,o]}),s=f[0],a=f[1],o=f[2],Qt([d,p,v])},l=0;l<u;++l)c(l);return!e&&t>n&&(o=o.slice([0,0],[t,n]),a=a.slice([0,0],[n,n])),[o,a]})}var Uv=D({bandPart_:function(r,e,t){if(e%1!=0)throw new Error("bandPart(): numLower must be an integer, got "+e+".");if(t%1!=0)throw new Error("bandPart(): numUpper must be an integer, got "+t+".");var n=E(r,"a","bandPart");if(n.rank<2)throw new Error("bandPart(): Rank must be at least 2, got "+n.rank+".");var o=n.shape,a=n.shape.slice(-2),i=a[0],s=a[1];if(!(e<=i))throw new Error("bandPart(): numLower ("+e+") must not be greater than the number of rows ("+i+").");if(!(t<=s))throw new Error("bandPart(): numUpper ("+t+") must not be greater than the number of columns ("+s+").");e<0&&(e=i),t<0&&(t=s);var u=Pr(0,i,1,"int32").reshape([-1,1]),c=Pr(0,s,1,"int32"),l=Bt(u,c),h=Qr(l.lessEqual(q(+e,"int32")),l.greaterEqual(q(-t,"int32"))),f=Ct([i,s],n.dtype);return se(Pt(n.reshape([-1,i,s])).map(function(d){return bn(h,d,f)})).reshape(o)}}),zv=D({gramSchmidt_:function(r){var e;if(Array.isArray(r)){e=!1,_(r!=null&&r.length>0,function(){return"Gram-Schmidt process: input must not be null, undefined, or empty"});for(var t=r[0].shape[0],n=function(u){_(r[u].shape[0]===t,function(){return"Gram-Schmidt: Non-unique lengths found in the input vectors: ("+r[u].shape[0]+" vs. "+t+")"})},o=1;o<r.length;++o)n(o)}else e=!0,r=Xo(r,r.shape[0],0).map(function(u){return ss(u,[0])});_(r.length<=r[0].shape[0],function(){return"Gram-Schmidt: Number of vectors ("+r.length+") exceeds number of dimensions ("+r[0].shape[0]+")."});var a=[],i=r,s=function(u){a.push(A.tidy(function(){var c=i[u];if(u>0)for(var l=0;l<u;++l){var h=Iu(a[l].mulStrict(c)).mul(a[l]);c=c.sub(h)}return c.div(Du(c,"euclidean"))}))};for(o=0;o<r.length;++o)s(o);return e?se(a,0):a}}),Vv=D({qr_:function(r,e){if(e===void 0&&(e=!1),r.rank<2)throw new Error("qr() requires input tensor to have a rank >= 2, but got rank "+r.rank);if(r.rank===2)return Mu(r,e);var t=r.shape.slice(0,r.shape.length-2).reduce(function(i,s){return i*s}),n=Pt(r.reshape([t,r.shape[r.shape.length-2],r.shape[r.shape.length-1]]),0),o=[],a=[];return n.forEach(function(i){var s=Mu(i,e),u=s[0],c=s[1];o.push(u),a.push(c)}),[se(o,0).reshape(r.shape),se(a,0).reshape(r.shape)]}}),Gv=Object.freeze({bandPart:Uv,gramSchmidt:zv,qr:Vv});function oo(r,e,t,n,o,a){n==null&&(n=.5),o==null&&(o=Number.NEGATIVE_INFINITY),a==null&&(a=0);var i=r.shape[0];return t=Math.min(t,i),_(0<=n&&n<=1,function(){return"iouThreshold must be in [0, 1], but was '"+n+"'"}),_(r.rank===2,function(){return"boxes must be a 2D tensor, but was of rank '"+r.rank+"'"}),_(r.shape[1]===4,function(){return"boxes must have 4 columns, but 2nd dimension was "+r.shape[1]}),_(e.rank===1,function(){return"scores must be a 1D tensor"}),_(e.shape[0]===i,function(){return"scores has incompatible shape with boxes. Expected "+i+", but was "+e.shape[0]}),_(0<=a&&a<=1,function(){return"softNmsSigma must be in [0, 1], but was '"+a+"'"}),{maxOutputSize:t,iouThreshold:n,scoreThreshold:o,softNmsSigma:a}}var Hv=D({resizeBilinear_:function(r,e,t){t===void 0&&(t=!1);var n=E(r,"images","resizeBilinear");_(n.rank===3||n.rank===4,function(){return"Error in resizeBilinear: x must be rank 3 or 4, but got rank "+n.rank+"."}),_(e.length===2,function(){return"Error in resizeBilinear: new shape must 2D, but got shape "+e+"."});var o=n,a=!1;n.rank===3&&(a=!0,o=n.as4D(1,n.shape[0],n.shape[1],n.shape[2]));var i=e[0],s=e[1],u=A.runKernelFunc(function(c,l){return l([o]),c.resizeBilinear(o,i,s,t)},{x:o},function(c,l){return{x:function(){return A.runKernelFunc(function(h){return h.resizeBilinearBackprop(c,l[0],t)},{})}}},"ResizeBilinear",{alignCorners:t,newHeight:i,newWidth:s});return a?u.as3D(u.shape[1],u.shape[2],u.shape[3]):u}}),qv=D({resizeNearestNeighbor_:function(r,e,t){t===void 0&&(t=!1);var n=E(r,"images","resizeNearestNeighbor");_(n.rank===3||n.rank===4,function(){return"Error in resizeNearestNeighbor: x must be rank 3 or 4, but got rank "+n.rank+"."}),_(e.length===2,function(){return"Error in resizeNearestNeighbor: new shape must 2D, but got shape "+e+"."}),_(n.dtype==="float32"||n.dtype==="int32",function(){return"`images` must have `int32` or `float32` as dtype"});var o=n,a=!1;n.rank===3&&(a=!0,o=n.as4D(1,n.shape[0],n.shape[1],n.shape[2]));var i=e[0],s=e[1],u=A.runKernelFunc(function(c,l){return l([o]),c.resizeNearestNeighbor(o,i,s,t)},{batchImages:o},function(c,l){return{batchImages:function(){return A.runKernelFunc(function(h){return h.resizeNearestNeighborBackprop(c,l[0],t)},{})}}});return a?u.as3D(u.shape[1],u.shape[2],u.shape[3]):u}}),jv=D({nonMaxSuppression_:function(r,e,t,n,o){n===void 0&&(n=.5),o===void 0&&(o=Number.NEGATIVE_INFINITY);var a=E(r,"boxes","nonMaxSuppression"),i=E(e,"scores","nonMaxSuppression"),s=oo(a,i,t,n,o);t=s.maxOutputSize,n=s.iouThreshold,o=s.scoreThreshold;var u={maxOutputSize:t,iouThreshold:n,scoreThreshold:o};return A.runKernelFunc(function(c){return c.nonMaxSuppression(a,i,t,n,o)},{boxes:a,scores:i},null,"NonMaxSuppressionV3",u)}}),Xv=function(r,e,t,n,o){return n===void 0&&(n=.5),o===void 0&&(o=Number.NEGATIVE_INFINITY),K(this,void 0,void 0,function(){var a,i,s,u,c,l,h;return $(this,function(f){switch(f.label){case 0:return a=E(r,"boxes","nonMaxSuppressionAsync"),i=E(e,"scores","nonMaxSuppressionAsync"),s=oo(a,i,t,n,o),t=s.maxOutputSize,n=s.iouThreshold,o=s.scoreThreshold,[4,Promise.all([a.data(),i.data()])];case 1:return u=f.sent(),c=u[0],l=u[1],h=na(c,l,t,n,o),a!==r&&a.dispose(),i!==e&&i.dispose(),[2,h]}})})},Kv=D({nonMaxSuppressionWithScore_:function(r,e,t,n,o,a){n===void 0&&(n=.5),o===void 0&&(o=Number.NEGATIVE_INFINITY),a===void 0&&(a=0);var i=E(r,"boxes","nonMaxSuppression"),s=E(e,"scores","nonMaxSuppression"),u=oo(i,s,t,n,o,a),c={maxOutputSize:t=u.maxOutputSize,iouThreshold:n=u.iouThreshold,scoreThreshold:o=u.scoreThreshold,softNmsSigma:a=u.softNmsSigma},l=A.runKernel("NonMaxSuppressionV5",{boxes:i,scores:s},c);return{selectedIndices:l[0],selectedScores:l[1]}}}),$v=function(r,e,t,n,o,a){return n===void 0&&(n=.5),o===void 0&&(o=Number.NEGATIVE_INFINITY),a===void 0&&(a=0),K(this,void 0,void 0,function(){var i,s,u,c,l,h,f;return $(this,function(d){switch(d.label){case 0:return i=E(r,"boxes","nonMaxSuppressionAsync"),s=E(e,"scores","nonMaxSuppressionAsync"),u=oo(i,s,t,n,o,a),t=u.maxOutputSize,n=u.iouThreshold,o=u.scoreThreshold,a=u.softNmsSigma,[4,Promise.all([i.data(),s.data()])];case 1:return c=d.sent(),l=c[0],h=c[1],f=ra(l,h,t,n,o,a),i!==r&&i.dispose(),s!==e&&s.dispose(),[2,f]}})})},Yv=D({cropAndResize_:function(r,e,t,n,o,a){var i=E(r,"image","cropAndResize"),s=E(e,"boxes","cropAndResize","float32"),u=E(t,"boxInd","cropAndResize","int32");o=o||"bilinear",a=a||0;var c=s.shape[0];return _(i.rank===4,function(){return"Error in cropAndResize: image must be rank 4,but got rank "+i.rank+"."}),_(s.rank===2&&s.shape[1]===4,function(){return"Error in cropAndResize: boxes must be have size ["+c+",4] but had shape "+s.shape+"."}),_(u.rank===1&&u.shape[0]===c,function(){return"Error in cropAndResize: boxInd must be have size ["+c+"] but had shape "+s.shape+"."}),_(n.length===2,function(){return"Error in cropAndResize: cropSize must be of length 2, but got length "+n.length+"."}),_(n[0]>=1&&n[1]>=1,function(){return"cropSize must be atleast [1,1], but was "+n}),_(o==="bilinear"||o==="nearest",function(){return"method must be bilinear or nearest, but was "+o}),A.runKernelFunc(function(l,h){return l.cropAndResize(i,s,u,n,o,a)},{images:i,boxes:s,boxInd:u},null,"CropAndResize",{method:o,extrapolationValue:a,cropSize:n})}}),Ia=Object.freeze({resizeBilinear:Hv,resizeNearestNeighbor:qv,nonMaxSuppression:jv,nonMaxSuppressionAsync:Xv,nonMaxSuppressionWithScore:Kv,nonMaxSuppressionWithScoreAsync:$v,cropAndResize:Yv}),Sa=function(r,e){return!(r>0)||e==="linear"},Ra=function(r,e,t){if(t==null||t==="linear")return r;if(t==="relu")return r.mul(e.step());throw new Error("Gradient for activation "+t+" has not been implemented yet.")},ka=function(r,e){var t=e,n=Ot(r.shape,e.shape);return n.length>0&&(t=t.sum(n)),t.reshape(r.shape)},Da=function(r,e,t){if(e==="linear")return r;if(e==="relu")return It(r);if(e==="elu")return Su(r);if(e==="relu6")return ku(r);if(e==="prelu")return Ru(r,t);throw new Error("Unknown fused activation "+e+".")},Jv=D({fusedMatMul_:function(r){var e,t=r.a,n=r.b,o=r.transposeA,a=o!==void 0&&o,i=r.transposeB,s=i!==void 0&&i,u=r.bias,c=r.activation,l=c===void 0?"linear":c,h=r.preluActivationWeights;if(Sa(A.state.gradientDepth,l)===!1){var f=eo(t,n,a,s);return u!=null&&(f=ct(f,u)),Da(f,l,h)}var d=E(t,"a","fused matMul"),p=E(n,"b","fused matMul");e=_t(d,p),d=e[0],p=e[1];var v=a?d.shape[d.rank-2]:d.shape[d.rank-1],g=s?p.shape[p.rank-1]:p.shape[p.rank-2],m=a?d.shape[d.rank-1]:d.shape[d.rank-2],y=s?p.shape[p.rank-2]:p.shape[p.rank-1],b=d.shape.slice(0,-2),x=p.shape.slice(0,-2),w=Y(b),C=Y(x);_(d.rank>=2&&p.rank>=2&&d.rank===p.rank,function(){return"Error in fused matMul: inputs must have the same rank of at least 2, got ranks "+d.rank+" and "+p.rank+"."}),_(Wt(b,x),function(){return"Error in fused matMul: outer dimensions ("+b+") and ("+x+") of Tensors with shapes "+d.shape+" and "+p.shape+" must match."}),_(v===g,function(){return"Error in fused matMul: inner shapes ("+v+") and ("+g+") of Tensors with shapes "+d.shape+" and "+p.shape+" and transposeA="+a+" and transposeB="+s+" must match."});var k,R,I=d.shape.slice(0,-2).concat([m,y]),S=a?d.as3D(w,v,m):d.as3D(w,m,v),F=s?p.as3D(C,y,g):p.as3D(C,g,y);u!=null&&lt(I,(k=_t(k=E(u,"bias","fused matMul"),d)[0]).shape),h!=null&&(R=E(h,"prelu weights","fused matMul"));var T={a:S,b:F};u!=null&&(T.bias=k),h!=null&&(T.preluActivationWeights=R);var L=[S,F];return A.runKernelFunc(function(O,B){var V=O.fusedBatchMatMul({a:S,b:F,transposeA:a,transposeB:s,bias:k,activation:l,preluActivationWeights:R});return B([S,F,V]),V},T,function(O,B){var V=B[0],U=B[1],W=B[2],G=Ra(O,W,l),H={};return u!=null&&(H={bias:function(){return ka(k,G)}}),Object.assign(a||s?!a&&s?{a:function(){return G.matMul(U,!1,!1)},b:function(){return G.matMul(V,!0,!1)}}:a&&!s?{a:function(){return U.matMul(G,!1,!0)},b:function(){return V.matMul(G,!1,!1)}}:{a:function(){return U.matMul(G,!0,!0)},b:function(){return G.matMul(V,!0,!0)}}:{a:function(){return G.matMul(U,!1,!0)},b:function(){return V.matMul(G,!0,!1)}},H)},"_FusedMatMul",{transposeA:a,transposeB:s,activation:l},L,[!0]).reshape(I)}}),Qv=D({fusedConv2d_:function(r){var e=r.x,t=r.filter,n=r.strides,o=r.pad,a=r.dataFormat,i=a===void 0?"NHWC":a,s=r.dilations,u=s===void 0?[1,1]:s,c=r.dimRoundingMode,l=r.bias,h=r.activation,f=h===void 0?"linear":h,d=r.preluActivationWeights;if(f=f||"linear",Sa(A.state.gradientDepth,f)===!1){var p=pe(e,t,n,o,i,u,c);return l!=null&&(p=ct(p,l)),Da(p,f,d)}var v=E(e,"x","conv2d"),g=E(t,"filter","conv2d"),m=v,y=!1;v.rank===3&&(y=!0,m=v.as4D(1,v.shape[0],v.shape[1],v.shape[2])),_(m.rank===4,function(){return"Error in fused conv2d: input must be rank 4, but got rank "+m.rank+"."}),_(g.rank===4,function(){return"Error in fused conv2d: filter must be rank 4, but got rank "+g.rank+"."}),c!=null&&_(At(o),function(){return"Error in fused conv2d: pad must be an integer when using, dimRoundingMode "+c+" but got pad "+o+"."}),_(m.shape[3]===g.shape[2],function(){return"Error in conv2d: depth of input ("+m.shape[3]+") must match input depth for filter "+g.shape[2]+"."}),_(ee(n,u),function(){return"Error in conv2D: Either strides or dilations must be 1. Got strides "+n+" and dilations '"+u+"'"}),_(i==="NHWC",function(){return"Error in conv2d: got dataFormat of "+i+" but only NHWC is currently supported."});var b,x,w=mn(m.shape,g.shape,n,u,o,c);l!=null&&(b=_t(b=E(l,"bias","fused conv2d"),v)[0],lt(w.outShape,b.shape)),d!=null&&(x=E(d,"prelu weights","fused conv2d"));var C={x:m,filter:g};l!=null&&(C.bias=b),d!=null&&(C.preluActivationWeights=x);var k=[g,m],R=A.runKernelFunc(function(I,S){var F=I.fusedConv2d({input:m,filter:g,convInfo:w,bias:b,activation:f,preluActivationWeights:x});return S([g,m,F]),F},C,function(I,S){var F=S,T=F[0],L=F[1],O=F[2],B=Ra(I,O,f);_(Mn(u),function(){return"Error in gradient of fused conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '"+u+"'"});var V={};return l!=null&&(V={bias:function(){return ka(b,B)}}),Object.assign({x:function(){return yu(L.shape,B,T,n,o)},filter:function(){return xa(L,B,T.shape,n,o)}},V)},"FusedConv2D",{convInfo:w,activation:f},k,[!0]);return y?R.as3D(R.shape[1],R.shape[2],R.shape[3]):R}}),Zv=D({fusedDepthwiseConv2d_:function(r){var e=r.x,t=r.filter,n=r.strides,o=r.pad,a=r.dataFormat,i=a===void 0?"NHWC":a,s=r.dilations,u=s===void 0?[1,1]:s,c=r.dimRoundingMode,l=r.bias,h=r.activation,f=h===void 0?"linear":h,d=r.preluActivationWeights;if(Sa(A.state.gradientDepth,f)===!1){var p=to(e,t,n,o,i,u,c);return l!=null&&(p=ct(p,l)),Da(p,f,d)}var v=E(e,"x","depthwiseConv2d"),g=E(t,"filter","depthwiseConv2d"),m=v,y=!1;v.rank===3&&(y=!0,m=v.as4D(1,v.shape[0],v.shape[1],v.shape[2])),_(m.rank===4,function(){return"Error in fused depthwiseConv2d: input must be rank 4, but got rank "+m.rank+"."}),_(g.rank===4,function(){return"Error in fused depthwiseConv2d: filter must be rank 4, but got rank "+g.rank+"."}),_(m.shape[3]===g.shape[2],function(){return"Error in fused depthwiseConv2d: number of input channels ("+m.shape[3]+") must match the inChannels dimension in filter "+g.shape[2]+"."}),u==null&&(u=[1,1]),_(ee(n,u),function(){return"Error in fused depthwiseConv2d: Either strides or dilations must be 1. Got strides "+n+" and dilations '"+u+"'"}),c!=null&&_(At(o),function(){return"Error in fused depthwiseConv2d: pad must be an integer when using dimRoundingMode "+c+" but got pad "+o+"."});var b,x,w=mn(m.shape,g.shape,n,u,o,c,!0);l!=null&&(b=_t(b=E(l,"bias","fused conv2d"),v)[0],lt(w.outShape,b.shape)),d!=null&&(x=E(d,"prelu weights","fused depthwiseConv2d"));var C={x:m,filter:g};l!=null&&(C.bias=b),d!=null&&(C.preluActivationWeights=x);var k=[g,m],R=A.runKernelFunc(function(I,S){var F=I.fusedDepthwiseConv2D({input:m,filter:g,convInfo:w,bias:b,activation:f,preluActivationWeights:x});return S([g,m,F]),F},C,function(I,S){_(Mn(u),function(){return"Error in gradient of fused depthwiseConv2d: dilation rates greater than 1 are not yet supported. Got dilations '"+u+"'"});var F=S[0],T=S[1],L=S[2],O=Ra(I,L,f),B={};return l!=null&&(B={bias:function(){return ka(b,O)}}),Object.assign({x:function(){return xu(T.shape,O,F,w)},filter:function(){return bu(T,O,F.shape,w)}},B)},"FusedDepthwiseConv2D",{convInfo:w,activation:f},k,[!0]);return y?R.as3D(R.shape[1],R.shape[2],R.shape[3]):R}}),tg=Object.freeze({matMul:Jv,conv2d:Qv,depthwiseConv2d:Zv}),eg=Object.freeze({image:Ia,linalg:Gv,losses:Wv,spectral:_v,fused:tg,signal:Dv,square:Pd,squaredDifference:tu,conv1d:Hp,conv2d:pe,conv3d:qp,depthwiseConv2d:to,separableConv2d:ba,conv2dTranspose:jp,conv3dTranspose:Xp,op:D,batchNormalization2d:hp,batchNormalization3d:fp,batchNormalization4d:dp,batchNormalization:pp,batchNorm:iu,batchNorm2d:vp,batchNorm3d:gp,batchNorm4d:mp,booleanMaskAsync:Gp,complex:Gt,real:fe,imag:De,concat:Mt,concat1d:Zl,concat2d:th,concat3d:eh,concat4d:nh,split:Xo,matMul:eo,dot:Kp,outerProduct:$p,reverse:dr,reverse1d:Yp,reverse2d:Jp,reverse3d:Qp,reverse4d:Zp,maxPool:Ut,avgPool:pr,pool:tv,maxPool3d:ev,avgPool3d:nv,slice:Te,slice1d:rv,slice2d:ov,slice3d:Eu,slice4d:av,abs:Od,acos:Bd,acosh:Ld,asin:Wd,asinh:Ud,atan:zd,atanh:Vd,ceil:Gd,clipByValue:pa,cos:Hd,cosh:qd,erf:jd,exp:va,expm1:Xd,floor:Kd,log:$d,log1p:Yd,logSigmoid:Jd,neg:$r,reciprocal:Qd,round:Zd,rsqrt:eu,sigmoid:nu,sign:tp,isNaN:ep,isInf:np,isFinite:rp,sin:op,sinh:ap,softplus:ip,sqrt:sp,step:up,tan:cp,tanh:lp,all:iv,any:sv,argMax:uv,argMin:cv,logSumExp:lv,max:no,mean:hv,min:fv,moments:dv,sum:Iu,prod:pv,equal:hu,equalStrict:Np,greater:Mp,greaterEqual:fu,greaterEqualStrict:Pp,greaterStrict:Op,less:Bp,lessEqual:Lp,lessEqualStrict:Wp,lessStrict:Up,notEqual:zp,notEqualStrict:Vp,add:ct,addN:bp,addStrict:wp,atan2:Cp,div:xe,divNoNan:Ep,divStrict:_p,floorDiv:cu,maximum:ga,maximumStrict:Ip,minimum:lu,minimumStrict:Sp,mod:Rp,modStrict:kp,mul:Kt,mulStrict:Dp,pow:Zr,powStrict:Ap,squaredDifferenceStrict:Tp,sub:Bt,subStrict:Fp,elu:Su,leakyRelu:vv,prelu:Ru,relu:It,relu6:ku,selu:gv,logicalAnd:Qr,logicalNot:yp,logicalOr:su,logicalXor:xp,where:bn,whereAsync:uu,buffer:ot,print:hh,batchToSpaceND:rs,broadcastTo:fh,cast:dh,clone:ph,cumsum:vh,depthToSpace:gh,expandDims:de,eye:os,multinomial:mh,oneHot:$o,pad:gn,pad1d:yh,pad2d:xh,pad3d:bh,pad4d:wh,rand:Ch,randomNormal:Eh,randomGamma:_h,randomUniform:as,reshape:me,spaceToBatchND:is,squeeze:ss,stack:se,tile:Fn,truncatedNormal:Ih,unstack:Pt,setdiff1dAsync:Sh,fill:Ae,linspace:Ql,ones:Tn,range:Pr,scalar:q,tensor:Ht,tensor1d:Ft,tensor2d:tn,tensor3d:jo,tensor4d:te,tensor5d:$l,tensor6d:Yl,variable:Jl,zeros:Ct,onesLike:ns,zerosLike:pt,transpose:nn,softmax:Ve,logSoftmax:Nh,localResponseNormalization:mv,norm:Du,gather:ma,unsortedSegmentSum:vu,basicLSTMCell:yv,multiRNNCell:xv,movingAverage:bv,stridedSlice:wv,topk:Cv,scatterND:Ev,fft:wa,ifft:ro,rfft:Ca,irfft:Au,sparseToDense:Iv,gatherND:Sv,diag:Rv,dropout:kv,hannWindow:Ea,hammingWindow:Fu,frame:_a,stft:Nu,inTopKAsync:Av});function z(r,e){Array.isArray(r)||(r=[r]),r.forEach(function(t){t!=null&&_(t.dtype!=="complex64",function(){return e+" does not support complex64 tensors."})})}function Aa(r,e,t,n){if(t==="linear")return r.linear(e);if(t==="relu")return r.relu(e);if(t==="elu")return r.elu(e);if(t==="relu6")return r.relu6(e);if(t==="prelu")return r.prelu(e,n);throw new Error("Activation "+t+" has not been implemented for the CPU backend.")}var ng=function(r){function e(){var t=r.call(this)||this;return t.blockSize=48,t.firstUse=!0,t.data=new vs(t,A),t}return qt(e,r),e.prototype.write=function(t,n,o){this.firstUse&&(this.firstUse=!1,P().get("IS_NODE")&&Nr(`
============================
Hi there 👋. Looks like you are running TensorFlow.js in Node.js. To speed things up dramatically, install our node backend, which binds to TensorFlow C++, by running npm i @tensorflow/tfjs-node, or npm i @tensorflow/tfjs-node-gpu if you have CUDA. Then call require('@tensorflow/tfjs-node'); (-gpu suffix for CUDA) at the start of your program. Visit https://github.com/tensorflow/tfjs-node for more details.
============================`));var a={};return this.data.set(a,{values:t,dtype:o}),a},e.prototype.move=function(t,n,o,a){this.data.set(t,{values:n,dtype:a})},e.prototype.numDataIds=function(){return this.data.numDataIds()},e.prototype.read=function(t){return K(this,void 0,void 0,function(){return $(this,function(n){return[2,this.readSync(t)]})})},e.prototype.readSync=function(t){var n=this.data.get(t),o=n.dtype,a=n.complexTensors;return o==="complex64"?ea(this.readSync(a.real.dataId),this.readSync(a.imag.dataId)):this.data.get(t).values},e.prototype.bufferSync=function(t){var n=this.readSync(t.dataId),o=n;if(t.dtype==="string")try{o=n.map(function(a){return Ir(a)})}catch{throw new Error("Failed to decode encoded string bytes into utf-8")}return ot(t.shape,t.dtype,o)},e.prototype.makeOutput=function(t,n,o){var a=this.write(t,n,o);return A.makeTensorFromDataId(a,n,o,this)},e.prototype.disposeData=function(t){if(this.data.has(t)){var n=this.data.get(t).complexTensors;n!=null&&(n.real.dispose(),n.imag.dispose()),this.data.delete(t)}},e.prototype.time=function(t){return K(this,void 0,void 0,function(){var n;return $(this,function(o){return n=_e(),t(),[2,{kernelMs:_e()-n}]})})},e.prototype.memory=function(){return{unreliable:!0,reasons:["The reported memory is an upper bound. Due to automatic garbage collection, the true allocated memory may be less."]}},e.prototype.complex=function(t,n){var o=this.makeOutput(null,t.shape,"complex64");return this.data.get(o.dataId).complexTensors={real:A.keep(t.clone()),imag:A.keep(n.clone())},o},e.prototype.real=function(t){return this.data.get(t.dataId).complexTensors.real.clone()},e.prototype.imag=function(t){return this.data.get(t.dataId).complexTensors.imag.clone()},e.prototype.slice=function(t,n,o){if(z(t,"slice"),ds(t.shape,n,o)){var a=ps(n,t.strides),i=Y(o);return Ht(this.readSync(t.dataId).subarray(a,a+i),o,t.dtype)}for(var s=ot(o,t.dtype),u=this.bufferSync(t),c=0;c<s.size;++c){var l=s.indexToLoc(c).map(function(h,f){return h+n[f]});s.values[c]=u.get.apply(u,l)}return s.toTensor()},e.prototype.stridedSlice=function(t,n,o,a){z(t,"stridedSlice");var i=Jo(n,o,a);if(i.some(function(d){return d===0}))return Ht([],i);for(var s=ot(i,t.dtype),u=this.bufferSync(t),c=0;c<s.size;c++){for(var l=s.indexToLoc(c),h=new Array(l.length),f=0;f<h.length;f++)h[f]=l[f]*a[f]+n[f];s.set.apply(s,[u.get.apply(u,h)].concat(l))}return s.toTensor()},e.prototype.diag=function(t){for(var n=this.readSync(t.dataId),o=ot([t.size,t.size],t.dtype),a=o.values,i=0;i<n.length;i++)a[i*t.size+i]=n[i];return o.toTensor()},e.prototype.unstack=function(t,n){for(var o=t.shape[n],a=new Array(t.rank-1),i=0,s=0;s<t.rank;s++)s!==n&&(a[i++]=t.shape[s]);var u=new Array(t.rank).fill(0),c=t.shape.slice();c[n]=1;var l=new Array(o);for(s=0;s<l.length;s++)u[n]=s,l[s]=this.slice(t,u,c).reshape(a);return l},e.prototype.reverse=function(t,n){z(t,"reverse");for(var o=ot(t.shape,t.dtype),a=this.bufferSync(t),i=function(u){var c=o.indexToLoc(u),l=c.slice();n.forEach(function(h){return l[h]=t.shape[h]-1-l[h]}),o.set.apply(o,[a.get.apply(a,l)].concat(c))},s=0;s<o.size;s++)i(s);return o.toTensor()},e.prototype.concat=function(t,n){var o=this;if(t[0].dtype==="complex64"){var a=t.map(function(d){return fe(d)}),i=t.map(function(d){return De(d)});return Gt(this.concat(a,n),this.concat(i,n))}var s=t.map(function(d){var p=Y(d.shape.slice(n));return d.as2D(-1,p)}),u=An(s.map(function(d){return d.shape}),1),c=ot(u,t[0].dtype).values;if(s[0].shape[0]===1){var l=0;s.forEach(function(d){c.set(o.readSync(d.dataId),l),l+=d.size})}else{var h=0;s.forEach(function(d){for(var p=o.readSync(d.dataId),v=0,g=0;g<d.shape[0];++g)for(var m=g*u[1]+h,y=0;y<d.shape[1];++y)c[m+y]=p[v++];h+=d.shape[1]})}var f=An(t.map(function(d){return d.shape}),n);return Ht(c,f,t[0].dtype)},e.prototype.neg=function(t){return z(t,"neg"),this.multiply(q(-1),t)},e.prototype.add=function(t,n){return t.dtype==="complex64"||n.dtype==="complex64"?this.broadcastedBinaryComplexOp(t.cast("complex64"),n.cast("complex64"),function(o,a,i,s){return{real:o+i,imag:a+s}}):this.broadcastedBinaryOp(t,n,Vt(t.dtype,n.dtype),function(o,a){return o+a})},e.prototype.addN=function(t){var n=this;z(t,"addN");for(var o=t.map(function(l){return n.readSync(l.dataId)}),a=ot(t[0].shape,t[0].dtype),i=a.values,s=0;s<t.length;s++)for(var u=o[s],c=0;c<i.length;c++)i[c]+=u[c];return a.toTensor()},e.prototype.softmax=function(t,n){var o=Nt([n],t.shape),a=this.max(t,o),i=Zt(a.shape,o),s=this.subtract(t,a.reshape(i)),u=this.exp(s),c=this.sum(u,o).reshape(i);return this.realDivide(u,c)},e.prototype.subtract=function(t,n){return t.dtype==="complex64"||n.dtype==="complex64"?this.broadcastedBinaryComplexOp(t.cast("complex64"),n.cast("complex64"),function(o,a,i,s){return{real:o-i,imag:a-s}}):this.broadcastedBinaryOp(t,n,Vt(t.dtype,n.dtype),function(o,a){return o-a})},e.prototype.pow=function(t,n){return z([t,n],"pow"),this.broadcastedBinaryOp(t,n,t.dtype,function(o,a){return Math.pow(o,a)})},e.prototype.batchMatMul=function(t,n,o,a){z([t,n],"matMul");for(var i=o?t.shape[1]:t.shape[2],s=o?t.shape[2]:t.shape[1],u=a?n.shape[1]:n.shape[2],c=t.shape[0],l=this.readSync(t.dataId),h=this.readSync(n.dataId),f=o?[t.strides[0],1,t.strides[1]]:[t.strides[0],t.strides[1],1],d=f[0],p=f[1],v=f[2],g=a?[1,n.strides[1],n.strides[0]]:[n.strides[1],1,n.strides[0]],m=g[0],y=g[1],b=g[2],x=s*u,w=ot([c,s,u],t.dtype),C=w.values,k=this.blockSize,R=0;R<c;R++)for(var I=0;I<s;I+=k)for(var S=0;S<u;S+=k)for(var F=0;F<i;F+=k)for(var T=Math.min(I+k,s),L=Math.min(S+k,u),O=Math.min(F+k,i),B=I;B<T;B++)for(var V=S;V<L;V++){for(var U=0,W=F;W<O;W++)U+=l[R*d+B*p+W*v]*h[W*m+V*y+R*b];C[R*x+(B*u+V)]+=U}return w.toTensor()},e.prototype.fusedBatchMatMul=function(t){var n=t.a,o=t.b,a=t.transposeA,i=t.transposeB,s=t.bias,u=t.activation,c=t.preluActivationWeights,l=this.batchMatMul(n,o,a,i);return s&&(l=this.add(l,s)),u&&(l=Aa(this,l,u,c)),l},e.prototype.multiply=function(t,n){return t.dtype==="complex64"||n.dtype==="complex64"?this.broadcastedBinaryComplexOp(t.cast("complex64"),n.cast("complex64"),function(o,a,i,s){return{real:o*i-a*s,imag:o*s+a*i}}):this.broadcastedBinaryOp(t,n,Vt(t.dtype,n.dtype),function(o,a){return o*a})},e.prototype.realDivide=function(t,n){return z([t,n],"realDivide"),this.broadcastedBinaryOp(t,n,"float32",function(o,a){return o/a})},e.prototype.floorDiv=function(t,n){return z([t,n],"floorDiv"),this.broadcastedBinaryOp(t,n,"int32",function(o,a){return Math.floor(o/a)})},e.prototype.sum=function(t,n){z(t,"sum"),ie("sum",n,t.rank);for(var o=jt(t.shape,n),a=o[0],i=o[1],s=Ct(a,Vt(t.dtype,"int32")),u=Y(i),c=this.readSync(s.dataId),l=this.readSync(t.dataId),h=0;h<c.length;++h){for(var f=h*u,d=0,p=0;p<u;++p)d+=l[f+p];c[h]=d}return s},e.prototype.prod=function(t,n){z(t,"sum");for(var o=jt(t.shape,n),a=o[0],i=o[1],s=Ct(a,Vt(t.dtype,"int32")),u=Y(i),c=this.readSync(s.dataId),l=this.readSync(t.dataId),h=0;h<c.length;++h){for(var f=h*u,d=1,p=0;p<u;++p)d*=l[f+p];c[h]=d}return s},e.prototype.unsortedSegmentSum=function(t,n,o){z(t,"unsortedSegmentSum");for(var a=[],i=t.rank-n.rank,s=0;s<i;++s)n=n.expandDims(s+1);for(s=0;s<o;++s){var u=q(s,"int32"),c=hu(u,n).asType("float32").mul(t).sum(0);a.push(c)}return se(a)},e.prototype.argMin=function(t,n){z(t,"argMin");var o=[n];ie("argMin",o,t.rank);for(var a=jt(t.shape,o),i=a[0],s=a[1],u=Ct(i,"int32"),c=Y(s),l=this.readSync(u.dataId),h=this.readSync(t.dataId),f=0;f<l.length;++f){for(var d=f*c,p=h[d],v=0,g=0;g<c;++g){var m=h[d+g];m<p&&(p=m,v=g)}l[f]=v}return u},e.prototype.argMax=function(t,n){z(t,"argMax");var o=[n];ie("argMax",o,t.rank);for(var a=jt(t.shape,o),i=a[0],s=a[1],u=Ct(i,"int32"),c=Y(s),l=this.readSync(u.dataId),h=this.readSync(t.dataId),f=0;f<l.length;++f){for(var d=f*c,p=h[d],v=0,g=0;g<c;++g){var m=h[d+g];m>p&&(p=m,v=g)}l[f]=v}return u},e.prototype.cumsum=function(t,n,o,a){if(z(t,"cumsum"),n!==t.rank-1)throw new Error("backend.cumsum in CPU expects an inner-most axis="+(t.rank-1)+" but got axis="+n);for(var i=Vt(t.dtype,"int32"),s=Ct(t.shape,i),u=this.readSync(s.dataId),c=this.readSync(t.dataId),l=t.shape[t.rank-1],h=a?function(g,m){return g+l-m-1}:function(g,m){return g+m},f=0;f<c.length;f+=l)for(var d=0;d<l;d++){var p=h(f,d);if(d===0)u[p]=o?0:c[p];else{var v=h(f,d-1);u[p]=o?c[v]+u[v]:c[p]+u[v]}}return s},e.prototype.equal=function(t,n){return z([t,n],"equal"),this.broadcastedBinaryOp(t,n,"bool",function(o,a){return o===a?1:0})},e.prototype.notEqual=function(t,n){return z([t,n],"notEqual"),this.broadcastedBinaryOp(t,n,"bool",function(o,a){return o!==a?1:0})},e.prototype.less=function(t,n){return z([t,n],"less"),this.broadcastedBinaryOp(t,n,"bool",function(o,a){return o<a?1:0})},e.prototype.lessEqual=function(t,n){return z([t,n],"lessEqual"),this.broadcastedBinaryOp(t,n,"bool",function(o,a){return o<=a?1:0})},e.prototype.greater=function(t,n){return z([t,n],"greater"),this.broadcastedBinaryOp(t,n,"bool",function(o,a){return o>a?1:0})},e.prototype.greaterEqual=function(t,n){return z([t,n],"greaterEqual"),this.broadcastedBinaryOp(t,n,"bool",function(o,a){return o>=a?1:0})},e.prototype.logicalNot=function(t){z(t,"logicalNot");for(var n=this.readSync(t.dataId),o=new Uint8Array(n.length),a=0;a<n.length;++a)o[a]=n[a]?0:1;return this.makeOutput(o,t.shape,"bool")},e.prototype.logicalAnd=function(t,n){return z([t,n],"logicalAnd"),this.broadcastedBinaryOp(t,n,"bool",function(o,a){return o&&a})},e.prototype.logicalOr=function(t,n){return z([t,n],"logicalOr"),this.broadcastedBinaryOp(t,n,"bool",function(o,a){return o||a})},e.prototype.select=function(t,n,o){z([t,n,o],"select");for(var a=this.readSync(t.dataId),i=this.readSync(n.dataId),s=this.readSync(o.dataId),u=Ct(n.shape,Vt(n.dtype,o.dtype)),c=this.readSync(u.dataId),l=0,h=t.rank===0||t.rank>1||n.rank===1?1:Y(n.shape.slice(1)),f=0;f<a.length;f++)for(var d=0;d<h;d++)a[f]===1?c[l++]=i[f]:c[l++]=s[f];return u},e.prototype.where=function(t){z([t],"where");var n=this.readSync(t.dataId);return oa(t.shape,n)},e.prototype.topk=function(t,n,o){return z(t,"topk"),Is(this.readSync(t.dataId),t.shape,t.dtype,n)},e.prototype.min=function(t,n){z(t,"min"),ie("min",n,t.rank);for(var o=jt(t.shape,n),a=o[0],i=o[1],s=Ct(a,t.dtype),u=Y(i),c=this.readSync(s.dataId),l=this.readSync(t.dataId),h=0;h<c.length;++h){for(var f=h*u,d=l[f],p=0;p<u;++p){var v=l[f+p];v<d&&(d=v)}c[h]=d}return s},e.prototype.minimum=function(t,n){return z([t,n],"minimum"),this.broadcastedBinaryOp(t,n,t.dtype,function(o,a){return Math.min(o,a)})},e.prototype.mod=function(t,n){return z([t,n],"mod"),this.broadcastedBinaryOp(t,n,t.dtype,function(o,a){var i=o%a;return o<0&&a<0||o>=0&&a>=0?i:(i+a)%a})},e.prototype.max=function(t,n){z(t,"max"),ie("max",n,t.rank);for(var o=jt(t.shape,n),a=o[0],i=o[1],s=Ct(a,t.dtype),u=Y(i),c=this.readSync(s.dataId),l=this.readSync(t.dataId),h=0;h<c.length;++h){for(var f=h*u,d=l[f],p=0;p<u;++p){var v=l[f+p];v>d&&(d=v)}c[h]=d}return s},e.prototype.maximum=function(t,n){return z([t,n],"maximum"),this.broadcastedBinaryOp(t,n,t.dtype,function(o,a){return Math.max(o,a)})},e.prototype.all=function(t,n){z(t,"all"),ie("all",n,t.rank);for(var o=jt(t.shape,n),a=o[0],i=o[1],s=Ct(a,t.dtype),u=Y(i),c=this.readSync(s.dataId),l=this.readSync(t.dataId),h=0;h<c.length;++h){for(var f=h*u,d=l[f],p=0;p<u;++p){var v=l[f+p];d=d&&v}c[h]=d}return s},e.prototype.any=function(t,n){z(t,"any"),ie("any",n,t.rank);for(var o=jt(t.shape,n),a=o[0],i=o[1],s=Ct(a,t.dtype),u=Y(i),c=this.readSync(s.dataId),l=this.readSync(t.dataId),h=0;h<c.length;++h){for(var f=h*u,d=l[f],p=0;p<u;++p){var v=l[f+p];d=d||v}c[h]=d}return s},e.prototype.squaredDifference=function(t,n){return z([t,n],"squaredDifference"),this.broadcastedBinaryOp(t,n,t.dtype,function(o,a){var i=o-a;return i*i})},e.prototype.ceil=function(t){z(t,"ceil");for(var n=this.readSync(t.dataId),o=new Float32Array(n.length),a=0;a<n.length;++a)o[a]=Math.ceil(n[a]);return this.makeOutput(o,t.shape,"float32")},e.prototype.floor=function(t){z(t,"floor");for(var n=this.readSync(t.dataId),o=new Float32Array(n.length),a=0;a<n.length;++a)o[a]=Math.floor(n[a]);return this.makeOutput(o,t.shape,"float32")},e.prototype.sign=function(t){z(t,"x");for(var n=this.readSync(t.dataId),o=new Float32Array(n.length),a=0;a<n.length;++a)n[a]<0?o[a]=-1:n[a]>0?o[a]=1:o[a]=0;return this.makeOutput(o,t.shape,"float32")},e.prototype.isNaN=function(t){z(t,"x");for(var n=this.readSync(t.dataId),o=new Uint8Array(n.length),a=0;a<n.length;++a)Number.isNaN(n[a])&&(o[a]=1);return this.makeOutput(o,t.shape,"bool")},e.prototype.isInf=function(t){z(t,"x");for(var n=this.readSync(t.dataId),o=new Uint8Array(n.length),a=0;a<n.length;++a)Math.abs(n[a])===1/0&&(o[a]=1);return this.makeOutput(o,t.shape,"bool")},e.prototype.isFinite=function(t){z(t,"x");for(var n=this.readSync(t.dataId),o=new Uint8Array(n.length),a=0;a<n.length;++a)Number.isFinite(n[a])&&(o[a]=1);return this.makeOutput(o,t.shape,"bool")},e.prototype.round=function(t){z(t,"round");for(var n=this.readSync(t.dataId),o=new Float32Array(n.length),a=0;a<n.length;++a){var i=Math.floor(n[a]);n[a]-i<.5?o[a]=Math.floor(n[a]):n[a]-i>.5?o[a]=Math.ceil(n[a]):o[a]=i%2==0?i:i+1}return this.makeOutput(o,t.shape,"float32")},e.prototype.exp=function(t){z(t,"exp");for(var n=this.readSync(t.dataId),o=new Float32Array(n.length),a=0;a<n.length;++a)o[a]=Math.exp(n[a]);return this.makeOutput(o,t.shape,"float32")},e.prototype.expm1=function(t){z(t,"expm1");for(var n=this.readSync(t.dataId),o=new Float32Array(n.length),a=0;a<n.length;++a)o[a]=Math.expm1(n[a]);return this.makeOutput(o,t.shape,"float32")},e.prototype.log=function(t){z(t,"log");for(var n=this.readSync(t.dataId),o=new Float32Array(n.length),a=0;a<n.length;++a){var i=n[a];o[a]=Math.log(i)}return this.makeOutput(o,t.shape,"float32")},e.prototype.log1p=function(t){z(t,"log1p");for(var n=this.readSync(t.dataId),o=new Float32Array(n.length),a=0;a<n.length;++a){var i=n[a];o[a]=Math.log1p(i)}return this.makeOutput(o,t.shape,"float32")},e.prototype.sqrt=function(t){z(t,"sqrt");for(var n=this.readSync(t.dataId),o=new Float32Array(n.length),a=0;a<n.length;++a){var i=n[a];o[a]=Math.sqrt(i)}return this.makeOutput(o,t.shape,"float32")},e.prototype.rsqrt=function(t){z(t,"rsqrt");for(var n=this.readSync(t.dataId),o=new Float32Array(n.length),a=0;a<n.length;++a){var i=n[a];o[a]=1/Math.sqrt(i)}return this.makeOutput(o,t.shape,"float32")},e.prototype.reciprocal=function(t){z(t,"reciprocal");for(var n=this.readSync(t.dataId),o=new Float32Array(n.length),a=0;a<n.length;++a)o[a]=1/n[a];return this.makeOutput(o,t.shape,"float32")},e.prototype.linear=function(t){return t},e.prototype.relu=function(t){z(t,"relu");for(var n=Ct(t.shape,t.dtype),o=this.readSync(n.dataId),a=this.readSync(t.dataId),i=0;i<a.length;++i)o[i]=Math.max(0,a[i]);return n},e.prototype.relu6=function(t){z(t,"relu");for(var n=Ct(t.shape,t.dtype),o=this.readSync(n.dataId),a=this.readSync(t.dataId),i=0;i<a.length;++i)o[i]=Math.min(Math.max(0,a[i]),6);return n},e.prototype.prelu=function(t,n){return z([t,n],"prelu"),this.broadcastedBinaryOp(t,n,t.dtype,function(o,a){return o<0?a*o:o})},e.prototype.elu=function(t){z(t,"elu");for(var n=new Float32Array(t.size),o=this.readSync(t.dataId),a=0;a<o.length;++a){var i=o[a];n[a]=i>=0?i:Math.exp(i)-1}return this.makeOutput(n,t.shape,"float32")},e.prototype.eluDer=function(t,n){z([t,n],"eluDer");for(var o=new Float32Array(n.size),a=this.readSync(n.dataId),i=this.readSync(t.dataId),s=0;s<a.length;++s){var u=a[s];o[s]=u>=1?i[s]:i[s]*(u+1)}return this.makeOutput(o,n.shape,"float32")},e.prototype.selu=function(t){z(t,"selu");for(var n=fa,o=da,a=new Float32Array(t.size),i=this.readSync(t.dataId),s=0;s<i.length;++s){var u=i[s];a[s]=u>=0?o*u:n*(Math.exp(u)-1)}return this.makeOutput(a,t.shape,"float32")},e.prototype.clip=function(t,n,o){z(t,"clip");for(var a=new Float32Array(t.size),i=this.readSync(t.dataId),s=0;s<i.length;++s){var u=i[s];a[s]=u>o?o:u<n?n:u}return this.makeOutput(a,t.shape,"float32")},e.prototype.abs=function(t){for(var n=new Float32Array(t.size),o=this.readSync(t.dataId),a=0;a<o.length;++a)n[a]=Math.abs(o[a]);return this.makeOutput(n,t.shape,"float32")},e.prototype.complexAbs=function(t){for(var n=new Float32Array(t.size),o=this.readSync(t.dataId),a=0;a<t.size;++a){var i=o[2*a],s=o[2*a+1];n[a]=Math.hypot(i,s)}return this.makeOutput(n,t.shape,"float32")},e.prototype.int=function(t){z(t,"int");for(var n=new Int32Array(t.size),o=this.readSync(t.dataId),a=0;a<o.length;++a)n[a]=o[a];return this.makeOutput(n,t.shape,"int32")},e.prototype.sigmoid=function(t){z(t,"sigmoid");for(var n=new Float32Array(t.size),o=this.readSync(t.dataId),a=0;a<o.length;++a)n[a]=1/(1+Math.exp(-o[a]));return this.makeOutput(n,t.shape,"float32")},e.prototype.softplus=function(t){z(t,"softplus");for(var n=Math.log(11920928955078125e-23)+2,o=new Float32Array(t.size),a=this.readSync(t.dataId),i=0;i<a.length;++i){var s=a[i]>-n,u=a[i]<n,c=Math.exp(a[i]),l=void 0;l=u?c:s?a[i]:Math.log(1+c),o[i]=l}return this.makeOutput(o,t.shape,"float32")},e.prototype.sin=function(t){z(t,"sin");for(var n=new Float32Array(t.size),o=this.readSync(t.dataId),a=0;a<o.length;++a)n[a]=Math.sin(o[a]);return this.makeOutput(n,t.shape,"float32")},e.prototype.cos=function(t){z(t,"cos");for(var n=new Float32Array(t.size),o=this.readSync(t.dataId),a=0;a<o.length;++a)n[a]=Math.cos(o[a]);return this.makeOutput(n,t.shape,"float32")},e.prototype.tan=function(t){z(t,"tan");for(var n=new Float32Array(t.size),o=this.readSync(t.dataId),a=0;a<o.length;++a)n[a]=Math.tan(o[a]);return this.makeOutput(n,t.shape,"float32")},e.prototype.asin=function(t){z(t,"asin");for(var n=new Float32Array(t.size),o=this.readSync(t.dataId),a=0;a<o.length;++a)n[a]=Math.asin(o[a]);return this.makeOutput(n,t.shape,"float32")},e.prototype.acos=function(t){z(t,"acos");for(var n=new Float32Array(t.size),o=this.readSync(t.dataId),a=0;a<o.length;++a)n[a]=Math.acos(o[a]);return this.makeOutput(n,t.shape,"float32")},e.prototype.atan=function(t){z(t,"atan");for(var n=new Float32Array(t.size),o=this.readSync(t.dataId),a=0;a<o.length;++a)n[a]=Math.atan(o[a]);return this.makeOutput(n,t.shape,"float32")},e.prototype.atan2=function(t,n){return z([t,n],"atan2"),this.broadcastedBinaryOp(t,n,t.dtype,function(o,a){return Math.atan2(o,a)})},e.prototype.sinh=function(t){z(t,"sinh");for(var n=new Float32Array(t.size),o=this.readSync(t.dataId),a=0;a<o.length;++a)n[a]=Math.sinh(o[a]);return this.makeOutput(n,t.shape,"float32")},e.prototype.cosh=function(t){z(t,"cosh");for(var n=new Float32Array(t.size),o=this.readSync(t.dataId),a=0;a<o.length;++a)n[a]=Math.cosh(o[a]);return this.makeOutput(n,t.shape,"float32")},e.prototype.tanh=function(t){z(t,"tanh");for(var n=new Float32Array(t.size),o=this.readSync(t.dataId),a=0;a<o.length;++a)n[a]=nl(o[a]);return this.makeOutput(n,t.shape,"float32")},e.prototype.asinh=function(t){z(t,"asinh");for(var n=new Float32Array(t.size),o=this.readSync(t.dataId),a=0;a<o.length;++a)n[a]=Math.asinh(o[a]);return this.makeOutput(n,t.shape,"float32")},e.prototype.acosh=function(t){z(t,"acosh");for(var n=new Float32Array(t.size),o=this.readSync(t.dataId),a=0;a<o.length;++a)n[a]=Math.acosh(o[a]);return this.makeOutput(n,t.shape,"float32")},e.prototype.atanh=function(t){z(t,"atanh");for(var n=new Float32Array(t.size),o=this.readSync(t.dataId),a=0;a<o.length;++a)n[a]=Math.atanh(o[a]);return this.makeOutput(n,t.shape,"float32")},e.prototype.erf=function(t){z(t,"erf");for(var n=new Float32Array(t.size),o=this.readSync(t.dataId),a=0;a<o.length;++a){var i=Math.sign(o[a]),s=Math.abs(o[a]),u=1/(1+.3275911*s);n[a]=i*(1-((((1.061405429*u-1.453152027)*u+1.421413741)*u-.284496736)*u+.254829592)*u*Math.exp(-s*s))}return this.makeOutput(n,t.shape,"float32")},e.prototype.step=function(t,n){n===void 0&&(n=0),z(t,"step");for(var o=new Float32Array(t.size),a=this.readSync(t.dataId),i=0;i<a.length;++i){var s=a[i];isNaN(s)?o[i]=NaN:o[i]=s>0?1:n}return this.makeOutput(o,t.shape,"float32")},e.prototype.fusedConv2d=function(t){var n=t.input,o=t.filter,a=t.convInfo,i=t.bias,s=t.activation,u=t.preluActivationWeights,c=this.conv2d(n,o,a);return i&&(c=this.add(c,i)),s&&(c=Aa(this,c,s,u)),c},e.prototype.conv2d=function(t,n,o){z([t,n],"conv2d");for(var a=o.filterHeight,i=o.filterWidth,s=o.dilationHeight,u=o.dilationWidth,c=o.padInfo.left,l=o.padInfo.top,h=o.dataFormat==="channelsLast",f=ot(o.outShape,t.dtype),d=t.strides[0],p=h?t.strides[1]:t.strides[2],v=h?t.strides[2]:1,g=h?1:t.strides[1],m=f.strides[0],y=h?f.strides[1]:f.strides[2],b=h?f.strides[2]:1,x=h?1:f.strides[1],w=this.readSync(t.dataId),C=this.readSync(n.dataId),k=f.values,R=0;R<o.batchSize;++R)for(var I=R*d,S=R*m,F=0;F<o.outHeight;++F)for(var T=S+F*y,L=F*o.strideHeight-l,O=0;O<a;O++){var B=L+O*s;if(!(B<0||B>=o.inHeight))for(var V=O*n.strides[0],U=I+B*p,W=0;W<o.outWidth;++W)for(var G=T+W*b,H=W*o.strideWidth-c,j=0;j<i;j++){var tt=H+j*u;if(!(tt<0||tt>=o.inWidth))for(var et=U+tt*v,it=V+j*n.strides[1],st=0;st<o.inChannels;++st){for(var ht=w[et+st*g],vt=0;vt<o.outChannels;++vt)k[G+vt*x]+=ht*C[it+vt];it+=o.outChannels}}}return f.toTensor()},e.prototype.conv3d=function(t,n,o){for(var a=o.filterDepth,i=o.filterHeight,s=o.filterWidth,u=o.dilationDepth,c=o.dilationHeight,l=o.dilationWidth,h=o.padInfo.front,f=o.padInfo.left,d=o.padInfo.top,p=ot(o.outShape,t.dtype),v=this.readSync(t.dataId),g=this.readSync(n.dataId),m=p.values,y=0;y<o.batchSize;++y)for(var b=y*t.strides[0],x=y*p.strides[0],w=0;w<o.outDepth;++w)for(var C=x+w*p.strides[1],k=w*o.strideDepth-h,R=0;R<a;R++){var I=k+R*u;if(!(I<0||I>=o.inDepth))for(var S=R*n.strides[0],F=b+I*t.strides[1],T=0;T<o.outHeight;++T)for(var L=C+T*p.strides[2],O=T*o.strideHeight-d,B=0;B<i;B++){var V=O+B*c;if(!(V<0||V>=o.inHeight))for(var U=S+B*n.strides[1],W=F+V*t.strides[2],G=0;G<o.outWidth;++G)for(var H=L+G*o.outChannels,j=G*o.strideWidth-f,tt=0;tt<s;tt++){var et=j+tt*l;if(!(et<0||et>=o.inWidth))for(var it=U+tt*n.strides[2],st=W+et*o.inChannels,ht=it,vt=0;vt<o.inChannels;++vt){for(var ft=v[st+vt],gt=0;gt<o.outChannels;++gt)m[H+gt]+=ft*g[ht+gt];ht+=o.outChannels}}}}return p.toTensor()},e.prototype.conv2dDerInput=function(t,n,o){z([t,n],"conv2dDerInput");for(var a=ot(o.inShape,"float32"),i=a.values,s=this.readSync(t.dataId),u=this.readSync(n.dataId),c=n.strides,l=c[0],h=c[1],f=c[2],d=o.batchSize,p=o.filterHeight,v=o.filterWidth,g=o.inChannels,m=o.inHeight,y=o.inWidth,b=o.outChannels,x=o.outHeight,w=o.outWidth,C=o.strideHeight,k=o.strideWidth,R=o.dataFormat,I=p-1-o.padInfo.top,S=v-1-o.padInfo.left,F=R==="channelsLast",T=a.strides[0],L=F?a.strides[1]:a.strides[2],O=F?a.strides[2]:1,B=F?1:a.strides[1],V=t.strides[0],U=F?t.strides[1]:t.strides[2],W=F?t.strides[2]:1,G=F?1:t.strides[1],H=0;H<d;++H)for(var j=0;j<g;++j)for(var tt=0;tt<m;++tt)for(var et=tt-I,it=Math.max(0,Math.ceil(et/C)),st=Math.min(x,(p+et)/C),ht=0;ht<y;++ht){for(var vt=ht-S,ft=Math.max(0,Math.ceil(vt/k)),gt=Math.min(w,(v+vt)/k),Tt=0,dt=it;dt<st;++dt)for(var bt=dt*C-et,yt=ft;yt<gt;++yt)for(var Dt=V*H+U*dt+W*yt,St=l*(p-1-bt)+h*(v-1-(yt*k-vt))+f*j,Rt=0;Rt<b;++Rt)Tt+=s[Dt+G*Rt]*u[St+Rt];i[T*H+L*tt+O*ht+B*j]=Tt}return a.toTensor()},e.prototype.conv3dDerInput=function(t,n,o){for(var a=ot(o.inShape,"float32"),i=a.values,s=a.strides,u=s[0],c=s[1],l=s[2],h=s[3],f=this.readSync(t.dataId),d=t.strides,p=d[0],v=d[1],g=d[2],m=d[3],y=this.readSync(n.dataId),b=n.strides,x=b[0],w=b[1],C=b[2],k=b[3],R=o.batchSize,I=o.filterDepth,S=o.filterHeight,F=o.filterWidth,T=o.inChannels,L=o.inDepth,O=o.inHeight,B=o.inWidth,V=o.outChannels,U=o.outDepth,W=o.outHeight,G=o.outWidth,H=o.strideDepth,j=o.strideHeight,tt=o.strideWidth,et=I-1-o.padInfo.front,it=S-1-o.padInfo.top,st=F-1-o.padInfo.left,ht=0;ht<R;++ht)for(var vt=0;vt<T;++vt)for(var ft=0;ft<L;++ft)for(var gt=ft-et,Tt=Math.max(0,Math.ceil(gt/H)),dt=Math.min(U,(I+gt)/H),bt=0;bt<O;++bt)for(var yt=bt-it,Dt=Math.max(0,Math.ceil(yt/j)),St=Math.min(W,(S+yt)/j),Rt=0;Rt<B;++Rt){for(var Oe=Rt-st,Be=Math.max(0,Math.ceil(Oe/tt)),le=Math.min(G,(F+Oe)/tt),Kn=0,$e=Tt;$e<dt;++$e)for(var hn=$e*H-gt,Ye=Dt;Ye<St;++Ye)for(var $n=Ye*j-yt,Je=Be;Je<le;++Je)for(var Ii=p*ht+v*$e+g*Ye+m*Je,Yn=x*(I-1-hn)+w*(S-1-$n)+C*(F-1-(Je*tt-Oe))+k*vt,Le=0;Le<V;++Le)Kn+=f[Ii+Le]*y[Yn+Le];i[u*ht+c*ft+l*bt+h*Rt+vt]=Kn}return a.toTensor()},e.prototype.conv2dDerFilter=function(t,n,o){z([t,n],"conv2dDerFilter");for(var a=o.strideHeight,i=o.strideWidth,s=o.filterHeight,u=o.filterWidth,c=o.dataFormat==="channelsLast",l=ot(o.filterShape,"float32"),h=o.padInfo.left,f=o.padInfo.top,d=this.bufferSync(t),p=this.bufferSync(n),v=0;v<s;++v)for(var g=Math.max(0,Math.ceil((f-v)/a)),m=Math.min(o.outHeight,(o.inHeight+f-v)/a),y=0;y<u;++y)for(var b=Math.max(0,Math.ceil((h-y)/i)),x=Math.min(o.outWidth,(o.inWidth+h-y)/i),w=0;w<o.inChannels;++w)for(var C=0;C<o.outChannels;++C){for(var k=0,R=0;R<o.batchSize;++R)for(var I=g;I<m;++I)for(var S=v+I*a-f,F=b;F<x;++F){var T=y+F*i-h;k+=c?d.get(R,S,T,w)*p.get(R,I,F,C):d.get(R,w,S,T)*p.get(R,C,I,F)}l.set(k,v,y,w,C)}return l.toTensor()},e.prototype.conv3dDerFilter=function(t,n,o){for(var a=o.strideDepth,i=o.strideHeight,s=o.strideWidth,u=o.filterDepth,c=o.filterHeight,l=o.filterWidth,h=ot(o.filterShape,"float32"),f=h.values,d=h.strides,p=d[0],v=d[1],g=d[2],m=d[3],y=this.readSync(n.dataId),b=n.strides,x=b[0],w=b[1],C=b[2],k=b[3],R=this.readSync(t.dataId),I=t.strides,S=I[0],F=I[1],T=I[2],L=I[3],O=o.padInfo.front,B=o.padInfo.left,V=o.padInfo.top,U=0;U<u;++U)for(var W=Math.max(0,Math.ceil((O-U)/a)),G=Math.min(o.outDepth,(o.inDepth+O-U)/a),H=U*p,j=0;j<c;++j)for(var tt=Math.max(0,Math.ceil((V-j)/i)),et=Math.min(o.outHeight,(o.inHeight+V-j)/i),it=j*v+H,st=0;st<l;++st)for(var ht=Math.max(0,Math.ceil((B-st)/s)),vt=Math.min(o.outWidth,(o.inWidth+B-st)/s),ft=st*g+it,gt=0;gt<o.inChannels;++gt)for(var Tt=gt*m+ft,dt=0;dt<o.outChannels;++dt){for(var bt=0,yt=0;yt<o.batchSize;++yt)for(var Dt=yt*S,St=yt*x,Rt=W;Rt<G;++Rt)for(var Oe=(U+Rt*a-O)*F+Dt,Be=Rt*w+St,le=tt;le<et;++le)for(var Kn=(j+le*i-V)*T+Oe,$e=le*C+Be,hn=ht;hn<vt;++hn){var Ye=hn*k+$e;bt+=R[(st+hn*s-B)*L+Kn+gt]*y[Ye+dt]}f[Tt+dt]=bt}return h.toTensor()},e.prototype.fusedDepthwiseConv2D=function(t){var n=t.input,o=t.filter,a=t.convInfo,i=t.bias,s=t.activation,u=t.preluActivationWeights,c=this.depthwiseConv2D(n,o,a);return i&&(c=this.add(c,i)),s&&(c=Aa(this,c,s,u)),c},e.prototype.depthwiseConv2D=function(t,n,o){z([t,n],"depthwiseConv2D");for(var a=o.filterHeight,i=o.filterWidth,s=o.dilationHeight,u=o.dilationWidth,c=o.padInfo.left,l=o.padInfo.top,h=o.outChannels/o.inChannels,f=ot(o.outShape,t.dtype),d=this.readSync(t.dataId),p=this.readSync(n.dataId),v=f.values,g=0;g<o.batchSize;++g)for(var m=g*t.strides[0],y=g*f.strides[0],b=0;b<o.outHeight;++b)for(var x=y+b*f.strides[1],w=b*o.strideHeight-c,C=0;C<a;++C){var k=w+C*s;if(!(k<0||k>=o.inHeight))for(var R=C*n.strides[0],I=m+k*t.strides[1],S=0;S<o.outWidth;++S)for(var F=x+S*f.strides[2],T=S*o.strideWidth-l,L=0;L<i;++L){var O=T+L*u;if(!(O<0||O>=o.inWidth))for(var B=R+L*n.strides[1],V=I+O*o.inChannels,U=F,W=B,G=0;G<o.inChannels;++G){for(var H=d[V+G],j=0;j<h;++j)v[U+j]+=H*p[W+j];U+=h,W+=h}}}return f.toTensor()},e.prototype.depthwiseConv2DDerInput=function(t,n,o){z([t,n],"depthwiseConv2DDerInput");for(var a=ot(o.inShape,"float32"),i=a.values,s=a.strides,u=s[0],c=s[1],l=s[2],h=this.readSync(t.dataId),f=t.strides,d=f[0],p=f[1],v=f[2],g=this.readSync(n.dataId),m=n.strides,y=m[0],b=m[1],x=m[2],w=o.batchSize,C=o.filterHeight,k=o.filterWidth,R=o.inChannels,I=o.inHeight,S=o.inWidth,F=o.outChannels,T=o.outHeight,L=o.outWidth,O=o.strideHeight,B=o.strideWidth,V=C-1-o.padInfo.top,U=k-1-o.padInfo.left,W=F/R,G=0;G<w;++G)for(var H=0;H<R;++H)for(var j=0;j<I;++j)for(var tt=j-V,et=Math.max(0,Math.ceil(tt/O)),it=Math.min(T,(C+tt)/O),st=0;st<S;++st){for(var ht=st-U,vt=Math.max(0,Math.ceil(ht/B)),ft=Math.min(L,(k+ht)/B),gt=0,Tt=et;Tt<it;++Tt)for(var dt=Tt*O-tt,bt=vt;bt<ft;++bt)for(var yt=d*G+p*Tt+v*bt,Dt=y*(C-1-dt)+b*(k-1-(bt*B-ht))+x*H,St=0;St<W;++St)gt+=h[yt+(H*W+St)]*g[Dt+St];i[u*G+c*j+l*st+H]=gt}return a.toTensor()},e.prototype.depthwiseConv2DDerFilter=function(t,n,o){z([t,n],"depthwiseConv2DDerFilter");for(var a=o.strideHeight,i=o.strideWidth,s=o.filterHeight,u=o.filterWidth,c=ot(o.filterShape,"float32"),l=o.padInfo.left,h=o.padInfo.top,f=o.outChannels/o.inChannels,d=this.bufferSync(t),p=this.bufferSync(n),v=0;v<s;++v)for(var g=Math.max(0,Math.ceil((h-v)/a)),m=Math.min(o.outHeight,(o.inHeight+h-v)/a),y=0;y<u;++y)for(var b=Math.max(0,Math.ceil((l-y)/i)),x=Math.min(o.outWidth,(o.inWidth+l-y)/i),w=0;w<o.outChannels;++w){for(var C=Math.trunc(w/f),k=w%f,R=0,I=0;I<o.batchSize;++I)for(var S=g;S<m;++S)for(var F=v+S*a-h,T=b;T<x;++T){var L=y+T*i-l;R+=d.get(I,F,L,C)*p.get(I,S,T,w)}c.set(R,v,y,C,k)}return c.toTensor()},e.prototype.tile=function(t,n){return z(t,"tile"),_s(this.bufferSync(t),n)},e.prototype.pad=function(t,n,o){z(t,"pad");var a=n.map(function(f,d){return f[0]+t.shape[d]+f[1]}),i=n.map(function(f){return f[0]}),s=this.bufferSync(t),u=ot(a,t.dtype);o!==0&&u.values.fill(o);for(var c=0;c<t.size;c++){var l=s.indexToLoc(c),h=l.map(function(f,d){return f+i[d]});u.set.apply(u,[s.get.apply(s,l)].concat(h))}return u.toTensor()},e.prototype.transpose=function(t,n){z(t,"transpose");for(var o=new Array(t.rank),a=0;a<o.length;a++)o[a]=t.shape[n[a]];var i=this.readSync(t.dataId),s=ot(o,t.dtype),u=this.bufferSync(t);for(a=0;a<t.size;++a){for(var c=u.indexToLoc(a),l=new Array(c.length),h=0;h<l.length;h++)l[h]=c[n[h]];var f=s.locToIndex(l);s.values[f]=i[a]}return s.toTensor()},e.prototype.gather=function(t,n,o){z([t,n],"gather");var a=t.shape.slice(),i=this.readSync(n.dataId);a[o]=i.length;for(var s=ot(a,t.dtype),u=this.bufferSync(t),c=0;c<s.size;++c){var l=s.indexToLoc(c),h=l.slice();h[o]=i[l[o]];var f=u.locToIndex(h);s.values[c]=u.values[f]}return s.toTensor()},e.prototype.batchToSpaceND=function(t,n,o){z([t],"batchToSpaceND");var a=n.reduce(function(h,f){return h*f}),i=Br(t.shape,n,a),s=Lr(i.length,n.length),u=Wr(t.shape,n,a),c=us(o,n.length),l=cs(u,o,n.length);return t.reshape(i).transpose(s).reshape(u).slice(c,l)},e.prototype.spaceToBatchND=function(t,n,o){z([t],"spaceToBatchND");var a=n.reduce(function(f,d){return f*d}),i=[[0,0]];i.push.apply(i,o);for(var s=1+n.length;s<t.shape.length;++s)i.push([0,0]);var u=t.pad(i),c=Br(u.shape,n,a,!1),l=Lr(c.length,n.length,!1),h=Wr(u.shape,n,a,!1);return u.reshape(c).transpose(l).reshape(h)},e.prototype.pool=function(t,n,o){z(t,"pool");for(var a=n.strideHeight,i=n.strideWidth,s=n.dilationHeight,u=n.dilationWidth,c=n.effectiveFilterHeight,l=n.effectiveFilterWidth,h=n.padInfo.top,f=n.padInfo.left,d=o==="max"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,p=this.readSync(t.dataId),v=ot(n.outShape,t.dtype),g=v.values,m=n.outShape[1]*n.outShape[2]*n.outShape[3],y=n.outShape[2]*n.outShape[3],b=n.outShape[3],x=0;x<n.batchSize;++x)for(var w=x*m,C=x*t.strides[0],k=0;k<n.inChannels;++k)for(var R=0;R<n.outHeight;++R)for(var I=R*a-h,S=Math.max(0,I),F=Math.min(n.inHeight,c+I),T=w+R*y,L=0;L<n.outWidth;++L){for(var O=L*i-f,B=Math.max(0,O),V=Math.min(n.inWidth,l+O),U=d,W=0,G=0,H=S;H<F;H+=s){for(var j=C+H*t.strides[1],tt=B;tt<V;tt+=u){var et=p[j+tt*t.strides[2]+k];o==="max"&&et>U?U=et:o==="avg"&&(W+=et,G++)}if(isNaN(U))break}g[T+L*b+k]=o==="avg"?W/G:U}return v.toTensor()},e.prototype.maxPool=function(t,n){return this.pool(t,n,"max")},e.prototype.maxPoolPositions=function(t,n){for(var o=ot(n.outShape,"int32"),a=n.strideHeight,i=n.strideWidth,s=n.dilationHeight,u=n.dilationWidth,c=n.effectiveFilterHeight,l=n.effectiveFilterWidth,h=n.padInfo.top,f=n.padInfo.left,d=this.bufferSync(t),p=0;p<n.batchSize;++p)for(var v=0;v<n.inChannels;++v)for(var g=0;g<n.outHeight;++g){for(var m=g*a-h,y=m;y<0;)y+=s;for(var b=Math.min(n.inHeight,c+m),x=0;x<n.outWidth;++x){for(var w=x*i-f,C=w;C<0;)C+=u;for(var k=Math.min(n.inWidth,l+w),R=Number.NEGATIVE_INFINITY,I=-1,S=y;S<b;S+=s)for(var F=S-m,T=C;T<k;T+=u){var L=T-w,O=d.get(p,S,T,v);O>R&&(R=O,I=F*l+L)}o.set(I,p,g,x,v)}}return o.toTensor()},e.prototype.maxPoolBackprop=function(t,n,o,a){z([n,o],"maxPoolBackprop");for(var i=this.maxPoolPositions(n,a),s=a.strideHeight,u=a.strideWidth,c=a.dilationHeight,l=a.dilationWidth,h=a.effectiveFilterHeight,f=a.effectiveFilterWidth,d=f-1-a.padInfo.left,p=h-1-a.padInfo.top,v=ot(n.shape,"float32"),g=this.bufferSync(i),m=this.bufferSync(t),y=0;y<a.batchSize;++y)for(var b=0;b<a.inChannels;++b)for(var x=0;x<a.inHeight;++x)for(var w=0;w<a.inWidth;++w){for(var C=x-p,k=w-d,R=0,I=0;I<h;I+=c){var S=(C+I)/s;if(!(S<0||S>=a.outHeight||Math.floor(S)!==S))for(var F=0;F<f;F+=l){var T=(k+F)/u;if(!(T<0||T>=a.outWidth||Math.floor(T)!==T)){var L=h*f-1-g.get(y,S,T,b)===I*f+F?1:0;L!==0&&(R+=m.get(y,S,T,b)*L)}}}v.set(R,y,x,w,b)}return v.toTensor()},e.prototype.avgPoolBackprop=function(t,n,o){z([t,n],"avgPoolBackprop");for(var a=o.strideHeight,i=o.strideWidth,s=o.filterHeight,u=o.filterWidth,c=o.dilationHeight,l=o.dilationWidth,h=o.effectiveFilterHeight,f=o.effectiveFilterWidth,d=f-1-o.padInfo.left,p=h-1-o.padInfo.top,v=ot(n.shape,"float32"),g=1/(s*u),m=this.bufferSync(t),y=0;y<o.batchSize;++y)for(var b=0;b<o.inChannels;++b)for(var x=0;x<o.inHeight;++x)for(var w=0;w<o.inWidth;++w){for(var C=x-p,k=w-d,R=0,I=0;I<h;I+=c){var S=(C+I)/a;if(!(S<0||S>=o.outHeight||Math.floor(S)!==S))for(var F=0;F<f;F+=l){var T=(k+F)/i;T<0||T>=o.outWidth||Math.floor(T)!==T||(R+=m.get(y,S,T,b))}}v.set(R*g,y,x,w,b)}return v.toTensor()},e.prototype.pool3d=function(t,n,o){z(t,"pool3d");for(var a=n.strideDepth,i=n.strideHeight,s=n.strideWidth,u=n.dilationDepth,c=n.dilationHeight,l=n.dilationWidth,h=n.effectiveFilterDepth,f=n.effectiveFilterHeight,d=n.effectiveFilterWidth,p=n.padInfo.front,v=n.padInfo.top,g=n.padInfo.left,m=o==="max"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,y=this.readSync(t.dataId),b=ot(n.outShape,t.dtype),x=b.values,w=n.outShape[1]*n.outShape[2]*n.outShape[3]*n.outShape[4],C=n.outShape[2]*n.outShape[3]*n.outShape[4],k=n.outShape[3]*n.outShape[4],R=n.outShape[4],I=0;I<n.batchSize;++I)for(var S=I*w,F=I*t.strides[0],T=0;T<n.inChannels;++T)for(var L=0;L<n.outDepth;++L){for(var O=L*a-p,B=O;B<0;)B+=u;for(var V=Math.min(n.inDepth,h+O),U=S+L*C,W=0;W<n.outHeight;++W){for(var G=W*i-v,H=G;H<0;)H+=c;for(var j=Math.min(n.inHeight,f+G),tt=U+W*k,et=0;et<n.outWidth;++et){for(var it=et*s-g,st=it;st<0;)st+=l;for(var ht=Math.min(n.inWidth,d+it),vt=tt+et*R,ft=m,gt=0,Tt=0,dt=B;dt<V;dt+=u){for(var bt=F+dt*t.strides[1],yt=H;yt<j;yt+=c){for(var Dt=bt+yt*t.strides[2],St=st;St<ht;St+=l){var Rt=y[Dt+St*t.strides[3]+T];if(o==="max"&&Rt>ft?ft=Rt:o==="avg"&&(gt+=Rt,Tt++),isNaN(ft))break}if(isNaN(ft))break}if(isNaN(ft))break}x[vt+T]=o==="avg"?gt/Tt:ft}}}return b.toTensor()},e.prototype.avgPool3d=function(t,n){return z(t,"avgPool3d"),this.pool3d(t,n,"avg").toFloat()},e.prototype.avgPool3dBackprop=function(t,n,o){z([t,n],"avgPool3dBackprop");for(var a=o.strideDepth,i=o.strideHeight,s=o.strideWidth,u=o.filterDepth,c=o.filterHeight,l=o.filterWidth,h=o.dilationDepth,f=o.dilationHeight,d=o.dilationWidth,p=o.effectiveFilterDepth,v=o.effectiveFilterHeight,g=o.effectiveFilterWidth,m=p-1-o.padInfo.front,y=g-1-o.padInfo.left,b=v-1-o.padInfo.top,x=ot(n.shape,"float32"),w=1/(u*c*l),C=this.bufferSync(t),k=0;k<o.batchSize;++k)for(var R=0;R<o.inChannels;++R)for(var I=0;I<o.inDepth;++I)for(var S=0;S<o.inHeight;++S)for(var F=0;F<o.inWidth;++F){for(var T=I-m,L=S-b,O=F-y,B=0,V=0;V<p;V+=h){var U=(T+V)/a;if(!(U<0||U>=o.outDepth||Math.floor(U)!==U))for(var W=0;W<v;W+=f){var G=(L+W)/i;if(!(G<0||G>=o.outHeight||Math.floor(G)!==G))for(var H=0;H<g;H+=d){var j=(O+H)/s;j<0||j>=o.outWidth||Math.floor(j)!==j||(B+=C.get(k,U,G,j,R))}}}x.set(B*w,k,I,S,F,R)}return x.toTensor()},e.prototype.maxPool3d=function(t,n){return z(t,"maxPool3d"),this.pool3d(t,n,"max").toFloat()},e.prototype.maxPool3dPositions=function(t,n){for(var o=ot(n.outShape,"int32"),a=n.strideDepth,i=n.strideHeight,s=n.strideWidth,u=n.dilationDepth,c=n.dilationHeight,l=n.dilationWidth,h=n.effectiveFilterDepth,f=n.effectiveFilterHeight,d=n.effectiveFilterWidth,p=n.padInfo.front,v=n.padInfo.top,g=n.padInfo.left,m=this.bufferSync(t),y=0;y<n.batchSize;++y)for(var b=0;b<n.inChannels;++b)for(var x=0;x<n.outDepth;++x){for(var w=x*a-p,C=w;C<0;)C+=u;for(var k=Math.min(n.inDepth,h+w),R=0;R<n.outHeight;++R){for(var I=R*i-v,S=I;S<0;)S+=c;for(var F=Math.min(n.inHeight,f+I),T=0;T<n.outWidth;++T){for(var L=T*s-g,O=L;O<0;)O+=l;for(var B=Math.min(n.inWidth,d+L),V=Number.NEGATIVE_INFINITY,U=-1,W=C;W<k;W+=u)for(var G=W-w,H=S;H<F;H+=c)for(var j=H-I,tt=O;tt<B;tt+=l){var et=tt-L,it=m.get(y,W,H,tt,b);it>=V&&(V=it,U=G*f*d+j*f+et)}o.set(U,y,x,R,T,b)}}}return o.toTensor()},e.prototype.maxPool3dBackprop=function(t,n,o,a){z([n,o],"maxPool3dBackprop");for(var i=this.maxPool3dPositions(n,a),s=a.strideDepth,u=a.strideHeight,c=a.strideWidth,l=a.dilationDepth,h=a.dilationHeight,f=a.dilationWidth,d=a.effectiveFilterDepth,p=a.effectiveFilterHeight,v=a.effectiveFilterWidth,g=d-1-a.padInfo.front,m=v-1-a.padInfo.left,y=p-1-a.padInfo.top,b=ot(n.shape,"float32"),x=this.bufferSync(i),w=this.bufferSync(t),C=0;C<a.batchSize;++C)for(var k=0;k<a.inChannels;++k)for(var R=0;R<a.inDepth;++R)for(var I=0;I<a.inHeight;++I)for(var S=0;S<a.inWidth;++S){for(var F=R-g,T=I-y,L=S-m,O=0,B=0;B<d;B+=l){var V=(F+B)/s;if(!(V<0||V>=a.outDepth||Math.floor(V)!==V))for(var U=0;U<p;U+=h){var W=(T+U)/u;if(!(W<0||W>=a.outHeight||Math.floor(W)!==W))for(var G=0;G<v;G+=f){var H=(L+G)/c;if(!(H<0||H>=a.outWidth||Math.floor(H)!==H)){var j=d*p*v-1-x.get(C,V,W,H,k)===B*p*v+U*v+G?1:0;j!==0&&(O+=w.get(C,V,W,H,k)*j)}}}}b.set(O,C,R,I,S,k)}return b.toTensor()},e.prototype.cast=function(t,n){return ys(t,n,this)},e.prototype.reshape=function(t,n){return ta(t,n)},e.prototype.avgPool=function(t,n){return z(t,"avgPool"),this.pool(t,n,"avg").toFloat()},e.prototype.resizeBilinear=function(t,n,o,a){z(t,"resizeBilinear");for(var i=t.shape,s=i[0],u=i[1],c=i[2],l=i[3],h=this.readSync(t.dataId),f=new Float32Array(Y([s,n,o,l])),d=[a&&n>1?u-1:u,a&&o>1?c-1:c],p=[a&&n>1?n-1:n,a&&o>1?o-1:o],v=0,g=d[0]/p[0],m=d[1]/p[1],y=0;y<s;y++)for(var b=0;b<n;b++)for(var x=g*b,w=Math.floor(x),C=x-w,k=Math.min(u-1,Math.ceil(x)),R=y*t.strides[0]+w*t.strides[1],I=y*t.strides[0]+k*t.strides[1],S=0;S<o;S++)for(var F=m*S,T=Math.floor(F),L=F-T,O=Math.min(c-1,Math.ceil(F)),B=R+T*t.strides[2],V=I+T*t.strides[2],U=R+O*t.strides[2],W=I+O*t.strides[2],G=0;G<l;G++){var H=h[B+G],j=h[V+G],tt=H+(h[U+G]-H)*L,et=tt+(j+(h[W+G]-j)*L-tt)*C;f[v++]=et}return Ht(f,[s,n,o,l])},e.prototype.resizeBilinearBackprop=function(t,n,o){z([t,n],"resizeBilinearBackprop");for(var a=n.shape,i=a[0],s=a[1],u=a[2],c=a[3],l=t.shape,h=l[1],f=l[2],d=new Float32Array(i*s*u*c),p=[o&&h>1?s-1:s,o&&f>1?u-1:u],v=[o&&h>1?h-1:h,o&&f>1?f-1:f],g=p[0]/v[0],m=p[1]/v[1],y=this.readSync(t.dataId),b=0,x=0;x<i;x++)for(var w=x*n.strides[0],C=0;C<h;C++)for(var k=C*g,R=Math.floor(k),I=Math.min(Math.ceil(k),s-1),S=w+R*n.strides[1],F=w+I*n.strides[1],T=k-R,L=1-T,O=0;O<f;O++)for(var B=O*m,V=Math.floor(B),U=Math.min(Math.ceil(B),u-1),W=B-V,G=1-W,H=S+V*n.strides[2],j=S+U*n.strides[2],tt=F+V*n.strides[2],et=F+U*n.strides[2],it=L*G,st=L*W,ht=T*G,vt=T*W,ft=0;ft<c;ft++){var gt=y[b++];d[H+ft]+=gt*it,d[j+ft]+=gt*st,d[tt+ft]+=gt*ht,d[et+ft]+=gt*vt}return te(d,[i,u,s,c],n.dtype)},e.prototype.resizeNearestNeighbor=function(t,n,o,a){z(t,"resizeNearestNeighbor");for(var i=t.shape,s=i[0],u=i[1],c=i[2],l=i[3],h=this.readSync(t.dataId),f=new Float32Array(s*n*o*l),d=[a&&n>1?u-1:u,a&&o>1?c-1:c],p=[a&&n>1?n-1:n,a&&o>1?o-1:o],v=d[0]/p[0],g=d[1]/p[1],m=0,y=0;y<s;y++)for(var b=y*t.strides[0],x=0;x<n;x++)for(var w=v*x,C=b+Math.min(u-1,a?Math.round(w):Math.floor(w))*t.strides[1],k=0;k<o;k++)for(var R=g*k,I=C+Math.min(c-1,a?Math.round(R):Math.floor(R))*t.strides[2],S=0;S<l;S++){var F=h[I+S];f[m++]=F}return Ht(f,[s,n,o,l],t.dtype)},e.prototype.resizeNearestNeighborBackprop=function(t,n,o){z([t,n],"resizeNearestNeighborBackprop");for(var a=n.shape,i=a[0],s=a[1],u=a[2],c=a[3],l=t.shape,h=l[1],f=l[2],d=new Float32Array(i*s*u*c),p=this.readSync(t.dataId),v=[o&&h>1?s-1:s,o&&f>1?u-1:u],g=[o&&h>1?h-1:h,o&&f>1?f-1:f],m=v[0]/g[0],y=v[1]/g[1],b=1/m,x=1/y,w=2*Math.ceil(b)+2,C=2*Math.ceil(x)+2,k=0;k<i;k++)for(var R=k*n.strides[0],I=0;I<s;I++)for(var S=R+I*n.strides[1],F=Math.floor(I*b),T=Math.floor(F-w/2),L=0;L<u;L++)for(var O=S+L*n.strides[2],B=Math.floor(L*x),V=Math.floor(B-C/2),U=0;U<c;U++){for(var W=0,G=0;G<w;G++){var H=G+T;if(!(H<0||H>=h)){var j=R+H*t.strides[1],tt=H*m;if(I===Math.min(s-1,o?Math.round(tt):Math.floor(tt)))for(var et=0;et<C;et++){var it=et+V;if(!(it<0||it>=f)){var st=j+it*t.strides[2],ht=it*y;L===Math.min(u-1,o?Math.round(ht):Math.floor(ht))&&(W+=p[st+U])}}}}d[O+U]=W}return te(d,n.shape,n.dtype)},e.prototype.batchNormalization=function(t,n,o,a,i,s){z([t,n,o,i,s],"batchNorm");for(var u=this.readSync(t.dataId),c=this.readSync(n.dataId),l=this.readSync(o.dataId),h=i?this.readSync(i.dataId):new Float32Array([1]),f=s?this.readSync(s.dataId):new Float32Array([0]),d=new Float32Array(u.length),p=f.length,v=h.length,g=l.length,m=c.length,y=0,b=0,x=0,w=0,C=0;C<u.length;++C)d[C]=f[y++]+(u[C]-c[b++])*h[x++]/Math.sqrt(l[w++]+a),y>=p&&(y=0),b>=m&&(b=0),x>=v&&(x=0),w>=g&&(w=0);return te(d,t.shape)},e.prototype.localResponseNormalization4D=function(t,n,o,a,i){z(t,"localResponseNormalization4D");var s=t.shape[3],u=s-1,c=this.readSync(t.dataId),l=t.size,h=new Float32Array(l);function f(g){for(var m=g%s,y=g-m+Math.max(0,m-n),b=g-m+Math.min(m+n,u),x=0;y<=b;y++){var w=c[y];x+=w*w}return x}for(var d=0;d<l;d++){var p=f(d),v=c[d]*Math.pow(o+a*p,-i);h[d]=v}return te(h,t.shape)},e.prototype.LRNGrad=function(t,n,o,a,i,s,u){z(t,"LRNGrad");for(var c=t.shape[3],l=this.readSync(t.dataId),h=this.readSync(n.dataId),f=this.readSync(o.dataId),d=new Float32Array(t.size),p=t.size,v=0;v<p;v++){for(var g=v%c,m=v-g+Math.max(0,g-a),y=v-g+Math.min(c,g+a+1),b=0,x=m;x<y;x++)b+=Math.pow(h[x],2);for(b=s*b+i,x=m;x<y;x++){var w=-2*s*u*h[x]*f[v]/b;v===x&&(w+=Math.pow(b,-u)),w*=l[v],d[x]+=w}}return te(d,t.shape)},e.prototype.multinomial=function(t,n,o,a){z(t,"multinomial");for(var i=n?t:Ve(t),s=i.shape[0],u=i.shape[1],c=Ct([s,o],"int32"),l=this.readSync(c.dataId),h=this.readSync(i.dataId),f=0;f<s;++f){var d=f*u,p=new Float32Array(u-1);p[0]=h[d];for(var v=1;v<p.length;++v)p[v]=p[v-1]+h[d+v];for(var g=Or(a.toString()),m=f*o,y=0;y<o;++y){var b=g();l[m+y]=p.length;for(var x=0;x<p.length;x++)if(b<p[x]){l[m+y]=x;break}}}return c},e.prototype.oneHot=function(t,n,o,a){z(t,"oneHot");var i=new Float32Array(t.size*n);i.fill(a);for(var s=this.readSync(t.dataId),u=0;u<t.size;++u)s[u]>=0&&s[u]<n&&(i[u*n+s[u]]=o);return tn(i,[t.size,n],"int32")},e.prototype.nonMaxSuppression=function(t,n,o,a,i){return z(t,"nonMaxSuppression"),na(this.readSync(t.dataId),this.readSync(n.dataId),o,a,i)},e.prototype.fft=function(t){return this.fftBatch(t,!1)},e.prototype.ifft=function(t){return this.fftBatch(t,!0)},e.prototype.fftBatch=function(t,n){for(var o=t.shape[0],a=t.shape[1],i=ot(t.shape,"float32"),s=ot(t.shape,"float32"),u=fe(t).as2D(o,a),c=De(t).as2D(o,a),l=0;l<o;l++)for(var h=u.slice([l,0],[1,a]),f=c.slice([l,0],[1,a]),d=Gt(h,f),p=this.readSync(this.fftImpl(d,n).dataId),v=0;v<a;v++){var g=bs(p,v);i.values[l*a+v]=g.real,s.values[l*a+v]=g.imag}return Gt(i.toTensor(),s.toTensor()).as2D(o,a)},e.prototype.fftImpl=function(t,n){var o=t.as1D(),a=o.size;if(this.isExponentOf2(a)){var i=this.fftRadix2(o,a,n).as2D(t.shape[0],t.shape[1]);return n&&(i=Gt(fe(i).div(q(a)),De(i).div(q(a)))),i}var s=this.readSync(t.dataId),u=function(c){for(var l=new Float32Array(c.length/2),h=new Float32Array(c.length/2),f=0;f<c.length;f+=2)l[f/2]=c[f],h[f/2]=c[f+1];return{real:l,imag:h}}(this.fourierTransformByMatmul(s,a,n));return Gt(u.real,u.imag).as2D(t.shape[0],t.shape[1])},e.prototype.isExponentOf2=function(t){return(t&t-1)==0},e.prototype.fftRadix2=function(t,n,o){if(n===1)return t;var a=this.readSync(t.dataId),i=n/2,s=function(m){for(var y=Math.ceil(m.length/4),b=new Float32Array(y),x=new Float32Array(y),w=0;w<m.length;w+=4)b[Math.floor(w/4)]=m[w],x[Math.floor(w/4)]=m[w+1];return{real:b,imag:x}}(a),u=Gt(s.real,s.imag).as1D(),c=function(m){for(var y=Math.floor(m.length/4),b=new Float32Array(y),x=new Float32Array(y),w=2;w<m.length;w+=4)b[Math.floor(w/4)]=m[w],x[Math.floor(w/4)]=m[w+1];return{real:b,imag:x}}(a),l=Gt(c.real,c.imag).as1D();u=this.fftRadix2(u,i,o),l=this.fftRadix2(l,i,o);var h=function(m,y){for(var b=new Float32Array(m/2),x=new Float32Array(m/2),w=0;w<Math.ceil(m/2);w++){var C=(y?2:-2)*Math.PI*(w/m);b[w]=Math.cos(C),x[w]=Math.sin(C)}return{real:b,imag:x}}(n,o),f=Gt(h.real,h.imag).mul(l),d=u.add(f),p=u.sub(f),v=fe(d).concat(fe(p)),g=De(d).concat(De(p));return Gt(v,g).as1D()},e.prototype.fourierTransformByMatmul=function(t,n,o){for(var a=new Float32Array(2*n),i=0;i<n;i++){for(var s=0,u=0,c=0;c<n;c++){var l=Ph(i*c,n,o),h=bs(t,c);s+=h.real*l.real-h.imag*l.imag,u+=h.real*l.imag+h.imag*l.real}o&&(s/=n,u/=n),Mh(a,s,u,i)}return a},e.prototype.depthToSpace=function(t,n,o){_(o==="NHWC",function(){return"Only NHWC dataFormat supported on CPU for depthToSpace. Got "+o}),_(n>1,function(){return"blockSize should be > 1 for depthToSpace, but was: "+n});for(var a=t.shape[0],i=t.shape[1],s=t.shape[2],u=t.shape[3],c=i*n,l=s*n,h=u/(n*n),f=this.readSync(t.dataId),d=new Float32Array(a*c*l*h),p=0,v=0;v<a;++v)for(var g=0;g<c;++g)for(var m=Math.floor(g/n),y=g%n,b=0;b<l;++b)for(var x=Math.floor(b/n),w=(y*n+b%n)*h,C=0;C<h;++C){var k=C+w+u*(x+s*(m+i*v));d[p++]=f[k]}return te(d,[a,c,l,h])},e.prototype.broadcastedBinaryOp=function(t,n,o,a){var i=lt(t.shape,n.shape),s=ot(i,o),u=this.readSync(t.dataId),c=this.readSync(n.dataId),l=en(t.shape,i),h=en(n.shape,i),f=s.values;if(l.length+h.length===0)for(var d=0;d<f.length;++d)f[d]=a(u[d%u.length],c[d%c.length]);else{var p=this.bufferSync(t),v=this.bufferSync(n),g=function(m){var y=s.indexToLoc(m),b=y.slice(-t.rank);l.forEach(function(k){return b[k]=0});var x=p.locToIndex(b),w=y.slice(-n.rank);h.forEach(function(k){return w[k]=0});var C=v.locToIndex(w);f[m]=a(u[x],c[C])};for(d=0;d<f.length;++d)g(d)}return s.toTensor()},e.prototype.broadcastedBinaryComplexOp=function(t,n,o){var a=lt(t.shape,n.shape),i=ot(a,"float32"),s=ot(a,"float32"),u=this.readSync(t.dataId),c=this.readSync(n.dataId),l=en(t.shape,a),h=en(n.shape,a),f=i.values,d=s.values;if(l.length+h.length===0)for(var p=0;p<f.length;p++){var v=p%u.length,g=p%c.length,m=o(u[2*v],u[2*v+1],c[2*g],c[2*g+1]);f[p]=m.real,d[p]=m.imag}else{var y=this.bufferSync(this.data.get(t.dataId).complexTensors.real),b=this.bufferSync(this.data.get(n.dataId).complexTensors.real),x=function(w){var C=i.indexToLoc(w),k=C.slice(-t.rank);l.forEach(function(T){return k[T]=0});var R=y.locToIndex(k),I=C.slice(-n.rank);h.forEach(function(T){return I[T]=0});var S=b.locToIndex(I),F=o(u[2*R],u[2*R+1],c[2*S],c[2*S+1]);f[w]=F.real,d[w]=F.imag};for(p=0;p<f.length;p++)x(p)}return this.complex(i.toTensor(),s.toTensor())},e.prototype.split=function(t,n,o){return Es(t,n,o)},e.prototype.dispose=function(){},e.prototype.floatPrecision=function(){return 32},e.prototype.epsilon=function(){return 1e-7},e.prototype.cropAndResize=function(t,n,o,a,i,s){for(var u=t.shape,c=u[0],l=u[1],h=u[2],f=u[3],d=n.shape[0],p=a[0],v=a[1],g=ot([d,p,v,f],"float32"),m=this.readSync(n.dataId),y=this.readSync(o.dataId),b=this.readSync(t.dataId),x=t.strides,w=g.strides,C=0;C<d;C++){var k=4*C,R=m[k],I=m[k+1],S=m[k+2],F=m[k+3],T=y[C];if(!(T>=c))for(var L=p>1?(S-R)*(l-1)/(p-1):0,O=v>1?(F-I)*(h-1)/(v-1):0,B=0;B<p;B++){var V=p>1?R*(l-1)+B*L:.5*(R+S)*(l-1);if(V<0||V>l-1)for(var U=0;U<v;U++)for(var W=0;W<f;W++){var G=W+U*w[2]+B*w[1]+C*w[0];g.values[G]=s}else if(i==="bilinear"){var H=Math.floor(V),j=Math.ceil(V),tt=V-H;for(U=0;U<v;U++)if((dt=v>1?I*(h-1)+U*O:.5*(I+F)*(h-1))<0||dt>h-1)for(W=0;W<f;W++)G=W+U*w[2]+B*w[1]+C*w[0],g.values[G]=s;else{var et=Math.floor(dt),it=Math.ceil(dt),st=dt-et;for(W=0;W<f;W++){var ht=b[G=W+et*x[2]+H*x[1]+T*x[0]],vt=b[G=W+it*x[2]+H*x[1]+T*x[0]],ft=b[G=W+et*x[2]+j*x[1]+T*x[0]],gt=ht+(vt-ht)*st,Tt=ft+(b[G=W+it*x[2]+j*x[1]+T*x[0]]-ft)*st;G=W+U*w[2]+B*w[1]+C*w[0],g.values[G]=gt+(Tt-gt)*tt}}}else for(U=0;U<v;++U){var dt;if((dt=v>1?I*(h-1)+U*O:.5*(I+F)*(h-1))<0||dt>h-1)for(W=0;W<f;W++)G=W+U*w[2]+B*w[1]+C*w[0],g.values[G]=s;else{var bt=Math.round(dt),yt=Math.round(V);for(W=0;W<f;W++){var Dt=W+bt*x[2]+yt*x[1]+T*x[0],St=W+U*w[2]+B*w[1]+C*w[0];g.values[St]=b[Dt]}}}}}return g.toTensor()},e.prototype.sparseToDense=function(t,n,o,a){var i=Ur(0,t,o),s=i.sliceRank,u=i.numUpdates,c=i.sliceSize,l=i.strides,h=i.outputSize;return this.scatter(t,n,o,h,c,u,s,l,a,!1)},e.prototype.gatherND=function(t,n){var o=n.shape,a=o[o.length-1],i=ls(t,n),s=i[0],u=i[1],c=i[2],l=i[3];if(u===0)return Ht([],s,t.dtype);for(var h=new rr([u,c],t.dtype),f=this.readSync(n.dataId),d=this.readSync(t.dataId),p=0;p<u;p++){for(var v=[],g=0,m=0;m<a;m++){var y=f[p*a+m];g+=y*l[m],v.push(y)}if(g<0||g>=t.size/c)throw new Error("Invalid indices: "+v+" does not index into "+t.shape);for(var b=0;b<c;b++)h.values[p*c+b]=d[g*c+b]}return h.toTensor().reshape(s)},e.prototype.scatterND=function(t,n,o){var a=Ur(0,t,o),i=a.sliceRank,s=a.numUpdates,u=a.sliceSize,c=a.strides,l=a.outputSize,h=q(0);return this.scatter(t,n,o,l,u,s,i,c,h,!0)},e.prototype.fill=function(t,n,o){var a=_r(o=o||Qn(n),Y(t));return a.fill(n),A.makeTensor(a,t,o,this)},e.prototype.onesLike=function(t){if(t.dtype==="string")throw new Error("onesLike is not supported for string tensors");return this.fill(t.shape,1,t.dtype)},e.prototype.zerosLike=function(t){var n=_r(t.dtype,Y(t.shape));return this.makeOutput(n,t.shape,t.dtype)},e.prototype.linspace=function(t,n,o){return xs(t,n,o)},e.prototype.scatter=function(t,n,o,a,i,s,u,c,l,h){var f=[a/i,i],d=this.readSync(t.dataId),p=this.readSync(n.dataId);if(a===0)return Ht([],o,n.dtype);var v=new rr(f,n.dtype);v.values.fill(this.readSync(l.dataId)[0]);for(var g=0;g<s;g++){for(var m=[],y=0,b=0;b<u;b++){var x=d[g*u+b];m.push(x),y+=x*c[b]}if(y<0||y>=a/i)throw new Error("Invalid indices: "+m+" does not index into "+o);for(var w=0;w<i;w++)h?v.values[y*i+w]+=p[g*i+w]:v.values[y*i+w]=n.rank===0?p[0]:p[g*i+w]}return v.toTensor().reshape(o)},e}(gs);A.registerBackend("cpu",function(){return new ng},1);for(var Ta=0,Pu=[{kernelName:"NonMaxSuppressionV5",backendName:"cpu",kernelFunc:function(r){var e=r.inputs,t=r.backend,n=r.attrs,o=e,a=o.boxes,i=o.scores,s=n,u=s.maxOutputSize,c=s.iouThreshold,l=s.scoreThreshold,h=s.softNmsSigma,f=t;z(a,"NonMaxSuppressionWithScore");var d=ra(f.data.get(a.dataId).values,f.data.get(i.dataId).values,u,c,l,h);return[d.selectedIndices,d.selectedScores]}},{kernelName:"Square",backendName:"cpu",kernelFunc:function(r){var e=r.inputs,t=r.backend,n=e.x,o=t;z(n,"square");for(var a=o.data.get(n.dataId).values,i=new Float32Array(a.length),s=0;s<a.length;++s){var u=a[s];i[s]=u*u}return{dataId:o.write(i,n.shape,n.dtype),shape:n.shape,dtype:n.dtype}}},{kernelName:hr,backendName:"cpu",kernelFunc:function(r){var e=r.inputs,t=r.backend,n=e,o=n.a,a=n.b,i=t;z([o,a],hr);var s=i.data.get(o.dataId).values,u=i.data.get(a.dataId).values,c=function(f,d,p,v,g,m){var y=lt(f,d),b=y.length,x=Ee(y),w=Jn(g,Y(y)),C=f.length,k=d.length,R=Ee(f),I=Ee(d),S=en(f,y),F=en(d,y);if(S.length+F.length===0)for(var T=0;T<w.length;++T)w[T]=m(p[T%p.length],v[T%v.length]);else{var L=function(O){var B=hl(O,b,x),V=B.slice(-C);S.forEach(function(H){return V[H]=0});var U=Vi(V,C,R),W=B.slice(-k);F.forEach(function(H){return W[H]=0});var G=Vi(W,k,I);w[O]=m(p[U],v[G])};for(T=0;T<w.length;++T)L(T)}return[w,y]}(o.shape,a.shape,s,u,o.dtype,function(f,d){var p=f-d;return p*p}),l=c[0],h=c[1];return{dataId:i.write(l,h,o.dtype),shape:h,dtype:o.dtype}}}];Ta<Pu.length;Ta++)Ni(Pu[Ta]);for(var Wn,rg=function(r){this.variableNames=["A"];var e=Xt(),t=r[0],n=r[1];this.outputShape=r,this.userCode=`
      void main() {
        ivec3 coords = getOutputCoords();
        int texR = coords[0];
        int texC = coords[1];
        int depth = coords[2];
        vec2 uv = (vec2(texC, texR) + halfCR) / vec2(`+n+".0, "+t+`.0);

        vec4 values = `+e.texture2D+`(A, uv);
        float value;
        if (depth == 0) {
          value = values.r;
        } else if (depth == 1) {
          value = values.g;
        } else if (depth == 2) {
          value = values.b;
        } else if (depth == 3) {
          value = values.a;
        }

        setOutput(floor(value * 255.0 + 0.5));
      }
    `},og=function(r){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0;var e=Xt(),t=r[0],n=r[1];this.outputShape=r,this.userCode=`
      void main() {
        ivec3 coords = getOutputCoords();
        int texR = coords[0];
        int texC = coords[1];
        int depth = coords[2];

        vec4 result = vec4(0.);

        for(int row=0; row<=1; row++) {
          for(int col=0; col<=1; col++) {
            texC = coords[1] + row;
            depth = coords[2] + col;

            vec2 uv = (vec2(texC, texR) + halfCR) /
                       vec2(`+n+".0, "+t+`.0);
            vec4 values = `+e.texture2D+`(A, uv);
            float value;
            if (depth == 0) {
              value = values.r;
            } else if (depth == 1) {
              value = values.g;
            } else if (depth == 2) {
              value = values.b;
            } else if (depth == 3) {
              value = values.a;
            }

            result[row * 2 + col] = floor(value * 255.0 + 0.5);
          }
        }

        `+e.output+` = result;
      }
    `},Fa=0,Ou=[{kernelName:"FromPixels",backendName:"webgl",kernelFunc:function(r){var e=r.inputs,t=r.backend,n=r.attrs,o=e.pixels,a=n.numChannels,i=typeof HTMLVideoElement<"u"&&o instanceof HTMLVideoElement,s=typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement,u=i?[o.videoWidth,o.videoHeight]:[o.width,o.height],c=u[0],l=u[1],h=[l,c],f=[l,c,a];(s||i)&&(Wn==null&&(Wn=document.createElement("canvas").getContext("2d")),Wn.canvas.width=c,Wn.canvas.height=l,Wn.drawImage(o,0,0,c,l),o=Wn.canvas);var d=t.makeTensorInfo(h,"int32");t.texData.get(d.dataId).usage=oe.PIXELS,t.gpgpu.uploadPixelDataToTexture(t.getTexture(d.dataId),o);var p=P().getBool("WEBGL_PACK")?new og(f):new rg(f),v=t.runWebGLProgram(p,[d],"int32");return t.disposeData(d.dataId),v}},{kernelName:"NonMaxSuppressionV5",backendName:"webgl",kernelFunc:function(r){var e=r.inputs,t=r.backend,n=r.attrs;Nr("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");var o=e,a=o.boxes,i=o.scores,s=n,u=s.maxOutputSize,c=s.iouThreshold,l=s.scoreThreshold,h=s.softNmsSigma,f=t,d=ra(f.readSync(a.dataId),f.readSync(i.dataId),u,c,l,h);return[d.selectedIndices,d.selectedScores]}},{kernelName:"Square",backendName:"webgl",kernelFunc:function(r){var e=r.inputs,t=r.backend,n=e.x,o=t,a=new at(n.shape,"return x * x;");return o.runWebGLProgram(a,[n],n.dtype)}},{kernelName:hr,backendName:"webgl",kernelFunc:function(r){var e=r.inputs,t=r.backend,n=e,o=n.a,a=n.b,i=t,s=P().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new Ge("return (a - b) * (a - b);",o.shape,a.shape):new kt("return (a - b) * (a - b);",o.shape,a.shape);return i.compileAndRun(s,[o,a])}}];Fa<Ou.length;Fa++)Ni(Ou[Fa]);for(var Na=0,Bu=[{kernelName:"Square",gradFunc:function(r,e){var t=e[0];return{x:function(){return r.mul(t.toFloat().mul(2))}}}},{kernelName:hr,gradFunc:function(r,e){var t=e[0],n=e[1],o=q(2);return{a:function(){return Kt(r,Kt(o,Bt(t,n)))},b:function(){return Kt(r,Kt(o,Bt(n,t)))}}}}];Na<Bu.length;Na++)tl(Bu[Na]);var ag=function(){function r(){}return r.prototype.fetch=function(e,t){return fetch(e,t)},r.prototype.now=function(){return performance.now()},r.prototype.encode=function(e,t){if(t!=="utf-8"&&t!=="utf8")throw new Error("Browser's encoder only supports utf-8, but got "+t);return this.textEncoder==null&&(this.textEncoder=new TextEncoder),this.textEncoder.encode(e)},r.prototype.decode=function(e,t){return new TextDecoder(t).decode(e)},r}();P().get("IS_BROWSER")&&P().setPlatform("browser",new ag);var Ma,ig=function(){return require("node-fetch")},sg=function(){function r(){this.util=require("util"),this.textEncoder=new this.util.TextEncoder}return r.prototype.fetch=function(e,t){return P().global.fetch!=null?P().global.fetch(e,t):(Ma==null&&(Ma=ig()),Ma(e,t))},r.prototype.now=function(){var e=process.hrtime();return 1e3*e[0]+e[1]/1e6},r.prototype.encode=function(e,t){if(t!=="utf-8"&&t!=="utf8")throw new Error("Node built-in encoder only supports utf-8, but got "+t);return this.textEncoder.encode(e)},r.prototype.decode=function(e,t){return e.length===0?"":new this.util.TextDecoder(t).decode(e)},r}();P().get("IS_NODE")&&P().setPlatform("node",new sg);var Pa={float32:4,int32:4,uint16:2,uint8:1,bool:1},ao=4;function Lu(r,e){for(var t={},n=0,o=function(s){var u=s.name,c=s.dtype,l=s.shape,h=Y(l),f=void 0;if("quantization"in s){var d=s.quantization;if(d.dtype!=="uint8"&&d.dtype!=="uint16")throw new Error("Weight "+s.name+" has unknown quantization dtype "+d.dtype+". Supported quantization dtypes are: 'uint8' and 'uint16'.");var p=Pa[d.dtype],v=r.slice(n,n+h*p),g=d.dtype==="uint8"?new Uint8Array(v):new Uint16Array(v);if(c==="float32")f=Float32Array.from(g,function(C){return C*d.scale+d.min});else{if(c!=="int32")throw new Error("Unsupported dtype in weight '"+u+"': "+c);f=Int32Array.from(g,function(C){return Math.round(C*d.scale+d.min)})}n+=h*p}else if(c==="string"){var m=Y(s.shape);f=[];for(var y=0;y<m;y++){var b=new Uint32Array(r.slice(n,n+ao))[0];n+=ao;var x=new Uint8Array(r.slice(n,n+b));f.push(x),n+=b}}else{var w=Pa[c];if(v=r.slice(n,n+h*w),c==="float32")f=new Float32Array(v);else if(c==="int32")f=new Int32Array(v);else{if(c!=="bool")throw new Error("Unsupported dtype in weight '"+u+"': "+c);f=new Uint8Array(v)}n+=h*w}t[u]=Ht(f,l,c)},a=0,i=e;a<i.length;a++)o(i[a]);return t}function ug(r){if(r===null)throw new Error("Invalid input value: "+JSON.stringify(r));var e=0,t=[];r.forEach(function(a){if(e+=a.byteLength,t.push(a.byteLength===a.buffer.byteLength?a:new a.constructor(a)),!(a instanceof Float32Array||a instanceof Int32Array||a instanceof Uint8Array))throw new Error("Unsupported TypedArray subtype: "+a.constructor.name)});var n=new Uint8Array(e),o=0;return t.forEach(function(a){n.set(new Uint8Array(a.buffer),o),o+=a.byteLength}),n.buffer}var Oa=typeof Buffer<"u"&&(typeof Blob>"u"||typeof atob>"u"||typeof btoa>"u");function Wu(r){return Oa?Buffer.byteLength(r):new Blob([r]).size}function Ba(r){var e=0;r.forEach(function(o){e+=o.byteLength});var t=new Uint8Array(e),n=0;return r.forEach(function(o){t.set(new Uint8Array(o),n),n+=o.byteLength}),t.buffer}function Uu(r){for(r=r.trim();r.endsWith("/");)r=r.slice(0,r.length-1);var e=r.split("/");return e[e.length-1]}function vr(r){if(r.modelTopology instanceof ArrayBuffer)throw new Error("Expected JSON model topology, received ArrayBuffer.");return{dateSaved:new Date,modelTopologyType:"JSON",modelTopologyBytes:r.modelTopology==null?0:Wu(JSON.stringify(r.modelTopology)),weightSpecsBytes:r.weightSpecs==null?0:Wu(JSON.stringify(r.weightSpecs)),weightDataBytes:r.weightData==null?0:r.weightData.byteLength}}var ue=function(){function r(){this.saveRouters=[],this.loadRouters=[]}return r.getInstance=function(){return r.instance==null&&(r.instance=new r),r.instance},r.registerSaveRouter=function(e){r.getInstance().saveRouters.push(e)},r.registerLoadRouter=function(e){r.getInstance().loadRouters.push(e)},r.getSaveHandlers=function(e){return r.getHandlers(e,"save")},r.getLoadHandlers=function(e,t){return r.getHandlers(e,"load",t)},r.getHandlers=function(e,t,n){var o=[];return(t==="load"?r.getInstance().loadRouters:r.getInstance().saveRouters).forEach(function(a){var i=a(e,n);i!==null&&o.push(i)}),o},r}(),Un="://",rn=function(){function r(){this.managers={}}return r.getInstance=function(){return r.instance==null&&(r.instance=new r),r.instance},r.registerManager=function(e,t){_(e!=null,function(){return"scheme must not be undefined or null."}),e.endsWith(Un)&&(e=e.slice(0,e.indexOf(Un))),_(e.length>0,function(){return"scheme must not be an empty string."});var n=r.getInstance();_(n.managers[e]==null,function(){return"A model store manager is already registered for scheme '"+e+"'."}),n.managers[e]=t},r.getManager=function(e){var t=this.getInstance().managers[e];if(t==null)throw new Error("Cannot find model manager for scheme '"+e+"'");return t},r.getSchemes=function(){return Object.keys(this.getInstance().managers)},r}();function io(r){if(r.indexOf(Un)===-1)throw new Error("The url string provided does not contain a scheme. Supported schemes are: "+rn.getSchemes().join(","));return{scheme:r.split(Un)[0],path:r.split(Un)[1]}}function zu(r,e,t){return t===void 0&&(t=!1),K(this,void 0,void 0,function(){var n,o,a,i,s,u,c,l,h;return $(this,function(f){switch(f.label){case 0:return _(r!==e,function(){return"Old path and new path are the same: '"+r+"'"}),_((n=ue.getLoadHandlers(r)).length>0,function(){return"Copying failed because no load handler is found for source URL "+r+"."}),_(n.length<2,function(){return"Copying failed because more than one ("+n.length+") load handlers for source URL "+r+"."}),o=n[0],_((a=ue.getSaveHandlers(e)).length>0,function(){return"Copying failed because no save handler is found for destination URL "+e+"."}),_(a.length<2,function(){return"Copying failed because more than one ("+n.length+") save handlers for destination URL "+e+"."}),i=a[0],s=io(r).scheme,u=io(r).path,c=s===io(r).scheme,[4,o.load()];case 1:return l=f.sent(),t&&c?[4,rn.getManager(s).removeModel(u)]:[3,3];case 2:f.sent(),f.label=3;case 3:return[4,i.save(l)];case 4:return h=f.sent(),!t||c?[3,6]:[4,rn.getManager(s).removeModel(u)];case 5:f.sent(),f.label=6;case 6:return[2,h.modelArtifactsInfo]}})})}var wn="models_store",on="model_info_store";function Vu(){if(!P().getBool("IS_BROWSER"))throw new Error("Failed to obtain IndexedDB factory because the current environmentis not a web browser.");var r=window||self,e=r.indexedDB||r.mozIndexedDB||r.webkitIndexedDB||r.msIndexedDB||r.shimIndexedDB;if(e==null)throw new Error("The current browser does not appear to support IndexedDB.");return e}function La(r){var e=r.result;e.createObjectStore(wn,{keyPath:"modelPath"}),e.createObjectStore(on,{keyPath:"modelPath"})}var zn=function(){function r(e){if(this.indexedDB=Vu(),e==null||!e)throw new Error("For IndexedDB, modelPath must not be null, undefined or empty.");this.modelPath=e}return r.prototype.save=function(e){return K(this,void 0,void 0,function(){return $(this,function(t){if(e.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");return[2,this.databaseAction(this.modelPath,e)]})})},r.prototype.load=function(){return K(this,void 0,void 0,function(){return $(this,function(e){return[2,this.databaseAction(this.modelPath)]})})},r.prototype.databaseAction=function(e,t){var n=this;return new Promise(function(o,a){var i=n.indexedDB.open("tensorflowjs",1);i.onupgradeneeded=function(){return La(i)},i.onsuccess=function(){var s=i.result;if(t==null){var u=s.transaction(wn,"readonly"),c=u.objectStore(wn).get(n.modelPath);c.onsuccess=function(){if(c.result==null)return s.close(),a(new Error("Cannot find model with path '"+n.modelPath+"' in IndexedDB."));o(c.result.modelArtifacts)},c.onerror=function(v){return s.close(),a(c.error)},u.oncomplete=function(){return s.close()}}else{var l,h=vr(t),f=s.transaction(on,"readwrite"),d=f.objectStore(on),p=d.put({modelPath:n.modelPath,modelArtifactsInfo:h});p.onsuccess=function(){var v=(l=s.transaction(wn,"readwrite")).objectStore(wn).put({modelPath:n.modelPath,modelArtifacts:t,modelArtifactsInfo:h});v.onsuccess=function(){return o({modelArtifactsInfo:h})},v.onerror=function(g){var m=(d=f.objectStore(on)).delete(n.modelPath);m.onsuccess=function(){return s.close(),a(v.error)},m.onerror=function(y){return s.close(),a(v.error)}}},p.onerror=function(v){return s.close(),a(p.error)},f.oncomplete=function(){l==null?s.close():l.oncomplete=function(){return s.close()}}}},i.onerror=function(s){return a(i.error)}})},r.URL_SCHEME="indexeddb://",r}(),Gu=function(r){return P().getBool("IS_BROWSER")&&!Array.isArray(r)&&r.startsWith(zn.URL_SCHEME)?(e=r.slice(zn.URL_SCHEME.length),new zn(e)):null;var e};ue.registerSaveRouter(Gu),ue.registerLoadRouter(Gu);var cg=function(){function r(){this.indexedDB=Vu()}return r.prototype.listModels=function(){return K(this,void 0,void 0,function(){var e=this;return $(this,function(t){return[2,new Promise(function(n,o){var a=e.indexedDB.open("tensorflowjs",1);a.onupgradeneeded=function(){return La(a)},a.onsuccess=function(){var i=a.result,s=i.transaction(on,"readonly"),u=s.objectStore(on).getAll();u.onsuccess=function(){for(var c={},l=0,h=u.result;l<h.length;l++){var f=h[l];c[f.modelPath]=f.modelArtifactsInfo}n(c)},u.onerror=function(c){return i.close(),o(u.error)},s.oncomplete=function(){return i.close()}},a.onerror=function(i){return o(a.error)}})]})})},r.prototype.removeModel=function(e){return K(this,void 0,void 0,function(){var t=this;return $(this,function(n){var o;return e=(o=e).startsWith(zn.URL_SCHEME)?o.slice(zn.URL_SCHEME.length):o,[2,new Promise(function(a,i){var s=t.indexedDB.open("tensorflowjs",1);s.onupgradeneeded=function(){return La(s)},s.onsuccess=function(){var u,c=s.result,l=c.transaction(on,"readwrite"),h=l.objectStore(on),f=h.get(e);f.onsuccess=function(){if(f.result==null)return c.close(),i(new Error("Cannot find model with path '"+e+"' in IndexedDB."));var d=h.delete(e),p=function(){var v=(u=c.transaction(wn,"readwrite")).objectStore(wn).delete(e);v.onsuccess=function(){return a(f.result.modelArtifactsInfo)},v.onerror=function(g){return i(f.error)}};d.onsuccess=p,d.onerror=function(v){return p(),c.close(),i(f.error)}},f.onerror=function(d){return c.close(),i(f.error)},l.oncomplete=function(){u==null?c.close():u.oncomplete=function(){return c.close()}}},s.onerror=function(u){return i(s.error)}})]})})},r}();if(P().getBool("IS_BROWSER"))try{rn.registerManager(zn.URL_SCHEME,new cg)}catch{}var qe="/",Vn="tensorflowjs_models",Hu="info",lg="model_topology",hg="weight_specs",fg="weight_data",dg="model_metadata";function qu(r){return{info:[Vn,r,Hu].join(qe),topology:[Vn,r,lg].join(qe),weightSpecs:[Vn,r,hg].join(qe),weightData:[Vn,r,fg].join(qe),modelMetadata:[Vn,r,dg].join(qe)}}function pg(r){var e=r.split(qe);if(e.length<3)throw new Error("Invalid key format: "+r);return e.slice(1,e.length-1).join(qe)}var Gn=function(){function r(e){if(!P().getBool("IS_BROWSER")||typeof window>"u"||window.localStorage===void 0)throw new Error("The current environment does not support local storage.");if(this.LS=window.localStorage,e==null||!e)throw new Error("For local storage, modelPath must not be null, undefined or empty.");this.modelPath=e,this.keys=qu(this.modelPath)}return r.prototype.save=function(e){return K(this,void 0,void 0,function(){var t,n,o;return $(this,function(a){if(e.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");t=JSON.stringify(e.modelTopology),n=JSON.stringify(e.weightSpecs),o=vr(e);try{return this.LS.setItem(this.keys.info,JSON.stringify(o)),this.LS.setItem(this.keys.topology,t),this.LS.setItem(this.keys.weightSpecs,n),this.LS.setItem(this.keys.weightData,function(i){if(Oa)return Buffer.from(i).toString("base64");for(var s=new Uint8Array(i),u="",c=0,l=s.length;c<l;c++)u+=String.fromCharCode(s[c]);return btoa(u)}(e.weightData)),this.LS.setItem(this.keys.modelMetadata,JSON.stringify({format:e.format,generatedBy:e.generatedBy,convertedBy:e.convertedBy,userDefinedMetadata:e.userDefinedMetadata})),[2,{modelArtifactsInfo:o}]}catch{throw this.LS.removeItem(this.keys.info),this.LS.removeItem(this.keys.topology),this.LS.removeItem(this.keys.weightSpecs),this.LS.removeItem(this.keys.weightData),this.LS.removeItem(this.keys.modelMetadata),new Error("Failed to save model '"+this.modelPath+"' to local storage: size quota being exceeded is a possible cause of this failure: modelTopologyBytes="+o.modelTopologyBytes+", weightSpecsBytes="+o.weightSpecsBytes+", weightDataBytes="+o.weightDataBytes+".")}return[2]})})},r.prototype.load=function(){return K(this,void 0,void 0,function(){var e,t,n,o,a,i,s;return $(this,function(u){if((e=JSON.parse(this.LS.getItem(this.keys.info)))==null)throw new Error("In local storage, there is no model with name '"+this.modelPath+"'");if(e.modelTopologyType!=="JSON")throw new Error("BrowserLocalStorage does not support loading non-JSON model topology yet.");if(t={},(n=JSON.parse(this.LS.getItem(this.keys.topology)))==null)throw new Error("In local storage, the topology of model '"+this.modelPath+"' is missing.");if(t.modelTopology=n,(o=JSON.parse(this.LS.getItem(this.keys.weightSpecs)))==null)throw new Error("In local storage, the weight specs of model '"+this.modelPath+"' are missing.");if(t.weightSpecs=o,(a=this.LS.getItem(this.keys.modelMetadata))!=null&&(i=JSON.parse(a),t.format=i.format,t.generatedBy=i.generatedBy,t.convertedBy=i.convertedBy,t.userDefinedMetadata=i.userDefinedMetadata),(s=this.LS.getItem(this.keys.weightData))==null)throw new Error("In local storage, the binary weight values of model '"+this.modelPath+"' are missing.");return t.weightData=function(c){if(Oa){var l=Buffer.from(c,"base64");return l.buffer.slice(l.byteOffset,l.byteOffset+l.byteLength)}for(var h=atob(c),f=new Uint8Array(h.length),d=0;d<h.length;++d)f.set([h.charCodeAt(d)],d);return f.buffer}(s),[2,t]})})},r.URL_SCHEME="localstorage://",r}(),ju=function(r){return P().getBool("IS_BROWSER")&&!Array.isArray(r)&&r.startsWith(Gn.URL_SCHEME)?(e=r.slice(Gn.URL_SCHEME.length),new Gn(e)):null;var e};ue.registerSaveRouter(ju),ue.registerLoadRouter(ju);var vg=function(){function r(){_(P().getBool("IS_BROWSER"),function(){return"Current environment is not a web browser"}),_(typeof window>"u"||window.localStorage!==void 0,function(){return"Current browser does not appear to support localStorage"}),this.LS=window.localStorage}return r.prototype.listModels=function(){return K(this,void 0,void 0,function(){var e,t,n,o,a,i;return $(this,function(s){for(e={},t=Vn+qe,n=qe+Hu,o=0;o<this.LS.length;++o)(a=this.LS.key(o)).startsWith(t)&&a.endsWith(n)&&(i=pg(a),e[i]=JSON.parse(this.LS.getItem(a)));return[2,e]})})},r.prototype.removeModel=function(e){return K(this,void 0,void 0,function(){var t,n;return $(this,function(o){var a;if(e=(a=e).startsWith(Gn.URL_SCHEME)?a.slice(Gn.URL_SCHEME.length):a,t=qu(e),this.LS.getItem(t.info)==null)throw new Error("Cannot find model at path '"+e+"'");return n=JSON.parse(this.LS.getItem(t.info)),this.LS.removeItem(t.info),this.LS.removeItem(t.topology),this.LS.removeItem(t.weightSpecs),this.LS.removeItem(t.weightData),[2,n]})})},r}();if(P().getBool("IS_BROWSER"))try{rn.registerManager(Gn.URL_SCHEME,new vg)}catch{}var gg="model",mg=".json",yg=".weights.bin";function Xu(r){return new Promise(function(e){return setTimeout(e)}).then(r)}var Wa=function(){function r(e){if(!P().getBool("IS_BROWSER"))throw new Error("browserDownloads() cannot proceed because the current environment is not a browser.");e.startsWith(r.URL_SCHEME)&&(e=e.slice(r.URL_SCHEME.length)),e!=null&&e.length!==0||(e=gg),this.modelTopologyFileName=e+mg,this.weightDataFileName=e+yg}return r.prototype.save=function(e){return K(this,void 0,void 0,function(){var t,n,o,a,i,s;return $(this,function(u){switch(u.label){case 0:if(typeof document>"u")throw new Error("Browser downloads are not supported in this environment since `document` is not present");if(t=window.URL.createObjectURL(new Blob([e.weightData],{type:"application/octet-stream"})),!(e.modelTopology instanceof ArrayBuffer))return[3,1];throw new Error("BrowserDownloads.save() does not support saving model topology in binary formats yet.");case 1:return n=[{paths:["./"+this.weightDataFileName],weights:e.weightSpecs}],o={modelTopology:e.modelTopology,format:e.format,generatedBy:e.generatedBy,convertedBy:e.convertedBy,weightsManifest:n},a=window.URL.createObjectURL(new Blob([JSON.stringify(o)],{type:"application/json"})),(i=this.jsonAnchor==null?document.createElement("a"):this.jsonAnchor).download=this.modelTopologyFileName,i.href=a,[4,Xu(function(){return i.dispatchEvent(new MouseEvent("click"))})];case 2:return u.sent(),e.weightData==null?[3,4]:((s=this.weightDataAnchor==null?document.createElement("a"):this.weightDataAnchor).download=this.weightDataFileName,s.href=t,[4,Xu(function(){return s.dispatchEvent(new MouseEvent("click"))})]);case 3:u.sent(),u.label=4;case 4:return[2,{modelArtifactsInfo:vr(e)}]}})})},r.URL_SCHEME="downloads://",r}(),xg=function(){function r(e){if(e==null||e.length<1)throw new Error("When calling browserFiles, at least 1 file is required, but received "+e);this.files=e}return r.prototype.load=function(){return K(this,void 0,void 0,function(){var e,t,n=this;return $(this,function(o){return e=this.files[0],t=this.files.slice(1),[2,new Promise(function(a,i){var s=new FileReader;s.onload=function(u){var c=JSON.parse(u.target.result),l=c.modelTopology;if(l!=null){t.length===0&&a({modelTopology:l});var h=c.weightsManifest;if(h!=null){var f;try{f=n.checkManifestAndWeightFiles(h,t)}catch(g){return void i(g)}var d=[],p=[],v=[];h.forEach(function(g){g.paths.forEach(function(m){p.push(m),v.push(null)}),d.push.apply(d,g.weights)}),h.forEach(function(g){g.paths.forEach(function(m){var y=new FileReader;y.onload=function(b){var x=b.target.result,w=p.indexOf(m);v[w]=x,v.indexOf(null)===-1&&a({modelTopology:l,weightSpecs:d,weightData:Ba(v),format:c.format,generatedBy:c.generatedBy,convertedBy:c.convertedBy,userDefinedMetadata:c.userDefinedMetadata})},y.onerror=function(b){return i("Failed to weights data from file of path '"+m+"'.")},y.readAsArrayBuffer(f[m])})})}else i(new Error("weightManifest field is missing from file "+e.name))}else i(new Error("modelTopology field is missing from file "+e.name))},s.onerror=function(u){return i("Failed to read model topology and weights manifest JSON from file '"+e.name+"'. BrowserFiles supports loading Keras-style tf.Model artifacts only.")},s.readAsText(e)})]})})},r.prototype.checkManifestAndWeightFiles=function(e,t){for(var n=[],o=t.map(function(u){return Uu(u.name)}),a={},i=0,s=e;i<s.length;i++)s[i].paths.forEach(function(u){var c=Uu(u);if(n.indexOf(c)!==-1)throw new Error("Duplicate file basename found in weights manifest: '"+c+"'");if(n.push(c),o.indexOf(c)===-1)throw new Error("Weight file with basename '"+c+"' is not provided.");a[u]=t[o.indexOf(c)]});if(n.length!==t.length)throw new Error("Mismatch in the number of files in weights manifest ("+n.length+") and the number of weight files provided ("+t.length+").");return a},r}();function Ku(r,e,t,n){(function(a){_(a!=null&&Array.isArray(a)&&a.length>0,function(){return"promises must be a none empty array"})})(r),function(a,i){_(a>=0&&a<=1,function(){return"Progress fraction must be in range [0, 1], but got startFraction "+a}),_(i>=0&&i<=1,function(){return"Progress fraction must be in range [0, 1], but got endFraction "+i}),_(i>=a,function(){return"startFraction must be no more than endFraction, but got startFraction "+a+" and endFraction "+i})}(t=t??0,n=n??1);var o=0;return Promise.all(r.map(function(a){return a.then(function(i){var s=t+ ++o/r.length*(n-t);return e(s),i}),a}))}function $u(r,e){return K(this,void 0,void 0,function(){var t,n,o,a,i,s,u,c,l;return $(this,function(h){switch(h.label){case 0:return e==null&&(e={}),t=e.fetchFunc==null?P().platform.fetch:e.fetchFunc,n=r.map(function(f){return t(f,e.requestInit,{isBinary:!0})}),o=0,a=.5,e.onProgress!=null?[3,2]:[4,Promise.all(n)];case 1:return i=h.sent(),[3,4];case 2:return[4,Ku(n,e.onProgress,o,a)];case 3:i=h.sent(),h.label=4;case 4:return s=i.map(function(f){return f.arrayBuffer()}),u=.5,c=1,e.onProgress!=null?[3,6]:[4,Promise.all(s)];case 5:return l=h.sent(),[3,8];case 6:return[4,Ku(s,e.onProgress,u,c)];case 7:l=h.sent(),h.label=8;case 8:return[2,l]}})})}function Yu(r){var e=this;return function(t,n,o){return n===void 0&&(n=""),K(e,void 0,void 0,function(){var a,i,s,u,c,l,h,f,d,p;return $(this,function(v){switch(v.label){case 0:if(a=t.map(function(){return!1}),i={},s=o!=null?o.map(function(){return!1}):[],u=[],t.forEach(function(g,m){var y=0;g.weights.forEach(function(b){var x="quantization"in b?b.quantization.dtype:b.dtype,w=Pa[x]*Y(b.shape),C=function(){a[m]=!0,i[m]==null&&(i[m]=[]),i[m].push({manifestEntry:b,groupOffset:y,sizeBytes:w})};o!=null?o.forEach(function(k,R){k===b.name&&(C(),s[R]=!0)}):C(),u.push(b.name),y+=w})}),!s.every(function(g){return g}))throw c=o.filter(function(g,m){return!s[m]}),new Error("Could not find weights in manifest with names: "+c.join(", ")+`. 
Manifest JSON has weights with names: `+u.join(", ")+".");return l=a.reduce(function(g,m,y){return m&&g.push(y),g},[]),h=[],l.forEach(function(g){t[g].paths.forEach(function(m){var y=n+(n.endsWith("/")?"":"/")+m;h.push(y)})}),[4,r(h)];case 1:return f=v.sent(),d={},p=0,l.forEach(function(g){for(var m=t[g].paths.length,y=0,b=0;b<m;b++)y+=f[p+b].byteLength;for(var x=new ArrayBuffer(y),w=new Uint8Array(x),C=0,k=0;k<m;k++){var R=new Uint8Array(f[p+k]);w.set(R,C),C+=R.byteLength}i[g].forEach(function(I){var S=Lu(x.slice(I.groupOffset,I.groupOffset+I.sizeBytes),[I.manifestEntry]);for(var F in S)d[F]=S[F]}),p+=m}),[2,d]}})})}}ue.registerSaveRouter(function(r){return P().getBool("IS_BROWSER")&&!Array.isArray(r)&&r.startsWith(Wa.URL_SCHEME)?function(e){return e===void 0&&(e="model"),new Wa(e)}(r.slice(Wa.URL_SCHEME.length)):null});var Ju=function(){function r(e,t){if(this.DEFAULT_METHOD="POST",t==null&&(t={}),this.weightPathPrefix=t.weightPathPrefix,this.onProgress=t.onProgress,t.fetchFunc!=null?(_(typeof t.fetchFunc=="function",function(){return"Must pass a function that matches the signature of `fetch` (see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)"}),this.fetch=t.fetchFunc):this.fetch=P().platform.fetch,_(e!=null&&e.length>0,function(){return"URL path for http must not be null, undefined or empty."}),Array.isArray(e)&&_(e.length===2,function(){return"URL paths for http must have a length of 2, (actual length is "+e.length+")."}),this.path=e,t.requestInit!=null&&t.requestInit.body!=null)throw new Error("requestInit is expected to have no pre-existing body, but has one.");this.requestInit=t.requestInit||{}}return r.prototype.save=function(e){return K(this,void 0,void 0,function(){var t,n,o,a;return $(this,function(i){switch(i.label){case 0:if(e.modelTopology instanceof ArrayBuffer)throw new Error("BrowserHTTPRequest.save() does not support saving model topology in binary formats yet.");return(t=Object.assign({method:this.DEFAULT_METHOD},this.requestInit)).body=new FormData,n=[{paths:["./model.weights.bin"],weights:e.weightSpecs}],o={modelTopology:e.modelTopology,format:e.format,generatedBy:e.generatedBy,convertedBy:e.convertedBy,userDefinedMetadata:e.userDefinedMetadata,weightsManifest:n},t.body.append("model.json",new Blob([JSON.stringify(o)],{type:"application/json"}),"model.json"),e.weightData!=null&&t.body.append("model.weights.bin",new Blob([e.weightData],{type:"application/octet-stream"}),"model.weights.bin"),[4,this.fetch(this.path,t)];case 1:if((a=i.sent()).ok)return[2,{modelArtifactsInfo:vr(e),responses:[a]}];throw new Error("BrowserHTTPRequest.save() failed due to HTTP response status "+a.status+".")}})})},r.prototype.load=function(){return K(this,void 0,void 0,function(){var e,t,n,o,a,i,s,u,c,l,h,f;return $(this,function(d){switch(d.label){case 0:return[4,this.fetch(this.path,this.requestInit)];case 1:if(!(e=d.sent()).ok)throw new Error("Request to "+this.path+" failed with status code "+e.status+". Please verify this URL points to the model JSON of the model to load.");d.label=2;case 2:return d.trys.push([2,4,,5]),[4,e.json()];case 3:return t=d.sent(),[3,5];case 4:throw d.sent(),n="Failed to parse model JSON of response from "+this.path+".",this.path.endsWith(".pb")?n+=" Your path contains a .pb file extension. Support for .pb models have been removed in TensorFlow.js 1.0 in favor of .json models. You can re-convert your Python TensorFlow model using the TensorFlow.js 1.0 conversion scripts or you can convert your.pb models with the 'pb2json'NPM script in the tensorflow/tfjs-converter repository.":n+=" Please make sure the server is serving valid JSON for this request.",new Error(n);case 5:if(o=t.modelTopology,a=t.weightsManifest,i=t.generatedBy,s=t.convertedBy,u=t.format,c=t.userDefinedMetadata,o==null&&a==null)throw new Error("The JSON from HTTP path "+this.path+" contains neither model topology or manifest for weights.");return a==null?[3,7]:[4,this.loadWeights(a)];case 6:f=d.sent(),l=f[0],h=f[1],d.label=7;case 7:return[2,{modelTopology:o,weightSpecs:l,weightData:h,userDefinedMetadata:c,generatedBy:i,convertedBy:s,format:u}]}})})},r.prototype.loadWeights=function(e){return K(this,void 0,void 0,function(){var t,n,o,a,i,s,u,c,l,h,f;return $(this,function(d){switch(d.label){case 0:for(t=Array.isArray(this.path)?this.path[1]:this.path,n=function(p){var v=p.lastIndexOf("/"),g=p.lastIndexOf("?"),m=p.substring(0,v),y=g>v?p.substring(g):"";return[m+"/",y]}(t),o=n[0],a=n[1],i=this.weightPathPrefix||o,s=[],u=0,c=e;u<c.length;u++)l=c[u],s.push.apply(s,l.weights);return h=[],e.forEach(function(p){p.paths.forEach(function(v){h.push(i+v+a)})}),[4,$u(h,{requestInit:this.requestInit,fetchFunc:this.fetch,onProgress:this.onProgress})];case 1:return f=d.sent(),[2,[s,Ba(f)]]}})})},r.URL_SCHEME_REGEX=/^https?:\/\//,r}();function Ua(r){return r.match(Ju.URL_SCHEME_REGEX)!=null}var Qu=function(r,e){return typeof fetch>"u"?null:(Array.isArray(r)?r.every(function(t){return Ua(t)}):Ua(r))?za(r,{onProgress:e}):null};function za(r,e){return new Ju(r,e)}ue.registerSaveRouter(Qu),ue.registerLoadRouter(Qu);var Va=function(){function r(e){this.modelArtifacts=e}return r.prototype.load=function(){return K(this,void 0,void 0,function(){return $(this,function(e){return[2,this.modelArtifacts]})})},r}(),bg=function(){function r(e){this.saveHandler=e}return r.prototype.save=function(e){return K(this,void 0,void 0,function(){return $(this,function(t){return[2,this.saveHandler(e)]})})},r}(),Zu=Object.freeze({browserFiles:function(r){return new xg(r)},browserHTTPRequest:function(r,e){return za(r,e)},concatenateArrayBuffers:Ba,decodeWeights:Lu,encodeWeights:function(r,e){return K(this,void 0,void 0,function(){var t,n,o,a,i,s=this;return $(this,function(u){switch(u.label){case 0:for(t=[],n=[],o=Array.isArray(r)?r.map(function(c){return c.name}):Object.keys(r),a=function(c){var l=o[c],h=Array.isArray(r)?r[c].tensor:r[l];if(h.dtype!=="float32"&&h.dtype!=="int32"&&h.dtype!=="bool"&&h.dtype!=="string")throw new Error("Unsupported dtype in weight '"+l+"': "+h.dtype);var f={name:l,shape:h.shape,dtype:h.dtype};if(h.dtype==="string"){var d=new Promise(function(p){return K(s,void 0,void 0,function(){var v,g,m,y,b,x,w;return $(this,function(C){switch(C.label){case 0:return[4,h.bytes()];case 1:for(v=C.sent(),g=v.reduce(function(k,R){return k+R.length},0)+ao*v.length,m=new Uint8Array(g),y=0,b=0;b<v.length;b++)x=v[b],w=new Uint8Array(new Uint32Array([x.length]).buffer),m.set(w,y),y+=ao,m.set(x,y),y+=x.length;return p(m),[2]}})})});n.push(d)}else n.push(h.data());e!=null&&(f.group=e),t.push(f)},i=0;i<o.length;++i)a(i);return[4,Promise.all(n)];case 1:return[2,{data:ug(u.sent()),specs:t}]}})})},fromMemory:function(r,e,t,n){return arguments.length===1?r.modelTopology!=null||r.weightSpecs!=null?new Va(r):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new Va({modelTopology:r})):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new Va({modelTopology:r,weightSpecs:e,weightData:t,trainingConfig:n}))},getLoadHandlers:function(r,e){return ue.getLoadHandlers(r,e)},getModelArtifactsInfoForJSON:vr,getSaveHandlers:function(r){return ue.getSaveHandlers(r)},http:za,isHTTPScheme:Ua,loadWeights:function(r,e,t,n){return e===void 0&&(e=""),K(this,void 0,void 0,function(){return $(this,function(o){return[2,Yu(function(a){return $u(a,{requestInit:n})})(r,e,t)]})})},registerLoadRouter:function(r){return ue.registerLoadRouter(r)},registerSaveRouter:function(r){return ue.registerSaveRouter(r)},weightsLoaderFactory:Yu,withSaveHandler:function(r){return new bg(r)},copyModel:function(r,e){return K(this,void 0,void 0,function(){return $(this,function(t){return[2,zu(r,e,!1)]})})},listModels:function(){return K(this,void 0,void 0,function(){var r,e,t,n,o,a,i;return $(this,function(s){switch(s.label){case 0:r=rn.getSchemes(),e={},t=0,n=r,s.label=1;case 1:return t<n.length?(o=n[t],[4,rn.getManager(o).listModels()]):[3,4];case 2:for(i in a=s.sent())e[o+Un+i]=a[i];s.label=3;case 3:return t++,[3,1];case 4:return[2,e]}})})},moveModel:function(r,e){return K(this,void 0,void 0,function(){return $(this,function(t){return[2,zu(r,e,!0)]})})},removeModel:function(r){return K(this,void 0,void 0,function(){var e;return $(this,function(t){return e=io(r),[2,rn.getManager(e.scheme).removeModel(e.path)]})})}}),Hn;D({confusionMatrix_:function(r,e,t){var n=E(r,"labels","confusionMatrix"),o=E(e,"predictions","confusionMatrix");_(t==null||t>0&&Number.isInteger(t),function(){return"If provided, numClasses must be a positive integer, but got "+t}),_(n.rank===1,function(){return"Expected the rank of labels to be 1, but got "+n.rank}),_(o.rank===1,function(){return"Expected the rank of predictions to be 1, but got "+o.rank}),_(n.shape[0]===o.shape[0],function(){return"Mismatch in the number of examples: "+n.shape[0]+" vs. "+o.shape[0]+". Labels and predictions should have the same number of elements."}),_(t>0&&Number.isInteger(t),function(){return"numClasses is required to be a positive integer, but got "+t});var a=$o(n.asType("int32"),t),i=$o(o.asType("int32"),t);return a.transpose().matMul(i).asType("int32")}});var wg=D({fromPixels_:function(r,e){if(e===void 0&&(e=3),e>4)throw new Error("Cannot construct Tensor with more than 4 channels from pixels.");if(r==null)throw new Error("pixels passed to tf.browser.fromPixels() can not be null");var t=!1,n=!1,o=!1,a=!1,i=!1;if(r.data instanceof Uint8Array)t=!0;else if(typeof ImageData<"u"&&r instanceof ImageData)n=!0;else if(typeof HTMLVideoElement<"u"&&r instanceof HTMLVideoElement)o=!0;else if(typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement)a=!0;else{if(r.getContext==null)throw new Error("pixels passed to tf.browser.fromPixels() must be either an HTMLVideoElement, HTMLImageElement, HTMLCanvasElement, ImageData in browser, or OffscreenCanvas, ImageData in webworker or {data: Uint32Array, width: number, height: number}, but was "+r.constructor.name);i=!0}if(o&&o&&r.readyState<2)throw new Error("The video element has not loaded data yet. Please wait for `loadeddata` event on the <video> element.");if(Ti("FromPixels",A.backendName)!=null)return A.runKernel("FromPixels",{pixels:r},{numChannels:e});var s,u,c=o?[r.videoWidth,r.videoHeight]:[r.width,r.height],l=c[0],h=c[1];if(i?s=r.getContext("2d").getImageData(0,0,l,h).data:n||t?s=r.data:(a||o)&&(Hn==null&&(Hn=document.createElement("canvas").getContext("2d")),Hn.canvas.width=l,Hn.canvas.height=h,Hn.drawImage(r,0,0,l,h),s=Hn.getImageData(0,0,l,h).data),e===4)u=new Int32Array(s);else{var f=l*h;u=new Int32Array(f*e);for(var d=0;d<f;d++)for(var p=0;p<e;++p)u[d*e+p]=s[4*d+p]}return jo(u,[h,l,e],"int32")}}),Ga=Object.freeze({toPixels:function(r,e){return K(this,void 0,void 0,function(){var t,n,o,a,i,s,u,c,l,h,f,d,p,v,g,m,y,b,x,w,C,k,R;return $(this,function(I){switch(I.label){case 0:if(t=E(r,"img","toPixels"),r instanceof Et||(t=t.toInt()),t.rank!==2&&t.rank!==3)throw new Error("toPixels only supports rank 2 or 3 tensors, got rank "+t.rank+".");if(n=t.shape.slice(0,2),o=n[0],a=n[1],(i=t.rank===2?1:t.shape[2])>4||i===2)throw new Error("toPixels only supports depth of size 1, 3 or 4 but got "+i);return[4,t.data()];case 1:return s=I.sent(),u=t.min(),c=t.max(),[4,Promise.all([u.data(),c.data()])];case 2:if(l=I.sent(),h=l[0],f=l[1],d=h[0],p=f[0],u.dispose(),c.dispose(),t.dtype==="float32"){if(d<0||p>1)throw new Error("Tensor values for a float32 Tensor must be in the range [0 - 1] but got range ["+d+" - "+p+"].")}else{if(t.dtype!=="int32")throw new Error("Unsupported type for toPixels: "+t.dtype+". Please use float32 or int32 tensors.");if(d<0||p>255)throw new Error("Tensor values for a int32 Tensor must be in the range [0 - 255] but got range ["+d+" - "+p+"].")}for(v=t.dtype==="float32"?255:1,g=new Uint8ClampedArray(a*o*4),m=0;m<o*a;++m)y=void 0,b=void 0,x=void 0,w=void 0,i===1?(y=s[m]*v,b=s[m]*v,x=s[m]*v,w=255):i===3?(y=s[3*m]*v,b=s[3*m+1]*v,x=s[3*m+2]*v,w=255):i===4&&(y=s[4*m]*v,b=s[4*m+1]*v,x=s[4*m+2]*v,w=s[4*m+3]*v),g[(C=4*m)+0]=Math.round(y),g[C+1]=Math.round(b),g[C+2]=Math.round(x),g[C+3]=Math.round(w);return e!=null&&(e.width=a,e.height=o,k=e.getContext("2d"),R=new ImageData(g,a,o),k.putImageData(R,0,0)),t!==r&&t.dispose(),[2,g]}})})},fromPixels:wg}),Cg=function(){function r(){}return r.prototype.getClassName=function(){return this.constructor.className},r.fromConfig=function(e,t){return new e(t)},r}(),Eg=function(){function r(){this.classNameMap={}}return r.getMap=function(){return r.instance==null&&(r.instance=new r),r.instance},r.register=function(e){r.getMap().classNameMap[e.className]=[e,e.fromConfig]},r}();function Cn(r){_(r.className!=null,function(){return"Class being registered does not have the static className property defined."}),_(typeof r.className=="string",function(){return"className is required to be a string, but got type "+typeof r.className}),_(r.className.length>0,function(){return"Class being registered has an empty-string as its className, which is disallowed."}),Eg.register(r)}var En=function(r){function e(){return r!==null&&r.apply(this,arguments)||this}return qt(e,r),e.prototype.minimize=function(t,n,o){n===void 0&&(n=!1);var a=this.computeGradients(t,o),i=a.value,s=a.grads;if(o!=null){var u=o.map(function(c){return{name:c.name,tensor:s[c.name]}});this.applyGradients(u)}else this.applyGradients(s);return Qt(s),n?i:(i.dispose(),null)},Object.defineProperty(e.prototype,"iterations",{get:function(){return this.iterations_==null&&(this.iterations_=0),this.iterations_},enumerable:!0,configurable:!0}),e.prototype.incrementIterations=function(){this.iterations_=this.iterations+1},e.prototype.computeGradients=function(t,n){return Fh(t,n)},e.prototype.dispose=function(){this.iterations_!=null&&Qt(this.iterations_)},e.prototype.saveIterations=function(){return K(this,void 0,void 0,function(){return $(this,function(t){return this.iterations_==null&&(this.iterations_=0),[2,{name:"iter",tensor:q(this.iterations_,"int32")}]})})},e.prototype.getWeights=function(){return K(this,void 0,void 0,function(){return $(this,function(t){throw new Error("getWeights() is not implemented for this optimizer yet.")})})},e.prototype.setWeights=function(t){return K(this,void 0,void 0,function(){return $(this,function(n){throw new Error("setWeights() is not implemented for this optimizer class "+this.getClassName())})})},e.prototype.extractIterations=function(t){return K(this,void 0,void 0,function(){var n;return $(this,function(o){switch(o.label){case 0:return n=this,[4,t[0].tensor.data()];case 1:return n.iterations_=o.sent()[0],[2,t.slice(1)]}})})},e}(Cg);Object.defineProperty(En,Symbol.hasInstance,{value:function(r){return r.minimize!=null&&r.computeGradients!=null&&r.applyGradients!=null}});var _g=function(r){function e(t,n,o){o===void 0&&(o=null);var a=r.call(this)||this;return a.learningRate=t,a.rho=n,a.epsilon=o,a.accumulatedGrads=[],a.accumulatedUpdates=[],o==null&&(a.epsilon=A.backend.epsilon()),a}return qt(e,r),e.prototype.applyGradients=function(t){var n=this;(Array.isArray(t)?t.map(function(o){return o.name}):Object.keys(t)).forEach(function(o,a){var i=A.registeredVariables[o];n.accumulatedGrads[a]==null&&(n.accumulatedGrads[a]={originalName:o+"/accum_grad",variable:X(function(){return pt(i).variable(!1)})}),n.accumulatedUpdates[a]==null&&(n.accumulatedUpdates[a]={originalName:o+"/accum_var",variable:X(function(){return pt(i).variable(!1)})});var s=Array.isArray(t)?t[a].tensor:t[o];if(s!=null){var u=n.accumulatedGrads[a].variable,c=n.accumulatedUpdates[a].variable;X(function(){var l=u.mul(n.rho).add(s.square().mul(1-n.rho)),h=c.add(n.epsilon).sqrt().div(u.add(n.epsilon).sqrt()).mul(s),f=c.mul(n.rho).add(h.square().mul(1-n.rho));u.assign(l),c.assign(f);var d=h.mul(-n.learningRate).add(i);i.assign(d)})}}),this.incrementIterations()},e.prototype.dispose=function(){this.accumulatedUpdates!=null&&(Qt(this.accumulatedGrads.map(function(t){return t.variable})),Qt(this.accumulatedUpdates.map(function(t){return t.variable})))},e.prototype.getWeights=function(){return K(this,void 0,void 0,function(){var t;return $(this,function(n){switch(n.label){case 0:return t=this.accumulatedGrads.concat(this.accumulatedUpdates),[4,this.saveIterations()];case 1:return[2,[n.sent()].concat(t.map(function(o){return{name:o.originalName,tensor:o.variable}}))]}})})},e.prototype.setWeights=function(t){return K(this,void 0,void 0,function(){var n;return $(this,function(o){switch(o.label){case 0:return[4,this.extractIterations(t)];case 1:return t=o.sent(),n=t.length/2,this.accumulatedGrads=t.slice(0,n).map(function(a){return{originalName:a.name,variable:a.tensor.variable(!1)}}),this.accumulatedUpdates=t.slice(n,2*n).map(function(a){return{originalName:a.name,variable:a.tensor.variable(!1)}}),[2]}})})},e.prototype.getConfig=function(){return{learningRate:this.learningRate,rho:this.rho,epsilon:this.epsilon}},e.fromConfig=function(t,n){return new t(n.learningRate,n.rho,n.epsilon)},e.className="Adadelta",e}(En);Cn(_g);var Ig=function(r){function e(t,n){n===void 0&&(n=.1);var o=r.call(this)||this;return o.learningRate=t,o.initialAccumulatorValue=n,o.accumulatedGrads=[],o}return qt(e,r),e.prototype.applyGradients=function(t){var n=this;(Array.isArray(t)?t.map(function(o){return o.name}):Object.keys(t)).forEach(function(o,a){var i=A.registeredVariables[o];n.accumulatedGrads[a]==null&&(n.accumulatedGrads[a]={originalName:o+"/accumulator",variable:X(function(){return Ae(i.shape,n.initialAccumulatorValue).variable(!1)})});var s=Array.isArray(t)?t[a].tensor:t[o];if(s!=null){var u=n.accumulatedGrads[a].variable;X(function(){var c=u.add(s.square());u.assign(c);var l=s.div(c.add(A.backend.epsilon()).sqrt()).mul(-n.learningRate).add(i);i.assign(l)})}}),this.incrementIterations()},e.prototype.dispose=function(){this.accumulatedGrads!=null&&Qt(this.accumulatedGrads.map(function(t){return t.variable}))},e.prototype.getWeights=function(){return K(this,void 0,void 0,function(){return $(this,function(t){switch(t.label){case 0:return[4,this.saveIterations()];case 1:return[2,[t.sent()].concat(this.accumulatedGrads.map(function(n){return{name:n.originalName,tensor:n.variable}}))]}})})},e.prototype.setWeights=function(t){return K(this,void 0,void 0,function(){return $(this,function(n){switch(n.label){case 0:return[4,this.extractIterations(t)];case 1:return t=n.sent(),this.accumulatedGrads=t.map(function(o){return{originalName:o.name,variable:o.tensor.variable(!1)}}),[2]}})})},e.prototype.getConfig=function(){return{learningRate:this.learningRate,initialAccumulatorValue:this.initialAccumulatorValue}},e.fromConfig=function(t,n){return new t(n.learningRate,n.initialAccumulatorValue)},e.className="Adagrad",e}(En);Cn(Ig);var Sg=function(r){function e(t,n,o,a){a===void 0&&(a=null);var i=r.call(this)||this;return i.learningRate=t,i.beta1=n,i.beta2=o,i.epsilon=a,i.accumulatedFirstMoment=[],i.accumulatedSecondMoment=[],X(function(){i.accBeta1=q(n).variable(),i.accBeta2=q(o).variable()}),a==null&&(i.epsilon=A.backend.epsilon()),i}return qt(e,r),e.prototype.applyGradients=function(t){var n=this,o=Array.isArray(t)?t.map(function(a){return a.name}):Object.keys(t);X(function(){var a=Bt(1,n.accBeta1),i=Bt(1,n.accBeta2);o.forEach(function(s,u){var c=A.registeredVariables[s];n.accumulatedFirstMoment[u]==null&&(n.accumulatedFirstMoment[u]={originalName:s+"/m",variable:X(function(){return pt(c).variable(!1)})}),n.accumulatedSecondMoment[u]==null&&(n.accumulatedSecondMoment[u]={originalName:s+"/v",variable:X(function(){return pt(c).variable(!1)})});var l=Array.isArray(t)?t[u].tensor:t[s];if(l!=null){var h=n.accumulatedFirstMoment[u].variable,f=n.accumulatedSecondMoment[u].variable,d=h.mul(n.beta1).add(l.mul(1-n.beta1)),p=f.mul(n.beta2).add(l.square().mul(1-n.beta2)),v=d.div(a),g=p.div(i);h.assign(d),f.assign(p);var m=v.div(g.sqrt().add(n.epsilon)).mul(-n.learningRate).add(c);c.assign(m)}}),n.accBeta1.assign(n.accBeta1.mul(n.beta1)),n.accBeta2.assign(n.accBeta2.mul(n.beta2))}),this.incrementIterations()},e.prototype.dispose=function(){this.accBeta1.dispose(),this.accBeta2.dispose(),this.accumulatedFirstMoment!=null&&Qt(this.accumulatedFirstMoment.map(function(t){return t.variable})),this.accumulatedSecondMoment!=null&&Qt(this.accumulatedSecondMoment.map(function(t){return t.variable}))},e.prototype.getWeights=function(){return K(this,void 0,void 0,function(){var t;return $(this,function(n){switch(n.label){case 0:return t=this.accumulatedFirstMoment.concat(this.accumulatedSecondMoment),[4,this.saveIterations()];case 1:return[2,[n.sent()].concat(t.map(function(o){return{name:o.originalName,tensor:o.variable}}))]}})})},e.prototype.setWeights=function(t){return K(this,void 0,void 0,function(){var n,o=this;return $(this,function(a){switch(a.label){case 0:return[4,this.extractIterations(t)];case 1:return t=a.sent(),X(function(){o.accBeta1.assign(Zr(o.beta1,o.iterations_+1)),o.accBeta2.assign(Zr(o.beta2,o.iterations_+1))}),n=t.length/2,this.accumulatedFirstMoment=t.slice(0,n).map(function(i){return{originalName:i.name,variable:i.tensor.variable(!1)}}),this.accumulatedSecondMoment=t.slice(n,2*n).map(function(i){return{originalName:i.name,variable:i.tensor.variable(!1)}}),[2]}})})},e.prototype.getConfig=function(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon}},e.fromConfig=function(t,n){return new t(n.learningRate,n.beta1,n.beta2,n.epsilon)},e.className="Adam",e}(En);Cn(Sg);var Rg=function(r){function e(t,n,o,a,i){a===void 0&&(a=null),i===void 0&&(i=0);var s=r.call(this)||this;return s.learningRate=t,s.beta1=n,s.beta2=o,s.epsilon=a,s.decay=i,s.accumulatedFirstMoment=[],s.accumulatedWeightedInfNorm=[],X(function(){s.iteration=q(0).variable(),s.accBeta1=q(n).variable()}),a==null&&(s.epsilon=A.backend.epsilon()),s}return qt(e,r),e.prototype.applyGradients=function(t){var n=this,o=Array.isArray(t)?t.map(function(a){return a.name}):Object.keys(t);X(function(){var a=Bt(1,n.accBeta1),i=xe(-n.learningRate,n.iteration.mul(n.decay).add(1));o.forEach(function(s,u){var c=A.registeredVariables[s];n.accumulatedFirstMoment[u]==null&&(n.accumulatedFirstMoment[u]={originalName:s+"/m",variable:pt(c).variable(!1)}),n.accumulatedWeightedInfNorm[u]==null&&(n.accumulatedWeightedInfNorm[u]={originalName:s+"/v",variable:pt(c).variable(!1)});var l=Array.isArray(t)?t[u].tensor:t[s];if(l!=null){var h=n.accumulatedFirstMoment[u].variable,f=n.accumulatedWeightedInfNorm[u].variable,d=h.mul(n.beta1).add(l.mul(1-n.beta1)),p=f.mul(n.beta2),v=l.abs(),g=p.maximum(v);h.assign(d),f.assign(g);var m=i.div(a).mul(d.div(g.add(n.epsilon))).add(c);c.assign(m)}}),n.iteration.assign(n.iteration.add(1)),n.accBeta1.assign(n.accBeta1.mul(n.beta1))}),this.incrementIterations()},e.prototype.dispose=function(){this.accBeta1.dispose(),this.iteration.dispose(),this.accumulatedFirstMoment!=null&&Qt(this.accumulatedFirstMoment.map(function(t){return t.variable})),this.accumulatedWeightedInfNorm!=null&&Qt(this.accumulatedWeightedInfNorm.map(function(t){return t.variable}))},e.prototype.getWeights=function(){return K(this,void 0,void 0,function(){return $(this,function(t){throw new Error("getWeights() is not implemented for Adamax yet.")})})},e.prototype.setWeights=function(t){return K(this,void 0,void 0,function(){return $(this,function(n){throw new Error("setWeights() is not implemented for Adamax yet.")})})},e.prototype.getConfig=function(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon,decay:this.decay}},e.fromConfig=function(t,n){return new t(n.learningRate,n.beta1,n.beta2,n.epsilon,n.decay)},e.className="Adamax",e}(En);Cn(Rg);var tc=function(r){function e(t){var n=r.call(this)||this;return n.learningRate=t,n.setLearningRate(t),n}return qt(e,r),e.prototype.applyGradients=function(t){var n=this;(Array.isArray(t)?t.map(function(o){return o.name}):Object.keys(t)).forEach(function(o,a){var i=Array.isArray(t)?t[a].tensor:t[o];if(i!=null){var s=A.registeredVariables[o];X(function(){var u=n.c.mul(i).add(s);s.assign(u)})}}),this.incrementIterations()},e.prototype.setLearningRate=function(t){this.learningRate=t,this.c!=null&&this.c.dispose(),this.c=jl(q(-t))},e.prototype.dispose=function(){this.c.dispose()},e.prototype.getWeights=function(){return K(this,void 0,void 0,function(){return $(this,function(t){switch(t.label){case 0:return[4,this.saveIterations()];case 1:return[2,[t.sent()]]}})})},e.prototype.setWeights=function(t){return K(this,void 0,void 0,function(){return $(this,function(n){switch(n.label){case 0:return[4,this.extractIterations(t)];case 1:if((t=n.sent()).length!==0)throw new Error("SGD optimizer does not have settable weights.");return[2]}})})},e.prototype.getConfig=function(){return{learningRate:this.learningRate}},e.fromConfig=function(t,n){return new t(n.learningRate)},e.className="SGD",e}(En);Cn(tc);var kg=function(r){function e(t,n,o){o===void 0&&(o=!1);var a=r.call(this,t)||this;return a.learningRate=t,a.momentum=n,a.useNesterov=o,a.accumulations=[],a.m=q(a.momentum),a}return qt(e,r),e.prototype.applyGradients=function(t){var n=this;(Array.isArray(t)?t.map(function(o){return o.name}):Object.keys(t)).forEach(function(o,a){var i=A.registeredVariables[o];n.accumulations[a]==null&&(n.accumulations[a]={originalName:o+"/momentum",variable:X(function(){return pt(i).variable(!1)})});var s=n.accumulations[a].variable,u=Array.isArray(t)?t[a].tensor:t[o];u!=null&&X(function(){var c,l=n.m.mul(s).add(u);c=n.useNesterov?n.c.mul(u.add(l.mul(n.m))).add(i):n.c.mul(l).add(i),s.assign(l),i.assign(c)})}),this.incrementIterations()},e.prototype.dispose=function(){this.m.dispose(),this.accumulations!=null&&Qt(this.accumulations.map(function(t){return t.variable}))},e.prototype.setMomentum=function(t){this.momentum=t},e.prototype.getWeights=function(){return K(this,void 0,void 0,function(){return $(this,function(t){switch(t.label){case 0:return[4,this.saveIterations()];case 1:return[2,[t.sent()].concat(this.accumulations.map(function(n){return{name:n.originalName,tensor:n.variable}}))]}})})},e.prototype.setWeights=function(t){return K(this,void 0,void 0,function(){return $(this,function(n){switch(n.label){case 0:return[4,this.extractIterations(t)];case 1:return t=n.sent(),this.accumulations=t.map(function(o){return{originalName:o.name,variable:o.tensor.variable(!1)}}),[2]}})})},e.prototype.getConfig=function(){return{learningRate:this.learningRate,momentum:this.momentum,useNesterov:this.useNesterov}},e.fromConfig=function(t,n){return new t(n.learningRate,n.momentum,n.useNesterov)},e.className="Momentum",e}(tc);Cn(kg);var Dg=function(r){function e(t,n,o,a,i){n===void 0&&(n=.9),o===void 0&&(o=0),a===void 0&&(a=null),i===void 0&&(i=!1);var s=r.call(this)||this;if(s.learningRate=t,s.decay=n,s.momentum=o,s.epsilon=a,s.accumulatedMeanSquares=[],s.accumulatedMoments=[],s.accumulatedMeanGrads=[],s.centered=i,a==null&&(s.epsilon=A.backend.epsilon()),t==null)throw new Error("learningRate for RMSPropOptimizer must be defined.");return s}return qt(e,r),e.prototype.applyGradients=function(t){var n=this;(Array.isArray(t)?t.map(function(o){return o.name}):Object.keys(t)).forEach(function(o,a){var i=A.registeredVariables[o];n.accumulatedMeanSquares[a]==null&&(n.accumulatedMeanSquares[a]={originalName:o+"/rms",variable:X(function(){return pt(i).variable(!1)})}),n.accumulatedMoments[a]==null&&(n.accumulatedMoments[a]={originalName:o+"/momentum",variable:X(function(){return pt(i).variable(!1)})}),n.accumulatedMeanGrads[a]==null&&n.centered&&(n.accumulatedMeanGrads[a]={originalName:o+"/mg",variable:X(function(){return pt(i).variable(!1)})});var s=Array.isArray(t)?t[a].tensor:t[o];if(s!=null){var u=n.accumulatedMeanSquares[a].variable,c=n.accumulatedMoments[a].variable;X(function(){var l=u.mul(n.decay).add(s.square().mul(1-n.decay));if(n.centered){var h=n.accumulatedMeanGrads[a].variable,f=h.mul(n.decay).add(s.mul(1-n.decay)),d=c.mul(n.momentum).add(s.mul(n.learningRate).div(l.sub(f.square().add(n.epsilon)).sqrt()));u.assign(l),h.assign(f),c.assign(d);var p=i.sub(d);i.assign(p)}else{var v=u.mul(n.decay).add(s.square().mul(1-n.decay));d=c.mul(n.momentum).add(s.mul(n.learningRate).div(v.add(n.epsilon).sqrt())),u.assign(v),c.assign(d),p=i.sub(d),i.assign(p)}})}}),this.incrementIterations()},e.prototype.dispose=function(){this.accumulatedMeanSquares!=null&&Qt(this.accumulatedMeanSquares.map(function(t){return t.variable})),this.accumulatedMeanGrads!=null&&this.centered&&Qt(this.accumulatedMeanGrads.map(function(t){return t.variable})),this.accumulatedMoments!=null&&Qt(this.accumulatedMoments.map(function(t){return t.variable}))},e.prototype.getWeights=function(){return K(this,void 0,void 0,function(){var t;return $(this,function(n){switch(n.label){case 0:return t=this.accumulatedMeanSquares.concat(this.accumulatedMoments),this.centered&&t.push.apply(t,this.accumulatedMeanGrads),[4,this.saveIterations()];case 1:return[2,[n.sent()].concat(t.map(function(o){return{name:o.originalName,tensor:o.variable}}))]}})})},e.prototype.setWeights=function(t){return K(this,void 0,void 0,function(){var n;return $(this,function(o){switch(o.label){case 0:return[4,this.extractIterations(t)];case 1:return t=o.sent(),n=this.centered?t.length/3:t.length/2,this.accumulatedMeanSquares=t.slice(0,n).map(function(a){return{originalName:a.name,variable:a.tensor.variable(!1)}}),this.accumulatedMoments=t.slice(n,2*n).map(function(a){return{originalName:a.name,variable:a.tensor.variable(!1)}}),this.centered&&(this.accumulatedMeanGrads=t.slice(2*n,3*n).map(function(a){return{originalName:a.name,variable:a.tensor.variable(!1)}})),[2]}})})},e.prototype.getConfig=function(){return{learningRate:this.learningRate,decay:this.decay,momentum:this.momentum,epsilon:this.epsilon,centered:this.centered}},e.fromConfig=function(t,n){return new t(n.learningRate,n.decay,n.momentum,n.epsilon,n.centered)},e.className="RMSProp",e}(En);Cn(Dg),typeof requestAnimationFrame<"u"||typeof setImmediate<"u"&&setImmediate,Et.prototype.squaredDifference=function(r){return tu(this,r)},M=eg;/*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */var Ha=function(r,e){return Ha=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var o in n)n.hasOwnProperty(o)&&(t[o]=n[o])},Ha(r,e)};function rt(r,e){Ha(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var Yt=function(){return Yt=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++){t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},Yt.apply(this,arguments)};function Q(r,e,t,n){function o(a){return a instanceof t?a:new t(function(i){i(a)})}return new(t||(t=Promise))(function(a,i){function s(l){try{c(n.next(l))}catch(h){i(h)}}function u(l){try{c(n.throw(l))}catch(h){i(h)}}function c(l){l.done?a(l.value):o(l.value).then(s,u)}c((n=n.apply(r,[])).next())})}function Z(r,e){var t={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},n,o,a,i;return i={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(i[Symbol.iterator]=function(){return this}),i;function s(c){return function(l){return u([c,l])}}function u(c){if(n)throw new TypeError("Generator is already executing.");for(;t;)try{if(n=1,o&&(a=c[0]&2?o.return:c[0]?o.throw||((a=o.return)&&a.call(o),0):o.next)&&!(a=a.call(o,c[1])).done)return a;switch(o=0,a&&(c=[c[0]&2,a.value]),c[0]){case 0:case 1:a=c;break;case 4:return t.label++,{value:c[1],done:!1};case 5:t.label++,o=c[1],c=[0];continue;case 7:c=t.ops.pop(),t.trys.pop();continue;default:if(a=t.trys,!(a=a.length>0&&a[a.length-1])&&(c[0]===6||c[0]===2)){t=0;continue}if(c[0]===3&&(!a||c[1]>a[0]&&c[1]<a[3])){t.label=c[1];break}if(c[0]===6&&t.label<a[1]){t.label=a[1],a=c;break}if(a&&t.label<a[2]){t.label=a[2],t.ops.push(c);break}a[2]&&t.ops.pop(),t.trys.pop();continue}c=e.call(r,t)}catch(l){c=[6,l],o=0}finally{n=a=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}}function gr(){for(var r=0,e=0,t=arguments.length;e<t;e++)r+=arguments[e].length;for(var n=Array(r),o=0,e=0;e<t;e++)for(var a=arguments[e],i=0,s=a.length;i<s;i++,o++)n[o]=a[i];return n}var qn=function(){function r(e,t){if(!_n(e)||!_n(t))throw new Error("Dimensions.constructor - expected width and height to be valid numbers, instead have "+JSON.stringify({width:e,height:t}));this._width=e,this._height=t}return Object.defineProperty(r.prototype,"width",{get:function(){return this._width},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"height",{get:function(){return this._height},enumerable:!0,configurable:!0}),r.prototype.reverse=function(){return new r(1/this.width,1/this.height)},r}();function so(r,e){return r instanceof Et&&r.shape.length===e}function Ag(r){return so(r,2)}function uo(r){return so(r,3)}function an(r){return so(r,4)}function Tg(r){return r%1!==0}function ec(r){return r%2===0}function Fg(r,e){e===void 0&&(e=2);var t=Math.pow(10,e);return Math.floor(r*t)/t}function nc(r){return r&&r.width&&r.height}function Ng(r,e){var t=r.width,n=r.height,o=e/Math.max(n,t);return new qn(Math.round(t*o),Math.round(n*o))}function qa(r){return r.reduce(function(e,t){return e.add(t)},new mt(0,0)).div(new mt(r.length,r.length))}function mr(r,e,t){return Array(r).fill(0).map(function(n,o){return e+o*t})}function _n(r){return!!r&&r!==1/0&&r!==-1/0&&!isNaN(r)||r===0}function rc(r){return _n(r)&&0<=r&&r<=1}var mt=function(){function r(e,t){this._x=e,this._y=t}return Object.defineProperty(r.prototype,"x",{get:function(){return this._x},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"y",{get:function(){return this._y},enumerable:!0,configurable:!0}),r.prototype.add=function(e){return new r(this.x+e.x,this.y+e.y)},r.prototype.sub=function(e){return new r(this.x-e.x,this.y-e.y)},r.prototype.mul=function(e){return new r(this.x*e.x,this.y*e.y)},r.prototype.div=function(e){return new r(this.x/e.x,this.y/e.y)},r.prototype.abs=function(){return new r(Math.abs(this.x),Math.abs(this.y))},r.prototype.magnitude=function(){return Math.sqrt(Math.pow(this.x,2)+Math.pow(this.y,2))},r.prototype.floor=function(){return new r(Math.floor(this.x),Math.floor(this.y))},r}(),sn=function(){function r(e,t){t===void 0&&(t=!0);var n=e||{},o=[n.left,n.top,n.right,n.bottom].every(_n),a=[n.x,n.y,n.width,n.height].every(_n);if(!a&&!o)throw new Error("Box.constructor - expected box to be IBoundingBox | IRect, instead have "+JSON.stringify(n));var i=a?[n.x,n.y,n.width,n.height]:[n.left,n.top,n.right-n.left,n.bottom-n.top],s=i[0],u=i[1],c=i[2],l=i[3];r.assertIsValidBox({x:s,y:u,width:c,height:l},"Box.constructor",t),this._x=s,this._y=u,this._width=c,this._height=l}return r.isRect=function(e){return!!e&&[e.x,e.y,e.width,e.height].every(_n)},r.assertIsValidBox=function(e,t,n){if(n===void 0&&(n=!1),!r.isRect(e))throw new Error(t+" - invalid box: "+JSON.stringify(e)+", expected object with properties x, y, width, height");if(!n&&(e.width<0||e.height<0))throw new Error(t+" - width ("+e.width+") and height ("+e.height+") must be positive numbers")},Object.defineProperty(r.prototype,"x",{get:function(){return this._x},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"y",{get:function(){return this._y},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"width",{get:function(){return this._width},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"height",{get:function(){return this._height},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"left",{get:function(){return this.x},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"top",{get:function(){return this.y},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"right",{get:function(){return this.x+this.width},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"bottom",{get:function(){return this.y+this.height},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"area",{get:function(){return this.width*this.height},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"topLeft",{get:function(){return new mt(this.left,this.top)},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"topRight",{get:function(){return new mt(this.right,this.top)},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"bottomLeft",{get:function(){return new mt(this.left,this.bottom)},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"bottomRight",{get:function(){return new mt(this.right,this.bottom)},enumerable:!0,configurable:!0}),r.prototype.round=function(){var e=[this.x,this.y,this.width,this.height].map(function(i){return Math.round(i)}),t=e[0],n=e[1],o=e[2],a=e[3];return new r({x:t,y:n,width:o,height:a})},r.prototype.floor=function(){var e=[this.x,this.y,this.width,this.height].map(function(i){return Math.floor(i)}),t=e[0],n=e[1],o=e[2],a=e[3];return new r({x:t,y:n,width:o,height:a})},r.prototype.toSquare=function(){var e=this,t=e.x,n=e.y,o=e.width,a=e.height,i=Math.abs(o-a);return o<a&&(t-=i/2,o+=i),a<o&&(n-=i/2,a+=i),new r({x:t,y:n,width:o,height:a})},r.prototype.rescale=function(e){var t=nc(e)?e.width:e,n=nc(e)?e.height:e;return new r({x:this.x*t,y:this.y*n,width:this.width*t,height:this.height*n})},r.prototype.pad=function(e,t){var n=[this.x-e/2,this.y-t/2,this.width+e,this.height+t],o=n[0],a=n[1],i=n[2],s=n[3];return new r({x:o,y:a,width:i,height:s})},r.prototype.clipAtImageBorders=function(e,t){var n=this,o=n.x,a=n.y,i=n.right,s=n.bottom,u=Math.max(o,0),c=Math.max(a,0),l=i-u,h=s-c,f=Math.min(l,e-u),d=Math.min(h,t-c);return new r({x:u,y:c,width:f,height:d}).floor()},r.prototype.shift=function(e,t){var n=this,o=n.width,a=n.height,i=this.x+e,s=this.y+t;return new r({x:i,y:s,width:o,height:a})},r.prototype.padAtBorders=function(e,t){var n=this.width+1,o=this.height+1,a=1,i=1,s=n,u=o,c=this.left,l=this.top,h=this.right,f=this.bottom;return h>t&&(s=-h+t+n,h=t),f>e&&(u=-f+e+o,f=e),c<1&&(u=2-c,c=1),l<1&&(u=2-l,l=1),{dy:i,edy:u,dx:a,edx:s,y:l,ey:f,x:c,ex:h,w:n,h:o}},r.prototype.calibrate=function(e){return new r({left:this.left+e.left*this.width,top:this.top+e.top*this.height,right:this.right+e.right*this.width,bottom:this.bottom+e.bottom*this.height}).toSquare().round()},r}(),co=function(r){rt(e,r);function e(t,n,o,a,i){return i===void 0&&(i=!1),r.call(this,{left:t,top:n,right:o,bottom:a},i)||this}return e}(sn),oc=function(){function r(e,t,n,o,a){this._imageDims=new qn(a.width,a.height),this._score=e,this._classScore=t,this._className=n,this._box=new sn(o).rescale(this._imageDims)}return Object.defineProperty(r.prototype,"score",{get:function(){return this._score},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"classScore",{get:function(){return this._classScore},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"className",{get:function(){return this._className},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"box",{get:function(){return this._box},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"imageDims",{get:function(){return this._imageDims},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"imageWidth",{get:function(){return this.imageDims.width},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"imageHeight",{get:function(){return this.imageDims.height},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"relativeBox",{get:function(){return new sn(this._box).rescale(this.imageDims.reverse())},enumerable:!0,configurable:!0}),r.prototype.forSize=function(e,t){return new r(this.score,this.classScore,this.className,this.relativeBox,{width:e,height:t})},r}(),Fe=function(r){rt(e,r);function e(t,n,o){return r.call(this,t,t,"",n,o)||this}return e.prototype.forSize=function(t,n){var o=r.prototype.forSize.call(this,t,n),a=o.score,i=o.relativeBox,s=o.imageDims;return new e(a,i,s)},e}(oc);function Mg(r,e,t){t===void 0&&(t=!0);var n=Math.max(0,Math.min(r.right,e.right)-Math.max(r.left,e.left)),o=Math.max(0,Math.min(r.bottom,e.bottom)-Math.max(r.top,e.top)),a=n*o;return t?a/(r.area+e.area-a):a/Math.min(r.area,e.area)}function Pg(r){var e=r.map(function(s){return s.x}),t=r.map(function(s){return s.y}),n=e.reduce(function(s,u){return u<s?u:s},1/0),o=t.reduce(function(s,u){return u<s?u:s},1/0),a=e.reduce(function(s,u){return s<u?u:s},0),i=t.reduce(function(s,u){return s<u?u:s},0);return new co(n,o,a,i)}function yr(r,e,t,n){n===void 0&&(n=!0);for(var o=e.map(function(s,u){return{score:s,boxIndex:u}}).sort(function(s,u){return s.score-u.score}).map(function(s){return s.boxIndex}),a=[],i=function(){var s=o.pop();a.push(s);for(var u=o,c=[],l=0;l<u.length;l++){var h=u[l],f=r[s],d=r[h];c.push(Mg(f,d,n))}o=o.filter(function(p,v){return c[v]<=t})};o.length>0;)i();return a}function xr(r,e){return X(function(){var t=e[0],n=e[1],o=e[2],a=Ae(gr(r.shape.slice(0,3),[1]),t),i=Ae(gr(r.shape.slice(0,3),[1]),n),s=Ae(gr(r.shape.slice(0,3),[1]),o),u=Mt([a,i,s],3);return Bt(r,u)})}function Og(r,e){return e===void 0&&(e=!1),X(function(){var t=r.shape.slice(1),n=t[0],o=t[1];if(n===o)return r;var a=Math.abs(n-o),i=Math.round(a*(e?.5:1)),s=n>o?2:1,u=function(d){var p=r.shape.slice();return p[s]=d,Ae(p,0)},c=u(i),l=a-c.shape[s],h=e&&l?u(l):null,f=[h,r,c].filter(function(d){return!!d}).map(function(d){return d.toFloat()});return Mt(f,s)})}function ja(r){return 1/(1+Math.exp(-r))}var Xa=function(r){rt(e,r);function e(t,n,o,a,i){return i===void 0&&(i=!1),r.call(this,{x:t,y:n,width:o,height:a},i)||this}return e}(sn),Bg=.5,Lg=.43,Wg=.45,lo=function(){function r(e,t,n){n===void 0&&(n=new mt(0,0));var o=t.width,a=t.height;this._imgDims=new qn(o,a),this._shift=n,this._positions=e.map(function(i){return i.mul(new mt(o,a)).add(n)})}return Object.defineProperty(r.prototype,"shift",{get:function(){return new mt(this._shift.x,this._shift.y)},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"imageWidth",{get:function(){return this._imgDims.width},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"imageHeight",{get:function(){return this._imgDims.height},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"positions",{get:function(){return this._positions},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"relativePositions",{get:function(){var e=this;return this._positions.map(function(t){return t.sub(e._shift).div(new mt(e.imageWidth,e.imageHeight))})},enumerable:!0,configurable:!0}),r.prototype.forSize=function(e,t){return new this.constructor(this.relativePositions,{width:e,height:t})},r.prototype.shiftBy=function(e,t){return new this.constructor(this.relativePositions,this._imgDims,new mt(e,t))},r.prototype.shiftByPoint=function(e){return this.shiftBy(e.x,e.y)},r.prototype.align=function(e,t){if(t===void 0&&(t={}),e){var n=e instanceof Fe?e.box.floor():new sn(e);return this.shiftBy(n.x,n.y).align(null,t)}var o=Object.assign({},{useDlibAlignment:!1,minBoxPadding:.2},t),a=o.useDlibAlignment,i=o.minBoxPadding;return a?this.alignDlib():this.alignMinBbox(i)},r.prototype.alignDlib=function(){var e=this.getRefPointsForAlignment(),t=e[0],n=e[1],o=e[2],a=function(h){return o.sub(h).magnitude()},i=(a(t)+a(n))/2,s=Math.floor(i/Wg),u=qa(e),c=Math.floor(Math.max(0,u.x-Bg*s)),l=Math.floor(Math.max(0,u.y-Lg*s));return new Xa(c,l,Math.min(s,this.imageWidth+c),Math.min(s,this.imageHeight+l))},r.prototype.alignMinBbox=function(e){var t=Pg(this.positions);return t.pad(t.width*e,t.height*e)},r.prototype.getRefPointsForAlignment=function(){throw new Error("getRefPointsForAlignment not implemented by base class")},r}(),Ug=function(r){rt(e,r);function e(){return r!==null&&r.apply(this,arguments)||this}return e.prototype.getRefPointsForAlignment=function(){var t=this.positions;return[t[0],t[1],qa([t[3],t[4]])]},e}(lo),zg=function(r){rt(e,r);function e(){return r!==null&&r.apply(this,arguments)||this}return e.prototype.getJawOutline=function(){return this.positions.slice(0,17)},e.prototype.getLeftEyeBrow=function(){return this.positions.slice(17,22)},e.prototype.getRightEyeBrow=function(){return this.positions.slice(22,27)},e.prototype.getNose=function(){return this.positions.slice(27,36)},e.prototype.getLeftEye=function(){return this.positions.slice(36,42)},e.prototype.getRightEye=function(){return this.positions.slice(42,48)},e.prototype.getMouth=function(){return this.positions.slice(48,68)},e.prototype.getRefPointsForAlignment=function(){return[this.getLeftEye(),this.getRightEye(),this.getMouth()].map(qa)},e}(lo),ac=function(){function r(e,t){this._label=e,this._distance=t}return Object.defineProperty(r.prototype,"label",{get:function(){return this._label},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"distance",{get:function(){return this._distance},enumerable:!0,configurable:!0}),r.prototype.toString=function(e){return e===void 0&&(e=!0),""+this.label+(e?" ("+Fg(this.distance)+")":"")},r}(),ic=function(r){rt(e,r);function e(t,n){var o=r.call(this,t)||this;return o._label=n,o}return e.assertIsValidLabeledBox=function(t,n){if(sn.assertIsValidBox(t,n),!_n(t.label))throw new Error(n+" - expected property label ("+t.label+") to be a number")},Object.defineProperty(e.prototype,"label",{get:function(){return this._label},enumerable:!0,configurable:!0}),e}(sn),ho=function(){function r(e,t){if(typeof e!="string")throw new Error("LabeledFaceDescriptors - constructor expected label to be a string");if(!Array.isArray(t)||t.some(function(n){return!(n instanceof Float32Array)}))throw new Error("LabeledFaceDescriptors - constructor expected descriptors to be an array of Float32Array");this._label=e,this._descriptors=t}return Object.defineProperty(r.prototype,"label",{get:function(){return this._label},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"descriptors",{get:function(){return this._descriptors},enumerable:!0,configurable:!0}),r.prototype.toJSON=function(){return{label:this.label,descriptors:this.descriptors.map(function(e){return Array.from(e)})}},r.fromJSON=function(e){var t=e.descriptors.map(function(n){return new Float32Array(n)});return new r(e.label,t)},r}();(function(r){rt(e,r);function e(t,n,o,a){var i=r.call(this,t,n)||this;return i._score=o,i._classScore=a,i}return e.assertIsValidPredictedBox=function(t,n){if(ic.assertIsValidLabeledBox(t,n),!rc(t.score)||!rc(t.classScore))throw new Error(n+" - expected properties score ("+t.score+") and ("+t.classScore+") to be a number between [0, 1]")},Object.defineProperty(e.prototype,"score",{get:function(){return this._score},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"classScore",{get:function(){return this._classScore},enumerable:!0,configurable:!0}),e})(ic);function Vg(r){return r.detection instanceof Fe}function Ka(r,e){var t={detection:e};return Object.assign({},r,t)}function sc(){var r=window.fetch||function(){throw new Error("fetch - missing fetch implementation for browser environment")},e=function(){throw new Error("readFile - filesystem not available for browser environment")};return{Canvas:HTMLCanvasElement,CanvasRenderingContext2D,Image:HTMLImageElement,ImageData,Video:HTMLVideoElement,createCanvasElement:function(){return document.createElement("canvas")},createImageElement:function(){return document.createElement("img")},fetch:r,readFile:e}}function uc(r){var e="";if(!r)try{r=require("fs")}catch(n){e=n.toString()}var t=r?function(n){return new Promise(function(o,a){r.readFile(n,function(i,s){return i?a(i):o(s)})})}:function(){throw new Error("readFile - failed to require fs in nodejs environment with error: "+e)};return{readFile:t}}function cc(){var r=global.Canvas||global.HTMLCanvasElement,e=global.Image||global.HTMLImageElement,t=function(){if(r)return new r;throw new Error("createCanvasElement - missing Canvas implementation for nodejs environment")},n=function(){if(e)return new e;throw new Error("createImageElement - missing Image implementation for nodejs environment")},o=global.fetch||function(){throw new Error("fetch - missing fetch implementation for nodejs environment")},a=uc();return Yt({Canvas:r||function(){function i(){}return i}(),CanvasRenderingContext2D:global.CanvasRenderingContext2D||function(){function i(){}return i}(),Image:e||function(){function i(){}return i}(),ImageData:global.ImageData||function(){function i(){}return i}(),Video:global.HTMLVideoElement||function(){function i(){}return i}(),createCanvasElement:t,createImageElement:n,fetch:o},a)}function lc(){return typeof window=="object"&&typeof document<"u"&&typeof HTMLImageElement<"u"&&typeof HTMLCanvasElement<"u"&&typeof HTMLVideoElement<"u"&&typeof ImageData<"u"&&typeof CanvasRenderingContext2D<"u"}function hc(){return typeof global=="object"&&typeof require=="function"&&typeof module<"u"&&typeof process<"u"&&!!process.version}var Lt;function Gg(){if(!Lt)throw new Error("getEnv - environment is not defined, check isNodejs() and isBrowser()");return Lt}function $a(r){Lt=r}function Ya(){lc()&&$a(sc()),hc()&&$a(cc())}function Hg(r){if(Lt||Ya(),!Lt)throw new Error("monkeyPatch - environment is not defined, check isNodejs() and isBrowser()");var e=r.Canvas,t=e===void 0?Lt.Canvas:e,n=r.Image,o=n===void 0?Lt.Image:n;Lt.Canvas=t,Lt.Image=o,Lt.createCanvasElement=r.createCanvasElement||function(){return new t},Lt.createImageElement=r.createImageElement||function(){return new o},Lt.ImageData=r.ImageData||Lt.ImageData,Lt.Video=r.Video||Lt.Video,Lt.fetch=r.fetch||Lt.fetch,Lt.readFile=r.readFile||Lt.readFile}var Jt={getEnv:Gg,setEnv:$a,initialize:Ya,createBrowserEnv:sc,createFileSystem:uc,createNodejsEnv:cc,monkeyPatch:Hg,isBrowser:lc,isNodejs:hc};Ya();function fc(r){return!Jt.isNodejs()&&typeof r=="string"?document.getElementById(r):r}function In(r){var e=Jt.getEnv(),t=e.Canvas,n=e.CanvasRenderingContext2D;if(r instanceof n)return r;var o=fc(r);if(!(o instanceof t))throw new Error("resolveContext2d - expected canvas to be of instance of Canvas");var a=o.getContext("2d");if(!a)throw new Error("resolveContext2d - canvas 2d context is null");return a}var dc;(function(r){r.TOP_LEFT="TOP_LEFT",r.TOP_RIGHT="TOP_RIGHT",r.BOTTOM_LEFT="BOTTOM_LEFT",r.BOTTOM_RIGHT="BOTTOM_RIGHT"})(dc||(dc={}));function pc(r){var e=Jt.getEnv(),t=e.Image,n=e.Video;return r instanceof t&&r.complete||r instanceof n&&r.readyState>=3}function qg(r){return new Promise(function(e,t){if(r instanceof Jt.getEnv().Canvas||pc(r))return e();function n(a){a.currentTarget&&(a.currentTarget.removeEventListener("load",n),a.currentTarget.removeEventListener("error",o),e(a))}function o(a){a.currentTarget&&(a.currentTarget.removeEventListener("load",n),a.currentTarget.removeEventListener("error",o),t(a))}r.addEventListener("load",n),r.addEventListener("error",o)})}function vc(r){var e=Jt.getEnv(),t=e.Image,n=e.Video;return r instanceof t?new qn(r.naturalWidth,r.naturalHeight):r instanceof n?new qn(r.videoWidth,r.videoHeight):new qn(r.width,r.height)}function fo(r){var e=r.width,t=r.height,n=Jt.getEnv().createCanvasElement,o=n();return o.width=e,o.height=t,o}function Ja(r,e){var t=Jt.getEnv().ImageData;if(!(r instanceof t)&&!pc(r))throw new Error("createCanvasFromMedia - media has not finished loading yet");var n=vc(r),o=n.width,a=n.height,i=fo({width:o,height:a});return r instanceof t?In(i).putImageData(r,0,0):In(i).drawImage(r,0,0,o,a),i}function jg(r,e){return Q(this,void 0,void 0,function(){var t,n,o,a,i,s;return Z(this,function(u){switch(u.label){case 0:return t=Jt.getEnv().createCanvasElement(),n=r.shape.slice(an(r)?1:0),o=n[0],a=n[1],i=n[2],s=X(function(){return r.as3D(o,a,i).toInt()}),[4,Ga.toPixels(s,t)];case 1:return u.sent(),s.dispose(),[2,t]}})})}function gc(r){var e=Jt.getEnv(),t=e.Image,n=e.Canvas,o=e.Video;return r instanceof t||r instanceof n||r instanceof o}function Xg(r,e,t){t===void 0&&(t=!1);var n=Jt.getEnv(),o=n.Image,a=n.Canvas;if(!(r instanceof o||r instanceof a))throw new Error("imageToSquare - expected arg0 to be HTMLImageElement | HTMLCanvasElement");var i=vc(r),s=e/Math.max(i.height,i.width),u=s*i.width,c=s*i.height,l=fo({width:e,height:e}),h=r instanceof a?r:Ja(r),f=Math.abs(u-c)/2,d=t&&u<c?f:0,p=t&&c<u?f:0;return In(l).drawImage(h,d,p,u,c),l}var po=function(){function r(e,t){var n=this;if(t===void 0&&(t=!1),this._imageTensors=[],this._canvases=[],this._treatAsBatchInput=!1,this._inputDimensions=[],!Array.isArray(e))throw new Error("NetInput.constructor - expected inputs to be an Array of TResolvedNetInput or to be instanceof tf.Tensor4D, instead have "+e);this._treatAsBatchInput=t,this._batchSize=e.length,e.forEach(function(o,a){if(uo(o)){n._imageTensors[a]=o,n._inputDimensions[a]=o.shape;return}if(an(o)){var i=o.shape[0];if(i!==1)throw new Error("NetInput - tf.Tensor4D with batchSize "+i+" passed, but not supported in input array");n._imageTensors[a]=o,n._inputDimensions[a]=o.shape.slice(1);return}var s=o instanceof Jt.getEnv().Canvas?o:Ja(o);n._canvases[a]=s,n._inputDimensions[a]=[s.height,s.width,3]})}return Object.defineProperty(r.prototype,"imageTensors",{get:function(){return this._imageTensors},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"canvases",{get:function(){return this._canvases},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"isBatchInput",{get:function(){return this.batchSize>1||this._treatAsBatchInput},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"batchSize",{get:function(){return this._batchSize},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"inputDimensions",{get:function(){return this._inputDimensions},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"inputSize",{get:function(){return this._inputSize},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"reshapedInputDimensions",{get:function(){var e=this;return mr(this.batchSize,0,1).map(function(t,n){return e.getReshapedInputDimensions(n)})},enumerable:!0,configurable:!0}),r.prototype.getInput=function(e){return this.canvases[e]||this.imageTensors[e]},r.prototype.getInputDimensions=function(e){return this._inputDimensions[e]},r.prototype.getInputHeight=function(e){return this._inputDimensions[e][0]},r.prototype.getInputWidth=function(e){return this._inputDimensions[e][1]},r.prototype.getReshapedInputDimensions=function(e){if(typeof this.inputSize!="number")throw new Error("getReshapedInputDimensions - inputSize not set, toBatchTensor has not been called yet");var t=this.getInputWidth(e),n=this.getInputHeight(e);return Ng({width:t,height:n},this.inputSize)},r.prototype.toBatchTensor=function(e,t){var n=this;return t===void 0&&(t=!0),this._inputSize=e,X(function(){var o=mr(n.batchSize,0,1).map(function(i){var s=n.getInput(i);if(s instanceof Et){var u=an(s)?s:s.expandDims();return u=Og(u,t),(u.shape[1]!==e||u.shape[2]!==e)&&(u=Ia.resizeBilinear(u,[e,e])),u.as3D(e,e,3)}if(s instanceof Jt.getEnv().Canvas)return Ga.fromPixels(Xg(s,e,t));throw new Error("toBatchTensor - at batchIdx "+i+", expected input to be instanceof tf.Tensor or instanceof HTMLCanvasElement, instead have "+s)}),a=se(o.map(function(i){return i.toFloat()})).as4D(n.batchSize,e,e,3);return a})},r}();function zt(r){return Q(this,void 0,void 0,function(){var e,t,n;return Z(this,function(o){switch(o.label){case 0:if(r instanceof po)return[2,r];if(e=Array.isArray(r)?r:[r],!e.length)throw new Error("toNetInput - empty array passed as input");return t=function(a){return Array.isArray(r)?" at input index "+a+":":""},n=e.map(fc),n.forEach(function(a,i){if(!gc(a)&&!uo(a)&&!an(a))throw typeof e[i]=="string"?new Error("toNetInput -"+t(i)+" string passed, but could not resolve HTMLElement for element id "+e[i]):new Error("toNetInput -"+t(i)+" expected media to be of type HTMLImageElement | HTMLVideoElement | HTMLCanvasElement | tf.Tensor3D, or to be an element id");if(an(a)){var s=a.shape[0];if(s!==1)throw new Error("toNetInput -"+t(i)+" tf.Tensor4D with batchSize "+s+" passed, but not supported in input array")}}),[4,Promise.all(n.map(function(a){return gc(a)&&qg(a)}))];case 1:return o.sent(),[2,new po(n,Array.isArray(r))]}})})}function Qa(r,e){return Q(this,void 0,void 0,function(){var t,n,o,a,i,s,u;return Z(this,function(c){switch(c.label){case 0:return t=Jt.getEnv().Canvas,n=r,r instanceof t?[3,5]:[4,zt(r)];case 1:if(o=c.sent(),o.batchSize>1)throw new Error("extractFaces - batchSize > 1 not supported");return a=o.getInput(0),a instanceof t?(i=a,[3,4]):[3,2];case 2:return[4,jg(a)];case 3:i=c.sent(),c.label=4;case 4:n=i,c.label=5;case 5:return s=In(n),u=e.map(function(l){return l instanceof Fe?l.forSize(n.width,n.height).box.floor():l}).map(function(l){return l.clipAtImageBorders(n.width,n.height)}),[2,u.map(function(l){var h=l.x,f=l.y,d=l.width,p=l.height,v=fo({width:d,height:p});return In(v).putImageData(s.getImageData(h,f,d,p),0,0),v})]}})})}function Za(r,e){return Q(this,void 0,void 0,function(){return Z(this,function(t){if(!uo(r)&&!an(r))throw new Error("extractFaceTensors - expected image tensor to be 3D or 4D");if(an(r)&&r.shape[0]>1)throw new Error("extractFaceTensors - batchSize > 1 not supported");return[2,X(function(){var n=r.shape.slice(an(r)?1:0),o=n[0],a=n[1],i=n[2],s=e.map(function(c){return c instanceof Fe?c.forSize(a,o).box:c}).map(function(c){return c.clipAtImageBorders(a,o)}),u=s.map(function(c){var l=c.x,h=c.y,f=c.width,d=c.height;return Eu(r.as3D(o,a,i),[h,l,0],[d,f,i])});return u})]})})}function Kg(r,e){return Q(this,void 0,void 0,function(){var t,n;return Z(this,function(o){switch(o.label){case 0:return t=Jt.getEnv().fetch,[4,t(r,e)];case 1:if(n=o.sent(),!(n.status<400))throw new Error("failed to fetch: ("+n.status+") "+n.statusText+", from url: "+n.url);return[2,n]}})})}function $g(r){return Q(this,void 0,void 0,function(){return Z(this,function(e){switch(e.label){case 0:return[4,Kg(r)];case 1:return[2,e.sent().json()]}})})}function mc(r,e){var t=e+"-weights_manifest.json";if(!r)return{modelBaseUri:"",manifestUri:t};if(r==="/")return{modelBaseUri:"/",manifestUri:"/"+t};var n=r.startsWith("http://")?"http://":r.startsWith("https://")?"https://":"";r=r.replace(n,"");var o=r.split("/").filter(function(s){return s}),a=r.endsWith(".json")?o[o.length-1]:t,i=n+(r.endsWith(".json")?o.slice(0,o.length-1):o).join("/");return i=r.startsWith("/")?"/"+i:i,{modelBaseUri:i,manifestUri:i==="/"?"/"+a:i+"/"+a}}function Yg(r,e){return Q(this,void 0,void 0,function(){var t,n,o,a;return Z(this,function(i){switch(i.label){case 0:return t=mc(r,e),n=t.manifestUri,o=t.modelBaseUri,[4,$g(n)];case 1:return a=i.sent(),[2,Zu.loadWeights(a,o)]}})})}var je=function(){function r(e){this._name=e,this._params=void 0,this._paramMappings=[]}return Object.defineProperty(r.prototype,"params",{get:function(){return this._params},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"paramMappings",{get:function(){return this._paramMappings},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"isLoaded",{get:function(){return!!this.params},enumerable:!0,configurable:!0}),r.prototype.getParamFromPath=function(e){var t=this.traversePropertyPath(e),n=t.obj,o=t.objProp;return n[o]},r.prototype.reassignParamFromPath=function(e,t){var n=this.traversePropertyPath(e),o=n.obj,a=n.objProp;o[a].dispose(),o[a]=t},r.prototype.getParamList=function(){var e=this;return this._paramMappings.map(function(t){var n=t.paramPath;return{path:n,tensor:e.getParamFromPath(n)}})},r.prototype.getTrainableParams=function(){return this.getParamList().filter(function(e){return e.tensor instanceof Dn})},r.prototype.getFrozenParams=function(){return this.getParamList().filter(function(e){return!(e.tensor instanceof Dn)})},r.prototype.variable=function(){var e=this;this.getFrozenParams().forEach(function(t){var n=t.path,o=t.tensor;e.reassignParamFromPath(n,o.variable())})},r.prototype.freeze=function(){var e=this;this.getTrainableParams().forEach(function(t){var n=t.path,o=t.tensor,a=Ht(o.dataSync());o.dispose(),e.reassignParamFromPath(n,a)})},r.prototype.dispose=function(e){e===void 0&&(e=!0),this.getParamList().forEach(function(t){if(e&&t.tensor.isDisposed)throw new Error("param tensor has already been disposed for path "+t.path);t.tensor.dispose()}),this._params=void 0},r.prototype.serializeParams=function(){return new Float32Array(this.getParamList().map(function(e){var t=e.tensor;return Array.from(t.dataSync())}).reduce(function(e,t){return e.concat(t)}))},r.prototype.load=function(e){return Q(this,void 0,void 0,function(){return Z(this,function(t){switch(t.label){case 0:return e instanceof Float32Array?(this.extractWeights(e),[2]):[4,this.loadFromUri(e)];case 1:return t.sent(),[2]}})})},r.prototype.loadFromUri=function(e){return Q(this,void 0,void 0,function(){var t;return Z(this,function(n){switch(n.label){case 0:if(e&&typeof e!="string")throw new Error(this._name+".loadFromUri - expected model uri");return[4,Yg(e,this.getDefaultModelName())];case 1:return t=n.sent(),this.loadFromWeightMap(t),[2]}})})},r.prototype.loadFromDisk=function(e){return Q(this,void 0,void 0,function(){var t,n,o,a,i,s,u,c,l,h;return Z(this,function(f){switch(f.label){case 0:if(e&&typeof e!="string")throw new Error(this._name+".loadFromDisk - expected model file path");return t=Jt.getEnv().readFile,n=mc(e,this.getDefaultModelName()),o=n.manifestUri,a=n.modelBaseUri,i=function(d){return Promise.all(d.map(function(p){return t(p).then(function(v){return v.buffer})}))},s=Zu.weightsLoaderFactory(i),l=(c=JSON).parse,[4,t(o)];case 1:return u=l.apply(c,[f.sent().toString()]),[4,s(u,a)];case 2:return h=f.sent(),this.loadFromWeightMap(h),[2]}})})},r.prototype.loadFromWeightMap=function(e){var t=this.extractParamsFromWeigthMap(e),n=t.paramMappings,o=t.params;this._paramMappings=n,this._params=o},r.prototype.extractWeights=function(e){var t=this.extractParams(e),n=t.paramMappings,o=t.params;this._paramMappings=n,this._params=o},r.prototype.traversePropertyPath=function(e){if(!this.params)throw new Error("traversePropertyPath - model has no loaded params");var t=e.split("/").reduce(function(a,i){if(!a.nextObj.hasOwnProperty(i))throw new Error("traversePropertyPath - object does not have property "+i+", for path "+e);return{obj:a.nextObj,objProp:i,nextObj:a.nextObj[i]}},{nextObj:this.params}),n=t.obj,o=t.objProp;if(!n||!o||!(n[o]instanceof Et))throw new Error("traversePropertyPath - parameter is not a tensor, for path "+e);return{obj:n,objProp:o}},r}();function ce(r,e,t){return X(function(){var n=ba(r,e.depthwise_filter,e.pointwise_filter,t,"same");return n=ct(n,e.bias),n})}function ti(r,e,t){return t===void 0&&(t=!1),X(function(){var n=It(t?ct(pe(r,e.conv0.filters,[2,2],"same"),e.conv0.bias):ce(r,e.conv0,[2,2])),o=ce(n,e.conv1,[1,1]),a=It(ct(n,o)),i=ce(a,e.conv2,[1,1]);return It(ct(n,ct(o,i)))})}function vo(r,e,t,n){return t===void 0&&(t=!1),n===void 0&&(n=!0),X(function(){var o=It(t?ct(pe(r,e.conv0.filters,n?[2,2]:[1,1],"same"),e.conv0.bias):ce(r,e.conv0,n?[2,2]:[1,1])),a=ce(o,e.conv1,[1,1]),i=It(ct(o,a)),s=ce(i,e.conv2,[1,1]),u=It(ct(o,ct(a,s))),c=ce(u,e.conv3,[1,1]);return It(ct(o,ct(a,ct(s,c))))})}function be(r,e,t,n){return t===void 0&&(t="same"),n===void 0&&(n=!1),X(function(){var o=ct(pe(r,e.filters,[1,1],t),e.bias);return n?It(o):o})}function Xe(r,e){Object.keys(r).forEach(function(t){e.some(function(n){return n.originalPath===t})||r[t].dispose()})}function go(r,e){return function(t,n,o,a){var i=te(r(t*n*o*o),[o,o,t,n]),s=Ft(r(n));return e.push({paramPath:a+"/filters"},{paramPath:a+"/bias"}),{filters:i,bias:s}}}function ei(r,e){return function(t,n,o){var a=tn(r(t*n),[t,n]),i=Ft(r(n));return e.push({paramPath:o+"/weights"},{paramPath:o+"/bias"}),{weights:a,bias:i}}}var yc=function(){function r(e,t,n){this.depthwise_filter=e,this.pointwise_filter=t,this.bias=n}return r}();function ni(r,e){return function(t,n,o){var a=te(r(9*t),[3,3,t,1]),i=te(r(t*n),[1,1,t,n]),s=Ft(r(n));return e.push({paramPath:o+"/depthwise_filter"},{paramPath:o+"/pointwise_filter"},{paramPath:o+"/bias"}),new yc(a,i,s)}}function ri(r){return function(e){var t=r(e+"/depthwise_filter",4),n=r(e+"/pointwise_filter",4),o=r(e+"/bias",1);return new yc(t,n,o)}}function un(r,e){return function(t,n,o){var a=r[t];if(!so(a,n))throw new Error("expected weightMap["+t+"] to be a Tensor"+n+"D, instead have "+a);return e.push({originalPath:t,paramPath:o||t}),a}}function Ke(r){var e=r;function t(o){var a=e.slice(0,o);return e=e.slice(o),a}function n(){return e}return{extractWeights:t,getRemainingWeights:n}}function xc(r,e){var t=go(r,e),n=ni(r,e);function o(i,s,u,c){c===void 0&&(c=!1);var l=c?t(i,s,3,u+"/conv0"):n(i,s,u+"/conv0"),h=n(s,s,u+"/conv1"),f=n(s,s,u+"/conv2");return{conv0:l,conv1:h,conv2:f}}function a(i,s,u,c){c===void 0&&(c=!1);var l=o(i,s,u,c),h=l.conv0,f=l.conv1,d=l.conv2,p=n(s,s,u+"/conv3");return{conv0:h,conv1:f,conv2:d,conv3:p}}return{extractDenseBlock3Params:o,extractDenseBlock4Params:a}}function Jg(r){var e=[],t=Ke(r),n=t.extractWeights,o=t.getRemainingWeights,a=xc(n,e).extractDenseBlock4Params,i=a(3,32,"dense0",!0),s=a(32,64,"dense1"),u=a(64,128,"dense2"),c=a(128,256,"dense3");if(o().length!==0)throw new Error("weights remaing after extract: "+o().length);return{paramMappings:e,params:{dense0:i,dense1:s,dense2:u,dense3:c}}}function bc(r){return function(e){var t=r(e+"/filters",4),n=r(e+"/bias",1);return{filters:t,bias:n}}}function wc(r,e){var t=un(r,e),n=bc(t),o=ri(t);function a(s,u){u===void 0&&(u=!1);var c=u?n(s+"/conv0"):o(s+"/conv0"),l=o(s+"/conv1"),h=o(s+"/conv2");return{conv0:c,conv1:l,conv2:h}}function i(s,u){u===void 0&&(u=!1);var c=u?n(s+"/conv0"):o(s+"/conv0"),l=o(s+"/conv1"),h=o(s+"/conv2"),f=o(s+"/conv3");return{conv0:c,conv1:l,conv2:h,conv3:f}}return{extractDenseBlock3Params:a,extractDenseBlock4Params:i}}function Qg(r){var e=[],t=wc(r,e).extractDenseBlock4Params,n={dense0:t("dense0",!0),dense1:t("dense1"),dense2:t("dense2"),dense3:t("dense3")};return Xe(r,e),{params:n,paramMappings:e}}var Cc=function(r){rt(e,r);function e(){return r.call(this,"FaceFeatureExtractor")||this}return e.prototype.forwardInput=function(t){var n=this.params;if(!n)throw new Error("FaceFeatureExtractor - load model before inference");return X(function(){var o=t.toBatchTensor(112,!0),a=[122.782,117.001,104.298],i=xr(o,a).div(q(255)),s=vo(i,n.dense0,!0);return s=vo(s,n.dense1),s=vo(s,n.dense2),s=vo(s,n.dense3),s=pr(s,[7,7],[2,2],"valid"),s})},e.prototype.forward=function(t){return Q(this,void 0,void 0,function(){var n;return Z(this,function(o){switch(o.label){case 0:return n=this.forwardInput,[4,zt(t)];case 1:return[2,n.apply(this,[o.sent()])]}})})},e.prototype.getDefaultModelName=function(){return"face_feature_extractor_model"},e.prototype.extractParamsFromWeigthMap=function(t){return Qg(t)},e.prototype.extractParams=function(t){return Jg(t)},e}(je);function Ne(r,e){return X(function(){return ct(eo(r,e.weights),e.bias)})}function Zg(r,e,t){var n=[],o=Ke(r),a=o.extractWeights,i=o.getRemainingWeights,s=ei(a,n),u=s(e,t,"fc");if(i().length!==0)throw new Error("weights remaing after extract: "+i().length);return{paramMappings:n,params:{fc:u}}}function tm(r){var e=[],t=un(r,e);function n(a){var i=t(a+"/weights",2),s=t(a+"/bias",1);return{weights:i,bias:s}}var o={fc:n("fc")};return Xe(r,e),{params:o,paramMappings:e}}function Ec(r){var e={},t={};return Object.keys(r).forEach(function(n){var o=n.startsWith("fc")?t:e;o[n]=r[n]}),{featureExtractorMap:e,classifierMap:t}}var _c=function(r){rt(e,r);function e(t,n){var o=r.call(this,t)||this;return o._faceFeatureExtractor=n,o}return Object.defineProperty(e.prototype,"faceFeatureExtractor",{get:function(){return this._faceFeatureExtractor},enumerable:!0,configurable:!0}),e.prototype.runNet=function(t){var n=this,o=this.params;if(!o)throw new Error(this._name+" - load model before inference");return X(function(){var a=t instanceof po?n.faceFeatureExtractor.forwardInput(t):t;return Ne(a.as2D(a.shape[0],-1),o.fc)})},e.prototype.dispose=function(t){t===void 0&&(t=!0),this.faceFeatureExtractor.dispose(t),r.prototype.dispose.call(this,t)},e.prototype.loadClassifierParams=function(t){var n=this.extractClassifierParams(t),o=n.params,a=n.paramMappings;this._params=o,this._paramMappings=a},e.prototype.extractClassifierParams=function(t){return Zg(t,this.getClassifierChannelsIn(),this.getClassifierChannelsOut())},e.prototype.extractParamsFromWeigthMap=function(t){var n=Ec(t),o=n.featureExtractorMap,a=n.classifierMap;return this.faceFeatureExtractor.loadFromWeightMap(o),tm(a)},e.prototype.extractParams=function(t){var n=this.getClassifierChannelsIn(),o=this.getClassifierChannelsOut(),a=o*n+o,i=t.slice(0,t.length-a),s=t.slice(t.length-a);return this.faceFeatureExtractor.extractWeights(i),this.extractClassifierParams(s)},e}(je),Ic=["neutral","happy","sad","angry","fearful","disgusted","surprised"],em=function(){function r(e){var t=this;if(e.length!==7)throw new Error("FaceExpressions.constructor - expected probabilities.length to be 7, have: "+e.length);Ic.forEach(function(n,o){t[n]=e[o]})}return r.prototype.asSortedArray=function(){var e=this;return Ic.map(function(t){return{expression:t,probability:e[t]}}).sort(function(t,n){return n.probability-t.probability})},r}(),nm=function(r){rt(e,r);function e(t){return t===void 0&&(t=new Cc),r.call(this,"FaceExpressionNet",t)||this}return e.prototype.forwardInput=function(t){var n=this;return X(function(){return Ve(n.runNet(t))})},e.prototype.forward=function(t){return Q(this,void 0,void 0,function(){var n;return Z(this,function(o){switch(o.label){case 0:return n=this.forwardInput,[4,zt(t)];case 1:return[2,n.apply(this,[o.sent()])]}})})},e.prototype.predictExpressions=function(t){return Q(this,void 0,void 0,function(){var n,o,a,i,s=this;return Z(this,function(u){switch(u.label){case 0:return[4,zt(t)];case 1:return n=u.sent(),[4,this.forwardInput(n)];case 2:return o=u.sent(),[4,Promise.all(Pt(o).map(function(c){return Q(s,void 0,void 0,function(){var l;return Z(this,function(h){switch(h.label){case 0:return[4,c.data()];case 1:return l=h.sent(),c.dispose(),[2,l]}})})}))];case 3:return a=u.sent(),o.dispose(),i=a.map(function(c){return new em(c)}),[2,n.isBatchInput?i:i[0]]}})})},e.prototype.getDefaultModelName=function(){return"face_expression_model"},e.prototype.getClassifierChannelsIn=function(){return 256},e.prototype.getClassifierChannelsOut=function(){return 7},e}(_c);function Sc(r,e){var t={expressions:e};return Object.assign({},r,t)}function rm(r){return Vg(r)&&r.landmarks instanceof lo&&r.unshiftedLandmarks instanceof lo&&r.alignedRect instanceof Fe}function oi(r,e){var t=r.detection.box,n=e.shiftBy(t.x,t.y),o=n.align(),a=r.detection.imageDims,i=new Fe(r.detection.score,o.rescale(a.reverse()),a),s={landmarks:n,unshiftedLandmarks:e,alignedRect:i};return Object.assign({},r,s)}function om(r,e){var t=go(r,e),n=ni(r,e);function o(i,s,u){var c=n(i,s,u+"/separable_conv0"),l=n(s,s,u+"/separable_conv1"),h=t(i,s,1,u+"/expansion_conv");return{separable_conv0:c,separable_conv1:l,expansion_conv:h}}function a(i,s){var u=n(i,i,s+"/separable_conv0"),c=n(i,i,s+"/separable_conv1"),l=n(i,i,s+"/separable_conv2");return{separable_conv0:u,separable_conv1:c,separable_conv2:l}}return{extractConvParams:t,extractSeparableConvParams:n,extractReductionBlockParams:o,extractMainBlockParams:a}}function am(r,e){var t=[],n=Ke(r),o=n.extractWeights,a=n.getRemainingWeights,i=om(o,t),s=i.extractConvParams,u=i.extractSeparableConvParams,c=i.extractReductionBlockParams,l=i.extractMainBlockParams,h=s(3,32,3,"entry_flow/conv_in"),f=c(32,64,"entry_flow/reduction_block_0"),d=c(64,128,"entry_flow/reduction_block_1"),p={conv_in:h,reduction_block_0:f,reduction_block_1:d},v={};mr(e,0,1).forEach(function(b){v["main_block_"+b]=l(128,"middle_flow/main_block_"+b)});var g=c(128,256,"exit_flow/reduction_block"),m=u(256,512,"exit_flow/separable_conv"),y={reduction_block:g,separable_conv:m};if(a().length!==0)throw new Error("weights remaing after extract: "+a().length);return{paramMappings:t,params:{entry_flow:p,middle_flow:v,exit_flow:y}}}function im(r,e){var t=un(r,e),n=bc(t),o=ri(t);function a(s){var u=o(s+"/separable_conv0"),c=o(s+"/separable_conv1"),l=n(s+"/expansion_conv");return{separable_conv0:u,separable_conv1:c,expansion_conv:l}}function i(s){var u=o(s+"/separable_conv0"),c=o(s+"/separable_conv1"),l=o(s+"/separable_conv2");return{separable_conv0:u,separable_conv1:c,separable_conv2:l}}return{extractConvParams:n,extractSeparableConvParams:o,extractReductionBlockParams:a,extractMainBlockParams:i}}function sm(r,e){var t=[],n=im(r,t),o=n.extractConvParams,a=n.extractSeparableConvParams,i=n.extractReductionBlockParams,s=n.extractMainBlockParams,u=o("entry_flow/conv_in"),c=i("entry_flow/reduction_block_0"),l=i("entry_flow/reduction_block_1"),h={conv_in:u,reduction_block_0:c,reduction_block_1:l},f={};mr(e,0,1).forEach(function(g){f["main_block_"+g]=s("middle_flow/main_block_"+g)});var d=i("exit_flow/reduction_block"),p=a("exit_flow/separable_conv"),v={reduction_block:d,separable_conv:p};return Xe(r,t),{params:{entry_flow:h,middle_flow:f,exit_flow:v},paramMappings:t}}function Rc(r,e,t){return ct(pe(r,e.filters,t,"same"),e.bias)}function ai(r,e,t){t===void 0&&(t=!0);var n=t?It(r):r;return n=ce(n,e.separable_conv0,[1,1]),n=ce(It(n),e.separable_conv1,[1,1]),n=Ut(n,[3,3],[2,2],"same"),n=ct(n,Rc(r,e.expansion_conv,[2,2])),n}function um(r,e){var t=ce(It(r),e.separable_conv0,[1,1]);return t=ce(It(t),e.separable_conv1,[1,1]),t=ce(It(t),e.separable_conv2,[1,1]),t=ct(t,r),t}var cm=function(r){rt(e,r);function e(t){var n=r.call(this,"TinyXception")||this;return n._numMainBlocks=t,n}return e.prototype.forwardInput=function(t){var n=this,o=this.params;if(!o)throw new Error("TinyXception - load model before inference");return X(function(){var a=t.toBatchTensor(112,!0),i=[122.782,117.001,104.298],s=xr(a,i).div(q(256)),u=It(Rc(s,o.entry_flow.conv_in,[2,2]));return u=ai(u,o.entry_flow.reduction_block_0,!1),u=ai(u,o.entry_flow.reduction_block_1),mr(n._numMainBlocks,0,1).forEach(function(c){u=um(u,o.middle_flow["main_block_"+c])}),u=ai(u,o.exit_flow.reduction_block),u=It(ce(u,o.exit_flow.separable_conv,[1,1])),u})},e.prototype.forward=function(t){return Q(this,void 0,void 0,function(){var n;return Z(this,function(o){switch(o.label){case 0:return n=this.forwardInput,[4,zt(t)];case 1:return[2,n.apply(this,[o.sent()])]}})})},e.prototype.getDefaultModelName=function(){return"tiny_xception_model"},e.prototype.extractParamsFromWeigthMap=function(t){return sm(t,this._numMainBlocks)},e.prototype.extractParams=function(t){return am(t,this._numMainBlocks)},e}(je);function lm(r){var e=[],t=Ke(r),n=t.extractWeights,o=t.getRemainingWeights,a=ei(n,e),i=a(512,1,"fc/age"),s=a(512,2,"fc/gender");if(o().length!==0)throw new Error("weights remaing after extract: "+o().length);return{paramMappings:e,params:{fc:{age:i,gender:s}}}}function hm(r){var e=[],t=un(r,e);function n(a){var i=t(a+"/weights",2),s=t(a+"/bias",1);return{weights:i,bias:s}}var o={fc:{age:n("fc/age"),gender:n("fc/gender")}};return Xe(r,e),{params:o,paramMappings:e}}var mo;(function(r){r.FEMALE="female",r.MALE="male"})(mo||(mo={}));var fm=function(r){rt(e,r);function e(t){t===void 0&&(t=new cm(2));var n=r.call(this,"AgeGenderNet")||this;return n._faceFeatureExtractor=t,n}return Object.defineProperty(e.prototype,"faceFeatureExtractor",{get:function(){return this._faceFeatureExtractor},enumerable:!0,configurable:!0}),e.prototype.runNet=function(t){var n=this,o=this.params;if(!o)throw new Error(this._name+" - load model before inference");return X(function(){var a=t instanceof po?n.faceFeatureExtractor.forwardInput(t):t,i=pr(a,[7,7],[2,2],"valid").as2D(a.shape[0],-1),s=Ne(i,o.fc.age).as1D(),u=Ne(i,o.fc.gender);return{age:s,gender:u}})},e.prototype.forwardInput=function(t){var n=this;return X(function(){var o=n.runNet(t),a=o.age,i=o.gender;return{age:a,gender:Ve(i)}})},e.prototype.forward=function(t){return Q(this,void 0,void 0,function(){var n;return Z(this,function(o){switch(o.label){case 0:return n=this.forwardInput,[4,zt(t)];case 1:return[2,n.apply(this,[o.sent()])]}})})},e.prototype.predictAgeAndGender=function(t){return Q(this,void 0,void 0,function(){var n,o,a,i,s,u,c=this;return Z(this,function(l){switch(l.label){case 0:return[4,zt(t)];case 1:return n=l.sent(),[4,this.forwardInput(n)];case 2:return o=l.sent(),a=Pt(o.age),i=Pt(o.gender),s=a.map(function(h,f){return{ageTensor:h,genderTensor:i[f]}}),[4,Promise.all(s.map(function(h){var f=h.ageTensor,d=h.genderTensor;return Q(c,void 0,void 0,function(){var p,v,g,m,y;return Z(this,function(b){switch(b.label){case 0:return[4,f.data()];case 1:return p=b.sent()[0],[4,d.data()];case 2:return v=b.sent()[0],g=v>.5,m=g?mo.MALE:mo.FEMALE,y=g?v:1-v,f.dispose(),d.dispose(),[2,{age:p,gender:m,genderProbability:y}]}})})}))];case 3:return u=l.sent(),o.age.dispose(),o.gender.dispose(),[2,n.isBatchInput?u:u[0]]}})})},e.prototype.getDefaultModelName=function(){return"age_gender_model"},e.prototype.dispose=function(t){t===void 0&&(t=!0),this.faceFeatureExtractor.dispose(t),r.prototype.dispose.call(this,t)},e.prototype.loadClassifierParams=function(t){var n=this.extractClassifierParams(t),o=n.params,a=n.paramMappings;this._params=o,this._paramMappings=a},e.prototype.extractClassifierParams=function(t){return lm(t)},e.prototype.extractParamsFromWeigthMap=function(t){var n=Ec(t),o=n.featureExtractorMap,a=n.classifierMap;return this.faceFeatureExtractor.loadFromWeightMap(o),hm(a)},e.prototype.extractParams=function(t){var n=1539,o=t.slice(0,t.length-n),a=t.slice(t.length-n);return this.faceFeatureExtractor.extractWeights(o),this.extractClassifierParams(a)},e}(je),kc=function(r){rt(e,r);function e(){return r!==null&&r.apply(this,arguments)||this}return e.prototype.postProcess=function(t,n,o){var a=o.map(function(s){var u=s.width,c=s.height,l=n/Math.max(c,u);return{width:u*l,height:c*l}}),i=a.length;return X(function(){var s=function(f,d){return se([Ae([68],f),Ae([68],d)],1).as2D(1,136).as1D()},u=function(f,d){var p=a[f],v=p.width,g=p.height;return d(v,g)?Math.abs(v-g)/2:0},c=function(f){return u(f,function(d,p){return d<p})},l=function(f){return u(f,function(d,p){return p<d})},h=t.mul(Ae([i,136],n)).sub(se(Array.from(Array(i),function(f,d){return s(c(d),l(d))}))).div(se(Array.from(Array(i),function(f,d){return s(a[d].width,a[d].height)})));return h})},e.prototype.forwardInput=function(t){var n=this;return X(function(){var o=n.runNet(t);return n.postProcess(o,t.inputSize,t.inputDimensions.map(function(a){var i=a[0],s=a[1];return{height:i,width:s}}))})},e.prototype.forward=function(t){return Q(this,void 0,void 0,function(){var n;return Z(this,function(o){switch(o.label){case 0:return n=this.forwardInput,[4,zt(t)];case 1:return[2,n.apply(this,[o.sent()])]}})})},e.prototype.detectLandmarks=function(t){return Q(this,void 0,void 0,function(){var n,o,a,i=this;return Z(this,function(s){switch(s.label){case 0:return[4,zt(t)];case 1:return n=s.sent(),o=X(function(){return Pt(i.forwardInput(n))}),[4,Promise.all(o.map(function(u,c){return Q(i,void 0,void 0,function(){var l,h,f,d,p;return Z(this,function(v){switch(v.label){case 0:return f=(h=Array).from,[4,u.data()];case 1:return l=f.apply(h,[v.sent()]),d=l.filter(function(g,m){return ec(m)}),p=l.filter(function(g,m){return!ec(m)}),[2,new zg(Array(68).fill(0).map(function(g,m){return new mt(d[m],p[m])}),{height:n.getInputHeight(c),width:n.getInputWidth(c)})]}})})}))];case 2:return a=s.sent(),o.forEach(function(u){return u.dispose()}),[2,n.isBatchInput?a:a[0]]}})})},e.prototype.getClassifierChannelsOut=function(){return 136},e}(_c),Dc=function(r){rt(e,r);function e(t){return t===void 0&&(t=new Cc),r.call(this,"FaceLandmark68Net",t)||this}return e.prototype.getDefaultModelName=function(){return"face_landmark_68_model"},e.prototype.getClassifierChannelsIn=function(){return 256},e}(kc);function dm(r){var e=[],t=wc(r,e).extractDenseBlock3Params,n={dense0:t("dense0",!0),dense1:t("dense1"),dense2:t("dense2")};return Xe(r,e),{params:n,paramMappings:e}}function pm(r){var e=[],t=Ke(r),n=t.extractWeights,o=t.getRemainingWeights,a=xc(n,e).extractDenseBlock3Params,i=a(3,32,"dense0",!0),s=a(32,64,"dense1"),u=a(64,128,"dense2");if(o().length!==0)throw new Error("weights remaing after extract: "+o().length);return{paramMappings:e,params:{dense0:i,dense1:s,dense2:u}}}var vm=function(r){rt(e,r);function e(){return r.call(this,"TinyFaceFeatureExtractor")||this}return e.prototype.forwardInput=function(t){var n=this.params;if(!n)throw new Error("TinyFaceFeatureExtractor - load model before inference");return X(function(){var o=t.toBatchTensor(112,!0),a=[122.782,117.001,104.298],i=xr(o,a).div(q(255)),s=ti(i,n.dense0,!0);return s=ti(s,n.dense1),s=ti(s,n.dense2),s=pr(s,[14,14],[2,2],"valid"),s})},e.prototype.forward=function(t){return Q(this,void 0,void 0,function(){var n;return Z(this,function(o){switch(o.label){case 0:return n=this.forwardInput,[4,zt(t)];case 1:return[2,n.apply(this,[o.sent()])]}})})},e.prototype.getDefaultModelName=function(){return"face_feature_extractor_tiny_model"},e.prototype.extractParamsFromWeigthMap=function(t){return dm(t)},e.prototype.extractParams=function(t){return pm(t)},e}(je),gm=function(r){rt(e,r);function e(t){return t===void 0&&(t=new vm),r.call(this,"FaceLandmark68TinyNet",t)||this}return e.prototype.getDefaultModelName=function(){return"face_landmark_68_tiny_model"},e.prototype.getClassifierChannelsIn=function(){return 128},e}(kc);(function(r){rt(e,r);function e(){return r!==null&&r.apply(this,arguments)||this}return e})(Dc);function mm(r,e){return ct(Kt(r,e.weights),e.biases)}function ii(r,e,t,n,o){o===void 0&&(o="same");var a=e.conv,i=a.filters,s=a.bias,u=pe(r,i,t,o);return u=ct(u,s),u=mm(u,e.scale),n?It(u):u}function ym(r,e){return ii(r,e,[1,1],!0)}function Ac(r,e){return ii(r,e,[1,1],!1)}function Tc(r,e){return ii(r,e,[2,2],!0,"valid")}function xm(r,e){function t(s,u,c){var l=r(s),h=l.length/(u*c*c);if(Tg(h))throw new Error("depth has to be an integer: "+h+", weights.length: "+l.length+", numFilters: "+u+", filterSize: "+c);return X(function(){return nn(te(l,[u,h,c,c]),[2,3,1,0])})}function n(s,u,c,l){var h=t(s,u,c),f=Ft(r(u));return e.push({paramPath:l+"/filters"},{paramPath:l+"/bias"}),{filters:h,bias:f}}function o(s,u){var c=Ft(r(s)),l=Ft(r(s));return e.push({paramPath:u+"/weights"},{paramPath:u+"/biases"}),{weights:c,biases:l}}function a(s,u,c,l){var h=n(s,u,c,l+"/conv"),f=o(u,l+"/scale");return{conv:h,scale:f}}function i(s,u,c,l,h){h===void 0&&(h=!1);var f=a((h?.5:1)*s,u,c,l+"/conv1"),d=a(s,u,c,l+"/conv2");return{conv1:f,conv2:d}}return{extractConvLayerParams:a,extractResidualLayerParams:i}}function bm(r){var e=Ke(r),t=e.extractWeights,n=e.getRemainingWeights,o=[],a=xm(t,o),i=a.extractConvLayerParams,s=a.extractResidualLayerParams,u=i(4704,32,7,"conv32_down"),c=s(9216,32,3,"conv32_1"),l=s(9216,32,3,"conv32_2"),h=s(9216,32,3,"conv32_3"),f=s(36864,64,3,"conv64_down",!0),d=s(36864,64,3,"conv64_1"),p=s(36864,64,3,"conv64_2"),v=s(36864,64,3,"conv64_3"),g=s(147456,128,3,"conv128_down",!0),m=s(147456,128,3,"conv128_1"),y=s(147456,128,3,"conv128_2"),b=s(589824,256,3,"conv256_down",!0),x=s(589824,256,3,"conv256_1"),w=s(589824,256,3,"conv256_2"),C=s(589824,256,3,"conv256_down_out"),k=X(function(){return nn(tn(t(256*128),[128,256]),[1,0])});if(o.push({paramPath:"fc"}),n().length!==0)throw new Error("weights remaing after extract: "+n().length);var R={conv32_down:u,conv32_1:c,conv32_2:l,conv32_3:h,conv64_down:f,conv64_1:d,conv64_2:p,conv64_3:v,conv128_down:g,conv128_1:m,conv128_2:y,conv256_down:b,conv256_1:x,conv256_2:w,conv256_down_out:C,fc:k};return{params:R,paramMappings:o}}function wm(r,e){var t=un(r,e);function n(i){var s=t(i+"/scale/weights",1),u=t(i+"/scale/biases",1);return{weights:s,biases:u}}function o(i){var s=t(i+"/conv/filters",4),u=t(i+"/conv/bias",1),c=n(i);return{conv:{filters:s,bias:u},scale:c}}function a(i){return{conv1:o(i+"/conv1"),conv2:o(i+"/conv2")}}return{extractConvLayerParams:o,extractResidualLayerParams:a}}function Cm(r){var e=[],t=wm(r,e),n=t.extractConvLayerParams,o=t.extractResidualLayerParams,a=n("conv32_down"),i=o("conv32_1"),s=o("conv32_2"),u=o("conv32_3"),c=o("conv64_down"),l=o("conv64_1"),h=o("conv64_2"),f=o("conv64_3"),d=o("conv128_down"),p=o("conv128_1"),v=o("conv128_2"),g=o("conv256_down"),m=o("conv256_1"),y=o("conv256_2"),b=o("conv256_down_out"),x=r.fc;if(e.push({originalPath:"fc",paramPath:"fc"}),!Ag(x))throw new Error("expected weightMap[fc] to be a Tensor2D, instead have "+x);var w={conv32_down:a,conv32_1:i,conv32_2:s,conv32_3:u,conv64_down:c,conv64_1:l,conv64_2:h,conv64_3:f,conv128_down:d,conv128_1:p,conv128_2:v,conv256_down:g,conv256_1:m,conv256_2:y,conv256_down_out:b,fc:x};return Xe(r,e),{params:w,paramMappings:e}}function Me(r,e){var t=ym(r,e.conv1);return t=Ac(t,e.conv2),t=ct(t,r),t=It(t),t}function yo(r,e){var t=Tc(r,e.conv1);t=Ac(t,e.conv2);var n=pr(r,2,2,"valid"),o=Ct(n.shape),a=n.shape[3]!==t.shape[3],i=n.shape[1]!==t.shape[1]||n.shape[2]!==t.shape[2];if(i){var s=gr(t.shape);s[1]=1;var u=Ct(s);t=Mt([t,u],1);var c=gr(t.shape);c[2]=1;var l=Ct(c);t=Mt([t,l],2)}return n=a?Mt([n,o],3):n,t=ct(n,t),t=It(t),t}var Em=function(r){rt(e,r);function e(){return r.call(this,"FaceRecognitionNet")||this}return e.prototype.forwardInput=function(t){var n=this.params;if(!n)throw new Error("FaceRecognitionNet - load model before inference");return X(function(){var o=t.toBatchTensor(150,!0).toFloat(),a=[122.782,117.001,104.298],i=xr(o,a).div(q(256)),s=Tc(i,n.conv32_down);s=Ut(s,3,2,"valid"),s=Me(s,n.conv32_1),s=Me(s,n.conv32_2),s=Me(s,n.conv32_3),s=yo(s,n.conv64_down),s=Me(s,n.conv64_1),s=Me(s,n.conv64_2),s=Me(s,n.conv64_3),s=yo(s,n.conv128_down),s=Me(s,n.conv128_1),s=Me(s,n.conv128_2),s=yo(s,n.conv256_down),s=Me(s,n.conv256_1),s=Me(s,n.conv256_2),s=yo(s,n.conv256_down_out);var u=s.mean([1,2]),c=eo(u,n.fc);return c})},e.prototype.forward=function(t){return Q(this,void 0,void 0,function(){var n;return Z(this,function(o){switch(o.label){case 0:return n=this.forwardInput,[4,zt(t)];case 1:return[2,n.apply(this,[o.sent()])]}})})},e.prototype.computeFaceDescriptor=function(t){return Q(this,void 0,void 0,function(){var n,o,a,i=this;return Z(this,function(s){switch(s.label){case 0:return[4,zt(t)];case 1:return n=s.sent(),o=X(function(){return Pt(i.forwardInput(n))}),[4,Promise.all(o.map(function(u){return u.data()}))];case 2:return a=s.sent(),o.forEach(function(u){return u.dispose()}),[2,n.isBatchInput?a:a[0]]}})})},e.prototype.getDefaultModelName=function(){return"face_recognition_model"},e.prototype.extractParamsFromWeigthMap=function(t){return Cm(t)},e.prototype.extractParams=function(t){return bm(t)},e}(je);function Fc(r,e){var t={descriptor:e};return Object.assign({},r,t)}function Nc(r,e){var t={age:e};return Object.assign({},r,t)}function Mc(r,e,t){var n={gender:e,genderProbability:t};return Object.assign({},r,n)}var Pc=function(){function r(e){var t=e===void 0?{}:e,n=t.minFaceSize,o=t.scaleFactor,a=t.maxNumScales,i=t.scoreThresholds,s=t.scaleSteps;if(this._name="MtcnnOptions",this._minFaceSize=n||20,this._scaleFactor=o||.709,this._maxNumScales=a||10,this._scoreThresholds=i||[.6,.7,.7],this._scaleSteps=s,typeof this._minFaceSize!="number"||this._minFaceSize<0)throw new Error(this._name+" - expected minFaceSize to be a number > 0");if(typeof this._scaleFactor!="number"||this._scaleFactor<=0||this._scaleFactor>=1)throw new Error(this._name+" - expected scaleFactor to be a number between 0 and 1");if(typeof this._maxNumScales!="number"||this._maxNumScales<0)throw new Error(this._name+" - expected maxNumScales to be a number > 0");if(!Array.isArray(this._scoreThresholds)||this._scoreThresholds.length!==3||this._scoreThresholds.some(function(u){return typeof u!="number"}))throw new Error(this._name+" - expected scoreThresholds to be an array of numbers of length 3");if(this._scaleSteps&&(!Array.isArray(this._scaleSteps)||this._scaleSteps.some(function(u){return typeof u!="number"})))throw new Error(this._name+" - expected scaleSteps to be an array of numbers")}return Object.defineProperty(r.prototype,"minFaceSize",{get:function(){return this._minFaceSize},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"scaleFactor",{get:function(){return this._scaleFactor},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"maxNumScales",{get:function(){return this._maxNumScales},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"scoreThresholds",{get:function(){return this._scoreThresholds},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"scaleSteps",{get:function(){return this._scaleSteps},enumerable:!0,configurable:!0}),r}();function _m(r,e){function t(u,c){var l=te(r(9*u),[3,3,u,1]),h=Ft(r(u)),f=Ft(r(u)),d=Ft(r(u)),p=Ft(r(u));return e.push({paramPath:c+"/filters"},{paramPath:c+"/batch_norm_scale"},{paramPath:c+"/batch_norm_offset"},{paramPath:c+"/batch_norm_mean"},{paramPath:c+"/batch_norm_variance"}),{filters:l,batch_norm_scale:h,batch_norm_offset:f,batch_norm_mean:d,batch_norm_variance:p}}function n(u,c,l,h,f){var d=te(r(u*c*l*l),[l,l,u,c]),p=Ft(r(c));return e.push({paramPath:h+"/filters"},{paramPath:h+"/"+(f?"batch_norm_offset":"bias")}),{filters:d,bias:p}}function o(u,c,l,h){var f=n(u,c,l,h,!0),d=f.filters,p=f.bias;return{filters:d,batch_norm_offset:p}}function a(u,c,l){var h=t(u,l+"/depthwise_conv"),f=o(u,c,1,l+"/pointwise_conv");return{depthwise_conv:h,pointwise_conv:f}}function i(){var u=o(3,32,3,"mobilenetv1/conv_0"),c=a(32,64,"mobilenetv1/conv_1"),l=a(64,128,"mobilenetv1/conv_2"),h=a(128,128,"mobilenetv1/conv_3"),f=a(128,256,"mobilenetv1/conv_4"),d=a(256,256,"mobilenetv1/conv_5"),p=a(256,512,"mobilenetv1/conv_6"),v=a(512,512,"mobilenetv1/conv_7"),g=a(512,512,"mobilenetv1/conv_8"),m=a(512,512,"mobilenetv1/conv_9"),y=a(512,512,"mobilenetv1/conv_10"),b=a(512,512,"mobilenetv1/conv_11"),x=a(512,1024,"mobilenetv1/conv_12"),w=a(1024,1024,"mobilenetv1/conv_13");return{conv_0:u,conv_1:c,conv_2:l,conv_3:h,conv_4:f,conv_5:d,conv_6:p,conv_7:v,conv_8:g,conv_9:m,conv_10:y,conv_11:b,conv_12:x,conv_13:w}}function s(){var u=o(1024,256,1,"prediction_layer/conv_0"),c=o(256,512,3,"prediction_layer/conv_1"),l=o(512,128,1,"prediction_layer/conv_2"),h=o(128,256,3,"prediction_layer/conv_3"),f=o(256,128,1,"prediction_layer/conv_4"),d=o(128,256,3,"prediction_layer/conv_5"),p=o(256,64,1,"prediction_layer/conv_6"),v=o(64,128,3,"prediction_layer/conv_7"),g=n(512,12,1,"prediction_layer/box_predictor_0/box_encoding_predictor"),m=n(512,9,1,"prediction_layer/box_predictor_0/class_predictor"),y=n(1024,24,1,"prediction_layer/box_predictor_1/box_encoding_predictor"),b=n(1024,18,1,"prediction_layer/box_predictor_1/class_predictor"),x=n(512,24,1,"prediction_layer/box_predictor_2/box_encoding_predictor"),w=n(512,18,1,"prediction_layer/box_predictor_2/class_predictor"),C=n(256,24,1,"prediction_layer/box_predictor_3/box_encoding_predictor"),k=n(256,18,1,"prediction_layer/box_predictor_3/class_predictor"),R=n(256,24,1,"prediction_layer/box_predictor_4/box_encoding_predictor"),I=n(256,18,1,"prediction_layer/box_predictor_4/class_predictor"),S=n(128,24,1,"prediction_layer/box_predictor_5/box_encoding_predictor"),F=n(128,18,1,"prediction_layer/box_predictor_5/class_predictor"),T={box_encoding_predictor:g,class_predictor:m},L={box_encoding_predictor:y,class_predictor:b},O={box_encoding_predictor:x,class_predictor:w},B={box_encoding_predictor:C,class_predictor:k},V={box_encoding_predictor:R,class_predictor:I},U={box_encoding_predictor:S,class_predictor:F};return{conv_0:u,conv_1:c,conv_2:l,conv_3:h,conv_4:f,conv_5:d,conv_6:p,conv_7:v,box_predictor_0:T,box_predictor_1:L,box_predictor_2:O,box_predictor_3:B,box_predictor_4:V,box_predictor_5:U}}return{extractMobilenetV1Params:i,extractPredictionLayerParams:s}}function Im(r){var e=[],t=Ke(r),n=t.extractWeights,o=t.getRemainingWeights,a=_m(n,e),i=a.extractMobilenetV1Params,s=a.extractPredictionLayerParams,u=i(),c=s(),l=jo(n(5118*4),[1,5118,4]),h={extra_dim:l};if(e.push({paramPath:"output_layer/extra_dim"}),o().length!==0)throw new Error("weights remaing after extract: "+o().length);return{params:{mobilenetv1:u,prediction_layer:c,output_layer:h},paramMappings:e}}function Sm(r,e){var t=un(r,e);function n(c,l,h){var f=t(c+"/Conv2d_"+l+"_pointwise/weights",4,h+"/filters"),d=t(c+"/Conv2d_"+l+"_pointwise/convolution_bn_offset",1,h+"/batch_norm_offset");return{filters:f,batch_norm_offset:d}}function o(c){var l="mobilenetv1/conv_"+c,h="MobilenetV1/Conv2d_"+c+"_depthwise",f=l+"/depthwise_conv",d=l+"/pointwise_conv",p=t(h+"/depthwise_weights",4,f+"/filters"),v=t(h+"/BatchNorm/gamma",1,f+"/batch_norm_scale"),g=t(h+"/BatchNorm/beta",1,f+"/batch_norm_offset"),m=t(h+"/BatchNorm/moving_mean",1,f+"/batch_norm_mean"),y=t(h+"/BatchNorm/moving_variance",1,f+"/batch_norm_variance");return{depthwise_conv:{filters:p,batch_norm_scale:v,batch_norm_offset:g,batch_norm_mean:m,batch_norm_variance:y},pointwise_conv:n("MobilenetV1",c,d)}}function a(){return{conv_0:n("MobilenetV1",0,"mobilenetv1/conv_0"),conv_1:o(1),conv_2:o(2),conv_3:o(3),conv_4:o(4),conv_5:o(5),conv_6:o(6),conv_7:o(7),conv_8:o(8),conv_9:o(9),conv_10:o(10),conv_11:o(11),conv_12:o(12),conv_13:o(13)}}function i(c,l){var h=t(c+"/weights",4,l+"/filters"),f=t(c+"/biases",1,l+"/bias");return{filters:h,bias:f}}function s(c){var l=i("Prediction/BoxPredictor_"+c+"/BoxEncodingPredictor","prediction_layer/box_predictor_"+c+"/box_encoding_predictor"),h=i("Prediction/BoxPredictor_"+c+"/ClassPredictor","prediction_layer/box_predictor_"+c+"/class_predictor");return{box_encoding_predictor:l,class_predictor:h}}function u(){return{conv_0:n("Prediction",0,"prediction_layer/conv_0"),conv_1:n("Prediction",1,"prediction_layer/conv_1"),conv_2:n("Prediction",2,"prediction_layer/conv_2"),conv_3:n("Prediction",3,"prediction_layer/conv_3"),conv_4:n("Prediction",4,"prediction_layer/conv_4"),conv_5:n("Prediction",5,"prediction_layer/conv_5"),conv_6:n("Prediction",6,"prediction_layer/conv_6"),conv_7:n("Prediction",7,"prediction_layer/conv_7"),box_predictor_0:s(0),box_predictor_1:s(1),box_predictor_2:s(2),box_predictor_3:s(3),box_predictor_4:s(4),box_predictor_5:s(5)}}return{extractMobilenetV1Params:a,extractPredictionLayerParams:u}}function Rm(r){var e=[],t=Sm(r,e),n=t.extractMobilenetV1Params,o=t.extractPredictionLayerParams,a=r["Output/extra_dim"];if(e.push({originalPath:"Output/extra_dim",paramPath:"output_layer/extra_dim"}),!uo(a))throw new Error("expected weightMap['Output/extra_dim'] to be a Tensor3D, instead have "+a);var i={mobilenetv1:n(),prediction_layer:o(),output_layer:{extra_dim:a}};return Xe(r,e),{params:i,paramMappings:e}}function Pe(r,e,t){return X(function(){var n=pe(r,e.filters,t,"same");return n=ct(n,e.batch_norm_offset),pa(n,0,6)})}var km=.0010000000474974513;function Dm(r,e,t){return X(function(){var n=to(r,e.filters,t,"same");return n=iu(n,e.batch_norm_mean,e.batch_norm_variance,e.batch_norm_offset,e.batch_norm_scale,km),pa(n,0,6)})}function Am(r){return[2,4,6,12].some(function(e){return e===r})?[2,2]:[1,1]}function Tm(r,e){return X(function(){var t=null,n=Pe(r,e.conv_0,[2,2]),o=[e.conv_1,e.conv_2,e.conv_3,e.conv_4,e.conv_5,e.conv_6,e.conv_7,e.conv_8,e.conv_9,e.conv_10,e.conv_11,e.conv_12,e.conv_13];if(o.forEach(function(a,i){var s=i+1,u=Am(s);n=Dm(n,a.depthwise_conv,u),n=Pe(n,a.pointwise_conv,[1,1]),s===11&&(t=n)}),t===null)throw new Error("mobileNetV1 - output of conv layer 11 is null");return{out:n,conv11:t}})}function Fm(r,e,t,n,o){var a=r.shape[0],i=Math.min(t,a),s=e.map(function(l,h){return{score:l,boxIndex:h}}).filter(function(l){return l.score>o}).sort(function(l,h){return h.score-l.score}),u=function(l){return l<=n?1:0},c=[];return s.forEach(function(l){if(!(c.length>=i)){for(var h=l.score,f=c.length-1;f>=0;--f){var d=Nm(r,l.boxIndex,c[f]);if(d!==0&&(l.score*=u(d),l.score<=o))break}h===l.score&&c.push(l.boxIndex)}}),c}function Nm(r,e,t){var n=r.arraySync(),o=Math.min(n[e][0],n[e][2]),a=Math.min(n[e][1],n[e][3]),i=Math.max(n[e][0],n[e][2]),s=Math.max(n[e][1],n[e][3]),u=Math.min(n[t][0],n[t][2]),c=Math.min(n[t][1],n[t][3]),l=Math.max(n[t][0],n[t][2]),h=Math.max(n[t][1],n[t][3]),f=(i-o)*(s-a),d=(l-u)*(h-c);if(f<=0||d<=0)return 0;var p=Math.max(o,u),v=Math.max(a,c),g=Math.min(i,l),m=Math.min(s,h),y=Math.max(g-p,0)*Math.max(m-v,0);return y/(f+d-y)}function Mm(r){var e=Pt(nn(r,[1,0])),t=[Bt(e[2],e[0]),Bt(e[3],e[1])],n=[ct(e[0],xe(t[0],q(2))),ct(e[1],xe(t[1],q(2)))];return{sizes:t,centers:n}}function Pm(r,e){var t=Mm(r),n=t.sizes,o=t.centers,a=Pt(nn(e,[1,0])),i=xe(Kt(va(xe(a[2],q(5))),n[0]),q(2)),s=ct(Kt(xe(a[0],q(10)),n[0]),o[0]),u=xe(Kt(va(xe(a[3],q(5))),n[1]),q(2)),c=ct(Kt(xe(a[1],q(10)),n[1]),o[1]);return nn(se([Bt(s,i),Bt(c,u),ct(s,i),ct(c,u)]),[1,0])}function Om(r,e,t){return X(function(){var n=r.shape[0],o=Pm(me(Fn(t.extra_dim,[n,1,1]),[-1,4]),me(r,[-1,4]));o=me(o,[n,o.shape[0]/n,4]);var a=nu(Te(e,[0,0,1],[-1,-1,-1])),i=Te(a,[0,0,0],[-1,-1,1]);i=me(i,[n,i.shape[1]]);var s=Pt(o),u=Pt(i);return{boxes:s,scores:u}})}function jn(r,e){return X(function(){var t=r.shape[0],n=me(be(r,e.box_encoding_predictor),[t,-1,1,4]),o=me(be(r,e.class_predictor),[t,-1,3]);return{boxPredictionEncoding:n,classPrediction:o}})}function Bm(r,e,t){return X(function(){var n=Pe(r,t.conv_0,[1,1]),o=Pe(n,t.conv_1,[2,2]),a=Pe(o,t.conv_2,[1,1]),i=Pe(a,t.conv_3,[2,2]),s=Pe(i,t.conv_4,[1,1]),u=Pe(s,t.conv_5,[2,2]),c=Pe(u,t.conv_6,[1,1]),l=Pe(c,t.conv_7,[2,2]),h=jn(e,t.box_predictor_0),f=jn(r,t.box_predictor_1),d=jn(o,t.box_predictor_2),p=jn(i,t.box_predictor_3),v=jn(u,t.box_predictor_4),g=jn(l,t.box_predictor_5),m=Mt([h.boxPredictionEncoding,f.boxPredictionEncoding,d.boxPredictionEncoding,p.boxPredictionEncoding,v.boxPredictionEncoding,g.boxPredictionEncoding],1),y=Mt([h.classPrediction,f.classPrediction,d.classPrediction,p.classPrediction,v.classPrediction,g.classPrediction],1);return{boxPredictions:m,classPredictions:y}})}var br=function(){function r(e){var t=e===void 0?{}:e,n=t.minConfidence,o=t.maxResults;if(this._name="SsdMobilenetv1Options",this._minConfidence=n||.5,this._maxResults=o||100,typeof this._minConfidence!="number"||this._minConfidence<=0||this._minConfidence>=1)throw new Error(this._name+" - expected minConfidence to be a number between 0 and 1");if(typeof this._maxResults!="number")throw new Error(this._name+" - expected maxResults to be a number")}return Object.defineProperty(r.prototype,"minConfidence",{get:function(){return this._minConfidence},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"maxResults",{get:function(){return this._maxResults},enumerable:!0,configurable:!0}),r}(),Oc=function(r){rt(e,r);function e(){return r.call(this,"SsdMobilenetv1")||this}return e.prototype.forwardInput=function(t){var n=this.params;if(!n)throw new Error("SsdMobilenetv1 - load model before inference");return X(function(){var o=t.toBatchTensor(512,!1).toFloat(),a=Bt(Kt(o,q(.007843137718737125)),q(1)),i=Tm(a,n.mobilenetv1),s=Bm(i.out,i.conv11,n.prediction_layer),u=s.boxPredictions,c=s.classPredictions;return Om(u,c,n.output_layer)})},e.prototype.forward=function(t){return Q(this,void 0,void 0,function(){var n;return Z(this,function(o){switch(o.label){case 0:return n=this.forwardInput,[4,zt(t)];case 1:return[2,n.apply(this,[o.sent()])]}})})},e.prototype.locateFaces=function(t,n){return n===void 0&&(n={}),Q(this,void 0,void 0,function(){var o,a,i,s,u,c,l,h,f,d,p,v,g,m,y,b,x,w,C,k,R;return Z(this,function(I){switch(I.label){case 0:return o=new br(n),a=o.maxResults,i=o.minConfidence,[4,zt(t)];case 1:for(s=I.sent(),u=this.forwardInput(s),c=u.boxes,l=u.scores,h=c[0],f=l[0],d=1;d<c.length;d++)c[d].dispose(),l[d].dispose();return g=(v=Array).from,[4,f.data()];case 2:return p=g.apply(v,[I.sent()]),m=.5,y=Fm(h,p,a,m,i),b=s.getReshapedInputDimensions(0),x=s.inputSize,w=x/b.width,C=x/b.height,k=h.arraySync(),R=y.map(function(S){var F=[Math.max(0,k[S][0]),Math.min(1,k[S][2])].map(function(U){return U*C}),T=F[0],L=F[1],O=[Math.max(0,k[S][1]),Math.min(1,k[S][3])].map(function(U){return U*w}),B=O[0],V=O[1];return new Fe(p[S],new Xa(B,T,V-B,L-T),{height:s.getInputHeight(0),width:s.getInputWidth(0)})}),h.dispose(),f.dispose(),[2,R]}})})},e.prototype.getDefaultModelName=function(){return"ssd_mobilenetv1_model"},e.prototype.extractParamsFromWeigthMap=function(t){return Rm(t)},e.prototype.extractParams=function(t){return Im(t)},e}(je);(function(r){rt(e,r);function e(){return r!==null&&r.apply(this,arguments)||this}return e})(Oc);var Lm=.4,Wm=[new mt(.738768,.874946),new mt(2.42204,2.65704),new mt(4.30971,7.04493),new mt(10.246,4.59428),new mt(12.6868,11.8741)],Um=[new mt(1.603231,2.094468),new mt(6.041143,7.080126),new mt(2.882459,3.518061),new mt(4.266906,5.178857),new mt(9.041765,10.66308)],zm=[117.001,114.697,97.404],Vm="tiny_yolov2_model",Gm="tiny_yolov2_separable_conv_model",xo=function(r){return typeof r=="number"};function Hm(r){if(!r)throw new Error("invalid config: "+r);if(typeof r.withSeparableConvs!="boolean")throw new Error("config.withSeparableConvs has to be a boolean, have: "+r.withSeparableConvs);if(!xo(r.iouThreshold)||r.iouThreshold<0||r.iouThreshold>1)throw new Error("config.iouThreshold has to be a number between [0, 1], have: "+r.iouThreshold);if(!Array.isArray(r.classes)||!r.classes.length||!r.classes.every(function(e){return typeof e=="string"}))throw new Error("config.classes has to be an array class names: string[], have: "+JSON.stringify(r.classes));if(!Array.isArray(r.anchors)||!r.anchors.length||!r.anchors.map(function(e){return e||{}}).every(function(e){return xo(e.x)&&xo(e.y)}))throw new Error("config.anchors has to be an array of { x: number, y: number }, have: "+JSON.stringify(r.anchors));if(r.meanRgb&&(!Array.isArray(r.meanRgb)||r.meanRgb.length!==3||!r.meanRgb.every(xo)))throw new Error("config.meanRgb has to be an array of shape [number, number, number], have: "+JSON.stringify(r.meanRgb))}function si(r){return X(function(){var e=Kt(r,q(.10000000149011612));return ct(It(Bt(r,e)),e)})}function cn(r,e){return X(function(){var t=gn(r,[[0,0],[1,1],[1,1],[0,0]]);return t=pe(t,e.conv.filters,[1,1],"valid"),t=Bt(t,e.bn.sub),t=Kt(t,e.bn.truediv),t=ct(t,e.conv.bias),si(t)})}function ln(r,e){return X(function(){var t=gn(r,[[0,0],[1,1],[1,1],[0,0]]);return t=ba(t,e.depthwise_filter,e.pointwise_filter,[1,1],"valid"),t=ct(t,e.bias),si(t)})}function qm(r,e){var t=go(r,e);function n(i,s){var u=Ft(r(i)),c=Ft(r(i));return e.push({paramPath:s+"/sub"},{paramPath:s+"/truediv"}),{sub:u,truediv:c}}function o(i,s,u){var c=t(i,s,3,u+"/conv"),l=n(s,u+"/bn");return{conv:c,bn:l}}var a=ni(r,e);return{extractConvParams:t,extractConvWithBatchNormParams:o,extractSeparableConvParams:a}}function jm(r,e,t,n){var o=Ke(r),a=o.extractWeights,i=o.getRemainingWeights,s=[],u=qm(a,s),c=u.extractConvParams,l=u.extractConvWithBatchNormParams,h=u.extractSeparableConvParams,f;if(e.withSeparableConvs){var d=n[0],p=n[1],v=n[2],g=n[3],m=n[4],y=n[5],b=n[6],x=n[7],w=n[8],C=e.isFirstLayerConv2d?c(d,p,3,"conv0"):h(d,p,"conv0"),k=h(p,v,"conv1"),R=h(v,g,"conv2"),I=h(g,m,"conv3"),S=h(m,y,"conv4"),F=h(y,b,"conv5"),T=x?h(b,x,"conv6"):void 0,L=w?h(x,w,"conv7"):void 0,O=c(w||x||b,5*t,1,"conv8");f={conv0:C,conv1:k,conv2:R,conv3:I,conv4:S,conv5:F,conv6:T,conv7:L,conv8:O}}else{var d=n[0],p=n[1],v=n[2],g=n[3],m=n[4],y=n[5],b=n[6],x=n[7],w=n[8],C=l(d,p,"conv0"),k=l(p,v,"conv1"),R=l(v,g,"conv2"),I=l(g,m,"conv3"),S=l(m,y,"conv4"),F=l(y,b,"conv5"),T=l(b,x,"conv6"),L=l(x,w,"conv7"),O=c(w,5*t,1,"conv8");f={conv0:C,conv1:k,conv2:R,conv3:I,conv4:S,conv5:F,conv6:T,conv7:L,conv8:O}}if(i().length!==0)throw new Error("weights remaing after extract: "+i().length);return{params:f,paramMappings:s}}function Xm(r,e){var t=un(r,e);function n(s){var u=t(s+"/sub",1),c=t(s+"/truediv",1);return{sub:u,truediv:c}}function o(s){var u=t(s+"/filters",4),c=t(s+"/bias",1);return{filters:u,bias:c}}function a(s){var u=o(s+"/conv"),c=n(s+"/bn");return{conv:u,bn:c}}var i=ri(t);return{extractConvParams:o,extractConvWithBatchNormParams:a,extractSeparableConvParams:i}}function Km(r,e){var t=[],n=Xm(r,t),o=n.extractConvParams,a=n.extractConvWithBatchNormParams,i=n.extractSeparableConvParams,s;if(e.withSeparableConvs){var u=e.filterSizes&&e.filterSizes.length||9;s={conv0:e.isFirstLayerConv2d?o("conv0"):i("conv0"),conv1:i("conv1"),conv2:i("conv2"),conv3:i("conv3"),conv4:i("conv4"),conv5:i("conv5"),conv6:u>7?i("conv6"):void 0,conv7:u>8?i("conv7"):void 0,conv8:o("conv8")}}else s={conv0:a("conv0"),conv1:a("conv1"),conv2:a("conv2"),conv3:a("conv3"),conv4:a("conv4"),conv5:a("conv5"),conv6:a("conv6"),conv7:a("conv7"),conv8:o("conv8")};return Xe(r,t),{params:s,paramMappings:t}}var Bc;(function(r){r[r.XS=224]="XS",r[r.SM=320]="SM",r[r.MD=416]="MD",r[r.LG=608]="LG"})(Bc||(Bc={}));var ui=function(){function r(e){var t=e===void 0?{}:e,n=t.inputSize,o=t.scoreThreshold;if(this._name="TinyYolov2Options",this._inputSize=n||416,this._scoreThreshold=o||.5,typeof this._inputSize!="number"||this._inputSize%32!==0)throw new Error(this._name+" - expected inputSize to be a number divisible by 32");if(typeof this._scoreThreshold!="number"||this._scoreThreshold<=0||this._scoreThreshold>=1)throw new Error(this._name+" - expected scoreThreshold to be a number between 0 and 1")}return Object.defineProperty(r.prototype,"inputSize",{get:function(){return this._inputSize},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"scoreThreshold",{get:function(){return this._scoreThreshold},enumerable:!0,configurable:!0}),r}(),Lc=function(r){rt(e,r);function e(t){var n=r.call(this,"TinyYolov2")||this;return Hm(t),n._config=t,n}return Object.defineProperty(e.prototype,"config",{get:function(){return this._config},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"withClassScores",{get:function(){return this.config.withClassScores||this.config.classes.length>1},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"boxEncodingSize",{get:function(){return 5+(this.withClassScores?this.config.classes.length:0)},enumerable:!0,configurable:!0}),e.prototype.runTinyYolov2=function(t,n){var o=cn(t,n.conv0);return o=Ut(o,[2,2],[2,2],"same"),o=cn(o,n.conv1),o=Ut(o,[2,2],[2,2],"same"),o=cn(o,n.conv2),o=Ut(o,[2,2],[2,2],"same"),o=cn(o,n.conv3),o=Ut(o,[2,2],[2,2],"same"),o=cn(o,n.conv4),o=Ut(o,[2,2],[2,2],"same"),o=cn(o,n.conv5),o=Ut(o,[2,2],[1,1],"same"),o=cn(o,n.conv6),o=cn(o,n.conv7),be(o,n.conv8,"valid",!1)},e.prototype.runMobilenet=function(t,n){var o=this.config.isFirstLayerConv2d?si(be(t,n.conv0,"valid",!1)):ln(t,n.conv0);return o=Ut(o,[2,2],[2,2],"same"),o=ln(o,n.conv1),o=Ut(o,[2,2],[2,2],"same"),o=ln(o,n.conv2),o=Ut(o,[2,2],[2,2],"same"),o=ln(o,n.conv3),o=Ut(o,[2,2],[2,2],"same"),o=ln(o,n.conv4),o=Ut(o,[2,2],[2,2],"same"),o=ln(o,n.conv5),o=Ut(o,[2,2],[1,1],"same"),o=n.conv6?ln(o,n.conv6):o,o=n.conv7?ln(o,n.conv7):o,be(o,n.conv8,"valid",!1)},e.prototype.forwardInput=function(t,n){var o=this,a=this.params;if(!a)throw new Error("TinyYolov2 - load model before inference");return X(function(){var i=t.toBatchTensor(n,!1).toFloat();return i=o.config.meanRgb?xr(i,o.config.meanRgb):i,i=i.div(q(256)),o.config.withSeparableConvs?o.runMobilenet(i,a):o.runTinyYolov2(i,a)})},e.prototype.forward=function(t,n){return Q(this,void 0,void 0,function(){var o;return Z(this,function(a){switch(a.label){case 0:return o=this.forwardInput,[4,zt(t)];case 1:return[4,o.apply(this,[a.sent(),n])];case 2:return[2,a.sent()]}})})},e.prototype.detect=function(t,n){return n===void 0&&(n={}),Q(this,void 0,void 0,function(){var o,a,i,s,u,c,l,h,f,d,p,v,g,m,y=this;return Z(this,function(b){switch(b.label){case 0:return o=new ui(n),a=o.inputSize,i=o.scoreThreshold,[4,zt(t)];case 1:return s=b.sent(),[4,this.forwardInput(s,a)];case 2:return u=b.sent(),c=X(function(){return Pt(u)[0].expandDims()}),l={width:s.getInputWidth(0),height:s.getInputHeight(0)},[4,this.extractBoxes(c,s.getReshapedInputDimensions(0),i)];case 3:return h=b.sent(),u.dispose(),c.dispose(),f=h.map(function(x){return x.box}),d=h.map(function(x){return x.score}),p=h.map(function(x){return x.classScore}),v=h.map(function(x){return y.config.classes[x.label]}),g=yr(f.map(function(x){return x.rescale(a)}),d,this.config.iouThreshold,!0),m=g.map(function(x){return new oc(d[x],p[x],v[x],f[x],l)}),[2,m]}})})},e.prototype.getDefaultModelName=function(){return""},e.prototype.extractParamsFromWeigthMap=function(t){return Km(t,this.config)},e.prototype.extractParams=function(t){var n=this.config.filterSizes||e.DEFAULT_FILTER_SIZES,o=n?n.length:void 0;if(o!==7&&o!==8&&o!==9)throw new Error("TinyYolov2 - expected 7 | 8 | 9 convolutional filters, but found "+o+" filterSizes in config");return jm(t,this.config,this.boxEncodingSize,n)},e.prototype.extractBoxes=function(t,n,o){return Q(this,void 0,void 0,function(){var a,i,s,u,c,l,h,f,d,p,v,g,m,y,b,x,w,C,k,R,I,S,F,T,L,O,B,V,U,W=this;return Z(this,function(G){switch(G.label){case 0:return a=n.width,i=n.height,s=Math.max(a,i),u=s/a,c=s/i,l=t.shape[1],h=this.config.anchors.length,f=X(function(){var H=t.reshape([l,l,h,W.boxEncodingSize]),j=H.slice([0,0,0,0],[l,l,h,4]),tt=H.slice([0,0,0,4],[l,l,h,1]),et=W.withClassScores?Ve(H.slice([0,0,0,5],[l,l,h,W.config.classes.length]),3):q(0);return[j,tt,et]}),d=f[0],p=f[1],v=f[2],g=[],[4,p.array()];case 1:return m=G.sent(),[4,d.array()];case 2:y=G.sent(),b=0,G.label=3;case 3:if(!(b<l))return[3,12];x=0,G.label=4;case 4:if(!(x<l))return[3,11];w=0,G.label=5;case 5:return w<h?(C=ja(m[b][x][w][0]),!o||C>o?(k=(x+ja(y[b][x][w][0]))/l*u,R=(b+ja(y[b][x][w][1]))/l*c,I=Math.exp(y[b][x][w][2])*this.config.anchors[w].x/l*u,S=Math.exp(y[b][x][w][3])*this.config.anchors[w].y/l*c,F=k-I/2,T=R-S/2,L={row:b,col:x,anchor:w},this.withClassScores?[4,this.extractPredictedClass(v,L)]:[3,7]):[3,9]):[3,10];case 6:return U=G.sent(),[3,8];case 7:U={classScore:1,label:0},G.label=8;case 8:O=U,B=O.classScore,V=O.label,g.push(Yt({box:new co(F,T,F+I,T+S),score:C,classScore:C*B,label:V},L)),G.label=9;case 9:return w++,[3,5];case 10:return x++,[3,4];case 11:return b++,[3,3];case 12:return d.dispose(),p.dispose(),v.dispose(),[2,g]}})})},e.prototype.extractPredictedClass=function(t,n){return Q(this,void 0,void 0,function(){var o,a,i,s;return Z(this,function(u){switch(u.label){case 0:return o=n.row,a=n.col,i=n.anchor,[4,t.array()];case 1:return s=u.sent(),[2,Array(this.config.classes.length).fill(0).map(function(c,l){return s[o][a][i][l]}).map(function(c,l){return{classScore:c,label:l}}).reduce(function(c,l){return c.classScore>l.classScore?c:l})]}})})},e.DEFAULT_FILTER_SIZES=[3,16,32,64,128,256,512,1024,1024],e}(je),$m=function(r){rt(e,r);function e(t){t===void 0&&(t=!0);var n=this,o=Object.assign({},{withSeparableConvs:t,iouThreshold:Lm,classes:["face"]},t?{anchors:Um,meanRgb:zm}:{anchors:Wm,withClassScores:!0});return n=r.call(this,o)||this,n}return Object.defineProperty(e.prototype,"withSeparableConvs",{get:function(){return this.config.withSeparableConvs},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"anchors",{get:function(){return this.config.anchors},enumerable:!0,configurable:!0}),e.prototype.locateFaces=function(t,n){return Q(this,void 0,void 0,function(){var o;return Z(this,function(a){switch(a.label){case 0:return[4,this.detect(t,n)];case 1:return o=a.sent(),[2,o.map(function(i){return new Fe(i.score,i.relativeBox,{width:i.imageWidth,height:i.imageHeight})})]}})})},e.prototype.getDefaultModelName=function(){return this.withSeparableConvs?Gm:Vm},e.prototype.extractParamsFromWeigthMap=function(t){return r.prototype.extractParamsFromWeigthMap.call(this,t)},e}(Lc),Wc=function(r){rt(e,r);function e(){var t=r!==null&&r.apply(this,arguments)||this;return t._name="TinyFaceDetectorOptions",t}return e}(ui),wr=function(){function r(){}return r.prototype.then=function(e){return Q(this,void 0,void 0,function(){var t;return Z(this,function(n){switch(n.label){case 0:return t=e,[4,this.run()];case 1:return[2,t.apply(void 0,[n.sent()])]}})})},r.prototype.run=function(){return Q(this,void 0,void 0,function(){return Z(this,function(e){throw new Error("ComposableTask - run is not implemented")})})},r}();function bo(r,e,t,n,o){return o===void 0&&(o=function(a){var i=a.alignedRect;return i}),Q(this,void 0,void 0,function(){var a,i,s,u,c;return Z(this,function(l){switch(l.label){case 0:return a=r.map(function(h){return rm(h)?o(h):h.detection}),s=n,s?[3,5]:e instanceof Et?[4,Za(e,a)]:[3,2];case 1:return u=l.sent(),[3,4];case 2:return[4,Qa(e,a)];case 3:u=l.sent(),l.label=4;case 4:s=u,l.label=5;case 5:return i=s,[4,t(i)];case 6:return c=l.sent(),i.forEach(function(h){return h instanceof Et&&h.dispose()}),[2,c]}})})}function ci(r,e,t,n,o){return Q(this,void 0,void 0,function(){var a=this;return Z(this,function(i){return[2,bo([r],e,function(s){return Q(a,void 0,void 0,function(){return Z(this,function(u){return[2,t(s[0])]})})},n,o)]})})}function Ym(r){return X(function(){return se(Pt(r,3).reverse(),3)})}var wo=2,Co=12;function Jm(r,e){var t=go(r,e),n=ei(r,e);function o(c,l){var h=Ft(r(c));return e.push({paramPath:l}),h}function a(c,l,h){h===void 0&&(h=!1);var f=t(c[0],c[1],3,l+"/conv1"),d=o(c[1],l+"/prelu1_alpha"),p=t(c[1],c[2],3,l+"/conv2"),v=o(c[2],l+"/prelu2_alpha"),g=t(c[2],c[3],h?2:3,l+"/conv3"),m=o(c[3],l+"/prelu3_alpha");return{conv1:f,prelu1_alpha:d,conv2:p,prelu2_alpha:v,conv3:g,prelu3_alpha:m}}function i(){var c=a([3,10,16,32],"pnet"),l=t(32,2,1,"pnet/conv4_1"),h=t(32,4,1,"pnet/conv4_2");return Yt(Yt({},c),{conv4_1:l,conv4_2:h})}function s(){var c=a([3,28,48,64],"rnet",!0),l=n(576,128,"rnet/fc1"),h=o(128,"rnet/prelu4_alpha"),f=n(128,2,"rnet/fc2_1"),d=n(128,4,"rnet/fc2_2");return Yt(Yt({},c),{fc1:l,prelu4_alpha:h,fc2_1:f,fc2_2:d})}function u(){var c=a([3,32,64,64],"onet"),l=t(64,128,2,"onet/conv4"),h=o(128,"onet/prelu4_alpha"),f=n(1152,256,"onet/fc1"),d=o(256,"onet/prelu5_alpha"),p=n(256,2,"onet/fc2_1"),v=n(256,4,"onet/fc2_2"),g=n(256,10,"onet/fc2_3");return Yt(Yt({},c),{conv4:l,prelu4_alpha:h,fc1:f,prelu5_alpha:d,fc2_1:p,fc2_2:v,fc2_3:g})}return{extractPNetParams:i,extractRNetParams:s,extractONetParams:u}}function Qm(r){var e=Ke(r),t=e.extractWeights,n=e.getRemainingWeights,o=[],a=Jm(t,o),i=a.extractPNetParams,s=a.extractRNetParams,u=a.extractONetParams,c=i(),l=s(),h=u();if(n().length!==0)throw new Error("weights remaing after extract: "+n().length);return{params:{pnet:c,rnet:l,onet:h},paramMappings:o}}function Zm(r,e){var t=un(r,e);function n(l){var h=t(l+"/weights",4,l+"/filters"),f=t(l+"/bias",1);return{filters:h,bias:f}}function o(l){var h=t(l+"/weights",2),f=t(l+"/bias",1);return{weights:h,bias:f}}function a(l){return t(l,1)}function i(l){var h=n(l+"/conv1"),f=a(l+"/prelu1_alpha"),d=n(l+"/conv2"),p=a(l+"/prelu2_alpha"),v=n(l+"/conv3"),g=a(l+"/prelu3_alpha");return{conv1:h,prelu1_alpha:f,conv2:d,prelu2_alpha:p,conv3:v,prelu3_alpha:g}}function s(){var l=i("pnet"),h=n("pnet/conv4_1"),f=n("pnet/conv4_2");return Yt(Yt({},l),{conv4_1:h,conv4_2:f})}function u(){var l=i("rnet"),h=o("rnet/fc1"),f=a("rnet/prelu4_alpha"),d=o("rnet/fc2_1"),p=o("rnet/fc2_2");return Yt(Yt({},l),{fc1:h,prelu4_alpha:f,fc2_1:d,fc2_2:p})}function c(){var l=i("onet"),h=n("onet/conv4"),f=a("onet/prelu4_alpha"),d=o("onet/fc1"),p=a("onet/prelu5_alpha"),v=o("onet/fc2_1"),g=o("onet/fc2_2"),m=o("onet/fc2_3");return Yt(Yt({},l),{conv4:h,prelu4_alpha:f,fc1:d,prelu5_alpha:p,fc2_1:v,fc2_2:g,fc2_3:m})}return{extractPNetParams:s,extractRNetParams:u,extractONetParams:c}}function ty(r){var e=[],t=Zm(r,e),n=t.extractPNetParams,o=t.extractRNetParams,a=t.extractONetParams,i=n(),s=o(),u=a();return Xe(r,e),{params:{pnet:i,rnet:s,onet:u},paramMappings:e}}function li(r,e){var t=e[0],n=e[1];return{height:Math.floor(t*r),width:Math.floor(n*r)}}function ey(r,e,t){for(var n=t[0],o=t[1],a=Co/r,i=[],s=Math.min(n,o)*a,u=0;s>=12;)i.push(a*Math.pow(e,u)),s=s*e,u+=1;return i}var hi=function(r){rt(e,r);function e(t,n,o,a){return r.call(this,{left:t,top:n,right:o,bottom:a},!0)||this}return e}(sn);function Uc(r){return X(function(){return Kt(Bt(r,q(127.5)),q(.0078125))})}function Xn(r,e){return X(function(){return ct(It(r),Kt(e,$r(It($r(r)))))})}function fi(r,e,t){return t===void 0&&(t=!1),X(function(){var n=be(r,e.conv1,"valid");return n=Xn(n,e.prelu1_alpha),n=Ut(n,t?[2,2]:[3,3],[2,2],"same"),n=be(n,e.conv2,"valid"),n=Xn(n,e.prelu2_alpha),n=t?n:Ut(n,[3,3],[2,2],"valid"),n=be(n,e.conv3,"valid"),n=Xn(n,e.prelu3_alpha),n})}function ny(r,e){return X(function(){var t=fi(r,e,!0),n=be(t,e.conv4_1,"valid"),o=de(no(n,3),3),a=Ve(Bt(n,o),3),i=be(t,e.conv4_2,"valid");return{prob:a,regions:i}})}function ry(r,e){return X(function(){var t=li(e,r.shape.slice(1)),n=t.height,o=t.width,a=Ia.resizeBilinear(r,[n,o]),i=Uc(a);return nn(i,[0,2,1,3])})}function oy(r,e,t,n){for(var o=[],a=r.arraySync(),i=0;i<r.shape[0];i++)for(var s=0;s<r.shape[1];s++)a[i][s]>=n&&o.push(new mt(s,i));var u=o.map(function(c){var l=new co(Math.round((c.y*wo+1)/t),Math.round((c.x*wo+1)/t),Math.round((c.y*wo+Co)/t),Math.round((c.x*wo+Co)/t)),h=a[c.y][c.x],f=e.arraySync(),d=new hi(f[c.y][c.x][0],f[c.y][c.x][1],f[c.y][c.x][2],f[c.y][c.x][3]);return{cell:l,score:h,region:d}});return u}function ay(r,e,t,n,o){o.stage1=[];var a=e.map(function(f){return X(function(){var d={scale:f},p=ry(r,f),v=Date.now(),g=ny(p,n),m=g.prob,y=g.regions;d.pnet=Date.now()-v;var b=Pt(Pt(m,3)[1])[0],x=Pt(y)[0];return{scoresTensor:b,regionsTensor:x,scale:f,statsForScale:d}})}),i=a.map(function(f){var d=f.scoresTensor,p=f.regionsTensor,v=f.scale,g=f.statsForScale,m=oy(d,p,v,t);if(d.dispose(),p.dispose(),!m.length)return o.stage1.push(g),[];var y=Date.now(),b=yr(m.map(function(x){return x.cell}),m.map(function(x){return x.score}),.5);return g.nms=Date.now()-y,g.numBoxes=b.length,o.stage1.push(g),b.map(function(x){return m[x]})}),s=i.reduce(function(f,d){return f.concat(d)},[]),u=[],c=[];if(s.length>0){var l=Date.now(),h=yr(s.map(function(f){return f.cell}),s.map(function(f){return f.score}),.7);o.stage1_nms=Date.now()-l,c=h.map(function(f){return s[f].score}),u=h.map(function(f){return s[f]}).map(function(f){var d=f.cell,p=f.region;return new co(d.left+p.left*d.width,d.top+p.top*d.height,d.right+p.right*d.width,d.bottom+p.bottom*d.height).toSquare().round()})}return{boxes:u,scores:c}}function zc(r,e,t){var n=t.width,o=t.height;return Q(this,void 0,void 0,function(){var a,i,s,u=this;return Z(this,function(c){switch(c.label){case 0:return a=In(r),[4,Promise.all(e.map(function(l){return Q(u,void 0,void 0,function(){var h,f,d,p,v,g,m,y;return Z(this,function(b){return h=l.padAtBorders(r.height,r.width),f=h.y,d=h.ey,p=h.x,v=h.ex,g=p-1,m=f-1,y=a.getImageData(g,m,v-g,d-m),[2,Jt.isNodejs()?Ja(y):createImageBitmap(y)]})})}))];case 1:return i=c.sent(),s=[],i.forEach(function(l){var h=fo({width:n,height:o}),f=In(h);f.drawImage(l,0,0,n,o);for(var d=f.getImageData(0,0,n,o).data,p=[],v=0;v<d.length;v+=4)p.push(d[v+2]),p.push(d[v+1]),p.push(d[v]);s.push(p)}),[2,s.map(function(l){var h=X(function(){var f=nn(te(l,[1,n,o,3]),[0,2,1,3]).toFloat();return Uc(f)});return h})]}})})}function iy(r,e){return X(function(){var t=fi(r,e),n=me(t,[t.shape[0],e.fc1.weights.shape[0]]),o=Ne(n,e.fc1),a=Xn(o,e.prelu4_alpha),i=Ne(a,e.fc2_1),s=de(no(i,1),1),u=Ve(Bt(i,s),1),c=Ne(a,e.fc2_2),l=Pt(u,1)[1];return{scores:l,regions:c}})}function sy(r,e,t,n,o){return Q(this,void 0,void 0,function(){var a,i,s,u,c,l,h,f,d,p,v,g,m,y;return Z(this,function(b){switch(b.label){case 0:return a=Date.now(),[4,zc(r,e,{width:24,height:24})];case 1:return i=b.sent(),o.stage2_extractImagePatches=Date.now()-a,a=Date.now(),s=i.map(function(x){var w=iy(x,n);return x.dispose(),w}),o.stage2_rnet=Date.now()-a,u=s.length>1?Mt(s.map(function(x){return x.scores})):s[0].scores,h=(l=Array).from,[4,u.data()];case 2:return c=h.apply(l,[b.sent()]),u.dispose(),f=c.map(function(x,w){return{score:x,idx:w}}).filter(function(x){return x.score>t}).map(function(x){var w=x.idx;return w}),d=f.map(function(x){return e[x]}),p=f.map(function(x){return c[x]}),v=[],g=[],d.length>0&&(a=Date.now(),m=yr(d,p,.7),o.stage2_nms=Date.now()-a,y=m.map(function(x){var w=s[f[x]].regions.arraySync();return new hi(w[0][0],w[0][1],w[0][2],w[0][3])}),g=m.map(function(x){return p[x]}),v=m.map(function(x,w){return d[x].calibrate(y[w])})),s.forEach(function(x){x.regions.dispose(),x.scores.dispose()}),[2,{boxes:v,scores:g}]}})})}function uy(r,e){return X(function(){var t=fi(r,e);t=Ut(t,[2,2],[2,2],"same"),t=be(t,e.conv4,"valid"),t=Xn(t,e.prelu4_alpha);var n=me(t,[t.shape[0],e.fc1.weights.shape[0]]),o=Ne(n,e.fc1),a=Xn(o,e.prelu5_alpha),i=Ne(a,e.fc2_1),s=de(no(i,1),1),u=Ve(Bt(i,s),1),c=Ne(a,e.fc2_2),l=Ne(a,e.fc2_3),h=Pt(u,1)[1];return{scores:h,regions:c,points:l}})}function cy(r,e,t,n,o){return Q(this,void 0,void 0,function(){var a,i,s,u,c,l,h,f,d,p,v,g,m,y,b;return Z(this,function(x){switch(x.label){case 0:return a=Date.now(),[4,zc(r,e,{width:48,height:48})];case 1:return i=x.sent(),o.stage3_extractImagePatches=Date.now()-a,a=Date.now(),s=i.map(function(w){var C=uy(w,n);return w.dispose(),C}),o.stage3_onet=Date.now()-a,u=s.length>1?Mt(s.map(function(w){return w.scores})):s[0].scores,h=(l=Array).from,[4,u.data()];case 2:return c=h.apply(l,[x.sent()]),u.dispose(),f=c.map(function(w,C){return{score:w,idx:C}}).filter(function(w){return w.score>t}).map(function(w){var C=w.idx;return C}),d=f.map(function(w){var C=s[w].regions.arraySync();return new hi(C[0][0],C[0][1],C[0][2],C[0][3])}),p=f.map(function(w,C){return e[w].calibrate(d[C])}),v=f.map(function(w){return c[w]}),g=[],m=[],y=[],p.length>0&&(a=Date.now(),b=yr(p,v,.7,!1),o.stage3_nms=Date.now()-a,g=b.map(function(w){return p[w]}),m=b.map(function(w){return v[w]}),y=b.map(function(w,C){return Array(5).fill(0).map(function(k,R){var I=s[w].points.arraySync();return new mt(I[0][R]*(g[C].width+1)+g[C].left,I[0][R+5]*(g[C].height+1)+g[C].top)})})),s.forEach(function(w){w.regions.dispose(),w.scores.dispose(),w.points.dispose()}),[2,{boxes:g,scores:m,points:y}]}})})}var ly=function(r){rt(e,r);function e(){return r.call(this,"Mtcnn")||this}return e.prototype.load=function(t){return Q(this,void 0,void 0,function(){return Z(this,function(n){return console.warn("mtcnn is deprecated and will be removed soon"),[2,r.prototype.load.call(this,t)]})})},e.prototype.loadFromDisk=function(t){return Q(this,void 0,void 0,function(){return Z(this,function(n){return console.warn("mtcnn is deprecated and will be removed soon"),[2,r.prototype.loadFromDisk.call(this,t)]})})},e.prototype.forwardInput=function(t,n){return n===void 0&&(n={}),Q(this,void 0,void 0,function(){var o,a,i,s,u,c,l,h,f,d,p,v,g,m,y,b,x,w,C,k,R;return Z(this,function(I){switch(I.label){case 0:if(o=this.params,!o)throw new Error("Mtcnn - load model before inference");if(a=t.canvases[0],!a)throw new Error("Mtcnn - inputCanvas is not defined, note that passing tensors into Mtcnn.forwardInput is not supported yet.");return i={},s=Date.now(),u=X(function(){return Ym(de(Ga.fromPixels(a)).toFloat())}),c=function(S){return u.dispose(),i.total=Date.now()-s,S},l=u.shape.slice(1),h=l[0],f=l[1],d=new Pc(n),p=d.minFaceSize,v=d.scaleFactor,g=d.maxNumScales,m=d.scoreThresholds,y=d.scaleSteps,b=(y||ey(p,v,[h,f])).filter(function(S){var F=li(S,[h,f]);return Math.min(F.width,F.height)>Co}).slice(0,g),i.scales=b,i.pyramid=b.map(function(S){return li(S,[h,f])}),x=Date.now(),[4,ay(u,b,m[0],o.pnet,i)];case 1:return w=I.sent(),i.total_stage1=Date.now()-x,w.boxes.length?(i.stage2_numInputBoxes=w.boxes.length,x=Date.now(),[4,sy(a,w.boxes,m[1],o.rnet,i)]):[2,c({results:[],stats:i})];case 2:return C=I.sent(),i.total_stage2=Date.now()-x,C.boxes.length?(i.stage3_numInputBoxes=C.boxes.length,x=Date.now(),[4,cy(a,C.boxes,m[2],o.onet,i)]):[2,c({results:[],stats:i})];case 3:return k=I.sent(),i.total_stage3=Date.now()-x,R=k.boxes.map(function(S,F){return oi(Ka({},new Fe(k.scores[F],new Xa(S.left/f,S.top/h,S.width/f,S.height/h),{height:h,width:f})),new Ug(k.points[F].map(function(T){return T.sub(new mt(S.left,S.top)).div(new mt(S.width,S.height))}),{width:S.width,height:S.height}))}),[2,c({results:R,stats:i})]}})})},e.prototype.forward=function(t,n){return n===void 0&&(n={}),Q(this,void 0,void 0,function(){var o;return Z(this,function(a){switch(a.label){case 0:return o=this.forwardInput,[4,zt(t)];case 1:return[4,o.apply(this,[a.sent(),n])];case 2:return[2,a.sent().results]}})})},e.prototype.forwardWithStats=function(t,n){return n===void 0&&(n={}),Q(this,void 0,void 0,function(){var o;return Z(this,function(a){switch(a.label){case 0:return o=this.forwardInput,[4,zt(t)];case 1:return[2,o.apply(this,[a.sent(),n])]}})})},e.prototype.getDefaultModelName=function(){return"mtcnn_model"},e.prototype.extractParamsFromWeigthMap=function(t){return ty(t)},e.prototype.extractParams=function(t){return Qm(t)},e}(je),hy=.4,fy=[new mt(1.603231,2.094468),new mt(6.041143,7.080126),new mt(2.882459,3.518061),new mt(4.266906,5.178857),new mt(9.041765,10.66308)],dy=[117.001,114.697,97.404],py=function(r){rt(e,r);function e(){var t=this,n={withSeparableConvs:!0,iouThreshold:hy,classes:["face"],anchors:fy,meanRgb:dy,isFirstLayerConv2d:!0,filterSizes:[3,16,32,64,128,256,512]};return t=r.call(this,n)||this,t}return Object.defineProperty(e.prototype,"anchors",{get:function(){return this.config.anchors},enumerable:!0,configurable:!0}),e.prototype.locateFaces=function(t,n){return Q(this,void 0,void 0,function(){var o;return Z(this,function(a){switch(a.label){case 0:return[4,this.detect(t,n)];case 1:return o=a.sent(),[2,o.map(function(i){return new Fe(i.score,i.relativeBox,{width:i.imageWidth,height:i.imageHeight})})]}})})},e.prototype.getDefaultModelName=function(){return"tiny_face_detector_model"},e.prototype.extractParamsFromWeigthMap=function(t){return r.prototype.extractParamsFromWeigthMap.call(this,t)},e}(Lc),re={ssdMobilenetv1:new Oc,tinyFaceDetector:new py,tinyYolov2:new $m,mtcnn:new ly,faceLandmark68Net:new Dc,faceLandmark68TinyNet:new gm,faceRecognitionNet:new Em,faceExpressionNet:new nm,ageGenderNet:new fm},Vc=function(r){rt(e,r);function e(t,n,o){var a=r.call(this)||this;return a.parentTask=t,a.input=n,a.extractedFaces=o,a}return e}(wr),di=function(r){rt(e,r);function e(){return r!==null&&r.apply(this,arguments)||this}return e.prototype.run=function(){return Q(this,void 0,void 0,function(){var t,n,o=this;return Z(this,function(a){switch(a.label){case 0:return[4,this.parentTask];case 1:return t=a.sent(),[4,bo(t,this.input,function(i){return Q(o,void 0,void 0,function(){return Z(this,function(s){switch(s.label){case 0:return[4,Promise.all(i.map(function(u){return re.faceExpressionNet.predictExpressions(u)}))];case 1:return[2,s.sent()]}})})},this.extractedFaces)];case 2:return n=a.sent(),[2,t.map(function(i,s){return Sc(i,n[s])})]}})})},e.prototype.withAgeAndGender=function(){return new mi(this,this.input)},e}(Vc),pi=function(r){rt(e,r);function e(){return r!==null&&r.apply(this,arguments)||this}return e.prototype.run=function(){return Q(this,void 0,void 0,function(){var t,n;return Z(this,function(o){switch(o.label){case 0:return[4,this.parentTask];case 1:return t=o.sent(),t?[4,ci(t,this.input,function(a){return re.faceExpressionNet.predictExpressions(a)},this.extractedFaces)]:[2];case 2:return n=o.sent(),[2,Sc(t,n)]}})})},e.prototype.withAgeAndGender=function(){return new yi(this,this.input)},e}(Vc),vi=function(r){rt(e,r);function e(){return r!==null&&r.apply(this,arguments)||this}return e.prototype.withAgeAndGender=function(){return new xi(this,this.input)},e.prototype.withFaceDescriptors=function(){return new wi(this,this.input)},e}(di),gi=function(r){rt(e,r);function e(){return r!==null&&r.apply(this,arguments)||this}return e.prototype.withAgeAndGender=function(){return new bi(this,this.input)},e.prototype.withFaceDescriptor=function(){return new Ci(this,this.input)},e}(pi),Gc=function(r){rt(e,r);function e(t,n,o){var a=r.call(this)||this;return a.parentTask=t,a.input=n,a.extractedFaces=o,a}return e}(wr),mi=function(r){rt(e,r);function e(){return r!==null&&r.apply(this,arguments)||this}return e.prototype.run=function(){return Q(this,void 0,void 0,function(){var t,n,o=this;return Z(this,function(a){switch(a.label){case 0:return[4,this.parentTask];case 1:return t=a.sent(),[4,bo(t,this.input,function(i){return Q(o,void 0,void 0,function(){return Z(this,function(s){switch(s.label){case 0:return[4,Promise.all(i.map(function(u){return re.ageGenderNet.predictAgeAndGender(u)}))];case 1:return[2,s.sent()]}})})},this.extractedFaces)];case 2:return n=a.sent(),[2,t.map(function(i,s){var u=n[s],c=u.age,l=u.gender,h=u.genderProbability;return Nc(Mc(i,l,h),c)})]}})})},e.prototype.withFaceExpressions=function(){return new di(this,this.input)},e}(Gc),yi=function(r){rt(e,r);function e(){return r!==null&&r.apply(this,arguments)||this}return e.prototype.run=function(){return Q(this,void 0,void 0,function(){var t,n,o,a,i;return Z(this,function(s){switch(s.label){case 0:return[4,this.parentTask];case 1:return t=s.sent(),t?[4,ci(t,this.input,function(u){return re.ageGenderNet.predictAgeAndGender(u)},this.extractedFaces)]:[2];case 2:return n=s.sent(),o=n.age,a=n.gender,i=n.genderProbability,[2,Nc(Mc(t,a,i),o)]}})})},e.prototype.withFaceExpressions=function(){return new pi(this,this.input)},e}(Gc),xi=function(r){rt(e,r);function e(){return r!==null&&r.apply(this,arguments)||this}return e.prototype.withFaceExpressions=function(){return new vi(this,this.input)},e.prototype.withFaceDescriptors=function(){return new wi(this,this.input)},e}(mi),bi=function(r){rt(e,r);function e(){return r!==null&&r.apply(this,arguments)||this}return e.prototype.withFaceExpressions=function(){return new gi(this,this.input)},e.prototype.withFaceDescriptor=function(){return new Ci(this,this.input)},e}(yi),Hc=function(r){rt(e,r);function e(t,n){var o=r.call(this)||this;return o.parentTask=t,o.input=n,o}return e}(wr),wi=function(r){rt(e,r);function e(){return r!==null&&r.apply(this,arguments)||this}return e.prototype.run=function(){return Q(this,void 0,void 0,function(){var t,n;return Z(this,function(o){switch(o.label){case 0:return[4,this.parentTask];case 1:return t=o.sent(),[4,bo(t,this.input,function(a){return Promise.all(a.map(function(i){return re.faceRecognitionNet.computeFaceDescriptor(i)}))},null,function(a){return a.landmarks.align(null,{useDlibAlignment:!0})})];case 2:return n=o.sent(),[2,n.map(function(a,i){return Fc(t[i],a)})]}})})},e.prototype.withFaceExpressions=function(){return new vi(this,this.input)},e.prototype.withAgeAndGender=function(){return new xi(this,this.input)},e}(Hc),Ci=function(r){rt(e,r);function e(){return r!==null&&r.apply(this,arguments)||this}return e.prototype.run=function(){return Q(this,void 0,void 0,function(){var t,n;return Z(this,function(o){switch(o.label){case 0:return[4,this.parentTask];case 1:return t=o.sent(),t?[4,ci(t,this.input,function(a){return re.faceRecognitionNet.computeFaceDescriptor(a)},null,function(a){return a.landmarks.align(null,{useDlibAlignment:!0})})]:[2];case 2:return n=o.sent(),[2,Fc(t,n)]}})})},e.prototype.withFaceExpressions=function(){return new gi(this,this.input)},e.prototype.withAgeAndGender=function(){return new bi(this,this.input)},e}(Hc),qc=function(r){rt(e,r);function e(t,n,o){var a=r.call(this)||this;return a.parentTask=t,a.input=n,a.useTinyLandmarkNet=o,a}return Object.defineProperty(e.prototype,"landmarkNet",{get:function(){return this.useTinyLandmarkNet?re.faceLandmark68TinyNet:re.faceLandmark68Net},enumerable:!0,configurable:!0}),e}(wr),vy=function(r){rt(e,r);function e(){return r!==null&&r.apply(this,arguments)||this}return e.prototype.run=function(){return Q(this,void 0,void 0,function(){var t,n,o,a,i,s=this;return Z(this,function(u){switch(u.label){case 0:return[4,this.parentTask];case 1:return t=u.sent(),n=t.map(function(c){return c.detection}),this.input instanceof Et?[4,Za(this.input,n)]:[3,3];case 2:return a=u.sent(),[3,5];case 3:return[4,Qa(this.input,n)];case 4:a=u.sent(),u.label=5;case 5:return o=a,[4,Promise.all(o.map(function(c){return s.landmarkNet.detectLandmarks(c)}))];case 6:return i=u.sent(),o.forEach(function(c){return c instanceof Et&&c.dispose()}),[2,t.map(function(c,l){return oi(c,i[l])})]}})})},e.prototype.withFaceExpressions=function(){return new vi(this,this.input)},e.prototype.withAgeAndGender=function(){return new xi(this,this.input)},e.prototype.withFaceDescriptors=function(){return new wi(this,this.input)},e}(qc),gy=function(r){rt(e,r);function e(){return r!==null&&r.apply(this,arguments)||this}return e.prototype.run=function(){return Q(this,void 0,void 0,function(){var t,n,o,a,i;return Z(this,function(s){switch(s.label){case 0:return[4,this.parentTask];case 1:return t=s.sent(),t?(n=t.detection,this.input instanceof Et?[4,Za(this.input,[n])]:[3,3]):[2];case 2:return a=s.sent(),[3,5];case 3:return[4,Qa(this.input,[n])];case 4:a=s.sent(),s.label=5;case 5:return o=a,[4,this.landmarkNet.detectLandmarks(o[0])];case 6:return i=s.sent(),o.forEach(function(u){return u instanceof Et&&u.dispose()}),[2,oi(t,i)]}})})},e.prototype.withFaceExpressions=function(){return new gi(this,this.input)},e.prototype.withAgeAndGender=function(){return new bi(this,this.input)},e.prototype.withFaceDescriptor=function(){return new Ci(this,this.input)},e}(qc),jc=function(r){rt(e,r);function e(t,n){n===void 0&&(n=new br);var o=r.call(this)||this;return o.input=t,o.options=n,o}return e}(wr),Xc=function(r){rt(e,r);function e(){return r!==null&&r.apply(this,arguments)||this}return e.prototype.run=function(){return Q(this,void 0,void 0,function(){var t,n,o,a;return Z(this,function(i){switch(i.label){case 0:return t=this,n=t.input,o=t.options,o instanceof Pc?[4,re.mtcnn.forward(n,o)]:[3,2];case 1:return[2,i.sent().map(function(s){return s.detection})];case 2:if(a=o instanceof Wc?function(s){return re.tinyFaceDetector.locateFaces(s,o)}:o instanceof br?function(s){return re.ssdMobilenetv1.locateFaces(s,o)}:o instanceof ui?function(s){return re.tinyYolov2.locateFaces(s,o)}:null,!a)throw new Error("detectFaces - expected options to be instance of TinyFaceDetectorOptions | SsdMobilenetv1Options | MtcnnOptions | TinyYolov2Options");return[2,a(n)]}})})},e.prototype.runAndExtendWithFaceDetections=function(){var t=this;return new Promise(function(n){return Q(t,void 0,void 0,function(){var o;return Z(this,function(a){switch(a.label){case 0:return[4,this.run()];case 1:return o=a.sent(),[2,n(o.map(function(i){return Ka({},i)}))]}})})})},e.prototype.withFaceLandmarks=function(t){return t===void 0&&(t=!1),new vy(this.runAndExtendWithFaceDetections(),this.input,t)},e.prototype.withFaceExpressions=function(){return new di(this.runAndExtendWithFaceDetections(),this.input)},e.prototype.withAgeAndGender=function(){return new mi(this.runAndExtendWithFaceDetections(),this.input)},e}(jc);(function(r){rt(e,r);function e(){return r!==null&&r.apply(this,arguments)||this}return e.prototype.run=function(){return Q(this,void 0,void 0,function(){var t,n;return Z(this,function(o){switch(o.label){case 0:return[4,new Xc(this.input,this.options)];case 1:return t=o.sent(),n=t[0],t.forEach(function(a){a.score>n.score&&(n=a)}),[2,n]}})})},e.prototype.runAndExtendWithFaceDetection=function(){var t=this;return new Promise(function(n){return Q(t,void 0,void 0,function(){var o;return Z(this,function(a){switch(a.label){case 0:return[4,this.run()];case 1:return o=a.sent(),[2,n(o?Ka({},o):void 0)]}})})})},e.prototype.withFaceLandmarks=function(t){return t===void 0&&(t=!1),new gy(this.runAndExtendWithFaceDetection(),this.input,t)},e.prototype.withFaceExpressions=function(){return new pi(this.runAndExtendWithFaceDetection(),this.input)},e.prototype.withAgeAndGender=function(){return new yi(this.runAndExtendWithFaceDetection(),this.input)},e})(jc);function Kc(r,e){return e===void 0&&(e=new br),new Xc(r,e)}function my(r,e){if(r.length!==e.length)throw new Error("euclideanDistance: arr1.length !== arr2.length");var t=Array.from(r),n=Array.from(e);return Math.sqrt(t.map(function(o,a){return o-n[a]}).reduce(function(o,a){return o+Math.pow(a,2)},0))}(function(){function r(e,t){t===void 0&&(t=.6),this._distanceThreshold=t;var n=Array.isArray(e)?e:[e];if(!n.length)throw new Error("FaceRecognizer.constructor - expected atleast one input");var o=1,a=function(){return"person "+o++};this._labeledDescriptors=n.map(function(i){if(i instanceof ho)return i;if(i instanceof Float32Array)return new ho(a(),[i]);if(i.descriptor&&i.descriptor instanceof Float32Array)return new ho(a(),[i.descriptor]);throw new Error("FaceRecognizer.constructor - expected inputs to be of type LabeledFaceDescriptors | WithFaceDescriptor<any> | Float32Array | Array<LabeledFaceDescriptors | WithFaceDescriptor<any> | Float32Array>")})}return Object.defineProperty(r.prototype,"labeledDescriptors",{get:function(){return this._labeledDescriptors},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"distanceThreshold",{get:function(){return this._distanceThreshold},enumerable:!0,configurable:!0}),r.prototype.computeMeanDistance=function(e,t){return t.map(function(n){return my(n,e)}).reduce(function(n,o){return n+o},0)/(t.length||1)},r.prototype.matchDescriptor=function(e){var t=this;return this.labeledDescriptors.map(function(n){var o=n.descriptors,a=n.label;return new ac(a,t.computeMeanDistance(e,o))}).reduce(function(n,o){return n.distance<o.distance?n:o})},r.prototype.findBestMatch=function(e){var t=this.matchDescriptor(e);return t.distance<this.distanceThreshold?t:new ac("unknown",t.distance)},r.prototype.toJSON=function(){return{distanceThreshold:this.distanceThreshold,labeledDescriptors:this.labeledDescriptors.map(function(e){return e.toJSON()})}},r.fromJSON=function(e){var t=e.labeledDescriptors.map(function(n){return ho.fromJSON(n)});return new r(t,e.distanceThreshold)},r})();const ve={VERSION:"1.2.5",DEFAULT_MODEL_URL:"/wp-content/plugins/blurwp/assets/models",DEFAULT_INPUT_SIZE:320,DEFAULT_SCORE_THRESHOLD:.5,DETECTION_TIMEOUT:1e4,MAX_RETRIES:3,DEFAULT_STYLE:"blur",DEFAULT_INTENSITY:30,DEFAULT_EXPAND:20},Cr={LOAD_ERROR:"Failed to load image",DETECTION_ERROR:"Failed to detect faces",DETECTION_TIMEOUT:"Face detection timed out. Please try again",MODEL_LOAD_ERROR:"Failed to load face detection models"};class yy{constructor(e,t){ut(this,"modelUrl");ut(this,"loadedModels",new Set);ut(this,"loadingPromises",new Map);ut(this,"currentModel","tinyFaceDetector");ut(this,"onLoadingProgress");this.modelUrl=e,this.onLoadingProgress=t,console.log("FaceDetector: Initialized with model URL:",e)}static getAvailableModels(){return[{type:"tinyFaceDetector",name:"Tiny Face Detector",description:"Fast and lightweight, best for real-time processing",size:"~190KB",speed:"fast",accuracy:"low"},{type:"ssdMobilenetv1",name:"SSD MobileNet v1",description:"More accurate but slower, better for high-quality images",size:"~5.4MB",speed:"slow",accuracy:"high"}]}async loadModels(e="tinyFaceDetector"){if(this.loadedModels.has(e)){this.currentModel=e;return}if(this.loadingPromises.has(e)){await this.loadingPromises.get(e),this.currentModel=e;return}const t=this.doLoadModels(e);this.loadingPromises.set(e,t);try{await t,this.currentModel=e}catch(n){throw this.loadingPromises.delete(e),n}}async doLoadModels(e){try{switch(console.log(`FaceDetector: Loading ${e} models from:`,this.modelUrl),this.onLoadingProgress&&this.onLoadingProgress(e,0,100),e){case"tinyFaceDetector":await re.tinyFaceDetector.loadFromUri(this.modelUrl);break;case"ssdMobilenetv1":await re.ssdMobilenetv1.loadFromUri(this.modelUrl);break;default:throw new Error(`Unknown model type: ${e}`)}this.loadedModels.add(e),this.onLoadingProgress&&this.onLoadingProgress(e,100,100),console.log(`FaceDetector: ${e} models loaded successfully`)}catch(t){throw console.error(`FaceDetector: Failed to load ${e} models:`,t),new Error(Cr.MODEL_LOAD_ERROR)}}async detectFaces(e,t={}){const{modelType:n=this.currentModel,inputSize:o=ve.DEFAULT_INPUT_SIZE,scoreThreshold:a=ve.DEFAULT_SCORE_THRESHOLD,timeout:i=ve.DETECTION_TIMEOUT}=t;await this.loadModels(n);const s=this.performDetection(e,{modelType:n,inputSize:o,scoreThreshold:a}),u=new Promise((c,l)=>{setTimeout(()=>{l(new Error(Cr.DETECTION_TIMEOUT))},i)});return Promise.race([s,u])}async performDetection(e,t){const{modelType:n,inputSize:o,scoreThreshold:a}=t;let i=[];switch(n){case"tinyFaceDetector":{const s=new Wc({inputSize:o,scoreThreshold:a});i=await Kc(e,s);break}case"ssdMobilenetv1":{const s=new br({minConfidence:a});i=await Kc(e,s);break}}return this.convertDetections(i,e)}async detectWithRetry(e,t={},n=ve.MAX_RETRIES){let o=0;const a=t.sensitivity??.5;let i=this.sensitivityToThreshold(a);const s=async()=>{try{const u=await this.detectFaces(e,{...t,scoreThreshold:i});return u.length===0&&o<n?(o++,i=Math.max(.1,i-.1),console.log(`FaceDetector: No faces found, retrying with threshold ${i}`),s()):u}catch(u){if(o<n)return o++,i=Math.max(.1,i-.1),console.log(`FaceDetector: Detection failed, retrying with threshold ${i}`),s();throw u}};return s()}sensitivityToThreshold(e){return e}convertDetections(e,t){const n=t.naturalWidth||t.width,o=t.naturalHeight||t.height;return e.map((a,i)=>{const s=a.box;return{id:`face_${Date.now()}_${i}`,x:s.x/n,y:s.y/o,width:s.width/n,height:s.height/o,confidence:a.score,enabled:!0,manual:!1}})}isModelLoaded(e){return this.loadedModels.has(e)}getCurrentModel(){return this.currentModel}unload(){this.loadedModels.clear(),this.loadingPromises.clear(),console.log("FaceDetector: All models unloaded")}}class xy{apply(e,t,n,o){const a=e.canvas,i=a.width,s=a.height;e.save(),t.forEach(u=>{const c=o/100,l=u.width*i,h=u.height*s,f=l*c,d=h*c,p=u.x*i-f/2,v=u.y*s-d/2,g=l+f,m=h+d,y=Math.max(0,p),b=Math.max(0,v),x=Math.min(g,i-y),w=Math.min(m,s-b),C=Math.log(n+1)*5;e.filter=`blur(${C}px)`,e.drawImage(a,y,b,x,w,y,b,x,w)}),e.filter="none",e.restore()}getName(){return"blur"}}class by{apply(e,t,n,o){const a=e.canvas,i=a.width,s=a.height;t.forEach(u=>{const c=o/100,l=u.width*i,h=u.height*s,f=l*c,d=h*c,p=Math.max(0,u.x*i-f/2),v=Math.max(0,u.y*s-d/2),g=Math.min(l+f,i-p),m=Math.min(h+d,s-v),y=Math.max(2,Math.floor(n/100*50)),b=document.createElement("canvas"),x=b.getContext("2d");if(!x)return;const w=Math.max(1,Math.floor(g/y)),C=Math.max(1,Math.floor(m/y));b.width=w,b.height=C,x.drawImage(a,p,v,g,m,0,0,w,C),e.imageSmoothingEnabled=!1,e.drawImage(b,0,0,w,C,p,v,g,m),e.imageSmoothingEnabled=!0})}getName(){return"pixelate"}}class Eo{static getEffect(e){if(!this.effects.has(e))switch(e){case"blur":this.effects.set(e,new xy);break;case"pixelate":this.effects.set(e,new by);break;default:throw new Error(`Unknown effect type: ${e}`)}return this.effects.get(e)}static getAvailableEffects(){return[{type:"blur",name:"Gaussian Blur"},{type:"pixelate",name:"Pixelate"}]}}ut(Eo,"effects",new Map);const ge=class ge{constructor(){ut(this,"saveTimeout",null);ut(this,"lastSave",0)}save(e,t){this.saveTimeout&&clearTimeout(this.saveTimeout),this.saveTimeout=setTimeout(()=>{this.doSave(e,t)},100)}saveImmediate(e,t){this.saveTimeout&&clearTimeout(this.saveTimeout),this.doSave(e,t)}doSave(e,t){try{const n={attachmentId:e,timestamp:Date.now(),...t},o=`${ge.STORAGE_PREFIX}${e}`;sessionStorage.setItem(o,JSON.stringify(n)),this.lastSave=Date.now(),console.log("WorkspaceManager: Saved workspace for attachment",e),this.cleanupOldWorkspaces()}catch(n){console.error("WorkspaceManager: Failed to save workspace:",n)}}load(e){try{const t=`${ge.STORAGE_PREFIX}${e}`,n=sessionStorage.getItem(t);if(!n)return null;const o=JSON.parse(n);return console.log("WorkspaceManager: Loaded workspace for attachment",e),o}catch(t){return console.error("WorkspaceManager: Failed to load workspace:",t),null}}exists(e){const t=`${ge.STORAGE_PREFIX}${e}`;return sessionStorage.getItem(t)!==null}delete(e){try{const t=`${ge.STORAGE_PREFIX}${e}`;sessionStorage.removeItem(t),console.log("WorkspaceManager: Deleted workspace for attachment",e)}catch(t){console.error("WorkspaceManager: Failed to delete workspace:",t)}}clearAll(){try{const e=[];for(let t=0;t<sessionStorage.length;t++){const n=sessionStorage.key(t);n&&n.startsWith(ge.STORAGE_PREFIX)&&e.push(n)}e.forEach(t=>sessionStorage.removeItem(t)),console.log("WorkspaceManager: Cleared all workspaces")}catch(e){console.error("WorkspaceManager: Failed to clear workspaces:",e)}}getAllWorkspaceKeys(){const e=[];for(let t=0;t<sessionStorage.length;t++){const n=sessionStorage.key(t);n&&n.startsWith(ge.STORAGE_PREFIX)&&e.push(n)}return e}cleanupOldWorkspaces(){const e=this.getAllWorkspaceKeys();if(e.length<=ge.MAX_WORKSPACES)return;const t=e.map(o=>{const a=sessionStorage.getItem(o),i=a?JSON.parse(a):null;return{key:o,timestamp:(i==null?void 0:i.timestamp)||0}});t.sort((o,a)=>o.timestamp-a.timestamp);const n=t.slice(0,t.length-ge.MAX_WORKSPACES);n.forEach(({key:o})=>{sessionStorage.removeItem(o)}),console.log(`WorkspaceManager: Cleaned up ${n.length} old workspaces`)}getTimeSinceLastSave(){return Date.now()-this.lastSave}};ut(ge,"STORAGE_PREFIX","blurwp_workspace_"),ut(ge,"MAX_WORKSPACES",10);let Ei=ge;class wy{constructor(e,t){ut(this,"restUrl");ut(this,"nonce");this.restUrl=e,this.nonce=t}async saveImage(e,t,n,o){const a=t.toDataURL("image/jpeg",.95),i={attachment_id:e,image_data:a};n&&(i.faces=n),o&&(i.settings=o),console.log("WordPressAPI: Saving image",{attachmentId:e,facesCount:n==null?void 0:n.length});const s=await fetch(`${this.restUrl}/process`,{method:"POST",headers:{"Content-Type":"application/json","X-WP-Nonce":this.nonce},body:JSON.stringify(i)});if(!s.ok){const c=await s.json();throw new Error(c.message||"Failed to save image")}const u=await s.json();return console.log("WordPressAPI: Image saved successfully"),u}async restoreImage(e){console.log("WordPressAPI: Restoring image",e);const t=await fetch(`${this.restUrl}/restore/${e}`,{method:"POST",headers:{"Content-Type":"application/json","X-WP-Nonce":this.nonce}});if(!t.ok){const o=await t.json();throw new Error(o.message||"Failed to restore image")}const n=await t.json();return console.log("WordPressAPI: Image restored successfully"),n}async hasBackup(e){try{const t=await fetch(`${this.restUrl.replace("blurwp/v1","wp/v2")}/media/${e}`,{headers:{"X-WP-Nonce":this.nonce}});if(!t.ok)return!1;const n=await t.json();return n.meta&&n.meta._blurwp_anonymized===!0}catch(t){return console.error("WordPressAPI: Error checking backup status:",t),!1}}}class $c{constructor(e){ut(this,"config");ut(this,"state",{attachmentId:null,imageUrl:null,faces:[],settings:{style:ve.DEFAULT_STYLE,intensity:ve.DEFAULT_INTENSITY,expand:ve.DEFAULT_EXPAND},detectionSettings:{modelType:"tinyFaceDetector",sensitivity:.5},selectedFaceIndex:-1,isDirty:!1,isLoading:!1});ut(this,"container",null);ut(this,"faceDetector");ut(this,"canvas",null);ut(this,"ctx",null);ut(this,"currentImage",null);ut(this,"originalImageData",null);ut(this,"isDrawingMode",!1);ut(this,"isDrawing",!1);ut(this,"drawStart",null);ut(this,"drawCurrent",null);ut(this,"interactionMode","none");ut(this,"activeFaceIndex",-1);ut(this,"resizeHandle",null);ut(this,"interactionStart",null);ut(this,"faceStartState",null);ut(this,"workspaceManager");ut(this,"wpApi");this.config=e,this.faceDetector=new yy(e.modelUrl,(t,n,o)=>{this.updateModelLoadingProgress(t,n,o)}),this.workspaceManager=new Ei,this.wpApi=new wy(e.restUrl,e.nonce),e.modelUrl||console.warn("BlurWP Editor: No model URL provided"),this.resetState(),console.log("BlurWP Editor: Initialized with config",this.config)}resetState(){this.state={attachmentId:null,imageUrl:null,faces:[],settings:{style:ve.DEFAULT_STYLE,intensity:ve.DEFAULT_INTENSITY,expand:ve.DEFAULT_EXPAND},detectionSettings:{modelType:this.config.defaultModel||"ssdMobilenetv1",sensitivity:.5},selectedFaceIndex:-1,isDirty:!1,isLoading:!1}}async open(e,t){console.log("BlurWP Editor: Opening image",{attachmentId:e,imageUrl:t});const n=this.workspaceManager.load(e);let o=!1;n&&(o=confirm(`A previous editing session was found for this image.

Would you like to restore your previous work?

Click "OK" to restore, or "Cancel" to start fresh.`),o?(console.log("BlurWP Editor: Restoring workspace",n),this.state.attachmentId=e,this.state.imageUrl=t,this.state.faces=n.faces,this.state.settings=n.settings,this.state.detectionSettings=n.detectionSettings):this.workspaceManager.delete(e)),o||(this.resetState(),this.state.attachmentId=e,this.state.imageUrl=t),this.state.isLoading=!0,this.createModal();try{if(await this.loadImage(t),this.ctx&&this.canvas&&(this.originalImageData=this.ctx.getImageData(0,0,this.canvas.width,this.canvas.height)),!o){const a=await this.faceDetector.detectWithRetry(this.currentImage,{modelType:this.state.detectionSettings.modelType,sensitivity:this.state.detectionSettings.sensitivity});this.state.faces=a.map(i=>({...i,originalX:i.x,originalY:i.y,originalWidth:i.width,originalHeight:i.height}))}this.state.isLoading=!1,console.log("BlurWP Editor: Faces ready",this.state.faces),this.updateUI(),this.startAutoSave()}catch(a){console.error("BlurWP Editor: Error loading image or detecting faces:",a),this.state.isLoading=!1,this.showError(a instanceof Error?a.message:Cr.LOAD_ERROR)}}createModal(){this.close(),this.container=document.createElement("div"),this.container.id="blurwp-editor-modal",this.container.className="blurwp-modal",this.container.setAttribute("role","dialog"),this.container.setAttribute("aria-modal","true"),this.container.setAttribute("aria-labelledby","blurwp-modal-title"),this.container.style.display="flex",this.container.innerHTML=`
      <div class="blurwp-modal-backdrop"></div>
      <div class="blurwp-modal-content">
        <div class="blurwp-modal-header">
          <h2 id="blurwp-modal-title">BlurWP Face Anonymization</h2>
          <button class="blurwp-modal-close" aria-label="Close modal">&times;</button>
        </div>
        
        <div class="blurwp-modal-body">
          <div class="blurwp-canvas-panel" role="img" aria-label="Image editor canvas">
            <div id="blurwp-canvas-container"></div>
            <div class="blurwp-loading-overlay" style="display: none;" aria-live="polite">
              <div class="blurwp-spinner"></div>
              <p>Initializing...</p>
            </div>
          </div>
          
          <div class="blurwp-controls-panel" role="form" aria-label="Editor controls">
            <div class="blurwp-face-count" aria-live="polite">
              <span id="blurwp-face-count-text">Faces detected: 0</span>
            </div>
            
            <div class="blurwp-control-group">
              <label for="blurwp-model">Detection Model <small style="font-weight: normal; color: #666;">(changes require re-detection)</small></label>
              <select id="blurwp-model" class="blurwp-control">
                <option value="ssdMobilenetv1" ${this.state.detectionSettings.modelType==="ssdMobilenetv1"?"selected":""}>SSD MobileNet v1 - Accurate (5.4MB)</option>
                <option value="tinyFaceDetector" ${this.state.detectionSettings.modelType==="tinyFaceDetector"?"selected":""}>Tiny Face Detector - Fast (190KB)</option>
              </select>
              <small id="model-desc" style="color: #666; display: block; margin-top: 4px;">
                SSD: Slower but more accurate<br>
                Tiny: Fast but may miss small faces
              </small>
            </div>
            
            <div class="blurwp-control-group">
              <label for="blurwp-sensitivity">Detection Sensitivity: <span id="blurwp-sensitivity-value">0.5</span></label>
              <input type="range" id="blurwp-sensitivity" min="0.1" max="0.9" step="0.1" value="0.5" class="blurwp-control" aria-describedby="sensitivity-desc">
              <small id="sensitivity-desc" style="color: #666; display: block; margin-top: 4px;">
                Lower = more faces detected (lenient)<br>
                Higher = fewer faces detected (strict)
              </small>
              <button id="blurwp-redetect-btn" class="button" style="margin-top: 8px; font-size: 12px;" aria-label="Re-detect faces with current settings">Re-detect with new settings</button>
            </div>
            
            <div class="blurwp-control-group">
              <label for="blurwp-style">Effect Style</label>
              <select id="blurwp-style" class="blurwp-control">
                <option value="blur" ${this.state.settings.style==="blur"?"selected":""}>Gaussian Blur</option>
                <option value="pixelate" ${this.state.settings.style==="pixelate"?"selected":""}>Pixelate</option>
              </select>
            </div>
            
            <div class="blurwp-control-group">
              <label for="blurwp-intensity">Privacy Level: <span id="blurwp-intensity-value">30%</span></label>
              <input type="range" id="blurwp-intensity" min="0" max="100" value="30" class="blurwp-control" aria-describedby="intensity-desc">
              <small id="intensity-desc" style="color: #666; display: block; margin-top: 4px;">
                0% = No effect (visible) | 100% = Fully obscured
              </small>
            </div>
            
            <div class="blurwp-control-group">
              <label for="blurwp-expand">Expand Area</label>
              <input type="range" id="blurwp-expand" min="0" max="100" value="20" class="blurwp-control">
              <span class="blurwp-value" id="blurwp-expand-value">20%</span>
            </div>
            
            <div class="blurwp-control-group">
              <button id="blurwp-add-face-btn" class="button" style="width: 100%;" aria-label="Manually add a face box">+ Add Face Manually</button>
              <small style="color: #666; display: block; margin-top: 4px;">
                Click and drag on the image to draw a face box
              </small>
            </div>
            
            <div class="blurwp-face-list" id="blurwp-face-list" role="group" aria-label="Detected faces list">
              <!-- Face toggles will be added here -->
            </div>
            
            <div class="blurwp-modal-footer">
              <button id="blurwp-preview-btn" class="button" aria-label="Preview changes side-by-side">Preview</button>
              <button id="blurwp-reset-btn" class="button" aria-label="Reset image to original">Reset</button>
              <button id="blurwp-apply-btn" class="button button-primary" aria-label="Apply effect to canvas">Apply Effect</button>
              <button id="blurwp-save-btn" class="button button-primary" style="background: #2271b1;" aria-label="Save changes to WordPress">💾 Save to WordPress</button>
              <button id="blurwp-close-btn" class="button" aria-label="Close editor">Close</button>
            </div>
          </div>
        </div>
      </div>
    `,document.body.appendChild(this.container),this.bindControlEvents()}bindControlEvents(){if(!this.container)return;const e=this.container.querySelector(".blurwp-modal-close");e&&e.addEventListener("click",()=>this.close());const t=this.container.querySelector("#blurwp-close-btn");t&&t.addEventListener("click",()=>this.close());const n=this.container.querySelector(".blurwp-modal-backdrop");n&&n.addEventListener("click",()=>this.close());const o=this.container.querySelector("#blurwp-model");o&&o.addEventListener("change",y=>{this.state.detectionSettings.modelType=y.target.value,this.state.isDirty=!0});const a=this.container.querySelector("#blurwp-sensitivity"),i=this.container.querySelector("#blurwp-sensitivity-value");a&&i&&a.addEventListener("input",y=>{const b=parseFloat(y.target.value);this.state.detectionSettings.sensitivity=b,i.textContent=b.toFixed(1),this.state.isDirty=!0});const s=this.container.querySelector("#blurwp-redetect-btn");s&&s.addEventListener("click",()=>this.redetectFaces());const u=this.container.querySelector("#blurwp-style");u&&u.addEventListener("change",y=>{this.state.settings.style=y.target.value,this.state.isDirty=!0});const c=this.container.querySelector("#blurwp-intensity"),l=this.container.querySelector("#blurwp-intensity-value");c&&l&&c.addEventListener("input",y=>{const b=parseInt(y.target.value,10);this.state.settings.intensity=b,l.textContent=b+"%",this.state.isDirty=!0});const h=this.container.querySelector("#blurwp-expand"),f=this.container.querySelector("#blurwp-expand-value");h&&f&&h.addEventListener("input",y=>{const b=parseInt(y.target.value,10);this.state.settings.expand=b,f.textContent=b.toString()+"%",this.state.isDirty=!0});const d=this.container.querySelector("#blurwp-apply-btn");d&&d.addEventListener("click",()=>this.applyEffect());const p=this.container.querySelector("#blurwp-reset-btn");p&&p.addEventListener("click",()=>{console.log("Reset button clicked"),this.resetImage()});const v=this.container.querySelector("#blurwp-preview-btn");v&&v.addEventListener("click",()=>this.showPreview());const g=this.container.querySelector("#blurwp-add-face-btn");g&&g.addEventListener("click",()=>this.toggleDrawingMode());const m=this.container.querySelector("#blurwp-save-btn");m&&m.addEventListener("click",()=>this.saveImage())}applyEffect(){if(!this.ctx||!this.canvas||this.state.faces.length===0){console.warn("BlurWP Editor: Cannot apply effect - no canvas or faces");return}console.log("BlurWP Editor: Applying effect",this.state.settings),this.resetImage();const e=Eo.getEffect(this.state.settings.style),t=this.state.faces.filter(n=>n.enabled);e.apply(this.ctx,t,this.state.settings.intensity,this.state.settings.expand),this.drawFaceBoxes(),this.state.isDirty=!0,console.log("BlurWP Editor: Effect applied")}applyEffectWithoutBoxes(){if(!this.ctx||!this.canvas||this.state.faces.length===0){console.warn("BlurWP Editor: Cannot apply effect - no canvas or faces");return}console.log("BlurWP Editor: Applying effect without boxes",this.state.settings),this.originalImageData&&this.ctx.putImageData(this.originalImageData,0,0);const e=Eo.getEffect(this.state.settings.style),t=this.state.faces.filter(n=>n.enabled);e.apply(this.ctx,t,this.state.settings.intensity,this.state.settings.expand),this.state.isDirty=!0,console.log("BlurWP Editor: Effect applied without boxes")}resetImage(){!this.ctx||!this.canvas||!this.originalImageData||(this.ctx.putImageData(this.originalImageData,0,0),this.drawFaceBoxes(),this.state.isDirty=!1,console.log("BlurWP Editor: Image reset"))}async saveImage(){var n;if(!this.canvas||!this.state.attachmentId){console.warn("BlurWP Editor: Cannot save - no canvas or attachment ID"),alert("Cannot save: Image or attachment ID missing");return}if(!confirm(`⚠️ WARNING: This will permanently replace the original image.

The current image will be overwritten with the anonymized version.

A backup will be created automatically (if enabled in settings).

Are you sure you want to proceed?`)){console.log("BlurWP Editor: User cancelled save");return}const t=(n=this.container)==null?void 0:n.querySelector("#blurwp-save-btn");t&&(t.disabled=!0,t.textContent="💾 Saving...");try{this.applyEffectWithoutBoxes();const o=this.state.faces.filter(s=>s.enabled);console.log("BlurWP Editor: Saving image to WordPress",{attachmentId:this.state.attachmentId,facesCount:o.length,settings:this.state.settings});const a=await this.wpApi.saveImage(this.state.attachmentId,this.canvas,o,this.state.settings);this.drawFaceBoxes(),this.state.attachmentId&&this.workspaceManager.delete(this.state.attachmentId),alert(`✅ ${a.message}

The image has been saved to WordPress.`);const i=new CustomEvent("blurwp:save:success",{detail:{attachmentId:this.state.attachmentId}});if(document.dispatchEvent(i),this.close(),!window.BlurWPBatchActive){const s=Date.now(),u=new URL(window.location.href);u.searchParams.set("blurwp_cache",s.toString()),window.location.href=u.toString()}}catch(o){console.error("BlurWP Editor: Failed to save image:",o),alert(`❌ Failed to save image: ${o instanceof Error?o.message:"Unknown error"}`)}finally{t&&(t.disabled=!1,t.textContent="💾 Save to WordPress")}}async redetectFaces(){if(!this.currentImage){console.warn("BlurWP Editor: Cannot re-detect - no image loaded");return}console.log("BlurWP Editor: Re-detecting faces with settings:",this.state.detectionSettings),this.showLoading(!0);try{this.state.faces=[],this.ctx&&this.originalImageData&&this.ctx.putImageData(this.originalImageData,0,0);const e=await this.faceDetector.detectWithRetry(this.currentImage,{modelType:this.state.detectionSettings.modelType,sensitivity:this.state.detectionSettings.sensitivity});this.state.faces=e.map(t=>({...t,originalX:t.x,originalY:t.y,originalWidth:t.width,originalHeight:t.height})),this.showLoading(!1),console.log("BlurWP Editor: Faces re-detected",e),this.updateUI()}catch(e){console.error("BlurWP Editor: Error re-detecting faces:",e),this.showLoading(!1),this.showError(e instanceof Error?e.message:Cr.DETECTION_ERROR)}}showLoading(e){if(!this.container)return;const t=this.container.querySelector(".blurwp-loading-overlay");t&&(t.style.display=e?"flex":"none")}updateModelLoadingProgress(e,t,n){if(!this.container)return;const o=this.container.querySelector(".blurwp-loading-overlay p");if(o)if(t===0)o.textContent=`Loading ${e} model...`;else if(t===n)o.textContent="Model loaded! Detecting faces...";else{const a=Math.round(t/n*100);o.textContent=`Loading ${e} model... ${a}%`}}showPreview(){if(!this.canvas||!this.originalImageData)return;const e=document.createElement("canvas");e.width=this.canvas.width,e.height=this.canvas.height;const t=e.getContext("2d");if(!t)return;t.putImageData(this.originalImageData,0,0);const n=this.state.faces.filter(i=>i.enabled);Eo.getEffect(this.state.settings.style).apply(t,n,this.state.settings.intensity,this.state.settings.expand);const a=document.createElement("div");a.className="blurwp-preview-modal",a.style.cssText=`
      position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: 200000;
      display: flex; align-items: center; justify-content: center;
    `,a.innerHTML=`
      <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.8);" onclick="this.parentElement.remove()"></div>
      <div style="position: relative; background: white; padding: 30px; border-radius: 8px; max-width: 90%; max-height: 90%; overflow: auto;">
        <h3 style="margin-top: 0; text-align: center;">Preview Comparison</h3>
        <div style="display: flex; gap: 20px; margin: 20px 0;">
          <div style="flex: 1; text-align: center;">
            <h4>Original</h4>
            <img src="${this.originalImageData?this.canvas.toDataURL():""}" style="max-width: 100%; max-height: 400px; border: 1px solid #ddd;">
          </div>
          <div style="flex: 1; text-align: center;">
            <h4>Processed</h4>
            <img src="${e.toDataURL()}" style="max-width: 100%; max-height: 400px; border: 1px solid #ddd;">
          </div>
        </div>
        <button style="display: block; margin: 20px auto 0; padding: 10px 20px; background: #f0f0f0; border: 1px solid #ccc; border-radius: 4px; cursor: pointer;" onclick="this.closest('.blurwp-preview-modal').remove()">Close Preview</button>
      </div>
    `,document.body.appendChild(a)}async loadImage(e){return new Promise((t,n)=>{const o=new Image;o.crossOrigin="anonymous",o.onload=()=>{this.currentImage=o,this.canvas=document.createElement("canvas"),this.canvas.width=o.naturalWidth,this.canvas.height=o.naturalHeight,this.ctx=this.canvas.getContext("2d"),this.ctx&&this.ctx.drawImage(o,0,0);const a=document.getElementById("blurwp-canvas-container");a&&(a.innerHTML="",this.canvas.style.maxWidth="100%",this.canvas.style.cursor="default",this.canvas.addEventListener("mousedown",i=>this.onMouseDown(i)),this.canvas.addEventListener("mousemove",i=>this.onMouseMove(i)),this.canvas.addEventListener("mouseup",()=>this.onMouseUp()),this.canvas.addEventListener("mouseleave",()=>this.onMouseUp()),this.canvas.style.height="auto",a.appendChild(this.canvas)),t()},o.onerror=()=>{n(new Error(Cr.LOAD_ERROR))},o.src=e})}updateUI(){if(!this.container)return;const e=this.container.querySelector("#blurwp-face-count-text");e&&(e.textContent=`Faces detected: ${this.state.faces.length}`),this.updateFaceList(),this.drawFaceBoxes()}updateFaceList(){if(!this.container)return;const e=this.container.querySelector("#blurwp-face-list");if(!e)return;if(e.innerHTML="",this.state.faces.length===0){e.innerHTML='<div class="blurwp-no-faces">No faces detected</div>';return}const t=document.createElement("div");t.className="blurwp-face-list-header",t.innerHTML="<strong>Detected Faces:</strong>",t.style.cssText="margin-bottom: 10px;",e.appendChild(t),this.state.faces.forEach((a,i)=>{const s=document.createElement("div");s.className="blurwp-face-item",s.style.cssText=`display: flex; align-items: center; gap: 10px; margin: 5px 0; padding: 5px; background: ${a.enabled?"#f9f9f9":"#e0e0e0"}; border-radius: 4px; opacity: ${a.enabled?"1":"0.6"}; cursor: pointer;`,s.addEventListener("click",h=>{h.target.tagName==="INPUT"||h.target.tagName==="BUTTON"||(this.state.selectedFaceIndex=i,this.drawFaceBoxes())});const u=a.manual?"Manual":`Face ${i+1}`,l=a.originalX!==void 0&&(a.x!==a.originalX||a.y!==a.originalY||a.width!==a.originalWidth||a.height!==a.originalHeight);s.innerHTML=`
        <label style="display: flex; align-items: center; gap: 8px; cursor: pointer; flex: 1;">
          <input type="checkbox" ${a.enabled?"checked":""} data-face-id="${a.id}" style="cursor: pointer;">
          <span>${u}</span>
        </label>
        <span style="font-size: 12px; color: #666;">${Math.round(a.confidence*100)}% confidence</span>
        ${l?`<button class="button button-small blurwp-reset-face" data-face-id="${a.id}" title="Reset to original position" style="padding: 2px 8px; font-size: 11px;">↺ Reset</button>`:""}
      `,e.appendChild(s)}),e.querySelectorAll('input[type="checkbox"]').forEach(a=>{a.addEventListener("change",i=>{const s=i.target.dataset.faceId||"";this.toggleFace(s,i.target.checked)})}),e.querySelectorAll(".blurwp-reset-face").forEach(a=>{a.addEventListener("click",i=>{i.stopPropagation();const s=i.target.dataset.faceId||"";this.resetFaceToOriginal(s)})})}resetFaceToOriginal(e){const t=this.state.faces.find(n=>n.id===e);t&&t.originalX!==void 0&&t.originalY!==void 0&&t.originalWidth!==void 0&&t.originalHeight!==void 0&&(t.x=t.originalX,t.y=t.originalY,t.width=t.originalWidth,t.height=t.originalHeight,this.state.isDirty=!0,this.ctx&&this.originalImageData&&this.ctx.putImageData(this.originalImageData,0,0),this.drawFaceBoxes(),this.updateFaceList(),console.log("BlurWP Editor: Face reset to original",t))}toggleFace(e,t){const n=this.state.faces.find(o=>o.id===e);n&&(n.enabled=t,this.state.isDirty=!0,this.ctx&&this.originalImageData&&this.ctx.putImageData(this.originalImageData,0,0),this.drawFaceBoxes(),this.updateFaceList(),console.log(`Face ${e} ${t?"enabled":"disabled"}`))}toggleDrawingMode(){var t;this.isDrawingMode=!this.isDrawingMode;const e=(t=this.container)==null?void 0:t.querySelector("#blurwp-add-face-btn");e&&(this.isDrawingMode?(e.textContent="✓ Click and Drag on Image",e.style.background="#0066cc",e.style.color="white",this.canvas&&(this.canvas.style.cursor="crosshair")):(e.textContent="+ Add Face Manually",e.style.background="",e.style.color="",this.canvas&&(this.canvas.style.cursor="default"))),console.log(`Drawing mode: ${this.isDrawingMode?"ON":"OFF"}`)}onMouseDown(e){if(!this.canvas)return;const t=this.canvas.getBoundingClientRect(),n=this.canvas.width/t.width,o=this.canvas.height/t.height,a=(e.clientX-t.left)*n,i=(e.clientY-t.top)*o;if(this.isDrawingMode){this.isDrawing=!0,this.drawStart={x:a,y:i},this.drawCurrent={...this.drawStart};return}const s=this.getResizeHandle(a,i);if(s){this.interactionMode="resize",this.activeFaceIndex=s.faceIndex,this.resizeHandle=s.handle,this.interactionStart={x:a,y:i};const c=this.state.faces[s.faceIndex];this.faceStartState={x:c.x*this.canvas.width,y:c.y*this.canvas.height,width:c.width*this.canvas.width,height:c.height*this.canvas.height};return}const u=this.getFaceAtPosition(a,i);if(u!==-1){this.interactionMode="move",this.activeFaceIndex=u,this.interactionStart={x:a,y:i};const c=this.state.faces[u];this.faceStartState={x:c.x*this.canvas.width,y:c.y*this.canvas.height,width:c.width*this.canvas.width,height:c.height*this.canvas.height},this.state.selectedFaceIndex=u,this.drawFaceBoxes();return}}getFaceAtPosition(e,t){if(!this.canvas)return-1;const n=this.canvas.width,o=this.canvas.height;for(let a=this.state.faces.length-1;a>=0;a--){const i=this.state.faces[a];if(!i.enabled)continue;const s=i.x*n,u=i.y*o,c=i.width*n,l=i.height*o;if(e>=s&&e<=s+c&&t>=u&&t<=u+l)return a}return-1}getResizeHandle(e,t){if(!this.canvas)return null;const n=this.canvas.width,o=this.canvas.height,a=8;for(let i=this.state.faces.length-1;i>=0;i--){const s=this.state.faces[i];if(!s.enabled)continue;const u=s.x*n,c=s.y*o,l=s.width*n,h=s.height*o;if(Math.abs(e-u)<=a&&Math.abs(t-c)<=a)return{faceIndex:i,handle:"nw"};if(Math.abs(e-(u+l))<=a&&Math.abs(t-c)<=a)return{faceIndex:i,handle:"ne"};if(Math.abs(e-u)<=a&&Math.abs(t-(c+h))<=a)return{faceIndex:i,handle:"sw"};if(Math.abs(e-(u+l))<=a&&Math.abs(t-(c+h))<=a)return{faceIndex:i,handle:"se"};if(Math.abs(e-u)<=a&&t>c&&t<c+h)return{faceIndex:i,handle:"w"};if(Math.abs(e-(u+l))<=a&&t>c&&t<c+h)return{faceIndex:i,handle:"e"};if(Math.abs(t-c)<=a&&e>u&&e<u+l)return{faceIndex:i,handle:"n"};if(Math.abs(t-(c+h))<=a&&e>u&&e<u+l)return{faceIndex:i,handle:"s"}}return null}onMouseMove(e){if(!this.canvas)return;const t=this.canvas.getBoundingClientRect(),n=this.canvas.width/t.width,o=this.canvas.height/t.height,a=(e.clientX-t.left)*n,i=(e.clientY-t.top)*o;if(this.isDrawingMode&&this.isDrawing&&this.drawStart){if(this.drawCurrent={x:a,y:i},this.ctx&&this.originalImageData){this.ctx.putImageData(this.originalImageData,0,0),this.drawFaceBoxes(),this.ctx.strokeStyle="#0066cc",this.ctx.lineWidth=2,this.ctx.setLineDash([5,5]);const s=Math.min(this.drawStart.x,this.drawCurrent.x),u=Math.min(this.drawStart.y,this.drawCurrent.y),c=Math.abs(this.drawCurrent.x-this.drawStart.x),l=Math.abs(this.drawCurrent.y-this.drawStart.y);this.ctx.strokeRect(s,u,c,l),this.ctx.setLineDash([])}return}if(!this.isDrawingMode){const s=this.getResizeHandle(a,i);if(s){const u={nw:"nw-resize",ne:"ne-resize",sw:"sw-resize",se:"se-resize",n:"n-resize",s:"s-resize",e:"e-resize",w:"w-resize"};this.canvas.style.cursor=u[s.handle]||"default"}else this.getFaceAtPosition(a,i)!==-1?this.canvas.style.cursor="move":this.canvas.style.cursor="default"}if(this.interactionMode==="move"&&this.activeFaceIndex!==-1&&this.interactionStart&&this.faceStartState){const s=a-this.interactionStart.x,u=i-this.interactionStart.y,c=Math.max(0,Math.min(this.canvas.width-this.faceStartState.width,this.faceStartState.x+s)),l=Math.max(0,Math.min(this.canvas.height-this.faceStartState.height,this.faceStartState.y+u)),h=this.state.faces[this.activeFaceIndex];h.x=c/this.canvas.width,h.y=l/this.canvas.height,this.ctx&&this.originalImageData&&(this.ctx.putImageData(this.originalImageData,0,0),this.drawFaceBoxes());return}if(this.interactionMode==="resize"&&this.activeFaceIndex!==-1&&this.resizeHandle&&this.interactionStart&&this.faceStartState){const s=a-this.interactionStart.x,u=i-this.interactionStart.y;let c=this.faceStartState.x,l=this.faceStartState.y,h=this.faceStartState.width,f=this.faceStartState.height;if(this.resizeHandle.includes("e")&&(h=Math.max(20,this.faceStartState.width+s)),this.resizeHandle.includes("w")){const p=this.faceStartState.width-20,v=Math.min(p,s);c=this.faceStartState.x+v,h=this.faceStartState.width-v}if(this.resizeHandle.includes("s")&&(f=Math.max(20,this.faceStartState.height+u)),this.resizeHandle.includes("n")){const p=this.faceStartState.height-20,v=Math.min(p,u);l=this.faceStartState.y+v,f=this.faceStartState.height-v}c=Math.max(0,c),l=Math.max(0,l),h=Math.min(h,this.canvas.width-c),f=Math.min(f,this.canvas.height-l);const d=this.state.faces[this.activeFaceIndex];d.x=c/this.canvas.width,d.y=l/this.canvas.height,d.width=h/this.canvas.width,d.height=f/this.canvas.height,this.ctx&&this.originalImageData&&(this.ctx.putImageData(this.originalImageData,0,0),this.drawFaceBoxes())}}onMouseUp(){var c;if(this.interactionMode!=="none"){this.activeFaceIndex!==-1&&(this.state.isDirty=!0,console.log("BlurWP Editor: Face updated",this.state.faces[this.activeFaceIndex])),this.interactionMode="none",this.activeFaceIndex=-1,this.resizeHandle=null,this.interactionStart=null,this.faceStartState=null;return}if(!this.isDrawingMode||!this.isDrawing||!this.canvas||!this.drawStart||!this.drawCurrent){this.isDrawing=!1;return}this.isDrawing=!1;const e=Math.min(this.drawStart.x,this.drawCurrent.x),t=Math.min(this.drawStart.y,this.drawCurrent.y),n=Math.abs(this.drawCurrent.x-this.drawStart.x),o=Math.abs(this.drawCurrent.y-this.drawStart.y);if(n<20||o<20){console.log("BlurWP Editor: Drawn rectangle too small, ignoring"),this.ctx&&this.originalImageData&&(this.ctx.putImageData(this.originalImageData,0,0),this.drawFaceBoxes());return}const a=this.canvas.width,i=this.canvas.height,s={id:`manual_${Date.now()}`,x:e/a,y:t/i,width:n/a,height:o/i,confidence:1,enabled:!0,manual:!0};this.state.faces.push(s),this.state.isDirty=!0,console.log("BlurWP Editor: Manual face added",s),this.ctx&&this.originalImageData&&(this.ctx.putImageData(this.originalImageData,0,0),this.drawFaceBoxes()),this.updateFaceList();const u=(c=this.container)==null?void 0:c.querySelector("#blurwp-face-count-text");u&&(u.textContent=`Faces detected: ${this.state.faces.length}`),this.toggleDrawingMode(),this.saveWorkspace()}startAutoSave(){setInterval(()=>{this.state.isDirty&&this.state.attachmentId&&this.saveWorkspace()},5e3)}saveWorkspace(){this.state.attachmentId&&(this.workspaceManager.save(this.state.attachmentId,{faces:this.state.faces,settings:this.state.settings,detectionSettings:this.state.detectionSettings}),this.state.isDirty=!1)}drawFaceBoxes(){if(!this.ctx||!this.canvas||this.state.faces.length===0)return;const e=this.canvas.width,t=this.canvas.height,n=8;this.state.faces.forEach((o,a)=>{if(!o.enabled)return;const i=o.x*e,s=o.y*t,u=o.width*e,c=o.height*t,l=a===this.state.selectedFaceIndex;o.manual?this.ctx.strokeStyle="#0066cc":this.ctx.strokeStyle=l?"#ff0000":"#00ff00",this.ctx.lineWidth=l?4:3,this.ctx.strokeRect(i,s,u,c),this.ctx.fillStyle=o.manual?"#0066cc":l?"#ff0000":"#00ff00",this.ctx.font="bold 14px Arial";const h=o.manual?"":`Face ${a+1}: `,f=o.manual?"Manual":`${h}${Math.round(o.confidence*100)}%`;this.ctx.fillText(f,i,s-5),l&&(this.ctx.fillStyle="#ffffff",this.ctx.strokeStyle="#000000",this.ctx.lineWidth=1,[{x:i-n/2,y:s-n/2},{x:i+u-n/2,y:s-n/2},{x:i-n/2,y:s+c-n/2},{x:i+u-n/2,y:s+c-n/2},{x:i+u/2-n/2,y:s-n/2},{x:i+u/2-n/2,y:s+c-n/2},{x:i-n/2,y:s+c/2-n/2},{x:i+u-n/2,y:s+c/2-n/2}].forEach(p=>{this.ctx.fillRect(p.x,p.y,n,n),this.ctx.strokeRect(p.x,p.y,n,n)}))})}showError(e){if(!this.container)return;const t=this.container.querySelector("#blurwp-canvas-container");t&&(t.innerHTML=`<div style="color: red; padding: 20px;">Error: ${e}</div>`)}close(){this.state.isDirty&&this.state.attachmentId&&this.saveWorkspace(),this.container&&(this.container.remove(),this.container=null);const e=new CustomEvent("blurwp:editor:close",{detail:{attachmentId:this.state.attachmentId}});document.dispatchEvent(e),this.canvas=null,this.ctx=null,this.currentImage=null,this.originalImageData=null}}class Yc{constructor(e,t,n){ut(this,"queue",[]);ut(this,"currentIndex",0);ut(this,"editor");ut(this,"isProcessing",!1);ut(this,"progressContainer",null);ut(this,"restUrl");ut(this,"nonce");this.editor=e,this.restUrl=t,this.nonce=n,document.addEventListener("blurwp:save:success",()=>{this.isProcessing&&(console.log("BatchManager: Image saved, moving to next"),this.next())}),document.addEventListener("blurwp:editor:close",()=>{this.isProcessing})}start(e){e.length!==0&&(this.queue=e,this.currentIndex=0,this.isProcessing=!0,window.BlurWPBatchActive=!0,console.log("BatchManager: Starting bulk processing for",e.length,"images"),this.createProgressUI(),this.processCurrent())}async processCurrent(){if(this.currentIndex>=this.queue.length){this.finish();return}const e=this.queue[this.currentIndex];this.updateProgress();try{const t=await this.getImageUrl(e);await this.editor.open(e,t),this.injectBulkControls()}catch(t){console.error("BatchManager: Failed to load image",e,t),confirm(`Failed to load image ID ${e}. Skip to next?`)?this.next():this.finish()}}next(){this.currentIndex++,this.currentIndex<this.queue.length?this.processCurrent():this.finish()}skip(){this.editor.close(),this.next()}finish(){this.isProcessing=!1,window.BlurWPBatchActive=!1,this.progressContainer&&this.progressContainer.remove(),alert("Bulk processing complete!"),window.location.reload()}createProgressUI(){this.progressContainer=document.createElement("div"),this.progressContainer.id="blurwp-bulk-progress",this.progressContainer.style.cssText=`
      position: fixed; top: 20px; left: 50%; transform: translateX(-50%);
      z-index: 300000; background: white; padding: 15px 25px;
      border-radius: 8px; box-shadow: 0 4px 15px rgba(0,0,0,0.2);
      display: flex; flex-direction: column; align-items: center; gap: 10px;
      min-width: 300px; border-top: 4px solid #2271b1;
    `,this.progressContainer.innerHTML=`
      <div style="font-weight: bold; font-size: 14px;">Bulk Processing</div>
      <div style="width: 100%; height: 8px; background: #f0f0f1; border-radius: 4px; overflow: hidden;">
        <div id="blurwp-bulk-bar" style="width: 0%; height: 100%; background: #2271b1; transition: width 0.3s;"></div>
      </div>
      <div id="blurwp-bulk-status" style="font-size: 12px; color: #666;">
        Processing image 1 of ${this.queue.length}
      </div>
      <button id="blurwp-bulk-stop" class="button button-link-delete" style="font-size: 11px;">Stop Batch</button>
    `,document.body.appendChild(this.progressContainer);const e=this.progressContainer.querySelector("#blurwp-bulk-stop");e&&e.addEventListener("click",()=>{confirm("Are you sure you want to stop bulk processing?")&&this.finish()})}updateProgress(){if(!this.progressContainer)return;const e=this.progressContainer.querySelector("#blurwp-bulk-bar"),t=this.progressContainer.querySelector("#blurwp-bulk-status");if(e&&t){const n=this.currentIndex/this.queue.length*100;e.style.width=`${n}%`,t.textContent=`Processing image ${this.currentIndex+1} of ${this.queue.length}`}}injectBulkControls(){setTimeout(()=>{const e=document.querySelector(".blurwp-modal-footer");if(e&&!e.querySelector("#blurwp-skip-btn")){const t=document.createElement("button");t.id="blurwp-skip-btn",t.className="button",t.textContent="Skip Image",t.style.marginRight="auto",t.addEventListener("click",()=>this.skip()),e.insertBefore(t,e.firstChild);const n=document.querySelector("#blurwp-modal-title");n&&(n.textContent=`Bulk: Image ${this.currentIndex+1} of ${this.queue.length}`)}},100)}async getImageUrl(e){if(window.wp&&window.wp.media&&window.wp.media.attachment){const o=window.wp.media.attachment(e);return o.get("url")?o.get("url"):new Promise((a,i)=>{o.fetch({success:s=>a(s.get("url")),error:()=>i(new Error("Failed to fetch attachment"))})})}const t=await fetch(`${this.restUrl.replace("/blurwp/v1","")}/wp-json/wp/v2/media/${e}`,{headers:{"X-WP-Nonce":this.nonce}});if(!t.ok)throw new Error("Failed to fetch media data");const n=await t.json();return n.source_url||n.guid.rendered}}function _i(){var t,n;console.log("BlurWP: Initializing...");const r=new $c({modelUrl:(blurwpEditor==null?void 0:blurwpEditor.modelUrl)||ve.DEFAULT_MODEL_URL,restUrl:(blurwpEditor==null?void 0:blurwpEditor.restUrl)||"",nonce:(blurwpEditor==null?void 0:blurwpEditor.nonce)||"",defaultModel:(blurwpEditor==null?void 0:blurwpEditor.defaultModel)||"ssdMobilenetv1",i18n:(blurwpEditor==null?void 0:blurwpEditor.i18n)||{}}),e=new Yc(r,(blurwpEditor==null?void 0:blurwpEditor.restUrl)||"",(blurwpEditor==null?void 0:blurwpEditor.nonce)||"");window.blurwpOpenEditor=(o,a)=>{var i;if(!a){console.error("BlurWP: No image URL provided"),alert(((i=blurwpEditor==null?void 0:blurwpEditor.i18n)==null?void 0:i.loadError)||"Failed to load image");return}r.open(o,a)},blurwpEditor!=null&&blurwpEditor.bulkQueue&&blurwpEditor.bulkQueue.length>0&&(console.log("BlurWP: Detected bulk queue of",blurwpEditor.bulkQueue.length,"images"),setTimeout(()=>{e.start(blurwpEditor.bulkQueue)},500)),typeof window.wp<"u"&&window.wp.media&&(blurwpEditor!=null&&blurwpEditor.autoProcessSetting)&&(console.log("BlurWP: Media Library found, attaching upload listener..."),window.wp.media.model.Attachments.all.on("add",o=>{o.get("type")==="image"&&o.get("url")&&setTimeout(()=>{(o.get("uploadedTo")===0||o.get("status")==="ready")&&(console.log("BlurWP: Detected new AJAX upload:",o.id),window.blurwpOpenEditor(o.id,o.get("url")))},1e3)})),document.addEventListener("click",o=>{const i=o.target.closest(".blurwp-anonymize-button");if(i){o.preventDefault();const s=parseInt(i.getAttribute("data-attachment-id")||"0",10),u=i.getAttribute("data-image-url")||"";s&&u&&window.blurwpOpenEditor(s,u)}}),(t=blurwpEditor==null?void 0:blurwpEditor.autoProcess)!=null&&t.id&&((n=blurwpEditor==null?void 0:blurwpEditor.autoProcess)!=null&&n.url)&&(console.log("BlurWP: Triggering auto-process for image",blurwpEditor.autoProcess.id),setTimeout(()=>{window.blurwpOpenEditor(blurwpEditor.autoProcess.id,blurwpEditor.autoProcess.url)},500)),window.BlurWP={Editor:$c,BatchManager:Yc,version:ve.VERSION},console.log("BlurWP: Initialized successfully")}return document.readyState==="loading"?document.addEventListener("DOMContentLoaded",_i):_i(),We.init=_i,Object.defineProperty(We,Symbol.toStringTag,{value:"Module"}),We}({});
//# sourceMappingURL=blurwp.iife.js.map
