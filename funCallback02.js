const notas = [7.7, 6, 5.8, 3.6, 8.2, 10, 9.3]

//sem uso do callback
let notasBaixas1 = []
for(let i in notas){
    if(notas[i] < 7){
        notasBaixas1.push(notas[i])
    }
}
console.log(notasBaixas1)


console.log("----------------------------")

//com callback

//filter() => vai filtrar o array em cima de um determinado criterio
const notasBaixas2 = notas.filter(function (nota){
    return nota < 7
})
console.log(notasBaixas2)


console.log("----------------------------")

//callback com funcao arrow
const notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3)