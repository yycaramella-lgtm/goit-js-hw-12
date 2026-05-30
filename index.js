import{a as w,S as v,i as a}from"./assets/vendor-DcHCnVjq.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))d(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&d(c)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function d(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();const S="https://pixabay.com/api/",P="33134481-5dd34c0597b8956a5c7f23b76";async function f(o,e=1){return(await w.get(S,{params:{key:P,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:15}})).data}const m=document.querySelector(".gallery"),y=document.querySelector(".loader"),g=document.querySelector(".load-more"),M=new v(".gallery a",{captionsData:"alt",captionDelay:250});function p(o){const e=o.map(r=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${r.largeImageURL}">
            <img
              class="gallery-image"
              src="${r.webformatURL}"
              alt="${r.tags}"
            />
          </a>

          <div class="gallery-info">
            <p class="gallery-info-item">
              <b>Likes</b>
              ${r.likes}
            </p>

            <p class="gallery-info-item">
              <b>Views</b>
              ${r.views}
            </p>

            <p class="gallery-info-item">
              <b>Comments</b>
              ${r.comments}
            </p>

            <p class="gallery-info-item">
              <b>Downloads</b>
              ${r.downloads}
            </p>
          </div>
        </li>
      `).join("");m.insertAdjacentHTML("beforeend",e),M.refresh()}function q(){m.innerHTML=""}function h(){y.classList.add("is-visible")}function b(){y.classList.remove("is-visible")}function L(){g.classList.add("is-visible")}function l(){g.classList.remove("is-visible")}const R=document.querySelector(".form"),B=document.querySelector(".load-more");let n="",i=1,u=0;R.addEventListener("submit",$);B.addEventListener("click",O);async function $(o){if(o.preventDefault(),n=o.target.elements.searchText.value.trim(),!!n){i=1,q(),l(),h();try{const e=await f(n,i);if(u=e.totalHits,e.hits.length===0){a.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});return}p(e.hits);const r=Math.ceil(u/15);i<r?L():(l(),a.info({position:"topRight",message:"We're sorry, but you've reached the end of search results."}))}catch{a.error({position:"topRight",message:"Something went wrong. Please try again!"})}finally{b()}}}async function O(){i+=1,l(),h();try{const o=await f(n,i);p(o.hits);const e=Math.ceil(u/15);i>=e?(l(),a.info({position:"topRight",message:"We're sorry, but you've reached the end of search results."})):L(),x()}catch{a.error({position:"topRight",message:"Something went wrong. Please try again!"})}finally{b()}}function x(){const o=document.querySelector(".gallery-item");if(!o)return;const e=o.getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
