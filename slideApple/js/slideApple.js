$(function () {
    $(".next").click(function (e) {
        e.preventDefault();

        var behind = $(".active").next();
        if (behind.length == 0) { // xét xem có phải slide cuối cùng ko
            $(".active").addClass("bien-mat-o-ben-trai").one("webkitAnimationEnd", function (e) {
                $(".bien-mat-o-ben-trai").removeClass("bien-mat-o-ben-trai");
            });
            $("._1slide:nth-child(1)").addClass("di-vao-tu-ben-phai").one("webkitAnimationEnd", function (e) {
                // bỏ active trong slide đã chuyển đi
                $(".active").removeClass("active");
                // thêm active trong cái mới chuyển đến
                $(".di-vao-tu-ben-phai").addClass("active").removeClass("di-vao-tu-ben-phai");
            });
        }
        else {
            // thêm class vào đợi chuyển động chạy một lúc thì remove class
            $(".active").addClass("bien-mat-o-ben-trai").one("webkitAnimationEnd", function (e) {
                $(".bien-mat-o-ben-trai").removeClass("bien-mat-o-ben-trai");
            });

            behind.addClass("di-vao-tu-ben-phai").one("webkitAnimationEnd", function (e) {
                // bỏ active trong slide đã chuyển đi
                $(".active").removeClass("active");
                // thêm active trong cái mới chuyển đến
                $(".di-vao-tu-ben-phai").addClass("active").removeClass("di-vao-tu-ben-phai");
            });
        }
    });


    $('.prev').click(function (e) {
        e.preventDefault();
        var front = $('.active').prev()
        $(".active").addClass("bien-mat-o-ben-phai").one("webkitAnimationEnd", function (e) {
            $(".bien-mat-o-ben-phai").removeClass("bien-mat-o-ben-phai");
        })
        front.addClass("di-vao-tu-ben-trai").one("webkitAnimationEnd", function (e) {
            // bỏ active trong slide đã chuyển đi
            $(".active").removeClass("active");
            // thêm active trong cái mới chuyển đến
            $(".di-vao-tu-ben-trai").addClass("active").removeClass("di-vao-tu-ben-trai");
        });
    })
})