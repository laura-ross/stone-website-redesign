var ScrollOut=function(){"use strict"
function n(n,t){for(var e=[],o=0,r=n.length;r>o;o++){var i=t(n[o],o,r)
i!==_&&e.push(i)}return e}function t(n,t,e,o){if(n.classList.contains(t)!==e&&(n.classList.toggle(t,e),o)){var r=n.className
n.className="",n.offsetWidth,n.className=r}}function e(n,t,e){n.addEventListener(t,e)}function o(n,t,e){n.removeEventListener(t,e)}var _=void 0,r=window,i="resize",s="scroll",c="scroll-in",u="scroll-out"
return function(l){var a=!1!==(l=l||{}).once,f=l.delay||40,v=l.forceReflow,d=l.inClass||c,m=l.outClass||u,g="."+d+",."+m,h=("string"==typeof l.element?document.querySelector(h):l.element)||document,L=_,w=_,p=0,y=0,C=[],N=function(){return C=n(h.querySelectorAll(g),function(n){var t=n.getBoundingClientRect()
return t.L=n,t})},S=function(){w=_
var e=r.innerHeight
C=n(C,function(n,o){var r=n.bottom>y&&n.top<y+e-e*p
return n.show!==r&&(t(n.L,d,r,v),t(n.L,m,!r,v)),n.show=r,a&&r?_:n}),L=y},q=function(){w===_&&C.length&&L!==y&&(w=setTimeout(S,f))},E=function(){y=r.pageYOffset,q()}
return N(),q(),e(r,i,N),e(r,i,E),e(r,s,E),{teardown:function(){o(r,i,N),o(r,i,E),o(r,s,E)}}}}()

export default ScrollOut
