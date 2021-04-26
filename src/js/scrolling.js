// скролл к якорю jquery
var $page = $('html, body');
$('a[href*="#"]').click(function () {
  $page.animate(
    {
      scrollTop: $($.attr(this, 'href')).offset().top,
    },
    550,
  );
  return false;
});

// скрипт прокрутки страницы вверх
function up() {
  var top = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
  if (top > 0) {
    window.scrollBy(0, (top + 400) / -40);
    t = setTimeout('up()', 5);
  } else clearTimeout(t);
  return false;
}
