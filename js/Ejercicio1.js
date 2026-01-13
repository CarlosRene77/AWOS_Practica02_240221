// Comentario de una sola linea

/* Comentarios

...
*/

const bg = "linear-gradient(45deg, rgba(52,152,219,1) 0%, rgba(26, 188, 156, 1) 50%)";

const style_console = `background: ${bg}; color: white; border-radius: 6px; padding:4px; font-size:1.0rem; font-weight:bold;`;
console.log("%cEjercicio 01:Declaración de variables", style_console);

// EJERCICIO 01: Declaración de variables en JavaScript
// 1. Utilizando la palabra reservada VAR
// Utilizaremos el metodo WARN para estilizar las respuestas de las pruebas realizadas a 
// nuestro código y falicitar su revisión

console.warn("-- Declaracion de Variables utilizando el prefijo VAR --")

var miNombre = "Carlos Rene";
console.log("El valor almacenado en la variable miNombre es:",miNombre);

// Modificar el valor de la variable
var miNombre = "Carlos Rene";
console.log("El valor almacenado en la variable miNombre es:",miNombre);

var misApellidos;
console.log("El valor almacenado en la variable miApellido es ",misApellidos); //undefined
// Una variable puede cambiar su valor durante la ejecucion del programa


console.warn("-- Declaración de una constante utilizando el prefijo CONST --")
// 2. Utilizando la palabra reservada CONST
// Una constante a difencia de una variable es que su valor no cambiará su valor durante toda la ejecución del programa,
// y al momento de ser declarada esta deberá ser inicializada obligatoriamente.

const miMatricula = "240221";
console.log("El valor de la constante miMatricula es: ",miMatricula);

// Intentando modificar el valor de la constante

/*miMatricula = "250221";
console.log("El valor de la constante miMatricula es: ",miMatricula);*/

// 3. Utilizando la palabra reservada LET
// LET es el prefijo utilizado muy similar a VAR con la diferencia en su alcance (SCOPE),
// aquellas declaradas con VAR tienen un alcance global en el código no importando bloques o
// secciones, mientras que las variables declaradas con LET solo existirán dentro del bloque o función.

var fechaNacimiento = new Date("2006-11-04");
var miEdad = calcularEdad(fechaNacimiento)
console.log("Tu edad es de: ",miEdad, " años.")

// Verificamos si es mayor de edad
if(miEdad >= 18)
{
    var esMayorDeEdad = true
    let esMenorDeEdad = false
}

if(esMayorDeEdad)
    console.log("Eres mayor de edad.");
else
    console.log("Eres menor de edad");

/*console.log("El valor de esMenordeEdad es: ",esMenorDeEdad)*/
// La variable booleana no puede persistir por el tipo de declaración con LET, solo fue de
// alcanze local mientras el condicional (if) se ejecute

function calcularEdad(fechaNacimiento)
{
    // Para calcular la edad requerimos de la fecha del dia de hoy
    var fechaHoy = new Date();

    // Dado que los datos de fecha son almacenados en milisegundos por default en
    // JavaScript, necesitamos una variable que nos permite saber el numero de milisegundos por dia

    let milisegundosPorDia = 24*60*60*1000;

    // Ya que tenemos los milisegundos por dia tenemos que restar a la fecha de hoy, la fecha en que 
    // nacimos para calcular los milisegundos que hemos vivido.
    let diasVividos = (fechaHoy -fechaNacimiento)/milisegundosPorDia;

    // Invocamos el método matemático de 
    diasVividos = Math.floor(diasVividos)
    var edad = diasVividos / 365.25
    edad = Math.floor(edad);

    return edad;
}


// Interpolación de Datos

// $ {} `
misApellidos="Morales Santos"
console.log(`Hola, ${miNombre} ${misApellidos} actualmente tienes ${miEdad} años.`);

// Autor: Carlos Rene