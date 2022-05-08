//Suma de elementos con for

const totales = [1,2,3,4,5,6,7,8,9,10];

let total = 0;

for(let i = 0; i < totales.length;i++){
total += totales[i];
}

console.log(total);

//Al hacer esto mismo con reduce

const suma =  totales.reduce((acumulado, item) => acumulado + item, 0 );//0 es el valor inicial de acumulado 

console.log("suma", suma);