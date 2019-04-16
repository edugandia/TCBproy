const utils = {
    scrollToId: id => {
        const elementToScroll = document.getElementById(id);
        elementToScroll.scrollIntoView({ behavior: "smooth" });
    }
    ,
    goToId: id => {
        const elementToScroll = document.getElementById(id);
        elementToScroll.scrollIntoView();
    }
}
export default utils;
