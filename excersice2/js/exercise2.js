/* Strings */

var x1 = "hello world my name is marcos melgar";
var x2 = x1.toUpperCase();
console.log(x2);
alert (x2);

/*Crear una variable de tipo string con al menos 10 caracteres
 y convertir todo el texto en mayúscula (utilizar toUpperCase).*/

 var x1 = "hello world my name is marcos melgar";
 var x2 = x1.substring(5,0);
 console.log (x2);
 alert (x2);

 /*Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 
 caracteres guardando el resultado en una nueva variable (utilizar substring).*/

 var x1 = "hello world my name is undefined";
 var x2 = x1.substring(29);
 console.log (x2);
 alert (x2);

 /*Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 
 caracteres guardando el resultado en una nueva variable (utilizar substring).*/

 var x1 = "hello world my name is pablo";
 var x2 = x1.substring(1,0).toUpperCase();
 var x3 = x1.substring(1).toLowerCase();
 var x4 = x2 + x3;
 console.log(x4);
 alert (x4);

/*Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo 
string con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado 
en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).*/

var x1 = "hello world ";
var x2 = x1.indexOf(" ");
console.log(x2);
alert (x2);

/*Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del \
primer espacio en blanco y guardarla en una variable (utilizar indexOf).*/
