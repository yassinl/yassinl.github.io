import{Q as Y,T as R,y as O,v as k,V as M,p as V,W as b,X as P,Y as $,Z as C,_ as T,$ as g,a0 as A,a1 as W,a2 as p,a3 as j,a4 as q,a5 as B,a6 as K,a7 as Q,a8 as X,a9 as Z,aa as z,H as F,ab as E,K as G,c as J}from"./runtime.nI_2DL2P.js";import{b as U}from"./disclose-version.DjBAOCAM.js";const x=["touchstart","touchmove"];function rr(r){return x.includes(r)}const ar=new Set,D=new Set;function m(r){var N;var a=this,n=a.ownerDocument,c=r.type,o=((N=r.composedPath)==null?void 0:N.call(r))||[],e=o[0]||r.target,u=0,_=r.__root;if(_){var d=o.indexOf(_);if(d!==-1&&(a===document||a===window)){r.__root=a;return}var h=o.indexOf(a);if(h===-1)return;d<=h&&(u=d)}if(e=o[u]||r.target,e!==a){Y(r,"currentTarget",{configurable:!0,get(){return e||n}});var w=M,i=V;R(null),O(null);try{for(var t,s=[];e!==null;){var f=e.assignedSlot||e.parentNode||e.host||null;try{var l=e["__"+c];if(l!==void 0&&!e.disabled)if(k(l)){var[I,...L]=l;I.apply(e,[r,...L])}else l.call(e,r)}catch(y){t?s.push(y):t=y}if(r.cancelBubble||f===a||f===null)break;e=f}if(t){for(let y of s)queueMicrotask(()=>{throw y});throw t}}finally{r.__root=a,delete r.currentTarget,R(w),O(i)}}}function sr(r,a){var n=a==null?"":typeof a=="object"?a+"":a;n!==(r.__t??(r.__t=r.nodeValue))&&(r.__t=n,r.nodeValue=n==null?"":n+"")}function er(r,a){return H(r,a)}function ir(r,a){b(),a.intro=a.intro??!1;const n=a.target,c=E,o=p;try{for(var e=P(n);e&&(e.nodeType!==8||e.data!==$);)e=C(e);if(!e)throw T;g(!0),A(e),W();const u=H(r,{...a,anchor:e});if(p===null||p.nodeType!==8||p.data!==j)throw q(),T;return g(!1),u}catch(u){if(u===T)return a.recover===!1&&B(),b(),K(n),g(!1),er(r,a);throw u}finally{g(c),A(o)}}const v=new Map;function H(r,{target:a,anchor:n,props:c={},events:o,context:e,intro:u=!0}){b();var _=new Set,d=i=>{for(var t=0;t<i.length;t++){var s=i[t];if(!_.has(s)){_.add(s);var f=rr(s);a.addEventListener(s,m,{passive:f});var l=v.get(s);l===void 0?(document.addEventListener(s,m,{passive:f}),v.set(s,1)):v.set(s,l+1)}}};d(Q(ar)),D.add(d);var h=void 0,w=X(()=>{var i=n??a.appendChild(Z());return z(()=>{if(e){F({});var t=J;t.c=e}o&&(c.$$events=o),E&&U(i,null),h=r(i,c)||{},E&&(V.nodes_end=p),e&&G()}),()=>{var f;for(var t of _){a.removeEventListener(t,m);var s=v.get(t);--s===0?(document.removeEventListener(t,m),v.delete(t)):v.set(t,s)}D.delete(d),i!==n&&((f=i.parentNode)==null||f.removeChild(i))}});return S.set(h,w),h}let S=new WeakMap;function or(r,a){const n=S.get(r);return n?(S.delete(r),n(a)):Promise.resolve()}export{ir as h,er as m,sr as s,or as u};