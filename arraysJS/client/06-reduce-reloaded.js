const valores = [1,2,3,4,,3,2,1,1,1,2,3,4,5,4,3];

const histograma = valores.reduce((objeto,item) => {
  if(!objeto[item]){
    objeto[item] = 1;
  }else{
      objeto[item] = objeto[item] + 1;
  }
  return objeto;  
} ,{});

console.log(histograma);