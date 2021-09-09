jQuery(document).ready(function($) {
    // -------------spin-------------------
    var resultWrapper = $('.spin-result-wrapper, .pop-up-window');
    var wheel = $('.wheel-img');

    $('.spin_active').on("click", function(event) {
        $(this).off(event);
        if (wheel.hasClass('rotated')) {
            resultWrapper.css({
                'display': 'block'
            });
        } else {
            wheel.addClass('super-rotation');
            setTimeout(function() {
                resultWrapper.css({
                    'display': 'block'
                });
            }, 8000);
            setTimeout(function() {
                $('.spin-wrapper').slideUp();
                $('.order_block').slideDown();
                var fiveSeconds = new Date().getTime() + 600000;
                $('#clock').countdown(fiveSeconds, {
                        elapse: true
                    })
                    .on('update.countdown', function(event) {
                        var $this = $(this);
                        if (event.elapsed) {
                            $this.html("00 : 00");
                        } else {
                            $this.html(event.strftime('<span>%M</span> : <span>%S</span>'));
                        }
                    });
            }, 9500);
            wheel.addClass('rotated');
        }
    });

    $(document).keydown(function(e) {
        if (e.keyCode === 27) {
            resultWrapper.fadeOut();
        }
    });

    $('.close-popup, .spin-result-wrapper').click(function() {
        resultWrapper.fadeOut();
    });

    // --------------SCROLL-------------------
    $("a").on("touchend, click", function(e) {
        e.preventDefault();
        $('body,html').animate({ scrollTop: $('.scroll').offset().top }, 400);
    });

    $(".search input").keypress(function(e) {
        if (e.which == 13) {
            $(".search input").val('');
            $('body,html').animate({ scrollTop: $('.scroll').offset().top }, 400);
        }
    });
    $(".ac_footer a, .ac_gdpr_fix a").unbind("click");


    $(".like_up").click(function() {
        $(this).off();
        $(this).parent('.action').find('.like').html(function(i, val) { return +val + 1 });
    })

    $(".like_down").click(function() {
        $(this).off();
        $(this).parent('.action').find('.like').html(function(i, val) { return +val - 1 });
    })

});