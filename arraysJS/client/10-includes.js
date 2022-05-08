const arreglo01 = ["a","b","c"];

let rta01 = false;

for(let i = 0; i < arreglo01.length; i++){
if(arreglo01[i] === "a"){
rta01 = true;
break;
}
}

console.log("CON FOR: ", rta01);

//AHORA LO HACEMOS CON INCLUDES

const rta02 = arreglo01.includes( "a");//Unicamente se da lo que se busca 

console.log("CON INCLUDES: ", rta02);