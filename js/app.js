(function($) {
  $(document).ready(function() {

    // Randomize slider images in DOM to obviate patching
    // foundation library.
    var ul = $('ul[data-orbit]')[0];
    if (ul) for (var i = ul.children.length; i >= 0; i--) {
        ul.appendChild(ul.children[Math.random() * i | 0]);
    }

    $('.milestone strong').appear(function() {
      $(this).countTo(100);
    });

    $(".bars").each(function() {
      $('> li > .highlighted', $(this)).each(function() {
        $(this).appear(function() {
          var percent = $(this).attr("data-percent");
          // $bar.html('<p class="highlighted"><span class="tip">'+percent+'%</span></p>');
          // http://stackoverflow.com/questions/3363035/jquery-animate-forces-style-overflowhidden
          $(this).animate({
            'width': percent + '%'
          }, 1700, function() { $(this).css('overflow', 'visible'); });
        });
      });
    });

    $(".members").each(function() {

      var members = $(this);

      $(this).find('.member').each(function() {
        $(this).click(function() {
          $(members).find('.member').removeClass('active');
          $(this).addClass('active');
          var target = $(this).attr('data-target');
          // console.log($(members).find('.member-intro'));
          $(members).find('.member-intro').removeClass('active');
          $(target).addClass('active');
        });
      });

    });

    $('.fadeinleft, .fadeinright').appear(function() {
      $(this).addClass('appear');
    });

    $('ul#filter li a').click(function() {
      $('ul#filter li').removeClass('current');
      $(this).closest('li').addClass('current');

      var cat = $(this).attr('data-cat');

      var gallery = $('ul#filter').closest('.gallery-wrapper').find('ul.gallery');

      if (cat === 'all') {
        $('li', gallery).removeClass('hidden');
      } else {
        $('li', gallery).each(function() {
          if ($(this).hasClass(cat)) {
            $(this).removeClass('hidden');
          } else {
            $(this).addClass('hidden');
          }
        });
      }

      return false;
    });

    // Show warning if not on production
    if (window.location.hostname !== "rightsstatements.org") {
      $('body').children('div').first().prepend(
        $('<div data-alert class="alert-box warning row centered-text">You are seeing a preview of this page. To visit the currently published version, click <a href="http://rightsstatements.org' + location.pathname +'">here</a>.<a href="#" class="close">&times;</a></div>')
      );
    }

    // FAQ section
    $('.faq li p:not(:first-child)').hide();
    $('.faq li p:first-child').bind('click', function() {
      $('.faq li p:not(:first-child)').hide();
      $(this).nextAll().show();
    });

    // Foundation JavaScript
    // Documentation can be found at: http://foundation.zurb.com/docs
    $(document).foundation();

  });
})(jQuery);
