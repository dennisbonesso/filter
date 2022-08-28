//filtra numeros pares de um array

//função que usa filter para filtrar de acordo com a callback 
function filterPar(arr){
  return arr.filter(callback)
}

//função callback que retorna numeros pares
function callback(item){
  return item%2===0
}



