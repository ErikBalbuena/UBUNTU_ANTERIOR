const arreglo01 = [1,10,20,30,40,50];

let rta = undefined;

for(let i = 0; i < arreglo01.length; i++){
if(arreglo01[i] === 10){
rta = arreglo01[i];
break;
}

}

console.log("CON FOR: ",rta);

//Se hace ahora con find, DEVUELVE EL ELEMENTO QUE COINCIDE CON LA CONDICIÓN

const rta02 = arreglo01.find(item => item === 10);

console.log("CON FIND: ", rta02);

const rta03 = arreglo01.findIndex(item => item === 10);

console.log("EN LA POSICIÓN: ", rta03);