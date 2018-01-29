$(document).ready(function() {
	
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
       setTimeout(carouselNum,2000);       
}

});








 