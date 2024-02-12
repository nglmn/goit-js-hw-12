import{i as L,a as S,S as $}from"./assets/vendor-b52d9f5e.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function s(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerpolicy&&(o.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?o.credentials="include":n.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(n){if(n.ep)return;n.ep=!0;const o=s(n);fetch(n.href,o)}})();const q=document.querySelector(".gallery");function m({hits:e}){const t=e.map(({largeImageURL:s,webformatURL:r,likes:n,views:o,comments:i,downloads:w})=>`
        <li class="gallery-item">
        <a href="${s}">
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
        <p class="info-value">${n}</p>
        </li>
        <li class="info-item">
        <p class="info-name">Viewes</p>
        <p class="info-value">${o}</p>
        </li>
        <li class="info-item">
        <p class="info-name">Comments</p>
        <p class="info-value">${i}</p>
        </li>
        <li class="info-item">
        <p class="info-name">Downloads</p>
        <p class="info-value">${w}</p>
        </li>
        </ul>
        </div>
        </li>`).join("");q.innerHTML+=t}const d=document.querySelector(".form"),y=document.querySelector(".gallery"),u=document.querySelector(".more"),p=document.querySelector(".spinner");let g=null,c=1;const f=15;let h=null;d.addEventListener("submit",M);u.addEventListener("click",E);async function M(e){e.preventDefault(),g=e.target.elements.input.value.trim();try{P();const t=await b();l(!0),m(t),l(!1),a(!0)}catch(t){L.error({title:"Error",message:t.message})}v()}async function E(){c++,a(!1),l(!0);const e=await b();c!==h?(m(e),x(),l(!1),a(!0)):(a(!1),l(!1),T()),v()}async function b(){const e="41991233-e464ef3fed32efbb52a55d5bb",t=S.create({baseURL:"https://pixabay.com"}),s={page:c,per_page:f,orientation:"horizontal",image_type:"photo"},r=await t.get(`/api/?key=${e}&q=${g}`,{params:s});return h=Math.floor(r.data.totalHits/f),r.data}function a(e){return e?u.style.display="block":u.style.display="none"}function l(e){return e?p.style.visibility="visible":p.style.visibility="hidden"}function P(){d.reset(),y.innerHTML="",c=1}function T(){const e=document.createElement("p"),t="We're sorry, but you've reached the end of search results.";e.classList.add("message"),e.textContent=t,y.parentNode.appendChild(e)}function v(){let e=new $(".gallery a",{captions:!0,captionType:"attr",captionsData:"title",captionDelay:250,captionPosition:"bottom"});e.show(),e.refresh()}function x(){let t=document.querySelector(".gallery-item").getBoundingClientRect().height;t=Math.round(t);const s=2;window.scrollBy(0,t*s)}
//# sourceMappingURL=commonHelpers.js.map
