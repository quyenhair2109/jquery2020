$(function() {
    $('.noi-dung-them').slideUp();
    $('.load-content-btn').click(function (e) { 
        e.preventDefault();
        $('.noi-dung-them').slideDown(200);
        TweenMax.staggerFrom($('.noi-dung-them .content'), 0.5, {top: 0, opacity: 0}, 0.1)
    });
});