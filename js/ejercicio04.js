//Estilizacion de barra de pruebas en el DevTools en el navegador
console.log("%cEjeciciio 04: objetos",style_console);

console.warn("1.Propiedades de un Objeto ");

let propertyID=1;
let propertyName="Departamento en el centro de la ciudad de Mexico";
let propertyDescription="Hermoso departament de 3 recamaras . 1 baño y 1 cajon";
let propertyType="D"; // H:House , D:Departamento , T:Terrain , Locale w: warehouse C:Cabain
let propertyIsSellable=false; //Se vende ?
let propertyIsRentable=true;  //Se Renta ?
let propertyPrice= 7500.00
let properteLat =19.4383813;
let propertyLong = -99.1020177;
let propertyToken =Symbol("D-12558-CDMX-S");
let propertyIncludedSercives =["Agua","Luz","Gas"];
let propertyImage= null;
let propertyOwnerID=324112;
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
    property1= {
        id:1,
        name:"Departamento en el centro de la ciudad de Mexico",
        description:"Hermoso departament de 3 recamaras . 1 baño y 1 cajon",
        type:"D",
        price:7500.00,
        isRentable:true,
        isSellable:false,
         includedServices:["Agua","Luz","Gas"],
        lat:19.4383813,
        long:-99.1020177,
        status:"Good",
        token:Symbol("D-12558-CDMX-S"),
        ownerID:324112
        
    };

//Impresio del objeto en formato JSON

console.table(property1)