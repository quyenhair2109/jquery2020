$(function(){
    $('.content').addClass('noidunghienra');
    $('.mo-mo').addClass('momodira');
    
    // hàm tự động chạy sau thời gian 3s
    var thongbao = setInterval(function(){
        $('.content').removeClass('noidunghienra');
        $('.mo-mo').removeClass('momodira');
        // set hàm chỉ chạy 1 lần
        clearInterval(thongbao);
    }, 3000) 
})