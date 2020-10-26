/*Arrays*/

var meses= ["Enero","Febrero", "Marzo", "Abril", "Mayo","Junio",
"Julio","Agosto","Septiembre", "Octubre","Noviembre","Diciembre"];
console.log (meses[4],meses[10]);

/*Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", 
"Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
 mostrar por consola los meses 5 y 11 (utilizar console.log)*/

 var mesesord = meses.sort();
 console.log (mesesord);
 
 /*Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).*/

 var mesesm = meses.push("ultimo");
 var mesesp = meses.unshift("primero");
 console.log (meses);

 /*Agregar un elemento al principio y al final del array (utilizar unshift y push).*/

 var mesesn = meses.shift();
 var mesesu = meses.pop();
 console.log(meses);

 /*Quitar un elemento del principio y del final del array (utilizar shift y pop).*/

 var mesesr = meses.reverse();
 console.log (meses);

 /*Invertir el orden del array (utilizar reverse)*/

 var mesesj = meses.join("-");
 console.log(mesesj);

 /*Unir todos los elementos del array en un único 
 string donde cada mes este separado por un guión - (utilizar join).*/

 var meses = ["Enero","Febrero", "Marzo", "Abril", "Mayo","Junio",
 "Julio","Agosto","Septiembre", "Octubre","Noviembre","Diciembre"];
 var mesess = meses.slice(4,11);
 console.log(mesess);
