
// Leia o c�digo

const numero = Number(prompt("Digite o primeiro n�mero."))
let mensagem

if (numero > 0) {
	console.log("Esse n�mero passou no teste")
	mensagem = "Essa mensagem � secreta!"
}

console.log(mensagem)

// a) O que a primeira linha est� fazendo?
 /*a primeira linha solicita ao usuario que digite um numero e em seguida,
  converte a entrada em um número, usando a função number o resultado armazenado na variavel numero

// b) Considere um usu�rio digitou o n�mero 10. Qual ser� a mensagem do terminal? E se fosse o n�mero -10?
se o usuario digitar 10, aparecerá "esse numero passou no teste", caso contrario seja o número -10, nao será exibido nenhuma mensagem no console.

// c) Haver� algum erro no console? Justifique usando os conceitos de bloco ou escopo.
terá um erro no console pq a variavel "mensagem" esta dentro do IF, ou seja, funciona apenas dentro desse bloco e quando tentar acessar  
fora do bloco, vai dar erro  pq a variavel mensagem nao acessa fora do bloco do if.*/
