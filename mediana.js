

function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce(     //método para recorrer un array y utilizar sus datos en una función
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    )
    return sumaLista / lista.length;
}


const lista = [
    200,
    8000,
    300,
    500,
    6000,
    9000,
    100,
    20000,
];


const lista1 = lista.sort(
    function ordenar(a,b){
        return(a-b);
    }
)

const mitadLista1 = parseInt(lista1.length / 2);

function esPar (elementos){
    if (elementos % 2 === 0){
        return true;
    } else {
        return false;
    }
    
}

if (esPar(lista1.length)) {
    const elemento1 = lista1[mitadLista1];
    const elemento2 = lista1[mitadLista1 - 1];
    const promedioElemento1y2 = calcularMediaAritmetica([
        elemento1,
        elemento2
    ]);
    mediana = promedioElemento1y2;
} else {
    mediana = lista1[mitadLista1]; //observe que se dio un truncamiento al definir mitad lista que coincide con la posición buscada
    //
}
console.log("La mediana es " + mediana);