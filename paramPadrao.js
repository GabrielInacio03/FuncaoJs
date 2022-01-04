// estratégia 1 para gerar valor padrão
function soma1(a, b, c){
    a = a || 1
    b = b || 1
    c = c || 1

    return a + b + c
}
console.log(soma1(2,2,1))
console.log(soma1())
console.log(soma1(0,0,0)) //0 retorna falso

// estratégia 2, 3 e 4 para gerar valor padrão
function soma2(a, b, c){
    a = a != undefined ? a : 1
    b = 1 in arguments ? b : 1 //aqui estou perguntando se dentro de arguments existe o indice 1
    c = isNaN(c) ? 1 : c //melhor escolha

    return a + b + c
}
console.log("soma2: "+ soma2(), soma2(3), soma2(0,0,0))


// -------------------------------

// Valor Padãoo do ecmaScript2015

function soma3(a = 1, b = 1, c = 1){
    return a + b + c
}
console.log("soma3: "+ soma3(), soma3(2,2,1), soma3(0,0,0))