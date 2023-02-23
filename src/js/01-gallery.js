// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

// Описаний в документації
import SimpleLightbox from 'simplelightbox';

// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector(`.gallery`);

const galleryMarkup = createGalleryCardsMarkup(galleryItems);

gallery.insertAdjacentHTML(`beforeend`, galleryMarkup);

function createGalleryCardsMarkup(galleryItems) {
  return galleryItems
    .map(galleryItem => {
      return `<a class="gallery__item" href="${galleryItem.original}">
  <img
    class="gallery__image"
    src="${galleryItem.preview}"
    alt="${galleryItem.description}"
  />
</a>`;
    })
    .join(``);
}

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: `alt`,
  captionDelay: 250,
});


console.log(galleryItems);
