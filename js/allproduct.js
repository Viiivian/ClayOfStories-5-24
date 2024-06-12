$(function () {
    /* 置頂按鈕 */
    $('.gotop').click(function () {
        $('html,body').animate({ scrollTop: 0 }, 1500);
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.gotop').stop().fadeIn();
        }
        else { $('.gotop').stop().fadeOut(); }
    });


    // if ($(window).width() > 600) {
    //     $('#gotop').remove();
    // }
});