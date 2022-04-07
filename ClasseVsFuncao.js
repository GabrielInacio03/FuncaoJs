//====== Classe
class Pessoa
{
    constructor(nome)
    {
        this.nome = nome //pública
    }

    falar(){
        console.log(`Meu nome é ${ this.nome }`)
    }
}

const p1 = new Pessoa('Gabriel')
p1.falar();
//console.log(p1.nome);

//======== Função

const pessoa = nome => { //arrow
    return{
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = pessoa("João");
p2.falar();
