var lista1Count = {};
function calcularModa(lista) {
    // CUENTO CUANTOS ELEMENTOS REPETIDOS EXISTEN 
    lista.map(
        function (elemento) {
            if (lista1Count[elemento]) {
                lista1Count[elemento] = lista1Count[elemento] + 1;    
            } else {
                lista1Count[elemento] = 1;
            }        
        }
    );

    // CONVIERTO UN OBJETO EN UN ARRAY CON Object.entries 
    var lista1Array = Object.entries(lista1Count);  // -- se puede enviar el objeto que se quiere convertir en array
    // ORDENO EL ARRAY POR EL SEGUNDO VALOR QUE CONTIENE EL NÚMERO DE REPETICIONES
    lista1Array.sort(
        function (valorAcumulado, nuevoValor) {
            return valorAcumulado[1] - nuevoValor[1];
        }
    );
    // OBTENGO LA MODA 
    return moda = lista1Array[lista1Array.length - 1]; 
}