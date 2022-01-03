//Função em JS é First-Classe Object
//trata a função como um dado
//js => multiparadigma


//forma literal
function fun1() { }

//Armazenar em uma variável
const fun2 = function() { } //funcao anonima

//Armazenar em um array
const array = [function(a,b){return a + b}, fun1, fun2]

console.log(array[0](2,3))

//Armazenar em um atributo de objeto
const obj = {}
obj.falar = function() { return 'falando...' }

console.log(obj.falar())

//Passar função com parametro
function run(fun){
    fun()
}
run(function(){ console.log('executando')})

// Uma função pode retornar/conter uma função

function soma(a,b){
    return function (c){
        console.log(a+b+c)
    }
}
soma(2, 3)(4)
const cincoMais = soma(2, 3)
cincoMais(5)