const removeElements = () => {
    const homeContainer = document.getElementsByTagName(
        'ytd-two-column-browse-results-renderer'
    )[0];

    if (homeContainer) {
        homeContainer.remove();
    }

    const items = document.getElementsByTagName(
        'ytd-watch-next-secondary-results-renderer'
    );

    for (let i = 0; i < items.length; i++) {
        items[i].remove();
    }

    const shortsContainer = document.getElementById('shorts-container');
    if (shortsContainer) {
        shortsContainer.remove();
    }

    const videos = document.getElementsByClassName('ytd-shorts');
    for (let i = 0; i < videos.length; i++) {
        videos[i].remove();
    }
};

removeElements();

setInterval(removeElements, 200);
