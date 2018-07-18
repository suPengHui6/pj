jQuery(document).ready(function($) {
    var animE = $('[data-anim]');

    var runAnim = function() {
        var win = $(window);
        animE.each(function() {
            var t = $(this).offset().top + 100;
            var H = win.scrollTop() + win.height();

            var _anim = $(this).attr('data-anim');
            if (H > t) $(this).removeClass('hidden').addClass('animated ' + _anim);
        });
    }

    runAnim();
    $(window).scroll(function() {
        runAnim();
    });
    $(window).resize(function() {
        runAnim();
    });

});