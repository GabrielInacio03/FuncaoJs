//formas de se declarar função

//declaration - posso chamar antes da funcao antes de declarará, pois o interpretador do javascript carrega as funçoes do arquivo e preparadas para a execução
function soma(x, y){
    return x+y
}

//expression
const sub = function(x,y){
    return x-y
}

//named function expression
const mult = function mult(x,y){
    return x*y
}
