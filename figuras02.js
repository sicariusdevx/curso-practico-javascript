console.group("Cuadrado");
function perimetroCuadrado(lado){
    return lado * 4;
}
function areaCuadrado(lado){
    return lado * lado;
}
console.groupEnd();

console.group("Triangulo");
function perimetroTriangulo(lado1,lado2,ladobase){
    return lado1+lado2+ladobase;
}
function areaTriangulo(base,altura){
    return (base*altura)/2;
}
console.groupEnd();

console.group("Circulo");
const PI = Math.PI;
function diametroCirculo(radio){
    return radio * 2;
} 
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
function areaCirculo(radio){
    return (radio * radio) * PI;
}
console.groupEnd();

//Interacción con figuras.html
function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const perimetro =  perimetroCuadrado(value);
    alert(perimetro);
}
function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const area =  areaCuadrado(value);
    alert(area);
}
function calcularPerimetroTriangulo(){
    const input3 = document.getElementById("inputTri_base");
    const base = input3.value;
    const input4 = document.getElementById("inputTri_lado1");
    const lado1 = input4.value;
    const input5 = document.getElementById("inputTri_lado2");
    const lado2 = input5.value;
    const perimetro =  perimetroTriangulo(lado1,lado2,base);
    alert(perimetro);
}
function calcularAreaTriangulo(){
    const input1 = document.getElementById("inputTri_base");
    const base = input1.value;
    const input2 = document.getElementById("inputTri_altura");
    const altura = input2.value;
    const area =  areaTriangulo(base,altura);
    alert(area);
}
function calcularPerimetroCirculo(){
    const input6 = document.getElementById("inputCirculo");
    const radio = input6.value;
    const perimetro = perimetroCirculo(radio);
    alert (perimetro);
}
function calcularAreaCirculo(){
    const input6 = document.getElementById("inputCirculo");
    const radio = input6.value;
    const area = areaCirculo(radio);
    alert(area);
}
