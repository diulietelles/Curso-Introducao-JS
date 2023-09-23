
// exemplo 7
function compararNumeros (num1, num2) {
    let mensagem

    if (num1 > num2) {
        mensagem = "O primeiro número é MAIOR que o segundo"
    }
    else if (num1 < num2) {
        mensagem = "O primeiro número é MENOR que o segundo"
    }
    else {
        mensagem = "O primeiro número é IGUAL ao segundo"
    }

    console.log(mensagem)
}

const numero1 = Number(prompt("Digite um número"))
const numero2 = Number(prompt("Confirme o número"))

compararNumeros(numero1, numero2)
