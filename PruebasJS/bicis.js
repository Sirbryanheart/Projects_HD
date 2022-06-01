function noParesDeContarImparesHasta(numero){
    let y=0;
    for (let x=0;x<=numero;x++){
        if(x%2 == 1){
            y++;
        }    
    }
    return y;
}
console.log(noParesDeContarImparesHasta(10));