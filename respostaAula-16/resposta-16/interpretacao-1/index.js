
// Leia o c�digo

const respostaDoUsuario = prompt("Digite o n�mero que voc� quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
	console.log("Passou no teste.")
}
else {
	console.log("N�o passou no teste.")
}

// a) Explique o que o c�digo faz. Qual o teste que ele realiza?

 /*o código pede ao usurario que insira  um numero e ele armazena a resposta em "respostaUsuario", 
 depois ele converte a resposta para um numero e armazena em "numero", o codido verifica se o numero 2 é divisivel por 2, 
 ou seja, se é par, usando o perador %(resto da divisao) SE o numero for par, ele imprime "passou no teste" no console, 
 SENAO, imprime "Não passou no teste"


// b) Para que tipos de n�meros ele imprime no console "Passou no teste"?

 O codigo imprime no console os numeros que podem ser divididos por 2, ou seja, numeros pares, sem deixar resto.

// c) Para que tipos de n�meros a mensagem � "N�o passou no teste"?

/* a mensagem "Não passou no teste" é impressa no console para numeros impares, numeros que não podem ser divididos por 2, sem deixar um resto.*/
