(()=>{"use strict";const t=10;function e(e,n){for(let l=0;l<50;l++)for(let o=0;o<50;o++){const c=e[l][o];n.beginPath(),n.rect(o*t,l*t,t,t),n.fillStyle=c?"black":"white",n.fill(),n.stroke()}}const n=document.querySelector("#screen"),l=n.getContext("2d"),o=document.querySelector("#start"),c=document.querySelector("#pause");n.width=500,n.height=500;let i=null;const r=new Audio("decision1.mp3");let a=new Array(50).fill(null).map((()=>new Array(50).fill(null).map((()=>!!Math.floor(2*Math.random())))));function u(){a=function(t){const e=t.map((t=>[...t]));for(let n=0;n<50;n++)for(let l=0;l<50;l++){let o=0;for(let e=-1;e<=1;e++)for(let c=-1;c<=1;c++){if(0===e&&0===c)continue;if(n+e<0||l+e<0||n+e>=50||l+e>=50)continue;t[n+e][l+e]&&o++;const i=n+e,r=l+c;i>=0&&i<50&&r>=0&&r<50&&(o+=t[i][r]?1:0)}t[n][l]?(o<2||o>3)&&(e[n][l]=!1):3===o&&(e[n][l]=!0)}return e}(a),e(a,l),i=requestAnimationFrame(u)}n.addEventListener("click",(function(o){const c=n.getBoundingClientRect(),i=o.clientX-c.left,u=o.clientY-c.top,f=Math.floor(u/t),s=Math.floor(i/t);a[f][s]=!a[f][s],r.cloneNode().play(),e(a,l)})),o.addEventListener("click",(()=>{i||u()})),c.addEventListener("click",(()=>{i&&(cancelAnimationFrame(i),i=null)})),e(a,l)})();
//# sourceMappingURL=index.js.map