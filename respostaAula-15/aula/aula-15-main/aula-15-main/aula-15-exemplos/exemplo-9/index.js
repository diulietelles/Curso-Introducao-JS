
// exemplo 9
function verificarMatricula(diploma, idade, matricula) {
    let mensagem

    if (diploma === true && idade >= 18 && matricula === false) {
        mensagem = "Usuário pode se matricular"
    }
    else {
        mensagem = "Usuário não pode se matricular"
    }

    return mensagem
}

function converterResposta(resposta) {
    let respostaFormatada = resposta.toLowerCase()

    if (respostaFormatada === "sim" || respostaFormatada === "s") {
        return true
    }
    else {
        return false
    }
}


let ensinoMedio = prompt("Você está formado no ensino médio?")
let idade = prompt("Qual é a sua idade?")
let outroCurso = prompt("Você está matriculado em outra faculdade?")

ensinoMedio = converterResposta(ensinoMedio)
idade = Number(idade)
outroCurso = converterResposta(outroCurso)


let matricula = verificarMatricula(ensinoMedio, idade, outroCurso)

console.log(matricula)
