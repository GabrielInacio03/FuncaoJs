/**
 * CallBack => passar uma função para outra função e como determinado evento acontecer essa função será disparada
 */

const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice ) {
    console.log(`${indice + 1}. ${nome}`)
}

//para cade elemento que ele encontrar do array vai chamar de volta a funcao imprimir

fabricantes.forEach(imprimir)
console.log("--------------------------")
fabricantes.forEach(function (fabricante){
    console.log(fabricante)
})
console.log("--------------------------")
fabricantes.forEach(fabricante => console.log(fabricante))