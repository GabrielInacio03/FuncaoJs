// Closure é o escopo criado quando uma função é declarada
// Esse escopo permit a função acessar e manipular variáveis externas à função

//contexto léxico em ação

const x = 'Global'

function fora(){
    const x = 'Local'
    function dentro(){
        return x
    }
    console.log(dentro())
}
fora()