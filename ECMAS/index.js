//esta función asigna 
//valores por defecto 
//a las variables name,
// age y country

function newFunction01(name, age, country){
    var name = name || 'oscar';
    var age = age || 32;
    var country = country || 'MX';
    console.log(name, age, country);
}
//ECMAS6
function newFunction02(name = "Erik", age = 29, country = "MX"){
    console.log(name, age, country);
}


//Concatenación de Strings
 let hello = "hello";
 let world = "world";
 let epicPhrase01 = hello + "     " + world;
 console.log(epicPhrase01);
//ECMAS6
 let epicPhrase02 = `${hello} ${world}`;
 console.log(epicPhrase02);

 //String con nueva linea
 let frase01 = "Hola que tal \n"
 + "esta es una nueva línea";

 //ECMAS6

 let frase02 = `Hola esta esta escrita
 con ECMAS6`;

 console.log(frase01);
 console.log(frase02);

 //Obtención de valores de
 //atributos de un objeto
 let Objeto01 = {
     "nombre" : "Erik",
     "age" : 29,
     "country" : "MX"
 }

 console.log(Objeto01.nombre, Objeto01.age, Objeto01.country);
 //ECMAS6
// deben de ser los mismos nombres
 let{nombre,age,country} = Objeto01;
 console.log(nombre,age,country);

 //Operador de propagación
 //Spread Operator

 let array01 = ["uno", "dos"];
 let array02 = ["tres", "cuatro", "cinco"];

 let array03 = ["doce", ...array01, ...array02];

 console.log(array03);

 //El alcance de let es local
 //El alcance de var es global
 //const es para declarar constantes
 //en caso de querer cambiar su valor marca error


 //--------------------------------------------------------------------
 //--------------------------------------------------------------------
 //--------------------------------------------------------------------

 //Para asignar valores a los atributos de un objeto

 let year = 1994;
 let disco = "MTV UNPLUGGED";
//ECMAS5
 Objeto02 = {year: year, disco : disco};

 console.log(Objeto02);

 //ECMAS6
Objeto03 = {year,disco};//se crean los atributos con los mismos nombres y valores

console.log(Objeto03);


//ARROW FUNCTIONS
const nombres = [
    {nombre: "Erik", edad:29},
    {nombre: "Mayrani", edad: 23}
];

//para iterar se emplea la función map()

let listaDeNombres01 = nombres.map(function (elemento){
    console.log(elemento.nombre);
});


let listaDeNombres02 = nombres.map(elemento => console.log(elemento.nombre));

let listaDeNombres03 = (elemento01, elemento02, elemento03) => {
    console.log(elemento01);
    console.log(elemento02);
    console.log(elemento03);
}

//PROMESAS

const promesa = () => {
    return new Promise((resolve,reject) =>{
        if(false){
            resolve("Resuelto");
        }else{
            reject("Rechazado");
        }
    });



}

promesa().then(response => console.log(response)).catch(response => console.log(response));

//CLASES

class clase01{
    constructor(){
        this.A = 0;
        this.B = 0;
    }
// se declara al método suma
suma(A,B){
    this.A = A;
    this.B = B;
    return this.A + this.B;
}
    
}

//Se crea el objeto de la clase clase01

const objetoDeClase =  new clase01();
console.log(objetoDeClase.suma(2,5));


//Se puede separar código de javaScript por módulos

//import {constanteModulo} from './modulo';

//console.log(constanteModulo());

//Función GNERADOR

function* generadorDeFrase(){
    if(true){
        yield "HOLA";
    }
    if(true){
        yield "Mayrani";

    }
    if(true){
        yield "Ojalá estuvieras aquí";
    }
}

//Se van ejecutando en orden por cada invocación de la función generador
const generador = generadorDeFrase();
console.log(generador.next().value);
console.log(generador.next().value);
console.log(generador.next().value);
console.log(generador.next().value);



