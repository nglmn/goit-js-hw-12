import{a as u}from"./assets/vendor-288befee.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const p=document.querySelector(".gallery");function c(n){const t=n.map(({webformatURL:r,downloads:i,comments:e,views:o,largeImageURL:s,likes:f})=>`<li class="gallery-item">
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
                                    <p class="info-value">${f}</p>
                                </li>
                                <li class="info-item">
                                    <p class="info-name">Viewes</p>
                                    <p class="info-value">${o}</p>
                                </li>
                                <li class="info-item">
                                    <p class="info-name">Comments</p>
                                    <p class="info-value">${e}</p>
                                </li>
                                <li class="info-item">
                                    <p class="info-name">Downloads</p>
                                    <p class="info-value">${i}</p>
                                </li>
                            </ul>
                        </div>
                    </li>`).join("");p.insertAdjacentHTML("beforeend",t)}const m=document.querySelector(".form"),d=document.querySelector(".gallery"),y=document.querySelector("#more"),g="https://pixabay.com",h="41991233-e464ef3fed32efbb52a55d5bb",L=`${g}/api/?key=${h}`;let a=1,b=5,l;m.addEventListener("submit",v);async function v(n){n.preventDefault(),l=n.target.elements.input.value;try{await $(l).then(({hits:t})=>{c(t),a+=1,a>=1&&(y.style.display="block")}).then(t=>{l||(d.innerHTML="",c(t.hits))})}catch(t){console.log(t.message)}}async function $(n){const t={page:a,per_page:b,orientation:"horizontal",image_type:"photo",safesearch:!0};return(await u.get(`${L}&q=${n}`,{params:t})).data}
//# sourceMappingURL=commonHelpers.js.map
