function criarProduto(nome, preco)
{
    return {
        nome: nome,
        preco: preco,
        desconto: 9.99
    }
}
console.log(criarProduto('Arroz', 25.99))