//ECMAS7------------------------------------------------------------------------------------------------

//En ECMAS7 se agrega la función includes() que devuelve true o false

let numbers = [1,2,3,4,5,7,8];

if(numbers.includes(6)){
    console.log("Se incluye en el arreglo al número 7");
}else{
    console.log("No está incluido");
}


//También en ECMAS7 se agrega la opción para elevar a una potencia

console.log(4**2);

//ECMAS 8--------------------------------------------------------------------------

//Se incluye Asinc y Await

//Object.entries da los valores de un objeto en un arreglo o matriz

const datos = {
    vocalista: "Kurt Cobain",
    bajista: "Chris Novoselic",
    baterista: "Dave Ghrol",

};

const matrizObjeto = Object.entries(datos);
console.log(matrizObjeto);//Esto devuelve una matriz
console.log(matrizObjeto.length);

//Aquí se obtiene un arreglo de Strings con los valores de los parámetros del Objeto
const data = {
    vocalista: "Kurt Cobain",
    bajista: "Chris Novoselic",
    baterista: "Dave Ghrol",//Se utiliza trailing comas

}

const matrizValues =  Object.values(data);
console.log(matrizValues);
console.log(matrizValues.length); 

//Padding, sirve para agregar antes o despues elementos a un String

const cadena = "Hello";//Hello tiene 5 letras + 2 = 7
console.log(cadena.padStart(7,"12"));
console.log(cadena.padEnd(10,"12345"));//Hello + 5 = 10


//Se maneja Async y Await es para hacer que se ejecute en otro tiempo una 

const funcionPromesa = () => {
    return new Promise((resolve,reject) => {
      (true) ? setTimeout(() => resolve("HOLA RESOLVE"), 5000) : reject(new Error("Test Error"));
    });
}

const funcionAwait = async() => {
    const hola = funcionPromesa();
    console.log(hola);
} 

funcionAwait();

const otraFuncionAwait = async() => {
    try {
        const hola = await funcionPromesa();
        console.log(hola);
    } catch (error) {
        console.log(error);
    }
}

otraFuncionAwait();


//ECMAS9 Junio 2018--------------------------------------------------------------------------------------------------

//Se agrega el spread operator u operador de reposo

const objeto04 = {
nombre: "kurtcobain",
edad: 27,
ocupacion: "vocalista guitarrista",
};

let {ocupacion, ...all} = objeto04; //sirve para crear un nuevo objeto con el resto de datos del objeto sin ocupacion

console.log(nombre, all);
console.log(all);

const objeto05 = {
    ...objeto04,
    muerte: 27,
}

console.log(objeto05);


//Se agrega finally a las promesas

const promesa01 = () => {
    return new Promise((resolve,reject) =>{
        (true) ? setTimeout(() => resolve("HOLA RESOLVE"), 5000) : reject(new Error("Test Error"));
    });



}

promesa01().then(response => console.log(response)).catch(response => console.log(response)).finally(() => console.log("SE ACABO"));


//regex se mejora en ECMAS9

const regeXData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regeXData.exec("2013-05-17");
const anio = match[1];
const mes = match[2];
const dia = match[3];

console.log(anio, mes, dia);


//ECMAS10 Junio 2019-----------------------------------------------------------------------------------------------------------------

//Se incorpora la funcion flat que sirve para aplanar o realizar la proyección de una matriz

const arreglo = [1,2,3, [1,2,3, [1,2,3]]];
const arregloPlano01 = arreglo.flat(1);
const arregloPlano02 = arreglo.flat(2);

console.log(arregloPlano01);
console.log(arregloPlano02);

//Se incorpora la función flapMap que sirve para mapear cada elemento en una operación

let arreglo02 = [1,2,3,4,5,6,7,8,9,10];

console.log(arreglo02.flatMap(valor => [valor, valor * 2]));

