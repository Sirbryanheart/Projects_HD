const zodiacSigns = require("zodiac-signs")("en");

let alejandro = require("./Alejandro");
let andres = require("./Andres");
let bibiana = require("./Bibiana");
let giovanny = require("./Giovanny");
let gustavo = require("./Gustavo");
let hector = require("./Hector");

let signo;

console.log(
  "Hola, soy " +
    alejandro[0] +
    ", disfruto " +
    alejandro[1] +
    " soy de " +
    alejandro[2] +
    " y los datos de mi signo son: "
);
signo = zodiacSigns.getSignByDate({day:2,month:11});
console.log(signo);

console.log(
  "Hola, soy " +
    andres[0] +
    ", disfruto " +
    andres[1] +
    " soy de " +
    andres[2] +
 " y los datos de mi signo son: "
);
signo = zodiacSigns.getSignByDate({day:9,month:11});
console.log(signo);

console.log(
  "Hola, soy " +
    bibiana[0] +
    ", disfruto " +
    bibiana[1] +
    " soy de " +
    bibiana[2] +
    " y los datos de mi signo son: "
);
signo = zodiacSigns.getSignByDate({day:3,month:1});
console.log(signo);

console.log(
  "Hola, soy " +
    giovanny[0] +
    ", disfruto " +
    giovanny[1] +
    " soy de " +
    giovanny[2] +
    " y los datos de mi signo son: "
);

signo = zodiacSigns.getSignByDate({day:6,month:5});
console.log(signo);

console.log(
  "Hola, soy " +
    gustavo[0] +
    ", disfruto " +
    gustavo[1] +
    " soy de " +
    gustavo[2] +
    " y los datos de mi signo son: "
);
signo = zodiacSigns.getSignByDate({day:7,month:7});
console.log(signo);

console.log(
  "Hola, soy " +
    hector[0] +
    ", disfruto " +
    hector[1] +
    " soy de " +
    hector[2] +
    " y los datos de mi signo son: "
);
signo = zodiacSigns.getSignByDate({day:12,month:5});
console.log(signo);