// CÓDIGO CUADRADO
console.group("Cuadrado");
function perimetroCuadrado(lado) {
    return lado * 4;
}
function areaCuadrado(lado) {
    return lado * lado;
}
console.groupEnd();

// CÓDIGO TRIÁNGULO
console.group("Triangulo");
function perimetroTriangulo (lado1, lado2, base){
    return lado1 + lado2 + base;
}
function areaTriangulo (base, altura){
    return (base * altura) / 2
}
console.groupEnd();

// CÓDIGO DE CIRCULO
console.group("Circulo");

function diametroCirculo (radio) {
    return radio * 2;
}

var pi = Math.PI;
function perimetroCirculo (radio) {
    return diametroCirculo(radio) * pi;
} 

function areaCirculo(radio) {
    return (radio * radio) * pi;
} 
console.groupEnd();

// -- INTERACCIÓN
function calcularPerimetroCuadrado() {
    var input = document.getElementById("InputCuadrado");
    var value = input.value;
    var perimetro = perimetroCuadrado(value);
    alert(`El perímetro del cuadrado es: ${perimetro} cm`);
}

function calcularAreaCuadrado() {
    var input = document.getElementById("InputCuadrado");
    var value = input.value;
    var area = areaCuadrado(value);
    alert(`El área del cuadrado es: ${area} cm^2`);
}

function calcularPerimetroTriangulo() {
    var input1 = document.getElementById("InputLado1");
    var lado1 = input1.value;
    var input2 = document.getElementById("InputLado2");
    var lado2 = input2.value;
    var input3 = document.getElementById("InputBase");
    var base = input3.value;
    var perimetro = perimetroTriangulo(lado1, lado2, base);
    alert(`El perímetro del triángulo es: ${perimetro} cm`);
}

function calcularAreaTriangulo() {
    var input1 = document.getElementById("InputBase");
    var base = input1.value;
    var input2 = document.getElementById("InputAltura");
    var altura = input2.value;
    var area = areaTriangulo(base, altura);
    alert(`El área del triángulo es: ${area} cm`);
}

function calcularAlturaTriangulo() {
    var input1 = document.getElementById("InputLado1");
    var input2 = document.getElementById("InputLado2");
    var input3 = document.getElementById("InputBase");
    var base = input3.value;
    if (input1.value === input2.value) {
        var altura = (base * Math.sqrt((input1.value * input1.value) - ((base * base) / 4)))/2; 
        alert(`La altura del triangulo es: ${altura} cm`);    
    } else {
        alert("No es un triángulo isósceles");
    }
}

function calcularPerimetroCirculo() {
    var input1 = document.getElementById("InputRadio");
    var radio = input1.value;
    var perimetro = perimetroCirculo(radio);
    alert(`El perímetro del circulo es: ${perimetro} cm`);
}

function calcularAreaCirculo() {
    var input1 = document.getElementById("InputRadio");
    var radio = input1.value;
    var area = areaCirculo(radio);
    alert(`El area del circulo es: ${area} cm`);
}