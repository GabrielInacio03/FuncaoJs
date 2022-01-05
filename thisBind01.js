//this apontando para o objeto pessoa
const pessoa = {
    saudacao: 'Good Morning',
    falar() {
        console.log(this.saudacao)        
    }
}

pessoa.falar()

//this apontando para window
//const falar = pessoa.falar
//falar() //conflito entre funcional e OO

//usando o bind

//passa um objeto no qual será resolvido para o objeto
const falarDePessoa = pessoa.falar.bind(pessoa)

falarDePessoa()
