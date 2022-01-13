// Contexto Léxico => é o contexto no qual a função foi escrita

const valor = 'Global'

function minhaFuncao(){
    console.log(valor)
}

function exec(){
    const valor = 'Local'
    minhaFuncao()
}
exec()