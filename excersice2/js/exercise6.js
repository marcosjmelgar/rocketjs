/*Functions*/

/*var x1 = Number(prompt('Inserte un digito'));
var x2 = Number(prompt('Inserte un digito'));
function suma (x1,x2) {
    return x1 + x2;
}
var resultado = suma(x1,x2);
console.log(resultado);*/

/*Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y 
guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.*/

/*var x1 = prompt('Inserte un digito');
var x2 = prompt('Inserte un digito');
function suma (x1,x2) {
    if ( typeof x1 != "number" || typeof x2 != "number" ) {
        alert ("Uno de los parametros no es un numero");
        return  NaN
    } 
    else {
        return x1 + x2;
        }
    }
var resultado = suma(x1,x2);
console.log(resultado);*/

/*A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número,
 mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.*/

 var x1 = Number(prompt('Inserte un numero'));
 function validateinteger (x1) {
    if ( x1 % 1 == 0 ) {
        return true;
    }
 }

 /*Crear una función validate integer que reciba un número como parámetro y 
 devuelva verdadero si es un número entero.*/

 var x1 = Number(prompt('Inserte un digito'));
 var x2 = Number(prompt('Inserte un digito'));
 function suma (x1,x2) {
     if ( typeof x1 != "number" || typeof x2 != "number" ) {
         alert ("Uno de los parametros no es un numero");
         return  NaN
     } 
     else {
         if (x1 % 1 != 0 || x2 % 1 != 0) {
             alert("Error");
             return Math.round(x1) + Math.round(x2);
         } else {
             return x1 + x2;
            }
     }
}
 var resultado = suma(x1,x2);
 console.log(resultado);

 /*A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros. 
 En caso que haya decimales mostrar un alerta con el error y retorna el número 
 convertido a entero (redondeado).*/

 
