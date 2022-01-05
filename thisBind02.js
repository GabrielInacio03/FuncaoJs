function Pessoa() {
    this.idade = 0

    /**
     * A função setInterval executa uma função ou instrução varias vezes em um determinado intervalor de tempo.
     */

    const self = this
    setInterval(function(){
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000)
}

new Pessoa