//Se incluye la opción de recortar Strings con la función trimStart y trimEnd para quitar espacios antes y despuéds de un String

const string01 = "        HOLA";
console.log(string01.trimStart());
const string02 = "HOLA       ";
console.log(string02.trimEnd());

//También en ECMAS10 se hace opcional poner dentro del catch error en el argumento de catch 

const otraFuncionAwait01 = async() => {
    try {
        const hola = await funcionPromesa();
        console.log(hola, "Erik");
    } catch {//antes catch(error)
        console.log(error);
    }
}

otraFuncionAwait01();


//Se crea un objeto a partir de un arreglo

let entries = [["name","Fernando"],["age", 30]];
console.log(Object.fromEntries(entries));

//Es posible ver la descripcion de un objeto del tipo simbol

let simbolo = `ESTA ES UNA DESCRIPCIÓN`;
let symbolo = Symbol(simbolo);
console.log(symbolo.description);


//ECMAS11 en Junio 2020 ---------------------------

//Dynamic import

const boton =  document.getElementById("button");

//boton.addEventListener("click", async function(){
    //const module = await import("./file.js");
    //module.helloW();
//});


//Se incluye big number más grande que 2^53

const aBigNumber = 9007199254740991n;
console.log(aBigNumber);
const otroNumero = BigInt(9007199254740991);
console.log(otroNumero);

//Se da la cualidad a 
//promise allSettled
//Da una promesa que se ejecuta 
//cuando todas las demás se han ejecutado
//mostrando un objeto con los response de cada promesa

const promise1 = new Promise((resolve,reject) => reject("reject"));
const promise2 = new Promise((resolve,reject) => resolve("resolve"));
const promise3 = new Promise((resolve,reject) => resolve("resolve 1"));

Promise.allSettled([promise1, promise2, promise3])
    .then(response => console.log(response));


//Se puede acceder a la consola desde el worker
console.log(window);
console.log(globalThis);

//Es posible asignar valores si la variable es null únicamente
//Nullish coalescing operator (??)
const fooo = null ?? 'default string';
console.log(fooo);

//Se incorpora también opcional chaining



const user = {};
console.log(user?.profile?.email);

if(user?.profile?.email) {//nos permite trabajar con un atributo
    console.log('email');//que no existe sin romper la aplicación
} else {//sino existe devuelve undefined
    console.log('emaifail');

}


//ECMAS11-------------------------------------------------

// 🧯 Replace

const string = "JavaScript es maravilloso, con JavaScript puedo crear el futuro de la web.";
const replacedString = string.replace("JavaScript", "Python");
console.log(replacedString);

//// Output: Python es maravilloso, con JavaScript puedo crear el futuro de la web.

const replacedString2 = string.replaceAll("JavaScript", "Python");
console.log(replacedString2);

//// Output: Python es maravilloso, con Python puedo crear el futuro de la web.

// 🔒 Metodos privados
class Message {
    #show(val){ // Con el # convertimos al método en privado
        console.log(val);
    };
};

//const message = new Message();
//message.show('Hola!');

//  👽 Promise Any devuelve el primer valor que se resuelva

const promise01 = new Promise((resolve, reject) => reject("1"));
const promise02 = new Promise((resolve, reject) => resolve("2"));
const promise03 = new Promise((resolve, reject) => resolve("3"));

Promise.any([promise01, promise02, promise03])
    .then(response => console.log(response));


//  🦴 WeakRef(element); //Referencia débil a un objeto
//evita que el garbage collector se lo lleve

class AnyClass {
    constructor(element){
        this.ref = new WeakRef(element);
    }
    //{...}
}

// 🧪 Nuevos operadores lógicos

let isTru = true;
let isFals = false;
console.log(isTru &&= isFals);//asignación de y lógica

let isTr = true;
let isFal = false;
console.log(isTr ||= isFal);

let isTrue = undefined;
let isFalse = false;
console.log(isTrue ??= isFalse);