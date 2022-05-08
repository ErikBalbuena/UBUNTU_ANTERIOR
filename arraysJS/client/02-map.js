console.log("Hola Mundo");

const arreglo01 = ["Erik", "Balbuena", "Rogel"];

const arreglo02 = [];

for(let i = 0; i < arreglo01.length; i++){
arreglo02.push(arreglo01[i] + " Guapo");//push es un método muteable del arreglo02

}

console.log(arreglo01);
console.log(arreglo02);


//Haciendolo con map(elemento );
//map genera un nuevo array con la modificación sin modificar el arreglo es decir es inmutable

const arregloMap = arreglo01.map(item => item + " GUAPO");
console.log(arregloMap);

