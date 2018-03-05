# Librerias JQuery para crear sliders de imagenes


Descripción del proyecto:
--------------------------
Muchas veces queremos agregar carruseles de imagenes a nuestra pagina web, sin embargo, crearlos desde 0 toma demasiado tiempo y se deben tener conocimientos de css y javascript. Existen frameworks como bootstrap y materialize, que incluyen sus propios carruseles, pero aún así necesitamos más opciones. Es por ello que hemos creado esta librería con diferentes opciones de carruseles para que puedas elegir, el que mejor se adapta a tu pagina web.


Instrucciones de Uso:
------------------------


Carrusel-Automatico:
--------------------

Para hacer uso de este carrusel solo debes agregar a tu html:

	
	<div id="auto-carusel">
		<!--Aquí puedes agregar todas las imagenes que quieras -->
		<div><img src="link/ubicacionDeTuImagen"></div>
	</div>
	
 Y debes agregar este script:
 
 ```
 <script src="dist/carruselAutomatic-bundle.js">
 ```

Debes agregar un div con id llamado "auto-carusel" luego puedes ingresar todas las imagenes que quieras, solo debes tener en cuenta que cada una de ellas debe estar contenida en un div.


Carrusel con iconos de navegación:
-----------------------------------

Para hacer uso de este carrusel debes agregar a tu html:

	
	<ul class="list-images">
		<!--Aquí irán tus imagenes -->
		<li><img src="link/ubicacionDeTuImagen"></li>
	</ul>
  	<!--Aquí irán los iconos de navegación debes copiar tal cual esta sección, el script hará el resto -->
	<ol class="navegation">
		<li class="left iconsDefaultColor"><span class="fa fa-chevron-left"></span></li>
        <li class="right iconsDefaultColor"><span class="fa fa-chevron-right"></span></li>
    </ol>
    

Este carrusel cuenta con 2 clases CSS para que puedas usar el color que quieras en los iconos de navegación:
	
  
	.iconsDefaultColor{
		color: /*el color que quieras agregar*/
	}
	.iconsNavegationColor{
		color: /*el color que quieras agregar*/
	}
	

 Y debes agregar este script:
 
 ```
 <script src="dist/carruseNavegation-bundle.js">
 ```
 
 
IconsDefaultColor: se refiere al color que tendrán por defecto tus iconos.

IconsNavegationColor: se refiere al color que tendrán los iconos al mostrar una imagen seleccionada.

Ten cuidado de agregar a tu css estas clases en el orden que se indica para que los colores se muestren correctamente.


Carrusel Con Texto
------------------
Para hacer uso de este carrusel solo debes agrgar a tu html:
 ```
 <div class="caruselV3">
 	<div class="carousel">
		<!---aquí puedes agregar todas las imagenes que quieras-->
		<img src="link/ubicación de tu imagen">
		<div class="text">
			<---aquí irá el texto que tú quieras--->
		</div>
	</div>
</div>
 ```
 
 Y debes agregar este script:
 
 ```
 <script src="dist/carruselText-bundle.js">
 ```

Los estilos de este carrusel no pueden ser modificados, pero puedes agregar el texto que quieras dentro del div con clases text.


La ruta de los script puede diferir dependiendo de donde se encuentre la carpeta dist, pero dentro de ella siempre estaran los archivos js necesarios para el funcionamiento de los carruseles, por lo que puedes ajustar la ruta según tus necesidades.




Demo:
--------------------------
[Libreria Jquery](https://nadiaqn.github.io/libreria-carrusel/)



Autores:
--------------------------
Maria Jose Solar [@marasolarp](https://github.com/marasolarp)

Nadia Quezada [@NadiaQN](https://github.com/NadiaQN)


