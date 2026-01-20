
console.log("%cEjeciciio 04: objetos",style_console);

console.warn("1.Propiedades de un Objeto ");

let propertyID=1;
let propertyName="Departamento en el centro de la ciudad de Mexico";
let propertyDescription="Hermoso departament de 3 recamaras . 1 baño y 1 cajon";
let propertyType="D"; // H:House , D:Departamento , T:Terrain , Locale w: warehouse C:Cabain
let propertyIsSellable=false; //Se vende ?
let propertyIsRentable=true;  //Se Renta ?
let propertyPrice= 7500.00;
let properteLat =19.4383813;
let propertyLong = -99.1020177;
let propertyToken =Symbol("D-12558-CDMX-S");
let propertyIncludedSercives =["Agua","Luz","Gas"];
let propertyImage= null;
let propertyOwnerID=32412;
let propertyStatus="Good";

console.log(`Dats de la propiedad en RENTA:
    Nombre:${propertyName}
    Descripcion:${propertyDescription}
    Tipo:${propertyType}
    Precio:${propertyPrice}
    Ubicacion: Latitud:${properteLat} Longitud:${propertyLong}
    Servicios incluidos:${propertyIncludedSercives}
    En renta:${propertyIsRentable}
    En venta:${propertyIsSellable}
    Token:${propertyToken.description}
    Dueño:${propertyOwnerID}
    Imagen:${propertyImage}  `);

    //2. Declaracion de un objeto
    /*Para declarar un objeto en JS es necesario asignarles un nombre y todas sus propiedades
    iran entre {} y separadas en coma por orden clave - valor */
    console.warn("2. Declaracion del objeto property1 ");
    let property1= {
        id:1,
        name:"Departamento en el centro de la ciudad de Mexico",
        description:"Hermoso departament de 3 recamaras . 1 baño y 1 cajon",
        type:"D",
        price:7500.00,
        isRentable:true,
        isSaleable:false, 
        includedServices:["Agua","Luz","Gas"],
        lat:19.4383813,
        long:-99.1020177,
        status:"Good",
        token:Symbol("D-12558-CDMX-S"),
        ownerID:324112
        
    };

//Impresio del objeto en formato JSON
console.table(property1);

// 3. Leyendo las propiedades de un objeto
/* Un objeto es un conjunto de variables que abstraen una entidad fisica o conceptual de la que ess un significativo almacenar informacion
 para el programa o sistema que estemos desarrollando */

 /* Para acceder a las porpiedades individuales basta con poner el nombre del objeto un "." y el nombre de la propiedad */
console.warn("3. Lectura de propiedades de un objeto");
console.log(`El usuario con id ${property1.ownerID} está rentando un: ${property1.name} 
    el cual descibe cómo: ${property1.description} por un precio de: ${property1.price} con los servicios 
    incluidos de: ${property1.includedServices} ${property1.isSaleable?", actualmente está a la venta":
    "Que por el momento no está a la venta" }`);

// 4. Modificación de los valores de las propiedades de un objeto
/* Para modificar los datos de una variable basta  con accerder a la propiedad deseada a mofifica y asignarle su nuuevo a traves del signo = */
property1.price=8200.00;
property1.isSaleable=true;
property1.includedServices=["Agua", "Luz", "Gas", "Internet", "Seguridad Privada"];

 console.warn("4. Modificacion de propiedades de un objeto");
 console.log(`El usuario con id ${property1.ownerID} está rentando un: ${property1.name} 
    el cual descibe cómo: ${property1.description} por un precio de: ${property1.price} con los servicios 
    incluidos de: ${property1.includedServices} ${property1.isSaleable?", actualmente está a la venta":
    "Que por el momento no está a la venta" }`);

// Destructuración de Objetos (OBJECT DESTRUCTURING)
/* JavaScript es un lenguaje dinámico que permite que un objeto previamente definido pueda ser descompuesto en pequeñas nuevas
partes (variables) para que estas puedan ser manipuladas según sea la necesidad  */
let user1 = {
    userID: 32412,
    name: "John Doe",
    email: "john.doe@gmail.com",
    createdAt: new Date("2015-01-30T23:15:52"),
    lastLogin: new Date("2026-01-20T08:00:05"),
    userRole: "Vendedor",
    totalProperties: 12,
    rating: 9.4
};

let user2 = {
    userID: 48571,
    name: "Marco Ramirez",
    email: "marco@gmail.com",
    createdAt: new Date("2024-08-20T15:08:58"),
    lastLogin: new Date("2026-01-19T23:15:35"),
    userRole: "Comprador",
    rating: 8.5,
    lastOperation: "Buscando Departamento para renta"
};

let user3 = {
    userID: 89658,
    name: "Angel Saul",
    email: "samir@gmail.com",
    createdAt: new Date("2023-09-10T12:08:58"),
    lastLogin: new Date("2025-01-19T22:15:35"),
    userRole: "Comprador",
    rating: 9.5,
    lastOperation: "Buscando Departamento para renta"
};

let user4 = {
    userID: 13546,
    name: "Jonny Ortiz",
    email: "jonnyortiz@gmail.com",
    createdAt: new Date("2021-09-10T10:18:58"),
    lastLogin: new Date("2025-01-19T20:15:35"),
    userRole: "Comprador",
    rating: 10,
    lastOperation: "Buscando Departamento para renta"
};

 console.warn("5. Desestructuracion de Objetos");

 const calculateBid = (seller, buyer, property, price_bidden) => {
    // Desestructuramos para obtener emails y IDs como en tu segunda imagen
    const {userID: sellerID, email: sellerEmail} = seller;
    const {userID: buyerID, email: buyerEmail} = buyer;
    const {price, id} = property;
    let fecha_oferta = new Date();

    // Formato de salida ajustado a tu imagen requerida
    console.log(`El usuario: ${buyerID} (${buyerEmail}) está realizando una oferta al usuario: ${sellerID} (${sellerEmail})
    por la cantidad ofertada de: ${price_bidden} por la propiedad ${id}
    Precio real: ${price}
    Fecha: ${fecha_oferta.toLocaleString()}`);

    return {
        buyerID,
        sellerID,
        propertyID: id, 
        propertyPrice: price,
        date_bidden: fecha_oferta,
        bid_accurrate: (price_bidden / price * 100).toFixed(2) + "%"
    };
}

// Ejecución de pruebas
let bin1 = calculateBid(user1, user2, property1, 7500);
console.log(`La oferta tiene una exactitud del: ${bin1.bid_accurrate}`);

let bin2 = calculateBid(user1, user3, property1, 8200);
console.log(`La oferta tiene una exactitud del: ${bin2.bid_accurrate}`);

let bin3 = calculateBid(user1, user4, property1, 10000);
console.log(`La oferta tiene una exactitud del: ${bin3.bid_accurrate}`);