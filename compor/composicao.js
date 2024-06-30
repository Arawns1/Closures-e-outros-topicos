const gritar = s => s.toUpperCase();
const enfatizar = s => `${s}!!!`;
const perguntar = s => `${s}?`;
const esticar = s => s.split('').reduce((frase, letra) => frase + `${letra}${letra}${letra}`, '' ).replace(/\s+/g, ' ')	


// reduce((acc, produto) => {
//     return acc + impostofn(produto.preco * produto.qtde);
// })	

const compor = (...funcoes) => {
    return function (valor) {
        return funcoes.reduce((resultado, funcao) => {
            return funcao(resultado);
        }, valor);
    }
}


const narrar = compor(esticar, perguntar);
const exagerar = compor(gritar, enfatizar);
const tudo = compor(esticar, perguntar, gritar, enfatizar);

console.log(narrar('gol! não!'))
console.log(exagerar('olha o buraco'))
console.log(tudo('Bom Dia'))