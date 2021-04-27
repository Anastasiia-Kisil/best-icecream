$(document).ready(function () {
  var show = true;
  $(window).on('scroll load resize', function () {
    if (!show) return false;
    $('.bg-group-2__quantity').css('opacity', '1');
    $('.bg-group-2__weight').css('opacity', '1');
    $('.bg-group-2__quantity').spincrement({
      thousandSeparator: '',
      duration: 1200,
    });

    show = false;
  });
});
