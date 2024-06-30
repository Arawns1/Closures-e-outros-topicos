// Imperativo (Como) vs Declarativo (O que)

const alunos = [
    { nome: 'Gabriel', nota: 9.8, mensalidadeEmDia: false },
    { nome: 'Ana', nota: 6.2, mensalidadeEmDia: true },
    { nome: 'Pedro', nota: 6.8, mensalidadeEmDia: true },
    { nome: 'Paulo', nota: 5.2, mensalidadeEmDia: true },
]

// Imperativo
function alunosAprovadosImp(alunos){
    const aprovados = []
    for (let i = 0; i < alunos.length; i++){
        if (alunos[i].nota >= 7){ // Lógica do negócio
            aprovados.push(alunos[i])
        }
    }
    return aprovados
}

//console.log(alunosAprovadosImp(alunos))


// Declarativo
const estaAprovado = aluno => aluno.nota >= 7
const alunosAprovadosDec = alunos => alunos.filter(estaAprovado)
//console.log(alunosAprovadosDec(alunos))


function Alunos(alunosArr) {
    
    if(!Array.isArray(alunosArr)){
        throw new Error('O argumento deve ser um array de alunos.')
    }

    let _alunos = alunosArr;

    function estaAprovado(media) {
        if(typeof media !== 'number'){
            throw new Error('A média deve ser um número.')
        }
        _alunos = _alunos.filter(aluno => aluno.nota >= media)
        return this;
    }

    function estaComMensalidadeEmDia(){
        _alunos = _alunos.filter(aluno => aluno.mensalidadeEmDia)
        return this;
    }

    function temAMaiorNota() {
        const maiorNota = Math.max(..._alunos.map(aluno => aluno.nota));
        _alunos = _alunos.filter(aluno => aluno.nota === maiorNota);
        return this;
    }
    function getAlunos() {
        return _alunos;
    }
   

    return {
        estaAprovado,
        estaComMensalidadeEmDia,
        temAMaiorNota,
        getAlunos
    }
}

const alunosObj = Alunos(alunos)

console.log(alunosObj.estaComMensalidadeEmDia().estaAprovado(6).temAMaiorNota().getAlunos())