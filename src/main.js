import axios from "axios";
import iziToast from "izitoast";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


const form = document.querySelector('.form'),
    gallery = document.querySelector('.gallery'),
    moreBtn = document.querySelector('.more'),
    spinner = document.querySelector('.spinner');

let request = null;
let page = 1;
const per_page = 50;
let numberLastPage = null;

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    request = e.target.elements.input.value.trim();
    try {
        form.reset();
        gallery.innerHTML = '';
        page = 1;
        showSpinner(true);
        const response = await fetch();
        renderContent(response);
        showSpinner(false);
        showMoreBtn(true);
    } catch (error) {
        console.log(error);
    }
    let lightbox = new SimpleLightbox('.gallery a', {
        captions: true,
        captionType: 'attr',
        captionsData: 'title',
        captionDelay: 250,
        captionPosition: 'bottom',
    });
    lightbox.show();
})

moreBtn.addEventListener('click', async () => {
    page++;
    showMoreBtn(false);
    showSpinner(true);
    const response = await fetch();
    if (page < numberLastPage) {
        renderContent(response);
        showSpinner(false);
        showMoreBtn(true)
    } else {
        showMoreBtn(false);
        showSpinner(false);
        reportTheEndSearch();
    }
})

async function fetch() {
    const instance = axios.create({
        baseURL: 'https://pixabay.com'
    });
    const params = {
        page,
        per_page,
        orientation: 'horizontal',
        image_type: 'photo',
        safesearch: true,
    }
    const response = await instance.get(`/api/?key=41991233-e464ef3fed32efbb52a55d5bb&q=${request}`, { params });
    numberLastPage = Math.ceil(response.data.totalHits / per_page);
    return response.data;
}

function renderContent({ hits }) {
    const markup = hits.map(({ largeImageURL, webformatURL, likes, views, comments, downloads }) => {
        return `
        <li class="gallery-item">
        <a href="${largeImageURL}">
        <img
        src="${webformatURL}"
        alt=""
        class="gallery-item-img"
        width="350"
        height="200"/>
        </a>
        <div class="info-wrapper">
        <ul class="info-list">
        <li class="info-item">
        <p class="info-name">Likes</p>
        <p class="info-value">${likes}</p>
        </li>
        <li class="info-item">
        <p class="info-name">Viewes</p>
        <p class="info-value">${views}</p>
        </li>
        <li class="info-item">
        <p class="info-name">Comments</p>
        <p class="info-value">${comments}</p>
        </li>
        <li class="info-item">
        <p class="info-name">Downloads</p>
        <p class="info-value">${downloads}</p>
        </li>
        </ul>
        </div>
        </li>`
    }).join('');
    gallery.innerHTML += markup;
}

function showMoreBtn(show) {
    return show ? moreBtn.style.display = 'block' : moreBtn.style.display = 'none';
}
function showSpinner(show) {
    return show ? spinner.style.visibility = 'visible' : spinner.style.visibility = 'hidden';
}
function reportTheEndSearch() {
    const noMorePagesMessage = document.createElement('p');
    const noMoreText = "We're sorry, but you've reached the end of search results.";
    noMorePagesMessage.classList.add('message');
    noMorePagesMessage.textContent = noMoreText;
    gallery.parentNode.appendChild(noMorePagesMessage)
}
