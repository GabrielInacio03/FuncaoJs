let comparaComThis = function (param) {
    console.log(this === param)
}

comparaComThis(global) //true no contexto node e browser

//associação
const obj = {}
comparaComThis = comparaComThis.bind(obj)

comparaComThis(global) //false
comparaComThis(obj) //true por conta do bind

//testando com a função Arrow
let comparaComThisArrow = param => console.log(this === param)

comparaComThisArrow(global) //false
comparaComThisArrow(this)
comparaComThisArrow(module.exports)

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj) //não muda
comparaComThisArrow(module.exports)

