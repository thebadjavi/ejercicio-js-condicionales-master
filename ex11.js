/**
 * Si una variable no tiene valor, esta se evalua como false. Pero también sucede en muchos otros casos: https://developer.mozilla.org/en-US/docs/Glossary/Falsy
 * 
 */

// Pregunta 1: Contesta y razona: qué línea de código se va a ejecutar ? Ejecuta el código. Qué línea se ha ejecutado finalmente?
//como nombre no tiene valor se ejecuta el else
let nombre = ""; // Un formulario nos pide que pongamos nuestro nombre

if (nombre) {
    console.log("tu nombre es " + nombre);
}

else {
    console.log("Me parece que te has olvidado de poner tu nombre...")
}

// Pregunta 2: Modifica el valor de las variables adecuadamente para que se muestre el siguiente console.log

let destino = "japon"; // donde me voy a de viaje?
let presupuesto="9999"; // cuanto dinero tengo para ello?
let estoyPrearado = true; // lo tengo todo ya listo ?

/**NO MODIFIQUES A PARTIR DE AQUI */

if (destino && presupuesto && estoyPrearado) {
    console.log("Me voy a de viaje a " + destino + " y me voy a gastar " + presupuesto + " €");
}