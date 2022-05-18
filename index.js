const zodiacSigns = require('zodiac-signs')('en');

let alumnosDigitalHouse = require('./Giovanny') 
let signo=zodiacSigns.getSignByDate({day:2,month:11});

console.log(
    "Hola, soy "+alumnosDigitalHouse[0]+
    ", disfruto "+alumnosDigitalHouse[1]+
    " soy de "+alumnosDigitalHouse[2]+
    " y los datos de mi signo son: " 
);
console.log((signo))




