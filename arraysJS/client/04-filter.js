const guitar = ["Mastil", "Caja", "Puente", "Cuerdas"];

//para filtrar elementos 
const newGuitar = [];
for(let i = 0; i < guitar.length; i++){
if(guitar[i].length < 5){
newGuitar.push(guitar[i]);
}
}

console.log(guitar);
console.log(newGuitar);

//Empleando filter, filter es inmutable

const newGuitar02 = guitar.filter(item => item.length < 5);//La condición es true para ser parte del nuevo array
console.log("CON FILTER",newGuitar02);

//Haciendo una busqueda

const search = (query) => {
    return guitar.filter(item => item.includes(query));
}

console.log(search("a"));


