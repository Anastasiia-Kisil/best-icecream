import Masonry from 'masonry-layout';
window.onload = () => {
  const grid = document.querySelector('.grid');
  const masonry = new Masonry(grid, {
    itemSelector: '.grid-item',
    gutter: 3,
    // originLeft: false,
    // originTop: false,
    // horizontalOrder: true,
    fitWidth: true,
  });
};