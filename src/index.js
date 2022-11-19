import axios from 'axios';
import Notiflix from 'notiflix';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { createMarkup } from './createmarkup';

const refs = {
  input: document.querySelector('input'),
  form: document.querySelector('.search-form'),
  gallery: document.querySelector('.gallery'),
  };

refs.form.addEventListener('submit', onFormSubmit);
refs.gallery.addEventListener('click', event => event.preventDefault());

let page = 1;

function onFormSubmit(event) {
  event.preventDefault();
  
  const value = refs.input.value;
  refs.gallery.innerHTML = '';
  getData(value, page).then(data => {
    page = 1;
    if (data.data.hits.length === 0) {
      Notiflix.Notify.warning(
        'Sorry, there are no images matching your search query. Please try again.'
      );
      return;
    }
    Notiflix.Notify.success(
      `Hooray! We found ${data.data.totalHits} images.`
    );
    createMarkup(data.data.hits, refs.gallery);
      lightbox.refresh();
      observer.observe(refs.gallery.lastElementChild);
  });
   
}

let lightbox = new SimpleLightbox('.gallery a');

async function getData(data, page) {
  const picData = await axios.get(
    `https://pixabay.com/api/?key=31291971-99eb3d6f3769cbe0d6a7790a0&q=${data}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=40`
  );
  return picData;
}

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      page += 1;
    const value = refs.input.value;
      getData(value, page).then(data => {
       
        if (data.data.hits.length === 0){
          Notiflix.Notify.warning("We're sorry, but you've reached the end of search results."
          );
          return;
        }
       createMarkup(data.data.hits, refs.gallery);
       lightbox.refresh();
       observer.observe(refs.gallery.lastElementChild);
      });
    }
  });
}, {threshold: 1});
