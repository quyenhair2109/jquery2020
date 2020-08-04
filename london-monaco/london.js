$(function () {
    $('.top-menu ul li:nth-child(1) a').on('click',function (e) { 
        e.preventDefault(); /*không để tự chuyển trang vào link href khi click vào*/
        
        $('body').animate({scrollTop:$('.chapter-1').offset().top},1400, 'easeOutCubic');
    });
    
    $('.top-menu ul li:nth-child(2) a').on('click',function (e) { 
        e.preventDefault(); /*không để tự chuyển trang vào link href khi click vào*/
        
        $('body').animate({scrollTop:$('.chapter-2').offset().top},1400, 'easeOutCubic');
    });

    $('.top-menu ul li:nth-child(3) a').on('click',function (e) { 
        e.preventDefault(); /*không để tự chuyển trang vào link href khi click vào*/
        
        $('body').animate({scrollTop:$('.chapter-3').offset().top},1400, 'easeOutCubic');
    });

    $('.top-menu ul li:nth-child(4) a').on('click',function (e) { 
        e.preventDefault(); /*không để tự chuyển trang vào link href khi click vào*/
        
        $('body').animate({scrollTop:$('.chapter-4').offset().top},1400, 'easeOutCubic');
    });

    // viết cho nút comeback
    $('.comeback').on('click',function (e) { 
        e.preventDefault(); /*không để tự chuyển trang vào link href khi click vào*/
        
        $('body').animate({scrollTop:0},1400, 'easeOutCubic');
    });

});