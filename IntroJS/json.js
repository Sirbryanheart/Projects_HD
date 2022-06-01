
//array
let amigos = ["Joe","Isidro","Daniel"];
console.log (amigos);

//JSON - stringify
let amigosJson = JSON.stringify(amigos);
console.log (amigosJson);

//JSON - parse
let amigosOriginal = JSON.parse(amigosJson);
console.log (amigosOriginal);

//Objeto

let persona = {
    nombre : "Giovanny",
    apellido : "Velasquez",
    edad : "45",
    direccion : "Parque de Castilla"
}
console.log(persona);

//JSON - stringify / String de Tipo JSON
 let personaJson = JSON.stringify(persona);

 console.log (personaJson);

//JSON - Parse / Objeto formato Objeto
let personaOriginal = JSON.parse(personaJson);

console.log (personaOriginal);