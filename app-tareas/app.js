const archivo = require('./funcionesDeTareas');

let accion = process.argv[2];

switch(accion){
    case undefined :
        console.log ("Atención - Tienes que pasar una acción");
        break;
    case "listar":
        let arrayTareas = archivo.leerArchivo();
        console.log(arrayTareas);
        break;
    default :
        console.log ("No entiendo qué quieres hacer");   
        break;
}


