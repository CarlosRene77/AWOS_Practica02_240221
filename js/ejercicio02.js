// Tipos de datos en Java Script 

// Personalizacion de salida a consola

//const bg = "linear-gradiant(45deg, rgba(52,152,219,1) 0%, rgba(26, 188, 156, 1) 50%)";

//const style_console = `background: ${bg}; color: white; border-radius: 6px; padding:4px; font-size:1.0rem; font-weight:bold;`;

console.log("%cEjercicio 02: Tipo de datos", style_console);

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
    Longitud (GPS) = ${longGPS}, 
    Altitud (GPS) = ${altGPS}`);

console.log(`Los tipos de datos de las variables declaradas para los datos de la propiedad son: 
    ID del Usuario = ${typeof(userID_Owner)},
    Precio de la propiedad = ${typeof(priceProperty)},
    Latitud (GPS) = ${typeof(latGPS)},
    Longitud (GPS) = ${typeof(longGPS)}, 
    Altitud (GPS) = ${typeof(altGPS)}`);

    // 4.- STRING (Cadena de Caracteres)

    var fullnameOwner = "Marco A. Ramírez";
    let nameProperty = "              Hermosa Casa la Playa de Puerto Vallarta                 ";
    let descriptionProperty = "Casa de 2 pisos, 4 habitaciones, 2 baños completos y estacionamiento para 2 automóviles a orilla del mar.";
    var statusProperty = "Disponible";
    const typeProperty = "C";
    var addressProperty;

    /* Los tipos de datos STRING son palabras, valores cualitativos de las entidades de nuestra 
    aplicación, que no tienen un tamaño máximo y que están conformadas por carácteres alfabéticos, 
    caracteres especiales como acentos o símbolos de algún idioma*/

    console.warn("4. STRING (CADENA DE CARÁCTERES, PALABRAS)");
    console.log(`El usuario: ${fullnameOwner}, 
        esta vendiendo o rentando: ${nameProperty}
        que consiste en: ${descriptionProperty}
        actualmente esta en estado: ${statusProperty} y es del tipo: ${typeProperty}`)
    console.log(`Las variables declaradas son del tipo:
            fullnameOwner :   ${typeof(fullnameOwner)}
            nameProperty :   ${typeof(nameProperty)}
            descriptionProperty:  ${typeof(descriptionProperty)}
            statusProperty :   ${typeof(statusProperty)}
            typeProperty :   ${typeof(typeProperty)}`);

    // Manipulando Strings, los tipos de datos cualitativos tienen ciertos métodos para manipular su valor
    // por mencionar algunos:

    // Transformar a MAYÚSCULAS
    console.log(`Nombre del Propietario ${fullnameOwner.toUpperCase()}`);
    // Transformar a minúsculas
    console.log(`Descripción de la propiedad: ${descriptionProperty.toLocaleLowerCase()}`);
    // Numero de caracteres
    console.log(`Numero de letras en el tipo de propiedad: ${typeProperty.length} `);
    // Subcadena
    console.log(`Apellido del propietario: ${fullnameOwner.slice(8, fullnameOwner.length)}`);
    // Eliminar espacios 
    console.log(`Nombre de la propiedad: ${nameProperty.trim()}`);
    // Reemplazar caracteres
    console.log(`Descripción modificada: ${descriptionProperty.replace("MAR", "RIO")}`);
    // Reemplazar todos
    console.log(`Descripción modificada: ${descriptionProperty.replaceAll("A", "4")}`);

    // 5. BIGINT (Entero de Grandes dimensions)
    /* Este tipo de dato permite almacenar numeros exageradanmente amplios usualmente aplicaciones científicas avanzadas requieren, esto
    para no perder presición en los valores almacenados. */
    
    const numeroGrande = 12134567890;
    let numeroGrande2 = 1213456789012134567890;
    let numeroGrande3 = 121345678901213456789012134567890;
    let numeroGrande4 = 12134567890121345678901213456789012134567890;

    console.warn("5.- BIGINT (Enteros de gran tamaño)");
    console.log(`El valor de numeroGrande es: ${numeroGrande} y es soportado por: ${typeof (numeroGrande)}`);
    console.log(`El valor de numeroGrande2 es: ${numeroGrande2} a pesar de ser soportado por: ${typeof (numeroGrande2)} comienza
    a sufrir problemas de presicion`);
    console.log(`El valor de numeroGrande3 es: ${numeroGrande3} a pesar de ser soportado por: ${typeof (numeroGrande3)} comienza
    a sufrir problemas de presicion`);
    console.log(`El valor de numeroGrande4 es: ${numeroGrande4} a pesar de ser soportado por: ${typeof (numeroGrande4)} comienza
    a sufrir problemas de presicion`);

    numeroGrande2 = BigInt(1213456789012134567890);
    console.log(`Si declaramos la variable con Bigint el valor de numeroGrande2 es: ${numeroGrande2} a pesar de ser soportado por: ${typeof (numeroGrande2)} comienza a sufrir problemas de presicion`);
    numeroGrande3 = BigInt(121345678901213456789012134567890);
    console.log(`Si declaramos la variable con Bigint el valor de numeroGrande3 es: ${numeroGrande3} a pesar de ser soportado por: ${typeof (numeroGrande3)} comienza a sufrir problemas de presicion`);
    numeroGrande4 = BigInt(12134567890121345678901213456789012134567890);
    console.log(`Si declaramos la variable con Bigint el valor de numeroGrande4 es: ${numeroGrande4} a pesar de ser soportado por: ${typeof (numeroGrande4)} comienza a sufrir problemas de presicion`);

    // 6. SYMBOL (simbolo)

    /* Es un tipo de dato que ademas de tener un tipo, un valor, asocia la ubicacion del espacio en memoria, por lo que todos los valores
    asignados a una variable de este tipo siempre seran UNICOS*/

    console.warn("6.- SYMBOL (Simbolos)");

    const numero1 = 4;
    const numero2 = 4.0;
    const numero3 = "4";
    const numero4 = "4.0";
    const numero5 = Symbol(4);
    const numero6 = Symbol(4.0);
    const numero7 = Symbol("4");
    const numero8 = Symbol("4.0");

    // Valores y tipos de datos

    console.log(`Valores y tipos:
        numero1 - Valor: ${numero1}, Tipo: ${typeof (numero1)}
        numero2 - Valor: ${numero2}, Tipo: ${typeof (numero2)}
        numero3 - Valor: ${numero3}, Tipo: ${typeof (numero3)}
        numero4 - Valor: ${numero4}, Tipo: ${typeof (numero4)}
        numero5 - Valor: ${numero5.description}, Tipo: ${typeof (numero5)}
        numero6 - Valor: ${numero6.description}, Tipo: ${typeof (numero6)}
        numero7 - Valor: ${numero7.description}, Tipo: ${typeof (numero7)}
        numero8 - Valor: ${numero8.description}, Tipo: ${typeof (numero8)}`);

    // Pruebas comparativas

    if(numero1 ==numero2)
    console.log("Las variables numero1 y numero2 son igulaes en valor.")
    else
        console.log("Las variables numero1 y numero2 no son iguales en valor.")
    if(numero1 == numero3)
        console.log("Las variables numero1 y numero3 son igulaes en valor.")
    else
        console.log("Las variables numero1 y numero3 no son iguales en valor.")
    if(numero1 == numero4)
        console.log("Las variables numero1 y numero4 son igulaes en valor.")
    else
        console.log("Las variables numero1 y numero4 no son iguales en valor.")
    if(numero1 == numero5)
        console.log("Las variables numero1 y numero5 son igulaes en valor.")
    else
        console.log("Las variables numero1 y numero5 no son iguales en valor.")
    if(numero5 == numero6)
        console.log("Las variables numero5 y numero6 son igulaes en valor.")
    else
        console.log("Las variables numero5 y numero6 no son iguales en valor.")

    // 7. NULL (NULO)

    /* El tipo de dato nulo es similar a UNDEFINED, con la variaciacion de que hay un consentimiento del usuario o del sistema
    a que esta variable intencionalmente fue iniciada con este valor*/

    var isPremiumUser;
    var isNewUser;
    let todayDate = new Date();
    var lastLogin = todayDate;

    console.warn("7.- NULL (Nulo)");
    console.log(`
        El usuario: ${usuarioLogueado}, tipo de dato: ${typeof (usuarioLogueado)}
        Fecha ultimo login: ${todayDate}, tipo de dato: ${typeof (todayDate)}
        Es nuevo usuario: ${isNewUser}, tipo de dato: ${typeof (isNewUser)}
        Es usuario premium: ${isPremiumUser}, tipo de dato: ${typeof (isPremiumUser)}
    `);

    // Validacion del usuario

    if (todayDate == lastLogin) {
        isNewUser = true
    } else {
        isNewUser = false
    }

    /* Como es un usuario nuevo aun no ve, ni publica ninguna propiedad, por defecto no interesa por el momento que sea premium
    hasta que inbteractue con la plataforma */

    isPremiumUser = null;
    console.log("Datos despues de la validacion del usuario:");
    console.log(`
        El usuario: ${usuarioLogueado}, tipo de dato: ${typeof (usuarioLogueado)}
        Fecha ultimo login: ${todayDate}, tipo de dato: ${typeof (todayDate)}
        Es nuevo usuario: ${isNewUser}, tipo de dato: ${typeof (isNewUser)}
        Es usuario premium: ${isPremiumUser}, tipo de dato: ${typeof (isPremiumUser)}
    `);

