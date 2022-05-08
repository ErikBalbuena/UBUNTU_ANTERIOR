const lista = [
    100, 200, 300, 400
];

function sumaListaFuncion(lista){
    let sumalista = 0;

for(let  i = 0; i < lista.length; i++ ){
sumalista = sumalista + lista[i];
}

var promedio = sumalista/lista.length;
return promedio;

}

//Empleando el método reduce del objeto array

const sumaLista = lista.reduce(
    function (acumulado = 0, elemento){
        return acumulado + elemento;

    }
);