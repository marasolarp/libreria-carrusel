# Librerias JQuery para crear sliders de imagenes


Descripción del proyecto:
--------------------------
Muchas veces queremos agregar carruseles de imagenes a nuestra pagina web, sin embargo, crearlos desde 0 toma demasiado tiempo y se deben tener conocimientos de css y javascript. Existen frameworks como bootstrap y materialize, que incluyen sus propios carruseles, pero aún así necesitamos más opciones. Es por ello que hemos creado esta librería con diferentes opciones de carruseles para que puedas elegir, el que mejor se adapta a tu pagina web.

Instalación:
---------------


Instrucciones de Uso:
------------------------
 *Carrusel-Automatico:

Para hacer uso de este carrusel solo debes agregar a tu html:

	```
	<div id="auto-carusel">
		<!--Aquí puedes agregar todas las imagenes que quieras -->
		<div><img src="link/ubicacionDeTuImagen"></div>
	</div>
	```

Debes agregar un div con id llamado "auto-carusel" luego puedes ingresar todas las imagenes que quieras, solo debes tener en cuenta que cada una de ellas debe estar contenida en un div.

##Carrusel con iconos de navegación:

Para hacer uso de este carrusel debes agregar a tu html:

	```
	<ul class="list-images">
		<!--Aquí irán tus imagenes -->
		<li><img src="link/ubicacionDeTuImagen"></li>
	</ul>
  <!--Aquí irán los iconos de navegación debes copiar tal cual esta sección, el script hará el resto -->
	<ol class="navegation">
		<li class="left iconsDefaultColor"><span class="fa fa-chevron-left"></span></li>
        <li class="right iconsDefaultColor"><span class="fa fa-chevron-right"></span></li>
    </ol>
    ```
Este carrusel cuenta con 2 clases CSS para que puedas usar el color que quieras en los iconos de navegación:
	
  ```
	.iconsDefaultColor{
		color: /*el color que quieras agregar*/
	}
	.iconsNavegationColor{
		color: /*el color que quieras agregar*/
	}
	```

IconsDefaultColor: se refiere al color que tendrán por defecto tus iconos.

IconsNavegationColor: se refiere al color que tendrán los iconos al mostrar una imagen seleccionada.

Ten cuidado de agregar a tu css estas clases en el orden que se indica para que los colores se muestren correctamente.


##Demos:
--------------------------
 [Carrusel Automatico](carusel-automatico.html)

 [Carrusel con Iconos de Navegación](indexCarruselNavegation.html)






##Autores:
--------------------------
Maria Jose Solar @marasolarp
Nadia Quezada @NadiaQN


