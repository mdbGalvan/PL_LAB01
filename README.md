***
>**Autora:**         *María D. Batista Galván*  
>**Fecha:**          *Domingo 03 de Febrero de 2014*  
>**Asignatura:**     *Procesadores de Lenguajes.*  
>**Práctica:**       **Práctica 1 : Conversor de Temperatura**  
***

##Pasos

>En dicha asignatura y para esta primera práctica se debía realizar los siguientes pasos:

>Realizar un ''*Conversor de Temperaturas*''.

##Práctica: Conversor de Temperatura

>Se trata de realizar una página web que convierta la temperatura de **Celsius** a **Farenheit** y viceversa. Para ello, se hizo necesario realizar los siguientes pasos:  

>* Crear [index.html](http://mdbgalvan.github.io/PL_LAB01/) que contiene el conversor.
* Crear el estilo de la página.
* Crear el **temperature.js** que realiza la conversión.
* Intalar mocha  `$ npm install -g mocha`.
* Crear la estructura para las pruebas `$ mocha init tests`.
* Descargar [chai.js](http://chaijs.com/chai.js).
* Modificar el [index.html](http://mdbgalvan.github.io/PL_LAB01/tests/) de tests para:
> > * Cargar **chai.js** `<script src="http://chaijs.com/chai.js"></script>`.
> > * Cargar **temperature.js** `<script src="../js/temperature.js"></script>`.
> > * Usar el estilo `mocha.setup('tdd')` en vez de: bbd.
> > * Imitar la página [index.html](http://mdbgalvan.github.io/PL_LAB01/) con los correspondientes input y span `<input id="original" placeholder="32F" size="50">` y `<span class="output" id="converted">`.
>* Por último, añadir los tests.
