$(function () {
    // 隱藏第二層的選單
    $(".menu-drop-L").hide();
    $(".product").hover(function () {
        // 碰到時往下滑動
        $(">ul", this).slideDown("fast")
        console.log("hello");
    }, function () {
        //離開時往上滑動
        $(">ul", this).stop().slideUp("fast")
    })
        /* 漢堡按鈕 */
        $('.hamburger').click(function () {
            /* 交換漢堡按鈕 跟 取消按鈕 */
            $(this).toggleClass('is-active');
            $('.navigation').toggleClass('show');
        });
})

