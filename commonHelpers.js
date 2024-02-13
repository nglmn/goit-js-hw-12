import{i as L,a as S,S as E}from"./assets/vendor-b52d9f5e.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function r(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerpolicy&&(n.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?n.credentials="include":o.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(o){if(o.ep)return;o.ep=!0;const n=r(o);fetch(o.href,n)}})();const M=document.querySelector(".gallery");function p({hits:e}){const t=e.map(({largeImageURL:r,webformatURL:s,likes:o,views:n,comments:i,downloads:w})=>`
        <li class="gallery-item">
        <a href="${r}">
        <img
        src="${s}"
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
        <p class="info-value">${n}</p>
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
        </li>`).join("");M.innerHTML+=t}const $="Sorry, there are no images matching<br> your search query. Please try again!",q={title:"Error",message:$,messageSize:"16px",position:"topRight",theme:"dark",backgroundColor:"#EF4040",color:"#ffffff"},m=document.querySelector(".form"),d=document.querySelector(".gallery"),u=document.querySelector(".more"),f=document.querySelector(".spinner");let y=null,c=1;const g=15;let h=null;m.addEventListener("submit",P);u.addEventListener("click",T);async function P(e){e.preventDefault(),y=e.target.elements.input.value.trim();try{k();const t=await b();t.total!=0?(h=Math.round(t.totalHits/g),l(!0),p(t),l(!1),a(!0)):L.error(q)}catch(t){console.log(t.status)}v()}async function T(){c++,a(!1),l(!0);const e=await b();p(e),c<h?(C(),l(!1),a(!0)):(a(!1),l(!1),x()),v()}async function b(){const e="41991233-e464ef3fed32efbb52a55d5bb",t=S.create({baseURL:"https://pixabay.com"}),r={page:c,per_page:g,orientation:"horizontal",image_type:"photo"};return(await t.get(`/api/?key=${e}&q=${y}`,{params:r})).data}function a(e){e?u.style.display="block":u.style.display="none"}function l(e){e?f.style.visibility="visible":f.style.visibility="hidden"}function k(){m.reset(),d.innerHTML="",c=1}function x(){const e=document.createElement("p"),t="We're sorry, but you've reached the end of search results.";e.classList.add("message"),e.textContent=t,d.parentNode.appendChild(e)}function v(){let e=new E(".gallery a",{captions:!0,captionType:"attr",captionsData:"title",captionDelay:250,captionPosition:"bottom"});e.show(),e.refresh()}function C(){let t=document.querySelector(".gallery-item").getBoundingClientRect().height;t=Math.round(t);const r=2;window.scrollBy(0,t*r)}
//# sourceMappingURL=commonHelpers.js.map
