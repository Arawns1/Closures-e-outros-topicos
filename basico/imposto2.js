const produtos = [
    {nome: 'Notebook', preco: 2499, qtde: 10},
    {nome: 'iPad Pro', preco: 4199, qtde: 3},
]

const impostoSP = preco => preco * 1.07 + 0.12
const impostoRJ = preco => preco * 1.09 + 0.15

function calcularPrecoFinal(impostofn) {
    if (typeof impostofn !== 'function') {
        throw new Error('O primeiro argumento deve ser uma função que calcula o imposto.');
    }

    return function (produtos){
        if (!Array.isArray(produtos)) {
            throw new Error('O segundo argumento deve ser um array de produtos.');
        }

        produtos.forEach((produto, index) => {
            if (typeof produto !== 'object' || produto === null) {
                throw new Error(`O produto na posição ${index} não é um objeto válido.`);
            }
            if (typeof produto.nome !== 'string' || typeof produto.preco !== 'number' || typeof produto.qtde !== 'number') {
                throw new Error(`O produto na posição ${index} deve ter as propriedades nome (string), preco (number), e qtde (number).`);
            }
            if (produto.preco < 0 || produto.qtde < 0) {
                throw new Error(`O produto na posição ${index} tem valores negativos de preço ou quantidade.`);
            }
        });

        try {
            return produtos.reduce((acc, produto) => {
                return acc + impostofn(produto.preco * produto.qtde);
            }, 0);
        } catch (error) {
            throw new Error(`Erro ao calcular o preço final: ${error.message}`);
        }
    }
}


const valorFinalRJ = calcularPrecoFinal(impostoRJ);
const valorFinalSP = calcularPrecoFinal(impostoSP);

try {
    console.log(valorFinalRJ(produtos)); // Exemplo válido
    console.log(valorFinalSP(produtos)); // Exemplo válido
    console.log(valorFinalSP("A")); // Isso causará um erro
} catch (error) {
    console.error(error.message);
}
