const lista1 = [
    3,
    7,
    2,
    5,
    2,
    6,
    8,
    1,
]


function calcularModa(lista1){
    const lista1Count = {};

    lista1.map(             //map permite recorrer el array. Con ello se cuentan los elementos y se guardan en el objeto lista1Count
        function (elemento){
            if (lista1Count[elemento]){
                lista1Count[elemento] += 1;
            } else {
                lista1Count[elemento] = 1;
            }
        }
    );

    const lista1Array = Object.entries(lista1Count).sort(
        function (elementoA,elementoB){
            return elementoA[1] - elementoB[1];
        }
    );

    const moda = lista1Array[lista1Array.length - 1];
    console.log("Moda del arreglo es: ",moda);

}