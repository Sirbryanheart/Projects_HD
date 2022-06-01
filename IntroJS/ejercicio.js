/*function menciona (texto, palabra){
    let buscada = "";
    for(let x=texto.indexOf(palabra); x<(palabra.length); x++){
        buscada += texto[x];
    }
    console.log(buscada);
    if (buscada == palabra){
        return true;
    }else{
        return false;
    }
}*/

function menciona(texto, palabra){
    let txtJs = JSON.stringify(texto);
    if (txtJs.includes(palabra)){
        return true
    }else{
        return false
    }
}

console.log(menciona("Existen muchos lenguajes de programación y JavaScript es uno de ellos","programación"));