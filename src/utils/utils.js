const utils = {
  scrollToId: id => {
    const elementToScroll = document.getElementById(id);
    elementToScroll.scrollIntoView({ behavior: "smooth" });
  },
  goToId: id => {
    const elementToScroll = document.getElementById(id);
    elementToScroll.scrollIntoView();
  },
  shuffle: a => {
    let j, x, i;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
    return a;
  }
};
export default utils;
