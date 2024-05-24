// $('.smoove').smoove({
//     offset: '30%',
// });


$(function () {
    // 隱藏第二層的選單
    $(".menu-drop-L").hide();
    $(".product").hover(function () {
        // 碰到時往下滑動
        $(">ul", this).slideDown("fast")
        console.log("hello");
    }, function () {
        //離開時往上滑動
        $(">ul", this).slideUp("fast")
    })
})
