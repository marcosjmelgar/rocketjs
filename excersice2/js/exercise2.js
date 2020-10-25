/* Strings */

var x1 = "hello world my name is marcos melgar";
var x2 = x1.toUpperCase();
console.log(x2);

/*Crear una variable de tipo string con al menos 10 caracteres
 y convertir todo el texto en mayúscula (utilizar toUpperCase).*/

 var x1 = "hello world my name is marcos melgar";
 var x2 = x1.substring(5,0);
 console.log (x2);

 /*Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 
 caracteres guardando el resultado en una nueva variable (utilizar substring).*/

 var x1 = "hello world my name is undefined";
 var x2 = x1.substring(29);
 console.log (x2);

 /*Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 
 caracteres guardando el resultado en una nueva variable (utilizar substring).*/

 var x1 = "hello world my name is pablo";
 var x2 = x1.substring(1,0).toUpperCase();
 var x3 = x1.substring(1).toLowerCase();
 var x4 = x2 + x3;
 console.log(x4);

/*Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo 
string con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado 
en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).*/

var x1 = "hello world ";
var x2 = x1.indexOf(" ");
console.log(x2);

/*Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del \
primer espacio en blanco y guardarla en una variable (utilizar indexOf).*/

var x1 = "cosechadora segadora";
var x2 = x1.substring(1,0).toUpperCase();
var x3 = x1.substring(1,12).toLowerCase();
var x4 = x2 + x3;
var x5 = x1.lastIndexOf("s");
var x6 = x1.substring(x5,13).toUpperCase();
var x7 = x5+1;
var x8 = x1.substring(x7,20).toLowerCase();
var x9 = x6 + x8;
var x10 = x4 + x9;
console.log(x10);

/*Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio 
    entre medio). Utilizar los métodos de los ejercicios anteriores para generar un nuevo 
    string que tenga la primera letra de ambas palabras en mayúscula y las demás letras en 
    minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).*/
    

