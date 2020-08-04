$(function () {
    $('.top-menu ul li:nth-child(1) a').on('click',function (e) { 
        e.preventDefault(); /*không để tự chuyển trang vào link href khi click vào*/
        
        $('body').animate({
            scrollTop:1500},
            500, function(){

        });
    });
});