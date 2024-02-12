'use strict';
import axios from "axios";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { renderContent } from "./js/renderMarkup";

const form = document.querySelector('.form'),
    gallery = document.querySelector('.gallery'),
    moreBtn = document.querySelector('.more'),
    spinner = document.querySelector('.spinner');

let request = null;
let page = 1;
const per_page = 15;
let numberLastPage = null;

form.addEventListener('submit', onFormSubmit);
moreBtn.addEventListener('click', paginationElements)

async function onFormSubmit(e) {
    e.preventDefault();
    request = e.target.elements.input.value.trim();
    try {
        resetForm();
        const response = await fetch();
        showSpinner(true);
        renderContent(response);
        showSpinner(false);
        showMoreBtn(true);
    } catch (error) {
        iziToast.error({
            title: 'Error',
            message: error.message
        })
    }
    popupPictureWindow();
}

async function paginationElements() {
    page++;
    showMoreBtn(false);
    showSpinner(true);
    const response = await fetch();
    if (page !== numberLastPage) {
        renderContent(response);
        scrollGallery();
        showSpinner(false);
        showMoreBtn(true);
    } else {
        showMoreBtn(false);
        showSpinner(false);
        reportTheEndSearch();
    }
    popupPictureWindow();
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
    const response = await instance.get(`/api/?key=${API_KEY}&q=${request}`, { params });
    numberLastPage = Math.floor(response.data.totalHits / per_page);
    return response.data;
}
function showMoreBtn(show) {
    return show ? moreBtn.style.display = 'block' : moreBtn.style.display = 'none';
}
function showSpinner(show) {
    return show ? spinner.style.visibility = 'visible' : spinner.style.visibility = 'hidden';
}
function resetForm() {
    form.reset();
    gallery.innerHTML = '';
    page = 1;
}
function reportTheEndSearch() {
    const noMorePagesMessage = document.createElement('p');
    const noMoreText = "We're sorry, but you've reached the end of search results.";
    noMorePagesMessage.classList.add('message');
    noMorePagesMessage.textContent = noMoreText;
    gallery.parentNode.appendChild(noMorePagesMessage)
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
}
function scrollGallery() {
    const galleryItem = document.querySelector('.gallery-item');
    let height = galleryItem.getBoundingClientRect().height;
    height = Math.round(height);
    const scrollByTimes = 2;
    window.scrollBy(0, height * scrollByTimes);
}