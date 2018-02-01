$(document).ready(function() {

	
  var pos = 0;
  carouselNum();

    function carouselNum() {
       var carouselText = document.getElementsByClassName("carousel");
       for ( var i = 0; i < carouselText.length; i++) {
        $(carouselText[i]).hide();
       }
       pos++;
       if(pos > carouselText.length) {pos = 1}
       $(carouselText[pos-1]).show();
           $('.carousel').css('position', 'absolute');
           $('.text').css({'background' : 'rgba(0, 8, 20, 0.5)', 'position' : 'absolute', 'width': '100%', 'bottom' : '0', 'text-align' : 'center', 'padding' : '1.3em 0 1.3em 0', 'color' : '#fff', 'font-size' : '1.5em'});
       setTimeout(carouselNum,4000);
   }
});   























