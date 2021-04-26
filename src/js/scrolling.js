// скролл к якорю jquery
var $page = $('html, body');
$('a[href*="#"]').click(function() {
$page.animate({
scrollTop: $($.attr(this, 'href')).offset().top
}, 550);
return false;
});