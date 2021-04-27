// скролл к якорю jquery
var $page = $('html, body');
$('a[href*="#"]').on("click", function () {

  $menuVisibility = $('.mobile-menu'), // ищет класс .mobile-menu
    $bodyOverflow = $('body'); // идёт к body

  $page.animate({
    scrollTop: $($.attr(this, 'href')).offset().top
  }, 550);

  $menuVisibility.addClass('menu--hidden'), // добавляет класс menu--hidden
    $bodyOverflow.removeClass('overflow--blocked');  // удаляет класс menu--hidden

  return false;
});

// скрипт прокрутки страницы вверх
function up() {
  var top = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
  if (top > 0) {
    window.scrollBy(0, ((top + 400) / -40));
    t = setTimeout('up()', 5);
  } else clearTimeout(t);
  return false;
}