// Tipos de datos en Java Script 

// Personalizacion de salida a consola

//const bg = "linear-gradiant(45deg, rgba(52,152,219,1) 0%, rgba(26, 188, 156, 1) 50%)";

//const style_console = `background: ${bg}; color: white; border-radius: 6px; padding:4px; font-size:1.0rem; font-weight:bold;`;

console.log("%Ac2.- Ejercicio 02: Tipo de datos", style_console);

/* 1. Undefined - valor por defecto asignado a variables declaradas pero no inicializadas,
 no es igual a null */

console.warn("1.- UNDEFINED (No definido")
let usuarioLogueado;
var rolUsuario;
const ultimoAcceso = undefined;

console.log("Valor actuales de las variables: ");
console.log(`usuarioLogueado:" = $(usuarioLogueado)`);
console.log(`rolUsuario:" = $(rolUsuario)`);
console.log(`ultimoAcceso:" = $(ultimoAcceso)`);

/* En Java script existe el método typeof() que nos devuelve el tipo de dato de una
variable previamente declarada.*/

console.log("Tipos de dato de las varianles declaradas:");
console.log(`usuarioLogueado: = ${typeof(usuarioLogueado)}`);
console.log(`rolUsuario:" = ${typeof(rolUsuario)}`);
console.log(`ultimoAcceso:" = ${typeof(ultimoAcceso)}`);

// Supongamos que un usuario denominado CarlosRene77 se ha logueado exitosamente, el valor de la variable debera actualizarse a su username

usuarioLogueado = "@CarlosRene77";

// pero no solo cambiará su valor, también cambiará su tipo

console.log(`El valor de la variable usuarioLogueado es: ${usuarioLogueado} y su nuevo tipo de dato es: ${typeof(usuarioLogueado)}`);

// 2. BOOLEAN (TRUE / FALSE) - Verdadero o Falso

var hayUsuarioLogueado = false

/* Supongamos que nuestra app tendrá un menu específico para los usuarios
registrados, en el podrán visualizar sus mensajes o estado de sus publicaciones de renta o venta
de  propiedades, a diferencia de un usuario que entra de manera incognita 
a visualizar las propiedades*/

function validacionUsuariosLogueados() {
    console.log(`El valor de la variable hayUsuariosLogueados es : ${hayUsuariosLogueados} que es de tipo: ${typeof(hayUsuariosLogueados)}`);

    if (hayUsuariosLogueados === true) {
        console.log("Dado que se ha logueado un usuario la app mostrará el menú de usuario.");
    } else if (hayUsuariosLogueados === false) {
        console.log("Dado que no hay usuarios logueados la app no mostrará el menu de usuario.");
    } else {
        console.log("No puedo procesar ese tipo de dato, requiero de un booleano.");
    }
}

//test1: usuario logueado = true

hayUsuariosLogueados = true;
console.log("Test 1");
validacionUsuariosLogueados();

//test2: usuario logueado = false
hayUsuariosLogueados = false;
console.log("Test 2");
validacionUsuariosLogueados();

//test3: usuario logueado = a cualquier cosa
hayUsuariosLogueados = 52.5;
console.log("Test 3");
validacionUsuariosLogueados();

// 3. NUMBER (Numéricos)

/* Es importante saber que Java Script a diferencia de otros lenguajes no diferencia los datos de tipo númerico, lo que para otros lenguajes de programación lo que un
ENTERO (INT), FLOTANTE(FLOAT), DECIMAL, DOBLE (DOUBLE) , para el solo son números (NUMBER)*/

let userID_Owner = 225
let priceProperty = 125000.50
let latGPS = 20.240508
let longGPS = -97.952881
let altGPS = 1180

console.log(`Los valores de las variables declaradas para los datos de la propiedad son: 
    ID del Usuario = ${userID_Owner},
    Precio de la propiedad = ${priceProperty},
    Latitud (GPS) = ${latGPS},
    Longitud (GPS) = ${longGGPS}, 
    Altitud (GPS) = ${altGPS}`);

console.log(`Los tipos de datos de las variables declaradas para los datos de la propiedad son: 
    ID del Usuario = ${typeof(userID_Owner)},
    Precio de la propiedad = ${typeof(priceProperty)},
    Latitud (GPS) = ${typeof(latGPS)},
    Longitud (GPS) = ${typeof(longGGPS)}, 
    Altitud (GPS) = ${typeof(altGPS)}`);