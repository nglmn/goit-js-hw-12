import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

export function lightboxGallery() {
    let lightbox = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionsPosition: 'bottom',
        captionsDelay: 250,
    });
    lightbox.show();
    lightbox.refresh();
}