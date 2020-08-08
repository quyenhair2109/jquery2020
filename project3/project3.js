$(function () {
    $('.block-title').click(function (e) {
        e.preventDefault();
        $(this).toggleClass('xanh');

        // click vào tiêu đề khối thì hiện nội dung
        $(this).next().slideToggle(500, 'easeInOutExpo');
        
        // khi ấn vào tiêu đề khối nào thì cuộn đến vị trí khối đó
        // sử dụng thư viện gia tốc easing cho animate
        $('body').animate({scrollTop: $(this).offset().top}, 900, 'easeInOutExpo')
    });

    $('.block-content').slideUp();
});