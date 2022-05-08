const obj01 ={
    imagen: "Axial",
    numero: 123
}

const obj02 ={
    imagen: "Axial",
    numero: 322
}

const obj03 ={
    imagen: "Coronal",
    numero:33
}

const obj04 ={
    imagen:"Sagital",
    numero:25
}

const obj05 ={
    imagen:"Axial",
    numero:29
}

const obj06 ={
    imagen:"Sagital",
    numero:39
}

const objMap01 = [obj01, obj02, obj03, obj04, obj05, obj06];

objMap01.map(item => {
    item.hospital = "Medica Sur";//Se esta modificando al objeto original se modifica la referencia en memoria 
   
});

console.log(objMap01);

const objMap02 = objMap01.map(item => {
    return {
        ...item,
        tipo: "Tomografía"
    };
});

console.log(objMap01);
console.log(objMap02);
