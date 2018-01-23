'Use strict'
//Carrusel con flechas de navegación abajo de las imagenes
$(document).ready(function(){
  //contador de imagenes
  const imgItems = $(.list-images li).length;
  let imgPos = 1;
  //ciclo for para agregar iconos de navegación
  for(let i = 1; i<= imgItems; i++){
    $('navigation li:eq(0)').after('<li class="circle"><span class="fa fa-circle"></span></li>');
  }

  //Ocultar todas las imagenes
  $('.list-images li').hide();
  //Mostrar la primera imagen por defecto
  $('.list-images li:first').show();
  //Agregar una clase modificable por el usuario para que puedan cambiar el color de los iconos
  //$('.navegation li span:eq(1)').css({'color': '#A901DB'});
  $('navegation li span:eq(1)').removeClass('iconsDefaultColor');
  $('navegation li span:eq(1)').addClass('iconsNavegationColor');

  //Funciones del carrusel
  $('.navegation .circle').click(pagination);
  $('.right span').click(nextSlider);
  $('.left span').click(prevSlider);

  //carrusel automatico
  setInterval(function(){
    nextSlider()
  }, 4000);


  //Definiendo funciones

  function pagination(){
    let paginationPos = $(this).index();
    imgPos = paginationPos;
    $('.list-images li').hide();
    $('.list-images li:nth-child('+ paginationPos +')').fadeIn();

    $('.navegation li .fa-circle').addClass('')
  }
});
