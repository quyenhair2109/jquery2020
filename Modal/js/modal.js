$(function(){
    $('.nut').click(function (e) { 
        e.preventDefault();
        $('.content').addClass('noidunghienra');
        $('.mo-mo').addClass('momodira');
    });

    $('.nut-dong, .mo-mo').click(function(){
        $('.content').removeClass('noidunghienra');
        $('.mo-mo').removeClass('momodira');
    })
})