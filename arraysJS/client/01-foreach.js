const productos = [{titulo: "Seguidor de línea", precio: 530},{titulo: "Evasor", precio: 540}];
//Se obtiene el objeto que representa a <div> en el HTML por eso se puede manipular su contenido 
const ObjDivApp = document.getElementById("app");
productos.forEach(producto => {
    ObjDivApp.innerHTML += `<li>${producto.titulo} -- ${producto.precio} </li>`//Importa que sea comilla ``
});                      