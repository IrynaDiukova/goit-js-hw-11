// export function createMarkUp(data, container) {
//   const markUp = data
//     .map(
//       ({
//         webformatURL,
//         largeImageURL,
//         tags,
//         likes,
//         views,
//         comments,
//         downloads,
//       }) => `<div class="photo-card">
//   <a href = ${largeImageURL}>
//   <img src=${webformatURL} alt=${tags} loading="lazy" />
//   </a>
//   <div class="info">
//     <p class="info-item">
//       <b>Likes</b>
//       ${likes}
//     </p>
//     <p class="info-item">
//       <b>Views</b>
//       ${views}
//     </p>
//     <p class="info-item">
//       <b>Comments</b>
//       ${comments}
//     </p>
//     <p class="info-item">
//       <b>Downloads</b>
//       ${downloads}
//     </p>
//   </div>
  
// </div>`
//     )
//     .join('');
//   container.insertAdjacentHTML('beforeend', markUp);
// }

export function createMarkup(data, container) {
  const markup = data
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) =>
        `<div class="photo-card">
  <a href = ${largeImageURL}>
  <img src=${webformatURL} alt=${tags} loading="lazy" />
  </a>
  <div class="info">
    <p class="info-item">
      ${likes}<b>Likes</b>
      </p>
    <p class="info-item">
      ${views}<b>Views</b>
      </p>
    <p class="info-item">
      ${comments}<b>Comments</b>
      </p>
    <p class="info-item">
      ${downloads}<b>Downloads</b>
      </p>
  </div>
  
</div>`
    )
    .join('');
  container.insertAdjacentHTML('beforeend', markup);
}