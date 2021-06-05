const removeElements = () => {
    let items = document.getElementsByClassName("ytd-rich-grid-renderer");

    console.log("test")

    for (let i = 0; i < items.length; i++) {
        items[i].remove();
    }

    items = document.getElementsByTagName("ytd-watch-next-secondary-results-renderer");

    for (let i = 0; i < items.length; i++) {
        items[i].remove();
    }
}

removeElements();

// TODO: Figurue out how to do this less stupidly. Since the page does everything via ajax have to find a way of running removeElements after the page finishes loading content
setInterval(removeElements, 200);

