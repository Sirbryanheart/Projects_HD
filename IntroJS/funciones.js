function ejemplo(){
    return console.log("hola, soy una función");
}

ejemplo();

function esPar(n){
    if (n%2 == 0)
        return true;
};

console.log(esPar(2));

function anterior(numero){
    return --numero;
};

console.log(anterior(5));

function triple(numero){
    return numero*3;
};

console.log(triple(5));

function anteriorDelTriple(numero){
    return triple(anterior(numero))-1;
};

console.log(anteriorDelTriple(5));