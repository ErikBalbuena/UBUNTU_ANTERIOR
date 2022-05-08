const lista = [
    100,200,300,400,600
];

function paridad(numero){
if(numero%2 === 0){
return true;
}else{
    return false;
}

}

const mitadLista = lista.length/2;
let mediana;

if(paridad(lista.length)){
mediana = (lista[mitadLista] + lista[mitadLista - 1])/2;
}else{
mediana = lista[parseInt(mitadLista)];
}