/*For*/

var dias = ["lunes","martes","miercoles","jueves","viernes"]
for (var index = 0; index<dias.length; index++) {
    console.log(dias[index]);
}

/*Crear un array que contenga 5 palabras y recorrer dicho array utilizando 
un bucle for de JavaScript para mostrar una alerta utilizando cada una de las palabras.*/

for (var index=0; index<dias.length; index++) {
    dias[index] = dias[index].charAt(0).toUpperCase() + dias[index].substring(1);
    alert(dias[index]);
}

/*Al array anterior convertir la primera letra de 
cada palabra en mayúscula y mostrar una alerta por cada palabra modificada.*/

var sentence = ""
for (var index=0; index<dias.length; index++) {
    sentence = sentence + dias[index];
}
alert(sentence);

/*Crear una variable llamada “sentence” que tenga un string vacío, luego al array del punto 
a) recorrerlo con un bucle for para ir guardando cada palabra dentro de la variable sentence. 
Al final mostrar una única alerta con la cadena completa.*/