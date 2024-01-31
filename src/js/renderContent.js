const gallery = document.querySelector('.gallery');

export function renderContent(data) {
    const markup = data
        .map(({ webformatURL, downloads, comments, views, largeImageURL, likes }) => {
            return `<li class="gallery-item">
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
        })
        .join('')
    gallery.insertAdjacentHTML("beforeend", markup);
}


