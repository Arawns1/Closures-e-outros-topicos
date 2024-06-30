const produtos = [
    {nome: 'Notebook', preco: 2499, qtde: 10},
    {nome: 'iPad Pro', preco: 4199, qtde: 3},
]

const impostoSP = preco => preco * 1.07 + 0.12
const impostoRJ = preco => preco * 1.09 + 0.15

function calcularPrecoFinal(impostofn, produtos) {
    return produtos.reduce((acc, produto) => {
        return acc + impostofn(produto.preco * produto.qtde);
    }, 0);
}

console.log(calcularPrecoFinal(impostoSP, produtos)); // Exemplo válido
