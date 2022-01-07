const soma = function(x, y) {
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma){
    console.log(operacao(a, b))
}

imprimirResultado(3, 5)
imprimirResultado(3, 4, soma)
imprimirResultado(4,3,function(x, y){
    return x-y
})