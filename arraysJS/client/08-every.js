const arreglo01 = [11,12,33,56,45];

let rta = true;
//Averiguar si todos son mayores a 60
for(let i = 0;i < arreglo01.length; i++){
    let condicion = arreglo01[i] < 60;
if(condicion){
rta = false;
break;
}
}

console.log("Con el ciclo FOR: ", rta);
//CON EVERY
const rta02 = arreglo01.every(item => item > 60);//LA CONC¡DICIÓN ES DIRECTA
console.log("Con Every: ", rta02);

