import{i as S,a as L,S as q}from"./assets/vendor-b52d9f5e.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();const $=document.querySelector(".gallery");function f({hits:t}){const e=t.map(({largeImageURL:n,webformatURL:r,likes:o,views:s,comments:l,downloads:v})=>`
        <li class="gallery-item">
        <a href="${n}">
        <img
        src="${r}"
        alt=""
        class="gallery-item-img"
        width="350"
        height="200"/>
        </a>
        <div class="info-wrapper">
        <ul class="info-list">
        <li class="info-item">
        <p class="info-name">Likes</p>
        <p class="info-value">${o}</p>
        </li>
        <li class="info-item">
        <p class="info-name">Viewes</p>
        <p class="info-value">${s}</p>
        </li>
        <li class="info-item">
        <p class="info-name">Comments</p>
        <p class="info-value">${l}</p>
        </li>
        <li class="info-item">
        <p class="info-name">Downloads</p>
        <p class="info-value">${v}</p>
        </li>
        </ul>
        </div>
        </li>`).join("");$.innerHTML+=e}const k="Sorry, there are no images matching<br> your search query. Please try again!",E={title:"Error",message:k,messageSize:"16px",position:"topRight",theme:"dark",backgroundColor:"#EF4040",color:"#ffffff"},g=document.querySelector(".form"),M=document.querySelector(".gallery"),p=document.querySelector(".more"),d=document.querySelector(".spinner"),m=document.querySelector(".message");let h=null,u=1;const c=15;let b=null;g.addEventListener("submit",P);p.addEventListener("click",T);async function P(t){t.preventDefault(),h=t.target.elements.input.value.trim();try{x();const e=await w();e.total!=0&&e.total>c&&(b=Math.round(e.totalHits/c),i(!0),f(e),i(!1),a(!0)),e.total!=0&&e.total<c&&(f(e),m.style.display="block"),e.total===0&&S.show(E)}catch(e){console.log(e.status)}y().refresh()}async function T(){u++,a(!1),i(!0);const t=await w();f(t),u<b?(B(),i(!1),a(!0)):(a(!1),i(!1),m.style.display="block"),y().refresh()}async function w(){const t="41991233-e464ef3fed32efbb52a55d5bb",e=L.create({baseURL:"https://pixabay.com"}),n={page:u,per_page:c,orientation:"horizontal",image_type:"photo"};return(await e.get(`/api/?key=${t}&q=${h}`,{params:n})).data}function a(t){t?p.style.display="block":p.style.display="none"}function i(t){t?d.style.visibility="visible":d.style.visibility="hidden"}function x(){g.reset(),M.innerHTML="",u=1,i(!1),a(!1),m.style.display="none"}function y(){let t=new q(".gallery a",{captions:!0,captionType:"attr",captionsData:"title",captionDelay:250,captionPosition:"bottom"});return t.show(),t}y();function B(){let e=document.querySelector(".gallery-item").getBoundingClientRect().height;e=Math.round(e);const n=2;window.scrollBy(0,e*n)}
//# sourceMappingURL=commonHelpers.js.map
