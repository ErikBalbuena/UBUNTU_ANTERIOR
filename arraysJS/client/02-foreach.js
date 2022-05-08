
/*CAPITULO 2 Arrays*/

const letras = ["a", "b", "c", "d"];

//Para recorrer sin foreach solo con un ciclo for

for(let i = 0; i < letras.length; i++){
let elemento = letras[i];
console.log(elemento);
}

//Lo mismo pero con foreach

letras.forEach(item => console.log(item));
