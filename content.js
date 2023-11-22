const removeElements = () => {
    console.log('ran remove');

    const homeContainer = document.getElementsByTagName(
        'ytd-two-column-browse-results-renderer'
    );

    if (homeContainer[0]) {
        homeContainer[0].remove();
    }

    let items = document.getElementsByTagName(
        'ytd-watch-next-secondary-results-renderer'
    );

    for (let i = 0; i < items.length; i++) {
        items[i].remove();
    }

    const shortsContainer = document.getElementById('shorts-inner-container');
    if (shortsContainer) {
        shortsContainer.remove();
    }
};

removeElements();

setInterval(removeElements, 200);
