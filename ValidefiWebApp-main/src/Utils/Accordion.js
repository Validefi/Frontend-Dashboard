$(document).ready(function () {
  'use strict';
  $('#sidebar-toggle').on('click', function () {
    $('body').toggleClass('sidebar-hidden');
  }),
    feather.replace(),
    (function () {
      if (!$('.page-sidebar').length) return;
      var e = $('.accordion-menu li:not(.open) ul'),
        o = $('.accordion-menu li.active-page > a');
      e.hide();
      const n = document.querySelector('.page-sidebar'),
        t = new PerfectScrollbar(n);
      $('.accordion-menu li a').on('click', function (e) {
        var o = $(this).next('ul'),
          n = $(this).parent('li'),
          a = $('.accordion-menu > li.open');
        if (o.length)
          return (
            n.hasClass('open')
              ? (o.slideUp(200), n.removeClass('open'), t.update())
              : (a.length &&
                  ($('.accordion-menu > li.open > ul').slideUp(200),
                  a.removeClass('open'),
                  t.update()),
                o.slideDown(200),
                n.addClass('open'),
                t.update()),
            !1
          );
      }),
        $('.active-page > ul').length && o.click();
    })(),
    (function () {
      $('[data-bs-toggle="popover"]').popover(),
        $('[data-bs-toggle="tooltip"]').tooltip();
      var e = document.querySelectorAll('.needs-validation');
      Array.prototype.slice.call(e).forEach(function (e) {
        e.addEventListener(
          'submit',
          function (o) {
            e.checkValidity() || (o.preventDefault(), o.stopPropagation()),
              e.classList.add('was-validated');
          },
          !1
        );
      });
    })();
}),
  $(window).on('load', function () {
    setTimeout(function () {
      $('body').addClass('no-loader');
    }, 1e3);
  });
