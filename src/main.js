import axios from "axios";
import iziToast from "izitoast";
import { iziErrorMessage } from "./js/customIziToast";
import { lightboxGallery } from "./js/lightBoxGallery";
import { renderContent } from "./js/renderContent";

const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');
const loadMoreBtn = document.querySelector('#more');

const URL = 'https://pixabay.com'
const KEY_API = '41991233-e464ef3fed32efbb52a55d5bb';
const FULL_ADDRESS = `${URL}/api/?key=${KEY_API}`;

let page = 1;
let per_page = 5;
let userRequest;

form.addEventListener('submit', onLoadContent);

async function onLoadContent(e) {
    e.preventDefault();
    userRequest = e.target.elements.input.value;
    try {
        await fetchImages(userRequest)
            .then(({ hits }) => {
                renderContent(hits)
                page += 1;
                if (page >= 1) {
                    loadMoreBtn.style.display = 'block';
                }
            })
            .then(data => {
                if (!userRequest) {
                    gallery.innerHTML = '';
                    renderContent(data.hits)
                }
            })

    } catch (error) {
        console.log(error.message)
    }
}

async function fetchImages(request) {
    const params = {
        page,
        per_page,
        orientation: 'horizontal',
        image_type: 'photo',
        safesearch: true,
    }
    const response = await axios.get(`${FULL_ADDRESS}&q=${request}`, { params })
    return response.data
}







