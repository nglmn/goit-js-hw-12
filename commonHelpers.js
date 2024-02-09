import{S as L,a as w}from"./assets/vendor-0cc93ea0.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(t){if(t.ep)return;t.ep=!0;const n=o(t);fetch(t.href,n)}})();const f=document.querySelector(".form"),p=document.querySelector(".gallery"),u=document.querySelector(".more"),d=document.querySelector(".spinner");let y=null,c=1;const m=50;let h=null;f.addEventListener("submit",async e=>{e.preventDefault(),y=e.target.elements.input.value.trim();try{f.reset(),p.innerHTML="",c=1,r(!0);const o=await g();b(o),r(!1),l(!0)}catch(o){console.log(o)}new L(".gallery a",{captions:!0,captionType:"attr",captionsData:"title",captionDelay:250,captionPosition:"bottom"}).show()});u.addEventListener("click",async()=>{c++,l(!1),r(!0);const e=await g();c<h?(b(e),r(!1),l(!0)):(l(!1),r(!1),S())});async function g(){const e=w.create({baseURL:"https://pixabay.com"}),s={page:c,per_page:m,orientation:"horizontal",image_type:"photo",safesearch:!0},o=await e.get(`/api/?key=41991233-e464ef3fed32efbb52a55d5bb&q=${y}`,{params:s});return h=Math.ceil(o.data.totalHits/m),o.data}function b({hits:e}){const s=e.map(({largeImageURL:o,webformatURL:a,likes:t,views:n,comments:i,downloads:v})=>`
        <li class="gallery-item">
        <a href="${o}">
        <img
        src="${a}"
        alt=""
        class="gallery-item-img"
        width="350"
        height="200"/>
        </a>
        <div class="info-wrapper">
        <ul class="info-list">
        <li class="info-item">
        <p class="info-name">Likes</p>
        <p class="info-value">${t}</p>
        </li>
        <li class="info-item">
        <p class="info-name">Viewes</p>
        <p class="info-value">${n}</p>
        </li>
        <li class="info-item">
        <p class="info-name">Comments</p>
        <p class="info-value">${i}</p>
        </li>
        <li class="info-item">
        <p class="info-name">Downloads</p>
        <p class="info-value">${v}</p>
        </li>
        </ul>
        </div>
        </li>`).join("");p.innerHTML+=s}function l(e){return e?u.style.display="block":u.style.display="none"}function r(e){return e?d.style.visibility="visible":d.style.visibility="hidden"}function S(){const e=document.createElement("p"),s="We're sorry, but you've reached the end of search results.";e.classList.add("message"),e.textContent=s,p.parentNode.appendChild(e)}
//# sourceMappingURL=commonHelpers.js.map
