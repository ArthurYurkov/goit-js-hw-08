import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryItem = document.querySelector('.gallery');

function createGallery(item) {
  return item
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href=${original}>
  <img class="gallery__image" src=${preview} alt=${description} />
</a>`;
    })
    .join('');
}
galleryItem.innerHTML = createGallery(galleryItems);

let gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
