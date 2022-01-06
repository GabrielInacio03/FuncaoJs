/**
 * A função Arrow tem o objetivo de ser mais curta, sintaxe reduzida e this associado ao contexto em que a função foi escrita.
 */
let dobro = function (a){
    return 2 * a
}

//função arrow é anonima
dobro = (a) => {
    return 2 * a
}

//forma reduzida
dobro = a => 2 * a //return implicito
console.log(dobro(Math.PI))

let ola = function(){
    return 'Olá'
}
ola = () => 'Olá'
ola = _ => 'Olá'
console.log(ola())