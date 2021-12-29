var valores = [
    700, 200, 200, 400, 500, 100, 10000
];
valores.sort(function(a, b) {
    return a - b;
  });

var mitad = parseInt(valores.length / 2);
function esPar(numero) {
    if (numero % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

var mediana;
if (esPar(valores.length)) {
    mediana = valores[mitad - 1] + valores[mitad];
} else {
    mediana = valores[mitad];
}