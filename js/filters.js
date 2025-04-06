import { createRenderPicture, PictureSelectors } from './miniatures.js';
import { debounce } from './util.js';

const RANDOM_PHOTOS_NUMBER = 10;
const RERENDER_DELAY = 500;
let photosData = [];

const FILTERS = {
  default: 'filter-default',
  random: 'filter-random',
  discussed: 'filter-discussed',
};

const compareComments = (a, b) => b.comments.length - a.comments.length;

const getFilteredPhotos = (filterType) => {
  switch (filterType) {
    case FILTERS.random:
      return [...photosData]
        .sort(() => 0.5 - Math.random())
        .slice(0, RANDOM_PHOTOS_NUMBER);
    case FILTERS.discussed:
      return [...photosData].sort(compareComments);
    default:
      return [...photosData];
  }
};

const container = document.querySelector(PictureSelectors.CONTAINER);
const uploadForm = container.querySelector(PictureSelectors.UPLOAD_FORM);
const pictures = container.querySelectorAll(PictureSelectors.ITEM);

const clearOnlyPhotos = () => {
  pictures.forEach((pic) => pic.remove());

  if (uploadForm && !container.contains(uploadForm)) {
    container.prepend(uploadForm);
  }
};

const applyFilter = (filterType) => {
  clearOnlyPhotos();
  createRenderPicture(getFilteredPhotos(filterType));
};

const debouncedApplyFilter = debounce(applyFilter, RERENDER_DELAY);

const onFilterClick = (evt) => {
  const button = evt.target.closest('.img-filters__button');
  if (!button) {
    return;
  }

  const activeButton = document.querySelector('.img-filters__button--active');
  if (activeButton === button) {
    return;
  }

  activeButton.classList.remove('img-filters__button--active');
  button.classList.add('img-filters__button--active');

  debouncedApplyFilter(button.id);
};

export const initFilters = (photos) => {
  photosData = photos;
  document.querySelector('.img-filters')
    .classList.remove('img-filters--inactive');
  document.querySelector('.img-filters')
    .addEventListener('click', onFilterClick);
};
