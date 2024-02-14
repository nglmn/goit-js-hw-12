'use strict';
import axios from "axios";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { renderContent } from "./js/renderMarkup";
import { iziToastError } from "./js/customIziToast";

const form = document.querySelector('.form'),
    gallery = document.querySelector('.gallery'),
    moreBtn = document.querySelector('.more'),
    spinner = document.querySelector('.spinner'),
    lastPageMessage = document.querySelector('.message');

let searchQuery = null;
let page = 1;
const per_page = 15;
let numberLastPage = null;

form.addEventListener('submit', onFormSubmit);
moreBtn.addEventListener('click', paginationElements)

async function onFormSubmit(e) {
    e.preventDefault();
    searchQuery = e.target.elements.input.value.trim();
    try {
        resetForm();
        const response = await fetch();
        if (response.total != 0 && response.total > per_page) {
            numberLastPage = Math.round(response.totalHits / per_page)
            showSpinner(true);
            renderContent(response);
            showSpinner(false);
            showMoreBtn(true);
        }
        if (response.total != 0 && response.total < per_page) {
            renderContent(response);
            lastPageMessage.style.display = 'block';
        }
        if (response.total === 0) {
            iziToast.show(iziToastError);
        }
    } catch (error) {
        console.log(error.status);
    }
    popupPictureWindow().refresh();
}

async function paginationElements() {
    page++;
    showMoreBtn(false);
    showSpinner(true);
    const response = await fetch();
    renderContent(response);
    if (page < numberLastPage) {
        scrollGallery();
        showSpinner(false);
        showMoreBtn(true);
    } else {
        showMoreBtn(false);
        showSpinner(false);
        lastPageMessage.style.display = 'block'
    }
    popupPictureWindow().refresh();
}

async function fetch() {
    const API_KEY = '41991233-e464ef3fed32efbb52a55d5bb'
    const instance = axios.create({
        baseURL: 'https://pixabay.com'
    });
    const params = {
        page,
        per_page,
        orientation: 'horizontal',
        image_type: 'photo',
    }
    const response = await instance.get(`/api/?key=${API_KEY}&q=${searchQuery}`, { params });
    return response.data;
}
function showMoreBtn(show) {
    show ? moreBtn.style.display = 'block' : moreBtn.style.display = 'none';
}
function showSpinner(show) {
    show ? spinner.style.visibility = 'visible' : spinner.style.visibility = 'hidden';
}
function resetForm() {
    form.reset();
    gallery.innerHTML = '';
    page = 1;
    showSpinner(false);
    showMoreBtn(false);
    lastPageMessage.style.display = 'none';
}
function popupPictureWindow() {
    let lightbox = new SimpleLightbox('.gallery a', {
        captions: true,
        captionType: 'attr',
        captionsData: 'title',
        captionDelay: 250,
        captionPosition: 'bottom',
    });
    lightbox.show();
    return lightbox;
}
popupPictureWindow();
function scrollGallery() {
    const galleryItem = document.querySelector('.gallery-item');
    let height = galleryItem.getBoundingClientRect().height;
    height = Math.round(height);
    const scrollByTimes = 2;
    window.scrollBy(0, height * scrollByTimes);
}