$(document).ready(function() {
	$(window).scroll(function(event) {

         var vitri = $('body').scrollTop(); 
         console.log(vitri);
		 if(vitri >= 400) {
		 	// console.log("Tada ! xu ly giao dien menu di ");
		 	 $('.menu-tren').addClass('bien-hinh');
		 }
		 else 
		 {
		 	$('.menu-tren').removeClass('bien-hinh');

		 }
	});;
});