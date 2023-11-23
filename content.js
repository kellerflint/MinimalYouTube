const removeElements = () => {
    // Remove home page recommendations
    const homeContainer = document.getElementsByTagName(
        'ytd-two-column-browse-results-renderer'
    )[0];

    if (homeContainer) {
        homeContainer.remove();
    }

    // Remove sidebar recommendations
    const sidebarVideos = document.getElementsByTagName(
        'ytd-watch-next-secondary-results-renderer'
    );

    for (let i = 0; i < sidebarVideos.length; i++) {
        sidebarVideos[i].remove();
    }

    // Remove shorts
    const shortsContainer = document.getElementById('shorts-container');
    if (shortsContainer) {
        shortsContainer.remove();
    }

    const shortVideos = document.getElementsByClassName('ytd-shorts');
    for (let i = 0; i < shortVideos.length; i++) {
        shortVideos[i].remove();
    }
};

removeElements();

setInterval(removeElements, 200);
