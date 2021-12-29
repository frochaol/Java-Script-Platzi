var valores = [10, 15, 20, 12, 13, 10]; 
var ponderadores = [1, 1, 2, 2, 2, 4];

if (valores.length === ponderadores.length) {    
    var sumaPonderacion = 0;
    var sumaPonderados = 0;
    for (let i = 0; i < valores.length; i++) {
        sumaPonderacion = sumaPonderacion + parseInt(valores[i] * ponderadores[i]);
        sumaPonderados = sumaPonderados + ponderadores[i];
    }
    var promedioPonderado = sumaPonderacion / sumaPonderados;
} else {
    alert("No se puede realizar la ponderación");
}