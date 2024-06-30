function thisBindExemplo(){
    console.log(this)
}

const obj = {exemplo: "exemplo"}

//bind
thisBindExemplo = thisBindExemplo.bind(obj)
thisBindExemplo()


//Parametro
function thisParameterExample(obj){
    console.log(obj)
}
thisParameterExample(obj)


const pessoa = {
    nomeCompleto: function(){
        return this.nome + ' ' + this.sobrenome;
    }
}

const pessoa1 = {
    nome: 'Paulo',
    sobrenome: 'Silva'
}

const pessoa2 = {
    nome: 'Maria',
    sobrenome: 'Silva'
}

console.log(pessoa.nomeCompleto.call(pessoa1))
console.log(pessoa.nomeCompleto.call(pessoa2))


const pessoasArr = [
    {nome: 'Paulo', sobrenome: 'Silva'},
    {nome: 'Maria', sobrenome: 'Silva'},
]

pessoasArr.forEach(item => {
    console.log(pessoa.nomeCompleto.call(item))
})


const numeros = [1, 2, 3, 4, 5]

console.log(Math.max(numeros)) // NAN, pois Math.max espera argumentos separados por vírgula

console.log(Math.max.apply(null, numeros))