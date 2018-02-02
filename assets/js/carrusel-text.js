$(document).ready(function() {

	
  var pos = 0;
  carouselNum();

    function carouselNum() {
       let carouselText = $('.carousel');
       for ( var i = 0; i < carouselText.length; i++) {
        $(carouselText[i]).hide();
       }
       pos++;
       if(pos > carouselText.length) {pos = 1}
       $(carouselText[pos-1]).show();
        $('caruselV3').css('width' : '100%', 'position' : 'relative' )
        $('.carouseV3 .carousel .img-carusel').css({'width', '100%'});
        $('.carusel .text').css({'position' : 'absolute', 'width': '100%', 'height' : '100%','top' : '0', 'left' : '0', 'display: flex', 'flex-direction' : 'column', 'justify-content' : 'center', 'align-items' : 'center', 'text-align' : 'center', 'padding' : '5px 40px', 'color' : '#fff', 'z-index' : '1', 'font-size' : '20px', 'margin-top' :'10px'});      
        setTimeout(carouselNum,4000);  
      }
});


/*$('.img-carousel').css({'position' : 'relative', 'text-align' : 'center', 'color' : '#fff'});
          $('.botom-left').css({'position' : 'absolute', 'bottom' : '8px', 'left' : '16px'});


        $('.img').css('position', 'relative');
        
       setTimeout(carouselNum,4000);*/





















