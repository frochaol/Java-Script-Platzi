// HELPERS 
function calcularMediaAritmetica(lista) {
    var resultado = 0;
    for(li of lista){
        resultado = resultado + li;
    }
    return promedioLista = resultado / lista.length;
}

function calcMediana(lista) {
    var mitad = parseInt(lista.length / 2);
    if (esPar(lista.length)) {
        mediana = calcularMediaAritmetica([lista[mitad - 1], lista[mitad]]);
    } else {
        mediana = lista[mitad];
    }
    return mediana;
}

function calcularPrecioConDescuento(precio, descuento) {
    porcentajePrecioConDescuento = 100 - descuento; 
    var precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento;
};

// SOLUCIÓN MEDIANA
var salariosPer = peru.map(
    function (person) {
        return person.salary;
    }
);

var salariosPerSorted = salariosPer.sort((a,b) => a - b);
function esPar(numero) {
    return numero % 2 === 0;
}
// MEDIANA DEL TOP 10%
var porcentaje = 10;
var spliceStart = calcularPrecioConDescuento(salariosPerSorted.length, porcentaje);
var spliceEnd = salariosPerSorted.length - spliceStart;
var salariosPerTop10 = salariosPerSorted.splice(spliceStart, spliceEnd);
var medianaTop10Per = calcMediana(salariosPerTop10);