$(document).ready(function() {

	
  var pos = 0;//declaro una variable para el indice de la carrusel
  carouselText3();
    //función
    function carouselText3() {
       let carouselText = $('.carousel');
       for ( var i = 0; i < carouselText.length; i++) {
        $(carouselText[i]).hide();
       }
       pos++;
       if(pos > carouselText.length) {pos = 1}
       $(carouselText[pos-1]).show();
        //estilos del carusel
        $('.caruselV3').css({'width' : '100%', 'position' : 'relative' });
        $('.carouselV3, .carousel, .img-carousel').css({'width' : '100%'});
        $('.carusel, .text').css({'position' : 'absolute', 'width': '100%', 'height' : '100%', 'top' : '0', 'left' : '0', 'display' : 'flex', 'flex-direction' : 'column', 'justify-content' : 'center', 'align-items' : 'center', 'text-align' : 'center', 'padding' : '5px 40px', 'color' : '#fff', 'z-index' : '1', 'font-size' : '20px', 'margin-top' :'10px'});      
        setTimeout(carouselText3,3000);  
      }
});






















