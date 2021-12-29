function calcularMediaAritmetica(lista) {
    var resultado = 0;
    for(li of lista){
        resultado = resultado + li;
    }
    
    // -- Método que realiza una suma de variables
    // var sumaLista = lista.reduce(
    //     function(valorAcumulado = 0, nuevoElemento){
    //         return valorAcumulado + nuevoElemento;
    //     }
    // );
    
    return promedioLista = resultado / lista.length;
}

