$(document).ready(function() {

	
	$('.img-carousel').css('position', 'absolute');	
	$('.text').css({'background' : 'rgba(0, 8, 20, 0.5)', 'position' : 'relative', 'bottom' : '6em', 'text-align' : 'center', 'padding' : '1.3em', 'color' : '#fff', 'font-size' : '1.5em'});
	
	
	
	
});
var pos = 0;
	carouselNum();

	function carouselNum() {
       var carouselText = document.getElementsByClassName("carousel");
       for ( var i = 0; i < carouselText.length; i++) {
        carouselText[i].style.display = "none";
       }
       pos++;
       if(pos > carouselText.length) {pos = 1}
       carouselText[pos-1].style.display = "block";
       setTimeout(carouselNum,4000);       
	}
























