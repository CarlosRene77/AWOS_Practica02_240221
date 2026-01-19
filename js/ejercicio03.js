// Estilización de la barra de zona de pruebas en el Devtools en el navegador 
console.log("%cEjercicio 03: Funciones ", style_console);

// Funciones NOMBRADAS
// 1. Funciones procedurales, vacias, VOTO, sin valor de retorno

function saludar() {
    console.log("Bienvenid@ al sistema de bienes raices");
}

console.warn("1. Funciones sin valor de retorno, sin parametros");
saludar();

// 2. Funciones procedurales sin valor de retorno, pero que si recibe parametros es decir datos de entrada

function saludar_usuario(username, gender) {
    if (gender == "H") {
        console.log(`Bienvenido, ${username} al sistema de bienes raices Sr.`);
    } else if (gender == "M") {
        console.log(`Bienvenida, ${username} al sistema de bienes raices Sra.`);
    } else {
        console.log(`Bienvenid@, ${username} al sistema de bienes raices`);
    }
}

console.warn("2. Funciones sin valor de retorno, con parametros de entrada");
saludar_usuario("Luis Felipe", "H");
console.log("--------------------------------------------------");
saludar_usuario("Maria Gomez", "M");
console.log("--------------------------------------------------");
saludar_usuario("Alex Morgan", null);

// 3. Funciones que retornan un dato, pero que no reciben parametros 
function fechaActual() {
    const fecha = new Date();
    const dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    const meses = [
        "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];
    const fecha_formatoMX = `${dias[fecha.getDay()]}, ${fecha.getDate()} de ${meses[fecha.getMonth()]} 
    de ${fecha.getFullYear()}`;
    return fecha_formatoMX;
};

console.warn("3. Funciones que retornan un valor, sin parametros de entrada");
let hoy = fechaActual();
console.log("Bienvenid@, al sitema de bienes raices, hoy es: " + hoy);

/* Imprimiendo el valor y que tipo de dato es*/
console.log(fechaActual);
console.log(typeof(fechaActual));

// 4. Funciones que retornan un valor y que reciben parametros de entrada

function login(username, password) {

    let userValidation = false; 

    if (username === "admin" && password === "12345") {
        userValidation = true;
        console.log("Bienvenido usuario admin");
    } else if (username === "admin" && password != "12345") {
        userValidation = false;
        console.log("Lo sentimos la contraseña es incorrecta");
    } else if (username != "admin" && password == "12345") {
        userValidation = false;
        console.log("Lo sentimos el nombre de usuario no existe");
    } else if (username != "admin" && password != "12345") {
        userValidation = false;
        console.log("Por favor verificar el nombre de usuario y contraseña");
    }
    return userValidation;
}

console.warn("4. Funciones que retornan un dato, pero tambien reciben parametros de entrada");

var loginStatus;
//Test 1 - Usuario y contraseña correctos
console.log("Test 1 - usuario: admin, password: 12345")
loginStatus = login("admin", "12345");
console.log(`${loginStatus ?  `El usuario admin se ha logeado satisfactoriamente` : `Hubo un error en el login del usuario admin`}`);


//Test 2 - Usuario y contraseña correctos
console.log("Test 2 - usuario: administrador, password: 12345")
loginStatus = login("administrador", "12345");
console.log(`${loginStatus ?  `El usuario admin se ha logeado satisfactoriamente` : `Hubo un error en el login del usuario admin`}`);

    
//Test 3 - Usuario y contraseña correctos
console.log("Test 3 - usuario: admin, password: 45112432138")
loginStatus = login("admin", "45112432138");
console.log(`${loginStatus ?  `El usuario admin se ha logeado satisfactoriamente` : `Hubo un error en el login del usuario admin`}`);

    
//Test 4 - Usuario y contraseña correctos
console.log("Test 4 - usuario: Carlos, password: mipassword")
loginStatus = login("Angel", "mipassword");
console.log(`${loginStatus ?  `El usuario admin se ha logeado satisfactoriamente` : `Hubo un error en el login del usuario admin`}`);

// FUNCIONES ANÓNIMAS, FUNCIONES FLECHA (ARROW) , FUNCIONES LAMBDA
/* A diferencia de las funciones nombradas este tipo de funciones no suelen ser reutilizadas en el código solo se ejecutan una sola vez, dando velocidad, individalidad
y privacidad a los datos utilizados en el proceso */


// 5. Función anonima sin parámetros
isNewUser = function (){
    const hoy = new Date();

    return(
        lastLogin.getFullYear() === hoy.getFullYear() &&
        lastLogin.getMonth() === hoy.getMonth() &&
        lastLogin.getDate() === hoy.getDate()
    );

}
console.warn("5. Funciones Anónimas, sin parámetros")

console.log("Test 1 - Fecha de último acceso es igual a la fecha de hoy");
console.log(`La fecha del último acceso es: ${lastLogin}`);
console.log(`El usuario logueado es: ${isNewUser()? "Nuevo usuario":"Usuario Antiguo."} `);

console.log("------------------------------------------");
lastLogin = new Date("2025/12/31");
console.log("Test 2 - Fecha de último acceso es diferente a la fecha de hoy");
console.log(`La fecha del último acceso es: ${lastLogin}`);
console.log(`El usuario logueado es: ${isNewUser()? "Nuevo usuario":"Usuario Antiguo."} `);


// 6. Funciones Anónimas con Parámetros (Vérsion Arrow o Lambda)

const sumar = (a, b) => {
    let resultado = a + b;
    return resultado;
};


console.warn("6. Funcione anonimas con parametros")
console.log(`El resultado de la suma de 15 + 83 es: ${sumar(15,83)}`);

/*Cuando la función anónima tiene solo una linea de operación se puede usar una version simplificada que
no usa {} llaves, ni la palabra reservada (return)*/

const multiplicar = (a,b) => a*b;
console.log(`El resultado de la suma de 15 + 125 es: ${multiplicar(15,125)}`);

// 7. Funciones Callback (Regreso de llamada)
console.warn("7. Funciones Anónimas Callback (respuesta)");

const recoverPassword = function (email, callback) {
    // Generamos el código a enviar al usuario.
    const recoveryCode = Math.floor(100000 + Math.random() * 900000);

    console.log(`
        ======================================================================
        Solicitud de recuperación recibida
        Correo del usuario solicitante: ${email}
        Generando Código de Recuperación...
        Código de Seguridad Generado: ${recoveryCode}
        Enviando el correo al usuario...
        Correo Enviado a: ${email}, con el código de seguridad: ${recoveryCode}
        ======================================================================
    `);

    // Definiendo la respuesta del sistema
    const response = {
        status: "OK",
        message: "Código de recuperación enviado satisfactoriamente."
    };

    // Ejecutar callback
    callback(response);
};

// Invocación de una función callback 
recoverPassword("marco@gmail.com", 
    function (systemResponse) {
    console.log("Respuesta del sistema:");
    console.log(systemResponse.message);
});
